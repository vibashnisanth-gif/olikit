import { Calculator, CreditCardPayoffInput, CreditCardPayoffOutput } from '../types'

export class CreditCardPayoffCalculator implements Calculator<CreditCardPayoffInput, CreditCardPayoffOutput> {
  name = 'Credit Card Payoff Calculator'
  description = 'Calculates how long it takes to pay off credit card debt'
  category = 'personal-finance' as const

  calculate(input: CreditCardPayoffInput): CreditCardPayoffOutput {
    const { balance, apr, monthlyPayment } = input
    const monthlyRate = apr / 100 / 12

    if (monthlyRate > 0 && monthlyPayment <= balance * monthlyRate) {
      return {
        monthsToPayoff: Infinity,
        totalInterest: Infinity,
        totalPayment: Infinity,
        payoffDate: 'Never',
        schedule: [],
      }
    }

    let currentBalance = balance
    let totalInterest = 0
    let totalPayment = 0
    let months = 0
    const schedule: { month: number; payment: number; interest: number; principal: number; balance: number }[] = []

    while (currentBalance > 0.01 && months < 1200) {
      months++
      const interest = currentBalance * monthlyRate
      const payment = Math.min(monthlyPayment, currentBalance + interest)
      const principal = payment - interest
      currentBalance = Math.max(0, currentBalance - principal)
      totalInterest += interest
      totalPayment += payment

      schedule.push({
        month: months,
        payment: Math.round(payment * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        principal: Math.round(principal * 100) / 100,
        balance: Math.round(currentBalance * 100) / 100,
      })
    }

    const payoffDate = new Date()
    payoffDate.setMonth(payoffDate.getMonth() + months)

    return {
      monthsToPayoff: months,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      payoffDate: payoffDate.toISOString().split('T')[0],
      schedule,
    }
  }
}
