import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { locales, getLocale } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { stateDataSets } from "@/lib/content/state-data"
import { costOfLivingData } from "@/lib/content/state-expansion"
import { glossaryEntries } from "@/lib/content/glossary"
import { getLatestUpdates } from "@/lib/content/updates"
import { getLastUpdated } from "@/lib/seo/freshness"
import { buildLocalBusinessJsonLd, buildOrganizationJsonLd } from "@/lib/seo/json-ld"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return buildMetadata(locale, null, `/${locale.slug}`)
}

export default async function LocalePage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name
  const states = locale.states
  const lastUpdated = getLastUpdated()
  const latestUpdates = getLatestUpdates(3)
  const websiteJsonLd = buildLocalBusinessJsonLd(locale)
  const orgJsonLd = buildOrganizationJsonLd(locale)
  const usStates = states?.filter(s => stateDataSets.some(d => d.stateSlug === s.slug)) || []

  const rankingData = [
    { label: "Highest-Paying States", href: `/${slug}/best-states-for-salary#best-states-for-salary`, emoji: "" },
    { label: "Most Affordable States", href: `/${slug}/best-states-for-cost-of-living`, emoji: "" },
    { label: "Best States for Retirement", href: `/${slug}/best-states-for-retirement`, emoji: "" },
    { label: "Most Affordable Housing", href: `/${slug}/best-states-for-home-affordability`, emoji: "" },
  ]

  return (
    <div className="space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* 1. HERO */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Free calculators for {name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Smart financial decisions start here — free calculators, salary data, and cost of living tools built for {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          {locale.defaultDescription} Explore salary data by state, compare cost of living, and use our free calculators to plan your financial future.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`/${slug}/tools/salary-calculator`} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
          <a href={`/${slug}/tools/mortgage-calculator`} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Mortgage Calculator</a>
          <a href={`/${slug}/tools/tax-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          <a href={`/${slug}/tools/investment-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Investment Calculator</a>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg border border-zinc-200 bg-white px-5 py-4 shadow-sm text-sm">
        <span className="flex items-center gap-1.5 font-medium text-zinc-700">
          <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Official Gov Sources
        </span>
        <span className="flex items-center gap-1.5 font-medium text-zinc-700">
          <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          7 Countries
        </span>
        <span className="flex items-center gap-1.5 font-medium text-zinc-700">
          <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          464 Pages
        </span>
        <span className="flex items-center gap-1.5 font-medium text-zinc-700">
          <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Free Forever
        </span>
        <span className="flex items-center gap-1.5 font-medium text-zinc-700">
          <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Updated {lastUpdated}
        </span>
      </div>

      {/* 3. SALARY HUB */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Salary Hub</h2>
            <p className="mt-1 text-sm text-zinc-600">Comprehensive salary resources — calculators, average salaries by state, and guides</p>
          </div>
          <a href={`/${slug}/salary`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">View All</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href={`/${slug}/tools/salary-calculator`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase text-zinc-500">Calculator</p>
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">Salary Calculator</h3>
            <p className="text-sm leading-6 text-zinc-600">Calculate take-home pay after taxes and deductions in {name}.</p>
          </a>
          <a href={`/${slug}/salary`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase text-zinc-500">Resource</p>
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">Salary Hub</h3>
            <p className="text-sm leading-6 text-zinc-600">Guides, average salary data, FAQs, and state-by-state salary analysis.</p>
          </a>
          {usStates.slice(0, 4).map((s) => (
            <a key={s.slug} href={`/${slug}/average-salary/${s.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-1 text-xs font-semibold uppercase text-zinc-500">Average Salary</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{s.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">Average salary: ${stateDataSets.find(d => d.stateSlug === s.slug)?.dataPoints.averageSalary.toLocaleString()} — Cost of living: {stateDataSets.find(d => d.stateSlug === s.slug)?.dataPoints.costOfLivingIndex}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 4. POPULAR CALCULATORS */}
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-zinc-950">Popular Calculators</h2>
          <p className="mt-1 text-sm text-zinc-600">High-value finance calculators for {name}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a key={tool.id} href={`/${slug}/tools/${tool.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{tool.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">{tool.description.replace("{country}", name)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 5. COUNTRY HUB */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Browse by Country</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locales.filter(l => ["us","uk","au","ca","in","nz","sg"].includes(l.slug)).map((l) => (
            <a key={l.slug} href={`/${l.slug}`} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="font-semibold text-zinc-950">{l.name}</h3>
              <p className="text-xs text-zinc-500 mt-1">{l.currency.symbol}{l.currency.code} &middot; {l.states?.length || 0} regions</p>
            </a>
          ))}
        </div>
      </section>

      {/* 6. COST OF LIVING HUB */}
      {usStates.length > 0 && (
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950">Cost of Living Hub</h2>
              <p className="mt-1 text-sm text-zinc-600">Compare cost of living by state with full category breakdowns</p>
            </div>
            <a href={`/${slug}/cost-of-living/${usStates[0].slug}`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">Explore</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usStates.map((s) => {
              const col = costOfLivingData[s.slug]
              if (!col) return null
              return (
                <a key={s.slug} href={`/${slug}/cost-of-living/${s.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{s.name}</h3>
                  <p className="text-sm text-zinc-600">Overall: {col.overall} &middot; Housing: {col.housing} &middot; Utilities: {col.utilities} &middot; Food: {col.food}</p>
                  <p className="text-xs text-zinc-500 mt-1">(US avg = 100)</p>
                </a>
              )
            })}
          </div>
        </section>
      )}

      {/* 7. AVERAGE SALARY HUB */}
      {usStates.length > 0 && (
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950">Average Salary Hub</h2>
              <p className="mt-1 text-sm text-zinc-600">State-by-state average salary data with cost of living context</p>
            </div>
            <a href={`/${slug}/best-states-for-salary`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">State Rankings</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usStates.map((s) => {
              const d = stateDataSets.find(d => d.stateSlug === s.slug)
              if (!d) return null
              return (
                <a key={s.slug} href={`/${slug}/average-salary/${s.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{s.name}</h3>
                  <p className="text-sm text-zinc-600">Avg salary: <strong>${d.dataPoints.averageSalary.toLocaleString()}</strong></p>
                  <p className="text-xs text-zinc-500">Median income: ${d.dataPoints.medianHouseholdIncome.toLocaleString()} &middot; COL index: {d.dataPoints.costOfLivingIndex}</p>
                </a>
              )
            })}
          </div>
        </section>
      )}

      {/* 8. FINANCIAL DATA LIBRARY */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Financial Data Library</h2>
            <p className="mt-1 text-sm text-zinc-600">Verified financial data from official government sources</p>
          </div>
          <a href={`/${slug}/financial-data`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">View All Data</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Average Salary Data", desc: "BLS state-level salary data for all 50 states", href: `/${slug}/financial-data` },
            { title: "Cost of Living Data", desc: "BEA Regional Price Parities with category breakdowns", href: `/${slug}/financial-data` },
            { title: "Tax Data", desc: "State income tax rates, property tax rates, and structures", href: `/${slug}/financial-data` },
            { title: "Mortgage Data", desc: "Median home values and affordability metrics by state", href: `/${slug}/financial-data` },
            { title: "Minimum Wage Data", desc: "State minimum wage rates and federal minimum wage states", href: `/${slug}/financial-data` },
            { title: "Property Tax Data", desc: "Effective property tax rates by state", href: `/${slug}/financial-data` },
          ].map((item) => (
            <a key={item.title} href={item.href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{item.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 9. STATE RANKINGS */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">State Rankings</h2>
            <p className="mt-1 text-sm text-zinc-600">Comprehensive state rankings for financial decision-making</p>
          </div>
          <a href={`/${slug}/best-states-for-salary`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Rankings</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {rankingData.map((r) => (
            <a key={r.label} href={r.href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="text-lg font-semibold text-zinc-950">{r.label}</h3>
              <p className="mt-1 text-sm text-zinc-600">Rankings based on official government data</p>
            </a>
          ))}
        </div>
      </section>

      {/* 10. COMPARE COUNTRIES */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Compare Financial Metrics Across Countries</h2>
        <p className="mb-4 text-sm text-zinc-600">See how salaries, taxes, and costs differ between countries using our comparison tools.</p>
        <div className="flex flex-wrap gap-2">
          {tools.slice(0, 4).map((tool) => (
            <a key={tool.id} href={`/${slug}/tools/${tool.slug}/compare`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950">
              {tool.name} &mdash; Compare
            </a>
          ))}
        </div>
      </section>

      {/* 11. FINANCIAL GUIDES */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Financial Guides for {name}</h2>
            <p className="mt-1 text-sm text-zinc-600">Comprehensive guides to help you make better financial decisions</p>
          </div>
          <a href={`/${slug}/guides`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Guides</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <a key={guide.id} href={`/${slug}/guides/${guide.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{guide.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">{guide.description.replace("{country}", name)}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 12. FINANCIAL GLOSSARY */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Financial Glossary</h2>
            <p className="mt-1 text-sm text-zinc-600">Clear definitions of essential financial terms with real examples</p>
          </div>
          <a href={`/${slug}/glossary`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Terms</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossaryEntries.slice(0, 6).map((entry) => (
            <a key={entry.slug} href={`/${slug}/glossary/${entry.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{entry.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{entry.term}</h3>
              <p className="text-sm leading-6 text-zinc-600">{entry.definition.substring(0, 120)}...</p>
            </a>
          ))}
        </div>
      </section>

      {/* 13. LATEST UPDATES */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Latest Updates</h2>
            <p className="mt-1 text-sm text-zinc-600">Recent changes to data, tools, and content</p>
          </div>
          <a href={`/${slug}/updates`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Updates</a>
        </div>
        <div className="space-y-3">
          {latestUpdates.map((update, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="mb-1 flex items-center gap-2 text-xs text-zinc-500">
                <time>{update.date}</time>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700">{update.category}</span>
              </div>
              <p className="text-sm font-medium text-zinc-950">{update.title}</p>
              <p className="mt-1 text-xs text-zinc-600">{update.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 14. METHODOLOGY & SOURCES */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Methodology &amp; Official Sources</h2>
        <p className="mb-4 text-sm text-zinc-600 leading-relaxed">
          Olikit uses data exclusively from official government publications. Tax brackets, contribution rates, and financial thresholds are sourced directly from national revenue authorities for each of our 7 supported countries. Every calculator is tested against published government examples to ensure accuracy.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IRS", desc: "US tax brackets and regulations" },
            { name: "HMRC", desc: "UK tax rates and allowances" },
            { name: "ATO", desc: "Australian tax and super rates" },
            { name: "CRA", desc: "Canadian tax brackets and CPP/EI" },
            { name: "IRD", desc: "New Zealand tax rates" },
            { name: "Income Tax Dept", desc: "India tax slabs and deductions" },
            { name: "IRAS", desc: "Singapore tax rates" },
            { name: "CPF Board", desc: "Singapore CPF contributions" },
          ].map((source) => (
            <div key={source.name} className="rounded-md bg-zinc-50 p-3">
              <p className="font-semibold text-zinc-950 text-sm">{source.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{source.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">About Our Methodology</Link>
          <Link href={`/${slug}/financial-data`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Financial Data Library</Link>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { q: "What calculators does Olikit offer?", a: "Olikit offers free salary, tax, mortgage, investment, retirement, business loan, and profit margin calculators. Each calculator is fully localized for the United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore." },
            { q: "Are Olikit calculators really free?", a: "Yes, all calculators are completely free to use. We do not require accounts, email sign-ups, or personal information. Olikit is ad-supported to keep all tools free." },
            { q: "How often is financial data updated?", a: "Financial data is reviewed and updated at least annually following each country's budget cycle. Emergency updates are published within 48 hours of any unannounced rate changes." },
            { q: "Where does Olikit get its data?", a: "All data is sourced from official government publications including IRS, HMRC, ATO, CRA, IRD, Income Tax Department India, IRAS, and CPF Board. Every tax rate and threshold is traceable to its original source." },
            { q: "Can I compare salary data across states?", a: "Yes. We provide average salary data, cost of living comparisons, and salary vs. cost of living analysis for 10 US states. Our state rankings page compares all states by salary, cost of living, retirement, and home affordability." },
          ].map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.q}</summary>
              <p className="mt-2 text-zinc-500">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 16. FOOTER — handled by locale layout */}
    </div>
  )
}
