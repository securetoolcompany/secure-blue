import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import DevicePayload from '@/lib/models/DevicePayload';

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

    // 1. Grab DevEUI AND Tenant info from ChirpStack's payload
    const devEui = body.deviceInfo.devEui;
    const tenantId = body.deviceInfo.tenantId; 
    const applicationId = body.deviceInfo.applicationId; 
    
    const payload = body.object;
    
    let valveState = 'unknown';
    if (payload?.Actuator === 1) valveState = 'open';
    else if (payload?.Actuator === 0) valveState = 'closed';

    const batteryMv = payload?.Battery || null;
    const cableFault = payload?.Cable === 0;
    const rxInfo = body.rxInfo?.[0] || {};

    // 2. Save it to your new devicepayloads collection
    await connectToDatabase();
    await DevicePayload.findOneAndUpdate(
      { devEui },
      { 
        tenantId,        // <-- Save the Tenant ID
        applicationId,   // <-- Save the App ID
        valveState,
        batteryMv,
        cableFault,
        rssi: rxInfo.rssi || null,
        snr: rxInfo.snr || null,
        lastSeenAt: new Date()
      },
      { upsert: true, returnDocument: 'after' }
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}