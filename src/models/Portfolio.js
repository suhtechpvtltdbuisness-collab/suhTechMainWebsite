import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
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
  primaryCta: String,
  primaryLink: String,
  secondaryCta: String,
  secondaryLink: String,
  overviewBody: String,
  overviewGoals: [String],
  overviewImage: String,
  problemIntro: String,
  problems: [String],
  solutionIntro: String,
  solutions: [String],
  technologies: [String],
  results: [String],
  metrics: [{
    label: String,
    value: String,
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

export default mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);

