import mongoose from 'mongoose';

const DevicePayloadSchema = new mongoose.Schema({
  devEui: { type: String, required: true, unique: true },
  tenantId: { type: String, required: true }, 
  applicationId: { type: String }, 
  name: { type: String }, 
  valveState: { type: String, enum: ['open', 'closed', 'unknown'], default: 'unknown' },
  batteryMv: { type: Number },
  cableFault: { type: Boolean, default: false },
  rssi: { type: Number },
  snr: { type: Number },
  lastSeenAt: { type: Date },
  deviceClass: { type: String, enum: ['A', 'B', 'C'], default: 'A' },
  
  powerSchedule: {
    enabled: { type: Boolean, default: false },
    classCStart: { type: String, default: '08:00' },
    classCEnd: { type: String, default: '17:00' },
    qStashStartId: { type: String, default: null },
    qStashEndId: { type: String, default: null }
  },

  // The schedule we WANT to push to the device
  irrigationSchedule: [{
    startHour: { type: Number, required: true },
    startMin: { type: Number, required: true },
    endHour: { type: Number, required: true },
    endMin: { type: Number, required: true }
  }],

  // The schedule the device has CONFIRMED it received
  syncedIrrigationSchedule: [{
    startHour: { type: Number },
    startMin: { type: Number },
    endHour: { type: Number },
    endMin: { type: Number }
  }],

  // NEW: Hex-encoded schedule waiting for the device's next uplink check-in
  pendingSchedule: { type: String, default: null },

  // NEW: The exact time the clock was last synced
  lastTimeSyncAt: { type: Date }

}, { timestamps: true });

export default mongoose.models.DevicePayload || mongoose.model('DevicePayload', DevicePayloadSchema);