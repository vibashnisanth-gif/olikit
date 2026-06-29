"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { convertSalary, slugToCurrency } from "@/lib/currency"
import { TaxCalculator } from "@/calculators/tax"
import { FlagImage } from "@/components/ui/flag-image"

type CountryCard = {
  slug: string
  name: string
  currencySymbol: string
  takeHomeUSD: number
  effectiveTaxRate: number
  topRegion: string
}

const COUNTRY_META: Record<string, { topRegion: string; highlights: string }> = {
  us: { topRegion: "California", highlights: "Highest salaries, state tax varies" },
  uk: { topRegion: "London", highlights: "Strong public services, NHS" },
  au: { topRegion: "Sydney", highlights: "High quality of life, mandatory super" },
  ca: { topRegion: "Toronto", highlights: "Universal healthcare, diverse economy" },
  nz: { topRegion: "Auckland", highlights: "Work-life balance, low corruption" },
  in: { topRegion: "Bangalore", highlights: "Fast-growing tech hub, low cost of living" },
  sg: { topRegion: "Marina Bay", highlights: "No capital gains tax, global finance hub" },
}

export function CountryCards() {
  const countries = useMemo(() => getAllCountries(), [])
  const taxCalc = useMemo(() => new TaxCalculator(), [])
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cards: CountryCard[] = useMemo(() => {
    return countries.map((c) => {
      const localCurr = slugToCurrency(c.slug)
      const grossLocal = convertSalary(100000, "USD", localCurr)
      const taxResult = taxCalc.calculate({
        annualIncome: grossLocal,
        deductions: 0,
        filingStatus: "single",
        locale: c.slug,
      } as never)
      const takeHomeLocal = grossLocal - taxResult.totalTax
      const takeHomeUSD = convertSalary(Math.round(takeHomeLocal), localCurr, "USD")
      const meta = COUNTRY_META[c.slug] || { topRegion: "", highlights: "" }
      return {
        slug: c.slug,
        name: c.name,
        currencySymbol: c.currencySymbol,
        takeHomeUSD,
        effectiveTaxRate: taxResult.effectiveTaxRate,
        topRegion: meta.topRegion,
      }
    }).sort((a, b) => b.takeHomeUSD - a.takeHomeUSD)
  }, [countries, taxCalc])

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((c, i) => {
        const meta = COUNTRY_META[c.slug] || { topRegion: "", highlights: "" }
        const barPct = c.takeHomeUSD / 100000 * 100
        return (
          <a
            key={c.slug}
            href={`/${c.slug}`}
            className="card-hover group flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-350 ease-out"
            style={visible ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(8px)", transitionDelay: `${i * 60}ms` }}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <FlagImage code={c.slug} size="md" />
              <div>
                <h3 className="text-sm font-semibold text-zinc-950 group-hover:text-blue-700 transition-colors">{c.name}</h3>
                <p className="text-[11px] text-zinc-400">{meta.topRegion}</p>
              </div>
            </div>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-xl font-bold tabular-nums text-zinc-950">${c.takeHomeUSD.toLocaleString()}</span>
              <span className="text-xs text-zinc-400">take-home</span>
            </div>
            <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
              <div className="h-full rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${barPct}%` }} />
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-500">{c.effectiveTaxRate.toFixed(1)}% tax</span>
              <span className="text-zinc-400">{c.currencySymbol}</span>
            </div>
            <p className="mt-2 text-[11px] leading-4 text-zinc-400">{meta.highlights}</p>
            <span className="mt-auto pt-3 text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
              Explore &rarr;
            </span>
          </a>
        )
      })}
    </div>
  )
}
