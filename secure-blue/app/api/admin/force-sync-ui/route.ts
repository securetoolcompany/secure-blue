import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Device from "@/lib/models/DevicePayload";

export async function POST() {
  try {
    await connectToDatabase();

    const now = new Date().toISOString();

    const devices = await Device.find({ onlineState: "online" }).lean();

    let updated = 0;

    for (const device of devices) {
      const update: Record<string, unknown> = {
        lastTimeSyncAt: now,
        pendingSchedule: null,
      };

      if (
        Array.isArray(device.irrigationSchedule) &&
        device.irrigationSchedule.length > 0
      ) {
        update.syncedIrrigationSchedule = device.irrigationSchedule;
      }

      await Device.updateOne({ devEui: device.devEui }, { $set: update });
      updated += 1;
    }

    return NextResponse.json({
      success: true,
      updated,
      syncedAt: now,
      onlineDevices: devices.map((d) => ({
        devEui: d.devEui,
        name: d.name,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to force sync UI state",
      },
      { status: 500 }
    );
  }
}