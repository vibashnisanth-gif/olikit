import { Calculator, RetirementSavingsInput, RetirementSavingsOutput } from '../types'

export class RetirementSavingsCalculator implements Calculator<RetirementSavingsInput, RetirementSavingsOutput> {
  name = 'Retirement Savings Calculator'
  description = 'Projects retirement savings growth and determines if you are on track'
  category = 'retirement' as const

  calculate(input: RetirementSavingsInput): RetirementSavingsOutput {
    const { currentAge, retirementAge, lifeExpectancy, currentSavings, monthlyContribution, expectedReturnRate, currentAnnualIncome, desiredReplacementRate, inflationRate } = input

    const yearsToRetirement = Math.max(0, retirementAge - currentAge)
    const yearsInRetirement = Math.max(1, lifeExpectancy - retirementAge)
    const monthlyRate = expectedReturnRate / 100 / 12
    const totalMonths = yearsToRetirement * 12

    const fvOfSavings = currentSavings * Math.pow(1 + expectedReturnRate / 100, yearsToRetirement)

    let fvOfContributions = 0
    if (totalMonths > 0) {
      if (monthlyRate > 0) {
        fvOfContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)
      } else {
        fvOfContributions = monthlyContribution * totalMonths
      }
    }

    const savingsAtRetirement = fvOfSavings + fvOfContributions
    const safeWithdrawalRate = 0.04
    const monthlyRetirementIncome = savingsAtRetirement * safeWithdrawalRate / 12
    const inflatedIncome = currentAnnualIncome * Math.pow(1 + inflationRate / 100, yearsToRetirement)
    const targetIncome = inflatedIncome * desiredReplacementRate / 100
    const targetSavings = targetIncome / safeWithdrawalRate
    const savingsGap = targetSavings - savingsAtRetirement
    const isOnTrack = savingsAtRetirement >= targetSavings

    return {
      savingsAtRetirement: Math.round(savingsAtRetirement * 100) / 100,
      monthlyRetirementIncome: Math.round(monthlyRetirementIncome * 100) / 100,
      targetSavings: Math.round(targetSavings * 100) / 100,
      savingsGap: Math.round(savingsGap * 100) / 100,
      isOnTrack,
      withdrawalRate: Math.round(safeWithdrawalRate * 10000) / 100,
    }
  }
}
