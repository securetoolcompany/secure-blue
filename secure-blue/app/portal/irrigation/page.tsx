"use client";

import useSWR from 'swr';
import Link from 'next/link';
// We bring in the specific battery shapes from lucide-react
import { Battery, BatteryFull, BatteryMedium, BatteryLow, BatteryWarning, WifiHigh, AlertTriangle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Device } from '@/lib/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

// Helper to convert STREGA mV to Percentage and assign the correct Icon/Color
function getBatteryUI(mV: number | null) {
  if (!mV) return { text: 'Unknown', color: 'text-zinc-600', Icon: Battery };

  // Li-SOCl2 curve: Max ~3600mV, Dead ~2900mV
  const MAX_MV = 3600;
  const MIN_MV = 2900;
  
  let percent = Math.round(((mV - MIN_MV) / (MAX_MV - MIN_MV)) * 100);
  // Clamp values so it doesn't show 105% or -10%
  percent = Math.max(0, Math.min(100, percent)); 

  if (percent >= 75) return { text: `${percent}%`, color: 'text-emerald-500', Icon: BatteryFull };
  if (percent >= 35) return { text: `${percent}%`, color: 'text-yellow-500', Icon: BatteryMedium };
  if (percent >= 15) return { text: `${percent}%`, color: 'text-orange-500', Icon: BatteryLow };
  return { text: `${percent}%`, color: 'text-red-500', Icon: BatteryWarning };
}

export default function FleetOverview() {
  // Polling set to 10 seconds for real-time Webhook updates
  const { data, error } = useSWR('/api/chirpstack/devices', fetcher, { refreshInterval: 10000 });

  if (error || data?.error) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12 flex flex-col items-center justify-center">
        <div className="text-red-500 font-mono mb-4">Error loading fleet data:</div>
        <div className="text-zinc-500 font-mono text-sm">{data?.error || 'Network connection failed'}</div>
      </div>
    );
  }

  if (!data || !Array.isArray(data.devices)) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
        <div className="p-10 text-zinc-400 font-mono text-center animate-pulse">
          Initializing telemetry and verifying tenant access...
        </div>
      </div>
    );
  }

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
          {data.devices.map((device: Device) => {
            const batteryUI = getBatteryUI(device.batteryMv);
            const BatteryIcon = batteryUI.Icon;

            return (
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
                    
                    {/* UPGRADED BATTERY UI */}
                    <div className="flex items-center gap-3">
                      <BatteryIcon className={`h-4 w-4 ${batteryUI.color}`} />
                      <span className={batteryUI.color}>
                        {batteryUI.text}
                        {device.batteryMv && <span className="text-zinc-600 text-xs ml-2">({device.batteryMv}mV)</span>}
                      </span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}