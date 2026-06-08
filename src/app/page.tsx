import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo/constants"
import { getDateModified } from "@/lib/seo/freshness"
import { professions, getProfession } from "@/lib/content/professions-data"

export const metadata: Metadata = {
  title: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
  description:
    "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
    description:
      "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
    url: SITE_URL,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
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

const CURRENCY_SYMBOLS: Record<string, string> = {
  us: "$", uk: "£", au: "A$", ca: "C$", nz: "NZ$", in: "₹", sg: "S$",
}

const COUNTRY_FLAGS_MAP: Record<string, string> = {
  us: "🇺🇸", uk: "🇬🇧", au: "🇦🇺", ca: "🇨🇦", nz: "🇳🇿", in: "🇮🇳", sg: "🇸🇬",
}

function formatSalary(amount: number, countrySlug: string): string {
  const symbol = CURRENCY_SYMBOLS[countrySlug] || "$"
  if (countrySlug === "in") {
    return `${symbol}${(amount / 100000).toFixed(1)}L`
  }
  return `${symbol}${amount.toLocaleString()}`
}

const seProf = getProfession("software-engineer")!
const docProf = getProfession("doctor")!
const rnProf = getProfession("registered-nurse")!

const professionSnapshots = [
  {
    name: seProf.name,
    rows: [
      { flag: COUNTRY_FLAGS_MAP.us, country: "United States", salary: formatSalary(seProf.salaries.us.average, "us") },
      { flag: COUNTRY_FLAGS_MAP.uk, country: "United Kingdom", salary: formatSalary(seProf.salaries.uk.average, "uk") },
      { flag: COUNTRY_FLAGS_MAP.au, country: "Australia", salary: formatSalary(seProf.salaries.au.average, "au") },
    ],
  },
  {
    name: docProf.name,
    rows: [
      { flag: COUNTRY_FLAGS_MAP.us, country: "United States", salary: formatSalary(docProf.salaries.us.average, "us") },
      { flag: COUNTRY_FLAGS_MAP.ca, country: "Canada", salary: formatSalary(docProf.salaries.ca.average, "ca") },
      { flag: COUNTRY_FLAGS_MAP.uk, country: "United Kingdom", salary: formatSalary(docProf.salaries.uk.average, "uk") },
    ],
  },
  {
    name: rnProf.name,
    rows: [
      { flag: COUNTRY_FLAGS_MAP.au, country: "Australia", salary: formatSalary(rnProf.salaries.au.average, "au") },
      { flag: COUNTRY_FLAGS_MAP.ca, country: "Canada", salary: formatSalary(rnProf.salaries.ca.average, "ca") },
      { flag: COUNTRY_FLAGS_MAP.uk, country: "United Kingdom", salary: formatSalary(rnProf.salaries.uk.average, "uk") },
    ],
  },
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

const countryData = [
  { slug: "us", name: "United States", flag: "🇺🇸", description: "Compare salaries, calculate take-home pay, benchmark professions and understand federal and state taxes." },
  { slug: "uk", name: "United Kingdom", flag: "🇬🇧", description: "Compare salaries, estimate take-home pay and understand UK income tax and National Insurance contributions." },
  { slug: "au", name: "Australia", flag: "🇦🇺", description: "Estimate take-home pay, compare earnings and understand Australian tax obligations and superannuation impacts." },
  { slug: "ca", name: "Canada", flag: "🇨🇦", description: "Compare salaries, estimate taxes and benchmark compensation across Canadian provinces and professions." },
  { slug: "in", name: "India", flag: "🇮🇳", description: "Calculate income tax, compare salaries and understand how tax regimes affect take-home pay." },
  { slug: "nz", name: "New Zealand", flag: "🇳🇿", description: "Estimate net salary, compare earnings and understand New Zealand tax obligations and deductions." },
  { slug: "sg", name: "Singapore", flag: "🇸🇬", description: "Compare salaries, estimate taxes and understand compensation outcomes in one of Asia's leading financial hubs." },
]

const countryDescriptions: Record<string, string> = {
  us: "Compare salaries, calculate take-home pay, benchmark professions and understand federal and state taxes.",
  uk: "Compare salaries, estimate take-home pay and understand UK income tax and National Insurance contributions.",
  au: "Estimate take-home pay, compare earnings and understand Australian tax obligations and superannuation impacts.",
  ca: "Compare salaries, estimate taxes and benchmark compensation across Canadian provinces and professions.",
  in: "Calculate income tax, compare salaries and understand how tax regimes affect take-home pay.",
  nz: "Estimate net salary, compare earnings and understand New Zealand tax obligations and deductions.",
  sg: "Compare salaries, estimate taxes and understand compensation outcomes in one of Asia\u2019s leading financial hubs.",
}

export default function GlobalHomePage() {

  return (
    <div className="space-y-8 sm:space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* SECTION 1 — HERO */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
          <span className="text-sm">🌍</span>
          SALARY, TAX & COST-OF-LIVING PLATFORM
        </span>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl leading-tight">
          Compare Salaries, Taxes and Cost of Living Across Major Economies
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.
        </p>

        {/* SEE HOW FAR YOUR SALARY GOES */}
        <p className="mt-6 max-w-[700px] text-lg font-semibold leading-7 text-zinc-700">
          See Where Your Salary Goes Further
        </p>
        <p className="mt-1 max-w-[700px] text-base leading-7 text-zinc-500">
          See where your income goes further, how much tax you&apos;ll pay, and how living costs affect your real purchasing power.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/compare"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm"
          >
            Compare Countries
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/professions"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300"
          >
            Explore Salary Data
          </a>
          <a
            href="/us/tools/salary-calculator"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300"
          >
            Calculate Take-Home Pay
          </a>
        </div>

        {/* P10 — TRUST MICRO-SIGNALS */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Government Tax Data
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Transparent Methodology
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Independent Research
          </span>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-600">
          <span>Government Tax Data</span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>Salary Intelligence</span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>Compensation Research</span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>Cost-of-Living Analysis</span>
        </div>
      </section>

      {/* SECTION 1b — GLOBAL SALARY SNAPSHOT */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Global Salary Snapshot
        </h2>
        <p className="mb-5 text-sm leading-6 text-zinc-600 max-w-2xl">
          Real salary data from the Olikit platform across major economies.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professionSnapshots.map((prof) => (
            <div
              key={prof.name}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-3 font-semibold text-zinc-950">{prof.name}</h3>
              <div className="space-y-2">
                {prof.rows.map((row) => (
                  <div key={row.country} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-sm text-zinc-600">
                      <span>{row.flag}</span>
                      <span>{row.country}</span>
                    </span>
                    <span className="text-sm font-semibold text-zinc-950">{row.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — WHAT IS OLIKIT */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            Financial Intelligence for Real-World Decisions
          </h2>
          <div className="mt-5 space-y-3 text-base leading-7 text-zinc-600">
            <p>
              Olikit helps people understand how salaries, taxes and living costs affect their financial outcomes. Whether you are evaluating a job offer, planning an international move, comparing career opportunities or researching compensation trends, Olikit provides the tools and data needed to make informed decisions.
            </p>
            <p>
              Unlike generic calculators, Olikit combines salary benchmarks, tax calculations, compensation research and cost-of-living insights into a single platform designed for professionals, job seekers, businesses, remote workers and expatriates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2b — FEATURED INSIGHTS */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Featured Insights
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-zinc-950">{insight.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600">{insight.summary}</p>
              <a
                href={insight.href}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {insight.cta}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — WHY PEOPLE USE OLIKIT */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl text-center">
          Why People Use Olikit
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Compare Financial Outcomes", desc: "Understand how taxes, salaries and living costs differ between countries and professions." },
            { title: "Evaluate Job Offers", desc: "See how much of your salary you keep after tax and mandatory deductions." },
            { title: "Plan International Moves", desc: "Compare earning potential and affordability before relocating." },
            { title: "Benchmark Careers", desc: "Research salary ranges, compensation trends and profession-specific earnings." },
            { title: "Understand Taxes", desc: "Estimate take-home pay using country-specific tax rules and thresholds." },
            { title: "Make Better Decisions", desc: "Use public data and transparent methodologies instead of guesswork." },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-950">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — EXPLORE BY COUNTRY */}
      <section>
        <h2 className="mb-1 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Localized Financial Intelligence
        </h2>
        <p className="mb-5 text-sm text-zinc-600">
          Every country has different tax systems, salary expectations and living costs. Explore country-specific calculators, guides and compensation data.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countryData.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{c.flag}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-0.5 text-xs leading-5 text-zinc-500">
                    {countryDescriptions[c.slug] || c.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">
                    Explore Country
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 6 — WHY TRUST OLIKIT */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl mb-6">
            Transparent Data. Clear Methodology. Independent Research.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Government-Sourced Data", desc: "Tax rates, thresholds and regulations are sourced directly from official tax authorities and government publications." },
            { title: "Transparent Methodology", desc: "Calculation methods and assumptions are publicly documented and regularly reviewed." },
            { title: "Compensation Research", desc: "Salary benchmarks are derived from labor statistics, compensation studies and publicly available employment data." },
            { title: "Independent Analysis", desc: "Rankings, comparisons and guides are produced independently and are not influenced by advertisers." },
            { title: "Regular Updates", desc: "Tax and salary datasets are reviewed whenever significant updates become available." },
            { title: "Public Verification", desc: "Users can verify major datasets through publicly available government and statistical sources." },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="font-semibold text-zinc-950">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — GLOBAL COMPARISONS */}
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

      {/* SECTION 8 — BEYOND CALCULATORS */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Beyond Calculators
        </h2>
        <p className="mb-5 text-sm leading-6 text-zinc-600 max-w-2xl">
          Olikit publishes salary research, tax analysis, compensation reports and cost-of-living studies designed to help professionals, businesses and researchers understand global financial trends.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="/rankings"
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
          >
            <p className="mb-2 text-lg">🏆</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Salary Rankings</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Compare earning potential across countries, professions and industries.
            </p>
          </a>
          <a
            href="/compare"
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
          >
            <p className="mb-2 text-lg">📊</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Tax Comparisons</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Understand how tax systems influence take-home pay and disposable income.
            </p>
          </a>
          <a
            href="/research"
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
          >
            <p className="mb-2 text-lg">🏠</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Cost-of-Living Research</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Compare affordability, purchasing power and living expenses.
            </p>
          </a>
          <a
            href="/professions"
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
          >
            <p className="mb-2 text-lg">💼</p>
            <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">Compensation Intelligence</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Explore salary trends, compensation benchmarks and profession data.
            </p>
          </a>
        </div>
      </section>

      {/* SECTION 4b — EXPLORE SALARIES BY PROFESSION */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Explore Salaries by Profession
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularProfessionCards.map((prof) => (
            <a
              key={prof.name}
              href="/professions"
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                {prof.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Available across supported countries
              </p>
              <p className="mt-0.5 text-xs leading-5 text-zinc-400">
                Compare salaries, taxes and take-home pay
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 9 — DATA SOURCES */}
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
            <div key={source.name} className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
              <p className="text-sm font-medium text-zinc-950">{source.name}</p>
              <p className="text-xs text-zinc-500">{source.country}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5b — TRUSTED FINANCIAL INTELLIGENCE (replaces 'What Makes Olikit Different?') */}
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

      {/* P7 — LAST UPDATED TRUST LINE */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-500">
        <span>Updated: June 2026</span>
        <span className="text-zinc-300">·</span>
        <a href="/methodology" className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Methodology</a>
        <span className="text-zinc-300">·</span>
        <a href="/data-sources" className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Data Sources</a>
        <span className="text-zinc-300">·</span>
        <a href="/editorial-policy" className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Editorial Policy</a>
      </div>

      {/* SECTION 3b — POPULAR RESEARCH & RANKINGS */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Popular Research &amp; Rankings
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularResearchLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
            >
              <h3 className="font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                {link.label}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 6b — FAQS */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <h2 className="mb-5 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200">
          {[
            { q: "What is Olikit?", a: "Olikit is a global salary, tax and cost-of-living intelligence platform that helps professionals compare financial outcomes across countries using publicly available data and transparent methodologies." },
            { q: "How are salaries calculated?", a: "Salary estimates are derived from labor statistics, compensation surveys and publicly available employment data, then normalized for comparison across countries." },
            { q: "How are taxes calculated?", a: "Tax calculations use official tax brackets and rules published by government tax authorities including the IRS, HMRC, CRA, ATO, IRD and IRAS." },
            { q: "Which countries does Olikit cover?", a: "Olikit currently provides salary, tax and financial intelligence across the United States, United Kingdom, Australia, Canada, New Zealand, India and Singapore." },
            { q: "Can I compare countries?", a: "Yes. Olikit provides salary comparisons, tax comparisons and financial benchmarking tools to evaluate outcomes across different countries." },
            { q: "How often is the data updated?", a: "Tax and salary datasets are reviewed regularly and updated when significant government or statistical revisions become available." },
            { q: "Where does Olikit get its data?", a: "Olikit uses publicly available information from government tax authorities, labor statistics agencies and official economic publications." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-zinc-100 last:border-b-0 px-5 py-4 sm:px-6 sm:py-5">
              <h3 className="text-base font-semibold text-zinc-950">{faq.q}</h3>
              <p className="mt-1 text-sm leading-6 text-zinc-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
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
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm"
            >
              Compare Countries
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/research"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300"
            >
              Explore Financial Intelligence
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


