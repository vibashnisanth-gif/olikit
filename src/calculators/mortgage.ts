import { Calculator, MortgageInput, MortgageOutput, AmortizationRow } from '../types'

export class MortgageCalculator implements Calculator<MortgageInput, MortgageOutput> {
  name = 'Mortgage Calculator'
  description = 'Calculates monthly mortgage payments including taxes, insurance, and HOA'
  category = 'loan' as const

  calculate(input: MortgageInput): MortgageOutput {
    const { homePrice, downPayment, annualRate, termYears, annualPropertyTax, annualInsurance, monthlyHOA } = input
    const loanAmount = homePrice - downPayment
    const monthlyRate = annualRate / 100 / 12
    const n = termYears * 12

    let monthlyPrincipalAndInterest: number
    if (monthlyRate > 0) {
      monthlyPrincipalAndInterest = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    } else {
      monthlyPrincipalAndInterest = loanAmount / n
    }

    const monthlyPropertyTax = annualPropertyTax / 12
    const monthlyInsurance = annualInsurance / 12
    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA

    let balance = loanAmount
    let totalInterest = 0
    const schedule: AmortizationRow[] = []

    for (let period = 1; period <= n; period++) {
      const interest = balance * monthlyRate
      const principal = monthlyPrincipalAndInterest - interest
      balance = Math.max(0, balance - principal)
      totalInterest += interest
      schedule.push({
        period,
        payment: Math.round(monthlyPrincipalAndInterest * 100) / 100,
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        balance: Math.round(balance * 100) / 100,
      })
    }

    const totalPayment = loanAmount + totalInterest
    const ltv = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0

    return {
      loanAmount: Math.round(loanAmount * 100) / 100,
      monthlyPrincipalAndInterest: Math.round(monthlyPrincipalAndInterest * 100) / 100,
      monthlyPropertyTax: Math.round(monthlyPropertyTax * 100) / 100,
      monthlyInsurance: Math.round(monthlyInsurance * 100) / 100,
      monthlyHOA: Math.round(monthlyHOA * 100) / 100,
      totalMonthlyPayment: Math.round(totalMonthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      schedule,
      loanToValueRatio: Math.round(ltv * 100) / 100,
    }
  }
}
