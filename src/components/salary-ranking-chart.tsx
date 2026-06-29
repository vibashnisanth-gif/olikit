"use client"

import { useState, useMemo } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"

type Result = {
  slug: string
  name: string
  takeHomeUSD: number
  effectiveTaxRate: number
}

const RANK_STYLES = [
  "bg-blue-50 text-blue-700 ring-blue-200",
  "bg-blue-50 text-blue-700 ring-blue-200",
  "bg-amber-50 text-amber-700 ring-amber-200",
]

export function SalaryRankingChart() {
  const [salary, setSalary] = useState(100000)
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
        const takeHomeLocal = grossLocal - taxResult.totalTax
        const takeHomeUSD = convertSalary(Math.round(takeHomeLocal), localCurr, "USD")
        return { slug: c.slug, name: c.name, takeHomeUSD, effectiveTaxRate: taxResult.effectiveTaxRate }
      })
      .sort((a, b) => b.takeHomeUSD - a.takeHomeUSD)
  }, [salary, countries, taxCalc])

  const maxTakeHome = results[0]?.takeHomeUSD || 1

  const shareText = `Where does $${salary.toLocaleString()} USD go furthest?\n\n${results.map((r, i) => `${i + 1}. ${r.name}: ${formatSalary(r.takeHomeUSD, "USD")} after tax`).join("\n")}\n\nCompare at olikit.com`
  const shareUrl = "https://olikit.com/compare"

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
      <div className="mb-6">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          SALARY RANKING
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Same Salary. Wildly Different Outcomes.
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Enter your annual salary in USD and see how much you would keep after income tax in each country.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <label htmlFor="salary-input" className="text-sm text-zinc-500">$</label>
        <input
          id="salary-input"
          type="number"
          value={salary}
          onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
          className="w-32 rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-950 outline-none focus:border-zinc-500 sm:w-40"
          min={0}
          step={1000}
        />
        <span className="text-sm text-zinc-400">USD per year</span>
      </div>

      <div className="divide-y divide-zinc-100">
        {results.map((r, i) => {
          const pct = maxTakeHome > 0 ? (r.takeHomeUSD / maxTakeHome) * 100 : 0
          return (
            <div key={r.slug} className="group flex items-center gap-3 py-3 transition-colors hover:bg-zinc-50 -mx-3 px-3 rounded-lg">
              <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-1 ring-inset ${i < 3 ? RANK_STYLES[i] : "bg-zinc-50 text-zinc-500 ring-zinc-200"}`}>
                {i + 1}
              </span>
              <FlagImage code={r.slug} size="sm" />
              <span className="min-w-0 flex-1 text-sm font-medium text-zinc-800">{r.name}</span>
              <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 tabular-nums">
                {r.effectiveTaxRate.toFixed(1)}% tax
              </span>
              <div className="h-1.5 w-20 shrink-0 overflow-hidden rounded-full bg-zinc-100 sm:w-24" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-20 shrink-0 text-right text-sm font-bold tabular-nums text-zinc-950">
                {formatSalary(r.takeHomeUSD, "USD")}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs text-zinc-400">Share:</span>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors"
        >
          Twitter / X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors"
        >
          WhatsApp
        </a>
        <button
          onClick={() => navigator.clipboard?.writeText(shareText + "\n" + shareUrl)}
          className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors"
        >
          Copy
        </button>
      </div>

      <div className="mt-6 rounded-lg bg-blue-50 px-4 py-3 text-xs leading-5 text-zinc-600 ring-1 ring-blue-100">
        <p>
          <strong className="font-semibold text-zinc-700">How it works:</strong> Each country applies its own income tax brackets to your salary. Singapore has no personal income tax on the first S$20,000. The US applies a standard deduction of $14,600 before tax. The UK allows £12,570 tax-free. This tool computes your estimated take-home pay using 2025-2026 statutory tax brackets for single filers.
        </p>
        <p className="mt-2">
          Compare countries: <a href="/compare" className="font-medium text-blue-600 hover:text-blue-700">Salary Comparison</a> · <a href="/rankings" className="font-medium text-blue-600 hover:text-blue-700">Salary Rankings</a> · <a href="/us/tools/tax-calculator" className="font-medium text-blue-600 hover:text-blue-700">Tax Calculator</a>
        </p>
      </div>

      <p className="mt-4 text-[11px] text-zinc-400">
        Estimates only — consult a tax professional for binding advice. Tax brackets sourced from IRS, HMRC, ATO, CRA, IRD, IRAS.
      </p>
    </section>
  )
}
