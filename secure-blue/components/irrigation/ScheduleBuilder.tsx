"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarClock, CheckCircle2, Clock, RefreshCw } from 'lucide-react';
import { encodeSchedulerPayload } from '@/lib/strega-codec';

interface ScheduleSlot {
  startHour: number; startMin: number; endHour: number; endMin: number;
}

export function ScheduleBuilder({ devEui, zoneId, syncedSchedule, lastTimeSyncAt }: { devEui?: string, zoneId?: string, syncedSchedule?: ScheduleSlot[], lastTimeSyncAt?: string | null }) {
  const [slots, setSlots] = useState<ScheduleSlot[]>([{ startHour: 6, startMin: 0, endHour: 8, endMin: 0 }]);
  const [status, setStatus] = useState('');
  const [timeStatus, setTimeStatus] = useState('');

  // 1. Time Sync Function
  const syncTime = async () => {
    setTimeStatus('Requesting Sync...');
    await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fPort: 13, hexData: '01' })
    });
    setTimeStatus('Sync queued!');
    setTimeout(() => setTimeStatus(''), 3000);
  };

  // 2. Push Schedule Function
  const pushSchedule = async () => {
    setStatus('Encoding...');
    const hexData = encodeSchedulerPayload([], slots); 
    const endpoint = zoneId ? `/api/zones/${zoneId}/queue` : `/api/chirpstack/devices/${devEui}/queue`;

    setStatus('Pushing Config (FPort 25)...');
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fPort: 25, hexData })
    });

    setStatus('Pushing Enable (FPort 21)...');
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fPort: 21, hexData: '30' })
    });
    
    if (devEui) {
      await fetch(`/api/devices/${devEui}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ irrigationSchedule: slots })
      });
    }
    setStatus('Schedule queued & saved!');
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-6">
      
      {/* TIME SYNC DISPLAY */}
      <div className="mb-2 p-4 bg-black/40 border border-zinc-800 flex justify-between items-center">
        <div>
          <h4 className="text-zinc-500 font-mono text-xs uppercase mb-1 flex items-center gap-2">
            <Clock className="h-4 w-4" /> Device Clock Sync
          </h4>
          <div className="text-zinc-300 font-mono text-sm">
            Last Synced: {lastTimeSyncAt ? new Date(lastTimeSyncAt).toLocaleString() : 'Never'}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Button onClick={syncTime} variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-none h-8 text-xs">
            <RefreshCw className="h-3 w-3 mr-2" /> Resync Time
          </Button>
          {timeStatus && <span className="text-blue-400 text-xs mt-1">{timeStatus}</span>}
        </div>
      </div>

      {/* CONFIRMED SCHEDULE DISPLAY */}
      <div className="mb-6 p-4 bg-black/40 border border-zinc-800">
        <h4 className="text-zinc-500 font-mono text-xs uppercase mb-3 flex items-center gap-2">
          <CalendarClock className="h-4 w-4" /> Confirmed Hardware Schedule
        </h4>
        {syncedSchedule && syncedSchedule.length > 0 ? (
          <div className="space-y-2">
            <div className="text-emerald-500 font-mono text-sm font-bold flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4" /> HARDWARE SYNCED
            </div>
            {syncedSchedule.map((slot, i) => (
              <div key={i} className="text-zinc-300 font-mono text-sm flex justify-between border-b border-zinc-800/50 pb-1">
                <span className="text-zinc-500">Slot {i + 1}:</span> 
                <span>
                  {String(slot.startHour).padStart(2, '0')}:{String(slot.startMin).padStart(2, '0')} → {String(slot.endHour).padStart(2, '0')}:{String(slot.endMin).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-zinc-600 font-mono text-sm italic">
            No schedule confirmed by hardware yet.
          </div>
        )}
      </div>

      <h3 className="text-white font-mono text-lg mb-4 tracking-widest border-t border-zinc-800 pt-6">
        {zoneId ? 'Bulk Fleet Schedule Config' : 'Device Schedule Config'}
      </h3>
      
      {slots.map((slot, idx) => (
        <div key={idx} className="flex flex-wrap gap-4 items-center bg-zinc-900 p-4 border border-zinc-800">
          <span className="text-zinc-400 font-mono text-sm">Slot {idx + 1}</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs uppercase">Start</span>
            <input type="number" value={slot.startHour} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].startHour = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-950 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
            <span className="text-zinc-500">:</span>
            <input type="number" value={slot.startMin} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].startMin = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-950 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
          </div>
          <span className="text-zinc-600">→</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs uppercase">End</span>
            <input type="number" value={slot.endHour} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].endHour = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-950 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
            <span className="text-zinc-500">:</span>
            <input type="number" value={slot.endMin} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].endMin = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-950 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
          </div>
        </div>
      ))}
      
      {slots.length < 4 && (
        <Button variant="outline" onClick={() => setSlots([...slots, { startHour: 0, startMin: 0, endHour: 0, endMin: 0 }])}
          className="border-zinc-700 text-zinc-400 font-mono uppercase text-xs rounded-none hover:bg-zinc-800">
          + Add Time Slot
        </Button>
      )}

      <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
        <span className="text-blue-400 font-mono text-sm max-w-[60%]">{status}</span>
        <Button onClick={pushSchedule} className="bg-blue-600 hover:bg-blue-500 text-white font-mono uppercase tracking-widest rounded-none">
          {zoneId ? 'Push Bulk Schedule' : 'Push Device Schedule'}
        </Button>
      </div>
    </div>
  );
}