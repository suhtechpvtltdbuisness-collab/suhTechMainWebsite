import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  overview: String,
  outcomes: [String],
  process: [String],
  technologies: [String],
  pricing: [String],
  faqs: [{
    q: String,
    a: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);

