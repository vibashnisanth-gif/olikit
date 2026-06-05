import { Calculator, InflationInput, InflationOutput } from '../types'

export class InflationCalculator implements Calculator<InflationInput, InflationOutput> {
  name = 'Inflation Calculator'
  description = 'Calculates the future or present value of money adjusted for inflation'
  category = 'personal-finance' as const

  calculate(input: InflationInput): InflationOutput {
    const { amount, years, inflationRate, direction } = input
    const rate = inflationRate / 100

    let resultAmount: number
    if (direction === 'future') {
      resultAmount = amount * Math.pow(1 + rate, years)
    } else {
      resultAmount = amount / Math.pow(1 + rate, years)
    }

    const cumulativeInflationRate = (Math.pow(1 + rate, years) - 1) * 100
    const purchasingPowerChange = direction === 'future'
      ? cumulativeInflationRate
      : -cumulativeInflationRate

    return {
      resultAmount: Math.round(resultAmount * 100) / 100,
      cumulativeInflationRate: Math.round(cumulativeInflationRate * 100) / 100,
      purchasingPowerChange: Math.round(purchasingPowerChange * 100) / 100,
    }
  }
}
