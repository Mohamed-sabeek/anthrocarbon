import mongoose from 'mongoose';

const carbonCalculationSchema = new mongoose.Schema({
  transportType: {
    type: String,
    required: true,
    enum: ['Car', 'Bus', 'Train', 'Bike', 'Walking'],
  },
  distance: {
    type: Number,
    required: true,
    min: 0,
  },
  electricityUsage: {
    type: Number,
    required: true,
    min: 0,
  },
  foodPreference: {
    type: String,
    required: true,
    enum: ['Vegetarian', 'Mixed', 'Non-Vegetarian'],
  },
  wasteGenerated: {
    type: Number,
    required: true,
    min: 0,
  },
  transportEmission: {
    type: Number,
    required: true,
  },
  electricityEmission: {
    type: Number,
    required: true,
  },
  foodEmission: {
    type: Number,
    required: true,
  },
  wasteEmission: {
    type: Number,
    required: true,
  },
  totalCarbonFootprint: {
    type: Number,
    required: true,
  },
  ecoScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  largestSource: {
    type: String,
    required: true,
  },
  weeklyProjection: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('CarbonCalculation', carbonCalculationSchema);
