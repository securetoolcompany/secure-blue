import mongoose from 'mongoose';

const ZoneSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  devices: [{ 
    type: String // Stores the devEui of the valves assigned to this zone
  }],
  // Power Mode Automation Engine (Server-side cron)
  powerSchedule: {
    enabled: { type: Boolean, default: false },
    classCStart: { type: String, default: '08:00' },
    classCEnd: { type: String, default: '17:00' }
  },
  // Mirror of the autonomous STREGA hardware watering schedule
  hardwareSchedule: [{
    startHour: { type: Number, required: true },
    startMin: { type: Number, required: true },
    endHour: { type: Number, required: true },
    endMin: { type: Number, required: true }
  }]
});

export default mongoose.models.Zone || mongoose.model('Zone', ZoneSchema);