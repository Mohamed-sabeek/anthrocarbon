import React from 'react';
import { Lightbulb, TrendingDown, HelpCircle, Car, Zap, Apple, Trash2, ArrowRight } from 'lucide-react';

export default function Insights({ currentFootprint }) {
  if (!currentFootprint) return null;

  const { breakdown } = currentFootprint;

  // Recommendation engine data
  const categoryData = [
    {
      key: 'transport',
      name: 'Transportation',
      emissions: breakdown.transport,
      icon: <Car className="h-6 w-6 text-blue-500" />,
      color: 'border-blue-100 bg-blue-50/50',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      concern: 'Daily commuting is releasing significant fossil-fuel greenhouse gases into the atmosphere.',
      opportunity: 'Switching transit modes is the fastest way to drop emissions. Commuting via bike or walking generates 0 emissions.',
      recommendation: 'Transportation is your largest source of emissions. Consider using public transportation, carpooling, cycling, or walking whenever possible.',
      potentialPercent: 60,
    },
    {
      key: 'electricity',
      name: 'Electricity Consumption',
      emissions: breakdown.electricity,
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      color: 'border-amber-100 bg-amber-50/50',
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      concern: 'High power usage from coal/gas grids accounts for standard power grid emissions.',
      opportunity: 'Simple energy audits, smart plugs, and power-saving schedules yield immediate, zero-cost savings.',
      recommendation: 'Your electricity usage is high. Reduce unnecessary appliance usage, switch to LED lighting, and optimize air conditioning use.',
      potentialPercent: 30,
    },
    {
      key: 'food',
      name: 'Dietary Choice',
      emissions: breakdown.food,
      icon: <Apple className="h-6 w-6 text-emerald-500" />,
      color: 'border-emerald-100 bg-emerald-50/50',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      concern: 'Industrial livestock farming releases immense volumes of carbon and methane.',
      opportunity: 'Incorporating plant-based dinners or skipping beef can dramatically cut down food footprint scales.',
      recommendation: 'Consider incorporating more plant-based meals into your diet to reduce food-related emissions.',
      potentialPercent: 50,
    },
    {
      key: 'waste',
      name: 'Household Waste',
      emissions: breakdown.waste,
      icon: <Trash2 className="h-6 w-6 text-rose-500" />,
      color: 'border-rose-100 bg-rose-50/50',
      tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
      concern: 'Decomposing landfill waste generates heavy methane gas, which is 25x more potent than CO₂.',
      opportunity: 'Composting kitchen scraps and recycling plastics prevents methane leaks and saves natural resources.',
      recommendation: 'Improve recycling habits, compost organic waste, and reduce single-use plastics.',
      potentialPercent: 40,
    },
  ];

  // Find the largest source
  const largest = [...categoryData].sort((a, b) => b.emissions - a.emissions)[0];

  // Calculate dynamic savings
  const potentialSavings = parseFloat(((largest.emissions * largest.potentialPercent) / 100).toFixed(2));
  const optimizedTotal = parseFloat((currentFootprint.total - potentialSavings).toFixed(2));

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-white to-emerald-50/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3 py-1.5 rounded-full">
            Sustainability Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            Smart Sustainability Insights
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600">
            A custom recommendation engine running analytics on your footprint profile to offer customized advice.
          </p>
        </div>

        {/* Major Insight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main analysis card */}
          <div className="lg:col-span-8 bg-white border border-emerald-100/60 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-emerald-100/80 rounded-2xl text-emerald-700 animate-bounce">
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
                  <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-xl border ${largest.tagColor}`}>
                    Largest Source: {largest.name}
                  </span>
                </div>
              </div>

              {/* Major environmental concern */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Major Environmental Concern
                  </h4>
                  <p className="text-gray-700 font-medium text-base">
                    {largest.concern}
                  </p>
                </div>

                {/* Improvement opportunities */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Improvement Opportunities
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {largest.opportunity}
                  </p>
                </div>

                {/* Personalized recommendations */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100/50 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center">
                    <span className="mr-1.5">💡</span> Personalized Recommendation
                  </h4>
                  <p className="text-emerald-900 font-semibold text-sm leading-relaxed">
                    {largest.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact potential card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-900 to-teal-800 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
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
                By target-treating {largest.name} with our suggestions, you can shave off:
              </p>
            </div>

            <div className="my-6 space-y-1">
              <span className="block text-4xl sm:text-5xl font-black font-display text-emerald-400">
                -{largest.potentialPercent}%
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
          {categoryData
            .filter((item) => item.key !== largest.key)
            .map((item) => (
              <div
                key={item.key}
                className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span className="font-bold text-sm text-emerald-950 font-display">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">-{item.potentialPercent}% potential</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.recommendation}
                </p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
