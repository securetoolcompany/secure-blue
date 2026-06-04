"use client";

import { useState, useMemo } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { 
  Battery, BatteryFull, BatteryMedium, BatteryLow, BatteryWarning, 
  WifiHigh, MapPin, Layers, Search, CheckCircle2, Circle 
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
  const [selectedEuis, setSelectedEuis] = useState<string[]>([]);
  const [bulkZoneInput, setBulkZoneInput] = useState('');
  const [isBulkLoading, setIsBulkLoading] = useState(false);

  const { data, mutate: mutateDevices } = useSWR('/api/chirpstack/devices', fetcher, { refreshInterval: 10000 });
  const { data: zonesData, mutate: mutateZones } = useSWR('/api/zones', fetcher);

  const filteredDevices = useMemo(() => {
    if (!data?.devices) return [];
    return data.devices.filter((d: Device) => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.devEui.toLowerCase().includes(search.toLowerCase());
      const matchesZone = zoneFilter === 'ALL' || (zonesData?.zones?.find((z: Zone) => z.name === zoneFilter)?.devices.includes(d.devEui));
      return matchesSearch && matchesZone;
    });
  }, [data, search, zoneFilter, zonesData]);

  const toggleSelection = (eui: string) => {
    setSelectedEuis(prev => prev.includes(eui) ? prev.filter(id => id !== eui) : [...prev, eui]);
  };

  const assignBulkZone = async () => {
    if (!bulkZoneInput || selectedEuis.length === 0) return;
    setIsBulkLoading(true);
    await fetch('/api/zones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: bulkZoneInput, devEuis: selectedEuis, action: 'add' })
    });
    setBulkZoneInput('');
    setSelectedEuis([]);
    await mutateZones(); 
    setIsBulkLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-32">
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
          <Button onClick={() => router.push('/portal/irrigation/zones')} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-none font-mono uppercase">
            <Layers className="h-4 w-4 mr-2" /> Manage Zones
          </Button>
        </div>

        {/* DEVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device: Device) => {
            const batteryUI = getBatteryUI(device.batteryMv);
            const BatteryIcon = batteryUI.Icon;
            const isSelected = selectedEuis.includes(device.devEui);
            const deviceZones = zonesData?.zones?.filter((z: Zone) => z.devices.includes(device.devEui)) || [];

            return (
              <div 
                key={device.devEui} 
                className={`bg-zinc-900 border ${isSelected ? 'border-blue-500 bg-blue-900/10' : 'border-zinc-800 hover:border-blue-500/50'} p-6 transition-colors cursor-pointer relative overflow-hidden group`}
                onClick={() => router.push(`/portal/irrigation/${device.devEui}`)}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${device.onlineState === 'online' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                
                <div 
                  className="absolute top-4 right-4 z-10 p-2"
                  onClick={(e) => { e.stopPropagation(); toggleSelection(device.devEui); }}
                >
                  {isSelected ? <CheckCircle2 className="h-6 w-6 text-blue-500" /> : <Circle className="h-6 w-6 text-zinc-600 group-hover:text-zinc-400" />}
                </div>

                <h3 className="text-white font-mono text-lg font-bold mb-4 pr-8">{device.name}</h3>
                
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
                    <span className={batteryUI.color}>{batteryUI.text}</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 text-xs flex justify-between">
                    <span>Last Seen</span>
                    <span>{device.lastSeenAt ? formatDistanceToNow(new Date(device.lastSeenAt), { addSuffix: true }) : 'Never'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BULK ACTION BAR */}
      {selectedEuis.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 z-50 flex justify-center">
          <div className="max-w-4xl w-full flex items-center justify-between gap-4">
            <span className="text-white font-mono">{selectedEuis.length} Selected</span>
            <div className="flex gap-2">
              <input
                placeholder="Zone name..."
                value={bulkZoneInput}
                onChange={(e) => setBulkZoneInput(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 text-white px-3 py-2 font-mono text-sm outline-none"
              />
              <Button onClick={assignBulkZone} disabled={isBulkLoading || !bulkZoneInput} className="bg-blue-600 hover:bg-blue-500 rounded-none font-mono uppercase">
                Add to Zone
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}