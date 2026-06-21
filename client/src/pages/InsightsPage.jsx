import React from 'react';
import Insights from '../components/Insights';
import EmptyState from '../components/EmptyState';

export default function InsightsPage({ currentFootprint }) {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-emerald-50/20 animate-fadeIn">
      {/* Background decorations */}
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-3xl -z-10" />

      {currentFootprint ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
              Recommendations
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950 font-display">
              Smart Sustainability Insights
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto font-medium">
              Intelligent suggestions engineered to target your largest emission sources and optimize your green footprint.
            </p>
          </div>

          <Insights currentFootprint={currentFootprint} />
        </div>
      ) : (
        <EmptyState 
          title="No Footprint Data Found" 
          description="Calculate your carbon footprint first to receive personalized recommendations and smart sustainability insights."
        />
      )}
    </div>
  );
}
