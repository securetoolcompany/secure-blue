export function encodeSchedulerPayload(
  days: number[],
  slots: { startHour: number; startMin: number; endHour: number; endMin: number }[]
): string {
  // Day mask: bit 7 = "all days", bits 0–6 = Sunday–Saturday.
  let dayByte = 0;
    if (days.length === 0) {
    dayByte = 0x80; // "all days" sentinel per STREGA spec
  } else {
    for (const d of days) {
      dayByte |= (1 << d);
    }
  }

  // STREGA scheduler frame is always 17 bytes:
  // byte 0 = day mask
  // bytes 1–4  = slot 1 (HH_on|0x80, MM_on, HH_off, MM_off)
  // bytes 5–8  = slot 2
  // bytes 9–12 = slot 3
  // bytes 13–16 = slot 4
  const bytes = new Array<number>(17).fill(0xFF); // fill with 0xFF = "no event"
  bytes[0] = dayByte;                              // then overwrite day byte

  for (let i = 0; i < 4; i++) {
    const slot = slots[i];
    if (!slot) continue;

    const base = 1 + i * 4;

    // Start hour: OR with 0x80 MSB flag as per STREGA spec (PORT 25).
    // No masking needed — valid hours (0–23) fit cleanly.
    bytes[base + 0] = slot.startHour | 0x80;

    // Start minute: plain 0–59
    bytes[base + 1] = slot.startMin;

    // End hour: plain 0–23 (no MSB flag on close time)
    bytes[base + 2] = slot.endHour;

    // End minute: plain 0–59
    bytes[base + 3] = slot.endMin;
  }

  return Buffer.from(bytes).toString('hex');
}