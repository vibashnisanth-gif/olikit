import { Calculator, SalaryInput, SalaryOutput } from '../types'

export class SalaryCalculator implements Calculator<SalaryInput, SalaryOutput> {
  name = 'Salary Calculator'
  description = 'Converts salary between different pay periods'
  category = 'salary' as const

  calculate(input: SalaryInput): SalaryOutput {
    const { amount, period, hoursPerWeek, daysPerWeek } = input

    let annual: number
    switch (period) {
      case 'annual':
        annual = amount
        break
      case 'monthly':
        annual = amount * 12
        break
      case 'biweekly':
        annual = amount * 26
        break
      case 'weekly':
        annual = amount * 52
        break
      case 'daily':
        annual = amount * daysPerWeek * 52
        break
      case 'hourly':
        annual = amount * hoursPerWeek * 52
        break
      default:
        annual = 0
    }

    return {
      hourly: Math.round((annual / (hoursPerWeek * 52)) * 100) / 100,
      daily: Math.round((annual / (daysPerWeek * 52)) * 100) / 100,
      weekly: Math.round((annual / 52) * 100) / 100,
      biweekly: Math.round((annual / 26) * 100) / 100,
      monthly: Math.round((annual / 12) * 100) / 100,
      annual: Math.round(annual * 100) / 100,
    }
  }
}
