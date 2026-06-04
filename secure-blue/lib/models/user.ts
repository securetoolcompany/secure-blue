import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: { type: String },
  tenantId: { type: String, required: true }, // <-- Matches ChirpStack Tenant ID
  role: { type: String, enum: ['admin', 'viewer'], default: 'viewer' }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);