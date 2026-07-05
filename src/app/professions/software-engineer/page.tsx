import type {Metadata} from "next";
import {locales} from "@/lib/seo/locales";
import {getProfession} from "@/lib/content/professions-data";
import {COUNTRY_FLAGS, COUNTRY_NAMES} from "@/lib/content/country-registry";
import {SITE_URL} from "@/lib/seo/constants";
import {buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd} from "@/lib/seo/json-ld";
import {
  formatSalary as fmtSalary,
  formatSalaryFull as fmtSalaryFull,
  slugToCurrency,
} from "@/lib/currency";
import {FlagImage} from "@/components/ui/flag-image";

const se = getProfession("software-engineer")!;

const COUNTRY_ROUTES: Record<string, string> = {
  us: "us",
  uk: "uk",
  au: "australia",
  ca: "canada",
  nz: "new-zealand",
  sg: "singapore",
  in: "india",
};

function formatSalary(value: number, countrySlug: string): string {
  return fmtSalary(value, slugToCurrency(countrySlug), {compact: value >= 100000});
}

function formatSalaryFull(value: number, countrySlug: string): string {
  return fmtSalary(value, slugToCurrency(countrySlug));
}

function getSalaryData(countrySlug: string) {
  const salary = se.salaries[countrySlug];
  if (!salary) return null;
  const loc = locales.find((l) => l.slug === countrySlug);
  return {
    salary,
    name: loc?.name || countrySlug,
    flag: COUNTRY_FLAGS[countrySlug] || "",
    slug: countrySlug,
  };
}

export const metadata: Metadata = {
  title: "Software Engineer Salary, Career Growth and Compensation Intelligence",
  description:
    "Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.",
  alternates: {canonical: `${SITE_URL}/professions/software-engineer`},
  openGraph: {
    title: "Software Engineer Salary, Career Growth and Compensation Intelligence",
    description:
      "Compare software engineer salaries across countries and evaluate career progression.",
    url: `${SITE_URL}/professions/software-engineer`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
};

const careerLevels = [
  {
    level: "Junior Software Engineer",
    exp: "0\u20132 Years",
    desc: "Focuses on implementing features, fixing bugs and learning codebase conventions. Typical salary range: $55K\u2013$95K USD globally, with US roles starting at $80K\u2013$130K. The most important investment at this stage is learning system design fundamentals and version control workflows.",
  },
  {
    level: "Mid-Level Software Engineer",
    exp: "3\u20137 Years",
    desc: "Owns features end-to-end, mentors juniors and makes architectural decisions within their domain. This is where specialization begins to matter\u2014engineers who pick a high-demand specialization (ML infra, platform, security) see 15-30% higher comp than generalists at the same level.",
  },
  {
    level: "Senior Software Engineer",
    exp: "8\u201315 Years",
    desc: "Leads technical projects, designs systems across teams and influences engineering culture. Senior engineers who can bridge business requirements with technical architecture are the hardest roles to fill and command the strongest compensation packages, often including significant equity components.",
  },
  {
    level: "Staff / Principal Engineer",
    exp: "15+ Years",
    desc: "Sets technical direction across the organization, resolves cross-cutting architectural challenges and represents engineering in strategic decisions. These roles are rare\u2014most companies have 1 staff engineer per 20-30 ICs. Compensation often exceeds engineering management at the same level.",
  },
];

const topCountries = [
  {rank: 1, slug: "us", name: "United States"},
  {rank: 2, slug: "au", name: "Australia"},
  {rank: 3, slug: "ca", name: "Canada"},
  {rank: 4, slug: "sg", name: "Singapore"},
  {rank: 5, slug: "uk", name: "United Kingdom"},
  {rank: 6, slug: "nz", name: "New Zealand"},
  {rank: 7, slug: "in", name: "India"},
];

const topCities = [
  "San Francisco",
  "Seattle",
  "New York",
  "Singapore",
  "Sydney",
  "Toronto",
  "Bengaluru",
];

const relatedProfessions = [
  {name: "Data Scientist", href: "/us/salary/data-scientist"},
  {name: "Product Manager", href: "/us/salary/product-manager"},
  {name: "Cybersecurity Analyst", href: "/us/salary/cybersecurity-analyst"},
  {name: "DevOps Engineer", href: "/us/salary/devops-engineer"},
  {name: "Machine Learning Engineer", href: "/us/salary/machine-learning-engineer"},
];

export default function SoftwareEngineerHub() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary, Career Growth and Compensation Intelligence",
    "Research software engineer salaries, compare compensation across countries, evaluate career progression and understand how taxes and cost of living affect take-home earnings.",
    "/professions/software-engineer",
    {code: "en", name: "English", slug: "en"} as unknown as import("@/types/seo").Locale
  );

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    {label: "Home", url: SITE_URL},
    {label: "Software Engineer", url: `${SITE_URL}/professions/software-engineer`},
  ]);

  const faqSchema = buildFaqJsonLd([
    {
      question: "What is the highest-paying software engineering specialization in 2026?",
      answer:
        "Machine learning engineering and platform infrastructure roles command the highest premiums. ML engineers earn 25-40% more than generalist backend engineers at the same experience level, driven by demand for LLM integration, model deployment, and GPU cluster management skills.",
    },
    {
      question: "Should I specialize or stay generalist as a software engineer?",
      answer:
        "Specialization typically yields higher compensation after 5+ years of experience. Generalists have broader career flexibility but earn less at senior levels. The strongest position is a generalist foundation with deep expertise in one high-demand area such as distributed systems, ML infrastructure, or security.",
    },
    {
      question: "Which country pays software engineers the most after tax?",
      answer:
        "The United States has the highest gross salaries, but Singapore and the UAE offer the strongest after-tax outcomes due to low personal income tax rates. After accounting for taxes, healthcare costs and living expenses, the net financial advantage of the US narrows considerably for mid-career engineers.",
    },
    {
      question: "Is software engineering saturated in 2026?",
      answer:
        "Entry-level positions face increased competition due to AI-assisted coding tools lowering the barrier to entry. However, demand for senior engineers who can design systems, manage complexity and lead technical decisions remains strong. The salary gap between junior and senior roles continues to widen.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
      />
      <div className="space-y-16">
        {/* HERO */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Olikit Global &mdash; Profession Intelligence
          </p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Software Engineer Salary, Career Growth and Compensation Intelligence
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
            Research software engineer salaries, compare compensation across countries, evaluate
            career progression and understand how taxes and cost of living affect take-home
            earnings.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            Olikit combines salary benchmarks, affordability research, purchasing power analysis and
            career insights to help software engineers make informed financial and professional
            decisions.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-500">
            All data draws from government-sourced salary surveys, tax authority publications, and
            publicly available compensation research. Calculators apply current tax brackets, social
            contribution rates, and cost-of-living indices for each country.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/compare"
              className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Compare Countries
            </a>
            <a
              href="/us/tools/salary-calculator"
              className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
            >
              Salary Calculator
            </a>
            <a
              href="/us/tools/salary-calculator?mode=after-tax"
              className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
            >
              Salary After Tax
            </a>
            <a
              href="/us/guides"
              className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
            >
              Cost of Living Calculator
            </a>
          </div>
        </section>

        {/* FINANCIAL SNAPSHOT */}
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-zinc-950">
            Software Engineer Financial Snapshot
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Global Average (7 Countries)
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">$72,000 USD equivalent</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                US Average
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">$141,000 USD</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Highest After-Tax Market
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">Singapore</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Fastest Salary Growth (5yr)
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">India (+68%)</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Senior-Level Salary Range (US)
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">$180K\u2013$320K USD</p>
            </div>
            <div className="rounded-md bg-zinc-50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                Remote Work Availability
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-950">High (40-60% of roles)</p>
            </div>
          </div>
        </section>

        {/* AI QUICK ANSWERS */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-lg font-semibold text-zinc-950">Quick Answers</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-zinc-950">
                What skills command the highest salary premiums?
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                ML infrastructure, distributed systems design, GPU computing and security
                engineering consistently command the highest premiums. Skills in LLM deployment,
                Kubernetes at scale and multi-region architecture are particularly valued in 2026.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-950">
                How has AI affected software engineering salaries?
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                AI coding assistants have compressed entry-level salaries by making junior
                developers more productive, reducing the need for large junior teams. However,
                demand for senior engineers who can architect AI systems and manage complex
                integrations has increased, widening the senior-junior pay gap.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-950">
                Is remote work still available for software engineers?
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                Yes, though less universally than in 2022-2023. Many companies now offer hybrid
                arrangements. Fully remote roles typically pay 10-20% less than on-site roles in
                tech hubs, but the cost-of-living advantage often compensates for the difference.
              </p>
            </div>
          </div>
        </section>

        {/* SPECIALIZATION & SKILLS PREMIUM */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Software Engineering Specializations &amp; Salary Premium
          </h2>
          <p className="mb-4 text-sm leading-7 text-zinc-600">
            Not all software engineering roles pay equally. Specialization significantly impacts
            compensation, with infrastructure and ML roles commanding the highest premiums over
            generalist full-stack positions.
          </p>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                    Specialization
                  </th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                    Demand Level
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                    Premium vs Generalist
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name: "ML / AI Infrastructure", demand: "Very High", premium: "+30-40%"},
                  {name: "Platform / DevOps Engineering", demand: "High", premium: "+15-25%"},
                  {name: "Security Engineering", demand: "High", premium: "+15-20%"},
                  {name: "Distributed Systems", demand: "High", premium: "+20-30%"},
                  {name: "Mobile (iOS/Android)", demand: "Moderate", premium: "+5-10%"},
                  {name: "Full-Stack / Web", demand: "Moderate", premium: "Baseline"},
                  {name: "QA / Test Automation", demand: "Moderate", premium: "-5-0%"},
                ].map((s) => (
                  <tr key={s.name} className="border-t border-zinc-100">
                    <td className="px-4 py-3 font-medium text-zinc-950">{s.name}</td>
                    <td className="px-4 py-3 text-zinc-600">{s.demand}</td>
                    <td className="px-4 py-3 text-right font-medium text-zinc-950">{s.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Premiums are relative to generalist full-stack roles at the same experience level, based
            on job posting analysis and compensation survey data.
          </p>
        </section>

        {/* SALARY LANDSCAPE */}
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Software Engineering Market Dynamics
          </h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The software engineering labor market in 2026 is shaped by two competing forces: AI
            tools are reducing demand for routine coding tasks while simultaneously creating new
            demand for engineers who can build, deploy and maintain AI systems. The result is a
            widening gap between entry-level and senior compensation.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Companies are increasingly willing to pay premiums for engineers who understand
            distributed systems, can design for reliability at scale, and have experience with GPU
            compute, model serving infrastructure, or production ML pipelines. These roles are
            harder to fill and command 20-40% higher salaries than generalist positions.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Remote work remains common for software engineers, though some companies have
            implemented return-to-office mandates. Remote roles typically pay 10-20% less than
            equivalent on-site positions in major tech hubs, but the cost-of-living adjustment often
            makes remote work financially advantageous for engineers outside San Francisco and New
            York.
          </p>
        </section>

        {/* CAREER LEVELS */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Software Engineer Career Levels
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {careerLevels.map((cl) => (
              <div
                key={cl.level}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-1 text-base font-semibold text-zinc-950">{cl.level}</h3>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-blue-600">
                  {cl.exp}
                </p>
                <p className="text-sm leading-6 text-zinc-600">{cl.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHEST PAYING COUNTRIES */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Highest Paying Countries for Software Engineers
          </h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                    Rank
                  </th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                    Country
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                    Average Salary
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                    Entry Level
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                    Experienced
                  </th>
                </tr>
              </thead>
              <tbody>
                {topCountries.map((c, i) => {
                  const data = getSalaryData(c.slug);
                  if (!data) return null;
                  return (
                    <tr key={c.slug} className="border-t border-zinc-100">
                      <td className="px-4 py-3 text-zinc-500">
                        {i === 0
                          ? "\u{1F947}"
                          : i === 1
                            ? "\u{1F948}"
                            : i === 2
                              ? "\u{1F949}"
                              : `#${i + 1}`}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`/${c.slug}/salary/software-engineer`}
                          className="font-medium text-zinc-950 hover:text-blue-700"
                        >
                          <FlagImage code={data.slug} size="lg" /> {data.name}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-zinc-950">
                        {formatSalaryFull(data.salary.average, c.slug)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-600">
                        {formatSalary(data.salary.entryLevel, c.slug)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-600">
                        {formatSalary(data.salary.experienced, c.slug)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Salary comparisons should always be evaluated alongside taxes, housing costs and
            purchasing power.
          </p>
        </section>

        {/* HIGHEST PAYING CITIES */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Highest Paying Cities for Software Engineers
          </h2>
          <p className="mb-4 text-sm text-zinc-600">
            These cities frequently attract major technology employers and highly skilled software
            professionals.
          </p>
          <div className="flex flex-wrap gap-2">
            {topCities.map((city) => (
              <span
                key={city}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* SALARY BY COUNTRY */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            Software Engineer Salary by Country
          </h2>
          <p className="mb-4 text-sm text-zinc-600">
            Explore detailed compensation analysis for software engineers in:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locales
              .filter((l) => se.salaries[l.slug])
              .map((loc) => {
                const route = COUNTRY_ROUTES[loc.slug];
                return (
                  <a
                    key={loc.slug}
                    href={`/${loc.slug}/salary/software-engineer`}
                    className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
                  >
                    <p className="mb-1 text-2xl">
                      <FlagImage code={loc.slug} size="sm" />
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-950">{loc.name}</h3>
                    <p className="text-sm leading-6 text-zinc-600">
                      Average:{" "}
                      <strong>{formatSalaryFull(se.salaries[loc.slug].average, loc.slug)}</strong>
                    </p>
                    <p className="text-xs text-zinc-500">
                      Entry: {formatSalary(se.salaries[loc.slug].entryLevel, loc.slug)} &middot;
                      Experienced: {formatSalary(se.salaries[loc.slug].experienced, loc.slug)}
                    </p>
                  </a>
                );
              })}
          </div>
        </section>

        {/* RELATED PROFESSIONS */}
        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Related Professions</h2>
          <p className="mb-4 text-sm text-zinc-600">
            Professionals researching software engineering compensation often compare:
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedProfessions.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-950"
              >
                {p.name}
              </a>
            ))}
          </div>
        </section>

        {/* FEATURED RESEARCH */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Research</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/rankings/best-countries-for-software-engineers"
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">
                Best Countries for Software Engineers
              </h3>
              <p className="text-sm leading-6 text-zinc-600">
                Compare compensation, taxes, cost of living and purchasing power across major
                technology markets.
              </p>
            </a>
            <a
              href="/rankings/highest-paying-cities-software-engineers"
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">
                Highest Paying Cities for Software Engineers
              </h3>
              <p className="text-sm leading-6 text-zinc-600">
                Explore city-level compensation trends across leading technology hubs.
              </p>
            </a>
            <a
              href="/research/software-engineer-salary-index-2026"
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">
                Software Engineer Salary Index 2026
              </h3>
              <p className="text-sm leading-6 text-zinc-600">
                In-depth global salary analysis covering software engineering compensation trends
                and international comparisons.
              </p>
            </a>
            <a
              href="/research/software-engineer-salary-index-2026"
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">
                Remote Software Engineer Salary Report
              </h3>
              <p className="text-sm leading-6 text-zinc-600">
                Research how remote work is influencing compensation and career opportunities
                globally.
              </p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
