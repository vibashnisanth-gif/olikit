"use client"

import { useState, useMemo } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"

export function QuickCompare() {
  const countries = useMemo(() => getAllCountries(), [])
  const taxCalc = useMemo(() => new TaxCalculator(), [])
  const [left, setLeft] = useState("us")
  const [right, setRight] = useState("sg")
  const [salary, setSalary] = useState(100000)

  const results = useMemo(() => {
    return [left, right].map((slug) => {
      const c = countries.find((co) => co.slug === slug)!
      const localCurr = slugToCurrency(slug)
      const grossLocal = convertSalary(salary, "USD", localCurr)
      const taxResult = taxCalc.calculate({
        annualIncome: grossLocal,
        deductions: 0,
        filingStatus: "single",
        locale: slug,
      } as never)
      const takeHomeLocal = grossLocal - taxResult.totalTax
      const takeHomeUSD = convertSalary(Math.round(takeHomeLocal), localCurr, "USD")
      const taxUSD = convertSalary(Math.round(taxResult.totalTax), localCurr, "USD")
      return {
        slug: c.slug,
        name: c.name,
        grossUSD: salary,
        taxUSD,
        takeHomeUSD,
        effectiveTaxRate: taxResult.effectiveTaxRate,
      }
    })
  }, [left, right, salary, countries, taxCalc])

  const [a, b] = results
  const maxTakeHome = Math.max(a?.takeHomeUSD || 1, b?.takeHomeUSD || 1)
  const diff = (a?.takeHomeUSD || 0) - (b?.takeHomeUSD || 0)
  const winner = diff > 0 ? a : diff < 0 ? b : null

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-zinc-500">Country A</label>
          <select
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-400"
          >
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 pb-0.5">
          <span className="text-lg font-bold text-zinc-300">vs</span>
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-zinc-500">Country B</label>
          <select
            value={right}
            onChange={(e) => setRight(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-400"
          >
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-36">
          <label className="mb-1 block text-xs font-medium text-zinc-500">Salary (USD)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 outline-none focus:border-blue-400"
            min={0}
            step={1000}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {results.map((r) => {
          if (!r) return null
          const barPct = maxTakeHome > 0 ? (r.takeHomeUSD / maxTakeHome) * 100 : 0
          const isWinner = winner?.slug === r.slug
          return (
            <div
              key={r.slug}
              className={`rounded-lg border p-4 transition-colors ${
                isWinner
                  ? "border-blue-200 bg-blue-50/50"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <FlagImage code={r.slug} size="sm" />
                <span className="text-sm font-semibold text-zinc-900">{r.name}</span>
                {isWinner && (
                  <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                    +${Math.abs(diff).toLocaleString()} more
                  </span>
                )}
              </div>
              <div className="mb-2 text-2xl font-bold tabular-nums text-zinc-950">
                {formatSalary(r.takeHomeUSD, "USD")}
              </div>
              <p className="mb-2 text-xs text-zinc-500">take-home pay</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${barPct}%` }} />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] tabular-nums">
                <span className="text-zinc-500">{r.effectiveTaxRate.toFixed(1)}% tax</span>
                <span className="text-amber-600">{formatSalary(r.taxUSD, "USD")} tax</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-center">
        <a
          href="/compare"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Full Comparison Tool &rarr;
        </a>
      </div>
    </div>
  )
}
