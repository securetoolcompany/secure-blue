"use client";

import { useState } from 'react';
import useSWR from 'swr';
import { Droplets, XCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QueueItem } from '@/lib/types'; // IMPORT THE TYPE

export function ValveControl({ devEui }: { devEui: string }) {
  const [loading, setLoading] = useState(false);
  
  const { data: qData, mutate } = useSWR(`/api/chirpstack/devices/${devEui}/queue`, 
    (url: string) => fetch(url).then(res => res.json()),
    { refreshInterval: 10000 }
  );

  const enqueue = async (fPort: number, hexData: string) => {
    setLoading(true);
    await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fPort, hexData })
    });
    await mutate();
    setLoading(false);
  };

  const flushQueue = async () => {
    setLoading(true);
    await fetch(`/api/chirpstack/devices/${devEui}/queue`, { method: 'DELETE' });
    await mutate();
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={() => enqueue(1, '30')} 
          disabled={loading}
          className="h-24 bg-blue-900/40 hover:bg-blue-800/60 border border-blue-500/50 text-blue-400 font-mono text-lg flex flex-col gap-2 rounded-none"
        >
          <Droplets className="h-6 w-6" />
          OPEN VALVE
        </Button>
        <Button 
          onClick={() => enqueue(1, '31')} 
          disabled={loading}
          className="h-24 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-lg flex flex-col gap-2 rounded-none"
        >
          <XCircle className="h-6 w-6" />
          CLOSE VALVE
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-zinc-300 font-mono text-sm uppercase tracking-wider">Downlink Queue</h3>
          <Button variant="outline" size="sm" onClick={flushQueue} disabled={loading || !qData?.queue?.length} className="h-8 border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-none">
            <Trash2 className="h-4 w-4 mr-2" /> Flush
          </Button>
        </div>
        
        {qData?.queue?.length === 0 ? (
          <p className="text-zinc-600 font-mono text-sm">Queue is empty. Device is synced.</p>
        ) : (
          <div className="space-y-2">
            {/* CHANGED: (item: any) is now (item: QueueItem) */}
            {qData?.queue?.map((item: QueueItem, i: number) => (
              <div key={item.fCntDown || i} className="flex justify-between items-center bg-zinc-950 p-3 border border-zinc-800 font-mono text-sm">
                <div>
                  <span className="text-emerald-400 mr-4">FPort {item.fPort}</span>
                  <span className="text-zinc-400">Payload: 0x{item.data}</span>
                </div>
                <span className="text-yellow-500/80 text-xs">Pending Uplink...</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}