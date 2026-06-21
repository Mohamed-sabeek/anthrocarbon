import React from 'react';
import { FormInput, Sparkles, TrendingDown, ClipboardList } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Enter Lifestyle Info',
      description: 'Input everyday metrics like transport distances, electricity usage, food habits, and waste.',
      icon: <FormInput className="h-6 w-6 text-emerald-600" />,
    },
    {
      step: 'Step 2',
      title: 'Calculate Footprint',
      description: 'Our system processes your inputs using verified, emission-factor models to yield a precise daily carbon footprint.',
      icon: <ClipboardList className="h-6 w-6 text-teal-600" />,
    },
    {
      step: 'Step 3',
      title: 'Get Insights',
      description: 'Receive real-time, dynamic recommendations engineered to target your largest emission sources.',
      icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
    },
    {
      step: 'Step 4',
      title: 'Track & Improve',
      description: 'Set your carbon goals, complete environmental challenges, and visualize your progress over time.',
      icon: <TrendingDown className="h-6 w-6 text-teal-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3 py-1.5 rounded-full">
            Process Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            How It Works
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 text-lg">
            Four simple steps to transform your habits and transition toward zero-carbon living.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 -z-10 -translate-y-12" />
          
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-emerald-50 shadow-sm relative group hover:shadow-lg transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                {item.step}
              </span>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-50 to-teal-50 flex items-center justify-center mb-6 group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:text-white transition-all duration-500 border border-emerald-100/50 shadow-inner">
                <span className="group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold text-emerald-950 mb-2 font-display">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
