import mongoose from 'mongoose';

const ZoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tenantId: { type: String, required: true, index: true }, 
  devices: [{ type: String }],
  
  // NEW: Automation memory for the Cron engine
  powerSchedule: {
    enabled: { type: Boolean, default: false },
    classCStart: { type: String, default: "08:00" }, // 24h format HH:mm
    classCEnd: { type: String, default: "17:00" }
  }
}, { timestamps: true });

ZoneSchema.index({ tenantId: 1, name: 1 }, { unique: true });

export default mongoose.models.Zone || mongoose.model('Zone', ZoneSchema);