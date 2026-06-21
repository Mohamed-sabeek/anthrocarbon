export const getCategoryData = (breakdown) => {
  return [
    {
      key: 'transport',
      name: 'Transportation',
      emissions: breakdown.transport,
      concern: 'Daily commuting is releasing significant fossil-fuel greenhouse gases into the atmosphere.',
      opportunity: 'Switching transit modes is the fastest way to drop emissions. Commuting via bike or walking generates 0 emissions.',
      recommendation: 'Transportation is your largest source of emissions. Consider using public transportation, carpooling, cycling, or walking whenever possible.',
      potentialPercent: 60,
    },
    {
      key: 'electricity',
      name: 'Electricity Consumption',
      emissions: breakdown.electricity,
      concern: 'High power usage from coal/gas grids accounts for standard power grid emissions.',
      opportunity: 'Simple energy audits, smart plugs, and power-saving schedules yield immediate, zero-cost savings.',
      recommendation: 'Your electricity usage is high. Reduce unnecessary appliance usage, switch to LED lighting, and optimize air conditioning use.',
      potentialPercent: 30,
    },
    {
      key: 'food',
      name: 'Dietary Choice',
      emissions: breakdown.food,
      concern: 'Industrial livestock farming releases immense volumes of carbon and methane.',
      opportunity: 'Incorporating plant-based dinners or skipping beef can dramatically cut down food footprint scales.',
      recommendation: 'Consider incorporating more plant-based meals into your diet to reduce food-related emissions.',
      potentialPercent: 50,
    },
    {
      key: 'waste',
      name: 'Household Waste',
      emissions: breakdown.waste,
      concern: 'Decomposing landfill waste generates heavy methane gas, which is 25x more potent than CO₂.',
      opportunity: 'Composting kitchen scraps and recycling plastics prevents methane leaks and saves natural resources.',
      recommendation: 'Improve recycling habits, compost organic waste, and reduce single-use plastics.',
      potentialPercent: 40,
    },
  ];
};

export const generateInsights = (calculation) => {
  const { breakdown } = calculation;
  const categories = getCategoryData(breakdown);
  
  // Sort to find largest
  const largest = [...categories].sort((a, b) => b.emissions - a.emissions)[0];
  const potentialSavings = parseFloat(((largest.emissions * largest.potentialPercent) / 100).toFixed(2));
  const optimizedTotal = parseFloat((calculation.totalCarbonFootprint - potentialSavings).toFixed(2));

  return {
    largestSource: largest.name,
    largestCategory: largest.key,
    concern: largest.concern,
    opportunity: largest.opportunity,
    recommendation: largest.recommendation,
    potentialPercent: largest.potentialPercent,
    potentialSavings,
    optimizedTotal,
    generalGuidelines: categories.filter(c => c.key !== largest.key),
  };
};
