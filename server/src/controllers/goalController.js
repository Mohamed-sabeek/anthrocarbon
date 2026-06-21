import Goal from '../models/Goal.js';

export const createOrUpdateGoal = async (req, res) => {
  try {
    const { targetCarbonFootprint, currentCarbonFootprint } = req.body;

    if (targetCarbonFootprint === undefined || currentCarbonFootprint === undefined) {
      return res.status(400).json({ error: 'targetCarbonFootprint and currentCarbonFootprint are required' });
    }

    const target = parseFloat(targetCarbonFootprint);
    const current = parseFloat(currentCarbonFootprint);

    if (isNaN(target) || target < 0 || isNaN(current) || current < 0) {
      return res.status(400).json({ error: 'Footprints must be non-negative numbers' });
    }

    // Progress percentage
    const progressPercentage = current <= target
      ? 100
      : Math.round((target / current) * 100);

    // Find if a goal already exists and update, or create a new one
    let goal = await Goal.findOne().sort({ createdAt: -1 });

    if (goal) {
      goal.targetCarbonFootprint = target;
      goal.currentCarbonFootprint = current;
      goal.progressPercentage = progressPercentage;
      await goal.save();
    } else {
      goal = new Goal({
        targetCarbonFootprint: target,
        currentCarbonFootprint: current,
        progressPercentage,
      });
      await goal.save();
    }

    res.status(200).json(goal);
  } catch (error) {
    console.error('Error saving goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne().sort({ createdAt: -1 });
    res.status(200).json(goal || null);
  } catch (error) {
    console.error('Error fetching goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
