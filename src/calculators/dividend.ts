import { Calculator, DividendInput, DividendOutput } from '../types'

export class DividendCalculator implements Calculator<DividendInput, DividendOutput> {
  name = 'Dividend Calculator'
  description = 'Projects dividend income growth over time'
  category = 'investment' as const

  calculate(input: DividendInput): DividendOutput {
    const { currentAnnualDividend, dividendGrowthRate, years, initialShares, annualSharePurchases, sharePrice } = input

    let shares = initialShares
    let divPerShare = currentAnnualDividend
    let totalDividendIncome = 0
    const schedule: { year: number; shares: number; dividendPerShare: number; annualIncome: number }[] = []

    for (let year = 1; year <= years; year++) {
      const annualIncome = shares * divPerShare
      totalDividendIncome += annualIncome

      schedule.push({
        year,
        shares: Math.round(shares * 100) / 100,
        dividendPerShare: Math.round(divPerShare * 100) / 100,
        annualIncome: Math.round(annualIncome * 100) / 100,
      })

      if (sharePrice > 0) {
        shares += annualSharePurchases / sharePrice
      }
      divPerShare *= (1 + dividendGrowthRate / 100)
    }

    return {
      projectedAnnualIncome: Math.round((shares * divPerShare) * 100) / 100,
      totalShares: Math.round(shares * 100) / 100,
      totalDividendIncome: Math.round(totalDividendIncome * 100) / 100,
      finalAnnualDividendPerShare: Math.round(divPerShare * 100) / 100,
      schedule,
    }
  }
}
