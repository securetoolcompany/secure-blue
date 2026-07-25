export function encodeSchedulerPayload(
  days: number[],
  slots: { startHour: number; startMin: number; endHour: number; endMin: number }[]
): string {
  // Day mask: bit 7 = "all days", bits 0–6 = Sunday–Saturday.
  let dayByte = 0;
  if (days.length === 0 || days.length === 7) {
    dayByte = 0x80;
  } else {
    for (const d of days) {
      // Expect days as 0–6 for Sunday–Saturday; adjust here if your UI uses a different convention.
      dayByte |= (1 << d);
    }
  }

  // STREGA scheduler frame is always 17 bytes:
  // byte 0 = day mask
  // bytes 1–4  = slot 1 (HH_on|0x80, MM_on, HH_off, MM_off)
  // bytes 5–8  = slot 2
  // bytes 9–12 = slot 3
  // bytes 13–16 = slot 4
  const bytes = new Array<number>(17).fill(0);

  bytes[0] = dayByte;

  for (let i = 0; i < 4; i++) {
    const slot = slots[i];
    if (!slot) continue;

    const base = 1 + i * 4;

    // Start hour: set MSB flag (0x80) as per STREGA spec,
    // keep only lower 5 bits for hour value as a safety guard.
    bytes[base + 0] = (slot.startHour & 0x1f) | 0x80;

    // Minutes and end hour/minute are stored as plain 0–59 / 0–23 ints.
    bytes[base + 1] = slot.startMin;
    bytes[base + 2] = slot.endHour;
    bytes[base + 3] = slot.endMin;
  }

  return Buffer.from(bytes).toString('hex');
}