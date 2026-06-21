import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function EmptyState({ title, description }) {
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 sm:p-12 bg-white rounded-3xl border border-emerald-50 shadow-xl text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-50/40 rounded-full blur-3xl -z-10" />

      <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 animate-bounce">
        <Sparkles className="h-6 w-6" />
      </div>

      <h3 className="text-xl sm:text-2xl font-black font-display text-emerald-950 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8 font-medium">
        {description}
      </p>

      <Link
        to="/calculator"
        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20 transition-all cursor-pointer group"
      >
        Go to Calculator
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
