import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/product-manager-vs-data-scientist"

export const metadata: Metadata = {
  title: "Product Manager vs Data Scientist (2026) Comparison",
  description: "Compare product manager and data scientist salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Product Manager vs Data Scientist (2026) | Olikit",
    description: "Detailed comparison of product manager and data scientist careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function ProductManagerVsDataScientist() {
  const articleSchema = buildArticleJsonLd(
    "Product Manager vs Data Scientist: Salary & Career Comparison (2026)",
    "Compare product manager and data scientist salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Product Manager vs Data Scientist", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: product manager or data scientist?", answer: "Salaries are broadly comparable at mid-career levels. Product managers average approximately $110,000 in the US, while data scientists average $115,000. At senior levels, PMs at top tech companies can earn $175,000+, while senior data scientists average $160,000." },
    { question: "What are the main differences in day-to-day work?", answer: "Product managers focus on strategy, user research, stakeholder management, and defining product requirements. Data scientists focus on analyzing data, building machine learning models, running experiments, and extracting insights." },
    { question: "Can a product manager transition to data science?", answer: "The transition is challenging but possible. PMs with strong quantitative skills and statistics background can transition. Additional education in machine learning, statistics, and programming (Python, SQL) is typically required." },
    { question: "Which career has better job prospects?", answer: "Both careers have strong demand. Data science is growing rapidly with a 36% projected growth rate. Product management offers a clearer path to executive leadership roles, with many CPOs and CEOs having PM backgrounds." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Product Manager vs Data Scientist</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for product managers and data scientists across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/product-manager" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Product Manager Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Comparable Mid-Career Salaries</h3><p className="text-sm leading-6 text-zinc-600">Data scientists and product managers earn broadly similar total compensation at mid-career levels. PMs often have higher earning potential at senior and director levels.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Career Paths</h3><p className="text-sm leading-6 text-zinc-600">Product management focuses on strategy, user empathy, and cross-functional leadership. Data science focuses on analytical depth, model building, and technical expertise. Choose based on whether you prefer strategy or analysis.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Data-Driven Decision Making</h3><p className="text-sm leading-6 text-zinc-600">Both roles rely heavily on data. Data scientists generate insights and build models. Product managers use those insights to make strategic product decisions. The synergy is critical for successful products.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Both in High Demand</h3><p className="text-sm leading-6 text-zinc-600">Both professions have strong job growth. Product management is increasingly valued as organizations prioritize customer-centric development. Data science has a 36% projected growth rate.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Product Manager</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Data Scientist</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$70,000</td><td className="px-4 py-3 text-right text-zinc-950">$85,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$110,000</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$175,000</td><td className="px-4 py-3 text-right text-zinc-950">$160,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Director/Principal (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$240,000+</td><td className="px-4 py-3 text-right text-zinc-950">$220,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product management offers a path to executive leadership roles, with many CEOs and C-suite executives having PM backgrounds. The role is increasingly valued as organizations prioritize customer-centric product development.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data science is one of the fastest-growing fields, with organizations across every industry investing in AI, machine learning, and data-driven decision making. Data scientists typically have higher starting salaries.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong compensation growth. Data scientists typically enter with higher starting salaries, while product managers often see significant jumps when moving into senior and director-level roles.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Skills Comparison</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-purple-100 bg-purple-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Product Manager Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>User Research & Empathy</li>
                <li>Data Analysis & Metrics</li>
                <li>Strategic Thinking & Roadmapping</li>
                <li>Stakeholder Management</li>
                <li>A/B Testing & Experimentation</li>
                <li>Communication & Presentation</li>
              </ul>
            </div>
            <div className="rounded-md border border-green-100 bg-green-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Data Scientist Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>Statistics & Probability</li>
                <li>Machine Learning (scikit-learn, TensorFlow)</li>
                <li>Data Analysis (Python, R, SQL)</li>
                <li>Data Visualization (Tableau, matplotlib)</li>
                <li>Big Data Technologies (Spark, Hadoop)</li>
                <li>Experimental Design & A/B Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics - Data Scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
            { label: "Glassdoor - Product Manager Salaries", url: "https://www.glassdoor.com" },
            { label: "Glassdoor - Data Scientist Salaries", url: "https://www.glassdoor.com" },
            { label: "Payscale - Product Manager Salary", url: "https://www.payscale.com" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Product Manager Hub", href: "/product-manager" },
            { label: "Product Manager vs Software Engineer", href: "/product-manager-vs-software-engineer" },
            { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
            { label: "Salary by Country", href: "/product-manager-salary-by-country" },
            { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
            { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
            { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
            { label: "Best Countries for Product Managers", href: "/best-countries-for-product-managers" },
            { label: "Highest Paying Cities", href: "/rankings/highest-paying-cities-product-managers" },
            { label: "PM Salary Index 2026", href: "/research/product-manager-salary-index-2026" },
          ]}
        />
      </div>
      </>
  )
}