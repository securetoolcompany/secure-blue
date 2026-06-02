"use client";

import useSWR from 'swr';
import Link from 'next/link';
import { Battery, WifiHigh, AlertTriangle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Device } from '@/lib/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function FleetOverview() {
  const { data, error } = useSWR('/api/chirpstack/devices', fetcher, { refreshInterval: 60000 });

  if (error) return <div className="p-10 text-red-500 font-mono">Failed to load fleet data.</div>;
  if (!data) return <div className="p-10 text-zinc-400 font-mono pt-24 text-center">Initializing telemetry...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-mono text-white mb-2 tracking-widest">SMART IRRIGATION</h1>
            <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">STREGA LoRaWAN Fleet Status</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">System Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.devices.map((device: Device) => (
            <Link key={device.devEui} href={`/irrigation/${device.devEui}`}>
              <div className="bg-zinc-900 border border-zinc-800 p-6 hover:border-blue-500/50 transition-colors cursor-pointer relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  device.onlineState === 'online' ? 'bg-emerald-500' :
                  device.onlineState === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white font-mono text-lg font-bold">{device.name}</h3>
                  <div className={`px-2 py-1 text-xs font-mono font-bold uppercase rounded-sm ${
                    device.valveState === 'open' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    device.valveState === 'closed' ? 'bg-zinc-800 text-zinc-400 border border-zinc-700' :
                    'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'
                  }`}>
                    {device.valveState}
                  </div>
                </div>

                <div className="space-y-3 font-mono text-sm text-zinc-400">
                  <div className="flex items-center gap-3">
                    <Battery className={`h-4 w-4 ${
                      !device.batteryMv ? 'text-zinc-600' : 
                      device.batteryMv > 3400 ? 'text-emerald-500' : 
                      device.batteryMv >= 3100 ? 'text-yellow-500' : 'text-red-500'
                    }`} />
                    <span>{device.batteryMv ? `${device.batteryMv} mV` : 'Unknown'}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <WifiHigh className="h-4 w-4 text-zinc-500" />
                    <span>{device.rssi ? `${device.rssi} dBm / ${device.snr} SNR` : 'No Signal Data'}</span>
                  </div>

                  {device.cableFault && (
                    <div className="flex items-center gap-3 text-red-400">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Cable Fault Detected</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-zinc-800 text-xs flex justify-between">
                    <span>Last Seen</span>
                    <span className={device.onlineState === 'offline' ? 'text-red-400' : 'text-zinc-300'}>
                      {device.lastSeenAt ? formatDistanceToNow(new Date(device.lastSeenAt), { addSuffix: true }) : 'Never'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}