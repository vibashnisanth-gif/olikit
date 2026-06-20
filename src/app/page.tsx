import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo/constants"
import { getDateModified } from "@/lib/seo/freshness"
import { locales } from "@/lib/seo/locales"
import { professions, getProfession } from "@/lib/content/professions-data"
import { getAllCountries } from "@/lib/content/country-registry"
import { Shell } from "@/components/shell"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { Card } from "@/components/ui/card"
import { DataBlock, MetricRow } from "@/components/ui/data-block"
import { CurrencySalary, CurrencyEquivalents } from "@/components/ui/currency-salary"
import { formatSalary, convertSalary } from "@/lib/currency"
import type { CurrencyCode } from "@/lib/currency"
import { COUNTRY_FLAGS, COUNTRY_CURRENCIES } from "@/lib/content/country-registry"

const hreflangTags: Record<string, string> = {
  "x-default": SITE_URL,
}
for (const loc of locales) {
  hreflangTags[loc.code] = `${SITE_URL}/${loc.slug}`
}

export const metadata: Metadata = {
  title: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
  description:
    "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
  alternates: { canonical: SITE_URL, languages: hreflangTags },
  openGraph: {
    title: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
    description:
      "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
    url: SITE_URL,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const dateModified = getDateModified()

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Olikit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olikit is a global salary, tax and cost-of-living intelligence platform that helps professionals compare financial outcomes across countries using publicly available data and transparent methodologies.",
      },
    },
    {
      "@type": "Question",
      name: "How are salaries calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salary estimates are derived from labor statistics, compensation surveys and publicly available employment data, then normalized for comparison across countries.",
      },
    },
    {
      "@type": "Question",
      name: "How are taxes calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax calculations use official tax brackets and rules published by government tax authorities including the IRS, HMRC, CRA, ATO, IRD and IRAS.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries does Olikit cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olikit currently provides salary, tax and financial intelligence across the United States, United Kingdom, Australia, Canada, New Zealand, India and Singapore.",
      },
    },
    {
      "@type": "Question",
      name: "Can I compare countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Olikit provides salary comparisons, tax comparisons and financial benchmarking tools to evaluate outcomes across different countries.",
      },
    },
    {
      "@type": "Question",
      name: "How often is the data updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax and salary datasets are reviewed regularly and updated when significant government or statistical revisions become available.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Olikit get its data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olikit uses publicly available information from government tax authorities, labor statistics agencies and official economic publications.",
      },
    },
    {
      "@type": "Question",
      name: "Is Olikit suitable for international relocation research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Olikit provides salary comparisons, tax estimates, cost-of-living insights and purchasing power analysis across multiple countries, making it a practical resource for professionals evaluating international moves.",
      },
    },
    {
      "@type": "Question",
      name: "What is purchasing power?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Purchasing power measures how much goods and services a given salary can buy in a specific country, after accounting for taxes, living costs and currency differences.",
      },
    },
    {
      "@type": "Question",
      name: "Why do salaries differ between countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salary differences reflect variations in labour productivity, industry composition, cost of living, collective bargaining frameworks, minimum wage regulations, supply and demand for skills, and tax systems across countries.",
      },
    },
    {
      "@type": "Question",
      name: "How should salary comparisons be interpreted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salary comparisons should account for tax rates, cost of living, purchasing power, currency fluctuations, benefits and retirement contributions to provide a meaningful picture of financial outcomes.",
      },
    },
  ],
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
  url: SITE_URL,
  description:
    "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
  lastReviewed: dateModified,
  dateModified,
  publisher: {
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olikit",
  url: SITE_URL,
  description:
    "Salary, tax, take-home pay and cost-of-living platform that helps users compare financial outcomes across multiple countries using calculators, compensation data and government-sourced information.",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olikit",
  url: SITE_URL,
  description:
    "Compare salaries, taxes and cost of living across major economies.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

const seProf = getProfession("software-engineer")!
const docProf = getProfession("doctor")!
const rnProf = getProfession("registered-nurse")!

function slugToCurrency(slug: string): CurrencyCode {
  const map: Record<string, CurrencyCode> = {
    us: "USD", uk: "GBP", au: "AUD", ca: "CAD", nz: "NZD", in: "INR", sg: "SGD",
  }
  return map[slug] ?? "USD"
}

function equivalentCurrencies(slugs: string[]): CurrencyCode[] {
  const codes = slugs.map(slugToCurrency).filter((c, i, a) => a.indexOf(c) === i)
  const extras: CurrencyCode[] = ["EUR"]
  return [...codes, ...extras.filter((c) => !codes.includes(c))]
}

interface SalaryRow {
  flag: string
  country: string
  slug: string
  salary: number
  formatted: string
  currencyCode: CurrencyCode
  equivalents: { code: CurrencyCode; formatted: string }[]
  pct: number
}

function buildRows(prof: typeof seProf, slugs: string[]): SalaryRow[] {
  const eqCurrencies = equivalentCurrencies(slugs)
  const rows = slugs.map((s) => {
    const curr = slugToCurrency(s)
    const amount = prof.salaries[s]?.average || 0
    return {
      flag: COUNTRY_FLAGS[s] || "",
      country: s === "us" ? "United States" : s === "uk" ? "United Kingdom" : s === "au" ? "Australia" : s === "ca" ? "Canada" : s === "nz" ? "New Zealand" : s === "in" ? "India" : s === "sg" ? "Singapore" : s,
      slug: s,
      salary: amount,
      formatted: formatSalary(amount, curr),
      currencyCode: curr,
      equivalents: eqCurrencies.filter((c) => c !== curr).map((code) => ({
        code,
        formatted: formatSalary(Math.round(convertSalary(amount, curr, code)), code),
      })),
      pct: 0,
    }
  })
  const max = Math.max(...rows.map((r) => r.salary), 1)
  return rows.map((r) => ({ ...r, pct: Math.round((r.salary / max) * 100) }))
}

const professionSnapshots = [
  { name: seProf.name, rows: buildRows(seProf, ["us", "au", "uk"]) },
  { name: docProf.name, rows: buildRows(docProf, ["us", "ca", "uk"]) },
  { name: rnProf.name, rows: buildRows(rnProf, ["au", "ca", "uk"]) },
]

const featuredInsights = [
  {
    title: "Highest Paying Countries for Software Engineers",
    summary: "United States, Switzerland and Australia continue to rank among the strongest salary markets for software engineers when measured by gross compensation.",
    href: "/rankings",
    cta: "Explore Rankings",
  },
  {
    title: "Countries With The Lowest Income Tax Burden",
    summary: "Tax rates vary significantly between countries and can materially affect take-home pay and long-term savings.",
    href: "/compare",
    cta: "Explore Tax Comparisons",
  },
  {
    title: "Best Countries For Healthcare Professionals",
    summary: "Healthcare compensation differs widely depending on demand, public funding and workforce shortages.",
    href: "/research",
    cta: "Explore Research",
  },
]

const popularResearchLinks = [
  { label: "Highest Paying Jobs in the United States", href: "/us/salary" },
  { label: "Highest Paying Jobs in Canada", href: "/ca/salary" },
  { label: "Highest Paying Jobs in Australia", href: "/au/salary" },
  { label: "Best Countries for Software Engineers", href: "/rankings" },
  { label: "Best Countries for Doctors", href: "/rankings" },
  { label: "Global Salary Rankings", href: "/rankings" },
  { label: "Global Tax Comparisons", href: "/compare" },
  { label: "Cost of Living Rankings", href: "/research" },
  { label: "Software Engineer Salary", href: "/us/salary/software-engineer" },
  { label: "Doctor Salary", href: "/us/salary/doctor" },
  { label: "Salary After Tax", href: "/us/tools/tax-calculator" },
  { label: "Compensation Benchmarks", href: "/professions" },
]

const popularProfessionCards = [
  { name: "Software Engineer" },
  { name: "Data Scientist" },
  { name: "Product Manager" },
  { name: "Doctor" },
  { name: "Registered Nurse" },
  { name: "Accountant" },
  { name: "Financial Analyst" },
  { name: "Mechanical Engineer" },
]

const highestPayingProfessions = [
  {
    name: "Doctor",
    summary: "Physicians and surgeons earn among the highest salaries across all major economies, with average compensation exceeding six figures in the United States, Australia and Canada.",
  },
  {
    name: "Software Engineer",
    summary: "Software engineers command premium salaries driven by global demand for technical talent, with top-tier compensation in technology, finance and consulting sectors.",
  },
  {
    name: "Investment Banker",
    summary: "Investment bankers in major financial hubs earn substantial compensation packages including base salary, bonuses and profit-sharing arrangements.",
  },
  {
    name: "Dentist",
    summary: "Dental professionals consistently rank among the highest-earning healthcare practitioners, with strong demand across private and public healthcare systems.",
  },
  {
    name: "Product Manager",
    summary: "Product managers bridge business, technology and user experience, earning competitive salaries in technology companies and digital-first organizations.",
  },
  {
    name: "Data Scientist",
    summary: "Data scientists apply advanced analytics and machine learning to drive business decisions, with compensation reflecting specialised quantitative expertise.",
  },
]

const countryKeyStrengths: Record<string, string> = {
  us: "High technology, healthcare and finance compensation.",
  uk: "Global finance, professional services and technology sectors.",
  au: "Strong purchasing power and quality-of-life outcomes.",
  ca: "Growing technology sector and skilled immigration pathways.",
  nz: "Healthcare, engineering and skilled trades opportunities.",
  in: "Large technology workforce and rapidly growing digital economy.",
  sg: "Competitive salaries and relatively low personal income tax.",
}

const governmentAuthorities = [
  { abbr: "IRS", name: "Internal Revenue Service", country: "United States" },
  { abbr: "HMRC", name: "HM Revenue & Customs", country: "United Kingdom" },
  { abbr: "CRA", name: "Canada Revenue Agency", country: "Canada" },
  { abbr: "ATO", name: "Australian Taxation Office", country: "Australia" },
  { abbr: "IRD", name: "Inland Revenue Department", country: "New Zealand" },
  { abbr: "IRAS", name: "Inland Revenue Authority of Singapore", country: "Singapore" },
]

export default function GlobalHomePage() {
  const countries = getAllCountries()

  return (
    <Shell>
      <div className="space-y-12 lg:space-y-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* SECTION 1 — HERO */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">

          {/* LEFT COLUMN — HEADLINE, CTAs, TRUST METRICS */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
              SALARY INTELLIGENCE PLATFORM
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl leading-tight">
              Compare Salaries,<br />
              Taxes &amp; Cost of Living<br />
              Across the World
            </h1>

            <p className="text-base leading-7 text-zinc-500 sm:text-lg max-w-xl">
              See where your income goes further — compare salaries, taxes, purchasing power and living costs across major economies using government-sourced data.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/compare"
                className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm"
              >
                Compare Countries
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/professions"
                className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700"
              >
                Explore Salary Data
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div>
                <p className="text-lg font-bold text-zinc-950 tabular-nums">500+</p>
                <p className="text-xs text-zinc-500">Salary Datasets</p>
              </div>
              <div>
                <p className="text-lg font-bold text-zinc-950 tabular-nums">20+</p>
                <p className="text-xs text-zinc-500">Countries</p>
              </div>
              <div>
                <p className="text-lg font-bold text-zinc-950 tabular-nums">2026</p>
                <p className="text-xs text-zinc-500">Updated</p>
              </div>
              <div>
                <p className="text-lg font-bold text-zinc-950 tabular-nums">Professionals</p>
                <p className="text-xs text-zinc-500">Trusted by</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — DASHBOARD CARDS */}
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1: Global Salary Snapshot */}
            <Card className="col-span-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Global Salary Snapshot
              </p>
              <MetricRow label="United States" value="$120,000" />
              <MetricRow label="Australia" value="A$110,000" />
              <MetricRow label="United Kingdom" value="£55,000" />
            </Card>

            {/* Card 2: Tax Impact */}
            <DataBlock
              value="Up to 47%"
              label="Top Marginal Tax Rate"
              footnote="Varies by country and income level"
              className="col-span-1"
            />

            {/* Card 3: Cost of Living */}
            <DataBlock
              value="32%"
              label="Avg. Cost of Living"
              footnote="Housing, food, transport, utilities"
              className="col-span-1"
            />

            {/* Card 4: Olikit Global Salary Index */}
            <Card className="col-span-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Olikit Global Salary Index
              </p>
              <div className="divide-y divide-zinc-100">
                {[
                  { rank: "#1", country: "Switzerland", salary: "CHF 95,000" },
                  { rank: "#2", country: "Singapore", salary: "SGD 90,000" },
                  { rank: "#3", country: "United States", salary: "$128,000" },
                  { rank: "#4", country: "Australia", salary: "A$110,000" },
                  { rank: "#5", country: "Canada", salary: "CA$88,000" },
                ].map((entry) => (
                  <div
                    key={entry.country}
                    className="flex items-center justify-between py-2 first:pt-0 last:pb-0"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-zinc-950">{entry.rank}</span>
                      <span className="text-zinc-700">{entry.country}</span>
                    </span>
                    <span className="text-sm font-semibold text-zinc-600 tabular-nums">
                      {entry.salary}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* SECTION 2 — HOW WE CALCULATE */}
      <FadeInSection>
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              How We Calculate
            </span>
          </div>
          <p className="text-sm leading-6 text-emerald-900">
            Salary data sourced from government labor statistics and industry surveys. Tax calculations use official brackets published by tax authorities (IRS, HMRC, ATO, CRA, IRD, IRAS). Cost-of-living indexes reflect official CPI and housing data. All figures are for educational purposes; individual outcomes vary. See our <a href="/methodology" className="font-semibold text-emerald-800 underline hover:text-emerald-700">full methodology</a>.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 3 — TRUST STRIP */}
      <FadeInSection>
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-600">
          <span>Government Tax Data</span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span>Salary Intelligence</span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span>Compensation Research</span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span>Cost-of-Living Analysis</span>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 3 — GLOBAL SALARY SNAPSHOT */}
      <FadeInSection>
        <section>
          <div className="mb-8">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              REAL-TIME COMPENSATION DATA
            </span>
            <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
              Global Salary Snapshot
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 max-w-2xl">
              Real salary data from the Olikit platform across major economies. Rankings reflect average total compensation.
            </p>
          </div>
          <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {professionSnapshots.map((prof) => {
              const topSalary = Math.max(...prof.rows.map((r) => r.salary))
              return (
                <div
                  key={prof.name}
                  className="card-hover rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold text-zinc-950">{prof.name}</h3>
                    <a href={`/${prof.rows[0]?.slug}/salary/${prof.name.toLowerCase().replace(/\s+/g, "-")}`} className="text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">Details &rarr;</a>
                  </div>
                  <div className="space-y-4 flex-1">
                    {prof.rows.map((row, idx) => (
                      <div key={row.country}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="flex items-center gap-2">
                            <span className="text-base">{row.flag}</span>
                            <span className="flex items-center gap-1.5">
                              <span className="text-sm font-medium text-zinc-700">{row.country}</span>
                              <span className="text-[10px] font-semibold text-zinc-500">#{idx + 1}</span>
                            </span>
                          </span>
                          <span className="text-base font-bold text-zinc-950">
                            <CurrencySalary amount={row.salary} sourceCurrency={row.currencyCode} showCode />
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full rounded-full bg-zinc-100 overflow-hidden flex-1">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{ width: `${(row.salary / topSalary) * 100}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-medium text-emerald-600 w-8 text-right tabular-nums">
                            {row.pct >= 90 ? "Top 10%" : row.pct >= 75 ? "Top 25%" : row.pct >= 50 ? "Top 50%" : ""}
                          </span>
                        </div>
                        <CurrencyEquivalents
                          amount={row.salary}
                          sourceCurrency={row.currencyCode}
                          targetCurrencies={row.equivalents}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-6">
            <a
              href="/rankings"
              className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
              View Full Salary Rankings
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </FadeInSection>

      {/* GLOBAL SALARY INDEX */}
      <FadeInSection>
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
            GLOBAL SALARY INDEX 2026
          </span>
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Top Countries by Salary Intelligence Ranking
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 max-w-2xl">
            Overall ranking based on average compensation across all tracked professions, adjusted for purchasing power.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              { rank: 1, country: "United States", flag: "🇺🇸", amount: 128000, curr: "USD" as const, pct: "100%", slug: "us", badge: "Highest Average" },
              { rank: 2, country: "Australia", flag: "🇦🇺", amount: 110000, curr: "AUD" as const, pct: "86%", slug: "au", badge: "Strong Purchasing Power" },
              { rank: 3, country: "Singapore", flag: "🇸🇬", amount: 78000, curr: "SGD" as const, pct: "61%", slug: "sg", badge: "Low Tax Jurisdiction" },
              { rank: 4, country: "Canada", flag: "🇨🇦", amount: 88000, curr: "CAD" as const, pct: "69%", slug: "ca", badge: "Growing Tech Sector" },
              { rank: 5, country: "New Zealand", flag: "🇳🇿", amount: 100000, curr: "NZD" as const, pct: "78%", slug: "nz", badge: "Strong Healthcare Pay" },
              { rank: 6, country: "United Kingdom", flag: "🇬🇧", amount: 58000, curr: "GBP" as const, pct: "45%", slug: "uk", badge: "Financial Hub Premium" },
              { rank: 7, country: "India", flag: "🇮🇳", amount: 1200000, curr: "INR" as const, pct: "—", slug: "in", badge: "Fastest Growing Digital Economy" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="card-hover group flex items-center gap-4 rounded-lg border border-zinc-100 bg-zinc-50/50 px-4 py-3 sm:px-5 sm:py-3.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white tabular-nums shrink-0">
                  {c.rank}
                </span>
                <span className="text-xl shrink-0">{c.flag}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-900">{c.country}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">{c.badge}</span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-x-3 gap-y-0.5 flex-wrap">
                    <CurrencySalary amount={c.amount} sourceCurrency={c.curr} className="text-xs text-zinc-500" showCode />
                    {c.pct !== "—" && (
                      <div className="h-1.5 w-16 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: c.pct }} />
                      </div>
                    )}
                  </div>
                </div>
                <svg className="h-4 w-4 shrink-0 text-zinc-300 group-hover:text-zinc-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/rankings"
              className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
              Explore Full Rankings
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* SECTION 4+5 — RESEARCH CENTER */}
      <FadeInSection>
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                RESEARCH & ANALYSIS
              </span>
              <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                Latest Research &amp; Rankings
              </h2>
            </div>
            <Link
              href="/research"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              View All Research
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-6 lg:gap-4 lg:grid-cols-5">
            <div className="lg:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Featured Research
              </p>
              <h3 className="text-lg font-semibold text-zinc-950">
                Olikit Global Salary Index 2026
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Comprehensive analysis comparing salaries, taxes, purchasing power and cost-of-living across 7 major economies using government-sourced data.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Highest Paying Countries for Software Engineers",
                  "Tax-Adjusted Salary Rankings",
                  "Profession Compensation Benchmarks",
                  "Cost of Living & Purchasing Power Analysis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                    <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/research"
                className="btn-primary mt-4 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              >
                Read Full Report
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Countries for Software Engineers", href: "/rankings/best-countries-for-software-engineers", desc: "Top destinations ranked by compensation, taxes and quality of life for software engineers." },
                { title: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers", desc: "Countries offering the highest absolute compensation across all experience levels." },
                { title: "Highest Paying Cities", href: "/rankings/highest-paying-cities-software-engineers", desc: "Metropolitan areas with the best salary-to-cost-of-living ratios globally." },
                { title: "Salary After Tax Rankings", href: "/compare", desc: "Net take-home pay comparison across countries after income tax and social contributions." },
                { title: "Cost of Living Analysis", href: "/research", desc: "Comprehensive breakdown of housing, transportation, healthcare and goods costs." },
                { title: "Tax System Comparisons", href: "/compare", desc: "Side-by-side comparison of tax brackets, rates and thresholds across jurisdictions." },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="card-hover group rounded-lg border border-zinc-200 bg-white p-4 shadow-sm flex flex-col"
                >
                  <h3 className="text-sm font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 flex-1">
                    {item.desc}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-0.5 text-xs font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    Read more
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 sm:hidden">
            <Link
              href="/research"
              className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 w-full justify-center"
            >
              View All Research
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* SECTION 6 — FINANCIAL INTELLIGENCE FOR REAL-WORLD DECISIONS */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            Financial Intelligence for Real-World Decisions
          </h2>
          <div className="mt-5 space-y-3 text-base leading-7 text-zinc-600">
            <p>
              Olikit helps people understand how salaries, taxes and living costs affect their financial outcomes. The platform combines salary benchmarks, tax calculations, compensation research and cost-of-living insights for professionals evaluating job offers, planning international moves, or comparing career opportunities across 7 major economies.
            </p>
            <p>
              Unlike generic calculators, Olikit combines salary benchmarks, tax calculations, compensation research and cost-of-living insights into a single platform designed for professionals, job seekers, businesses, remote workers and expatriates.
            </p>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 7 — WHY PEOPLE USE OLIKIT */}
      <FadeInSection>
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-950 sm:text-2xl text-center">
          Why People Use Olikit
        </h2>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Compare Financial Outcomes", desc: "Understand how taxes, salaries and living costs differ between countries and professions." },
            { title: "Evaluate Job Offers", desc: "See how much of your salary you keep after tax and mandatory deductions." },
            { title: "Plan International Moves", desc: "Compare earning potential and affordability before relocating." },
            { title: "Benchmark Careers", desc: "Research salary ranges, compensation trends and profession-specific earnings." },
            { title: "Understand Taxes", desc: "Estimate take-home pay using country-specific tax rules and thresholds." },
            { title: "Make Better Decisions", desc: "Use public data and transparent methodologies instead of guesswork." },
          ].map((card) => (
            <div key={card.title} className="card-hover rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col">
              <h3 className="font-semibold text-zinc-950">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 8 — HIGHEST PAYING PROFESSIONS */}
      <FadeInSection>
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Highest Paying Professions
        </h2>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highestPayingProfessions.map((prof) => (
            <div
              key={prof.name}
              className="card-hover rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
            >
              <h3 className="font-semibold text-zinc-950">{prof.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">{prof.summary}</p>
              <a
                href="/professions"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Explore Salaries &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 9 — EXPLORE BY COUNTRY */}
      <FadeInSection>
      <section>
        <h2 className="mb-1 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Localized Financial Intelligence
        </h2>
        <p className="mb-6 text-sm text-zinc-600">
          Every country has different tax systems, salary expectations and living costs. Explore country-specific calculators, guides and compensation data.
        </p>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{c.flag}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-0.5 text-xs leading-5 text-zinc-500">
                    {c.description}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-zinc-500 flex-1">
                <span className="font-medium text-zinc-700">Key Strength:</span> {countryKeyStrengths[c.slug] || c.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-600 group-hover:text-zinc-950 transition-colors">
                Explore Country
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 10 — WHY TRUST OLIKIT */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center mb-6">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Transparent Data. Clear Methodology. Independent Research.
          </h2>
        </div>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Government-Sourced Data", desc: "Tax rates, thresholds and regulations are sourced directly from official tax authorities and government publications." },
            { title: "Transparent Methodology", desc: "Calculation methods and assumptions are publicly documented and regularly reviewed." },
            { title: "Compensation Research", desc: "Salary benchmarks are derived from labor statistics, compensation studies and publicly available employment data." },
            { title: "Independent Analysis", desc: "Rankings, comparisons and guides are produced independently and are not influenced by advertisers." },
            { title: "Regular Updates", desc: "Tax and salary datasets are reviewed whenever significant updates become available." },
            { title: "Public Verification", desc: "Users can verify major datasets through publicly available government and statistical sources." },
          ].map((card) => (
            <div key={card.title} className="card-hover rounded-lg border border-zinc-200 bg-zinc-50 p-5 flex flex-col">
              <h3 className="font-semibold text-zinc-950">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">{card.desc}</p>
            </div>
          ))}
        </div>
        {/* GOVERNMENT SOURCES USED */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-sm font-semibold text-zinc-700">
            Government Sources Used
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {governmentAuthorities.map((a) => (
              <span
                key={a.abbr}
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200"
                title={a.name}
              >
                {a.abbr}
              </span>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 11 — GLOBAL COMPARISONS */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Compare More Than Salaries
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            A higher salary does not always mean a better financial outcome.
          </p>
          <p className="mt-5 text-sm font-medium text-zinc-700">Compare:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {["Gross salary", "Take-home pay", "Income taxes", "Retirement contributions", "Cost of living", "Purchasing power", "Career earnings potential"].map((item) => (
              <span key={item} className="rounded-md bg-white px-3 py-1.5 text-sm text-zinc-700 ring-1 ring-zinc-200">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-base leading-7 text-zinc-600">
            to understand how different countries affect real-world financial outcomes.
          </p>
          <div className="mt-5">
            <a
              href="/compare"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm"
            >
              Explore Comparisons
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 12 — BEYOND CALCULATORS */}
      <FadeInSection>
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Beyond Calculators
        </h2>
        <p className="mb-6 text-sm leading-6 text-zinc-600 max-w-2xl">
          Olikit publishes salary research, tax analysis, compensation reports and cost-of-living studies designed to help professionals, businesses and researchers understand global financial trends.
        </p>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="/rankings"
            className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
          >
            <p className="mb-2 text-lg">🏆</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Salary Rankings</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600 flex-1">
              Compare earning potential across countries, professions and industries.
            </p>
          </a>
          <a
            href="/compare"
            className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
          >
            <p className="mb-2 text-lg">📊</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Tax Comparisons</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600 flex-1">
              Understand how tax systems influence take-home pay and disposable income.
            </p>
          </a>
          <a
            href="/research"
            className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
          >
            <p className="mb-2 text-lg">🏠</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Cost-of-Living Research</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600 flex-1">
              Compare affordability, purchasing power and living expenses.
            </p>
          </a>
          <a
            href="/professions"
            className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
          >
            <p className="mb-2 text-lg">💼</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Compensation Intelligence</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600 flex-1">
              Explore salary trends, compensation benchmarks and profession data.
            </p>
          </a>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 13 — EXPLORE SALARIES BY PROFESSION */}
      <FadeInSection>
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Explore Salaries by Profession
        </h2>
        <p className="mb-6 text-sm leading-6 text-zinc-600 max-w-2xl">
          Dedicated career intelligence hubs for the most-requested professions. Each hub provides country-by-country salary data, tax analysis, and purchasing power comparisons.
        </p>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-3">
          <a
            href="/software-engineer"
            className="card-hover group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200 self-start">
              TECHNOLOGY
            </span>
            <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
              Software Engineer
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">
              Salaries, taxes, PPP-adjusted income, and career comparisons across 7 major economies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Salary by Country</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Rankings</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Comparisons</span>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
              Explore Hub &rarr;
            </span>
          </a>
          <a
            href="/data-scientist"
            className="card-hover group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-200 self-start">
              DATA & AI
            </span>
            <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
              Data Scientist
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">
              Data science compensation, salary rankings, and career analysis across global markets.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Salary by Country</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Rankings</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Comparisons</span>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
              Explore Hub &rarr;
            </span>
          </a>
          <a
            href="/product-manager"
            className="card-hover group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200 self-start">
              PRODUCT
            </span>
            <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
              Product Manager
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">
              Product management compensation benchmarks and salary data across countries.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Salary by Country</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Rankings</span>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
              Explore Hub &rarr;
            </span>
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/professions"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Browse All Professions &rarr;
          </a>
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 14 — DATA SOURCES */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Where The Data Comes From
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Our calculators, rankings and research are built using publicly available information from official tax authorities, labor statistics agencies and government publications.
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Every major dataset can be independently verified through public sources.
          </p>
          <p className="mt-5 text-sm font-medium text-zinc-700">Examples include:</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Internal Revenue Service (IRS)", country: "United States" },
            { name: "Bureau of Labor Statistics (BLS)", country: "United States" },
            { name: "HM Revenue & Customs (HMRC)", country: "United Kingdom" },
            { name: "Office for National Statistics (ONS)", country: "United Kingdom" },
            { name: "Australian Taxation Office (ATO)", country: "Australia" },
            { name: "Australian Bureau of Statistics (ABS)", country: "Australia" },
            { name: "Canada Revenue Agency (CRA)", country: "Canada" },
            { name: "Statistics Canada", country: "Canada" },
            { name: "Inland Revenue (IRD)", country: "New Zealand" },
            { name: "Stats NZ", country: "New Zealand" },
            { name: "Inland Revenue Authority of Singapore (IRAS)", country: "Singapore" },
            { name: "Singapore Department of Statistics (SingStat)", country: "Singapore" },
          ].map((source) => (
            <div key={source.name} className="card-hover rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
              <p className="text-sm font-medium text-zinc-950">{source.name}</p>
              <p className="text-xs text-zinc-500">{source.country}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 15 — TRUSTED FINANCIAL INTELLIGENCE */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Trusted Financial Intelligence
          </h2>
          <div className="mt-5 space-y-3 text-base leading-7 text-zinc-600">
            <p>
              Olikit combines salary data, tax information, cost-of-living analysis and compensation research into a single platform designed to help professionals make informed career and financial decisions.
            </p>
            <p>
              All calculations and research are based on publicly available government data, official tax authorities and documented methodologies. Every major page includes transparent sources, update dates and supporting references.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/methodology"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm"
            >
              Methodology
            </a>
            <a
              href="/data-sources"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300"
            >
              Data Sources
            </a>
            <a
              href="/editorial-policy"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300"
            >
              Editorial Policy
            </a>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* LAST UPDATED TRUST LINE */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-500">
        <span>Updated: June 2026</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Salary Intelligence</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Tax Research</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Compensation Analysis</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Cost of Living Data</span>
      </div>

      {/* SECTION 16+17 — POPULAR RESEARCH & RANKINGS (MERGED) */}
      <FadeInSection>
      <section>
        <h2 className="mb-6 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Popular Research &amp; Rankings
        </h2>
        <div className="grid gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularResearchLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="card-hover group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                {link.label}
              </h3>
            </a>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 18 — FAQS */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
          FAQ
        </span>
        <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-zinc-100 rounded-lg border border-zinc-200">
          {[
            { q: "What is Olikit?", a: "Olikit is a global salary, tax and cost-of-living intelligence platform that helps professionals compare financial outcomes across countries using publicly available data and transparent methodologies." },
            { q: "How are salaries calculated?", a: "Salary estimates are derived from labor statistics, compensation surveys and publicly available employment data, then normalized for comparison across countries." },
            { q: "How are taxes calculated?", a: "Tax calculations use official tax brackets and rules published by government tax authorities including the IRS, HMRC, CRA, ATO, IRD and IRAS." },
            { q: "Which countries does Olikit cover?", a: "Olikit currently provides salary, tax and financial intelligence across the United States, United Kingdom, Australia, Canada, New Zealand, India and Singapore." },
            { q: "Can I compare countries?", a: "Yes. Olikit provides salary comparisons, tax comparisons and financial benchmarking tools to evaluate outcomes across different countries." },
            { q: "How often is the data updated?", a: "Tax and salary datasets are reviewed regularly and updated when significant government or statistical revisions become available." },
            { q: "Where does Olikit get its data?", a: "Olikit uses publicly available information from government tax authorities, labor statistics agencies and official economic publications." },
            { q: "Is Olikit suitable for international relocation research?", a: "Yes. Olikit provides salary comparisons, tax estimates, cost-of-living insights and purchasing power analysis across multiple countries, making it a practical resource for professionals evaluating international moves." },
            { q: "What is purchasing power?", a: "Purchasing power measures how much goods and services a given salary can buy in a specific country, after accounting for taxes, living costs and currency differences." },
            { q: "Why do salaries differ between countries?", a: "Salary differences reflect variations in labour productivity, industry composition, cost of living, collective bargaining frameworks, minimum wage regulations, supply and demand for skills, and tax systems across countries." },
            { q: "How should salary comparisons be interpreted?", a: "Salary comparisons should account for tax rates, cost of living, purchasing power, currency fluctuations, benefits and retirement contributions to provide a meaningful picture of financial outcomes." },
          ].map((faq, i) => (
            <details key={i} className="group faq-accordion px-5 py-4 sm:px-6 sm:py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 select-none">
                <h3 className="text-base font-semibold text-zinc-950">{faq.q}</h3>
                <svg className="faq-chevron h-5 w-5 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="faq-content mt-2">
                <p className="text-sm leading-6 text-zinc-500">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* SECTION 19 — SOURCES & METHODOLOGY */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl mb-4">
          Sources & Methodology
        </h2>
        <p className="text-sm leading-7 text-zinc-600 mb-4">
          Olikit compiles salary, tax, and financial data from official government publications including the Internal Revenue Service (IRS), Bureau of Labor Statistics (BLS), HM Revenue &amp; Customs (HMRC), Office for National Statistics (ONS), Australian Taxation Office (ATO), Australian Bureau of Statistics (ABS), Canada Revenue Agency (CRA), Statistics Canada, Inland Revenue Department (IRD), Stats NZ, Indian Income Tax Department, IRAS, and Department of Statistics Singapore. All tax calculations apply current-year progressive brackets, thresholds, and deduction rules published by each jurisdiction. Salary figures reflect publicly reported averages from labor statistics and industry surveys; individual outcomes vary. Detailed methodology is documented on our <a href="/methodology" className="text-emerald-700 hover:text-emerald-600 font-medium">methodology page</a>.
        </p>
        <p className="text-xs text-zinc-500">
          Last updated: {getDateModified()}
        </p>
      </section>
      </FadeInSection>

      {/* SECTION 20 — FINAL CTA */}
      <FadeInSection>
      <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10 sm:py-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
            Make Better Financial Decisions
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Explore salary benchmarks, compare taxes, estimate take-home pay and understand how different countries affect your financial future.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/compare"
              className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm"
            >
              Compare Countries
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/research"
              className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700"
            >
              Explore Financial Intelligence
            </a>
          </div>
        </div>
      </section>
      </FadeInSection>
    </div>
    </Shell>
  )
}
