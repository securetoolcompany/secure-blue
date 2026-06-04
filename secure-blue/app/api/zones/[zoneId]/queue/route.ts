import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth'; 
import { fetchChirpStack } from '@/lib/chirpstack';
import { connectToDatabase } from '@/lib/mongodb';
import Zone from '@/lib/models/Zone';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ zoneId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { zoneId } = await params;
    const body = await req.json();
    const { fPort, hexData } = body;

    if (!fPort || !hexData) return NextResponse.json({ error: 'Missing port or payload' }, { status: 400 });

    // 1. Fetch the Zone to get the array of EUIs
    await connectToDatabase();
    const zone = await Zone.findOne({ _id: zoneId, tenantId: session.user.tenantId });

    if (!zone || !zone.devices || zone.devices.length === 0) {
      return NextResponse.json({ error: 'Zone is empty or not found' }, { status: 404 });
    }

    const base64Data = Buffer.from(hexData, 'hex').toString('base64');

    // 2. The Multiplier: Fire the ChirpStack queue POST request for every device in the zone
    // We use Promise.allSettled so if one offline device fails, it doesn't stop the rest from executing
    const promises = zone.devices.map((devEui: string) => 
      fetchChirpStack(`/api/devices/${devEui}/queue`, {
        method: 'POST',
        body: JSON.stringify({
          queueItem: {
            confirmed: false, 
            fPort: fPort,
            data: base64Data
          }
        })
      })
    );

    await Promise.allSettled(promises);

    return NextResponse.json({ success: true, count: zone.devices.length });
  } catch (error) {
    console.error('Zone Queue Error:', error);
    return NextResponse.json({ error: 'Failed to enqueue zone commands' }, { status: 500 });
  }
}