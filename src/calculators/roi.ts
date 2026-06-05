import { Calculator, ROIInput, ROIOutput } from '../types'

export class ROICalculator implements Calculator<ROIInput, ROIOutput> {
  name = 'ROI Calculator'
  description = 'Calculates return on investment and annualized ROI'
  category = 'investment' as const

  calculate(input: ROIInput): ROIOutput {
    const { initialInvestment, finalValue, holdingPeriodYears } = input
    const roi = initialInvestment > 0 ? ((finalValue - initialInvestment) / initialInvestment) * 100 : 0
    const annualizedROI = initialInvestment > 0 && holdingPeriodYears > 0
      ? (Math.pow(finalValue / initialInvestment, 1 / holdingPeriodYears) - 1) * 100
      : 0
    const netProfit = finalValue - initialInvestment
    return {
      roi: Math.round(roi * 100) / 100,
      annualizedROI: Math.round(annualizedROI * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100,
    }
  }
}
