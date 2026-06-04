export function encodeSchedulerPayload(
  days: number[], 
  slots: { startHour: number; startMin: number; endHour: number; endMin: number }[]
): string {
  let dayByte = 0;
  if (days.length === 0 || days.length === 7) {
    dayByte = 0xFF; 
  } else {
    for (const d of days) dayByte |= (1 << d);
  }
  
  const bytes: number[] = [dayByte];
  
  for (let i = 0; i < 4; i++) {
    const slot = slots[i];
    if (slot) {
      bytes.push(slot.startHour | 0x80);
      bytes.push(slot.startMin);
      bytes.push(slot.endHour);
      bytes.push(slot.endMin);
    } else {
      bytes.push(0, 0, 0, 0);
    }
  }
  return Buffer.from(bytes).toString('hex');
}