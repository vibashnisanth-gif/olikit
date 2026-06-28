"use client"

import { useState, useMemo } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"
import type { CurrencyCode } from "@/lib/currency"

const CURRENCIES: { code: CurrencyCode; symbol: string; label: string }[] = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "GBP", symbol: "£", label: "GBP" },
  { code: "AUD", symbol: "A$", label: "AUD" },
  { code: "CAD", symbol: "C$", label: "CAD" },
  { code: "NZD", symbol: "NZ$", label: "NZD" },
  { code: "INR", symbol: "₹", label: "INR" },
  { code: "SGD", symbol: "S$", label: "SGD" },
]

type Result = {
  slug: string
  name: string
  takeHomeUSD: number
}

export function SalaryRankingChart() {
  const [salary, setSalary] = useState(100000)
  const [currency, setCurrency] = useState<CurrencyCode>("USD")
  const countries = useMemo(() => getAllCountries(), [])
  const taxCalc = useMemo(() => new TaxCalculator(), [])

  const results: Result[] = useMemo(() => {
    // Step 1: Convert input salary to USD as the baseline
    const grossUSD = convertSalary(salary, currency, "USD")

    return countries
      .map((c) => {
        const localCurr = slugToCurrency(c.slug)
        // Step 2: Convert USD baseline to each country's local currency
        const grossLocal = convertSalary(grossUSD, "USD", localCurr)

        // Step 3: Compute tax in local currency
        const taxResult = taxCalc.calculate({
          annualIncome: grossLocal,
          deductions: 0,
          filingStatus: "single",
          locale: c.slug,
        } as never)

        const takeHomeLocal = grossLocal - taxResult.totalTax
        // Step 4: Convert take-home back to USD for comparison
        const takeHomeUSD = convertSalary(Math.round(takeHomeLocal), localCurr, "USD")

        return {
          slug: c.slug,
          name: c.name,
          takeHomeUSD,
        }
      })
      .sort((a, b) => b.takeHomeUSD - a.takeHomeUSD)
  }, [salary, currency, countries, taxCalc])

  const maxTakeHome = results[0]?.takeHomeUSD || 1

  const shareText = `Where does ${formatSalary(salary, currency)} go furthest?\n\n${results.map((r, i) => `${i + 1}. ${r.name}: ${formatSalary(r.takeHomeUSD, "USD")} after tax`).join("\n")}\n\nCompare at olikit.com`
  const shareUrl = "https://olikit.com/compare"

  const selectedSymbol = CURRENCIES.find((c) => c.code === currency)?.symbol || "$"

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
      <div className="mb-6">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
          SALARY RANKING
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Same Salary. Wildly Different Outcomes.
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          See how much you actually keep after tax in each country.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor="salary-input" className="mb-1 block text-xs font-medium text-zinc-500">
            Annual gross salary
          </label>
          <div className="flex items-center">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="rounded-l-lg border border-r-0 border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm font-medium text-zinc-700 outline-none focus:border-zinc-500"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.symbol} {c.label}</option>
              ))}
            </select>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400">{selectedSymbol}</span>
              <input
                id="salary-input"
                type="number"
                value={salary}
                onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
                className="w-36 rounded-r-lg border border-zinc-300 pl-7 pr-3 py-2.5 text-sm font-medium text-zinc-950 outline-none focus:border-zinc-500 sm:w-44"
                min={0}
                step={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-zinc-500">
        {formatSalary(salary, currency)} USD. Approximate annual take-home, ranked.
      </p>

      <div className="divide-y divide-zinc-200">
        {results.map((r, i) => {
          const pct = maxTakeHome > 0 ? (r.takeHomeUSD / maxTakeHome) * 100 : 0
          return (
            <div key={r.slug} className="flex items-center gap-4 py-2.5">
              <FlagImage code={r.slug} size="sm" />
              <span className="min-w-0 flex-1 text-sm">{r.name}</span>
              <div className="h-1 w-24 shrink-0 overflow-hidden rounded-full bg-zinc-200" aria-hidden="true">
                <div
                  className="h-full bg-zinc-900 transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-20 shrink-0 text-right text-sm font-semibold tabular-nums">
                {formatSalary(r.takeHomeUSD, "USD")}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs text-zinc-400">Share this comparison:</span>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 transition-colors"
        >
          Twitter / X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 transition-colors"
        >
          WhatsApp
        </a>
        <button
          onClick={() => navigator.clipboard?.writeText(shareText + "\n" + shareUrl)}
          className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 transition-colors"
        >
          Copy
        </button>
      </div>

      <p className="mt-4 text-[11px] text-zinc-400">
        2025-2026 statutory tax brackets, single filer. Estimates only — consult a tax professional for binding advice.
      </p>
    </section>
  )
}
