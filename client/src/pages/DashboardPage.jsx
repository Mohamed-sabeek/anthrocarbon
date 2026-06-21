import React from 'react';
import Dashboard from '../components/Dashboard';
import EmptyState from '../components/EmptyState';

export default function DashboardPage({ currentFootprint }) {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-emerald-50/20 animate-fadeIn">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-3xl -z-10" />

      {currentFootprint ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <span className="text-emerald-600 font-extrabold uppercase tracking-widest text-xs bg-emerald-100/70 px-4 py-1.5 rounded-full">
              ANALYTICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 font-display tracking-tight">
              Carbon Analytics Dashboard
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
              Review your environmental metrics, weekly emission projections, and source distributions.
            </p>
          </div>
          
          <Dashboard currentFootprint={currentFootprint} />
        </div>
      ) : (
        <EmptyState 
          title="No Footprint Data Found" 
          description="Please enter your lifestyle information in the carbon calculator to unlock your customized analytics dashboard."
        />
      )}
    </div>
  );
}
