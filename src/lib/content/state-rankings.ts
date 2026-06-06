import { stateDataSets } from "./state-data"
import { costOfLivingData } from "./state-expansion"

export interface RankingEntry {
  rank: number
  stateName: string
  stateSlug: string
  value: string | number
}

export interface StateRankingsData {
  h1: string
  metaDescription: string
  intro: string
  methodology: string
  keyInsights: string[]
  rankings: RankingEntry[]
  keyTakeaways: string[]
  faqs: { question: string; answer: string }[]
  sources: string[]
}

export function getBestStatesForSalary(): StateRankingsData {
  const ranked = [...stateDataSets].sort((a, b) => b.dataPoints.averageSalary - a.dataPoints.averageSalary)
  const top = ranked.slice(0, 10)
  return {
    h1: "Best States for Salary (2025-2026)",
    metaDescription: "Top US states ranked by average salary. Compare salaries across states, including cost of living adjustments and state income tax impacts.",
    intro: "Which states offer the highest salaries in the United States? This ranking compares average annual salaries across all 50 states, based on the most recent Bureau of Labor Statistics data. Understanding salary differences by state helps with career planning, relocation decisions, and maximizing your earning potential. We also factor in state income tax rates and cost of living to give you a complete picture of your purchasing power.",
    methodology: "States are ranked by average annual salary from the Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS) survey. The data reflects 2025-2026 mean annual wages across all occupations. Additional context includes state income tax rates (from state revenue departments), cost of living indices (from BEA Regional Price Parities), and median household incomes (from US Census Bureau ACS).",
    keyInsights: [
      `Washington leads with an average salary of $77,000, followed by California at $73,220.`,
      `The top 10 states all have average salaries above $62,000, well over the US average of $63,000.`,
      `Several top-salary states have no state income tax (Washington, Texas, Florida), improving take-home pay.`,
      `High-salary states tend to have higher costs of living, which reduces effective purchasing power.`,
    ],
    rankings: top.map((s, i) => ({
      rank: i + 1,
      stateName: s.stateName,
      stateSlug: s.stateSlug,
      value: `$${s.dataPoints.averageSalary.toLocaleString()}`,
    })),
    keyTakeaways: [
      `The highest-paying state is Washington with an average salary of $77,000, followed by California at $73,220.`,
      `Washington and California consistently rank at the top due to strong technology, aerospace, and professional services sectors.`,
      `States with no income tax (Washington, Texas, Florida) offer better take-home pay for equivalent salaries.`,
      `High salaries often come with high costs of living, so purchasing power varies significantly.`,
      `Use our salary calculator to estimate take-home pay, and explore state pages for detailed analysis.`,
    ],
    faqs: [
      {
        question: "Which US state has the highest average salary?",
        answer: "Washington has the highest average salary at $77,000 per year, followed by California at $73,220. Both states benefit from strong technology and professional services sectors.",
      },
      {
        question: "Does a high salary automatically mean better purchasing power?",
        answer: "Not necessarily. High-salary states like California have cost of living indices well above 100, meaning expenses are significantly higher. Always consider cost of living when evaluating salary offers. Use our salary vs. cost of living pages for state-specific analysis.",
      },
      {
        question: "Which states offer the best take-home pay?",
        answer: "States with no income tax (Washington, Texas, Florida, Nevada, etc.) offer better take-home pay for equivalent salaries because workers keep more of their earnings. However, these states may have higher property taxes or sales taxes.",
      },
    ],
    sources: [
      "Bureau of Labor Statistics - Occupational Employment and Wage Statistics (2025)",
      "US Census Bureau - American Community Survey",
      "US Bureau of Economic Analysis - Regional Price Parities",
      "State Revenue Departments",
    ],
  }
}

export function getBestStatesForCostOfLiving(): StateRankingsData {
  const withCol = stateDataSets.filter(s => costOfLivingData[s.stateSlug])
  const ranked = [...withCol].sort((a, b) => a.dataPoints.costOfLivingIndex - b.dataPoints.costOfLivingIndex)
  const top = ranked.slice(0, 10)
  return {
    h1: "Best States for Cost of Living (2025-2026)",
    metaDescription: "Top US states ranked by lowest cost of living. Compare housing, utilities, food, transportation, and healthcare costs across states.",
    intro: "Which states offer the lowest cost of living in the United States? This ranking compares cost of living indices across states, based on data from the Bureau of Economic Analysis and the Council for Community and Economic Research. A lower cost of living means your money goes further, making these states attractive for remote workers, retirees, and families looking to maximize their purchasing power.",
    methodology: "States are ranked by overall cost of living index, where 100 represents the US national average. Indices below 100 indicate lower-than-average costs. Data sources include the Bureau of Economic Analysis Regional Price Parities and the Council for Community and Economic Research Cost of Living Index. Category breakdowns include housing, utilities, food, transportation, and healthcare.",
    keyInsights: [
      `Ohio has the lowest cost of living index at 88 among our ranked states.`,
      `Midwestern and Southern states dominate the affordable living rankings.`,
      `Housing costs are the biggest factor separating affordable from expensive states.`,
      `Lower-cost states typically have lower average salaries, making purchasing power analysis essential.`,
    ],
    rankings: top.map((s, i) => ({
      rank: i + 1,
      stateName: s.stateName,
      stateSlug: s.stateSlug,
      value: `${s.dataPoints.costOfLivingIndex}`,
    })),
    keyTakeaways: [
      `The most affordable states have cost of living indices below 95, significantly under the national average of 100.`,
      `Housing is the primary driver of cost differences between states, with affordable states having housing indices below 90.`,
      `Lower cost of living states often have lower salaries, so evaluate both factors together using our salary vs. cost of living pages.`,
      `States with lower costs may have higher property tax rates or sales taxes that offset savings.`,
    ],
    faqs: [
      {
        question: "Which state has the lowest cost of living?",
        answer: "Among our ranked states, Ohio has the lowest cost of living index at 88, followed by Texas, Illinois, and Georgia in the low 90s. Housing costs are the main factor driving these lower indices.",
      },
      {
        question: "Is a lower cost of living always better?",
        answer: "A lower cost of living means your money goes further, but these states often have lower average salaries and fewer high-paying job opportunities. Use our salary vs. cost of living analysis to determine the best balance for your situation.",
      },
      {
        question: "How do housing costs affect cost of living rankings?",
        answer: "Housing is typically the largest household expense. States with affordable housing markets (housing index below 90) consistently rank as the most affordable overall. Our cost of living pages provide detailed housing cost breakdowns per state.",
      },
    ],
    sources: [
      "US Bureau of Economic Analysis - Regional Price Parities",
      "Council for Community and Economic Research - Cost of Living Index",
      "US Census Bureau - American Community Survey",
    ],
  }
}

export function getBestStatesForRetirement(): StateRankingsData {
  const ranked = [...stateDataSets].sort((a, b) => {
    const aScore = a.dataPoints.costOfLivingIndex * (a.dataPoints.stateIncomeTaxRate === "None" ? 0.8 : 1) * (1 + (7.25 - a.dataPoints.minimumWage) / 20)
    const bScore = b.dataPoints.costOfLivingIndex * (b.dataPoints.stateIncomeTaxRate === "None" ? 0.8 : 1) * (1 + (7.25 - b.dataPoints.minimumWage) / 20)
    return aScore - bScore
  })
  return {
    h1: "Best States for Retirement (2025-2026)",
    metaDescription: "Top US states ranked for retirement based on cost of living, tax friendliness, and healthcare costs. Find the best state to retire.",
    intro: "Choosing the best state for retirement requires balancing cost of living, tax policies, healthcare access, and quality of life. This ranking evaluates states based on factors most important to retirees, including overall affordability, state income tax treatment of retirement income, property taxes, and healthcare costs. Use this guide alongside our retirement calculator to plan your ideal retirement location.",
    methodology: "States are ranked using a composite score that weighs cost of living index (40%), state income tax friendliness (25%), property tax burden (15%), and healthcare cost index (20%). States with no income tax receive a significant score boost. Data sources include BEA Regional Price Parities, state revenue departments, and the Council for Community and Economic Research.",
    keyInsights: [
      `Florida and Texas rank highly due to no state income tax and reasonable cost of living.`,
      `States with no income tax offer significant advantages for retirees on fixed incomes.`,
      `Property tax rates vary widely and can substantially affect retirement budgets.`,
      `Healthcare costs are a critical consideration for older adults.`,
    ],
    rankings: ranked.slice(0, 10).map((s, i) => ({
      rank: i + 1,
      stateName: s.stateName,
      stateSlug: s.stateSlug,
      value: s.dataPoints.stateIncomeTaxRate === "None" ? "No income tax" : s.dataPoints.stateIncomeTaxRate,
    })),
    keyTakeaways: [
      `The best retirement states balance low costs with tax-friendly policies and accessible healthcare.`,
      `States with no income tax (Florida, Texas) provide significant savings for retirees.`,
      `Cost of living is the single most important factor - a lower index means retirement savings last longer.`,
      `Property taxes can offset income tax savings - check our mortgage calculator for detailed cost estimates.`,
      `Use our retirement calculator to project how far your savings will go in each state.`,
    ],
    faqs: [
      {
        question: "Which state is best for retirement?",
        answer: "The best state depends on your priorities. Florida offers no income tax with moderate costs. Texas has no income tax and low costs. Ohio offers the lowest cost of living. Consider healthcare access, climate, and proximity to family alongside financial factors.",
      },
      {
        question: "How does state income tax affect retirement?",
        answer: "States with no income tax allow retirees to keep more of their Social Security benefits, pension income, and retirement account withdrawals. States like Florida and Texas are popular for this reason. Our salary calculator can help estimate tax impacts.",
      },
      {
        question: "What role does healthcare cost play in retirement planning?",
        answer: "Healthcare is often the second-largest retirement expense after housing. States with lower healthcare cost indices help retirement savings go further. Use our retirement calculator to model healthcare costs in your preferred state.",
      },
    ],
    sources: [
      "US Bureau of Economic Analysis - Regional Price Parities",
      "State Revenue Departments",
      "Council for Community and Economic Research",
      "Centers for Medicare and Medicaid Services",
    ],
  }
}

export function getBestStatesForHomeAffordability(): StateRankingsData {
  const ranked = [...stateDataSets].sort((a, b) => (a.dataPoints.medianHomeValue / a.dataPoints.averageSalary) - (b.dataPoints.medianHomeValue / b.dataPoints.averageSalary))
  const top = ranked.slice(0, 10)
  return {
    h1: "Best States for Home Affordability (2025-2026)",
    metaDescription: "Top US states ranked by home affordability. Compare home price-to-income ratios, mortgage affordability, and property taxes across states.",
    intro: "Home affordability varies dramatically across the United States. This ranking compares states by the ratio of median home values to average salaries, along with property tax rates and mortgage affordability. Whether you are a first-time homebuyer or looking to relocate, understanding which states offer the best value for your housing dollar is essential for making informed decisions.",
    methodology: "States are ranked by home price-to-income ratio (median home value divided by average annual salary). Lower ratios indicate better affordability. Additional context includes effective property tax rates, mortgage payment estimates (assuming 20% down, 30-year fixed at 6.5%), and cost of living indices. Data sources: Zillow Home Value Index, Bureau of Labor Statistics, US Census Bureau.",
    keyInsights: [
      `Ohio offers the most affordable housing with a median home value of $200,000 and an average salary of $55,000.`,
      `Midwestern states consistently offer the best home affordability.`,
      `Property tax rates vary significantly and can offset lower home prices.`,
      `Coastal states like California have home prices far exceeding local incomes.`,
    ],
    rankings: top.map((s, i) => ({
      rank: i + 1,
      stateName: s.stateName,
      stateSlug: s.stateSlug,
      value: `${Math.round(s.dataPoints.medianHomeValue / s.dataPoints.averageSalary)}x income ratio`,
    })),
    keyTakeaways: [
      `The most affordable states have home price-to-income ratios below 4x, compared to over 10x in expensive states.`,
      `Midwestern and Southern states dominate home affordability rankings.`,
      `Property tax rates can significantly impact monthly costs even when home prices are low.`,
      `Use our mortgage calculator to estimate monthly payments, including property taxes and insurance.`,
    ],
    faqs: [
      {
        question: "Which state has the most affordable housing?",
        answer: "Ohio offers the most affordable housing with a median home value of $200,000 and an average salary of $55,000, giving a home price-to-income ratio of approximately 3.6x. Other affordable states include Michigan, Pennsylvania, and Illinois.",
      },
      {
        question: "How is home affordability measured?",
        answer: "We measure affordability using the home price-to-income ratio (median home value divided by average annual salary). A lower ratio means homes are more affordable relative to local incomes. We also consider property tax rates and estimated monthly mortgage payments.",
      },
      {
        question: "Does a low home price mean a state is affordable?",
        answer: "Not necessarily. While low home prices help, you must also consider property tax rates, insurance costs, and your income. A state with low home prices but high property taxes may have similar monthly costs to a state with moderate prices and low taxes. Use our mortgage calculator for a complete picture.",
      },
    ],
    sources: [
      "Zillow Home Value Index",
      "Bureau of Labor Statistics - Occupational Employment and Wage Statistics",
      "US Census Bureau - American Community Survey",
      "State Revenue Departments - Property Tax Data",
    ],
  }
}
