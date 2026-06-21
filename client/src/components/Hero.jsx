import React from 'react';
import { ArrowRight, Leaf, Shield, Globe, TrendingDown, Sparkles, Zap, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleScrollToCalculator = () => {
    navigate('/calculator');
  };


  const handleScrollToLearnMore = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-teal-50/20 to-white">
      {/* Background blobs / Radial Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/20 to-teal-300/20 rounded-full blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-teal-200/10 to-emerald-300/15 rounded-full blur-3xl -z-10" />
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] -z-10" />

      {/* Floating Animated Eco-Icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] text-2xl select-none z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        🌱
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[25%] right-[8%] text-3xl select-none z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        🌍
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[8%] text-2xl select-none z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        ⚡
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[45%] text-2xl select-none z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        ♻️
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 md:space-y-8"
          >
            {/* Pill Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-emerald-100/60 text-emerald-950 px-4 py-2 rounded-full text-xs font-bold tracking-wide border border-emerald-200/80 shadow-md shadow-emerald-500/5 animate-pulse"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600/30" />
              <span className="font-display">🌱 AI-Powered Carbon Footprint Assistant</span>
            </motion.div>
            
            {/* Improved Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-emerald-950 font-display leading-[1.08] md:leading-[1.1]"
            >
              Understand Your <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">Impact</span>.<br />
              Track Your <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">Footprint</span>.<br />
              Build a <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">Greener Future</span>.
            </motion.h1>

            {/* Description Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-medium"
            >
              AnthroCarbon helps individuals calculate, analyze, track, and reduce their carbon footprint through personalized sustainability recommendations, environmental analytics, and smart carbon insights.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToCalculator}
                className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all cursor-pointer group"
              >
                Calculate My Footprint
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToLearnMore}
                className="inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-emerald-50/30 text-emerald-950 font-bold rounded-2xl border-2 border-emerald-100 hover:border-emerald-200 transition-all shadow-sm cursor-pointer"
              >
                Explore Features
              </motion.button>
            </motion.div>

            {/* Redesigned Statistics Section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-emerald-100/50"
            >
              {/* Card 1 */}
              <div className="p-4 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 text-emerald-950 font-bold mb-1">
                  <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                    <Globe className="h-4 w-4" />
                  </div>
                  <span className="font-display text-sm font-extrabold">Carbon Tracking</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Track daily environmental impact</p>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 text-emerald-950 font-bold mb-1">
                  <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="font-display text-sm font-extrabold">Smart Insights</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Personalized recommendations</p>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 text-emerald-950 font-bold mb-1">
                  <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                    <Target className="h-4 w-4" />
                  </div>
                  <span className="font-display text-sm font-extrabold">Goal Monitoring</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Monitor and reduce emissions</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Dashboard Preview Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-emerald-400/20 rounded-full blur-3xl -z-10" />

            {/* Dashboard Container (Glassmorphic Mockup) */}
            <div className="relative w-full max-w-[420px] bg-white/80 border border-white/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-100/60 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Carbon Intelligence</span>
                </div>
                <div className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-lg border border-emerald-100">
                  Live View
                </div>
              </div>

              {/* Central Graph/Grid Preview */}
              <div className="space-y-4">
                {/* Metric 1: Carbon Footprint */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100/30 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-xl text-emerald-600 shadow-sm">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">Carbon Footprint</span>
                      <span className="block text-sm font-black text-emerald-950 font-display">12.5 kg CO₂/day</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded-lg">-14% today</span>
                </div>

                {/* Metric 2: Eco Score */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-teal-50/50 border border-teal-100/30 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-xl text-teal-600 shadow-sm">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">Eco Score</span>
                      <span className="block text-sm font-black text-emerald-950 font-display">82/100</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-lg border border-teal-100">🌿 Good</span>
                </div>

                {/* Double column grid metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 3: Source */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100/30 text-left space-y-1 shadow-sm">
                    <span className="block text-[9px] font-bold text-gray-400 uppercase">Largest Source</span>
                    <span className="block text-xs font-black text-emerald-950 font-display">Transportation</span>
                  </div>

                  {/* Metric 4: Weekly Estimate */}
                  <div className="p-3.5 rounded-2xl bg-indigo-50/40 border border-indigo-100/30 text-left space-y-1 shadow-sm">
                    <span className="block text-[9px] font-bold text-gray-400 uppercase">Weekly Estimate</span>
                    <span className="block text-xs font-black text-emerald-950 font-display">87.5 kg CO₂</span>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold pt-2 border-t border-gray-100/60">
                <span>Updated: Just now</span>
                <span className="text-emerald-600 flex items-center">
                  <Shield className="h-3 w-3 mr-1" /> Secure local sync
                </span>
              </div>
            </div>

            {/* Overlapping Floating Cards to create Depth */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-3 rounded-2xl shadow-lg border border-emerald-50/50 flex items-center space-x-3 pointer-events-none hidden sm:flex"
            >
              <div className="bg-emerald-500 text-white p-2 rounded-xl">
                <TrendingDown className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-bold text-gray-400 uppercase">CO₂ Reduction</span>
                <span className="block text-xs font-extrabold text-emerald-950">-4.2 kg today</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-2xl shadow-lg border border-teal-50/50 flex items-center space-x-3 pointer-events-none hidden sm:flex"
            >
              <div className="bg-teal-500 text-white p-2 rounded-xl">
                <Zap className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-bold text-gray-400 uppercase">Power Saved</span>
                <span className="block text-xs font-extrabold text-emerald-950">3.5 kWh today</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
