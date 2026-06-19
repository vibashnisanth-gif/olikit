import type { Metadata } from "next"
import { locales } from "@/lib/seo/locales"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"
import { buildFaqJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"

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
  const loc = locales.find((l) => l.slug === countrySlug)
  const sym = loc?.currency.symbol || "$"
  if (countrySlug === "in") {
    return `${sym}${(value / 100000).toFixed(1)}L`
  }
  if (value >= 1000) {
    return `${sym}${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`
  }
  return `${sym}${value.toLocaleString()}`
}

function formatSalaryFull(value: number, countrySlug: string): string {
  const loc = locales.find((l) => l.slug === countrySlug)
  const sym = loc?.currency.symbol || "$"
  if (countrySlug === "in") {
    return `${sym}${(value / 100000).toFixed(1)}L`
  }
  return `${sym}${value.toLocaleString()}`
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
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Salary, Career Growth and Compensation Intelligence",
    description: "Compare software engineer salaries across countries and evaluate career progression. Research compensation, taxes, and purchasing power.",
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
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Software Engineer Salary, Career Growth and Compensation Intelligence",
    description: "Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.",
    url: "https://www.olikit.com/professions/software-engineer",
    datePublished: "2026-01-15",
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Organization", name: "Olikit", url: "https://www.olikit.com" },
    publisher: { "@type": "Organization", name: "Olikit", url: "https://www.olikit.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.olikit.com/professions/software-engineer" },
  })
}} />
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
            Whether you are choosing a career path, negotiating a salary, comparing international opportunities or planning a relocation, our calculators, rankings and research provide transparent insights built from publicly available and government-sourced information.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/compare" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Compare Countries</a>
            <a href="/tools/salary-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/compare" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Compare Salaries</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
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
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Most Researched Profession</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Software Engineer</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Highest Paying Market</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">United States</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Fastest Growing Market</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">India</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Strongest Purchasing Power</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Varies by city and tax burden</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Most Competitive Hub</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">San Francisco</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Global Demand</p>
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
                  <th className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
                  <th className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Average Salary</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Entry Level</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Experienced</th>
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
          <p className="mt-3 text-xs text-zinc-400">Salary comparisons should always be evaluated alongside taxes, housing costs and purchasing power.</p>
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
            <a href="/rankings" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Best Countries for Software Engineers</h3>
              <p className="text-sm leading-6 text-zinc-600">Compare compensation, taxes, cost of living and purchasing power across major technology markets.</p>
            </a>
            <a href="/rankings" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Highest Paying Cities for Software Engineers</h3>
              <p className="text-sm leading-6 text-zinc-600">Explore city-level compensation trends across leading technology hubs.</p>
            </a>
            <a href="/research" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Software Engineer Salary Index 2026</h3>
              <p className="text-sm leading-6 text-zinc-600">Comprehensive global salary analysis covering software engineering compensation trends and international comparisons.</p>
            </a>
            <a href="/research" className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">Remote Software Engineer Salary Report</h3>
              <p className="text-sm leading-6 text-zinc-600">Research how remote work is influencing compensation and career opportunities globally.</p>
            </a>
          </div>
        </section>
        <FAQSection
          title="Frequently Asked Questions"
          faqs={[
            { question: "What is the average software engineer salary globally?", answer: "Software engineer salaries vary significantly by country and experience level. The United States offers the highest average salary at approximately $120,000 per year for mid-level engineers. Other major markets include Australia (A$110,000), Canada (C$85,000), the United Kingdom (£55,000), Singapore (S$72,000), New Zealand (NZ$95,000), and India (₹12,00,000). Entry-level salaries are typically 40-60% of the average, while experienced engineers earn 1.5-2x the average." },
            { question: "Which country pays software engineers the highest salary?", answer: "The United States generally offers the highest absolute software engineering salaries, driven by venture capital density, a culture of equity compensation, and high demand across technology hubs. Senior software engineers at major US technology companies can earn total compensation packages exceeding $300,000 including equity. However, taxes, healthcare costs, and living expenses in major US cities significantly affect net take-home pay." },
            { question: "How does purchasing power affect software engineer compensation?", answer: "Purchasing Power Parity (PPP) is critical when comparing salaries across countries. A software engineer earning ₹12,00,000 in India may achieve a higher standard of living than an engineer earning $120,000 in San Francisco, due to dramatically lower housing and service costs. Our country-specific salary pages include purchasing power analysis to provide a complete financial picture." },
            { question: "What experience level earns the most as a software engineer?", answer: "Staff and Principal Engineers with 15+ years of experience earn the highest compensation, particularly at major technology companies where total compensation can exceed $500,000. Senior engineers (8-15 years) typically earn 1.5-2x mid-level compensation. The largest salary jumps often occur when moving from mid-level to senior, and from senior to staff." },
            { question: "Is software engineering still a good career in 2026?", answer: "Software engineering remains one of the strongest professional careers globally. Demand continues across all major economies, driven by digital transformation, artificial intelligence adoption, and the growing reliance on software across industries. While the market has normalized after the pandemic boom, skilled engineers continue to command strong salaries and excellent career mobility." },
            { question: "How do taxes affect software engineer take-home pay?", answer: "Taxes significantly affect real earnings. Engineers in high-tax jurisdictions like the UK, Canada, and Australia may lose 30-40% of gross income to progressive taxation. In contrast, Singapore's effective tax rate for mid-level engineers is approximately 7-11%, and some US states like Texas and Washington have no state income tax. Our salary calculators provide accurate net income estimates for each country." },
            { question: "What is the best country for software engineer career growth?", answer: "The United States offers the strongest career growth potential for software engineers, with the highest concentration of venture capital, hyperscale technology companies, and senior individual contributor tracks. Canada and Australia offer excellent work-life balance alongside strong career opportunities. India provides the fastest career velocity in terms of responsibility and promotion speed." },
            { question: "Do software engineers earn more than other tech professions?", answer: "Software engineers generally earn competitive salaries compared to other technology professions. Product managers earn similar compensation at senior levels. Data scientists often earn slightly more at the entry level but comparable mid-career salaries. Cybersecurity analysts earn competitive salaries with strong growth. DevOps and machine learning engineers often earn premiums over general software engineering roles." },
          ]}
        />
      </div>
    </Shell>
  )
}
