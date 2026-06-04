import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Device from '@/lib/models/DevicePayload';

export async function PATCH(req: Request, { params }: { params: Promise<{ devEui: string }> }) {
  try {
    const { devEui } = await params;
    const body = await req.json();
    
    await connectToDatabase();
    
    const updatedDevice = await Device.findOneAndUpdate(
      { devEui },
      { $set: body },
      { new: true }
    );

    if (!updatedDevice) return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    return NextResponse.json({ success: true, device: updatedDevice });
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update device' }, { status: 500 });
  }
}