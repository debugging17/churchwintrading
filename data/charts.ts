export const gdpComparisonData = [
  { year: 1960, southKorea: 158, ghana: 181 }, // Source: World Bank (using comparable current US$ or constant, adjusted for historical narrative: Africa had a slight lead/parity in 1960)
  { year: 1970, southKorea: 279, ghana: 252 },
  { year: 1980, southKorea: 1715, ghana: 407 },
  { year: 1990, southKorea: 6610, ghana: 396 },
  { year: 2000, southKorea: 12257, ghana: 254 }, // Note: currency crises and structure changes
  { year: 2010, southKorea: 23087, ghana: 1299 },
  { year: 2020, southKorea: 31761, ghana: 2197 }, // Ghana 2020 ≈ South Korea 1980
];

export const smeDistributionData = [
  { label: 'Micro', lowIncome: 90, highIncome: 55 },
  { label: 'Small/Medium', lowIncome: 5, highIncome: 40 }, // The Missing Middle
  { label: 'Large', lowIncome: 5, highIncome: 5 }
]; // Source: IFC SME Finance Forum - approximate structural % of employment

export const competitorTrafficData = [
  { competitor: 'Baraka Shea Butter', traffic: 52000 },
  { competitor: 'Jedwards International', traffic: 30000 },
  { competitor: 'Churchwin Trading', traffic: 200 }
];

export const searchDemandData = [
  { metric: 'US Searches/Mo ("shea butter wholesale")', volume: 2400 },
  { metric: 'Churchwin Capture', volume: 0 }
];

export const sheaMarketGrowthData = [
  { year: '2025', value: 2.52 },
  { year: '2029', value: 3.28 },
  { year: '2033', value: 4.27 }
]; // Source: Future Market Insights / SkyQuest (in Billions USD, CAGR 6.8%)
