import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ValveControl } from '@/components/irrigation/ValveControl'; // Ensure this matches your component's export name

export default async function DeviceDetailPage(
  { params }: { params: Promise<{ devEui: string }> }
) {
  const { devEui } = await params;

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/irrigation" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          BACK TO FLEET
        </Link>

        <div className="mb-8 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-mono text-white tracking-widest mb-2">VALVE CONTROL</h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            EUI: {devEui}
          </p>
        </div>

        {/* This is the advanced UI component you built earlier! */}
        <ValveControl devEui={devEui} />

      </div>
    </div>
  );
}