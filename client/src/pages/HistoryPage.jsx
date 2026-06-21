import React from 'react';
import History from '../components/History';
import EmptyState from '../components/EmptyState';

export default function HistoryPage({ historyList, onClearHistory, onReloadHistoryItem }) {
  const hasHistory = historyList && historyList.length > 0;

  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-emerald-50/20 animate-fadeIn">
      {/* Background decorations */}
      <div className="absolute top-[12%] left-[10%] w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-3xl -z-10" />

      {hasHistory ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
              Audit Log
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950 font-display">
              Calculation History Logs
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto font-medium">
              View and sort your historical carbon footprint inputs, eco scores, and emission records.
            </p>
          </div>

          <History 
            historyList={historyList} 
            onClearHistory={onClearHistory} 
            onReloadHistoryItem={onReloadHistoryItem} 
          />
        </div>
      ) : (
        <EmptyState 
          title="No Calculation History Logs" 
          description="Your audit log is currently empty. Complete your first carbon calculation to start tracking your history."
        />
      )}
    </div>
  );
}
