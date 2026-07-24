import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Device from "@/lib/models/DevicePayload";

export async function POST() {
  try {
    await connectToDatabase();

    const nowIso = new Date().toISOString();

    // Define "green/online" as: seen in the last N hours
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours

    const result = await Device.updateMany(
      { lastSeenAt: { $gte: cutoff } },      // only "recent" devices
      { $set: { lastTimeSyncAt: nowIso } }
    );

    return NextResponse.json({
      success: true,
      syncedAt: nowIso,
      matchedCount: (result as any).matchedCount ?? (result as any).n ?? 0,
      modifiedCount: (result as any).modifiedCount ?? 0,
      cutoff,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to set lastTimeSyncAt",
      },
      { status: 500 }
    );
  }
}