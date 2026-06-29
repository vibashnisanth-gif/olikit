import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getAllCountries, toUSD } from "@/lib/content/country-registry"
import { professions } from "@/lib/content/professions-data"
import { getLocale } from "@/lib/seo/locales"
import { FlagImage } from "@/components/ui/flag-image"

function getCurrencyCode(slug: string): string {
  return getLocale(slug)?.currency.code ?? "USD"
}

function toUSDForCountry(amount: number, slug: string): number {
  return toUSD(amount, getCurrencyCode(slug))
}

export const metadata: Metadata = {
  title: "Global Rankings — Salaries, Taxes & Financial Data",
  description: "Explore data-driven rankings of salaries, tax rates, and financial metrics across major economies. See highest-paying countries, lowest tax burdens, and most affordable destinations.",
  alternates: { canonical: `${SITE_URL}/rankings` },
  openGraph: {
    title: "Global Rankings — Salaries, Taxes & Financial Data",
    description: "Data-driven rankings of salaries, tax rates, and financial metrics across major economies. Highest-paying, lowest tax, most affordable.",
    url: `${SITE_URL}/rankings`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Rankings — Salaries, Taxes & Financial Data",
    description: "Data-driven rankings of salaries, tax rates, and financial metrics across major economies. Highest-paying, lowest tax, most affordable.",
  },
}

function getRank(p: number): string {
  if (p === 1) return "🥇"
  if (p === 2) return "🥈"
  if (p === 3) return "🥉"
  return `#${p}`
}

export default function RankingsPage() {
  const countries = getAllCountries()

  const countryAvgSalaries: { slug: string; name: string; flag: string; avg: number }[] = []
  for (const c of countries) {
    const salaries = professions
      .map((p) => p.salaries[c.slug]?.average)
      .filter((s): s is number => typeof s === "number")
      .map((s) => toUSDForCountry(s, c.slug))
    const avg = Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length)
    countryAvgSalaries.push({ slug: c.slug, name: c.name, flag: c.flag, avg })
  }
  const bySalary = [...countryAvgSalaries].sort((a, b) => b.avg - a.avg)
  const topSalary = bySalary.slice(0, 3)

  const topSoftwareSalaries = countries
    .map((c) => {
      const s = professions.find((p) => p.id === "software-engineer")
      const rawSalary = s?.salaries[c.slug]?.average ?? 0
      return { slug: c.slug, name: c.name, flag: c.flag, salary: toUSDForCountry(rawSalary, c.slug) }
    })
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 5)

  const topDoctorSalaries = countries
    .map((c) => {
      const s = professions.find((p) => p.id === "doctor")
      const rawSalary = s?.salaries[c.slug]?.average ?? 0
      return { slug: c.slug, name: c.name, flag: c.flag, salary: toUSDForCountry(rawSalary, c.slug) }
    })
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 5)

  return (
      <div className="space-y-8">
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Global Rankings</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          Data-driven rankings of salaries, tax rates, and financial metrics across major economies. See where each country stands.
        </p>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            How to Interpret
          </span>
          <p className="text-sm leading-6 text-amber-900">
            Rankings are based on average annual salaries across tracked professions, converted to USD using market exchange rates. Figures represent central tendencies from government labor statistics and industry surveys; individual compensation varies by experience, employer, and location. Use rankings as a starting point for comparison, not as definitive pay scales. See <a href="/methodology" className="font-semibold text-amber-800 underline hover:text-amber-700">methodology</a> for details.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Highest Average Salaries by Country</h2>
        <p className="mb-4 text-sm leading-6 text-zinc-500">Countries ranked by average annual salary across all tracked professions (converted to USD).</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {bySalary.map((c, i) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg">{getRank(i + 1)}</span>
                <FlagImage code={c.slug} size="lg" />
                <h3 className="font-semibold text-zinc-950">{c.name}</h3>
              </div>
              <p className="text-2xl font-bold tracking-tight text-zinc-950">
                ${(c.avg / 1000).toFixed(0)}k
              </p>
              <p className="text-xs text-zinc-600 mt-1">Average annual salary</p>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Highest-Paying Countries by Profession</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Software Engineer Salaries</h3>
            <div className="divide-y divide-zinc-100">
              {topSoftwareSalaries.map((c, i) => (
                <div key={c.slug} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-zinc-500 w-4">{getRank(i + 1)}</span>
                    <FlagImage code={c.slug} size="md" />
                    <a href={`/${c.slug}/salary/software-engineer`} className="text-sm font-medium text-zinc-950 hover:text-blue-700 transition-colors">
                      {c.name}
                    </a>
                  </div>
                  <span className="text-sm font-semibold text-zinc-950 tabular-nums">
                    ${(c.salary / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Doctor Salaries</h3>
            <div className="divide-y divide-zinc-100">
              {topDoctorSalaries.map((c, i) => (
                <div key={c.slug} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-zinc-500 w-4">{getRank(i + 1)}</span>
                    <FlagImage code={c.slug} size="md" />
                    <a href={`/${c.slug}/salary/doctor`} className="text-sm font-medium text-zinc-950 hover:text-blue-700 transition-colors">
                      {c.name}
                    </a>
                  </div>
                  <span className="text-sm font-semibold text-zinc-950 tabular-nums">
                    ${(c.salary / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Software Engineer Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="/rankings/highest-paying-countries-software-engineers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Countries</h3>
            <p className="text-xs leading-5 text-zinc-500">Countries ranked by average software engineer salary with purchasing power analysis.</p>
          </a>
          <a href="/rankings/highest-paying-cities-software-engineers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Cities</h3>
            <p className="text-xs leading-5 text-zinc-500">Global cities ranked by software engineer compensation with cost of living context.</p>
          </a>
          <a href="/rankings/best-countries-for-software-engineers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Best Countries Overall</h3>
            <p className="text-xs leading-5 text-zinc-500">Multi-factor evaluation of the best countries for software engineers.</p>
          </a>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Data Scientist Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="/rankings/highest-paying-countries-data-scientists" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Countries</h3>
            <p className="text-xs leading-5 text-zinc-500">Countries ranked by average data scientist salary with purchasing power analysis.</p>
          </a>
          <a href="/rankings/highest-paying-cities-data-scientists" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Cities</h3>
            <p className="text-xs leading-5 text-zinc-500">Global cities ranked by data scientist compensation with cost of living context.</p>
          </a>
          <a href="/rankings/best-countries-for-data-scientists" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Best Countries Overall</h3>
            <p className="text-xs leading-5 text-zinc-500">Multi-factor evaluation of the best countries for data scientists.</p>
          </a>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200000 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Product Manager Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="/rankings/highest-paying-countries-for-product-managers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Countries</h3>
            <p className="text-xs leading-5 text-zinc-500">Countries ranked by average product manager salary with purchasing power analysis.</p>
          </a>
          <a href="/rankings/best-countries-for-product-managers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Best Countries Overall</h3>
            <p className="text-xs leading-5 text-zinc-500">Multi-factor evaluation of the best countries for product managers.</p>
          </a>
          <a href="/rankings/highest-paying-cities-product-managers" className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
            <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-blue-700 transition-colors mb-2">Highest Paying Cities</h3>
            <p className="text-xs leading-5 text-zinc-500">Global cities ranked by product manager compensation with cost of living context.</p>
          </a>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Country Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}/rankings`}
              className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <FlagImage code={c.slug} size="lg" />
                <div>
                  <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-zinc-800 transition-colors">{c.name}</h3>
                  <p className="text-xs text-zinc-500">{c.taxAuthorityAbbr} &middot; {c.currencyCode}</p>
                </div>
              </div>
              <p className="text-xs leading-5 text-zinc-500 mb-3">
                Profession rankings, salary data, and tax information for {c.name}.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 group-hover:text-zinc-950 transition-colors">
                View {c.name} rankings →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}