import { Calculator, BreakEvenInput, BreakEvenOutput } from '../types'

export class BreakEvenCalculator implements Calculator<BreakEvenInput, BreakEvenOutput> {
  name = 'Break-Even Calculator'
  description = 'Calculates the break-even point in units and revenue'
  category = 'business' as const

  calculate(input: BreakEvenInput): BreakEvenOutput {
    const { fixedCosts, variableCostPerUnit, sellingPricePerUnit } = input
    const contributionMarginPerUnit = sellingPricePerUnit - variableCostPerUnit
    const contributionMarginRatio = sellingPricePerUnit > 0 ? (contributionMarginPerUnit / sellingPricePerUnit) * 100 : 0

    let breakEvenUnits: number
    let breakEvenRevenue: number

    if (contributionMarginPerUnit <= 0) {
      breakEvenUnits = Infinity
      breakEvenRevenue = Infinity
    } else {
      breakEvenUnits = Math.ceil(fixedCosts / contributionMarginPerUnit)
      breakEvenRevenue = Math.round(breakEvenUnits * sellingPricePerUnit * 100) / 100
    }

    return {
      breakEvenUnits,
      breakEvenRevenue,
      contributionMarginPerUnit: Math.round(contributionMarginPerUnit * 100) / 100,
      contributionMarginRatio: Math.round(contributionMarginRatio * 100) / 100,
    }
  }
}
