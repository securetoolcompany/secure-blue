"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { encodeSchedulerPayload } from '@/lib/strega-codec';

export function ScheduleBuilder({ devEui }: { devEui: string }) {
  const [slots, setSlots] = useState([{ startHour: 6, startMin: 0, endHour: 8, endMin: 0 }]);
  const [status, setStatus] = useState('');

  const pushSchedule = async () => {
    setStatus('Encoding...');
    const hexData = encodeSchedulerPayload([], slots); 
    
    setStatus('Pushing Config (FPort 25)...');
    await fetch(`/api/chirpstack/device/${devEui}/queue`, {
      method: 'POST',
      body: JSON.stringify({ fPort: 25, hexData })
    });

    setStatus('Pushing Enable (FPort 21)...');
    await fetch(`/api/chirpstack/device/${devEui}/queue`, {
      method: 'POST',
      body: JSON.stringify({ fPort: 21, hexData: '30' })
    });
    
    setStatus('Schedule queued successfully! Waiting for device uplink.');
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 space-y-6">
      <h3 className="text-white font-mono text-lg mb-4 tracking-widest">Device Schedule Config</h3>
      
      {slots.map((slot, idx) => (
        <div key={idx} className="flex gap-4 items-center bg-zinc-950 p-4 border border-zinc-800">
          <span className="text-zinc-400 font-mono text-sm">Slot {idx + 1}</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs uppercase">Start</span>
            <input type="number" value={slot.startHour} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].startHour = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-900 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
            <span className="text-zinc-500">:</span>
            <input type="number" value={slot.startMin} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].startMin = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-900 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
          </div>
          <span className="text-zinc-600">→</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs uppercase">End</span>
            <input type="number" value={slot.endHour} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].endHour = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-900 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
            <span className="text-zinc-500">:</span>
            <input type="number" value={slot.endMin} onChange={e => {
              const newSlots = [...slots]; newSlots[idx].endMin = Number(e.target.value); setSlots(newSlots);
            }} className="w-16 bg-zinc-900 border border-zinc-700 text-white p-1 text-center font-mono focus:border-blue-500/50 outline-none" />
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
        <span className="text-emerald-400 font-mono text-sm max-w-[60%]">{status}</span>
        <Button onClick={pushSchedule} className="bg-emerald-600 hover:bg-emerald-500 text-white font-mono uppercase tracking-widest rounded-none">
          Push Schedule
        </Button>
      </div>
    </div>
  );
}