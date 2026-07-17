import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import DevicePayload from '@/lib/models/DevicePayload';
import { fetchChirpStack } from '@/lib/chirpstack';

interface DeviceUpdateData {
  tenantId: string;
  applicationId?: string;
  lastSeenAt: Date;
  rssi?: number;
  snr?: number;
  valveState?: 'open' | 'closed';
  batteryMv?: number;
  cableFault?: boolean;
  lastTimeSyncAt?: Date;          
  syncedIrrigationSchedule?: any; 
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.WEBHOOK_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    if (req.nextUrl.searchParams.get('event') !== 'up' && !body.deviceInfo) {
      return NextResponse.json({ status: 'ignored non-uplink event' });
    }

    const devEui = body.deviceInfo.devEui;
    const payload = body.object || {};
    const rxInfo = body.rxInfo?.[0] || {};

    const updateData: DeviceUpdateData = {
      tenantId: body.deviceInfo.tenantId,
      applicationId: body.deviceInfo.applicationId,
      lastSeenAt: new Date()
    };

    // Standard Telemetry
    if (rxInfo.rssi !== undefined) updateData.rssi = rxInfo.rssi;
    if (rxInfo.snr !== undefined) updateData.snr = rxInfo.snr;
    if (payload.Actuator === 1) updateData.valveState = 'open';
    else if (payload.Actuator === 0) updateData.valveState = 'closed';
    if (payload.Battery !== undefined) updateData.batteryMv = payload.Battery;
    if (payload.Cable !== undefined) updateData.cableFault = payload.Cable === 0;

    await connectToDatabase();

    // Catch Time Sync Confirmation (FPort 13)
    if (payload.Ack_Port === 13 && payload.Ack_Value === 1) {
      updateData.lastTimeSyncAt = new Date();
    }

    // Catch Schedule Confirmation (FPort 25) — legacy ack path, kept for compatibility
    // The device doesn't echo the schedule back, so we copy what we have in the DB as "confirmed"
    if (payload.Ack_Port === 25 && payload.Ack_Value === 1) {
      const existingDoc = await DevicePayload.findOne({ devEui });
      if (existingDoc && existingDoc.irrigationSchedule) {
        updateData.syncedIrrigationSchedule = existingDoc.irrigationSchedule;
      }
    }

    // Sync-on-Uplink: on every uplink, check for a pending schedule and
    // push it into the device's downlink queue while it's awake (Class A window).
    const deviceDoc = await DevicePayload.findOne({ devEui });
    if (deviceDoc?.pendingSchedule) {
      try {
        await fetchChirpStack(`/api/devices/${devEui}/queue`, {
          method: 'POST',
          body: JSON.stringify({
            queueItem: {
              devEui,
              confirmed: true,
              f_port: 25,
              data: Buffer.from(deviceDoc.pendingSchedule, 'hex').toString('base64'),
            },
          }),
        });

        // Move pending -> synced now that the queue push succeeded
        updateData.syncedIrrigationSchedule = deviceDoc.irrigationSchedule;
        await DevicePayload.findOneAndUpdate(
          { devEui },
          { $unset: { pendingSchedule: '' } }
        );
      } catch (pushErr: any) {
  console.error(`ChirpStack queue push failed for ${devEui}:`, pushErr);
  return NextResponse.json(
    {
      success: false,
      stage: 'chirpstack-queue',
      error: pushErr?.message || String(pushErr),
    },
    { status: 500 }
  );
}
    }

    await DevicePayload.findOneAndUpdate(
      { devEui },
      { $set: updateData }, 
      { upsert: true, returnDocument: 'after' }
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}