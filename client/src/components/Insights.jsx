import React, { useState, useEffect } from 'react';
import { Lightbulb, Car, Zap, Apple, Trash2, AlertCircle } from 'lucide-react';
import apiService from '../services/api';

const categoryMeta = {
  transport: {
    icon: <Car className="h-6 w-6 text-blue-500" />,
    color: 'border-blue-100 bg-blue-50/50',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  electricity: {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    color: 'border-amber-100 bg-amber-50/50',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  food: {
    icon: <Apple className="h-6 w-6 text-emerald-500" />,
    color: 'border-emerald-100 bg-emerald-50/50',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  waste: {
    icon: <Trash2 className="h-6 w-6 text-rose-500" />,
    color: 'border-rose-100 bg-rose-50/50',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
  },
};

export default function Insights({ currentFootprint }) {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getInsights();
        setInsights(data);
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Failed to load recommendation data from backend.');
      } finally {
        setLoading(false);
      }
    };

    if (currentFootprint) {
      fetchInsights();
    }
  }, [currentFootprint]);

  if (loading) {
    return (
      <div className="py-12 flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">Generating custom recommendations...</p>
      </div>
    );
  }

  if (error || !insights) {
    return (
      <div className="py-8 text-center text-rose-600 font-semibold flex items-center justify-center space-x-2">
        <AlertCircle className="h-5 w-5" />
        <span>{error || 'No insights available.'}</span>
      </div>
    );
  }

  const {
    largestSource,
    largestCategory,
    concern,
    opportunity,
    recommendation,
    potentialPercent,
    potentialSavings,
    optimizedTotal,
    generalGuidelines,
  } = insights;

  const currentMeta = categoryMeta[largestCategory] || categoryMeta.transport;

  return (
    <div id="insights" className="space-y-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        
        {/* Major Insight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main analysis card */}
          <div className="lg:col-span-8 bg-white border border-emerald-100/60 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-emerald-100/80 rounded-2xl text-emerald-700">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-950 font-display">
                      Smart Assistant Diagnosis
                    </h3>
                    <p className="text-xs text-gray-500">Based on your latest lifestyle submission</p>
                  </div>
                </div>
                <div>
                  <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-xl border ${currentMeta.tagColor}`}>
                    Largest Source: {largestSource}
                  </span>
                </div>
              </div>

              {/* Major environmental concern */}
              <div className="space-y-6">
                <div className="space-y-2 text-left">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Major Environmental Concern
                  </h4>
                  <p className="text-gray-700 font-medium text-base">
                    {concern}
                  </p>
                </div>

                {/* Improvement opportunities */}
                <div className="space-y-2 text-left">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Improvement Opportunities
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {opportunity}
                  </p>
                </div>

                {/* Personalized recommendations */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100/50 space-y-2 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center">
                    <span className="mr-1.5">💡</span> Personalized Recommendation
                  </h4>
                  <p className="text-emerald-900 font-semibold text-sm leading-relaxed">
                    {recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact potential card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-900 to-teal-800 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden text-left">
            {/* Glowing pattern */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-2">
              <span className="text-emerald-300 font-bold uppercase tracking-wider text-[11px] bg-white/10 px-2.5 py-1 rounded-lg">
                Optimization Metric
              </span>
              <h3 className="text-xl font-bold font-display pt-2">
                Estimated Reduction Potential
              </h3>
              <p className="text-emerald-100 text-xs leading-relaxed">
                By target-treating {largestSource} with our suggestions, you can shave off:
              </p>
            </div>

            <div className="my-6 space-y-1">
              <span className="block text-4xl sm:text-5xl font-black font-display text-emerald-400">
                -{potentialPercent}%
              </span>
              <span className="block text-sm text-emerald-200 font-medium">
                saving ≈ <strong className="text-white text-base">{potentialSavings} kg</strong> CO₂ / day
              </span>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-emerald-200">
                <span>Current Daily:</span>
                <span className="font-bold text-white">{currentFootprint.total} kg</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-200">
                <span>Optimized Target:</span>
                <span className="font-bold text-emerald-400">{optimizedTotal} kg</span>
              </div>
            </div>
          </div>

        </div>

        {/* Other categories tips */}
        <h4 className="text-emerald-950 font-bold font-display text-lg mb-6 text-left">
          General Sustainability Guidelines
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generalGuidelines.map((item) => {
            const meta = categoryMeta[item.key] || categoryMeta.transport;
            return (
              <div
                key={item.key}
                className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {meta.icon}
                    <span className="font-bold text-sm text-emerald-950 font-display">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">-{item.potentialPercent}% potential</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.recommendation || `Optimize your daily ${item.name.toLowerCase()} choices.`}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
