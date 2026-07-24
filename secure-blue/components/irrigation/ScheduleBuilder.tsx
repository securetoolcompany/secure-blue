"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

interface ScheduleSlot {
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

interface TimeSlotForm {
  start: string;
  end: string;
}

interface ScheduleBuilderProps {
  devEui?: string;
  zoneId?: string;
  irrigationSchedule?: ScheduleSlot[];
  syncedSchedule?: ScheduleSlot[];
  pendingSchedule?: string | null;
  lastTimeSyncAt?: string | null;
}

function formatSlot(slot: ScheduleSlot) {
  return `${String(slot.startHour).padStart(2, "0")}:${String(
    slot.startMin
  ).padStart(2, "0")} → ${String(slot.endHour).padStart(2, "0")}:${String(
    slot.endMin
  ).padStart(2, "0")}`;
}

function slotToTime(slot: ScheduleSlot): TimeSlotForm {
  return {
    start: `${String(slot.startHour).padStart(2, "0")}:${String(
      slot.startMin
    ).padStart(2, "0")}`,
    end: `${String(slot.endHour).padStart(2, "0")}:${String(slot.endMin).padStart(
      2,
      "0"
    )}`,
  };
}

function timeToSlot(slot: TimeSlotForm): ScheduleSlot {
  const [startHour, startMin] = slot.start.split(":").map(Number);
  const [endHour, endMin] = slot.end.split(":").map(Number);

  return {
    startHour,
    startMin,
    endHour,
    endMin,
  };
}

function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

export function ScheduleBuilder({
  devEui,
  zoneId,
  irrigationSchedule,
  syncedSchedule,
  pendingSchedule,
  lastTimeSyncAt,
}: ScheduleBuilderProps) {
  const router = useRouter();

  const initialSlots = useMemo<TimeSlotForm[]>(() => {
    if (irrigationSchedule && irrigationSchedule.length > 0) {
      return irrigationSchedule.map(slotToTime);
    }
    if (syncedSchedule && syncedSchedule.length > 0) {
      return syncedSchedule.map(slotToTime);
    }
    return [{ start: "06:00", end: "08:00" }];
  }, [irrigationSchedule, syncedSchedule]);

  const [slots, setSlots] = useState<TimeSlotForm[]>(initialSlots);
  const [status, setStatus] = useState("");
  const [timeStatus, setTimeStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSyncingTime, setIsSyncingTime] = useState(false);

  useEffect(() => {
    setSlots(initialSlots);
  }, [initialSlots]);

  const isSyncing = Boolean(pendingSchedule);
  const isSynced = !pendingSchedule && Array.isArray(syncedSchedule) && syncedSchedule.length > 0;

  useEffect(() => {
    if (!isSyncing) return;

    setStatus("Schedule saved. Waiting for next device check-in...");

    const interval = setInterval(() => {
      router.refresh();
    }, 5000);

    return () => clearInterval(interval);
  }, [isSyncing, router]);

  const updateSlot = (idx: number, field: keyof TimeSlotForm, value: string) => {
    setSlots((prev) =>
      prev.map((slot, i) => (i === idx ? { ...slot, [field]: value } : slot))
    );
  };

  const addSlot = () => {
    setSlots((prev) => [...prev, { start: "06:00", end: "07:00" }]);
  };

  const removeSlot = (idx: number) => {
    setSlots((prev) => prev.filter((_, i) => i !== idx));
  };

  const hasInvalidSlots = slots.some(
    (slot) =>
      !slot.start ||
      !slot.end ||
      toMinutes(slot.end) <= toMinutes(slot.start)
  );

  const syncTime = async () => {
    if (!devEui) {
      setTimeStatus("Missing device ID.");
      return;
    }

    try {
      setIsSyncingTime(true);
      setTimeStatus("Requesting clock sync...");

      const res = await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fPort: 13, hexData: "01" }),
      });

      if (!res.ok) {
        throw new Error("Failed to queue time sync.");
      }

      setTimeStatus("Clock sync queued.");
      router.refresh();
    } catch (error) {
      setTimeStatus("Clock sync failed.");
    } finally {
      setIsSyncingTime(false);
      setTimeout(() => setTimeStatus(""), 3000);
    }
  };

  const pushSchedule = async () => {
    if (!devEui) {
      setStatus("Missing device ID.");
      return;
    }

    if (hasInvalidSlots) {
      setStatus("Each slot must have a valid start and end time.");
      return;
    }

    try {
      setIsSaving(true);
      setStatus("Saving schedule...");

      const payload = slots.map(timeToSlot);

      const res = await fetch(`/api/devices/${devEui}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ irrigationSchedule: payload }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
  throw new Error(data?.error || "Failed to save schedule.");
}

if (data?.queue?.queued) {
  setStatus("Schedule saved and queued to device (FPort 25).");
} else if (data?.queue?.error) {
  setStatus(`Schedule saved. Queue failed: ${data.queue.error}`);
} else {
  setStatus("Schedule saved. Downlink not queued – check ChirpStack queue API.");
}

router.refresh();
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Failed to save schedule."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-6">
      <div className="mb-2 p-4 bg-black/40 border border-zinc-800 flex justify-between items-center gap-4">
        <div>
          <h4 className="text-zinc-500 font-mono text-xs uppercase mb-1 flex items-center gap-2">
            <Clock className="h-4 w-4" /> Device Clock Sync
          </h4>
          <div className="text-zinc-300 font-mono text-sm">
            Last Synced: {lastTimeSyncAt ? new Date(lastTimeSyncAt).toLocaleString() : "Never"}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <Button
            onClick={syncTime}
            disabled={isSyncingTime || !devEui}
            variant="outline"
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-none h-8 text-xs disabled:opacity-50"
          >
            <RefreshCw className={`h-3 w-3 mr-2 ${isSyncingTime ? "animate-spin" : ""}`} />
            Resync Time
          </Button>
          {timeStatus && <span className="text-blue-400 text-xs mt-1">{timeStatus}</span>}
        </div>
      </div>

      <div className="mb-6 p-4 bg-black/40 border border-zinc-800">
        <h4 className="text-zinc-500 font-mono text-xs uppercase mb-3 flex items-center gap-2">
          <CalendarClock className="h-4 w-4" /> Hardware Schedule Status
        </h4>

        {isSyncing ? (
          <div className="space-y-2">
            <div className="text-amber-400 font-mono text-sm font-bold flex items-center gap-2 mb-2">
              <RefreshCw className="h-4 w-4 animate-spin" /> SYNCING...
            </div>
            <div className="text-zinc-400 font-mono text-sm">
              A new schedule is staged and will be delivered on the next uplink.
            </div>
            {syncedSchedule && syncedSchedule.length > 0 && (
              <div className="pt-2 border-t border-zinc-800/60">
                <div className="text-zinc-500 font-mono text-xs uppercase mb-2">
                  Last Confirmed Hardware Schedule
                </div>
                <div className="space-y-2">
                  {syncedSchedule.map((slot, i) => (
                    <div
                      key={i}
                      className="text-zinc-300 font-mono text-sm flex justify-between border-b border-zinc-800/50 pb-1"
                    >
                      <span className="text-zinc-500">Slot {i + 1}:</span>
                      <span>{formatSlot(slot)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : isSynced ? (
          <div className="space-y-2">
            <div className="text-emerald-500 font-mono text-sm font-bold flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4" /> HARDWARE SYNCED
            </div>
            {syncedSchedule!.map((slot, i) => (
              <div
                key={i}
                className="text-zinc-300 font-mono text-sm flex justify-between border-b border-zinc-800/50 pb-1"
              >
                <span className="text-zinc-500">Slot {i + 1}:</span>
                <span>{formatSlot(slot)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-zinc-600 font-mono text-sm italic flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            No schedule confirmed by hardware yet.
          </div>
        )}
      </div>

      <h3 className="text-white font-mono text-lg mb-2 tracking-widest border-t border-zinc-800 pt-6">
        {zoneId ? "Bulk Fleet Schedule Config" : "Device Schedule Config"}
      </h3>

      <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
        Enter all schedule times in 24-hour format.
      </p>

      {slots.map((slot, idx) => (
        <div
          key={idx}
          className="bg-zinc-900 border border-zinc-800 p-4 md:p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] gap-4 items-end">
            <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
              Slot {idx + 1}
            </div>

            <div>
              <label className="block text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">
                Start time
              </label>
              <input
                type="time"
                step={60}
                value={slot.start}
                onChange={(e) => updateSlot(idx, "start", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-white px-3 py-2 font-mono text-sm focus:border-emerald-500 outline-none transition-colors"
              />
              <p className="text-zinc-600 font-mono text-xs mt-2">24-hour format</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-zinc-600 font-mono text-lg pb-6">
              →
            </div>

            <div>
              <label className="block text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">
                End time
              </label>
              <input
                type="time"
                step={60}
                value={slot.end}
                onChange={(e) => updateSlot(idx, "end", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-white px-3 py-2 font-mono text-sm focus:border-emerald-500 outline-none transition-colors"
              />
              <p className="text-zinc-600 font-mono text-xs mt-2">24-hour format</p>
            </div>

            <button
              type="button"
              onClick={() => removeSlot(idx)}
              className="h-10 px-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {slots.length < 4 && (
        <Button
          variant="outline"
          onClick={addSlot}
          className="border-zinc-700 text-zinc-400 font-mono uppercase text-xs rounded-none hover:bg-zinc-800"
        >
          + Add Time Slot
        </Button>
      )}

      {hasInvalidSlots && (
        <div className="border border-yellow-500/30 bg-yellow-500/10 p-3 text-yellow-300 font-mono text-xs uppercase tracking-wider">
          Each slot must have a valid start and end time, and end must be after start.
        </div>
      )}

      <div className="pt-6 border-t border-zinc-800 flex justify-between items-center gap-4">
        <span className="text-blue-400 font-mono text-sm max-w-[60%]">{status}</span>
        <Button
          onClick={pushSchedule}
          disabled={isSaving || !devEui || hasInvalidSlots}
          className="bg-blue-600 hover:bg-blue-500 text-white font-mono uppercase tracking-widest rounded-none disabled:opacity-50"
        >
          {isSaving
            ? "Saving..."
            : zoneId
              ? "Save Bulk Schedule"
              : "Save Device Schedule"}
        </Button>
      </div>
    </div>
  );
}