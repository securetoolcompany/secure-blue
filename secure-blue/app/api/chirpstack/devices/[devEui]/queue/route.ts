import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { fetchChirpStack } from "@/lib/chirpstack";
import { connectToDatabase } from "@/lib/mongodb";
import DevicePayload from "@/lib/models/DevicePayload";

// --- 1. GET THE QUEUE (For your SWR polling) ---
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { devEui } = await params;

    const res = await fetchChirpStack(`/api/devices/${devEui}/queue`);

    return NextResponse.json({
      success: true,
      queue: res?.queueItems || [],
      raw: res,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch queue",
      },
      { status: 500 }
    );
  }
}

// --- 2. ADD TO QUEUE ---
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { devEui } = await params;
    const body = await req.json();
    const { fPort, hexData } = body;

    if (!devEui || fPort === undefined || !hexData) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const port = Number(fPort);

      if (!Number.isInteger(port) || port < 1 || port > 255) {
        return NextResponse.json(
          { error: "fPort must be an integer between 1 and 255" },
          { status: 400 }
        );
      }

      if (typeof hexData !== "string" || !/^[0-9a-fA-F]+$/.test(hexData) || hexData.length % 2 !== 0) {
        return NextResponse.json(
          { error: "hexData must be a valid even-length hex string" },
          { status: 400 }
        );
      }

      const base64Data = Buffer.from(hexData, "hex").toString("base64");

      const chirpstackPayload = {
        queueItem: {
          confirmed: false,
          fPort: port,
          data: base64Data,
        },
      };

      const chirpstackRes = await fetchChirpStack(`/api/devices/${devEui}/queue`, {
        method: "POST",
        body: JSON.stringify(chirpstackPayload),
      });

      // If this is a time sync (FPort 13), mark pendingTimeSync on the device
      if (port === 13) {
        try {
          await connectToDatabase();
          await DevicePayload.findOneAndUpdate(
            { devEui },
            {
              $set: {
                pendingTimeSync: true,
              },
              $setOnInsert: { devEui },
            },
            { upsert: true }
          );
        } catch (e) {
          console.error("Failed to set pendingTimeSync for devEui", devEui, e);
        }
      }

      return NextResponse.json({
        success: true,
        queued: true,
        devEui,
        fPort: port,
        hexData,
        base64Data,
        chirpstackPayload,
        chirpstackRes,
      });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to enqueue",
      },
      { status: 500 }
    );
  }
}

// --- 3. FLUSH THE QUEUE ---
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ devEui: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { devEui } = await params;

    const chirpstackRes = await fetchChirpStack(`/api/devices/${devEui}/queue`, {
      method: "DELETE",
    });

    return NextResponse.json({
      success: true,
      flushed: true,
      devEui,
      chirpstackRes,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to flush queue",
      },
      { status: 500 }
    );
  }
}