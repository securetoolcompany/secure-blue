import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Device from "@/lib/models/DevicePayload";

export async function POST() {
  try {
    await connectToDatabase();

    const nowIso = new Date().toISOString();

    // Option 1: all devices
    // const devices = await Device.find({}).lean();

    // Option 2: only devices seen recently (e.g. last 7 days)
    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const devices = await Device.find({
      lastSeenAt: { $gte: cutoff },
    }).lean();

    let updated = 0;

    for (const device of devices) {
      await Device.updateOne(
        { devEui: device.devEui },
        { $set: { lastTimeSyncAt: nowIso } }
      );
      updated += 1;
    }

    return NextResponse.json({
      success: true,
      updated,
      syncedAt: nowIso,
      matchedDevices: devices.map((d) => ({
        devEui: d.devEui,
        name: d.name,
        lastSeenAt: d.lastSeenAt,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to force lastTimeSyncAt",
      },
      { status: 500 }
    );
  }
}