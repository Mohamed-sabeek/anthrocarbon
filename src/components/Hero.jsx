import React from 'react';
import { ArrowRight, Leaf, Shield, Globe, TrendingDown } from 'lucide-react';

export default function Hero() {
  const handleScrollToCalculator = () => {
    const element = document.querySelector('#calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLearnMore = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-teal-50/20 to-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-200 animate-fade-in shadow-sm">
              <Leaf className="h-3.5 w-3.5 text-emerald-600" />
              <span>Your Personal Sustainability Companion</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 font-display leading-[1.1] md:leading-[1.15]">
              Understand Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Impact</span>.<br />
              Track Your <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Footprint</span>.<br />
              Build a Greener Future.
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              AnthroCarbon helps you calculate, analyze, and reduce your carbon footprint with personalized sustainability recommendations and environmental insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToCalculator}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                Calculate My Footprint
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleScrollToLearnMore}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-emerald-50/50 text-emerald-800 font-semibold rounded-2xl border-2 border-emerald-100 hover:border-emerald-200 transition-all duration-300 shadow-sm cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-100">
              <div className="space-y-1">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-950 font-display">100%</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Privacy Guaranteed</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-950 font-display">35%</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. CO₂ Saved</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl md:text-3xl font-bold text-emerald-950 font-display">0 kg</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Our Goal for You</span>
              </div>
            </div>
          </div>

          {/* Graphic / Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* CSS Animated Illustration */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/10 border border-emerald-100 flex items-center justify-center animate-spin-slow">
              {/* Outer orbit items */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center">
                <Globe className="h-6 w-6 text-teal-500" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>

              {/* Inner Circle */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-emerald-600/90 to-teal-500/90 flex flex-col justify-center items-center p-6 text-center text-white shadow-2xl shadow-emerald-600/30">
                <div className="bg-white/20 p-4 rounded-full mb-3 backdrop-blur-md">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display leading-tight">Eco-Balance</h3>
                <p className="text-xs text-emerald-100 mt-1 max-w-[180px]">
                  Calculate your daily footprints, track goals, and adapt healthy habits.
                </p>
              </div>
            </div>

            {/* Glowing backdrop card effect */}
            <div className="absolute -bottom-6 right-6 md:-right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center space-x-3 max-w-[220px]">
              <div className="bg-emerald-500 text-white p-2 rounded-xl">
                <TrendingDown className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-gray-500">Track Progress</span>
                <span className="block text-sm font-bold text-emerald-950">Reduce Carbon Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
