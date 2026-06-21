import CarbonCalculation from '../models/CarbonCalculation.js';
import { generateInsights } from '../services/insightsEngine.js';

// Emission factors
const transportFactors = {
  Car: 0.25,
  Bus: 0.10,
  Train: 0.05,
  Bike: 0,
  Walking: 0,
};

const foodFactors = {
  Vegetarian: 1,
  Mixed: 2,
  'Non-Vegetarian': 3,
};

export const createCalculation = async (req, res) => {
  try {
    const { transportType, distance, electricityUsage, foodPreference, wasteGenerated } = req.body;

    // Validate inputs
    if (!transportType || distance === undefined || electricityUsage === undefined || !foodPreference || wasteGenerated === undefined) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const dist = parseFloat(distance);
    const elec = parseFloat(electricityUsage);
    const waste = parseFloat(wasteGenerated);

    if (isNaN(dist) || dist < 0 || isNaN(elec) || elec < 0 || isNaN(waste) || waste < 0) {
      return res.status(400).json({ error: 'Numeric inputs must be non-negative numbers' });
    }

    // Calculations
    const transportFactor = transportFactors[transportType] !== undefined ? transportFactors[transportType] : 0;
    const transportEmission = parseFloat((dist * transportFactor).toFixed(2));
    const electricityEmission = parseFloat((elec * 0.82).toFixed(2));
    const foodEmission = foodFactors[foodPreference] !== undefined ? foodFactors[foodPreference] : 2;
    const wasteEmission = parseFloat((waste * 0.5).toFixed(2));

    const totalCarbonFootprint = parseFloat((transportEmission + electricityEmission + foodEmission + wasteEmission).toFixed(2));
    const weeklyProjection = parseFloat((totalCarbonFootprint * 7).toFixed(2));

    // Eco Score Formula: 100 - (total * 3) clamped to 10 - 100
    const baseScore = 100 - (totalCarbonFootprint * 3);
    const ecoScore = Math.max(10, Math.min(100, Math.round(baseScore)));

    // Detect Largest Source
    const sources = [
      { name: 'Transportation', value: transportEmission },
      { name: 'Electricity', value: electricityEmission },
      { name: 'Food', value: foodEmission },
      { name: 'Waste', value: wasteEmission },
    ];
    const largestSource = [...sources].sort((a, b) => b.value - a.value)[0].name;

    const newCalculation = new CarbonCalculation({
      transportType,
      distance: dist,
      electricityUsage: elec,
      foodPreference,
      wasteGenerated: waste,
      transportEmission,
      electricityEmission,
      foodEmission,
      wasteEmission,
      totalCarbonFootprint,
      ecoScore,
      largestSource,
      weeklyProjection,
    });

    const saved = await newCalculation.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error creating calculation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCalculations = async (req, res) => {
  try {
    const history = await CarbonCalculation.find().sort({ createdAt: -1 });
    res.status(200).json(history);
  } catch (error) {
    console.error('Error fetching calculations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getLatestCalculation = async (req, res) => {
  try {
    const latest = await CarbonCalculation.findOne().sort({ createdAt: -1 });
    res.status(200).json(latest || null);
  } catch (error) {
    console.error('Error fetching latest calculation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const clearCalculations = async (req, res) => {
  try {
    await CarbonCalculation.deleteMany({});
    res.status(200).json({ message: 'History cleared successfully' });
  } catch (error) {
    console.error('Error clearing calculations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getLatestInsights = async (req, res) => {
  try {
    const latest = await CarbonCalculation.findOne().sort({ createdAt: -1 });
    if (!latest) {
      return res.status(200).json(null);
    }
    const insights = generateInsights(latest);
    res.status(200).json(insights);
  } catch (error) {
    console.error('Error generating insights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
