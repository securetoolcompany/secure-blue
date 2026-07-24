import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Device from '@/lib/models/DevicePayload';
import { encodeSchedulerPayload } from '@/lib/strega-codec';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const { devEui } = await params;
    const body = await req.json();

    await connectToDatabase();

    const updatePayload: Record<string, unknown> = { ...body };
    let pendingScheduleHex: string | null = null;

    if (body.irrigationSchedule) {
      const hexPayload = encodeSchedulerPayload(
        body.irrigationDays ?? [],
        body.irrigationSchedule
      );

      pendingScheduleHex = hexPayload;
      updatePayload.pendingSchedule = hexPayload;
    }

    const updatedDevice = await Device.findOneAndUpdate(
      { devEui },
      { $set: updatePayload },
      { new: true }
    );

    if (!updatedDevice) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    let queueResult: { queued: boolean; status?: number; error?: string } = {
      queued: false,
    };

    if (pendingScheduleHex) {
      try {
        const origin =
          process.env.NEXT_PUBLIC_APP_URL ||
          process.env.APP_URL ||
          new URL(req.url).origin;

        const queueRes = await fetch(
          `${origin}/api/chirpstack/devices/${devEui}/queue`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fPort: 25,            // STREGA scheduler configuration port
              hexData: pendingScheduleHex,
            }),
            cache: 'no-store',
          }
        );

        if (!queueRes.ok) {
          const queueError = await queueRes.text().catch(() => '');
          queueResult = {
            queued: false,
            status: queueRes.status,
            error: queueError || 'Failed to enqueue schedule downlink',
          };
        } else {
          queueResult = { queued: true };
        }
      } catch (queueError) {
        queueResult = {
          queued: false,
          error:
            queueError instanceof Error
              ? queueError.message
              : 'Failed to enqueue schedule downlink',
        };
      }
    }

    return NextResponse.json({
      success: true,
      device: updatedDevice,
      pendingSchedule: pendingScheduleHex,
      queue: queueResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to update device',
      },
      { status: 500 }
    );
  }
}