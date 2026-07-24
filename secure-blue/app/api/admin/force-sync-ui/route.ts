import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Device from "@/lib/models/DevicePayload";

export async function POST() {
  try {
    await connectToDatabase();

    const nowIso = new Date().toISOString();

    // Update all ONLINE devices
    const result = await Device.updateMany(
      { status: "online" },          // <<< adjust this field if needed
      { $set: { lastTimeSyncAt: nowIso } }
    );

    return NextResponse.json({
      success: true,
      syncedAt: nowIso,
      matchedCount: (result as any).matchedCount ?? (result as any).n ?? 0,
      modifiedCount: (result as any).modifiedCount ?? 0,
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