import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Device from '@/lib/models/DevicePayload';
import { encodeSchedulerPayload } from '@/lib/strega-codec';
import { fetchChirpStack } from '@/lib/chirpstack';

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

    let queueResult: {
      queued: boolean;
      error?: string;
      response?: unknown;
    } = {
      queued: false,
    };

    if (pendingScheduleHex) {
      try {
        const base64Data = Buffer.from(pendingScheduleHex, 'hex').toString('base64');

        const chirpstackRes = await fetchChirpStack(`/api/devices/${devEui}/queue`, {
          method: 'POST',
          body: JSON.stringify({
            queueItem: {
              confirmed: false,
              f_Port: 25,
              data: base64Data,
            },
          }),
        });

        queueResult = {
          queued: true,
          response: chirpstackRes,
        };
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