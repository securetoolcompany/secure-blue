import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ValveControl } from "@/components/irrigation/ValveControl";
import Device from "@/lib/models/DevicePayload";
import { connectToDatabase } from "@/lib/mongodb";

export default async function DeviceDetailPage({
  params,
}: {
  params: Promise<{ devEui: string }>;
}) {
  const { devEui } = await params;

  await connectToDatabase();
  const rawDevice = await Device.findOne({ devEui }).lean();

  if (!rawDevice) {
    return <div className="text-white p-24">Device not found: {devEui}</div>;
  }

  const serverTime = new Date().toISOString();

  const device = {
    ...rawDevice,
    _id: rawDevice._id?.toString?.(),
    lastTimeSyncAt: rawDevice.lastTimeSyncAt
      ? new Date(rawDevice.lastTimeSyncAt).toISOString()
      : null,
    lastSeenAt: rawDevice.lastSeenAt
      ? new Date(rawDevice.lastSeenAt).toISOString()
      : null,
    createdAt: rawDevice.createdAt
      ? new Date(rawDevice.createdAt).toISOString()
      : null,
    updatedAt: rawDevice.updatedAt
      ? new Date(rawDevice.updatedAt).toISOString()
      : null,
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/portal/irrigation"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-sm mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> BACK TO FLEET
        </Link>

        <div className="mb-8 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-mono text-white tracking-widest mb-2">
            DEVICE CONTROL
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            EUI: {devEui}
          </p>
        </div>

        <ValveControl
          devEui={device.devEui}
          currentMode={device.deviceClass || "A"}
          valveState={device.valveState || "unknown"}
          lastTimeSyncAt={device.lastTimeSyncAt}
          syncedSchedule={device.syncedIrrigationSchedule}
          irrigationSchedule={device.irrigationSchedule}
          pendingSchedule={device.pendingSchedule}
          serverTime={serverTime}
        />
      </div>
    </div>
  );
}