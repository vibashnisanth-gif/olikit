import { Calculator, BondYieldInput, BondYieldOutput } from '../types'

export class BondYieldCalculator implements Calculator<BondYieldInput, BondYieldOutput> {
  name = 'Bond Yield Calculator'
  description = 'Calculates current yield, yield to maturity, and capital gain for bonds'
  category = 'investment' as const

  calculate(input: BondYieldInput): BondYieldOutput {
    const { faceValue, currentPrice, couponRate, yearsToMaturity, paymentsPerYear } = input
    const annualCouponPayment = faceValue * couponRate / 100
    const currentYield = currentPrice > 0 ? (annualCouponPayment / currentPrice) * 100 : 0
    const capitalGainAtMaturity = faceValue - currentPrice

    const couponPerPeriod = annualCouponPayment / paymentsPerYear
    const totalPeriods = yearsToMaturity * paymentsPerYear
    const periodRate = 0.05 / paymentsPerYear

    let ytm = 0.05
    for (let iter = 0; iter < 1000; iter++) {
      let bondPrice = 0
      let dBondPrice = 0
      for (let i = 1; i <= totalPeriods; i++) {
        bondPrice += couponPerPeriod / Math.pow(1 + ytm / paymentsPerYear, i)
        dBondPrice -= (i / paymentsPerYear) * couponPerPeriod / Math.pow(1 + ytm / paymentsPerYear, i + 1)
      }
      bondPrice += faceValue / Math.pow(1 + ytm / paymentsPerYear, totalPeriods)
      dBondPrice -= (totalPeriods / paymentsPerYear) * faceValue / Math.pow(1 + ytm / paymentsPerYear, totalPeriods + 1)

      const diff = bondPrice - currentPrice
      if (Math.abs(diff) < 1e-7) break
      if (dBondPrice === 0) break
      ytm = ytm - diff / dBondPrice
    }

    const yieldToMaturity = ytm * 100

    return {
      currentYield: Math.round(currentYield * 100) / 100,
      yieldToMaturity: Math.round(yieldToMaturity * 100) / 100,
      annualCouponPayment: Math.round(annualCouponPayment * 100) / 100,
      capitalGainAtMaturity: Math.round(capitalGainAtMaturity * 100) / 100,
    }
  }
}
