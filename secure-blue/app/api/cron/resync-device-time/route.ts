// app/api/cron/resync-device-time/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Zone from '@/lib/models/Zone';
import { fetchChirpStack } from '@/lib/chirpstack';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    const zones = await Zone.find(
      { devices: { $exists: true, $ne: [] } },
      { devices: 1, _id: 0 }
    ).lean();

    const devEuis = [
      ...new Set(
        zones.flatMap((zone: { devices?: string[] }) => zone.devices ?? [])
      ),
    ];

    if (!devEuis.length) {
      return NextResponse.json({
        success: true,
        queuedCount: 0,
        message: 'No devices found in zones.',
      });
    }

    const hexPayload = '0100';
    const base64Data = Buffer.from(hexPayload, 'hex').toString('base64');

    const results = await Promise.allSettled(
      devEuis.map((devEui) =>
        fetchChirpStack(`/api/devices/${devEui}/queue`, {
          method: 'POST',
          body: JSON.stringify({
            queueItem: {
              confirmed: false,
              fPort: 13,
              data: base64Data,
            },
          }),
        }).then(() => devEui)
      )
    );

    const queued = results
      .filter(
        (result): result is PromiseFulfilledResult<string> =>
          result.status === 'fulfilled'
      )
      .map((result) => result.value);

    const failed = results
      .filter(
        (result): result is PromiseRejectedResult =>
          result.status === 'rejected'
      )
      .map((result) => String(result.reason));

    return NextResponse.json({
      success: true,
      queuedCount: queued.length,
      failedCount: failed.length,
      queued,
      failed,
      ranAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Weekly RTC resync cron failed:', error);
    return NextResponse.json({ error: 'Cron failed' }, { status: 500 });
  }
}