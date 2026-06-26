import type { Metadata } from "next"
import { locales } from "@/lib/seo/locales"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { formatSalary as fmtSalary, formatSalaryFull as fmtSalaryFull, slugToCurrency } from "@/lib/currency"

const se = getProfession("software-engineer")!

const COUNTRY_ROUTES: Record<string, string> = {
  us: "us",
  uk: "uk",
  au: "australia",
  ca: "canada",
  nz: "new-zealand",
  sg: "singapore",
  in: "india",
}

function formatSalary(value: number, countrySlug: string): string {
  return fmtSalary(value, slugToCurrency(countrySlug), { compact: value >= 100000 })
}

function formatSalaryFull(value: number, countrySlug: string): string {
  return fmtSalary(value, slugToCurrency(countrySlug))
}

function getSalaryData(countrySlug: string) {
  const salary = se.salaries[countrySlug]
  if (!salary) return null
  const loc = locales.find((l) => l.slug === countrySlug)
  return { salary, name: loc?.name || countrySlug, flag: COUNTRY_FLAGS[countrySlug] || "", slug: countrySlug }
}

export const metadata: Metadata = {
  title: "Software Engineer Salary, Career Growth and Compensation Intelligence",
  description: "Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.",
  alternates: { canonical: `${SITE_URL}/professions/software-engineer` },
  openGraph: {
    title: "Software Engineer Salary, Career Growth and Compensation Intelligence",
    description: "Compare software engineer salaries across countries and evaluate career progression.",
    url: `${SITE_URL}/professions/software-engineer`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
}

const careerLevels = [
  {
    level: "Entry-Level Software Engineer",
    exp: "0\u20132 Years",
    desc: "Entry-level software engineers focus on developing technical foundations, learning development practices and contributing to software projects under the guidance of experienced team members. Compensation typically reflects education, internship experience and local market demand.",
  },
  {
    level: "Mid-Level Software Engineer",
    exp: "3\u20137 Years",
    desc: "Mid-level engineers are expected to work independently, design solutions and contribute to larger software systems. Many engineers experience substantial salary growth during this stage of their careers.",
  },
  {
    level: "Senior Software Engineer",
    exp: "8\u201315 Years",
    desc: "Senior engineers lead projects, mentor team members and influence technical decisions. Compensation often increases significantly due to greater responsibility and specialized expertise.",
  },
  {
    level: "Staff and Principal Engineer",
    exp: "15+ Years",
    desc: "Staff and Principal Engineers provide technical leadership across organizations and frequently influence long-term engineering strategy. These roles often rank among the highest-paying positions in engineering organizations.",
  },
]

const topCountries = [
  { rank: 1, slug: "us", name: "United States" },
  { rank: 2, slug: "au", name: "Australia" },
  { rank: 3, slug: "ca", name: "Canada" },
  { rank: 4, slug: "sg", name: "Singapore" },
  { rank: 5, slug: "uk", name: "United Kingdom" },
  { rank: 6, slug: "nz", name: "New Zealand" },
  { rank: 7, slug: "in", name: "India" },
]

const topCities = [
  "San Francisco",
  "Seattle",
  "New York",
  "Singapore",
  "Sydney",
  "Toronto",
  "Bengaluru",
]

const relatedProfessions = [
  { name: "Data Scientist", href: "/us/salary/data-scientist" },
  { name: "Product Manager", href: "/us/salary/product-manager" },
  { name: "Cybersecurity Analyst", href: "/us/salary/cybersecurity-analyst" },
  { name: "DevOps Engineer", href: "/us/salary/devops-engineer" },
  { name: "Machine Learning Engineer", href: "/us/salary/machine-learning-engineer" },
]

export default function SoftwareEngineerHub() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary, Career Growth and Compensation Intelligence",
    "Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.",
    "/professions/software-engineer",
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer", url: `${SITE_URL}/professions/software-engineer` },
  ])

  const faqSchema = buildFaqJsonLd([
    { question: "What is a software engineer?", answer: "A software engineer designs, develops, tests and maintains software systems used by businesses, governments and consumers." },
    { question: "Is software engineering still a good career?", answer: "Software engineering remains one of the strongest professional careers globally due to high demand, strong salary growth, remote work opportunities and continued digital transformation." },
    { question: "Which country pays software engineers the most?", answer: "The United States frequently reports some of the highest software engineering salaries, although taxes, healthcare costs and living expenses should also be considered." },
    { question: "Which city pays software engineers the most?", answer: "Major technology hubs such as San Francisco, Seattle, New York, Singapore, Sydney and Toronto frequently report strong compensation levels for experienced software engineers." },
  ])

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="space-y-16">
        {/* HERO */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Olikit Global &mdash; Profession Intelligence
          </p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Software Engineer Salary, Career Growth and Compensation Intelligence
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
            Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            Olikit combines salary benchmarks, affordability research, purchasing power analysis and career insights to help software engineers make informed financial and professional decisions.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-500">
            All data draws from government-sourced salary surveys, tax authority publications, and publicly available compensation research. Calculators apply current tax brackets, social contribution rates, and cost-of-living indices for each country.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/compare" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Compare Countries</a>
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/us/tools/salary-calculator?mode=after-tax" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary After Tax</a>
            <a href="/us/guides" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Cost of Living Calculator</a>
          </div>
        </section>

        {/* FINANCIAL SNAPSHOT */}
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-zinc-950">Software Engineer Financial Snapshot</h2>
          <p className="mb-4 text-sm leading-7 text-zinc-600">
            Software engineering remains one of the most sought-after professional careers globally.
            Demand for software engineers continues across technology companies, financial institutions, healthcare organizations, government agencies and rapidly growing startups.
            Compensation varies significantly depending on experience, specialization, location and industry.
            While some countries offer higher salaries, taxes, housing costs and purchasing power can dramatically influence real financial outcomes.
            Understanding compensation requires evaluating more than salary alone.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Most Researched Profession</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Software Engineer</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Highest Paying Market</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">United States</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Fastest Growing Market</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">India</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Strongest Purchasing Power</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Varies by city and tax burden</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Most Competitive Hub</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">San Francisco</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Global Demand</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Very High</p>
            </div>
          </div>
        </section>

        {/* AI QUICK ANSWERS */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-lg font-semibold text-zinc-950">AI Quick Answers</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-zinc-950">What is a software engineer?</p>
              <p className="mt-0.5 text-sm text-zinc-500">A software engineer designs, develops, tests and maintains software systems used by businesses, governments and consumers. Software engineers work across web development, mobile applications, cloud computing, cybersecurity, artificial intelligence and enterprise software.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-950">Is software engineering still a good career?</p>
              <p className="mt-0.5 text-sm text-zinc-500">Software engineering remains one of the strongest professional careers globally due to high demand, strong salary growth, remote work opportunities and continued digital transformation across industries.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-950">Which country pays software engineers the most?</p>
              <p className="mt-0.5 text-sm text-zinc-500">The United States frequently reports some of the highest software engineering salaries, although taxes, healthcare costs and living expenses should also be considered.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-950">Which city pays software engineers the most?</p>
              <p className="mt-0.5 text-sm text-zinc-500">Major technology hubs such as San Francisco, Seattle, New York, Singapore, Sydney and Toronto frequently report strong compensation levels for experienced software engineers.</p>
            </div>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="mb-1.5 text-base font-semibold text-zinc-950">High Global Demand</h3>
              <p className="text-sm leading-6 text-zinc-600">Software engineers remain in demand across nearly every major economy.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="mb-1.5 text-base font-semibold text-zinc-950">Compensation Varies Widely</h3>
              <p className="text-sm leading-6 text-zinc-600">Salary levels differ significantly between countries, cities and industries.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="mb-1.5 text-base font-semibold text-zinc-950">Purchasing Power Matters</h3>
              <p className="text-sm leading-6 text-zinc-600">Higher salaries do not always result in stronger financial outcomes once taxes and living costs are considered.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="mb-1.5 text-base font-semibold text-zinc-950">Career Growth Is Strong</h3>
              <p className="text-sm leading-6 text-zinc-600">Software engineering continues to provide opportunities for progression into senior engineering, architecture, management and executive roles.</p>
            </div>
          </div>
        </section>

        {/* SALARY LANDSCAPE */}
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Global Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Software engineering has become one of the most globally transferable professional careers.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Skilled engineers can work across industries and geographic regions while applying similar technical skills.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Technology companies continue to compete aggressively for experienced engineers, particularly in software development, cloud infrastructure, cybersecurity, artificial intelligence and machine learning.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            As demand continues to grow, software engineers often benefit from strong salary growth, international mobility and long-term career opportunities.
          </p>
        </section>

        {/* CAREER LEVELS */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Software Engineer Career Levels</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {careerLevels.map((cl) => (
              <div key={cl.level} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="mb-1 text-base font-semibold text-zinc-950">{cl.level}</h3>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-600">{cl.exp}</p>
                <p className="text-sm leading-6 text-zinc-600">{cl.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHEST PAYING COUNTRIES */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Highest Paying Countries for Software Engineers</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Average Salary</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Entry Level</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Experienced</th>
                </tr>
              </thead>
              <tbody>
                {topCountries.map((c, i) => {
                  const data = getSalaryData(c.slug)
                  if (!data) return null
                  return (
                    <tr key={c.slug} className="border-t border-zinc-100">
                      <td className="px-4 py-3 text-zinc-500">{i === 0 ? "\u{1F947}" : i === 1 ? "\u{1F948}" : i === 2 ? "\u{1F949}" : `#${i + 1}`}</td>
                      <td className="px-4 py-3">
                        <a href={`/software-engineer-salary-${COUNTRY_ROUTES[c.slug]}`} className="font-medium text-zinc-950 hover:text-emerald-600">
                          {data.flag} {data.name}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-zinc-950">{formatSalaryFull(data.salary.average, c.slug)}</td>
                      <td className="px-4 py-3 text-right text-zinc-600">{formatSalary(data.salary.entryLevel, c.slug)}</td>
                      <td className="px-4 py-3 text-right text-zinc-600">{formatSalary(data.salary.experienced, c.slug)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Salary comparisons should always be evaluated alongside taxes, housing costs and purchasing power.</p>
        </section>

        {/* HIGHEST PAYING CITIES */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Highest Paying Cities for Software Engineers</h2>
          <p className="mb-4 text-sm text-zinc-600">These cities frequently attract major technology employers and highly skilled software professionals.</p>
          <div className="flex flex-wrap gap-2">
            {topCities.map((city) => (
              <span key={city} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">{city}</span>
            ))}
          </div>
        </section>

        {/* SALARY BY COUNTRY */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Software Engineer Salary by Country</h2>
          <p className="mb-4 text-sm text-zinc-600">Explore detailed compensation analysis for software engineers in:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locales.filter((l) => se.salaries[l.slug]).map((loc) => {
              const route = COUNTRY_ROUTES[loc.slug]
              return (
                <a key={loc.slug} href={`/software-engineer-salary-${route}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <p className="mb-1 text-2xl">{COUNTRY_FLAGS[loc.slug]}</p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{loc.name}</h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    Average: <strong>{formatSalaryFull(se.salaries[loc.slug].average, loc.slug)}</strong>
                  </p>
                  <p className="text-xs text-zinc-500">
                    Entry: {formatSalary(se.salaries[loc.slug].entryLevel, loc.slug)} &middot; Experienced: {formatSalary(se.salaries[loc.slug].experienced, loc.slug)}
                  </p>
                </a>
              )
            })}
          </div>
        </section>

        {/* RELATED PROFESSIONS */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Related Professions</h2>
          <p className="mb-4 text-sm text-zinc-600">Professionals researching software engineering compensation often compare:</p>
          <div className="flex flex-wrap gap-2">
            {relatedProfessions.map((p) => (
              <a key={p.name} href={p.href} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-950">
                {p.name}
              </a>
            ))}
          </div>
        </section>

        {/* FEATURED RESEARCH */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Research</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="/rankings/best-countries-for-software-engineers" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Best Countries for Software Engineers</h3>
              <p className="text-sm leading-6 text-zinc-600">Compare compensation, taxes, cost of living and purchasing power across major technology markets.</p>
            </a>
            <a href="/rankings/highest-paying-cities-software-engineers" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Highest Paying Cities for Software Engineers</h3>
              <p className="text-sm leading-6 text-zinc-600">Explore city-level compensation trends across leading technology hubs.</p>
            </a>
            <a href="/research/software-engineer-salary-index-2026" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Software Engineer Salary Index 2026</h3>
              <p className="text-sm leading-6 text-zinc-600">In-depth global salary analysis covering software engineering compensation trends and international comparisons.</p>
            </a>
            <a href="/research/software-engineer-salary-index-2026" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Remote Software Engineer Salary Report</h3>
              <p className="text-sm leading-6 text-zinc-600">Research how remote work is influencing compensation and career opportunities globally.</p>
            </a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
