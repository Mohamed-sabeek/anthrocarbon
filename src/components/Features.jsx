import React from 'react';
import { Footprints, Lightbulb, LineChart, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Footprints className="h-6 w-6 text-emerald-600" />,
      title: 'Carbon Footprint Tracking',
      description: 'Accurately measure emissions from travel, energy, diet, and waste using high-fidelity local standards.',
      color: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-teal-600" />,
      title: 'Smart Sustainability Insights',
      description: 'Receive real-time, dynamic recommendations engineered to target your largest emission sources.',
      color: 'bg-teal-500/10 border-teal-500/20',
    },
    {
      icon: <LineChart className="h-6 w-6 text-emerald-600" />,
      title: 'Progress Monitoring',
      description: 'Establish personalized carbon reduction targets and track your journey to sustainability in real-time.',
      color: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-teal-600" />,
      title: 'Environmental Analytics',
      description: 'Interact with beautiful dashboards displaying emission distribution pie charts and weekly projection trends.',
      color: 'bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            Features Engineered for Impact
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 text-lg">
            Manage your ecological footprint with a complete suite of tracking, analysis, and reduction tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Card glowing effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-3xl" />
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${feature.color} border transition-colors duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-emerald-950 mb-3 font-display">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
