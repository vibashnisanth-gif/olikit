import { Calculator, TaxInput, TaxOutput, TaxBracketResult } from '../types'

interface BracketDef {
  rate: number
  min: number
  max: number
}

const US_SINGLE: BracketDef[] = [
  { rate: 10, min: 0, max: 11600 },
  { rate: 12, min: 11600, max: 47150 },
  { rate: 22, min: 47150, max: 100525 },
  { rate: 24, min: 100525, max: 191950 },
  { rate: 32, min: 191950, max: 243725 },
  { rate: 35, min: 243725, max: 609350 },
  { rate: 37, min: 609350, max: Infinity },
]

const US_MARRIED: BracketDef[] = [
  { rate: 10, min: 0, max: 23200 },
  { rate: 12, min: 23200, max: 94300 },
  { rate: 22, min: 94300, max: 201050 },
  { rate: 24, min: 201050, max: 383900 },
  { rate: 32, min: 383900, max: 487450 },
  { rate: 35, min: 487450, max: 731200 },
  { rate: 37, min: 731200, max: Infinity },
]

const US_HOH: BracketDef[] = [
  { rate: 10, min: 0, max: 16550 },
  { rate: 12, min: 16550, max: 63100 },
  { rate: 22, min: 63100, max: 100500 },
  { rate: 24, min: 100500, max: 191950 },
  { rate: 32, min: 191950, max: 243700 },
  { rate: 35, min: 243700, max: 609350 },
  { rate: 37, min: 609350, max: Infinity },
]

const UK: BracketDef[] = [
  { rate: 0, min: 0, max: 12570 },
  { rate: 20, min: 12570, max: 50270 },
  { rate: 40, min: 50270, max: 125140 },
  { rate: 45, min: 125140, max: Infinity },
]

const AU: BracketDef[] = [
  { rate: 0, min: 0, max: 18200 },
  { rate: 16, min: 18200, max: 45000 },
  { rate: 30, min: 45000, max: 135000 },
  { rate: 37, min: 135000, max: 190000 },
  { rate: 45, min: 190000, max: Infinity },
]

const CA: BracketDef[] = [
  { rate: 15, min: 0, max: 55867 },
  { rate: 20.5, min: 55867, max: 111733 },
  { rate: 26, min: 111733, max: 173205 },
  { rate: 29, min: 173205, max: 246752 },
  { rate: 33, min: 246752, max: Infinity },
]

const NZ: BracketDef[] = [
  { rate: 10.5, min: 0, max: 14000 },
  { rate: 17.5, min: 14000, max: 48000 },
  { rate: 30, min: 48000, max: 70000 },
  { rate: 33, min: 70000, max: 180000 },
  { rate: 39, min: 180000, max: Infinity },
]

const IN: BracketDef[] = [
  { rate: 0, min: 0, max: 300000 },
  { rate: 5, min: 300000, max: 700000 },
  { rate: 10, min: 700000, max: 1000000 },
  { rate: 15, min: 1000000, max: 1200000 },
  { rate: 20, min: 1200000, max: 1500000 },
  { rate: 30, min: 1500000, max: Infinity },
]

const SG: BracketDef[] = [
  { rate: 0, min: 0, max: 20000 },
  { rate: 2, min: 20000, max: 30000 },
  { rate: 3.5, min: 30000, max: 40000 },
  { rate: 7, min: 40000, max: 80000 },
  { rate: 11.5, min: 80000, max: 120000 },
  { rate: 15, min: 120000, max: 160000 },
  { rate: 18, min: 160000, max: 200000 },
  { rate: 19, min: 200000, max: 240000 },
  { rate: 19.5, min: 240000, max: 320000 },
  { rate: 20, min: 320000, max: 500000 },
  { rate: 22, min: 500000, max: 1000000 },
  { rate: 23, min: 1000000, max: Infinity },
]

function getBrackets(locale: string | undefined, status: 'single' | 'married' | 'headOfHousehold'): BracketDef[] {
  const l = locale ?? 'us'
  switch (l) {
    case 'uk':
      return UK
    case 'au':
      return AU
    case 'ca':
      return CA
    case 'nz':
      return NZ
    case 'in':
      return IN
    case 'sg':
      return SG
    default:
      switch (status) {
        case 'married':
          return US_MARRIED
        case 'headOfHousehold':
          return US_HOH
        default:
          return US_SINGLE
      }
  }
}

export class TaxCalculator implements Calculator<TaxInput, TaxOutput> {
  name = 'Tax Calculator'
  description = 'Calculates income tax using progressive tax brackets'
  category = 'tax' as const

  calculate(input: TaxInput): TaxOutput {
    const { annualIncome, deductions, filingStatus, locale } = input as TaxInput & { locale?: string }
    const taxableIncome = Math.max(0, annualIncome - deductions)
    const brackets = getBrackets(locale, filingStatus)

    let totalTax = 0
    let marginalTaxRate = 0
    const bracketResults: TaxBracketResult[] = []

    for (const b of brackets) {
      if (taxableIncome > b.min) {
        const taxableInBracket = Math.min(taxableIncome, b.max) - b.min
        const taxInBracket = taxableInBracket * b.rate / 100
        totalTax += taxInBracket
        marginalTaxRate = b.rate
        bracketResults.push({
          rate: b.rate,
          from: b.min,
          to: Math.min(taxableIncome, b.max),
          taxInBracket: Math.round(taxInBracket * 100) / 100,
        })
      }
    }

    const effectiveTaxRate = annualIncome > 0 ? (totalTax / annualIncome) * 100 : 0

    return {
      grossIncome: annualIncome,
      taxableIncome: Math.round(taxableIncome * 100) / 100,
      totalTax: Math.round(totalTax * 100) / 100,
      effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
      marginalTaxRate,
      brackets: bracketResults,
    }
  }
}
