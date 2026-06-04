import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth'; 
import { fetchChirpStack } from '@/lib/chirpstack';

// --- 1. GET THE QUEUE (For your SWR polling) ---
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { devEui } = await params;
    
    // Fetch queue from ChirpStack v4
    const res = await fetchChirpStack(`/api/devices/${devEui}/queue`);
    
    return NextResponse.json({ queue: res.queueItems || [] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch queue' }, { status: 500 });
  }
}

// --- 2. ADD TO QUEUE (For your Open/Close buttons) ---
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { devEui } = await params;
    const body = await req.json();
    const { fPort, hexData } = body;

    if (!fPort || !hexData) return NextResponse.json({ error: 'Missing data' }, { status: 400 });

    const base64Data = Buffer.from(hexData, 'hex').toString('base64');

    await fetchChirpStack(`/api/devices/${devEui}/queue`, {
      method: 'POST',
      body: JSON.stringify({
        queueItem: {
          confirmed: false, 
          fPort: fPort,
          data: base64Data
        }
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to enqueue' }, { status: 500 });
  }
}

// --- 3. FLUSH THE QUEUE (For your Trash icon button) ---
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { devEui } = await params;

    await fetchChirpStack(`/api/devices/${devEui}/queue`, {
      method: 'DELETE'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to flush queue' }, { status: 500 });
  }
}