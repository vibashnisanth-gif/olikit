import { Calculator, IRRInput, IRROutput } from '../types'

export class IRRCalculator implements Calculator<IRRInput, IRROutput> {
  name = 'IRR Calculator'
  description = 'Calculates internal rate of return using Newton\'s method'
  category = 'investment' as const

  calculate(input: IRRInput): IRROutput {
    const { initialInvestment, cashFlows, guess = 0.1 } = input
    const allCashFlows = [-initialInvestment, ...cashFlows]
    const maxIterations = 1000
    const tolerance = 1e-7

    let rate = guess
    for (let iter = 0; iter < maxIterations; iter++) {
      let npv = 0
      let dnpv = 0
      for (let i = 0; i < allCashFlows.length; i++) {
        npv += allCashFlows[i] / Math.pow(1 + rate, i)
        dnpv -= i * allCashFlows[i] / Math.pow(1 + rate, i + 1)
      }
      if (Math.abs(npv) < tolerance) break
      if (dnpv === 0) break
      rate = rate - npv / dnpv
    }

    return {
      irr: Math.round(rate * 10000) / 100,
    }
  }
}
