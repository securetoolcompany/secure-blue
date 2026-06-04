import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth'; 
import { connectToDatabase } from '@/lib/mongodb';
import Zone from '@/lib/models/Zone';

// --- 1. FETCH ALL ZONES FOR THE CLIENT ---
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDatabase();
    // Only return zones belonging to this specific Tenant ID
    const zones = await Zone.find({ tenantId: session.user.tenantId }).lean();

    return NextResponse.json({ zones });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch zones' }, { status: 500 });
  }
}

// --- 2. ADD OR REMOVE A DEVICE FROM A ZONE ---
// --- 2. ADD OR REMOVE DEVICE(S) FROM A ZONE ---
// --- 2. ADD OR REMOVE DEVICE(S) FROM A ZONE ---
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { name, devEui, devEuis, action = 'add' } = await req.json();
    if (!name) return NextResponse.json({ error: 'Zone name required' }, { status: 400 });

    // Ensure targetEuis is explicitly typed as an array of strings
    const targetEuis: string[] = devEuis || (devEui ? [devEui] : []);

    await connectToDatabase();

    // STRICT TYPES: Define the exact shape of the MongoDB array operations
    const updateOp: { 
      $addToSet?: { devices: { $each: string[] } }; 
      $pull?: { devices: { $in: string[] } }; 
    } = {};
    
    if (targetEuis.length > 0) {
      if (action === 'add') {
        updateOp.$addToSet = { devices: { $each: targetEuis } }; 
      } else if (action === 'remove') {
        updateOp.$pull = { devices: { $in: targetEuis } };
      }
    }

    const zone = await Zone.findOneAndUpdate(
      { tenantId: session.user.tenantId, name: name },
      updateOp,
      { upsert: action === 'add', returnDocument: 'after' }
    );

    return NextResponse.json({ success: true, zone });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update zone' }, { status: 500 });
  }
}