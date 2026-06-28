"use client"

import { useState, useMemo } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"
import type { CurrencyCode } from "@/lib/currency"

const CURRENCIES: { code: CurrencyCode; label: string }[] = [
  { code: "USD", label: "USD" },
  { code: "GBP", label: "GBP" },
  { code: "AUD", label: "AUD" },
  { code: "CAD", label: "CAD" },
  { code: "NZD", label: "NZD" },
  { code: "INR", label: "INR" },
  { code: "SGD", label: "SGD" },
]

function formatCompact(usd: number): string {
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(1)}M`
  if (usd >= 1_000) return `$${(usd / 1_000).toFixed(0)}k`
  return `$${usd.toFixed(0)}`
}

type Result = {
  slug: string
  name: string
  takeHomeUSD: number
  effectiveTaxRate: number
}

export function SalaryRankingChart() {
  const [salary, setSalary] = useState(100000)
  const [currency, setCurrency] = useState<CurrencyCode>("USD")
  const countries = useMemo(() => getAllCountries(), [])
  const taxCalc = useMemo(() => new TaxCalculator(), [])

  const results: Result[] = useMemo(() => {
    return countries
      .map((c) => {
        const localCurr = slugToCurrency(c.slug)
        const grossLocal = convertSalary(salary, currency, localCurr)

        const taxResult = taxCalc.calculate({
          annualIncome: grossLocal,
          deductions: 0,
          filingStatus: "single",
          locale: c.slug,
        } as never)

        const takeHomeLocal = grossLocal - taxResult.totalTax
        const takeHomeUSD = convertSalary(Math.round(takeHomeLocal), localCurr, "USD")

        return {
          slug: c.slug,
          name: c.name,
          takeHomeUSD,
          effectiveTaxRate: taxResult.effectiveTaxRate,
        }
      })
      .sort((a, b) => b.takeHomeUSD - a.takeHomeUSD)
  }, [salary, currency, countries, taxCalc])

  const maxTakeHome = results[0]?.takeHomeUSD || 1

  const shareText = `Where does ${formatSalary(salary, currency)} go furthest?\n\n${results.map((r, i) => `${i + 1}. ${r.name}: ${formatSalary(r.takeHomeUSD, "USD")} after tax`).join("\n")}\n\nCompare at olikit.com`
  const shareUrl = "https://olikit.com/compare"

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
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <input
              id="salary-input"
              type="number"
              value={salary}
              onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
              className="w-36 rounded-r-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-950 outline-none focus:border-zinc-500 sm:w-44"
              min={0}
              step={1000}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {results.map((r, i) => {
          const pct = maxTakeHome > 0 ? (r.takeHomeUSD / maxTakeHome) * 100 : 0
          return (
            <div key={r.slug}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 text-right text-xs font-semibold text-zinc-400">{i + 1}</span>
                  <FlagImage code={r.slug} size="sm" />
                  <span className="font-medium text-zinc-900">{r.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-zinc-400">tax {r.effectiveTaxRate.toFixed(1)}%</span>
                  <span className="font-semibold text-zinc-950">
                    {formatSalary(r.takeHomeUSD, "USD")}
                  </span>
                </div>
              </div>
              <div className="relative h-8 overflow-hidden rounded-lg bg-zinc-100">
                <div
                  className="absolute inset-y-0 left-0 rounded-lg transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: i === 0 ? "#10b981" : i === results.length - 1 ? "#ef4444" : "#6366f1",
                  }}
                />
                <div className="absolute inset-0 flex items-center pl-3">
                  <span className="text-xs font-semibold text-white drop-shadow">
                    {formatCompact(r.takeHomeUSD)} after tax
                  </span>
                </div>
              </div>
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
