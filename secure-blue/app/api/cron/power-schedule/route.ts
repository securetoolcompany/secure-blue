import { NextResponse } from 'next/server';
import { fetchChirpStack } from '@/lib/chirpstack';
import { connectToDatabase } from '@/lib/mongodb';
import Zone from '@/lib/models/Zone';

// Vercel Cron routes must be GET requests
export async function GET(req: Request) {
  try {
    // 1. Verify this request actually came from Vercel's secure cron server
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    // 2. Find all zones that have the cron switch turned ON
    const activeZones = await Zone.find({ "powerSchedule.enabled": true });
    if (!activeZones.length) return NextResponse.json({ status: 'No active schedules' });

    // 3. Get current Hour in Central Time (or whichever timezone Fairlakes GC uses)
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Chicago' });
    const currentHHMM = formatter.format(now); // e.g., "08:00"
    const currentHour = currentHHMM.split(':')[0];

    let commandsFired = 0;

    // 4. Check each zone's schedule against the current hour
    for (const zone of activeZones) {
      if (!zone.devices.length) continue;

      const { classCStart, classCEnd } = zone.powerSchedule;
      const startHour = classCStart.split(':')[0];
      const endHour = classCEnd.split(':')[0];

      let hexPayload = null;

      // If it is exactly the start hour, deploy Class C (Hex 31)
      if (currentHour === startHour) hexPayload = '31';
      // If it is exactly the end hour, deploy Class A (Hex 30)
      else if (currentHour === endHour) hexPayload = '30';

      // 5. Fire the machine gun!
      if (hexPayload) {
        const base64Data = Buffer.from(hexPayload, 'hex').toString('base64');
        const promises = zone.devices.map((devEui: string) => 
          fetchChirpStack(`/api/devices/${devEui}/queue`, {
            method: 'POST',
            body: JSON.stringify({ queueItem: { confirmed: false, fPort: 9, data: base64Data } })
          })
        );
        await Promise.allSettled(promises);
        commandsFired += zone.devices.length;
      }
    }

    return NextResponse.json({ success: true, commandsFired });
  } catch (error) {
    console.error('Cron Error:', error);
    return NextResponse.json({ error: 'Cron failed' }, { status: 500 });
  }
}