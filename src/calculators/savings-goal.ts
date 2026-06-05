import { Calculator, SavingsGoalInput, SavingsGoalOutput } from '../types'

export class SavingsGoalCalculator implements Calculator<SavingsGoalInput, SavingsGoalOutput> {
  name = 'Savings Goal Calculator'
  description = 'Calculates the time needed to reach a savings goal'
  category = 'personal-finance' as const

  calculate(input: SavingsGoalInput): SavingsGoalOutput {
    const { targetAmount, currentSavings, monthlyContribution, annualRate } = input
    const monthlyRate = annualRate / 100 / 12

    if (currentSavings >= targetAmount) {
      return {
        monthsToGoal: 0,
        totalContributions: currentSavings,
        totalInterestEarned: 0,
        finalBalance: currentSavings,
        schedule: [],
      }
    }

    let balance = currentSavings
    let totalContributions = currentSavings
    let months = 0
    const schedule: { month: number; balance: number; contribution: number; interest: number }[] = []

    while (balance < targetAmount && months < 1200) {
      months++
      const interest = balance * monthlyRate
      balance = balance + interest + monthlyContribution
      totalContributions += monthlyContribution

      schedule.push({
        month: months,
        balance: Math.round(balance * 100) / 100,
        contribution: monthlyContribution,
        interest: Math.round(interest * 100) / 100,
      })
    }

    const totalInterestEarned = balance - totalContributions

    return {
      monthsToGoal: months,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterestEarned: Math.round(totalInterestEarned * 100) / 100,
      finalBalance: Math.round(balance * 100) / 100,
      schedule,
    }
  }
}
