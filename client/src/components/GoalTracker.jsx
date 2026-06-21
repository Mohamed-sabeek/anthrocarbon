import React from 'react';
import { Target, TrendingDown, CheckCircle2, Award } from 'lucide-react';

export default function GoalTracker({ currentFootprint, targetFootprint, onTargetChange }) {
  if (!currentFootprint) return null;

  const current = currentFootprint.total;

  // Percentage reduction needed
  const reductionNeeded = current > targetFootprint 
    ? Math.round(((current - targetFootprint) / current) * 100)
    : 0;

  // Progress percentage (how close we are to meeting the target or how much is left)
  // Let's define progress: if current <= target, progress is 100% (target met)
  // If current > target, progress is target/current * 100
  const progressPercent = current <= targetFootprint
    ? 100
    : Math.round((targetFootprint / current) * 100);

  // Goal Ambition Status
  let goalStatus = 'No Reduction';
  let goalColor = 'text-gray-500 bg-gray-50 border-gray-200';
  let goalDescription = 'Set a target lower than your current emissions to begin your sustainability path.';

  if (reductionNeeded > 0 && reductionNeeded <= 15) {
    goalStatus = 'Healthy Step 🌱';
    goalColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    goalDescription = 'A very achievable target. Simple lifestyle refinements will get you here!';
  } else if (reductionNeeded > 15 && reductionNeeded <= 35) {
    goalStatus = 'Eco Warrior 🌿';
    goalColor = 'text-teal-700 bg-teal-50 border-teal-200';
    goalDescription = 'An active carbon-cutting target. Requires conscious commuting and power choices.';
  } else if (reductionNeeded > 35) {
    goalStatus = 'Carbon Hero ⚡';
    goalColor = 'text-rose-700 bg-rose-50 border-rose-200';
    goalDescription = 'An ambitious and outstanding target. Requires major changes in all daily habits.';
  }

  const handleSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    onTargetChange(val);
  };

  return (
    <div id="goals" className="space-y-8">
      <div className="max-w-4xl mx-auto">

        {/* Goal Card */}
        <div className="bg-white rounded-3xl border border-emerald-50 shadow-xl p-6 md:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Goal setup slider */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-emerald-950 font-bold text-lg font-display">
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600">
                  <Target className="h-5 w-5" />
                </div>
                <h3>Define Your Target</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Current Daily Footprint:</span>
                  <span className="text-lg font-black text-emerald-950 font-display">{current} kg CO₂</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Target Daily Footprint:</span>
                  <span className="text-2xl font-black text-emerald-600 font-display">{targetFootprint} kg CO₂</span>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="2"
                  max={Math.max(30, Math.ceil(current))}
                  step="0.5"
                  value={targetFootprint}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-gray-400 font-semibold">
                  <span>2.0 kg</span>
                  <span>{Math.max(30, Math.ceil(current))}.0 kg</span>
                </div>
              </div>
            </div>

            {/* Progress Metrics Panel */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between h-full space-y-6">
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Goal Target Status</span>
                  <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-xl border mt-2 ${goalColor}`}>
                    {goalStatus}
                  </span>
                </div>
                {current <= targetFootprint && (
                  <div className="text-emerald-600 flex items-center space-x-1 text-xs font-bold bg-emerald-100/60 px-2 py-1 rounded-lg">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Target Met!</span>
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline text-xs text-gray-500 font-bold">
                  <span>Footprint Target Coverage</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-gray-200 h-3.5 rounded-full overflow-hidden p-0.5 border border-white">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Reduction potential text */}
              <div className="pt-2 border-t border-emerald-100">
                {reductionNeeded > 0 ? (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    You need a <strong className="text-emerald-700 font-bold">{reductionNeeded}% carbon reduction</strong> from your current daily operations to hit this goal. <span className="text-gray-500 font-medium">{goalDescription}</span>
                  </p>
                ) : (
                  <p className="text-xs text-emerald-800 leading-relaxed font-semibold">
                    🎉 Excellent! Your current daily footprint is already meeting your target. Keep up the amazing green choices!
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
