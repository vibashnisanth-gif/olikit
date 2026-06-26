import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/research/data-scientist-salary-index-2026"

export const metadata: Metadata = {
  title: "Olikit Global Data Scientist Index 2026 | Institutional Research",
  description: "The official 2026 Olikit research report on global Data Scientist compensation, purchasing power, and relocation metrics across 7 major economies.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Olikit Global Data Scientist Index 2026 | Institutional Research",
    description: "Official 2026 Olikit research report on global Data Scientist compensation, purchasing power, and relocation metrics across 7 major economies.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function DataScientistIndexPage() {
  const articleSchema = buildArticleJsonLd(
    "Olikit Global Data Scientist Index 2026",
    "The official 2026 Olikit research report on global Data Scientist compensation, purchasing power, and relocation metrics across 7 major economies.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Research", url: `${SITE_URL}/research` },
    { label: "Global Data Scientist Index 2026", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which country pays data scientists the highest salary in 2026?", answer: "The United States offers the highest compensation with an estimated base salary of $142,000 USD equivalent, earning an Olikit Compensation Score of 98/100." },
    { question: "Which country offers the best net salary after taxes for data scientists?", answer: "Singapore offers the most efficient tax-to-income ratio, with an estimated retained income of approximately 88.5% of gross salary due to progressive tax rates that rarely exceed 15-20% effective burden for tech professionals." },
    { question: "Which country has the best purchasing power for data scientists?", answer: "When adjusted for living costs, regional US hubs offer the highest absolute purchasing power. Singapore's low taxes combat high rents, yielding extreme wealth accumulation potential." },
    { question: "Which country is easiest to immigrate to as a data scientist?", answer: "Canada and Australia offer the most accessible pathways. Canada's Express Entry system and Australia's MLTSSL visa frameworks provide structured, points-based routes to permanent residency." },
    { question: "How does tax efficiency affect data scientist compensation?", answer: "Tax efficiency dramatically impacts net income. Singapore's effective tax rate of roughly 11.5% for a $94,300 earner allows data scientists to retain significantly more of their gross income compared to high-tax jurisdictions." },
    { question: "Which country offers the strongest career growth for data scientists?", answer: "The United States offers the strongest career growth opportunities due to unmatched density of FAANG employers, AI labs, and venture capital investment in machine learning." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Olikit Research Report 2026</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">The Olikit Global Data Scientist Index 2026</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Institutional-grade intelligence on the economic realities of data science professionals. The defining trend of 2026 is the divergence between nominal compensation and localized purchasing power. While the United States continues to dictate maximum absolute compensation, aggressive tax structures and housing costs in primary tech hubs have driven specialized talent to optimize for Olikit Net Earning Power in jurisdictions like Singapore and regional Australia.</p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Executive Summary</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">The Olikit Global Data Scientist Index 2026 provides institutional-grade intelligence on the economic realities of data science professionals. The defining trend of 2026 is the divergence between nominal compensation and localized purchasing power.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">While the United States continues to dictate maximum absolute compensation, aggressive tax structures and housing costs in primary tech hubs have driven specialized talent to optimize for Olikit Net Earning Power in jurisdictions like Singapore and regional Australia.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border-light bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Countries Analyzed</p>
              <p className="mt-1 text-2xl font-bold text-zinc-950">7</p>
            </div>
            <div className="rounded-lg border border-border-light bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Highest Salary</p>
              <p className="mt-1 text-2xl font-bold text-zinc-950">$142,000 (US)</p>
            </div>
            <div className="rounded-lg border border-border-light bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Highest Retained Income</p>
              <p className="mt-1 text-2xl font-bold text-zinc-950">Singapore (88.5%)</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Section 1: Methodology</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data frameworks are constructed using aggregate labor statistics, formalized immigration policy updates (e.g., Singapore COMPASS 2026 adjustments), and institutional tax brackets.</p>
          <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li><strong>Baseline Metric:</strong> Mid-level Data Scientist (3-5 years experience).</li>
            <li><strong>Tax Engine:</strong> Standard single-filer effective tax rates for 2026.</li>
            <li><strong>Index Anchoring:</strong> All Purchasing Power Parity (PPP) calculations are indexed against New York City (100).</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Section 2: Nominal Salary Rankings</h2>
          <p className="mb-4 text-xs text-zinc-500">Ranks countries by raw base compensation, converted to USD.</p>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Est. Base Salary (USD Eq.)</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Olikit Comp. Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">1</td><td className="px-4 py-3 font-medium text-zinc-950">United States</td><td className="px-4 py-3 text-right text-zinc-950">$142,000</td><td className="px-4 py-3 text-right text-zinc-950">98</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">2</td><td className="px-4 py-3 font-medium text-zinc-950">Australia</td><td className="px-4 py-3 text-right text-zinc-950">$98,600</td><td className="px-4 py-3 text-right text-zinc-950">82</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">3</td><td className="px-4 py-3 font-medium text-zinc-950">Singapore</td><td className="px-4 py-3 text-right text-zinc-950">$94,300</td><td className="px-4 py-3 text-right text-zinc-950">85</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">4</td><td className="px-4 py-3 font-medium text-zinc-950">United Kingdom</td><td className="px-4 py-3 text-right text-zinc-950">$91,400</td><td className="px-4 py-3 text-right text-zinc-950">78</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">5</td><td className="px-4 py-3 font-medium text-zinc-950">Canada</td><td className="px-4 py-3 text-right text-zinc-950">$88,800</td><td className="px-4 py-3 text-right text-zinc-950">75</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Section 3: Net Salary Rankings</h2>
          <p className="mb-4 text-xs text-zinc-500">Ranks countries by estimated post-tax retained income (Olikit Net Earning Power).</p>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Est. Net Income (USD Eq.)</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Retained Income %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">1</td><td className="px-4 py-3 font-medium text-zinc-950">United States</td><td className="px-4 py-3 text-right text-zinc-950">~$101,530</td><td className="px-4 py-3 text-right text-zinc-600">~71.5%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">2</td><td className="px-4 py-3 font-medium text-zinc-950">Singapore</td><td className="px-4 py-3 text-right text-zinc-950">~$83,455</td><td className="px-4 py-3 text-right text-zinc-600">~88.5%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">3</td><td className="px-4 py-3 font-medium text-zinc-950">Australia</td><td className="px-4 py-3 text-right text-zinc-950">~$70,006</td><td className="px-4 py-3 text-right text-zinc-600">~71.0%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">4</td><td className="px-4 py-3 font-medium text-zinc-950">United Kingdom</td><td className="px-4 py-3 text-right text-zinc-950">~$65,808</td><td className="px-4 py-3 text-right text-zinc-600">~72.0%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">5</td><td className="px-4 py-3 font-medium text-zinc-950">Canada</td><td className="px-4 py-3 text-right text-zinc-950">~$61,272</td><td className="px-4 py-3 text-right text-zinc-600">~69.0%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Section 4: Purchasing Power Rankings</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Adjusts net income for local housing and expense burdens.</p>
          <ol className="mb-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-600">
            <li><strong>United States (Regional Hubs):</strong> Absolute highest purchasing power.</li>
            <li><strong>Singapore:</strong> Low tax rates combat high rents, yielding extreme wealth accumulation potential.</li>
            <li><strong>Australia:</strong> High base pay and mandatory superannuation offer deep long-term financial security.</li>
            <li><strong>India:</strong> Low nominal pay globally, but commands massive local purchasing power compared to local mean incomes.</li>
          </ol>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Section 5: Relocation &amp; Visa Viability Rankings</h2>
          <p className="mb-4 text-sm leading-6 text-zinc-600">Analyzed via the Olikit Relocation Score, measuring the friction of professional immigration.</p>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Visa Framework</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Olikit Reloc. Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">1</td><td className="px-4 py-3 font-medium text-zinc-950">Canada</td><td className="px-4 py-3 text-zinc-600">Express Entry / Tech Pilots</td><td className="px-4 py-3 text-right text-zinc-950">92</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">2</td><td className="px-4 py-3 font-medium text-zinc-950">Australia</td><td className="px-4 py-3 text-zinc-600">Skilled Migration (Subclass 189/190/491)</td><td className="px-4 py-3 text-right text-zinc-950">88</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 text-zinc-500">3</td><td className="px-4 py-3 font-medium text-zinc-950">Singapore</td><td className="px-4 py-3 text-zinc-600">Employment Pass (COMPASS)</td><td className="px-4 py-3 text-right text-zinc-950">85</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm leading-6 text-zinc-600"><strong>Australia</strong> lists Data Scientists on the Medium and Long-term Strategic Skills List (MLTSSL), creating a direct path to permanent residency.</p>
            <p className="text-sm leading-6 text-zinc-600"><strong>Singapore's</strong> 2026 COMPASS framework awards vital bonus points to Data Scientists, officially recognizing it as a Shortage Occupation.</p>
            <p className="text-sm leading-6 text-zinc-600"><strong>US immigration</strong> remains highly complex, pushing global talent toward Canada and Australia.</p>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
            { label: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg" },
            { label: "OECD Tax Database", url: "https://www.oecd.org/tax/" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "World Bank PPP Data", url: "https://www.worldbank.org" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Highest Paying Cities for Data Scientists", href: "/rankings/highest-paying-cities-data-scientists" },
            { label: "Best Countries for Data Scientists", href: "/rankings/best-countries-for-data-scientists" },
            { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
            { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
            { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
            { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
            { label: "Data Scientist Salary Singapore", href: "/data-scientist-salary-singapore" },
            { label: "Data Scientist US vs UK", href: "/comparisons/data-scientist-us-vs-uk" },
            { label: "Data Scientist US vs Canada", href: "/comparisons/data-scientist-us-vs-canada" },
            { label: "Data Scientist vs Software Engineer", href: "/data-scientist-vs-software-engineer" },
            { label: "Global Research", href: "/research" },
          ]}
        />
      </div>
    </Shell>
  )
}
