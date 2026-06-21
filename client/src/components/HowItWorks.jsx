import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, TrendingDown, ClipboardList, Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Lifestyle Data',
      subtitle: 'Inputs:',
      items: ['Transport', 'Electricity', 'Food Habits', 'Waste Generation'],
      icon: <Sliders className="h-5 w-5 text-emerald-600" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100/80 shadow-emerald-500/5',
    },
    {
      number: '02',
      title: 'Calculate Carbon Footprint',
      subtitle: 'Outputs:',
      items: ['Daily Emissions', 'Weekly Estimate', 'Eco Score'],
      icon: <ClipboardList className="h-5 w-5 text-teal-600" />,
      color: 'bg-teal-50 text-teal-700 border-teal-100/80 shadow-teal-500/5',
    },
    {
      number: '03',
      title: 'Get Smart Insights',
      subtitle: 'Insights:',
      items: ['Main Emission Source', 'Personalized Recommendations', 'Reduction Potential'],
      icon: <Sparkles className="h-5 w-5 text-amber-600" />,
      color: 'bg-amber-50 text-amber-700 border-amber-100/80 shadow-amber-500/5',
    },
    {
      number: '04',
      title: 'Track & Improve',
      subtitle: 'Tracking:',
      items: ['Sustainability Goals', 'History Records', 'Progress Monitoring'],
      icon: <TrendingDown className="h-5 w-5 text-emerald-600" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100/80 shadow-emerald-500/5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-emerald-50/10 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-br from-emerald-100/20 to-teal-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-gradient-to-tr from-teal-100/20 to-emerald-200/20 rounded-full blur-3xl -z-10" />

      {/* Floating Animated Eco-Icons */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        className="absolute top-[10%] right-[12%] text-2xl select-none z-10 pointer-events-none opacity-40 hidden md:block"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] text-xl select-none z-10 pointer-events-none opacity-40 hidden md:block"
      >
        ⚡
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full"
          >
            User Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-emerald-950 font-display leading-tight"
          >
            How AnthroCarbon Works
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Calculate your environmental impact, uncover hidden emission sources, and receive personalized sustainability recommendations in just four simple steps.
          </motion.p>
        </div>

        {/* Steps Grid / Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Glowing Gradient Process Connector Line */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 -z-10 blur-[0.5px] shadow-sm shadow-emerald-500/20" />
          
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.08), 0 10px 10px -5px rgba(16, 185, 129, 0.03)' }}
              className="flex flex-col items-start text-left p-6 bg-white/70 backdrop-blur-md rounded-3xl border border-emerald-50/60 shadow-sm relative group hover:border-emerald-200/80 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Watermark Step Number in Background */}
              <div className="absolute bottom-2 right-4 text-7xl font-black text-emerald-500/[0.04] group-hover:text-emerald-500/[0.08] select-none transition-colors pointer-events-none font-display">
                {item.number}
              </div>

              {/* Icon Bubble */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color} border shadow-inner`}>
                {item.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 mb-4 font-display group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              
              {/* Step Subheading (Parameters Label) */}
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 mb-2">
                {item.subtitle}
              </span>

              {/* Step Items List */}
              <div className="space-y-1.5 text-xs font-semibold text-gray-500 w-full">
                {item.items.map((listItem, lIdx) => (
                  <div key={lIdx} className="flex items-center space-x-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{listItem}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Result Callout Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-emerald-800/40 max-w-4xl mx-auto"
        >
          {/* Radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700/25 via-transparent to-transparent -z-10" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

          <h3 className="text-xl sm:text-2xl font-black font-display mb-3 tracking-tight">
            Your Sustainability Journey Starts Here
          </h3>
          <p className="text-emerald-200/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            AnthroCarbon transforms everyday lifestyle data into actionable sustainability insights, helping users understand, track, and reduce their environmental impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
