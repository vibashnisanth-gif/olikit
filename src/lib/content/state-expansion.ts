import type { Locale } from "@/types/seo"
import { stateDataSets } from "./state-data"

export interface CostOfLivingBreakdown {
  overall: number
  housing: number
  utilities: number
  food: number
  transport: number
  healthcare: number
}

export interface AverageSalaryContent {
  h1: string
  intro: string
  averageSalary: number
  medianIncome: number
  costOfLivingContext: string
  comparisonTable: { label: string; value: string }[]
  keyTakeaways: string[]
  quickAnswer: string
  sections: { heading: string; body: string }[]
  faqs: { question: string; answer: string }[]
  sources: string[]
}

export interface CostOfLivingContent {
  h1: string
  intro: string
  breakdown: CostOfLivingBreakdown
  comparisonVsNational: string
  keyTakeaways: string[]
  quickAnswer: string
  sections: { heading: string; body: string }[]
  faqs: { question: string; answer: string }[]
  sources: string[]
}

export const costOfLivingData: Record<string, CostOfLivingBreakdown> = {
  california: { overall: 142, housing: 180, utilities: 115, food: 112, transport: 125, healthcare: 118 },
  texas: { overall: 92, housing: 85, utilities: 95, food: 94, transport: 93, healthcare: 88 },
  florida: { overall: 100, housing: 105, utilities: 100, food: 102, transport: 98, healthcare: 95 },
  "new-york": { overall: 130, housing: 165, utilities: 115, food: 115, transport: 130, healthcare: 112 },
  illinois: { overall: 92, housing: 88, utilities: 98, food: 95, transport: 95, healthcare: 90 },
  pennsylvania: { overall: 97, housing: 92, utilities: 105, food: 98, transport: 96, healthcare: 93 },
  ohio: { overall: 88, housing: 78, utilities: 92, food: 90, transport: 92, healthcare: 86 },
  georgia: { overall: 94, housing: 90, utilities: 95, food: 96, transport: 93, healthcare: 88 },
  "north-carolina": { overall: 96, housing: 92, utilities: 94, food: 97, transport: 94, healthcare: 90 },
  michigan: { overall: 89, housing: 82, utilities: 95, food: 93, transport: 91, healthcare: 87 },
  washington: { overall: 120, housing: 145, utilities: 102, food: 110, transport: 115, healthcare: 105 },
}

function getStateData(stateSlug: string) {
  return stateDataSets.find(s => s.stateSlug === stateSlug)
}

export function generateAverageSalaryContent(stateSlug: string, stateName: string): AverageSalaryContent | null {
  const data = getStateData(stateSlug)
  if (!data) return null

  const { averageSalary, medianHouseholdIncome, minimumWage, stateIncomeTaxRate, costOfLivingIndex } = data.dataPoints
  const usAvg = 63000
  const salaryComparison = averageSalary > usAvg ? "higher than" : averageSalary < usAvg ? "lower than" : "comparable to"
  const salaryDiff = Math.abs(Math.round(((averageSalary - usAvg) / usAvg) * 100))

  return {
    h1: `Average Salary in ${stateName} (2025-2026)`,
    intro: `The average annual salary in ${stateName} is $${averageSalary.toLocaleString()}, which is ${salaryComparison} the national average of $${usAvg.toLocaleString()} by ${salaryDiff}%. Understanding ${stateName} salaries helps with career planning, relocation decisions, and financial goal setting.`,
    averageSalary,
    medianIncome: medianHouseholdIncome,
    costOfLivingContext: `With a cost of living index of ${costOfLivingIndex} (US average = 100), ${stateName} is ${costOfLivingIndex > 100 ? `${costOfLivingIndex - 100}% more expensive than` : `${100 - costOfLivingIndex}% less expensive than`} the national average. This significantly impacts how far your salary goes.`,
    comparisonTable: [
      { label: "Average Annual Salary", value: `$${averageSalary.toLocaleString()}` },
      { label: "Median Household Income", value: `$${medianHouseholdIncome.toLocaleString()}` },
      { label: "National Average Salary", value: `$${usAvg.toLocaleString()}` },
      { label: "Minimum Wage", value: `$${minimumWage.toFixed(2)}/hour` },
      { label: "State Income Tax", value: stateIncomeTaxRate },
      { label: "Cost of Living Index", value: `${costOfLivingIndex} (US avg: 100)` },
    ],
    keyTakeaways: [
      `The average salary in ${stateName} is $${averageSalary.toLocaleString()} per year, ${salaryDiff}% ${salaryComparison} the US average.`,
      `The median household income in ${stateName} is $${medianHouseholdIncome.toLocaleString()}.`,
      `After adjusting for cost of living (index: ${costOfLivingIndex}), the purchasing power of a $${averageSalary.toLocaleString()} salary in ${stateName} is equivalent to approximately $${Math.round(averageSalary * 100 / costOfLivingIndex).toLocaleString()} nationally.`,
      stateIncomeTaxRate !== "None" ? `${stateName} has a ${stateIncomeTaxRate.toLowerCase()} state income tax system.` : `${stateName} has no state income tax, which can significantly increase take-home pay.`,
      `The minimum wage in ${stateName} is $${minimumWage.toFixed(2)} per hour.`,
    ],
    quickAnswer: `The average annual salary in ${stateName} is $${averageSalary.toLocaleString()} as of 2025-2026. The median household income is $${medianHouseholdIncome.toLocaleString()}. With a cost of living index of ${costOfLivingIndex}, salaries in ${stateName} ${salaryComparison} the national average by ${salaryDiff}%.`,
    sections: [
      {
        heading: `Average Salary Overview for ${stateName}`,
        body: `As of 2025-2026, the average annual salary in ${stateName} stands at $${averageSalary.toLocaleString()}, based on data from the Bureau of Labor Statistics. This figure represents the mean annual wage across all occupations in the state. The median household income, which represents the midpoint of all household incomes, is $${medianHouseholdIncome.toLocaleString()}.

When evaluating salaries in ${stateName}, it is important to consider the state's cost of living index of ${costOfLivingIndex}. This means that goods and services in ${stateName} are approximately ${costOfLivingIndex > 100 ? `${costOfLivingIndex - 100}% more` : `${100 - costOfLivingIndex}% less`} expensive than the national average. The purchasing power of a $${averageSalary.toLocaleString()} salary in ${stateName} is roughly equivalent to $${Math.round(averageSalary * 100 / costOfLivingIndex).toLocaleString()} in an average-cost area of the United States.`,
      },
      {
        heading: `${stateName} Salary vs. National Average`,
        body: `The national average salary in the United States is approximately $${usAvg.toLocaleString()} per year. ${stateName}'s average salary of $${averageSalary.toLocaleString()} is ${salaryDiff}% ${salaryComparison} the national figure.

${stateName} ranks among states where salaries are ${salaryComparison} the national average. This is largely driven by factors including the local industry mix, cost of living, demand for skilled workers, and regional economic conditions. Major employment sectors in ${stateName} influence overall compensation levels across the state.`,
      },
      {
        heading: `Tax Impact on ${stateName} Salaries`,
        body: `State income tax significantly affects take-home pay. ${stateName}'s state income tax system is: ${stateIncomeTaxRate}. ${stateIncomeTaxRate === "None" ? `This means workers in ${stateName} pay no state income tax, which can result in significantly higher take-home pay compared to states with progressive or flat income taxes. However, ${stateName} may have higher property taxes or sales taxes that offset this benefit.` : `This tax structure means workers in ${stateName} should factor state income tax into their financial planning when evaluating job offers or negotiating salaries.`}

Use our free salary calculator to estimate your exact take-home pay in ${stateName} after federal and state taxes.`,
      },
      {
        heading: `Cost of Living Considerations in ${stateName}`,
        body: `With a cost of living index of ${costOfLivingIndex}, ${stateName} is ${costOfLivingIndex > 100 ? "more expensive" : "less expensive"} than the national average. Here is how this affects salary purchasing power:

At the average salary of $${averageSalary.toLocaleString()}, your effective purchasing power in ${stateName} is approximately $${Math.round(averageSalary * 100 / costOfLivingIndex).toLocaleString()} relative to national average costs.

Key cost factors include housing (the largest expense for most households), transportation, utilities, food, and healthcare. When evaluating a job offer or considering relocation to ${stateName}, it is essential to consider both the salary and the local cost of living.`,
      },
    ],
    faqs: [
      {
        question: `What is the average salary in ${stateName}?`,
        answer: `The average annual salary in ${stateName} is $${averageSalary.toLocaleString()} as of 2025-2026, according to the Bureau of Labor Statistics. The median household income is $${medianHouseholdIncome.toLocaleString()}.`,
      },
      {
        question: `How does ${stateName}'s average salary compare to the US average?`,
        answer: `${stateName}'s average salary of $${averageSalary.toLocaleString()} is ${salaryDiff}% ${salaryComparison} the US national average of $${usAvg.toLocaleString()}.`,
      },
      {
        question: `What is the minimum wage in ${stateName}?`,
        answer: `The minimum wage in ${stateName} is $${minimumWage.toFixed(2)} per hour. ${minimumWage > 7.25 ? "This is above the federal minimum wage of $7.25 per hour." : "This is the federal minimum wage rate."}`,
      },
      {
        question: `What is the cost of living in ${stateName}?`,
        answer: `The cost of living index in ${stateName} is ${costOfLivingIndex}, where 100 represents the US average. This means living expenses in ${stateName} are approximately ${costOfLivingIndex > 100 ? `${costOfLivingIndex - 100}% higher` : `${100 - costOfLivingIndex}% lower`} than the national average.`,
      },
      {
        question: `How much is $${averageSalary.toLocaleString()} after taxes in ${stateName}?`,
        answer: `The exact take-home amount depends on filing status, deductions, and credits. ${stateIncomeTaxRate !== "None" ? `${stateName} has a ${stateIncomeTaxRate.toLowerCase()} state income tax.` : `${stateName} has no state income tax.`} Use our salary calculator to get an accurate estimate of your after-tax income in ${stateName}.`,
      },
    ],
    sources: [
      "Bureau of Labor Statistics - Occupational Employment and Wage Statistics",
      "US Census Bureau - American Community Survey",
      `${stateName} Department of Revenue`,
      "US Bureau of Economic Analysis - Regional Price Parities",
    ],
  }
}

export function generateCostOfLivingContent(stateSlug: string, stateName: string): CostOfLivingContent | null {
  const data = getStateData(stateSlug)
  if (!data) return null

  const colData = costOfLivingData[stateSlug]
  if (!colData) return null

  const { costOfLivingIndex } = data.dataPoints
  const nationalAvg = 100
  const diff = Math.abs(costOfLivingIndex - nationalAvg)
  const higherOrLower = costOfLivingIndex > nationalAvg ? "higher" : "lower"

  return {
    h1: `Cost of Living in ${stateName} (2025-2026)`,
    intro: `The cost of living in ${stateName} is ${costOfLivingIndex}% of the national average (US average = 100). This means living expenses in ${stateName} are approximately ${diff}% ${higherOrLower} than the typical American household. Housing, utilities, food, transportation, and healthcare costs all contribute to the overall cost of living index.`,
    breakdown: colData,
    comparisonVsNational: `Compared to the US average (100), ${stateName}'s cost of living index of ${costOfLivingIndex} is ${diff}% ${higherOrLower}. Housing costs are the biggest factor at ${colData.housing} (${Math.abs(colData.housing - 100)}% ${colData.housing > 100 ? "above" : "below"} national average), followed by transportation at ${colData.transport} and healthcare at ${colData.healthcare}.`,
    keyTakeaways: [
      `The cost of living in ${stateName} is ${diff}% ${higherOrLower} than the US national average (index: ${costOfLivingIndex} vs. 100).`,
      `Housing in ${stateName} is ${Math.abs(colData.housing - 100)}% ${colData.housing > 100 ? "more" : "less"} expensive than the national average, making it the largest factor in the cost of living.`,
      `A salary of $${data.dataPoints.averageSalary.toLocaleString()} in ${stateName} has the purchasing power of about $${Math.round(data.dataPoints.averageSalary * 100 / costOfLivingIndex).toLocaleString()} in an average-cost US area.`,
      `Use our salary calculator and mortgage calculator to determine if your income supports your desired lifestyle in ${stateName}.`,
    ],
    quickAnswer: `The cost of living in ${stateName} is ${costOfLivingIndex}% of the US average (index of ${costOfLivingIndex}). Housing costs ${colData.housing}% of the national average, utilities ${colData.utilities}%, food ${colData.food}%, transportation ${colData.transport}%, and healthcare ${colData.healthcare}%. The average salary of $${data.dataPoints.averageSalary.toLocaleString()} in ${stateName} has an effective purchasing power of approximately $${Math.round(data.dataPoints.averageSalary * 100 / costOfLivingIndex).toLocaleString()} nationally.`,
    sections: [
      {
        heading: `${stateName} Cost of Living Overview`,
        body: `The cost of living in ${stateName} is ${costOfLivingIndex}% of the national average, meaning residents pay approximately ${diff}% ${higherOrLower} for goods and services compared to the typical US household. This index is calculated based on several key categories that make up the average household budget.

For context, a household earning the ${stateName} average salary of $${data.dataPoints.averageSalary.toLocaleString()} per year has an effective purchasing power of about $${Math.round(data.dataPoints.averageSalary * 100 / costOfLivingIndex).toLocaleString()} when adjusted for national cost differences. This adjustment is critical when comparing job offers or considering relocation between states.`,
      },
      {
        heading: `Housing Costs in ${stateName}`,
        body: `Housing is typically the largest expense for households, and in ${stateName} it is ${Math.abs(colData.housing - 100)}% ${colData.housing > 100 ? "above" : "below"} the national average (index: ${colData.housing}). The median home value in ${stateName} is $${data.dataPoints.medianHomeValue.toLocaleString()}.

${colData.housing > 120 ? "The high housing costs in this state make it particularly important to carefully budget for mortgage or rent payments." : colData.housing < 90 ? "The relatively affordable housing market in this state is a significant advantage for residents." : "Housing costs in this state are close to the national average, providing a balanced housing market for most budgets."}

Use our mortgage calculator to estimate monthly payments based on current interest rates and home prices in ${stateName}.`,
      },
      {
        heading: `Utilities, Food, and Transportation in ${stateName}`,
        body: `Beyond housing, the main cost categories in ${stateName} are:

Utilities (index: ${colData.utilities}): ${colData.utilities > 100 ? `Above the national average by ${colData.utilities - 100}%, influenced by climate and energy costs.` : `Below the national average by ${100 - colData.utilities}%.`}

Food (index: ${colData.food}): ${colData.food > 100 ? `${colData.food - 100}% above the national average.` : `${100 - colData.food}% below the national average.`}

Transportation (index: ${colData.transport}): ${colData.transport > 100 ? `${colData.transport - 100}% above the national average, reflecting fuel costs, public transit availability, and vehicle expenses.` : `${100 - colData.transport}% below the national average.`}

Healthcare (index: ${colData.healthcare}): ${colData.healthcare > 100 ? `${colData.healthcare - 100}% above the national average.` : `${100 - colData.healthcare}% below the national average.`}`,
      },
      {
        heading: `Salary vs. Cost of Living in ${stateName}`,
        body: `The relationship between salary and cost of living is essential for financial planning. The average salary in ${stateName} is $${data.dataPoints.averageSalary.toLocaleString()} per year. When adjusted for the cost of living index of ${costOfLivingIndex}, this salary provides a standard of living equivalent to earning approximately $${Math.round(data.dataPoints.averageSalary * 100 / costOfLivingIndex).toLocaleString()} in a typical US city.

${stateName} has a ${data.dataPoints.stateIncomeTaxRate !== "None" ? `${data.dataPoints.stateIncomeTaxRate.toLowerCase()} state income tax` : "no state income tax"}, which affects the take-home pay calculation. To estimate your actual after-tax income, use our salary calculator which accounts for both federal and state taxes.`,
      },
    ],
    faqs: [
      {
        question: `What is the cost of living in ${stateName}?`,
        answer: `The cost of living in ${stateName} is ${costOfLivingIndex}% of the US average, meaning expenses are ${diff}% ${higherOrLower} than the typical American household.`,
      },
      {
        question: `How much does housing cost in ${stateName}?`,
        answer: `Housing in ${stateName} has a cost index of ${colData.housing} (national average: 100), making it ${Math.abs(colData.housing - 100)}% ${colData.housing > 100 ? "more" : "less"} expensive than the national average. The median home value is $${data.dataPoints.medianHomeValue.toLocaleString()}.`,
      },
      {
        question: `What salary do you need to live comfortably in ${stateName}?`,
        answer: `Based on the cost of living index of ${costOfLivingIndex}, you would need approximately $${Math.round(data.dataPoints.averageSalary * 100 / costOfLivingIndex).toLocaleString()} in ${stateName} to maintain the same standard of living as the US average salary of $63,000. The actual amount depends on your lifestyle, family size, and housing choices.`,
      },
      {
        question: `How does ${stateName} cost of living compare to other states?`,
        answer: `${stateName}'s cost of living index of ${costOfLivingIndex} places it ${higherOrLower} than the national average. State income tax in ${stateName} is: ${data.dataPoints.stateIncomeTaxRate}. Consider both the cost index and tax burden when comparing ${stateName} to other states.`,
      },
    ],
    sources: [
      "US Bureau of Economic Analysis - Regional Price Parities",
      "Council for Community and Economic Research - Cost of Living Index",
      "US Census Bureau - American Community Survey",
      "Zillow Home Value Index",
    ],
  }
}

export function generateSalaryHubContent(locale: Locale): {
  h1: string
  intro: string
  sections: { heading: string; body: string }[]
  faqs: { question: string; answer: string }[]
  keyTakeaways: string[]
} {
  return {
    h1: `${locale.name} Salary Guide and Resources`,
    intro: `Comprehensive salary resources for ${locale.name}. Use our free salary calculator to estimate your take-home pay, explore average salaries by state, compare cost of living across regions, and read expert guides on salary and tax planning.`,
    sections: [
      {
        heading: `${locale.name} Salary Calculator`,
        body: `Our free salary calculator for ${locale.name} provides accurate take-home pay estimates after federal and state taxes, Social Security, Medicare, and other deductions. Enter your annual salary, filing status, and location to see your net pay, marginal tax rate, and effective tax rate. The calculator uses up-to-date tax brackets and contribution rates for the ${locale.taxTerms.incomeTaxYear} tax year.`,
      },
      {
        heading: `Average Salaries by State`,
        body: `Salary levels vary significantly across ${locale.name} states due to differences in industry mix, cost of living, labor demand, and regional economic conditions. Our average salary pages provide state-specific data including mean annual wages, median household incomes, and cost of living context to help you make informed career and relocation decisions.`,
      },
      {
        heading: `Tax Impact on Your Salary`,
        body: `Understanding how taxes affect your take-home pay is essential for financial planning. ${locale.name} has a progressive federal income tax system, and individual states may impose additional income taxes. Our resources explain how tax brackets work, the impact of state income tax, and strategies to optimize your after-tax income.`,
      },
      {
        heading: `Salary Guides and Resources`,
        body: `Beyond calculators, our salary guides provide in-depth information on salary negotiation, understanding your pay stub, benefits evaluation, and retirement planning. Whether you are starting a new job, negotiating a raise, or planning a career change, our resources help you make informed financial decisions.`,
      },
    ],
    faqs: [
      {
        question: `How is take-home pay calculated in ${locale.name}?`,
        answer: `Take-home pay is calculated by subtracting federal income tax, state income tax (where applicable), Social Security tax, Medicare tax, and any other deductions from your gross salary. Our salary calculator does this automatically using current tax rates for ${locale.name}.`,
      },
      {
        question: `What is the average salary in ${locale.name}?`,
        answer: `The national average salary in the United States is approximately $63,000 per year, though this varies significantly by state, occupation, and experience level.`,
      },
      {
        question: `Which state has the highest average salary?`,
        answer: `States with the highest average salaries typically include California, Massachusetts, New York, and Washington, which have strong technology, finance, and professional services sectors along with higher costs of living.`,
      },
    ],
    keyTakeaways: [
      `Use our free salary calculator to get an accurate estimate of your take-home pay in ${locale.name}.`,
      `Average salaries vary significantly by state, from approximately $55,000 to $77,000 annually.`,
      `State income tax rates range from 0% to over 13%, substantially impacting take-home pay.`,
      `Always consider cost of living when evaluating salary offers across different states.`,
    ],
  }
}
