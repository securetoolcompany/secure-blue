import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Device from '@/lib/models/DevicePayload';
import { encodeSchedulerPayload } from '@/lib/strega-codec';

export async function PATCH(req: Request, { params }: { params: Promise<{ devEui: string }> }) {
  try {
    const { devEui } = await params;
    const body = await req.json();
    
    await connectToDatabase();

    const updatePayload: Record<string, unknown> = { ...body };

    // If a new irrigation schedule is being saved, encode it and stage it
    // as pending until the device's next uplink check-in (Class A constraint).
    if (body.irrigationSchedule) {
      const hexPayload = encodeSchedulerPayload(
        body.irrigationDays ?? [],
        body.irrigationSchedule
      );
      updatePayload.pendingSchedule = hexPayload;
    }
    
    const updatedDevice = await Device.findOneAndUpdate(
      { devEui },
      { $set: updatePayload },
      { new: true }
    );

    if (!updatedDevice) return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    return NextResponse.json({ success: true, device: updatedDevice });
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update device' }, { status: 500 });
  }
}