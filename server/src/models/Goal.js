import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  targetCarbonFootprint: {
    type: Number,
    required: true,
    min: 0,
  },
  currentCarbonFootprint: {
    type: Number,
    required: true,
    min: 0,
  },
  progressPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Goal', goalSchema);
