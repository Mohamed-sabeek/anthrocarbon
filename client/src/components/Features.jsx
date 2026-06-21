import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, BarChart3, Target, Check } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      title: 'Calculate Your Carbon Footprint',
      description: 'Analyze emissions from transportation, electricity consumption, food habits, and waste generation.',
      color: 'from-blue-500/20 to-teal-500/20 text-blue-700 border-blue-100',
      badges: ['Transport', 'Electricity', 'Food', 'Waste'],
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-emerald-600" />,
      title: 'Get Personalized Recommendations',
      description: 'Receive intelligent sustainability suggestions tailored to your lifestyle and largest emission sources.',
      color: 'from-amber-500/20 to-emerald-500/20 text-amber-700 border-amber-100',
      badges: ['Insights'],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
      title: 'Visualize Environmental Impact',
      description: 'Explore interactive charts, emission breakdowns, eco scores, and weekly carbon projections.',
      color: 'from-teal-500/20 to-cyan-500/20 text-teal-700 border-teal-100',
      badges: ['Eco Score', 'Charts'],
    },
    {
      icon: <Target className="h-6 w-6 text-emerald-600" />,
      title: 'Track Sustainability Goals',
      description: 'Set carbon reduction targets, monitor progress, and build long-term sustainable habits.',
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-700 border-emerald-100',
      badges: ['Goals'],
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3.5 py-1.5 rounded-full"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-emerald-950 font-display leading-tight"
          >
            How AnthroCarbon Helps You Reduce Carbon Emissions
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
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our intelligent helper analyzes your day-to-day metrics to build a complete sustainability ecosystem, allowing you to calculate, analyze, and reduce your environmental impact.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group p-6 rounded-3xl bg-gradient-to-b from-white to-gray-50/50 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Glassmorphic overlay effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-3xl" />
              
              <div>
                {/* Icon Container with subtle animation */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} border group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-emerald-950 mb-3 font-display group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Badges Footer */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100/60">
                {feature.badges.map((badge, bIdx) => (
                  <span 
                    key={bIdx} 
                    className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/80 px-2.5 py-0.5 rounded-lg"
                  >
                    <Check className="h-2.5 w-2.5 mr-1 text-emerald-600" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
