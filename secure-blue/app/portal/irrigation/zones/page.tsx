"use client";

import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { ArrowLeft, Droplets, XCircle, Battery, Zap, MapPin, Layers, Clock, Save, CalendarClock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScheduleBuilder } from '@/components/irrigation/ScheduleBuilder';
import * as Accordion from '@radix-ui/react-accordion';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Zone {
  _id: string;
  name: string;
  devices: string[];
  powerSchedule?: {
    enabled: boolean;
    classCStart: string;
    classCEnd: string;
  };
  hardwareSchedule?: {
    startHour: number;
    startMin: number;
    endHour: number;
    endMin: number;
  }[];
}

// Explicitly defined ZoneCard component
function ZoneCard({ zone, mutateZones }: { zone: Zone, mutateZones: () => void }) {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(zone.powerSchedule?.enabled || false);
  const [classCStart, setClassCStart] = useState(zone.powerSchedule?.classCStart || '08:00');
  const [classCEnd, setClassCEnd] = useState(zone.powerSchedule?.classCEnd || '17:00');

  const enqueueZone = async (fPort: number, hexData: string) => {
    setLoading(true);
    await fetch(`/api/zones/${zone._id}/queue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fPort, hexData })
    });
    setTimeout(() => setLoading(false), 1000);
  };

  const savePowerSchedule = async () => {
    setLoading(true);
    await fetch(`/api/zones/${zone._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ powerSchedule: { enabled, classCStart, classCEnd } })
    });
    await mutateZones();
    setLoading(false);
  };

  return (
    <Accordion.Item value={zone._id} className="bg-zinc-900 border border-zinc-800 overflow-hidden mb-4">
      <Accordion.Header className="flex">
        <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 hover:bg-zinc-800/50 transition-colors group">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-mono text-white font-bold uppercase">{zone.name}</h2>
            <div className="bg-blue-900/30 text-blue-400 border border-blue-500/30 px-3 py-0.5 font-mono text-xs uppercase">
              {zone.devices.length} Valves
            </div>
          </div>
          <ChevronDown className="h-5 w-5 text-zinc-500 group-data-[state=open]:rotate-180 transition-transform" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="p-6 pt-0 border-t border-zinc-800 overflow-hidden">
        <div className="pt-6 space-y-8">
          {/* INSTANT BULK CONTROLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button onClick={() => enqueueZone(1, '31')} disabled={loading} className="h-16 bg-blue-900/40 hover:bg-blue-800/60 border border-blue-500/50 text-blue-400 font-mono rounded-none">
              <Droplets className="h-4 w-4 mr-2" /> OPEN ALL
            </Button>
            <Button onClick={() => enqueueZone(1, '30')} disabled={loading} className="h-16 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono rounded-none">
              <XCircle className="h-4 w-4 mr-2" /> CLOSE ALL
            </Button>
            <Button onClick={() => enqueueZone(9, '30')} disabled={loading} className="h-16 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono rounded-none">
              <Battery className="h-4 w-4 mr-2" /> CLASS A
            </Button>
            <Button onClick={() => enqueueZone(9, '31')} disabled={loading} className="h-16 bg-yellow-900/20 hover:bg-yellow-800/40 border border-yellow-500/50 text-yellow-500 font-mono rounded-none">
              <Zap className="h-4 w-4 mr-2" /> CLASS C
            </Button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="border border-zinc-800 p-5 bg-zinc-950/50">
              <div className="flex items-center gap-2 mb-4">
                <CalendarClock className="h-5 w-5 text-blue-500" />
                <h3 className="text-white font-mono uppercase tracking-widest text-sm">Autonomous Hardware Schedule</h3>
              </div>
              
              {/* DISPLAY ACTIVE HARDWARE SCHEDULE */}
              <div className="mb-4 p-4 bg-black/40 border border-zinc-800">
                <h4 className="text-zinc-500 font-mono text-xs uppercase mb-2">Current Hardware Config</h4>
                {zone.hardwareSchedule && zone.hardwareSchedule.length > 0 ? (
                  <ul className="space-y-1">
                    {zone.hardwareSchedule.map((s, i) => (
                      <li key={i} className="text-zinc-300 font-mono text-sm">
                        Slot {i + 1}: {String(s.startHour).padStart(2, '0')}:{String(s.startMin).padStart(2, '0')} 
                        → {String(s.endHour).padStart(2, '0')}:{String(s.endMin).padStart(2, '0')}
                      </li>
                    ))}
                  </ul>
                ) : <span className="text-zinc-700 font-mono text-sm italic">No hardware schedule set.</span>}
              </div>

              <ScheduleBuilder zoneId={zone._id} />
            </div>

            <div className="border border-zinc-800 p-5 bg-zinc-950/50">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-emerald-500" />
                <h3 className="text-white font-mono uppercase tracking-widest text-sm">Power Mode Automation</h3>
              </div>
              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-500 font-mono text-xs uppercase">Class C Start</label>
                  <input type="time" value={classCStart} onChange={(e) => setClassCStart(e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 text-white p-2 font-mono outline-none focus:border-emerald-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-500 font-mono text-xs uppercase">Class A End</label>
                  <input type="time" value={classCEnd} onChange={(e) => setClassCEnd(e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 text-white p-2 font-mono outline-none focus:border-emerald-500" />
                </div>
                <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-800">
                  <label className="text-zinc-400 font-mono text-xs uppercase cursor-pointer flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 px-4 h-[42px]">
                    <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} className="accent-emerald-500 w-4 h-4" /> Enable Cron
                  </label>
                  <Button onClick={savePowerSchedule} disabled={loading} className="bg-emerald-600 hover:bg-emerald-500 text-white font-mono rounded-none h-[42px] uppercase">
                    <Save className="h-4 w-4 mr-2" /> Save Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function ZoneManagement() {
  const { data: zonesData, mutate: mutateZones } = useSWR('/api/zones', fetcher);
  const zones = zonesData?.zones || [];

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-start mb-8 border-b border-zinc-800 pb-6">
          <div>
            <Link href="/portal/irrigation" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-mono text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> BACK TO FLEET
            </Link>
            <h1 className="text-3xl font-mono text-white mb-2 tracking-widest flex items-center gap-3">
              <Layers className="h-8 w-8 text-blue-500" /> ZONE MANAGEMENT
            </h1>
          </div>
        </div>

        {zones.length === 0 ? (
          <div className="text-zinc-500 font-mono text-center p-12 border border-zinc-800 bg-zinc-900/50">
            No zones created yet. Tag devices on the Fleet Overview page.
          </div>
        ) : (
          <Accordion.Root type="multiple" className="space-y-4">
            {zones.map((zone: Zone) => (
              <ZoneCard key={zone._id} zone={zone} mutateZones={mutateZones} />
            ))}
          </Accordion.Root>
        )}
      </div>
    </div>
  );
}