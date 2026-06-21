import React from 'react';
import GoalTracker from '../components/GoalTracker';
import EcoChallenges from '../components/EcoChallenges';
import EmptyState from '../components/EmptyState';

export default function GoalsPage({ 
  currentFootprint, 
  targetFootprint, 
  onTargetChange, 
  completedChallenges, 
  onToggleChallenge 
}) {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-emerald-50/20 animate-fadeIn">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-3xl -z-10" />

      {currentFootprint ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
              Goals & Challenges
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950 font-display">
              Track Carbon Reduction Goals
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto font-medium">
              Establish targets, complete eco challenges, and monitor your progress towards a sustainable future.
            </p>
          </div>

          <GoalTracker 
            currentFootprint={currentFootprint} 
            targetFootprint={targetFootprint} 
            onTargetChange={onTargetChange} 
          />

          <EcoChallenges 
            completedChallenges={completedChallenges} 
            onToggleChallenge={onToggleChallenge} 
          />
        </div>
      ) : (
        <EmptyState 
          title="No Footprint Data Found" 
          description="Enter your lifestyle data in the carbon calculator to set reduction targets and begin logging eco-challenges."
        />
      )}
    </div>
  );
}
