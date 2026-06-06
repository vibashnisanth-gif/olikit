import type { Metadata } from "next"
import Link from "next/link"
import { locales } from "@/lib/seo/locales"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { glossaryEntries } from "@/lib/content/glossary"
import { researchReports } from "@/lib/content/research"
import { getLatestUpdates } from "@/lib/content/updates"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"
import { buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { CookieConsent } from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: "Olikit — Free Financial Calculators, Salary Tools & Cost of Living Insights",
  description:
    "Free finance, salary, tax, mortgage and business calculators for the United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. Compare financial metrics across 7 countries with data from official government sources.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Olikit — Free Financial Calculators & Salary Tools",
    description:
      "Free financial calculators, salary tools, and cost of living insights for 7 countries. Make better financial decisions with data from official government sources.",
    url: SITE_URL,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const countryData = [
  { slug: "us", name: "United States", flag: "🇺🇸" },
  { slug: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { slug: "au", name: "Australia", flag: "🇦🇺" },
  { slug: "ca", name: "Canada", flag: "🇨🇦" },
  { slug: "in", name: "India", flag: "🇮🇳" },
  { slug: "nz", name: "New Zealand", flag: "🇳🇿" },
  { slug: "sg", name: "Singapore", flag: "🇸🇬" },
]

export default function GlobalHomePage() {
  const lastUpdated = getLastUpdated()
  const latestUpdates = getLatestUpdates(3)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
    description: "Free financial calculators, salary tools, and cost of living insights for 7 countries.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/us/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
  const faqJsonLd = buildFaqJsonLd([
    { question: "What is Olikit?", answer: "Olikit is a free financial platform offering salary calculators, tax calculators, mortgage calculators, and cost of living tools for 7 countries: United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. All data comes from official government sources." },
    { question: "Which countries are supported?", answer: "Olikit supports 7 countries: United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. Each country has localized calculators, tax rates, and financial data." },
    { question: "How often is data updated?", answer: "Financial data is reviewed and updated at least annually following each country's budget cycle. Emergency updates are published within 48 hours of any unannounced rate changes. Last updated: June 2026." },
    { question: "What calculators are available?", answer: "Olikit offers salary, tax, mortgage, investment, retirement, business loan, and profit margin calculators. Each calculator is fully localized for all 7 supported countries with current tax rates, brackets, and financial thresholds." },
    { question: "What sources are used?", answer: "All data is sourced exclusively from official government publications: IRS (US), HMRC (UK), ATO (Australia), CRA (Canada), IRD (New Zealand), Income Tax Department (India), IRAS (Singapore), and CPF Board (Singapore)." },
    { question: "How accurate are the calculations?", answer: "Calculations are tested against published government examples to ensure accuracy. Tax brackets, contribution rates, and financial thresholds match the latest official figures for each country." },
    { question: "Are Olikit calculators really free?", answer: "Yes, all calculators are completely free to use. No accounts, email sign-ups, or personal information required. Olikit is ad-supported to keep all tools free." },
    { question: "Can I compare financial data across countries?", answer: "Yes. You can compare salary after tax, tax brackets, mortgage affordability, and cost of living across all 7 countries. Each country hub provides localized financial intelligence." },
  ])
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
  ])

  return (
    <div className="flex min-h-full flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-zinc-950">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">O</span>
            <span>Olikit</span>
          </Link>
          <div className="flex min-w-0 items-center gap-2 text-sm sm:gap-4">
            <Link href="/us" className="hidden text-zinc-600 transition-colors hover:text-zinc-950 sm:inline">United States</Link>
            <Link href="/uk" className="hidden text-zinc-600 transition-colors hover:text-zinc-950 md:inline">UK</Link>
            <Link href="/au" className="hidden text-zinc-600 transition-colors hover:text-zinc-950 md:inline">Australia</Link>
            <Link href="/ca" className="hidden text-zinc-600 transition-colors hover:text-zinc-950 md:inline">Canada</Link>
            <Link href="/about" className="hidden text-zinc-600 transition-colors hover:text-zinc-950 lg:inline">About</Link>
            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 sm:text-sm">
                🌐
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="invisible absolute right-0 top-full z-40 mt-1 w-44 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                {locales.map((l) => (
                  <Link key={l.slug} href={`/${l.slug}`} className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">{l.name}</Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">
        <div className="space-y-16">

          {/* 1. HERO */}
          <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Financial Calculators, Salary Tools & Cost of Living Insights
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
              Make better financial decisions using salary, tax, mortgage, retirement and cost-of-living tools backed by official government sources and transparent methodologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/us/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Start Calculating</Link>
              <Link href="#countries" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Choose Your Country</Link>
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
              645+ Pages
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

          {/* 3. COUNTRY HUB */}
          <section id="countries">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Choose Your Country</h2>
            <p className="mb-6 text-sm text-zinc-600">Select a country to access localized financial calculators, salary data, tax rates, and cost of living insights. Each country hub is tailored to its tax system, currency, and financial regulations.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {countryData.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-lg font-semibold text-zinc-950">{c.name}</h3>
                  </div>
                  <p className="text-sm text-zinc-500">Salary, Tax, Mortgage & Cost of Living tools</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 4. POPULAR CALCULATORS */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-zinc-950">Popular Financial Calculators</h2>
              <p className="mt-1 text-sm text-zinc-600">Free calculators localized for all 7 countries with current tax rates, brackets, and financial thresholds</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <Link key={tool.id} href={`/us/tools/${tool.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{tool.category}</p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{tool.description}</p>
                  <p className="mt-2 text-xs text-emerald-600 font-medium">Available in all 7 countries</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 5. GLOBAL COMPARISONS */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Compare Financial Metrics Across Countries</h2>
            <p className="mb-4 text-sm text-zinc-600">See how salaries, taxes, mortgage costs, and cost of living differ between countries. Make informed decisions when relocating, investing, or planning internationally.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/us/tools/salary-calculator" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">US vs UK Salary Comparison</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare take-home pay after taxes between the United States and United Kingdom.</p>
              </Link>
              <Link href="/us/tools/salary-calculator" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">US vs Canada Salary Comparison</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare salary after tax between the United States and Canada.</p>
              </Link>
              <Link href="/ca/tools/salary-calculator" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">India vs Singapore Salary Comparison</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare tax rates and take-home pay between India and Singapore.</p>
              </Link>
              <Link href="/au/tools/salary-calculator" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">UK vs Australia Tax Comparison</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare income tax rates and brackets between the UK and Australia.</p>
              </Link>
              <Link href="/us/cost-of-living/california" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">Canada vs Australia Cost of Living</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare cost of living metrics between Canadian provinces and Australian states.</p>
              </Link>
              <Link href="/us/best-states-for-salary" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">US State Salary Rankings</h3>
                <p className="mt-1 text-sm text-zinc-600">Compare average salaries, cost of living, and affordability across all 50 US states.</p>
              </Link>
            </div>
          </section>

          {/* 6. FINANCIAL DATA LIBRARY */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Financial Data Library</h2>
                <p className="mt-1 text-sm text-zinc-600">Verified financial data from official government sources across 7 countries</p>
              </div>
              <Link href="/us/financial-data" className="shrink-0 text-sm font-medium text-blue-600 hover:underline">View All Data</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Salary Data", desc: "Average salary data, median incomes, and wage statistics from national statistical agencies", href: "/us/financial-data" },
                { title: "Cost of Living Data", desc: "Regional price parities, housing costs, and living expense indices by country", href: "/us/financial-data" },
                { title: "Tax Data", desc: "Income tax rates, brackets, deductions, and allowances from revenue authorities", href: "/us/financial-data" },
                { title: "Mortgage Data", desc: "Median property values, interest rates, and affordability metrics", href: "/us/financial-data" },
                { title: "Minimum Wage Data", desc: "Statutory minimum wage rates, overtime rules, and wage floor policies", href: "/us/financial-data" },
                { title: "Property Tax Data", desc: "Effective property tax rates, valuation methods, and relief programs", href: "/us/financial-data" },
              ].map((item) => (
                <Link key={item.title} href={item.href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 7. FINANCIAL GUIDES */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Financial Guides</h2>
                <p className="mt-1 text-sm text-zinc-600">Comprehensive guides covering salary, tax, mortgage, and retirement planning across 7 countries</p>
              </div>
              <Link href="/us/guides" className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Guides</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <Link key={guide.id} href={`/us/guides/${guide.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{guide.category}</p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{guide.description.replace("{country}", "each country")}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 8. FINANCIAL GLOSSARY */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Financial Glossary</h2>
                <p className="mt-1 text-sm text-zinc-600">Clear definitions of essential financial terms with practical examples</p>
              </div>
              <Link href="/us/glossary" className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Terms</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {glossaryEntries.slice(0, 6).map((entry) => (
                <Link key={entry.slug} href={`/us/glossary/${entry.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{entry.category}</p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{entry.term}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{entry.definition.substring(0, 120)}...</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 9. RESEARCH CENTER */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Research & Insights Center</h2>
                <p className="mt-1 text-sm text-zinc-600">Data-driven research reports on salary trends, housing markets, and cost of living</p>
              </div>
              <Link href="/us/research" className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Reports</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {researchReports.slice(0, 3).map((report) => (
                <Link key={report.slug} href={`/us/research/${report.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">Research Report</p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{report.title}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{report.metaDescription.substring(0, 120)}...</p>
                  <p className="mt-2 text-xs text-zinc-400">Updated: {report.lastUpdated}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 10. LATEST UPDATES */}
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Latest Updates</h2>
                <p className="mt-1 text-sm text-zinc-600">Recent changes to data, tools, and content across all supported countries</p>
              </div>
              <Link href="/us/updates" className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All Updates</Link>
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

          {/* 11. METHODOLOGY & SOURCES */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Methodology & Official Sources</h2>
            <p className="mb-4 text-sm text-zinc-600 leading-relaxed">
              Olikit uses data exclusively from official government publications. Tax brackets, contribution rates, and financial thresholds are sourced directly from national revenue authorities for each of our 7 supported countries. Every calculator is tested against published government examples to ensure accuracy. Data is reviewed and updated at least annually, with emergency updates published within 48 hours of any unannounced rate changes.
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
              <Link href="/us/financial-data" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Financial Data Library</Link>
            </div>
          </section>

          {/* 12. FAQ */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is Olikit?", a: "Olikit is a free financial platform offering salary calculators, tax calculators, mortgage calculators, investment tools, and cost of living insights for 7 countries. All data comes from official government sources including IRS, HMRC, ATO, CRA, IRD, Income Tax Department India, IRAS, and CPF Board." },
                { q: "Which countries are supported?", a: "Olikit supports 7 countries: United States, United Kingdom, Australia, Canada, India, New Zealand, and Singapore. Each country has fully localized calculators, tax rates, financial thresholds, and currency support." },
                { q: "How often is financial data updated?", a: "Financial data is reviewed and updated at least annually following each country's budget cycle. Emergency updates are published within 48 hours of unannounced rate changes. All pages display their last updated date." },
                { q: "What calculators are available?", a: "Olikit offers salary, tax, mortgage, investment, retirement, business loan, and profit margin calculators. Each is fully localized with current tax brackets, contribution rates, and financial thresholds for all 7 countries." },
                { q: "What sources are used?", a: "All data is sourced from official government publications: IRS (US), Bureau of Labor Statistics (US), HMRC (UK), ATO (Australia), CRA (Canada), IRD (New Zealand), Income Tax Department (India), IRAS (Singapore), and CPF Board (Singapore)." },
                { q: "How accurate are calculations?", a: "Every calculator is tested against published government examples to ensure accuracy. Tax calculations match official tax tables, and all financial thresholds reflect the latest published figures." },
                { q: "Are Olikit calculators really free?", a: "Yes, all calculators are completely free. No accounts, email sign-ups, or personal information is required. Olikit is ad-supported to keep all tools free for everyone." },
                { q: "Can I compare financial data across countries?", a: "Yes. You can compare salary after tax, tax brackets, mortgage affordability, and cost of living across all 7 countries. Each country hub provides localized financial data and tools." },
              ].map((faq, i) => (
                <details key={i} className="text-sm">
                  <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.q}</summary>
                  <p className="mt-2 text-zinc-500">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* 13. FOOTER */}
        </div>
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="mt-auto border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">
                <Link href="/" className="hover:text-zinc-700">Olikit</Link>
              </h3>
              <p className="text-sm text-zinc-500">
                Free financial calculators, salary tools, and cost of living insights for 7 countries.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Countries</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/us" className="hover:text-zinc-950">United States</Link></li>
                <li><Link href="/uk" className="hover:text-zinc-950">United Kingdom</Link></li>
                <li><Link href="/au" className="hover:text-zinc-950">Australia</Link></li>
                <li><Link href="/ca" className="hover:text-zinc-950">Canada</Link></li>
                <li><Link href="/in" className="hover:text-zinc-950">India</Link></li>
                <li><Link href="/nz" className="hover:text-zinc-950">New Zealand</Link></li>
                <li><Link href="/sg" className="hover:text-zinc-950">Singapore</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Resources</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/us/salary" className="hover:text-zinc-950">Salary Hub</Link></li>
                <li><Link href="/us/best-states-for-salary" className="hover:text-zinc-950">State Rankings</Link></li>
                <li><Link href="/us/research" className="hover:text-zinc-950">Research Reports</Link></li>
                <li><Link href="/us/glossary" className="hover:text-zinc-950">Financial Glossary</Link></li>
                <li><Link href="/us/updates" className="hover:text-zinc-950">Latest Updates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/about" className="hover:text-zinc-950">About</Link></li>
                <li><Link href="/contact" className="hover:text-zinc-950">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-zinc-950">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-zinc-950">Terms of Use</Link></li>
                <li><Link href="/disclaimer" className="hover:text-zinc-950">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-100 pt-4 text-center text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Olikit. All rights reserved.
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  )
}
