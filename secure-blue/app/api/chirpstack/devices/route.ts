import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { fetchChirpStack } from '@/lib/chirpstack';
import { connectToDatabase } from '@/lib/mongodb';
import DevicePayload from '@/lib/models/DevicePayload';
import { Device, ChirpStackDeviceListItem } from '@/lib/types';
import { differenceInMinutes } from 'date-fns';

export const dynamic = 'force-dynamic';

interface IDevicePayload {
  devEui: string;
  tenantId: string;
  valveState?: 'open' | 'closed' | 'unknown';
  batteryMv?: number;
  cableFault?: boolean;
  rssi?: number;
  snr?: number;
  lastSeenAt?: Date;
}

export async function GET() {
  try {
    const session = await auth();
    const userTenantId = session?.user?.tenantId;

    if (!userTenantId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const appId = process.env.CHIRPSTACK_APP_ID;
    if (!appId) throw new Error("CHIRPSTACK_APP_ID is missing.");

    // 1. Fetch all devices
    const res = await fetchChirpStack(`/api/devices?applicationId=${appId}&limit=100`);
    if (!res.result) throw new Error("ChirpStack API returned an empty result.");

    // 2. Fetch local DB states
    await connectToDatabase();
    const devEuis = res.result.map((d: ChirpStackDeviceListItem) => d.devEui);
    const dbStates = await DevicePayload.find({ devEui: { $in: devEuis } }).lean() as IDevicePayload[];
    
    const stateMap = new Map<string, IDevicePayload>(
      dbStates.map((doc) => [doc.devEui, doc])
    );

    // 3. Map devices and fetch real-time session class for each
    const devices: Device[] = await Promise.all(
      res.result.map(async (d: ChirpStackDeviceListItem) => {
        const state = stateMap.get(d.devEui);
        const lastSeen = state?.lastSeenAt || d.lastSeenAt;
        
        // Fetch real-time activation to get the actual LoRaWAN Class
        const activationRes = await fetchChirpStack(`/api/devices/${d.devEui}/activation`).catch(() => null);
        const deviceClass = activationRes?.deviceActivation?.deviceClass || 'A';
        
        let onlineState: 'online' | 'warning' | 'offline' = 'offline';
        if (lastSeen) {
          const mins = differenceInMinutes(new Date(), new Date(lastSeen));
          if (mins < 65) onlineState = 'online';
          else if (mins <= 120) onlineState = 'warning';
        }

        return {
          devEui: d.devEui,
          name: d.name,
          lastSeenAt: lastSeen ? new Date(lastSeen).toISOString() : null,
          valveState: state?.valveState || 'unknown',
          batteryMv: state?.batteryMv || null,
          cableFault: state?.cableFault || false,
          rssi: state?.rssi || null,
          snr: state?.snr || null,
          onlineState,
          deviceClass // Now included for your dashboard
        };
      })
    );

    return NextResponse.json({ devices });
    
  } catch (error) {
    console.error("🔥 FETCH ERROR:", error); 
    return NextResponse.json({ error: 'Failed to fetch devices' }, { status: 500 });
  }
}