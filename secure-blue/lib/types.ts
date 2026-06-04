export interface Device {
  devEui: string;
  name: string;
  lastSeenAt: string | null;
  valveState: 'open' | 'closed' | 'unknown';
  batteryMv: number | null;
  cableFault: boolean;
  rssi: number | null;
  snr: number | null;
  onlineState: 'online' | 'warning' | 'offline';
  deviceClass: 'A' | 'B' | 'C'; // Ensures your Power Mode display works
  dr?: number;                 // Fixes the "dr does not exist" error
}

export interface QueueItem {
  id?: string;
  fCntDown?: number;
  fPort: number;
  data: string; // Hex string for UI
}

export interface ChirpStackDeviceListItem {
  devEui: string;
  name: string;
  description?: string;
  deviceProfileId?: string;
  deviceProfileName?: string;
  lastSeenAt?: string;
}

export interface ChirpStackQueueItem {
  fCntDown?: number;
  fPort: number;
  data: string; // Base64 string from ChirpStack
}

export interface DeviceEvent {
  time: string;
  fPort: number;
  data: string; // Base64 raw
  object?: {
    Actuator?: number;
    Battery?: number;
    Cable?: number;
    MMType?: string;
    [key: string]: unknown;
  };
}