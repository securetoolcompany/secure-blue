"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import {
  Battery,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  MapPin,
  Layers,
  Search,
  CheckCircle2,
  Circle,
  Zap,
  Signal,
  RefreshCw,
  LoaderCircle,
  CalendarClock,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Device } from "@/lib/types";
import { Button } from "@/components/ui/button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Zone {
  _id: string;
  name: string;
  devices: string[];
}

function extractNumber(name: string): number {
  const match = name.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Infinity;
}

function getBatteryUI(mV: number | null) {
  if (!mV) return { text: "Unknown", color: "text-zinc-600", Icon: Battery };

  const MAX_MV = 3600;
  const MIN_MV = 2900;
  let percent = Math.round(((mV - MIN_MV) / (MAX_MV - MIN_MV)) * 100);
  percent = Math.max(0, Math.min(100, percent));

  if (percent >= 75)
    return { text: `${percent}%`, color: "text-emerald-500", Icon: BatteryFull };
  if (percent >= 35)
    return { text: `${percent}%`, color: "text-yellow-500", Icon: BatteryMedium };
  if (percent >= 15)
    return { text: `${percent}%`, color: "text-orange-500", Icon: BatteryLow };
  return { text: `${percent}%`, color: "text-red-500", Icon: BatteryWarning };
}

function schedulesMatch(a: any[] = [], b: any[] = []) {
  if (a.length !== b.length) return false;

  return a.every((slot, index) => {
    const other = b[index];
    return (
      slot?.startHour === other?.startHour &&
      slot?.startMin === other?.startMin &&
      slot?.endHour === other?.endHour &&
      slot?.endMin === other?.endMin
    );
  });
}

function getClockSyncUI(device: any) {
  if (!device?.lastTimeSyncAt) {
    return {
      label: "Clock not synced",
      className: "bg-zinc-800 text-zinc-400 border border-zinc-700",
      Icon: RefreshCw,
      iconClassName: "",
    };
  }

  return {
    label: "Clock synced",
    className: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    Icon: CheckCircle2,
    iconClassName: "",
  };
}

function getScheduleSyncUI(device: any) {
  const desired = Array.isArray(device?.irrigationSchedule)
    ? device.irrigationSchedule
    : [];

  const synced = Array.isArray(device?.syncedIrrigationSchedule)
    ? device.syncedIrrigationSchedule
    : [];

  if (device?.pendingSchedule) {
    return {
      label: "Schedule queued",
      className: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
      Icon: LoaderCircle,
      iconClassName: "animate-spin",
    };
  }

  if (desired.length === 0) {
    return {
      label: "No schedule",
      className: "bg-zinc-800 text-zinc-400 border border-zinc-700",
      Icon: CalendarClock,
      iconClassName: "",
    };
  }

  const isSynced = schedulesMatch(desired, synced);

  if (isSynced) {
    return {
      label: "Schedule synced",
      className: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      Icon: CheckCircle2,
      iconClassName: "",
    };
  }

  return {
    label: "Schedule not synced",
    className: "bg-zinc-800 text-zinc-400 border border-zinc-700",
    Icon: CalendarClock,
    iconClassName: "",
  };
}

export default function FleetOverview() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [zoneFilter, setZoneFilter] = useState("ALL");
  const [selectedEuis, setSelectedEuis] = useState<string[]>([]);
  const [bulkZoneInput, setBulkZoneInput] = useState("");
  const [isBulkLoading, setIsBulkLoading] = useState(false);

  const { data, mutate: mutateDevices } = useSWR(
    "/api/chirpstack/devices",
    fetcher,
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
      dedupingInterval: 0,
    }
  );

  const { data: zonesData, mutate: mutateZones } = useSWR("/api/zones", fetcher);

  const filteredDevices = useMemo(() => {
    if (!data?.devices) return [];

    return data.devices
      .filter((d: Device) => {
        const matchesSearch =
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.devEui.toLowerCase().includes(search.toLowerCase());

        const matchesZone =
          zoneFilter === "ALL" ||
          zonesData?.zones
            ?.find((z: Zone) => z.name === zoneFilter)
            ?.devices.includes(d.devEui);

        return matchesSearch && matchesZone;
      })
      .sort(
        (a: Device, b: Device) =>
          extractNumber(a.name) - extractNumber(b.name)
      );
  }, [data, search, zoneFilter, zonesData]);

  const toggleSelection = (eui: string) => {
    setSelectedEuis((prev) =>
      prev.includes(eui) ? prev.filter((id) => id !== eui) : [...prev, eui]
    );
  };

  const assignBulkZone = async () => {
    if (!bulkZoneInput || selectedEuis.length === 0) return;

    setIsBulkLoading(true);

    await fetch("/api/zones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: bulkZoneInput, devEuis: selectedEuis, action: "add" }),
    });

    setBulkZoneInput("");
    setSelectedEuis([]);
    await mutateZones();
    setIsBulkLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-32">
      <div className="max-w-7xl mx-auto">
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
            {zonesData?.zones?.map((z: Zone) => (
              <option key={z._id} value={z.name}>
                {z.name}
              </option>
            ))}
          </select>

          <Button
            onClick={() => router.push("/portal/irrigation/zones")}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-none font-mono uppercase"
          >
            <Layers className="h-4 w-4 mr-2" /> Manage Zones
          </Button>

          <Button
            onClick={() => mutateDevices()}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-none font-mono uppercase"
          >
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map(
            (device: Device & {
              pendingSchedule?: string | null;
              syncedIrrigationSchedule?: unknown[];
              irrigationSchedule?: unknown[];
              lastTimeSyncAt?: string | null;
            }) => {
              const batteryUI = getBatteryUI(device.batteryMv);
              const BatteryIcon = batteryUI.Icon;
              const isSelected = selectedEuis.includes(device.devEui);
              const deviceZones =
                zonesData?.zones?.filter((z: Zone) =>
                  z.devices.includes(device.devEui)
                ) || [];

              const clockSyncUI = getClockSyncUI(device);
              const ClockSyncIcon = clockSyncUI.Icon;

              const scheduleSyncUI = getScheduleSyncUI(device);
              const ScheduleSyncIcon = scheduleSyncUI.Icon;

              return (
                <div
                  key={device.devEui}
                  className={`bg-zinc-900 border ${
                    isSelected
                      ? "border-blue-500 bg-blue-900/10"
                      : "border-zinc-800 hover:border-blue-500/50"
                  } p-6 transition-colors cursor-pointer relative overflow-hidden group`}
                  onClick={() => router.push(`/portal/irrigation/${device.devEui}`)}
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${
                      device.onlineState === "online" ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />

                  <div
                    className="absolute top-4 right-4 z-10 p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(device.devEui);
                    }}
                  >
                    {isSelected ? (
                      <CheckCircle2 className="h-6 w-6 text-blue-500" />
                    ) : (
                      <Circle className="h-6 w-6 text-zinc-600 group-hover:text-zinc-400" />
                    )}
                  </div>

                  <div className="flex justify-between items-start mb-4 pr-8 gap-3">
                    <div>
                      <h3 className="text-white font-mono text-lg font-bold">
                        {device.name}
                      </h3>
                      <div className="text-zinc-500 font-mono text-[10px] mt-1">
                        {device.devEui}
                      </div>
                    </div>

                    <div
                      className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-sm ${
                        device.valveState === "open"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                      }`}
                    >
                      {device.valveState}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {deviceZones.map((z: Zone) => (
                      <span
                        key={z._id}
                        className="inline-flex items-center gap-1 bg-blue-900/30 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-sm font-mono text-[10px] uppercase"
                      >
                        <MapPin className="h-3 w-3" /> {z.name}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-sm font-mono text-[10px] uppercase ${clockSyncUI.className}`}
                    >
                      <ClockSyncIcon
                        className={`h-3 w-3 ${clockSyncUI.iconClassName}`}
                      />
                      {clockSyncUI.label}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-sm font-mono text-[10px] uppercase ${scheduleSyncUI.className}`}
                    >
                      <ScheduleSyncIcon
                        className={`h-3 w-3 ${scheduleSyncUI.iconClassName}`}
                      />
                      {scheduleSyncUI.label}
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-[11px] text-zinc-400 border-t border-zinc-800 pt-3">
                    <div className="flex justify-between">
                      <span className={`flex items-center gap-2 ${batteryUI.color}`}>
                        <BatteryIcon className="h-3 w-3" /> {batteryUI.text}
                      </span>
                      <span className="flex items-center gap-2">
                        <Zap className="h-3 w-3" />
                        {device.deviceClass ? `Class ${device.deviceClass}` : "Class A"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <Signal className="h-3 w-3" /> {device.rssi ?? "N/A"} dBm
                      </span>
                      <span>
                        {device.lastSeenAt
                          ? formatDistanceToNow(new Date(device.lastSeenAt), {
                              addSuffix: true,
                            })
                          : "Never"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {selectedEuis.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 z-50 flex justify-center">
          <div className="max-w-4xl w-full flex items-center justify-between gap-4">
            <span className="text-white font-mono uppercase tracking-widest">
              {selectedEuis.length} Devices Selected
            </span>

            <div className="flex gap-2">
              <input
                placeholder="Zone name..."
                value={bulkZoneInput}
                onChange={(e) => setBulkZoneInput(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 text-white px-3 py-2 font-mono text-sm outline-none"
              />
              <Button
                onClick={assignBulkZone}
                disabled={isBulkLoading || !bulkZoneInput}
                className="bg-blue-600 hover:bg-blue-500 rounded-none font-mono uppercase"
              >
                Add to Zone
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}