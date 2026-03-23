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
  { 
    competitor: 'Baraka Shea Butter', 
    traffic: 52931, 
    fill: "#27c93f",
    trend: [
      { month: "Jan", visits: 40000 },
      { month: "Feb", visits: 44000 },
      { month: "Mar", visits: 48000 },
      { month: "Apr", visits: 49500 },
      { month: "May", visits: 51000 },
      { month: "Jun", visits: 52931 },
    ],
    insights: "Dominates organic search. High engagement from B2B procurement teams. 📄 CLICK FOR FULL SIMILARWEB REPORT",
    reportUrl: "/assets/docs/Website_Analysis_Insights_Jan_2026.pdf"
  },
  { 
    competitor: 'FairTale Ghana', 
    traffic: 2186, 
    fill: "#f1c40f",
    trend: [
      { month: "Jan", visits: 1800 },
      { month: "Feb", visits: 1900 },
      { month: "Mar", visits: 1850 },
      { month: "Apr", visits: 2050 },
      { month: "May", visits: 2100 },
      { month: "Jun", visits: 2186 },
    ],
    insights: "Solid mid-tier presence. Strong focus on fair trade narrative but limited private label capacity."
  },
  { 
    competitor: 'Churchwin Trading', 
    traffic: 200, 
    fill: "#f47920",
    trend: [
      { month: "Jan", visits: 150 },
      { month: "Feb", visits: 180 },
      { month: "Mar", visits: 140 },
      { month: "Apr", visits: 210 },
      { month: "May", visits: 190 },
      { month: "Jun", visits: 200 },
    ],
    insights: "The Visibility Paradox: Superior infrastructure but invisible to organic B2B leads. Est. $150k+ monthly revenue gap."
  }
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
