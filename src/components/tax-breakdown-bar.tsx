"use client"

import { useMemo } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"

type Result = {
  slug: string
  name: string
  grossUSD: number
  taxUSD: number
  takeHomeUSD: number
  effectiveTaxRate: number
}

export function TaxBreakdownBar({ salary = 100000 }: { salary?: number }) {
  const countries = useMemo(() => getAllCountries(), [])
  const taxCalc = useMemo(() => new TaxCalculator(), [])

  const results: Result[] = useMemo(() => {
    return countries
      .map((c) => {
        const localCurr = slugToCurrency(c.slug)
        const grossLocal = convertSalary(salary, "USD", localCurr)
        const taxResult = taxCalc.calculate({
          annualIncome: grossLocal,
          deductions: 0,
          filingStatus: "single",
          locale: c.slug,
        } as never)
        const taxLocal = taxResult.totalTax
        const takeHomeLocal = grossLocal - taxLocal
        return {
          slug: c.slug,
          name: c.name,
          grossUSD: salary,
          taxUSD: convertSalary(Math.round(taxLocal), localCurr, "USD"),
          takeHomeUSD: convertSalary(Math.round(takeHomeLocal), localCurr, "USD"),
          effectiveTaxRate: taxResult.effectiveTaxRate,
        }
      })
      .sort((a, b) => b.takeHomeUSD - a.takeHomeUSD)
  }, [salary, countries, taxCalc])

  const maxGross = salary || 1

  return (
    <div className="space-y-3">
      {results.map((r) => {
        const taxPct = (r.taxUSD / maxGross) * 100
        const takeHomePct = (r.takeHomeUSD / maxGross) * 100
        return (
          <div key={r.slug} className="group rounded-lg border border-zinc-100 bg-white p-3 transition-colors hover:border-zinc-200 sm:p-4">
            <div className="mb-2 flex items-center gap-2">
              <FlagImage code={r.slug} size="sm" />
              <span className="text-sm font-medium text-zinc-800">{r.name}</span>
              <span className="ml-auto text-xs font-semibold tabular-nums text-zinc-500">
                {r.effectiveTaxRate.toFixed(1)}% tax
              </span>
            </div>
            <div className="relative h-5 w-full overflow-hidden rounded-md bg-zinc-100" role="img" aria-label={`${r.name}: $${r.takeHomeUSD.toLocaleString()} take-home, $${r.taxUSD.toLocaleString()} tax`}>
              <div
                className="absolute inset-y-0 left-0 bg-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${takeHomePct}%` }}
              />
              <div
                className="absolute inset-y-0 bg-amber-400/70 transition-all duration-500 ease-out"
                style={{ left: `${takeHomePct}%`, width: `${taxPct}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[11px] tabular-nums">
              <span className="font-semibold text-blue-600">${r.takeHomeUSD.toLocaleString()} take-home</span>
              <span className="text-amber-600">${r.taxUSD.toLocaleString()} tax</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
