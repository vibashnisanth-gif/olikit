import { Calculator, InvestmentReturnInput, InvestmentReturnOutput } from '../types'

export class InvestmentReturnCalculator implements Calculator<InvestmentReturnInput, InvestmentReturnOutput> {
  name = 'Investment Return Calculator'
  description = 'Calculates total return, CAGR, and absolute return on investments'
  category = 'investment' as const

  calculate(input: InvestmentReturnInput): InvestmentReturnOutput {
    const { initialInvestment, finalValue, years, additionalContributions = 0 } = input
    const totalReturn = finalValue - initialInvestment
    const totalReturnPercent = initialInvestment > 0 ? ((finalValue - initialInvestment) / initialInvestment) * 100 : 0
    const totalInvested = initialInvestment + additionalContributions
    const cagr = years > 0 && totalInvested > 0 ? (Math.pow(finalValue / totalInvested, 1 / years) - 1) * 100 : 0
    return {
      totalReturn: Math.round(totalReturn * 100) / 100,
      totalReturnPercent: Math.round(totalReturnPercent * 100) / 100,
      cagr: Math.round(cagr * 100) / 100,
      absoluteReturn: Math.round(totalReturn * 100) / 100,
    }
  }
}
