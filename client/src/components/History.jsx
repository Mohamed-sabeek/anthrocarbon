import React, { useState } from 'react';
import { Trash2, AlertTriangle, ArrowUpDown, Calendar, HelpCircle } from 'lucide-react';

export default function History({ historyList, onClearHistory, onReloadHistoryItem }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const getSortedHistory = () => {
    return [...historyList].sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      // Custom value handling if needed
      if (sortField === 'date') {
        valA = new Date(a.date).getTime();
        valB = new Date(b.date).getTime();
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const sortedHistory = getSortedHistory();

  return (
    <div id="history" className="space-y-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Table Header Actions */}
        {historyList.length > 0 && (
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowConfirm(true)}
              className="inline-flex items-center px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded-xl text-xs border border-rose-200 transition-colors cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5 mr-1.5" />
              Clear History
            </button>
          </div>
        )}

        {/* Clear Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-rose-100 shadow-2xl space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 text-rose-600">
                <AlertTriangle className="h-8 w-8" />
                <h3 className="text-xl font-bold font-display">Confirm Clear-Out</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Are you sure you want to delete all historical footprint calculations? This will permanently wipe your Local Storage.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    onClearHistory();
                    setShowConfirm(false);
                  }}
                  className="flex-1 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Yes, Clear All
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table / List */}
        {historyList.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-emerald-200 p-12 text-center max-w-xl mx-auto shadow-sm">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950 font-display mb-2">No History Logged Yet</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto mb-6">
              Complete your lifestyle entries in the calculator above to log your first ecological scorecard.
            </p>
            <a
              href="#calculator"
              className="inline-flex px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
            >
              Go to Calculator
            </a>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-50/50 border-b border-emerald-100/50">
                    <th 
                      onClick={() => handleSort('date')}
                      className="px-6 py-4 text-xs font-bold text-emerald-900 uppercase tracking-wider cursor-pointer hover:bg-emerald-100/30 transition-colors select-none"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Date & Time</span>
                        <ArrowUpDown className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                    </th>
                    <th 
                      onClick={() => handleSort('total')}
                      className="px-6 py-4 text-xs font-bold text-emerald-900 uppercase tracking-wider cursor-pointer hover:bg-emerald-100/30 transition-colors select-none"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Footprint (kg CO₂)</span>
                        <ArrowUpDown className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                    </th>
                    <th 
                      onClick={() => handleSort('ecoScore')}
                      className="px-6 py-4 text-xs font-bold text-emerald-900 uppercase tracking-wider cursor-pointer hover:bg-emerald-100/30 transition-colors select-none"
                    >
                      <div className="flex items-center space-x-1">
                        <span>Eco Score</span>
                        <ArrowUpDown className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      Breakdown (T | E | F | W)
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-emerald-900 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sortedHistory.map((item) => (
                    <tr 
                      key={item.date}
                      className="hover:bg-emerald-50/20 transition-colors cursor-pointer group"
                    >
                      <td 
                        onClick={() => onReloadHistoryItem(item)}
                        className="px-6 py-4 text-sm font-semibold text-gray-800"
                      >
                        {formatDate(item.date)}
                      </td>
                      <td 
                        onClick={() => onReloadHistoryItem(item)}
                        className="px-6 py-4 text-sm font-bold text-emerald-950 font-display"
                      >
                        {item.total} kg
                      </td>
                      <td 
                        onClick={() => onReloadHistoryItem(item)}
                        className="px-6 py-4"
                      >
                        <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-lg border ${item.ecoColor}`}>
                          {item.ecoIcon} {item.ecoScore} ({item.ecoStatus})
                        </span>
                      </td>
                      <td 
                        onClick={() => onReloadHistoryItem(item)}
                        className="px-6 py-4 text-xs text-gray-500 font-medium font-display"
                      >
                        <span className="text-blue-600 font-bold">{item.breakdown.transport}</span>
                        {' | '}
                        <span className="text-amber-600 font-bold">{item.breakdown.electricity}</span>
                        {' | '}
                        <span className="text-emerald-600 font-bold">{item.breakdown.food}</span>
                        {' | '}
                        <span className="text-rose-600 font-bold">{item.breakdown.waste}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => onReloadHistoryItem(item)}
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg transition-colors cursor-pointer mr-2"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50/50 p-4 border-t border-gray-100 text-xs text-gray-400 font-medium flex justify-between">
              <span>Showing {sortedHistory.length} entry/entries</span>
              <span>Sorted by {sortField} ({sortOrder})</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
