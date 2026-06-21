import express from 'express';
import {
  createCalculation,
  getCalculations,
  getLatestCalculation,
  clearCalculations,
  getLatestInsights,
} from '../controllers/calculationController.js';
import {
  createOrUpdateGoal,
  getGoal,
} from '../controllers/goalController.js';

const router = express.Router();

// Calculation Routes
router.post('/calculations', createCalculation);
router.get('/calculations', getCalculations);
router.get('/calculations/latest', getLatestCalculation);
router.delete('/calculations', clearCalculations);

// Goal Routes
router.post('/goals', createOrUpdateGoal);
router.get('/goals', getGoal);

// Insights Route
router.get('/insights', getLatestInsights);

export default router;
