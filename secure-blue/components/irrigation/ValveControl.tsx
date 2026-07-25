"use client";

import { useState } from "react";
import useSWR from "swr";
import {
  Droplets,
  XCircle,
  Trash2,
  Battery,
  Zap,
  CalendarClock,
  Settings2,
  MapPin,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QueueItem } from "@/lib/types";
import { ScheduleBuilder } from "./ScheduleBuilder";

interface Zone {
  _id: string;
  name: string;
  devices: string[];
}

interface ValveControlProps {
  devEui: string;
  currentMode: "A" | "C";
  valveState: "open" | "closed" | "unknown";
  lastTimeSyncAt?: string | null;
  syncedSchedule?: any[];
  irrigationSchedule?: any[];
  pendingSchedule?: string | null;
  serverTime: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ValveControl({
  devEui,
  currentMode,
  valveState,
  lastTimeSyncAt,
  syncedSchedule,
  irrigationSchedule,
  pendingSchedule,
  serverTime,
}: ValveControlProps) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"manual" | "power" | "schedule">(
    "manual"
  );
  const [zoneInput, setZoneInput] = useState("");
  const [pendingMode, setPendingMode] = useState<"A" | "C" | null>(null);

  const { data: qData, mutate: mutateQueue } = useSWR(
    `/api/chirpstack/devices/${devEui}/queue`,
    fetcher,
    { refreshInterval: 10000 }
  );

  const { data: zonesData, mutate: mutateZones } = useSWR(
    "/api/zones",
    fetcher
  );

  const activeZones =
    zonesData?.zones?.filter((z: Zone) => z.devices.includes(devEui)) || [];

  const enqueue = async (fPort: number, hexData: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fPort, hexData }),
      });
      const json = await res.json();
      console.log("enqueue result", fPort, hexData, json);
      await mutateQueue();
    } finally {
      setLoading(false);
    }
  };

  const flushQueue = async () => {
    setLoading(true);
    try {
      await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
        method: "DELETE",
      });
      await mutateQueue();
    } finally {
      setLoading(false);
    }
  };

  const assignZone = async () => {
    if (!zoneInput) return;

    setLoading(true);
    try {
      await fetch("/api/zones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: zoneInput, devEui, action: "add" }),
      });
      setZoneInput("");
      await mutateZones();
    } finally {
      setLoading(false);
    }
  };

  const removeZone = async (zoneName: string) => {
    setLoading(true);
    try {
      await fetch("/api/zones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: zoneName, devEui, action: "remove" }),
      });
      await mutateZones();
    } finally {
      setLoading(false);
    }
  };

  const handleModeChange = async (mode: "A" | "C") => {
    setPendingMode(mode);

    try {
      const fPort = 9;
      const hexData = mode === "C" ? "31" : "30";

      await fetch(`/api/chirpstack/devices/${devEui}/queue`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fPort, hexData }),
      });

      await fetch(`/api/devices/${devEui}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceClass: mode }),
      });

      await mutateQueue();
    } finally {
      setTimeout(() => setPendingMode(null), 1000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <div className="flex items-start gap-3">
          <Clock3 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">
              Server Time
            </p>
            <p className="text-white font-mono text-lg">
              {new Date(serverTime).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <MapPin className="h-5 w-5 text-zinc-500 mt-1 shrink-0" />
          <div className="w-full">
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">
              Operational Zones
            </p>

            <div className="flex flex-wrap gap-2">
              {activeZones.length === 0 ? (
                <span className="text-zinc-600 font-mono text-sm">
                  Unassigned
                </span>
              ) : (
                activeZones.map((z: Zone) => (
                  <span
                    key={z._id}
                    className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-mono text-xs uppercase"
                  >
                    {z.name}
                    <button
                      onClick={() => removeZone(z.name)}
                      className="text-blue-300 hover:text-red-400 transition-colors"
                      title={`Remove ${z.name}`}
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2 shrink-0 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Assign to zone..."
            value={zoneInput}
            onChange={(e) => setZoneInput(e.target.value)}
            list="existing-zones"
            className="w-full md:w-48 bg-zinc-950 border border-zinc-800 text-white px-3 py-2 font-mono text-sm focus:border-blue-500 outline-none transition-colors"
          />
          <datalist id="existing-zones">
            {zonesData?.zones?.map((z: Zone) => (
              <option key={z._id} value={z.name} />
            ))}
          </datalist>
          <Button
            onClick={assignZone}
            disabled={loading || !zoneInput}
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono uppercase rounded-none"
          >
            Tag
          </Button>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-zinc-800 pb-4">
        <button
          onClick={() => setActiveTab("manual")}
          className={`flex items-center gap-2 px-4 py-2 font-mono text-sm transition-colors ${
            activeTab === "manual"
              ? "text-blue-400 border-b-2 border-blue-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Settings2 className="h-4 w-4" /> MANUAL
        </button>

        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex items-center gap-2 px-4 py-2 font-mono text-sm transition-colors ${
            activeTab === "schedule"
              ? "text-emerald-400 border-b-2 border-emerald-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <CalendarClock className="h-4 w-4" /> SCHEDULE
        </button>

        <button
          onClick={() => setActiveTab("power")}
          className={`flex items-center gap-2 px-4 py-2 font-mono text-sm transition-colors ${
            activeTab === "power"
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Zap className="h-4 w-4" /> POWER MODE
        </button>
      </div>

      <div className="min-h-[200px]">
        {activeTab === "manual" && (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
            <Button
              onClick={() => enqueue(1, "31")}
              disabled={loading}
              className="h-24 bg-blue-900/40 hover:bg-blue-800/60 border border-blue-500/50 text-blue-400 font-mono text-lg flex flex-col gap-2 rounded-none"
            >
              <Droplets className="h-6 w-6" />
              OPEN VALVE
            </Button>

            <Button
              onClick={() => enqueue(1, "30")}
              disabled={loading}
              className="h-24 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-lg flex flex-col gap-2 rounded-none"
            >
              <XCircle className="h-6 w-6" />
              CLOSE VALVE
            </Button>
          </div>
        )}

        {activeTab === "power" && (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="col-span-2 text-zinc-400 font-mono text-sm mb-2 bg-yellow-500/10 border border-yellow-500/20 p-4">
              <p className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-yellow-500 shrink-0" />
                <span>
                  <strong>Hardware Warning:</strong> STREGA valves must have
                  continuous external power to support Class C operation. The
                  internal battery is only intended as a backup for Class C
                  mode. Activating Class C on a battery-only device will rapidly
                  drain the unit.
                </span>
              </p>
            </div>

            <Button
              onClick={() => handleModeChange("A")}
              disabled={loading || pendingMode !== null}
              className={`h-24 font-mono flex flex-col gap-2 rounded-none transition-colors border ${
                pendingMode === "A" || (!pendingMode && currentMode === "A")
                  ? "bg-zinc-700 border-zinc-500 text-white"
                  : "bg-zinc-900/80 hover:bg-zinc-800 border-zinc-700 text-zinc-500"
              }`}
            >
              <Battery className="h-6 w-6" />
              <span>
                CLASS A
                <span className="text-xs block mt-1 opacity-70">
                  Battery Saving
                </span>
              </span>
            </Button>

            <Button
              onClick={() => handleModeChange("C")}
              disabled={loading || pendingMode !== null}
              className={`h-24 font-mono flex flex-col gap-2 rounded-none transition-colors border ${
                pendingMode === "C" || (!pendingMode && currentMode === "C")
                  ? "bg-yellow-600 hover:bg-yellow-500 border-yellow-400 text-white"
                  : "bg-yellow-900/20 hover:bg-yellow-800/40 border-yellow-500/50 text-yellow-600"
              }`}
            >
              <Zap className="h-6 w-6" />
              <span>
                CLASS C
                <span className="text-xs block mt-1 opacity-70">
                  Always Listening
                </span>
              </span>
            </Button>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="animate-in fade-in duration-300">
            <ScheduleBuilder
              devEui={devEui}
              irrigationSchedule={irrigationSchedule}
              syncedSchedule={syncedSchedule}
              pendingSchedule={pendingSchedule}
              lastTimeSyncAt={lastTimeSyncAt}
            />
          </div>
        )}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-4 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-zinc-300 font-mono text-sm uppercase tracking-wider">
            Downlink Queue
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={flushQueue}
            disabled={loading || !qData?.queue?.length}
            className="h-8 border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-none"
          >
            <Trash2 className="h-4 w-4 mr-2" /> Flush
          </Button>
        </div>

        {qData?.queue?.length === 0 ? (
          <p className="text-zinc-600 font-mono text-sm">
            Queue is empty. Device is synced.
          </p>
        ) : (
          <div className="space-y-2">
            {qData?.queue?.map((item: QueueItem, i: number) => (
              <div
                key={item.fCntDown || i}
                className="flex justify-between items-center bg-zinc-950 p-3 border border-zinc-800 font-mono text-sm"
              >
                <div>
                  <span className="text-emerald-400 mr-4">
                    FPort {item.fPort}
                  </span>
                  <span className="text-zinc-400">Payload: 0x{item.data}</span>
                </div>
                <span className="text-yellow-500/80 text-xs">
                  Pending Uplink...
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}