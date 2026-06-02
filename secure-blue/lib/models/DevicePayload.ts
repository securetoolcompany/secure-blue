import mongoose from 'mongoose';

const DevicePayloadSchema = new mongoose.Schema({
  devEui: { type: String, required: true, unique: true },
  tenantId: { type: String, required: true }, // <-- NEW: Links device to the Client
  applicationId: { type: String }, // Optional: useful if they have LeakStop AND Irrigation
  valveState: { type: String, enum: ['open', 'closed', 'unknown'], default: 'unknown' },
  batteryMv: { type: Number },
  cableFault: { type: Boolean, default: false },
  rssi: { type: Number },
  snr: { type: Number },
  lastSeenAt: { type: Date }
}, { timestamps: true });

export default mongoose.models.DevicePayload || mongoose.model('DevicePayload', DevicePayloadSchema);