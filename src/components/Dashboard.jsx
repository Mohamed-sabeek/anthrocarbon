import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Footprints, ShieldAlert, Award, Calendar, Zap, Car, Apple, Trash2 } from 'lucide-react';

export default function Dashboard({ currentFootprint }) {
  if (!currentFootprint) return null;

  const { breakdown, total, ecoScore, ecoStatus, ecoColor, ecoIcon } = currentFootprint;

  // Determine largest source
  const sources = [
    { name: 'Transport', value: breakdown.transport, icon: <Car className="h-4 w-4" />, color: 'text-blue-500 bg-blue-50' },
    { name: 'Electricity', value: breakdown.electricity, icon: <Zap className="h-4 w-4" />, color: 'text-amber-500 bg-amber-50' },
    { name: 'Food', value: breakdown.food, icon: <Apple className="h-4 w-4" />, color: 'text-emerald-500 bg-emerald-50' },
    { name: 'Waste', value: breakdown.waste, icon: <Trash2 className="h-4 w-4" />, color: 'text-rose-500 bg-rose-50' }
  ];

  const largestSource = [...sources].sort((a, b) => b.value - a.value)[0];

  // Recharts Data formatting
  const pieData = [
    { name: 'Transport', value: breakdown.transport, color: '#10b981' }, // Emerald 500
    { name: 'Electricity', value: breakdown.electricity, color: '#f59e0b' }, // Amber 500
    { name: 'Food', value: breakdown.food, color: '#06b6d4' }, // Cyan 500
    { name: 'Waste', value: breakdown.waste, color: '#f43f5e' }, // Rose 500
  ].filter(item => item.value > 0);

  const barData = [
    { name: 'Transport', 'Weekly Emissions (kg)': parseFloat((breakdown.transport * 7).toFixed(1)) },
    { name: 'Electricity', 'Weekly Emissions (kg)': parseFloat((breakdown.electricity * 7).toFixed(1)) },
    { name: 'Food', 'Weekly Emissions (kg)': parseFloat((breakdown.food * 7).toFixed(1)) },
    { name: 'Waste', 'Weekly Emissions (kg)': parseFloat((breakdown.waste * 7).toFixed(1)) },
  ];

  // Colors mapping for charts cells
  const COLORS = ['#10b981', '#f59e0b', '#06b6d4', '#f43f5e'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-emerald-950 text-white p-3 rounded-xl shadow-lg border border-emerald-800 text-xs">
          <p className="font-bold font-display mb-1">{payload[0].name}</p>
          <p className="text-emerald-300 font-semibold">{payload[0].value} kg CO₂</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-100/60 px-3 py-1.5 rounded-full">
            Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 font-display">
            Analytics Dashboard
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600">
            Real-time visual breakdown of your daily environmental emissions, score metrics, and weekly projections.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1: Total Footprint */}
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
              <Footprints className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Carbon Footprint</span>
              <span className="text-xl md:text-2xl font-black text-emerald-950 font-display mt-0.5 block">
                {total} <span className="text-xs font-medium text-gray-400">kg CO₂/day</span>
              </span>
            </div>
          </div>

          {/* Card 2: Eco Score */}
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl">
              <Award className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Eco Score</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xl md:text-2xl font-black text-emerald-950 font-display">
                  {ecoScore}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${ecoColor}`}>
                  {ecoIcon} {ecoStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Largest Emission Source */}
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className={`p-4 rounded-2xl ${largestSource.color}`}>
              {largestSource.icon}
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Largest Source</span>
              <span className="text-xl md:text-2xl font-black text-emerald-950 font-display mt-0.5 block">
                {largestSource.name}
              </span>
            </div>
          </div>

          {/* Card 4: Weekly Carbon Estimate */}
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Weekly Projection</span>
              <span className="text-xl md:text-2xl font-black text-emerald-950 font-display mt-0.5 block">
                {parseFloat((total * 7).toFixed(1))} <span className="text-xs font-medium text-gray-400">kg CO₂/week</span>
              </span>
            </div>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pie Chart: Emission Distribution */}
          <div className="p-6 md:p-8 bg-white rounded-3xl border border-emerald-50 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-950 mb-1 font-display">
              Emission Distribution
            </h3>
            <p className="text-xs text-gray-500 mb-6">Visual percentage breakdown of your daily activities</p>
            
            {pieData.length === 0 ? (
              <div className="h-64 flex items-center justify-center text-gray-400 font-medium">
                No emission data recorded. Run the calculator!
              </div>
            ) : (
              <div className="h-64 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Bar Chart: Weekly Emission Projection */}
          <div className="p-6 md:p-8 bg-white rounded-3xl border border-emerald-50 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-950 mb-1 font-display">
              Weekly Emission Projection
            </h3>
            <p className="text-xs text-gray-500 mb-6">Projected impact of carbon footprint categories over 7 days</p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={11} tickLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(16, 185, 129, 0.05)' }} />
                  <Bar dataKey="Weekly Emissions (kg)" fill="#10b981" radius={[8, 8, 0, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
