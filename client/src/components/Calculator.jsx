import React, { useState } from 'react';
import { Car, Zap, Apple, Trash2, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import apiService from '../services/api';

export default function Calculator({ onCalculationComplete }) {
  const [transportType, setTransportType] = useState('Car');
  const [distance, setDistance] = useState('15');
  const [electricity, setElectricity] = useState('8');
  const [foodPreference, setFoodPreference] = useState('Mixed');
  const [waste, setWaste] = useState('2');

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const transportOptions = [
    { name: 'Car', label: 'Car', factor: 0.25 },
    { name: 'Bus', label: 'Bus', factor: 0.10 },
    { name: 'Train', label: 'Train', factor: 0.05 },
    { name: 'Bike', label: 'Bicycle', factor: 0 },
    { name: 'Walking', label: 'Walking', factor: 0 },
  ];

  const foodOptions = [
    { name: 'Vegetarian', label: 'Vegetarian', value: 1, desc: 'Plant-focused diet 🌱' },
    { name: 'Mixed', label: 'Mixed Diet', value: 2, desc: 'Balanced meat & veg 🍽️' },
    { name: 'Non-Vegetarian', label: 'Non-Vegetarian', value: 3, desc: 'Regular meat intake 🥩' },
  ];

  const validate = () => {
    const tempErrors = {};
    if (distance === '' || isNaN(distance) || parseFloat(distance) < 0) {
      tempErrors.distance = 'Distance must be a non-negative number';
    }
    if (electricity === '' || isNaN(electricity) || parseFloat(electricity) < 0) {
      tempErrors.electricity = 'Electricity must be a non-negative number';
    }
    if (waste === '' || isNaN(waste) || parseFloat(waste) < 0) {
      tempErrors.waste = 'Waste must be a non-negative number';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const d = parseFloat(distance);
    const el = parseFloat(electricity);
    const w = parseFloat(waste);

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await apiService.saveCalculation({
        transportType,
        distance: d,
        electricityUsage: el,
        foodPreference,
        wasteGenerated: w,
      });

      onCalculationComplete(result);
    } catch (err) {
      console.error('Calculation submission error:', err);
      setSubmitError(
        err.response?.data?.error ||
        'Unable to process your calculation. Please check your backend connection.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setTransportType('Car');
    setDistance('15');
    setElectricity('8');
    setFoodPreference('Mixed');
    setWaste('2');
    setErrors({});
    setSubmitError(null);
  };

  return (
    <section id="calculator" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
            Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            Calculate Your Carbon Footprint
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your lifestyle information and discover your environmental impact.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-emerald-100/60 shadow-xl p-6 md:p-10 relative overflow-hidden">
          {/* Subtle eco-grid background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-bl-full -z-10" />

          <form onSubmit={handleCalculate} className="space-y-8">
            
            {/* 1. Transportation */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-950 font-bold text-lg font-display">
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600">
                  <Car className="h-5 w-5" />
                </div>
                <h3>1. Daily Commute & Transportation</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Transit Mode
                  </label>
                  <select
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white font-medium text-gray-800"
                  >
                    {transportOptions.map(option => (
                      <option key={option.name} value={option.name}>
                        {option.label} ({option.factor > 0 ? `${option.factor} kg CO₂/km` : '0 kg CO₂/km'})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Distance Travelled Daily (km)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="any"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      placeholder="e.g. 15"
                      className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                        errors.distance ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-emerald-500'
                      } focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-medium text-gray-800`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                      km
                    </span>
                  </div>
                  {errors.distance && (
                    <p className="flex items-center text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.distance}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-emerald-50" />

            {/* 2. Electricity & Energy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-950 font-bold text-lg font-display">
                <div className="bg-emerald-50 p-2 rounded-xl text-amber-500">
                  <Zap className="h-5 w-5" />
                </div>
                <h3>2. Household Energy Use</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Electricity Consumed Daily (kWh)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="any"
                      value={electricity}
                      onChange={(e) => setElectricity(e.target.value)}
                      placeholder="e.g. 8"
                      className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                        errors.electricity ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-emerald-500'
                      } focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-medium text-gray-800`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                      kWh
                    </span>
                  </div>
                  <span className="block text-[11px] text-gray-400 mt-1 font-medium">
                    National average is around 8-10 kWh/day per household. (0.82 kg CO₂/kWh)
                  </span>
                  {errors.electricity && (
                    <p className="flex items-center text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.electricity}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-emerald-50" />

            {/* 3. Diet Preferences */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-950 font-bold text-lg font-display">
                <div className="bg-emerald-50 p-2 rounded-xl text-teal-600">
                  <Apple className="h-5 w-5" />
                </div>
                <h3>3. Daily Diet Choices</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Dietary Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {foodOptions.map((opt) => {
                    const isSelected = foodPreference === opt.name;
                    return (
                      <div
                        key={opt.name}
                        onClick={() => setFoodPreference(opt.name)}
                        className={`cursor-pointer p-4 rounded-2xl border-2 transition-all text-center flex flex-col justify-center items-center ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                            : 'border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/10'
                        }`}
                      >
                        <span className="text-base font-bold text-emerald-950 font-display">
                          {opt.label}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {opt.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <hr className="border-emerald-50" />

            {/* 4. Waste */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-950 font-bold text-lg font-display">
                <div className="bg-emerald-50 p-2 rounded-xl text-rose-500">
                  <Trash2 className="h-5 w-5" />
                </div>
                <h3>4. Household Waste Production</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Waste Generated Daily (kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="any"
                      value={waste}
                      onChange={(e) => setWaste(e.target.value)}
                      placeholder="e.g. 2"
                      className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                        errors.waste ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-emerald-500'
                      } focus:ring-2 focus:ring-emerald-200 transition-all outline-none font-medium text-gray-800`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                      kg
                    </span>
                  </div>
                  <span className="block text-[11px] text-gray-400 mt-1 font-medium">
                    Average solid waste produced is 1.5 - 2 kg per person. (0.5 kg CO₂/kg)
                  </span>
                  {errors.waste && (
                    <p className="flex items-center text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.waste}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center space-x-3 text-rose-800 text-sm font-medium">
                <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Calculating Footprint...
                  </>
                ) : (
                  <>
                    Calculate My Footprint
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold rounded-2xl border border-gray-200 transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Form
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
