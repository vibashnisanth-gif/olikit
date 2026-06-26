import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { SITE_URL } from "@/lib/seo/constants"
import { getAllCountries, COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { professions } from "@/lib/content/professions-data"
import { Shell } from "@/components/shell"
import { formatSalaryBySlug, formatSalary, slugToCurrency, convertSalary } from "@/lib/currency"
import type { CurrencyCode } from "@/lib/currency"

const SalaryComparisonCalculator = dynamic(
  () => import("@/components/salary-comparison-calculator").then(m => m.SalaryComparisonCalculator),
  { loading: () => <div className="h-64 animate-pulse rounded-lg bg-zinc-100" /> }
)

export const metadata: Metadata = {
  title: "Global Comparisons — Compare Countries",
  description: "Compare financial metrics, tax systems, salary benchmarks, and cost-of-living across major economies. Side-by-side analysis of salaries, tax rates, and compensation data from official government sources.",
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: "Global Comparisons — Compare Countries",
    description: "Compare salaries, tax systems, and cost-of-living across major economies. Side-by-side analysis from official government sources.",
    url: `${SITE_URL}/compare`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Comparisons — Compare Countries",
    description: "Compare salaries, tax systems, and cost-of-living across major economies. Side-by-side analysis from official government sources.",
  },
}

export default function ComparePage() {
  const countries = getAllCountries()

  const topProfessions = ["software-engineer", "doctor", "teacher", "registered-nurse", "accountant"] as const
  const professionMap = Object.fromEntries(professions.map((p) => [p.id, p]))

  return (
    <Shell>
      <div className="space-y-8">
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Global Comparisons</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          Compare salaries, tax systems, and cost-of-living across major economies. Side-by-side analysis sourced from official government authorities including IRS, HMRC, ATO, CRA, IRD, and IRAS.
        </p>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            How to Interpret
          </span>
          <p className="text-sm leading-6 text-amber-900">
            Salary figures are annual averages sourced from government labor statistics and industry surveys, converted to local currency. Tax calculations use official brackets from each country's tax authority. Direct salary comparisons do not account for purchasing power, benefits, equity compensation, or non-monetary factors. See individual country pages and <a href="/methodology" className="font-semibold text-amber-800 underline hover:text-amber-700">methodology</a> for details.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Country-to-Country Comparisons</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => {
            const pairs = countries.filter((o) => o.slug !== c.slug).slice(0, 2)
            return (
              <a
                key={c.slug}
                href={`/${c.slug}/comparisons`}
                className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-800 transition-colors">{c.name}</h3>
                    <p className="text-xs text-zinc-500">{c.currencyCode} &middot; {c.taxAuthorityAbbr}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-zinc-500 mb-4">
                  Salary benchmarks, tax rates, and cost-of-living data for {c.name}. Compare with {pairs.map((p) => p.name).join(" and ")}.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 group-hover:text-zinc-950 transition-colors">
                  View {c.name} comparisons →
                </span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Salary Equivalent Comparisons</h2>
        <p className="mb-6 text-sm leading-6 text-zinc-500">
          See how a Software Engineer salary in one country converts to another. All figures based on average annual salaries.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { from: "us", to: "uk" },
            { from: "us", to: "au" },
            { from: "us", to: "ca" },
            { from: "uk", to: "au" },
            { from: "ca", to: "au" },
            { from: "sg", to: "au" },
          ].map((pair) => {
            const fromSlug = pair.from
            const toSlug = pair.to
            const fromCurr = slugToCurrency(fromSlug)
            const toCurr = slugToCurrency(toSlug)
            const se = professions.find((p) => p.id === "software-engineer")!
            const fromSalary = se.salaries[fromSlug]?.average ?? 0
            const converted = convertSalary(fromSalary, fromCurr, toCurr)
            const convertedEur = convertSalary(fromSalary, fromCurr, "EUR")
            return (
              <div
                key={`${fromSlug}-${toSlug}`}
                className="card-hover rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-1">
                    <span className="text-2xl relative z-10">{COUNTRY_FLAGS[fromSlug]}</span>
                    <span className="text-2xl">{COUNTRY_FLAGS[toSlug]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      {fromSlug === "us" ? "USA" : fromSlug === "uk" ? "UK" : fromSlug === "au" ? "Australia" : fromSlug === "ca" ? "Canada" : fromSlug === "sg" ? "Singapore" : fromSlug.toUpperCase()} → {toSlug === "us" ? "USA" : toSlug === "uk" ? "UK" : toSlug === "au" ? "Australia" : toSlug === "ca" ? "Canada" : toSlug === "sg" ? "Singapore" : toSlug.toUpperCase()}
                    </p>
                    <p className="text-xs text-zinc-500">Software Engineer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Original</span>
                    <span className="font-semibold text-zinc-950">{formatSalary(fromSalary, fromCurr, { showCode: true })}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Converted</span>
                    <span className="font-medium text-zinc-700">{formatSalary(converted, toCurr, { showCode: true })}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">EUR Equivalent</span>
                    <span className="font-medium text-zinc-700">{formatSalary(convertedEur, "EUR", { showCode: true })}</span>
                  </div>
                </div>
                <a
                  href={`/${fromSlug}/comparisons`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Full comparison →
                </a>
              </div>
            )
          })}
        </div>
      </section>

      <SalaryComparisonCalculator />

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Salary Comparison by Profession</h2>
        <p className="mb-6 text-sm leading-6 text-zinc-500">Annual average salaries across major economies for key professions (converted to USD for comparison).</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200">
                <th scope="col" className="text-left py-3 pr-4 font-semibold text-zinc-950">Profession</th>
                {countries.map((c) => (
                  <th scope="col" key={c.slug} className="text-right px-3 py-3 font-semibold text-zinc-950 whitespace-nowrap">
                    {c.flag} {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {topProfessions.map((id) => {
                const p = professionMap[id]
                if (!p) return null
                return (
                  <tr key={id} className="hover:bg-white/80 transition-colors">
                    <td className="py-3 pr-4 font-medium text-zinc-950">
                      <a href={`/us/salary/${p.slug}`} className="hover:text-emerald-700 transition-colors">{p.name}</a>
                    </td>
                    {countries.map((c) => {
                      const salaryData = p.salaries[c.slug]
                      const val = salaryData?.average
                      return (
                        <td key={c.slug} className="px-3 py-3 text-right text-zinc-600 tabular-nums">
                          {val
                            ? formatSalaryBySlug(val, c.slug, { compact: val >= 100000 })
                            : "—"}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Data sourced from government labor statistics and industry surveys. All figures are annual averages.</p>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Quick Country Facts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <div key={c.slug} className="rounded-lg border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{c.flag}</span>
                <span className="font-semibold text-sm text-zinc-950">{c.name}</span>
              </div>
              <ul className="space-y-1 text-xs text-zinc-500">
                <li>Currency: {c.currencyCode} ({c.currencySymbol})</li>
                <li>Tax Authority: {c.taxAuthorityAbbr}</li>
              </ul>
              <a href={`/${c.slug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors">
                Browse {c.name} →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
    </Shell>
  )
}
