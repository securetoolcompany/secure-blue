import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth'; 
import { connectToDatabase } from '@/lib/mongodb';
import Zone from '@/lib/models/Zone';

// Update Zone Settings
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ zoneId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { zoneId } = await params;
    const updates = await req.json();

    await connectToDatabase();
    
    const zone = await Zone.findOneAndUpdate(
      { _id: zoneId, tenantId: session.user.tenantId },
      { $set: updates },
      { returnDocument: 'after' }
    );

    return NextResponse.json({ success: true, zone });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update zone' }, { status: 500 });
  }
}