import { Calculator, CompoundInterestInput, CompoundInterestOutput } from '../types'

export class CompoundInterestCalculator implements Calculator<CompoundInterestInput, CompoundInterestOutput> {
  name = 'Compound Interest Calculator'
  description = 'Calculates future value with compound interest and regular contributions'
  category = 'investment' as const

  calculate(input: CompoundInterestInput): CompoundInterestOutput {
    const { principal, monthlyContribution, annualRate, years, compoundsPerYear } = input
    const ratePerPeriod = annualRate / 100 / compoundsPerYear
    const totalPeriods = years * compoundsPerYear
    const futureValueOfPrincipal = principal * Math.pow(1 + ratePerPeriod, totalPeriods)
    let futureValueOfContributions = 0
    if (monthlyContribution > 0) {
      const paymentsPerCompoundingPeriod = compoundsPerYear / 12
      const contributionPerPeriod = monthlyContribution * paymentsPerCompoundingPeriod
      if (ratePerPeriod > 0) {
        futureValueOfContributions = contributionPerPeriod * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod)
      } else {
        futureValueOfContributions = contributionPerPeriod * totalPeriods
      }
    }
    const futureValue = futureValueOfPrincipal + futureValueOfContributions
    const totalContributions = principal + monthlyContribution * 12 * years
    const totalInterest = futureValue - totalContributions
    const effectiveAnnualRate = Math.pow(1 + ratePerPeriod, compoundsPerYear) - 1
    return {
      futureValue: Math.round(futureValue * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      effectiveAnnualRate: Math.round(effectiveAnnualRate * 10000) / 100,
    }
  }
}
