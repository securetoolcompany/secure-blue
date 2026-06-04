import { NextResponse } from 'next/server';
import { auth } from '@/auth'; // <-- Import the Auth helper
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
    // 1. Verify the user is logged in
    const session = await auth();
    const userTenantId = session?.user?.tenantId;

    if (!userTenantId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Fetch all registered devices from ChirpStack
    const appId = process.env.CHIRPSTACK_APP_ID;
    if (!appId) throw new Error("CHIRPSTACK_APP_ID is missing.");

    const res = await fetchChirpStack(`/api/devices?applicationId=${appId}&limit=100`);
    if (!res.result) throw new Error("ChirpStack API returned an empty result.");

    // 3. Extract the EUIs from ChirpStack and fetch their live MongoDB states
    await connectToDatabase();
        const devEuis = res.result.map((d: ChirpStackDeviceListItem) => d.devEui);
        const dbStates = await DevicePayload.find({ devEui: { $in: devEuis } }).lean() as IDevicePayload[];
    
    const stateMap = new Map<string, IDevicePayload>(
      dbStates.map((doc) => [doc.devEui, doc])
    );

    // 4. Map devices (ChirpStack already scopes this to the correct App ID)
    const devices: Device[] = res.result.map((d: ChirpStackDeviceListItem) => {
        const state = stateMap.get(d.devEui);
        const lastSeen = state?.lastSeenAt || d.lastSeenAt;
        
        let onlineState: 'online' | 'warning' | 'offline' = 'offline';
        if (lastSeen) {
          const mins = differenceInMinutes(new Date(), new Date(lastSeen));
          if (mins < 10) onlineState = 'online';
          else if (mins <= 30) onlineState = 'warning';
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
          onlineState
        };
      });

    return NextResponse.json({ devices });
    
  } catch (error) {
    console.error("🔥 FETCH ERROR:", error); 
    return NextResponse.json({ error: 'Failed to fetch devices' }, { status: 500 });
  }
}