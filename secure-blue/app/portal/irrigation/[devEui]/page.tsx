import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ValveControl } from '@/components/irrigation/ValveControl';
import Device from '@/lib/models/DevicePayload'; // Import your Mongoose model
import { connectToDatabase } from '@/lib/mongodb';export default async function DeviceDetailPage(
  { params }: { params: Promise<{ devEui: string }> }
) {
  const { devEui } = await params;

  // 1. Fetch the data directly from MongoDB
  await connectToDatabase();
  const device = await Device.findOne({ devEui }).lean();

  // 2. Handle case where device isn't found
  if (!device) {
    return <div className="text-white p-24">Device not found: {devEui}</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/portal/irrigation" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-sm mb-8">
          <ArrowLeft className="h-4 w-4" /> BACK TO FLEET
        </Link>

        <div className="mb-8 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-mono text-white tracking-widest mb-2">VALVE CONTROL</h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            EUI: {devEui}
          </p>
        </div>

        {/* Now 'device' exists because we fetched it above */}
        <ValveControl 
          devEui={device.devEui} 
          currentMode={device.deviceClass || 'A'} 
          valveState={device.valveState || 'unknown'}
          lastTimeSyncAt={device.lastTimeSyncAt?.toString()} // Pass it!
          syncedSchedule={device.syncedIrrigationSchedule}   // Pass it!
        />
      </div>
    </div>
  );
}