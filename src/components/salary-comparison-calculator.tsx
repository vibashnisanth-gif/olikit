"use client"

import { useState, useMemo } from "react"
import { professions } from "@/lib/content/professions-data"
import { getAllCountries } from "@/lib/content/country-registry"
import { formatSalaryBySlug, slugToCurrency, convertSalary, formatSalary } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"

const COL_INDICES: Record<string, number> = {
  us: 100,
  uk: 100,
  au: 100,
  ca: 100,
  nz: 100,
  sg: 120,
  in: 100,
}

export function SalaryComparisonCalculator() {
  const [selectedProfession, setSelectedProfession] = useState("software-engineer")
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single")
  const [showPPP, setShowPPP] = useState(true)
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
          filingStatus,
          deductions: 0,
          taxYear: 2026,
          locale: c.slug,
        } as never)

        const takeHome = avg - taxResult.totalTax
        const takeHomeUsd = convertSalary(Math.round(takeHome), curr, "USD")

        const colIndex = COL_INDICES[c.slug]
        const pppAdjusted = Math.round((takeHomeUsd / colIndex) * 100)

        return {
          slug: c.slug,
          name: c.name,
          flag: c.flag,
          grossLocal: avg,
          grossLocalFormatted: formatSalaryBySlug(avg, c.slug),
          grossUsd: usdValue,
          grossUsdFormatted: formatSalary(usdValue, "USD"),
          effectiveRate: taxResult.effectiveTaxRate,
          totalTax: taxResult.totalTax,
          takeHomeUsd,
          takeHomeUsdFormatted: formatSalary(takeHomeUsd, "USD"),
          pppAdjusted,
          pppAdjustedFormatted: formatSalary(pppAdjusted, "USD"),
        }
      })
      .sort((a, b) => b.grossUsd - a.grossUsd)
  }, [selectedProfession, filingStatus, countries, taxCalc])

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
      <h2 className="text-lg font-semibold text-zinc-950 sm:text-xl">Salary Comparison Calculator</h2>
      <p className="mt-1 text-sm leading-6 text-zinc-500">
        Compare gross salary, take-home pay, and purchasing power across countries. Select a profession and filing status to see detailed breakdowns.
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="profession-select" className="block text-xs font-medium text-zinc-500 mb-1">
            Profession
          </label>
          <select
            id="profession-select"
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
            className="block rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {professions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filing-select" className="block text-xs font-medium text-zinc-500 mb-1">
            Filing Status
          </label>
          <select
            id="filing-select"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as "single" | "married")}
            className="block rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="single">Single</option>
            <option value="married">Married (US)</option>
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm text-zinc-600 cursor-pointer pb-2">
          <input
            type="checkbox"
            checked={showPPP}
            onChange={(e) => setShowPPP(e.target.checked)}
            className="rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
          />
          Show PPP-adjusted
        </label>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200">
              <th scope="col" className="text-left py-3 pr-4 font-semibold text-zinc-950">Country</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Gross (Local)</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Gross (USD)</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Effective Tax</th>
              <th scope="col" className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">Take-Home (USD)</th>
              {showPPP && (
                <th scope="col" className="text-right pl-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">PPP (USD)</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {rows.map((r) => (
              <tr key={r.slug} className="hover:bg-zinc-50 transition-colors">
                <td className="py-3 pr-4 whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <span className="text-lg"><FlagImage code={r.slug} size="lg" /></span>
                    <span className="font-medium text-zinc-900">{r.name}</span>
                  </span>
                </td>
                <td className="px-3 py-3 text-right text-zinc-600 tabular-nums">{r.grossLocalFormatted}</td>
                <td className="px-3 py-3 text-right text-zinc-700 tabular-nums font-medium">{r.grossUsdFormatted}</td>
                <td className="px-3 py-3 text-right tabular-nums">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      r.effectiveRate > 25
                        ? "bg-red-50 text-red-700 ring-1 ring-red-200"
                        : r.effectiveRate > 10
                          ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                          : "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                    }`}
                  >
                    {r.effectiveRate.toFixed(1)}%
                  </span>
                </td>
                <td className="px-3 py-3 text-right text-zinc-700 tabular-nums font-medium">{r.takeHomeUsdFormatted}</td>
                {showPPP && (
                  <td className="pl-3 py-3 text-right text-zinc-600 tabular-nums">{r.pppAdjustedFormatted}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <details className="mt-4 group">
        <summary className="text-xs text-zinc-500 cursor-pointer hover:text-zinc-700 transition-colors">
          How are these calculated?
        </summary>
        <div className="mt-2 space-y-2 text-xs text-zinc-500 leading-relaxed">
          <p><strong>Gross (Local):</strong> Average annual salary in the country&apos;s native currency based on government labor statistics.</p>
          <p><strong>Gross (USD):</strong> Converted using mid-market exchange rates.</p>
          <p><strong>Effective Tax:</strong> Estimated using progressive tax brackets for each country (single filer, no deductions). Includes national income tax only — does not account for state/provincial taxes, social security contributions, or credits.</p>
          <p><strong>Take-Home (USD):</strong> Gross salary minus estimated income tax, converted to USD.</p>
          <p><strong>PPP (USD):</strong> Purchasing Power Parity — take-home pay adjusted for cost of living differences. A value of $100 = US national average buying power.</p>
        </div>
      </details>
    </section>
  )
}
