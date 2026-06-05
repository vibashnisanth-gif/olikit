import { Calculator, LoanAmortizationInput, LoanAmortizationOutput, AmortizationRow } from '../types'

export class LoanAmortizationCalculator implements Calculator<LoanAmortizationInput, LoanAmortizationOutput> {
  name = 'Loan Amortization Calculator'
  description = 'Generates a complete amortization schedule for a loan'
  category = 'loan' as const

  calculate(input: LoanAmortizationInput): LoanAmortizationOutput {
    const { loanAmount, annualRate, termYears, paymentsPerYear } = input
    const rate = annualRate / 100 / paymentsPerYear
    const n = termYears * paymentsPerYear

    let payment: number
    if (rate > 0) {
      payment = loanAmount * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
    } else {
      payment = loanAmount / n
    }

    let balance = loanAmount
    let totalInterest = 0
    const schedule: AmortizationRow[] = []

    for (let period = 1; period <= n; period++) {
      const interest = balance * rate
      const principal = payment - interest
      balance = Math.max(0, balance - principal)
      totalInterest += interest
      schedule.push({
        period,
        payment: Math.round(payment * 100) / 100,
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        balance: Math.round(balance * 100) / 100,
      })
    }

    const totalPayment = loanAmount + totalInterest
    const payoffDate = new Date()
    payoffDate.setMonth(payoffDate.getMonth() + n)

    return {
      monthlyPayment: Math.round(payment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      schedule,
      payoffDate: payoffDate.toISOString().split('T')[0],
    }
  }
}
