import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const mapCalculation = (data) => {
  if (!data) return null;
  
  let ecoStatus = 'Moderate';
  let ecoColor = 'text-amber-700 bg-amber-50 border-amber-200';
  let ecoIcon = '⚠️';

  if (data.ecoScore >= 90) {
    ecoStatus = 'Excellent';
    ecoColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    ecoIcon = '🌱';
  } else if (data.ecoScore >= 70) {
    ecoStatus = 'Good';
    ecoColor = 'text-teal-700 bg-teal-50 border-teal-200';
    ecoIcon = '🌿';
  } else if (data.ecoScore >= 50) {
    ecoStatus = 'Moderate';
    ecoColor = 'text-amber-700 bg-amber-50 border-amber-200';
    ecoIcon = '⚠️';
  } else {
    ecoStatus = 'Poor';
    ecoColor = 'text-rose-700 bg-rose-50 border-rose-200';
    ecoIcon = '🚨';
  }

  return {
    _id: data._id,
    inputs: {
      transportType: data.transportType,
      distance: data.distance,
      electricity: data.electricityUsage,
      foodPreference: data.foodPreference,
      waste: data.wasteGenerated,
    },
    breakdown: {
      transport: data.transportEmission,
      electricity: data.electricityEmission,
      food: data.foodEmission,
      waste: data.wasteEmission,
    },
    total: data.totalCarbonFootprint,
    ecoScore: data.ecoScore,
    ecoStatus,
    ecoColor,
    ecoIcon,
    largestSource: data.largestSource,
    weeklyProjection: data.weeklyProjection,
    date: data.createdAt,
  };
};

const mapGoal = (data) => {
  if (!data) return null;
  return {
    _id: data._id,
    targetFootprint: data.targetCarbonFootprint,
    currentFootprint: data.currentCarbonFootprint,
    progressPercent: data.progressPercentage,
  };
};

export const apiService = {
  // Calculations
  saveCalculation: async (data) => {
    const response = await apiClient.post('/calculations', data);
    return mapCalculation(response.data);
  },
  getCalculations: async () => {
    const response = await apiClient.get('/calculations');
    return (response.data || []).map(mapCalculation);
  },
  getLatestCalculation: async () => {
    const response = await apiClient.get('/calculations/latest');
    return mapCalculation(response.data);
  },
  clearCalculations: async () => {
    const response = await apiClient.delete('/calculations');
    return response.data;
  },

  // Goals
  getGoal: async () => {
    const response = await apiClient.get('/goals');
    return mapGoal(response.data);
  },
  saveGoal: async (data) => {
    const response = await apiClient.post('/goals', data);
    return mapGoal(response.data);
  },

  // Insights
  getInsights: async () => {
    const response = await apiClient.get('/insights');
    return response.data;
  },
};

export default apiService;
