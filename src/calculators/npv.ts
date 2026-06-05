import { Calculator, NPVInput, NPVOutput } from '../types'

export class NPVCalculator implements Calculator<NPVInput, NPVOutput> {
  name = 'NPV Calculator'
  description = 'Calculates net present value and profitability index'
  category = 'investment' as const

  calculate(input: NPVInput): NPVOutput {
    const { initialInvestment, discountRate, cashFlows } = input
    const rate = discountRate / 100

    let pvOfCashFlows = 0
    for (let i = 0; i < cashFlows.length; i++) {
      pvOfCashFlows += cashFlows[i] / Math.pow(1 + rate, i + 1)
    }

    const npv = pvOfCashFlows - initialInvestment
    const profitabilityIndex = initialInvestment > 0 ? pvOfCashFlows / initialInvestment : 0
    const decision = npv >= 0 ? 'accept' : 'reject'

    return {
      npv: Math.round(npv * 100) / 100,
      profitabilityIndex: Math.round(profitabilityIndex * 10000) / 100,
      decision,
    }
  }
}
