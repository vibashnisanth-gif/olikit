import { Calculator, BusinessValuationInput, BusinessValuationOutput } from '../types'

export class BusinessValuationCalculator implements Calculator<BusinessValuationInput, BusinessValuationOutput> {
  name = 'Business Valuation Calculator'
  description = 'Calculates business valuation using revenue and EBITDA multiples'
  category = 'valuation' as const

  calculate(input: BusinessValuationInput): BusinessValuationOutput {
    const { annualRevenue, annualEbitda, revenueMultiple, ebitdaMultiple, growthRate } = input
    const growthFactor = 1 + growthRate / 100

    const revenueBasedValuation = annualRevenue * revenueMultiple * growthFactor
    const ebitdaBasedValuation = annualEbitda * ebitdaMultiple * growthFactor

    let blendedValuation: number
    if (annualRevenue > 0 && annualEbitda > 0) {
      blendedValuation = (revenueBasedValuation + ebitdaBasedValuation) / 2
    } else if (annualRevenue > 0) {
      blendedValuation = revenueBasedValuation
    } else {
      blendedValuation = ebitdaBasedValuation
    }

    const evToRevenue = annualRevenue > 0 ? blendedValuation / annualRevenue : 0
    const evToEbitda = annualEbitda > 0 ? blendedValuation / annualEbitda : 0

    return {
      revenueBasedValuation: Math.round(revenueBasedValuation * 100) / 100,
      ebitdaBasedValuation: Math.round(ebitdaBasedValuation * 100) / 100,
      blendedValuation: Math.round(blendedValuation * 100) / 100,
      evToRevenue: Math.round(evToRevenue * 100) / 100,
      evToEbitda: Math.round(evToEbitda * 100) / 100,
    }
  }
}
