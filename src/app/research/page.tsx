import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getAllCountries } from "@/lib/content/country-registry"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Global Research — Tax Systems & Salary Trends",
  description: "In-depth research on tax systems, salary trends, and financial regulations across major economies. Country-by-country analysis of income tax, VAT/GST, and compensation data from official government sources.",
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    title: "Global Research — Tax Systems & Salary Trends",
    description: "In-depth research on tax systems, salary trends, and financial regulations across major economies. Analysis from official government sources.",
    url: `${SITE_URL}/research`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function ResearchPage() {
  const countries = getAllCountries()

  const reports = [
    {
      title: "Software Engineer Salary Index 2026",
      description: "Flagship research report analyzing software engineer salaries across 7 major economies. Includes salary rankings, purchasing power analysis, and detailed country profiles.",
      icon: "📈",
      href: "/research/software-engineer-salary-index-2026",
      date: "2026",
      category: "Compensation",
    },
    {
      title: "Data Scientist Salary Index 2026",
      description: "Institutional research report on global data scientist compensation. Country-by-country analysis of base salaries, retained income, and purchasing power across 7 major economies.",
      icon: "🤖",
      href: "/research/data-scientist-salary-index-2026",
      date: "2026",
      category: "Compensation",
    },
    {
      title: "Global Salary Index 2026",
      description: "Comprehensive global salary index comparing average compensation across all tracked professions. Multi-country analysis with purchasing power parity adjustments.",
      icon: "🌍",
      href: "/research/global-salary-index-2026",
      date: "2026",
      category: "Compensation",
    },
    {
      title: "Product Manager Salary Index 2026",
      description: "Research report analyzing product manager salaries across 7 major economies. Includes salary rankings, purchasing power analysis, and detailed country profiles.",
      icon: "📋",
      href: "/research/product-manager-salary-index-2026",
      date: "2026",
      category: "Compensation",
    },
    {
      title: "Global Salary Report",
      description: "Comprehensive analysis of salary benchmarks across major economies. Software engineer, doctor, teacher, nurse, and accountant salary comparisons with currency-adjusted data.",
      icon: "💰",
      href: "/compare",
      date: "2025-2026",
      category: "Compensation",
    },
    {
      title: "Global Tax Comparison",
      description: "Comparison of income tax systems, brackets, and rates across the United States (IRS), United Kingdom (HMRC), Australia (ATO), Canada (CRA), New Zealand (IRD), India (ITD), and Singapore (IRAS).",
      icon: "📊",
      href: "/compare",
      date: "2025-2026",
      category: "Tax",
    },
    {
      title: "Cost of Living Index",
      description: "Analysis of cost-of-living indicators across major economies. Housing, transportation, healthcare, and goods and services costs compared using government statistical data.",
      icon: "🏠",
      href: "/compare",
      date: "2025-2026",
      category: "Economy",
    },
    {
      title: "Technology Sector Compensation",
      description: "In-depth research on technology sector salaries including software engineers, data scientists, and IT professionals across major economies.",
      icon: "💻",
      href: "/us/salary/software-engineer",
      date: "2025-2026",
      category: "Compensation",
    },
    {
      title: "Healthcare Professional Salaries",
      description: "Research on healthcare compensation including doctors, registered nurses, and medical professionals across all covered countries.",
      icon: "🏥",
      href: "/us/salary/doctor",
      date: "2025-2026",
      category: "Compensation",
    },
    {
      title: "Tax Authority Data Sources",
      description: "Documentation of all official tax authority data sources used in Olikit calculations. IRS tax tables, HMRC rates, ATO thresholds, CRA brackets, IRD bands, Indian IT slabs, and IRAS rates.",
      icon: "📋",
      href: "/data-sources",
      date: "2025-2026",
      category: "Methodology",
    },
  ]

  return (
    <Shell>
      <div className="space-y-8">
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Global Research</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          In-depth research on tax systems, salary trends, and financial regulations across major economies. Analysis based on official government data from IRS, HMRC, ATO, CRA, IRD, and IRAS.
        </p>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Research Publications</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <a
              key={r.title}
              href={r.href}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{r.icon}</span>
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                  {r.category}
                </span>
              </div>
              <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-800 transition-colors text-sm mb-2">{r.title}</h3>
              <p className="text-xs leading-5 text-zinc-500 mb-4">{r.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 font-mono">{r.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 group-hover:text-zinc-950 transition-colors">
                  Read →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10">
        <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Country Research Pages</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}/research`}
              className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <h3 className="font-semibold text-sm text-zinc-950 group-hover:text-zinc-800 transition-colors">{c.name}</h3>
                  <p className="text-xs text-zinc-500">{c.taxAuthorityAbbr} &middot; {c.currencyCode}</p>
                </div>
              </div>
              <p className="text-xs leading-5 text-zinc-500 mb-3">
                Tax system analysis, salary trends, and financial research for {c.name}. Data sourced from {c.taxAuthority}.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 group-hover:text-zinc-950 transition-colors">
                View {c.name} research →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-950 sm:text-xl">Methodology &amp; Sources</h2>
        <p className="text-sm leading-6 text-zinc-500 mb-6">
          All Olikit research publications follow a transparent methodology. Data is sourced exclusively from official government publications and publicly available statistical databases.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/methodology"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            View Methodology
          </a>
          <a
            href="/data-sources"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            View Data Sources
          </a>
          <a
            href="/editorial-policy"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Editorial Policy
          </a>
        </div>
      </section>
    </div>
    </Shell>
  )
}
