import type {Metadata} from "next";
import Link from "next/link";
import {SITE_URL} from "@/lib/seo/constants";
import {getDateModified} from "@/lib/seo/freshness";
import {locales} from "@/lib/seo/locales";
import {FadeInSection} from "@/components/ui/fade-in-section";
import {AnimatedCounter} from "@/components/ui/animated-counter";
import {SalaryRankingChart} from "@/components/salary-ranking-chart";
import {TaxBreakdownBar} from "@/components/tax-breakdown-bar";
import {CountryCards} from "@/components/country-cards";
import {QuickCompare} from "@/components/quick-compare";

const hreflangTags: Record<string, string> = {
  "x-default": SITE_URL,
};
for (const loc of locales) {
  hreflangTags[loc.code] = `${SITE_URL}/${loc.slug}`;
}

export const metadata: Metadata = {
  title: "Compare Salaries, Taxes and Cost of Living Across Major Economies",
  description:
    "Discover how much you can earn, keep after tax and afford in different countries using salary calculators, tax tools, compensation benchmarks and government-sourced financial data.",
  alternates: {canonical: SITE_URL, languages: hreflangTags},
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
};

const dateModified = getDateModified();

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
};

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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olikit",
  url: SITE_URL,
  description:
    "Salary, tax, take-home pay and cost-of-living platform that helps users compare financial outcomes across multiple countries using calculators, compensation data and government-sourced information.",
};

const salaryRankingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Salary Take-Home Ranking by Country",
  description:
    "Rankings of estimated annual take-home pay after income tax for a $100,000 USD salary across 7 countries: Singapore, United States, Canada, United Kingdom, Australia, India, and New Zealand.",
  url: SITE_URL,
  dateModified: dateModified,
  variableMeasured: [
    {"@type": "PropertyValue", name: "Country", unitText: "Country"},
    {"@type": "PropertyValue", name: "Take-Home Pay", unitText: "USD"},
    {"@type": "PropertyValue", name: "Effective Tax Rate", unitText: "%"},
  ],
};

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
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olikit",
  url: SITE_URL,
  description: "Compare salaries, taxes and cost of living across major economies.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const highestPayingProfessions = [
  {
    name: "Doctor",
    slug: "doctor",
    summary:
      "Physicians and surgeons earn among the highest salaries across all major economies, with average compensation exceeding six figures in the United States, Australia and Canada.",
  },
  {
    name: "Software Engineer",
    slug: "software-engineer",
    summary:
      "Software engineers command premium salaries driven by global demand for technical talent, with top-tier compensation in technology, finance and consulting sectors.",
  },
  {
    name: "Data Scientist",
    slug: "data-scientist",
    summary:
      "Data scientists apply advanced analytics and machine learning to drive business decisions, with compensation reflecting specialised quantitative expertise.",
  },
  {
    name: "Product Manager",
    slug: "product-manager",
    summary:
      "Product managers bridge business, technology and user experience, earning competitive salaries in technology companies and digital-first organizations.",
  },
  {
    name: "AI Engineer",
    slug: "ai-engineer",
    summary:
      "AI engineers design and deploy machine learning systems, with compensation reflecting the acute global shortage of specialised AI talent.",
  },
  {
    name: "Solutions Architect",
    slug: "solutions-architect",
    summary:
      "Solutions architects design complex technical systems and earn premium compensation, particularly in cloud, enterprise and consulting environments.",
  },
];

export default function GlobalHomePage() {
  return (
    <>
      <div className="space-y-12 lg:space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(webSiteJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(webPageJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(salaryRankingJsonLd)}}
        />

        {/* SECTION 1 — HERO */}
        <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-10 shadow-sm sm:px-8 sm:py-12 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* LEFT COLUMN — HEADLINE, CTAs, TRUST METRICS */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                SALARY INTELLIGENCE PLATFORM
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl leading-tight">
                Compare Salaries,
                <br />
                Taxes &amp; Cost of Living
                <br />
                Across the World
              </h1>

              <p className="text-base leading-7 text-zinc-500 sm:text-lg max-w-xl">
                See where your income goes further — compare salaries, taxes, purchasing power and
                living costs across major economies using government-sourced data.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/compare"
                  className="btn-primary inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Compare Countries
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/professions"
                  className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100"
                >
                  Explore Salary Data
                </a>
              </div>

              {/* HERO STATS STRIP */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter target={7} />
                  </p>
                  <p className="text-xs text-zinc-500">Countries</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter target={21} />
                  </p>
                  <p className="text-xs text-zinc-500">Professions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter target={12} suffix="+" />
                  </p>
                  <p className="text-xs text-zinc-500">Calculators</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter target={100} suffix="%" />
                  </p>
                  <p className="text-xs text-zinc-500">Free</p>
                </div>
              </div>

              {/* LIVE DATA BADGE */}
              <div className="flex items-center gap-2 pt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  Live data from 12 government sources
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN — HERO IMAGE */}
            <div className="hidden sm:block">
              <div className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-blue-100">
                <img
                  src="/images/hero/hero-global-career-intelligence.jpg"
                  alt="Global career intelligence workspace with worldwide salary and financial analytics"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1B — SALARY RANKING CHART (Interactive) */}
        <FadeInSection>
          <SalaryRankingChart />
        </FadeInSection>

        {/* SECTION 1C — TAX BREAKDOWN VISUAL */}
        <FadeInSection>
          <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <div className="mb-6">
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                TAX BREAKDOWN
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                What You Earn vs. What You Keep
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Blue shows take-home pay. Amber shows income tax. Same $100,000 USD salary — wildly
                different outcomes.
              </p>
            </div>
            <TaxBreakdownBar salary={100000} />
            <div className="mt-4 flex items-center gap-4 text-[11px] text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500" /> Take-home
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-400/70" /> Income tax
              </span>
            </div>
          </section>
        </FadeInSection>

        {/* SECTION 2 — HOW WE CALCULATE */}
        <FadeInSection>
          <section className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  How We Calculate
                </span>
              </div>
              <p className="text-sm leading-6 text-blue-900">
                Salary data sourced from government labor statistics and industry surveys. Tax
                calculations use official brackets published by tax authorities (IRS, HMRC, ATO,
                CRA, IRD, IRAS). Cost-of-living indexes reflect official CPI and housing data. All
                figures are for educational purposes; individual outcomes vary. See our{" "}
                <a
                  href="/methodology"
                  className="font-semibold text-blue-700 underline hover:text-blue-700"
                >
                  full methodology
                </a>
                .
              </p>
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
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-6 lg:gap-4 lg:grid-cols-5">
              <div className="lg:col-span-2 rounded-xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Featured Research
                </p>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Olikit Global Salary Index 2026
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  In-depth analysis comparing salaries, taxes, purchasing power and cost-of-living
                  across 7 major economies using government-sourced data.
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    "Highest Paying Countries for Software Engineers",
                    "Tax-Adjusted Salary Rankings",
                    "Profession Compensation Benchmarks",
                    "Cost of Living & Purchasing Power Analysis",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                      <svg
                        className="h-4 w-4 shrink-0 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/research"
                  className="btn-primary mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Read Full Report
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Best Countries for Software Engineers",
                    href: "/rankings/best-countries-for-software-engineers",
                    desc: "Top destinations ranked by compensation, taxes and quality of life for software engineers.",
                  },
                  {
                    title: "Highest Paying Countries",
                    href: "/rankings/highest-paying-countries-software-engineers",
                    desc: "Countries offering the highest absolute compensation across all experience levels.",
                  },
                  {
                    title: "Highest Paying Cities",
                    href: "/rankings/highest-paying-cities-software-engineers",
                    desc: "Metropolitan areas with the best salary-to-cost-of-living ratios globally.",
                  },
                  {
                    title: "Salary After Tax Rankings",
                    href: "/compare",
                    desc: "Net take-home pay comparison across countries after income tax and social contributions.",
                  },
                  {
                    title: "Cost of Living Analysis",
                    href: "/research",
                    desc: "Side-by-side breakdown of housing, transportation, healthcare and goods costs.",
                  },
                  {
                    title: "Tax System Comparisons",
                    href: "/compare",
                    desc: "Side-by-side comparison of tax brackets, rates and thresholds across jurisdictions.",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="card-hover group rounded-lg border border-zinc-200 bg-white p-4 shadow-sm flex flex-col"
                  >
                    <h3 className="text-sm font-semibold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-zinc-500 flex-1">{item.desc}</p>
                    <span className="mt-2 inline-flex items-center gap-0.5 text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      Read more
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
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
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
                <a
                  key={prof.name}
                  href={`/${prof.slug}`}
                  className="card-hover rounded-lg border border-zinc-200 bg-white p-5 shadow-sm flex flex-col"
                >
                  <h3 className="font-semibold text-zinc-950">{prof.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-600 flex-1">{prof.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Explore Salaries &rarr;
                  </span>
                </a>
              ))}
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
              Dedicated career intelligence hubs for the most-requested professions. Each hub
              provides country-by-country salary data, tax analysis, and purchasing power
              comparisons.
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
                  Salaries, taxes, PPP-adjusted income, and career comparisons across 7 major
                  economies.
                </p>
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[10px] font-medium text-zinc-400 mr-1">Avg:</span>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div className="h-full w-[85%] rounded-full bg-blue-500" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-700 ml-1">$127K</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400">
                  <img
                    src="https://flagcdn.com/24x18/us.webp"
                    alt="US"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/gb.webp"
                    alt="UK"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/au.webp"
                    alt="AU"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/ca.webp"
                    alt="CA"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/nz.webp"
                    alt="NZ"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/in.webp"
                    alt="IN"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/sg.webp"
                    alt="SG"
                    className="h-3 w-4 rounded-[1px]"
                  />
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
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
                  Data science compensation, salary rankings, and career analysis across global
                  markets.
                </p>
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[10px] font-medium text-zinc-400 mr-1">Avg:</span>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div className="h-full w-[78%] rounded-full bg-purple-500" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-700 ml-1">$118K</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400">
                  <img
                    src="https://flagcdn.com/24x18/us.webp"
                    alt="US"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/gb.webp"
                    alt="UK"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/au.webp"
                    alt="AU"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/ca.webp"
                    alt="CA"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/in.webp"
                    alt="IN"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/sg.webp"
                    alt="SG"
                    className="h-3 w-4 rounded-[1px]"
                  />
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
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
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[10px] font-medium text-zinc-400 mr-1">Avg:</span>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div className="h-full w-[72%] rounded-full bg-amber-500" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-700 ml-1">$108K</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400">
                  <img
                    src="https://flagcdn.com/24x18/us.webp"
                    alt="US"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/gb.webp"
                    alt="UK"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/au.webp"
                    alt="AU"
                    className="h-3 w-4 rounded-[1px]"
                  />
                  <img
                    src="https://flagcdn.com/24x18/sg.webp"
                    alt="SG"
                    className="h-3 w-4 rounded-[1px]"
                  />
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Explore Hub &rarr;
                </span>
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/professions"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Browse All Professions &rarr;
              </a>
            </div>
          </section>
        </FadeInSection>

        {/* SECTION 13B — EXPLORE BY COUNTRY */}
        <FadeInSection>
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                Explore by Country
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Salary, tax and financial intelligence for 7 major economies. Select a country to
                dive deeper.
              </p>
            </div>
            <CountryCards />
          </section>
        </FadeInSection>

        {/* SECTION 13C — QUICK COMPARE */}
        <FadeInSection>
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                Quick Country Compare
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Pick two countries and a salary. See which one leaves more in your pocket.
              </p>
            </div>
            <QuickCompare />
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
                {
                  q: "What is Olikit?",
                  a: "Olikit is a global salary, tax and cost-of-living intelligence platform that helps professionals compare financial outcomes across countries using publicly available data and transparent methodologies.",
                },
                {
                  q: "How are salaries calculated?",
                  a: "Salary estimates are derived from labor statistics, compensation surveys and publicly available employment data, then normalized for comparison across countries.",
                },
                {
                  q: "How are taxes calculated?",
                  a: "Tax calculations use official tax brackets and rules published by government tax authorities including the IRS, HMRC, CRA, ATO, IRD and IRAS.",
                },
                {
                  q: "Which countries does Olikit cover?",
                  a: "Olikit currently provides salary, tax and financial intelligence across the United States, United Kingdom, Australia, Canada, New Zealand, India and Singapore.",
                },
                {
                  q: "Can I compare countries?",
                  a: "Yes. Olikit provides salary comparisons, tax comparisons and financial benchmarking tools to evaluate outcomes across different countries.",
                },
                {
                  q: "How often is the data updated?",
                  a: "Tax and salary datasets are reviewed regularly and updated when significant government or statistical revisions become available.",
                },
                {
                  q: "Where does Olikit get its data?",
                  a: "Olikit uses publicly available information from government tax authorities, labor statistics agencies and official economic publications.",
                },
                {
                  q: "Is Olikit suitable for international relocation research?",
                  a: "Yes. Olikit provides salary comparisons, tax estimates, cost-of-living insights and purchasing power analysis across multiple countries, making it a practical resource for professionals evaluating international moves.",
                },
                {
                  q: "What is purchasing power?",
                  a: "Purchasing power measures how much goods and services a given salary can buy in a specific country, after accounting for taxes, living costs and currency differences.",
                },
                {
                  q: "Why do salaries differ between countries?",
                  a: "Salary differences reflect variations in labour productivity, industry composition, cost of living, collective bargaining frameworks, minimum wage regulations, supply and demand for skills, and tax systems across countries.",
                },
                {
                  q: "How should salary comparisons be interpreted?",
                  a: "Salary comparisons should account for tax rates, cost of living, purchasing power, currency fluctuations, benefits and retirement contributions to provide a meaningful picture of financial outcomes.",
                },
              ].map((faq, i) => (
                <details key={i} className="group faq-accordion px-5 py-4 sm:px-6 sm:py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 select-none">
                    <h3 className="text-base font-semibold text-zinc-950">{faq.q}</h3>
                    <svg
                      className="faq-chevron h-5 w-5 shrink-0 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
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

        {/* SECTION 20 — FINAL CTA */}
        <FadeInSection>
          <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 sm:px-10 sm:py-10 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                Make Better Financial Decisions
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Explore salary benchmarks, compare taxes, estimate take-home pay and understand how
                different countries affect your financial future.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/compare"
                  className="btn-primary inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Compare Countries
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
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
      <p className="text-xs text-zinc-400 mt-8">
        Some links on this page are affiliate links. We may earn a commission at no extra cost to
        you.
      </p>
    </>
  );
}
