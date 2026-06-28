import { getStateBrackets, type StateBracketDef } from "@/lib/content/state-tax-brackets"

interface StateTaxResult {
  stateTax: number
  effectiveRate: number
  marginalRate: number
  brackets: { rate: number; from: number; to: number; tax: number }[]
}

export function computeStateTax(stateSlug: string, taxableIncome: number): StateTaxResult | null {
  const brackets = getStateBrackets(stateSlug)
  if (!brackets) return null

  let totalTax = 0
  let marginalRate = 0
  const bracketResults: StateTaxResult["brackets"] = []

  for (const b of brackets) {
    if (taxableIncome > b.min) {
      const taxableInBracket = Math.min(taxableIncome, b.max) - b.min
      const taxInBracket = taxableInBracket * b.rate / 100
      totalTax += taxInBracket
      marginalRate = b.rate
      bracketResults.push({
        rate: b.rate,
        from: b.min,
        to: Math.min(taxableIncome, b.max),
        tax: Math.round(taxInBracket * 100) / 100,
      })
    }
  }

  const effectiveRate = taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0

  return {
    stateTax: Math.round(totalTax * 100) / 100,
    effectiveRate: Math.round(effectiveRate * 100) / 100,
    marginalRate,
    brackets: bracketResults,
  }
}
