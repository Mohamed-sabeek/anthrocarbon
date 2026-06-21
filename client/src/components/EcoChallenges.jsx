import React from 'react';
import { CheckSquare, Square, Award, Leaf, Zap, Car, Apple, Trash2 } from 'lucide-react';

export default function EcoChallenges({ completedChallenges, onToggleChallenge }) {
  const challenges = [
    {
      id: 'walk',
      title: 'Walk or Bike 2 km',
      category: 'Transport',
      co2Saved: 0.5,
      icon: <Car className="h-5 w-5 text-blue-500" />,
      bg: 'bg-blue-50/50 hover:bg-blue-50 border-blue-100',
    },
    {
      id: 'electricity',
      title: 'Save 1 kWh Electricity',
      category: 'Electricity',
      co2Saved: 0.82,
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      bg: 'bg-amber-50/50 hover:bg-amber-50 border-amber-100',
    },
    {
      id: 'plastic',
      title: 'Avoid Single-Use Plastics',
      category: 'Waste',
      co2Saved: 0.2,
      icon: <Trash2 className="h-5 w-5 text-rose-500" />,
      bg: 'bg-rose-50/50 hover:bg-rose-50 border-rose-100',
    },
    {
      id: 'transit',
      title: 'Use Public Transport',
      category: 'Transport',
      co2Saved: 1.5,
      icon: <Car className="h-5 w-5 text-teal-500" />,
      bg: 'bg-teal-50/50 hover:bg-teal-50 border-teal-100',
    },
    {
      id: 'diet',
      title: 'Eat Fully Plant-Based Dinners',
      category: 'Food',
      co2Saved: 1.0,
      icon: <Apple className="h-5 w-5 text-emerald-500" />,
      bg: 'bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100',
    },
    {
      id: 'compost',
      title: 'Compost Organic Waste',
      category: 'Waste',
      co2Saved: 0.3,
      icon: <Trash2 className="h-5 w-5 text-emerald-500" />,
      bg: 'bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100',
    },
  ];

  const totalSaved = parseFloat(
    challenges
      .filter((c) => completedChallenges.includes(c.id))
      .reduce((sum, c) => sum + c.co2Saved, 0)
      .toFixed(2)
  );

  const completedCount = completedChallenges.length;
  const totalCount = challenges.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="challenges" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3 py-1.5 rounded-full">
            Gamification
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            Daily Eco Challenges
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600">
            Turn sustainable habits into actions. Check off items you achieved today to see your immediate carbon offsets.
          </p>
        </div>

        {/* Challenge Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: challenges progress */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="bg-white/20 p-3 rounded-2xl w-fit">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display leading-snug">Daily Progress</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Take small daily steps. Conserving energy and resources prevents greenhouse gas accumulation.
              </p>
            </div>

            <div className="my-8 space-y-2">
              <div className="flex justify-between items-baseline text-xs font-bold text-emerald-200">
                <span>Completed Challenges</span>
                <span>{completedCount} / {totalCount}</span>
              </div>
              <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1">
              <span className="block text-xs text-emerald-200 uppercase tracking-wider font-semibold">Today's Total Carbon Saved:</span>
              <span className="text-2xl font-black font-display text-emerald-300">
                {totalSaved} <span className="text-sm font-medium text-white">kg CO₂</span>
              </span>
              {totalSaved > 0 && (
                <span className="block text-[10px] text-emerald-100 font-medium italic mt-1 flex items-center">
                  <Leaf className="h-3 w-3 mr-1 inline text-emerald-300" />
                  Equal to planting {(totalSaved * 0.05).toFixed(2)} tree saplings!
                </span>
              )}
            </div>
          </div>

          {/* Right panel: list of checkboxes */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((c) => {
              const isCompleted = completedChallenges.includes(c.id);
              return (
                <div
                  key={c.id}
                  onClick={() => onToggleChallenge(c.id)}
                  className={`p-5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${c.bg} ${
                    isCompleted
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-gray-100 hover:border-emerald-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 text-left">
                    <div className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                      {c.icon}
                    </div>
                    <div>
                      <span className={`block text-sm font-bold font-display ${isCompleted ? 'text-emerald-950' : 'text-gray-800'}`}>
                        {c.title}
                      </span>
                      <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">
                        -{c.co2Saved} kg CO₂
                      </span>
                    </div>
                  </div>

                  <div>
                    {isCompleted ? (
                      <CheckSquare className="h-6 w-6 text-emerald-600 transition-transform duration-300 scale-110" />
                    ) : (
                      <Square className="h-6 w-6 text-gray-300 hover:text-emerald-500 transition-colors" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
