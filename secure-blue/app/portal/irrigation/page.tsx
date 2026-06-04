"use client";

import { useState, useMemo } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { 
  Battery, BatteryFull, BatteryMedium, BatteryLow, BatteryWarning, 
  WifiHigh, AlertTriangle, MapPin, Layers, Search 
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Device } from '@/lib/types';
import { Button } from '@/components/ui/button';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Zone {
  _id: string;
  name: string;
  devices: string[];
}

function getBatteryUI(mV: number | null) {
  if (!mV) return { text: 'Unknown', color: 'text-zinc-600', Icon: Battery };
  const MAX_MV = 3600;
  const MIN_MV = 2900;
  let percent = Math.round(((mV - MIN_MV) / (MAX_MV - MIN_MV)) * 100);
  percent = Math.max(0, Math.min(100, percent)); 
  if (percent >= 75) return { text: `${percent}%`, color: 'text-emerald-500', Icon: BatteryFull };
  if (percent >= 35) return { text: `${percent}%`, color: 'text-yellow-500', Icon: BatteryMedium };
  if (percent >= 15) return { text: `${percent}%`, color: 'text-orange-500', Icon: BatteryLow };
  return { text: `${percent}%`, color: 'text-red-500', Icon: BatteryWarning };
}

export default function FleetOverview() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [zoneFilter, setZoneFilter] = useState('ALL');

  const { data } = useSWR('/api/chirpstack/devices', fetcher, { refreshInterval: 10000 });
  const { data: zonesData } = useSWR('/api/zones', fetcher);

  // Client-side filtering logic
  const filteredDevices = useMemo(() => {
    if (!data?.devices) return [];
    return data.devices.filter((d: Device) => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.devEui.toLowerCase().includes(search.toLowerCase());
      const matchesZone = zoneFilter === 'ALL' || (zonesData?.zones?.find((z: Zone) => z.name === zoneFilter)?.devices.includes(d.devEui));
      return matchesSearch && matchesZone;
    });
  }, [data, search, zoneFilter, zonesData]);

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        
        {/* MANAGEMENT & CONTROL STRIP */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
            <input 
              placeholder="Search by name or EUI..." 
              className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 p-2 font-mono text-sm outline-none focus:border-zinc-600"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select 
            className="bg-zinc-900 border border-zinc-800 text-white p-2 font-mono text-sm outline-none"
            onChange={(e) => setZoneFilter(e.target.value)}
          >
            <option value="ALL">All Zones</option>
            {zonesData?.zones?.map((z: Zone) => <option key={z._id} value={z.name}>{z.name}</option>)}
          </select>
          <Button 
            onClick={() => router.push('/portal/irrigation/zones')} 
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-none font-mono uppercase"
          >
            <Layers className="h-4 w-4 mr-2" /> Manage Zones
          </Button>
        </div>

        {/* DEVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device: Device) => {
            const batteryUI = getBatteryUI(device.batteryMv);
            const BatteryIcon = batteryUI.Icon;
            const deviceZones = zonesData?.zones?.filter((z: Zone) => z.devices.includes(device.devEui)) || [];

            return (
              <div 
                key={device.devEui} 
                className="bg-zinc-900 border border-zinc-800 p-6 hover:border-blue-500/50 transition-colors cursor-pointer relative overflow-hidden group"
                onClick={() => router.push(`/portal/irrigation/${device.devEui}`)}
              >
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

                {/* ZONE TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {deviceZones.map((z: Zone) => (
                    <span key={z._id} className="inline-flex items-center gap-1 bg-blue-900/30 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-sm font-mono text-[10px] uppercase">
                      <MapPin className="h-3 w-3" /> {z.name}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 font-mono text-sm text-zinc-400">
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

                  <div className="pt-4 border-t border-zinc-800 text-xs flex justify-between">
                    <span>Last Seen</span>
                    <span className={device.onlineState === 'offline' ? 'text-red-400' : 'text-zinc-300'}>
                      {device.lastSeenAt ? formatDistanceToNow(new Date(device.lastSeenAt), { addSuffix: true }) : 'Never'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}