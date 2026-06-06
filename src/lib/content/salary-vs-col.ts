import { stateDataSets } from "./state-data"
import { costOfLivingData } from "./state-expansion"

export interface SalaryVsCostOfLivingData {
  h1: string
  metaDescription: string
  intro: string
  salaryOverview: string
  costOfLivingOverview: string
  housingAffordability: string
  purchasingPower: string
  comparisonTable: { label: string; stateValue: string; nationalValue: string }[]
  keyTakeaways: string[]
  quickAnswer: string
  faqs: { question: string; answer: string }[]
  sources: string[]
}

export function generateSalaryVsColContent(stateSlug: string, stateName: string): SalaryVsCostOfLivingData | null {
  const data = stateDataSets.find(s => s.stateSlug === stateSlug)
  const col = costOfLivingData[stateSlug]
  if (!data || !col) return null

  const { averageSalary, medianHouseholdIncome, minimumWage, stateIncomeTaxRate, medianHomeValue, costOfLivingIndex } = data.dataPoints
  const usAvg = 63000
  const salaryDiff = Math.abs(Math.round(((averageSalary - usAvg) / usAvg) * 100))
  const salaryHigher = averageSalary > usAvg
  const ratio = Math.round(averageSalary / (costOfLivingIndex / 100))

  return {
    h1: `Salary vs. Cost of Living in ${stateName} (2025-2026)`,
    metaDescription: `Compare salary vs. cost of living in ${stateName}. Average salary: $${averageSalary.toLocaleString()}. Cost of living index: ${costOfLivingIndex}. Housing affordability and purchasing power analysis.`,
    intro: `Understanding how your salary compares to the cost of living in ${stateName} is essential for making informed financial decisions. The average annual salary in ${stateName} is $${averageSalary.toLocaleString()}, while the cost of living index is ${costOfLivingIndex} (US average = 100). This comprehensive analysis breaks down how far your money goes in ${stateName}, covering housing affordability, purchasing power, and key factors that affect your standard of living.`,
    salaryOverview: `The average annual salary in ${stateName} is $${averageSalary.toLocaleString()} as of 2025-2026, based on data from the Bureau of Labor Statistics. This is ${salaryDiff}% ${salaryHigher ? "higher than" : "lower than"} the national average of $${usAvg.toLocaleString()}. The median household income in ${stateName} is $${medianHouseholdIncome.toLocaleString()}. ${stateIncomeTaxRate !== "None" ? `${stateName} has a ${stateIncomeTaxRate.toLowerCase()} state income tax.` : `${stateName} has no state income tax, which can significantly increase take-home pay.`}`,
    costOfLivingOverview: `The cost of living in ${stateName} is ${costOfLivingIndex}% of the national average (index: ${costOfLivingIndex}). Housing costs index at ${col.housing}, utilities at ${col.utilities}, food at ${col.food}, transportation at ${col.transport}, and healthcare at ${col.healthcare}. A household earning the average salary of $${averageSalary.toLocaleString()} in ${stateName} needs approximately $${Math.round(averageSalary * 100 / costOfLivingIndex).toLocaleString()} to maintain the same standard of living in an average-cost US area.`,
    housingAffordability: `The median home value in ${stateName} is $${medianHomeValue.toLocaleString()}. With an average salary of $${averageSalary.toLocaleString()}, the home price-to-income ratio is approximately ${Math.round(medianHomeValue / averageSalary)}x. The estimated monthly mortgage payment on a median-priced home (assuming 20% down, 30-year fixed at 6.5%) is about $${Math.round(medianHomeValue * 0.8 * 0.00632)}. Housing costs in ${stateName} are ${Math.abs(col.housing - 100)}% ${col.housing > 100 ? "above" : "below"} the national average (index: ${col.housing}). ${col.housing > 120 ? "This makes ${stateName} one of the more expensive states for housing, requiring careful budget planning." : col.housing < 90 ? "This makes ${stateName} relatively affordable for housing compared to other states." : "Housing costs in ${stateName} are close to the national average."}`,
    purchasingPower: `A salary of $${averageSalary.toLocaleString()} in ${stateName} has an effective purchasing power of approximately $${ratio.toLocaleString()} when adjusted for the local cost of living. This means that even if your salary is $${salaryDiff}% ${salaryHigher ? "above" : "below"} the national average, your actual buying power depends heavily on local costs. The biggest factor is housing, which accounts for the largest share of most household budgets. After adjusting for cost of living, the purchasing power of the average ${stateName} salary is ${ratio > usAvg ? `${Math.round((ratio / usAvg - 1) * 100)}% higher than` : ratio < usAvg ? `${Math.round((1 - ratio / usAvg) * 100)}% lower than` : "comparable to"} the national average.`,
    comparisonTable: [
      { label: "Average Annual Salary", stateValue: `$${averageSalary.toLocaleString()}`, nationalValue: `$${usAvg.toLocaleString()}` },
      { label: "Cost of Living Index", stateValue: `${costOfLivingIndex}`, nationalValue: "100" },
      { label: "Housing Cost Index", stateValue: `${col.housing}`, nationalValue: "100" },
      { label: "Median Home Value", stateValue: `$${medianHomeValue.toLocaleString()}`, nationalValue: "$350,000" },
      { label: "Purchasing Power (adj.)", stateValue: `$${ratio.toLocaleString()}`, nationalValue: `$${usAvg.toLocaleString()}` },
      { label: "State Income Tax", stateValue: stateIncomeTaxRate, nationalValue: "Varies" },
      { label: "Minimum Wage", stateValue: `$${minimumWage.toFixed(2)}/hr`, nationalValue: "$7.25/hr" },
      { label: "Median Household Income", stateValue: `$${medianHouseholdIncome.toLocaleString()}`, nationalValue: "$75,000" },
    ],
    keyTakeaways: [
      `The average salary in ${stateName} is $${averageSalary.toLocaleString()} (${salaryDiff}% ${salaryHigher ? "above" : "below"} the US average of $${usAvg.toLocaleString()}).`,
      `The cost of living index of ${costOfLivingIndex} means expenses are ${Math.abs(costOfLivingIndex - 100)}% ${costOfLivingIndex > 100 ? "higher" : "lower"} than the national average.`,
      `After adjusting for cost of living, the effective purchasing power of the average ${stateName} salary is approximately $${ratio.toLocaleString()} per year.`,
      `Housing costs (index: ${col.housing}) are the largest factor in ${stateName}'s cost of living, with a median home value of $${medianHomeValue.toLocaleString()}.`,
      `Use our salary calculator to estimate take-home pay, and our mortgage calculator to evaluate home affordability in ${stateName}.`,
    ],
    quickAnswer: `In ${stateName}, the average salary of $${averageSalary.toLocaleString()} combined with a cost of living index of ${costOfLivingIndex} results in an effective purchasing power of $${ratio.toLocaleString()}. Housing costs at index ${col.housing} and a ${stateIncomeTaxRate !== "None" ? `${stateIncomeTaxRate.toLowerCase()} state income tax` : "no state income tax"} are key factors affecting your standard of living.`,
    faqs: [
      {
        question: `What is the cost of living vs. salary ratio in ${stateName}?`,
        answer: `The average salary in ${stateName} is $${averageSalary.toLocaleString()} and the cost of living index is ${costOfLivingIndex}. After adjusting, the effective purchasing power is approximately $${ratio.toLocaleString()} per year. This means you need about $${Math.round(averageSalary * 100 / costOfLivingIndex).toLocaleString()} in ${stateName} to match the buying power of $${usAvg.toLocaleString()} nationally.`,
      },
      {
        question: `Can you live comfortably in ${stateName} on the average salary?`,
        answer: `With an average salary of $${averageSalary.toLocaleString()} and a cost of living index of ${costOfLivingIndex}, living comfortably in ${stateName} depends on your lifestyle, family size, and housing choices. The median home value of $${medianHomeValue.toLocaleString()} requires careful budget planning. Use our salary calculator and mortgage calculator for personalized estimates.`,
      },
      {
        question: `How does housing affordability work in ${stateName}?`,
        answer: `The median home value in ${stateName} is $${medianHomeValue.toLocaleString()}, and the housing cost index is ${col.housing} (national average: 100). With an average salary of $${averageSalary.toLocaleString()}, the home price-to-income ratio is approximately ${Math.round(medianHomeValue / averageSalary)}x, compared to the US average of roughly 5.5x.`,
      },
      {
        question: `What is the take-home pay after taxes in ${stateName}?`,
        answer: `Take-home pay depends on your filing status, deductions, and ${stateIncomeTaxRate !== "None" ? `${stateName}'s ${stateIncomeTaxRate.toLowerCase()} state income tax` : `${stateName} having no state income tax`}. Use our salary calculator to estimate your net pay after federal and state taxes.`,
      },
    ],
    sources: [
      "Bureau of Labor Statistics - Occupational Employment and Wage Statistics",
      "US Census Bureau - American Community Survey",
      "US Bureau of Economic Analysis - Regional Price Parities",
      "Council for Community and Economic Research - Cost of Living Index",
      "Zillow Home Value Index",
    ],
  }
}
