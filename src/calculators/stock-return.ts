import { Calculator, StockReturnInput, StockReturnOutput } from '../types'

export class StockReturnCalculator implements Calculator<StockReturnInput, StockReturnOutput> {
  name = 'Stock Return Calculator'
  description = 'Calculates total return, capital gains, and annualized return for stocks'
  category = 'investment' as const

  calculate(input: StockReturnInput): StockReturnOutput {
    const { buyPrice, sellPrice, shares, dividendsReceived, holdingPeriodYears, commissions = 0 } = input
    const totalBuyCost = buyPrice * shares + commissions
    const totalSellProceeds = sellPrice * shares - commissions
    const capitalGain = totalSellProceeds - totalBuyCost
    const dividendIncome = dividendsReceived
    const totalReturn = capitalGain + dividendIncome
    const totalReturnPercent = totalBuyCost > 0 ? (totalReturn / totalBuyCost) * 100 : 0
    const annualizedReturn = totalBuyCost > 0 && holdingPeriodYears > 0
      ? Math.pow((totalBuyCost + totalReturn) / totalBuyCost, 1 / holdingPeriodYears) - 1
      : 0
    const dividendYield = totalBuyCost > 0 ? (dividendIncome / totalBuyCost) * 100 : 0

    return {
      totalReturn: Math.round(totalReturn * 100) / 100,
      totalReturnPercent: Math.round(totalReturnPercent * 100) / 100,
      annualizedReturn: Math.round(annualizedReturn * 10000) / 100,
      capitalGain: Math.round(capitalGain * 100) / 100,
      dividendIncome: Math.round(dividendIncome * 100) / 100,
      dividendYield: Math.round(dividendYield * 100) / 100,
    }
  }
}
