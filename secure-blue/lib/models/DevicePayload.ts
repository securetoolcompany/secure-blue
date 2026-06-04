import mongoose from 'mongoose';

const DevicePayloadSchema = new mongoose.Schema({
  devEui: { type: String, required: true, unique: true },
  tenantId: { type: String, required: true }, 
  applicationId: { type: String }, 
  // Add name if you are saving device names to DB instead of fetching from ChirpStack
  name: { type: String }, 
  valveState: { type: String, enum: ['open', 'closed', 'unknown'], default: 'unknown' },
  batteryMv: { type: Number },
  cableFault: { type: Boolean, default: false },
  rssi: { type: Number },
  snr: { type: Number },
  lastSeenAt: { type: Date },
  
  // NEW: Hardware Power Mode State
  // This acts as your "Source of Truth" so the UI doesn't rely on ChirpStack's volatile session cache
  deviceClass: { type: String, enum: ['A', 'B', 'C'], default: 'A' },
  
  // NEW: Individual Device Power Automation
  // This powers the new DevicePowerSchedule.tsx component
  powerSchedule: {
    enabled: { type: Boolean, default: false },
    classCStart: { type: String, default: '08:00' },
    classCEnd: { type: String, default: '17:00' }
  }
}, { timestamps: true });

export default mongoose.models.DevicePayload || mongoose.model('DevicePayload', DevicePayloadSchema);