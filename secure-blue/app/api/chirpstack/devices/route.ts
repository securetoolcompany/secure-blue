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
  lastSeenAt?: Date | string;
}

function pickNewestDate(
  a?: Date | string | null,
  b?: Date | string | null
): Date | null {
  const da = a ? new Date(a) : null;
  const db = b ? new Date(b) : null;

  const aValid = da && !Number.isNaN(da.getTime());
  const bValid = db && !Number.isNaN(db.getTime());

  if (aValid && bValid) return da! > db! ? da! : db!;
  if (aValid) return da!;
  if (bValid) return db!;
  return null;
}

function getOnlineState(lastSeen: Date | null): 'online' | 'offline' {
  if (!lastSeen || Number.isNaN(lastSeen.getTime())) return 'offline';

  const mins = Math.max(0, differenceInMinutes(new Date(), lastSeen));
  return mins < 65 ? 'online' : 'offline';
}

export async function GET() {
  try {
    const session = await auth();
    const userTenantId = session?.user?.tenantId;

    if (!userTenantId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const appId = process.env.CHIRPSTACK_APP_ID;
    if (!appId) {
      throw new Error('CHIRPSTACK_APP_ID is missing.');
    }

    const chirpRes = await fetchChirpStack(
      `/api/devices?applicationId=${appId}&limit=100`
    );

    if (!chirpRes?.result || !Array.isArray(chirpRes.result)) {
      throw new Error('ChirpStack API returned an empty or invalid result.');
    }

    const chirpDevices = chirpRes.result as ChirpStackDeviceListItem[];
    const devEuis = chirpDevices.map((d) => d.devEui);

    await connectToDatabase();

    const dbStates = (await DevicePayload.find({
      tenantId: userTenantId,
      devEui: { $in: devEuis },
    }).lean()) as IDevicePayload[];

    const stateMap = new Map<string, IDevicePayload>(
      dbStates.map((doc) => [doc.devEui, doc])
    );

    const activationResults = await Promise.allSettled(
      chirpDevices.map((d) =>
        fetchChirpStack(`/api/devices/${d.devEui}/activation`)
      )
    );

    const devices: Device[] = chirpDevices.map((d, index) => {
      const state = stateMap.get(d.devEui);
      const lastSeenDate = pickNewestDate(state?.lastSeenAt, d.lastSeenAt);
      const onlineState = getOnlineState(lastSeenDate);

      const activationResult = activationResults[index];
      const deviceClass =
        activationResult.status === 'fulfilled'
          ? activationResult.value?.deviceActivation?.deviceClass ?? 'A'
          : 'A';

      return {
        devEui: d.devEui,
        name: d.name,
        lastSeenAt: lastSeenDate ? lastSeenDate.toISOString() : null,
        valveState: state?.valveState ?? 'unknown',
        batteryMv: state?.batteryMv ?? null,
        cableFault: state?.cableFault ?? false,
        rssi: state?.rssi ?? null,
        snr: state?.snr ?? null,
        onlineState,
        deviceClass,
      };
    });

    return NextResponse.json({ devices });
  } catch (error) {
    console.error('🔥 FETCH ERROR:', error);
    return NextResponse.json({ error: 'Failed to fetch devices' }, { status: 500 });
  }
}