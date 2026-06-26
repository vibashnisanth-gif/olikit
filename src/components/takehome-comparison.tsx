"use client"

import { useState, useMemo } from "react"
import { professions } from "@/lib/content/professions-data"
import { getAllCountries } from "@/lib/content/country-registry"
import { formatSalaryBySlug, slugToCurrency, convertSalary, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"

const COL_INDICES: Record<string, number> = {
  us: 100, uk: 100, au: 100, ca: 100, nz: 100, sg: 120, in: 100,
}

interface TakeHomeComparisonProps {
  localeSlug: string
}

export function TakeHomeComparison({ localeSlug }: TakeHomeComparisonProps) {
  const [selectedProfession, setSelectedProfession] = useState("software-engineer")
  const countries = getAllCountries()
  const taxCalc = useMemo(() => new TaxCalculator(), [])

  const rows = useMemo(() => {
    const profession = professions.find((p) => p.id === selectedProfession)
    if (!profession) return []

    return countries
      .map((c) => {
        const salaryData = profession.salaries[c.slug]
        const avg = salaryData?.average ?? 0
        const curr = slugToCurrency(c.slug)

        const usdValue = convertSalary(avg, curr, "USD")

        const taxResult = taxCalc.calculate({
          annualIncome: avg,
          filingStatus: "single",
          deductions: 0,
          taxYear: 2026,
          locale: c.slug,
        } as never)

        const takeHome = Math.round(avg - taxResult.totalTax)
        const takeHomeUsd = convertSalary(takeHome, curr, "USD")
        const colIndex = COL_INDICES[c.slug]
        const pppAdjusted = Math.round((takeHomeUsd / colIndex) * 100)
        const takeHomePct = avg > 0 ? Math.round((takeHome / avg) * 100) : 0

        return {
          slug: c.slug,
          name: c.name,
          flag: c.flag,
          grossLocal: avg,
          grossLocalFormatted: formatSalaryBySlug(avg, c.slug),
          grossUsd: usdValue,
          grossUsdFormatted: formatSalary(usdValue, "USD"),
          effectiveRate: taxResult.effectiveTaxRate,
          totalTax: Math.round(taxResult.totalTax),
          totalTaxFormatted: formatSalary(Math.round(taxResult.totalTax), curr),
          takeHome,
          takeHomeFormatted: formatSalary(takeHome, curr),
          takeHomePct,
          takeHomeUsd,
          takeHomeUsdFormatted: formatSalary(takeHomeUsd, "USD"),
          pppAdjusted,
          pppAdjustedFormatted: formatSalary(pppAdjusted, "USD"),
        }
      })
      .sort((a, b) => b.takeHomeUsd - a.takeHomeUsd)
  }, [selectedProfession, countries, taxCalc])

  const currentCountry = countries.find((c) => c.slug === localeSlug)
  const currentRow = rows.find((r) => r.slug === localeSlug)

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
      <h2 className="text-lg font-semibold text-zinc-950 sm:text-xl">
        Take-Home Pay Comparison: {currentCountry?.name ?? localeSlug} vs Other Countries
      </h2>
      <p className="mt-1 text-sm leading-6 text-zinc-500">
        See how your take-home pay in {currentCountry?.name ?? localeSlug} compares to other major economies after income tax and cost-of-living adjustments.
      </p>

      <div className="mt-6 mb-6">
        <label htmlFor="profession-select" className="block text-xs font-medium text-zinc-500 mb-1">
          Profession
        </label>
        <select
          id="profession-select"
          value={selectedProfession}
          onChange={(e) => setSelectedProfession(e.target.value)}
          className="block rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          {professions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {currentRow && (
        <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4">
          <p className="text-sm font-medium text-emerald-900">
            {currentCountry?.flag} {currentCountry?.name}: {currentRow.grossLocalFormatted} gross &rarr;{" "}
            <strong>{currentRow.takeHomeFormatted} take-home</strong> ({currentRow.takeHomePct}% retention, {currentRow.effectiveRate.toFixed(1)}% effective tax)
          </p>
          <p className="mt-1 text-xs text-emerald-700">
            Take-home: {currentRow.takeHomeUsdFormatted} USD &middot; PPP-adjusted: {currentRow.pppAdjustedFormatted}
          </p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200">
              <th scope="col" className="text-left py-3 pr-4 font-semibold text-zinc-950">Country</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Gross (Local)</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Tax</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Take-Home</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Retention</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Take-Home (USD)</th>
              <th scope="col" className="text-right pl-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">PPP (USD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {rows.map((r) => {
              const isCurrent = r.slug === localeSlug
              return (
                <tr
                  key={r.slug}
                  className={`transition-colors ${
                    isCurrent ? "bg-emerald-50/60" : "hover:bg-zinc-50"
                  }`}
                >
                  <td className="py-3 pr-4 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{r.flag}</span>
                      <span className={`font-medium ${isCurrent ? "text-emerald-900" : "text-zinc-900"}`}>
                        {r.name}
                        {isCurrent && (
                          <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                            You are here
                          </span>
                        )}
                      </span>
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right text-zinc-600 tabular-nums">{r.grossLocalFormatted}</td>
                  <td className="px-3 py-3 text-right text-red-600 tabular-nums">{r.totalTaxFormatted}</td>
                  <td className="px-3 py-3 text-right text-zinc-800 tabular-nums font-medium">{r.takeHomeFormatted}</td>
                  <td className="px-3 py-3 text-right tabular-nums">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        r.effectiveRate > 25
                          ? "bg-red-50 text-red-700 ring-1 ring-red-200"
                          : r.effectiveRate > 10
                            ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                            : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                      }`}
                    >
                      {r.takeHomePct}%
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right text-zinc-700 tabular-nums font-medium">{r.takeHomeUsdFormatted}</td>
                  <td className="pl-3 py-3 text-right text-zinc-600 tabular-nums">{r.pppAdjustedFormatted}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <details className="mt-4 group">
        <summary className="text-xs text-zinc-500 cursor-pointer hover:text-zinc-700 transition-colors">
          How take-home pay is calculated
        </summary>
        <div className="mt-2 space-y-2 text-xs text-zinc-500 leading-relaxed">
          <p><strong>Gross (Local):</strong> Average annual salary for the selected profession in each country&apos;s native currency.</p>
          <p><strong>Tax:</strong> Estimated income tax using each country&apos;s progressive tax brackets (single filer, standard deduction, no credits). Does not include social security, Medicare, or state/provincial taxes.</p>
          <p><strong>Take-Home:</strong> Gross salary minus estimated income tax.</p>
          <p><strong>Retention:</strong> Percentage of gross salary retained after tax.</p>
          <p><strong>Take-Home (USD):</strong> Take-home pay converted to US dollars at mid-market rates.</p>
          <p><strong>PPP (USD):</strong> Purchasing power parity — take-home pay in USD adjusted for local cost of living. $100 = US national average buying power.</p>
        </div>
      </details>
    </section>
  )
}
