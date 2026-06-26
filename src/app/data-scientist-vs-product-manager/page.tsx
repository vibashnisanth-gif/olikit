import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/data-scientist-vs-product-manager"

export const metadata: Metadata = {
  title: "Data Scientist vs Product Manager: Salary & Career Comparison (2026)",
  description: "Compare data scientist and product manager salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist vs Product Manager: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist and product manager careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function DataScientistVsProductManager() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist vs Product Manager: Salary & Career Comparison (2026)",
    "Compare data scientist and product manager salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Data Scientist vs Product Manager", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: data scientist or product manager?", answer: "Salaries are broadly comparable at mid-career levels. Data scientists average approximately $115,000 in the US, while product managers average $115,000. At senior levels, product managers at top tech companies can earn $175,000+, while senior data scientists average $160,000. Director-level PMs often have higher earning potential." },
    { question: "What are the main differences in day-to-day work?", answer: "Data scientists focus on analyzing data, building machine learning models, running experiments, and extracting insights. Product managers focus on strategy, user research, stakeholder management, and defining product requirements. Data scientists work with data and code; PMs work with people and strategy." },
    { question: "Can a data scientist transition to product management?", answer: "Yes, data scientists bring strong analytical and data-driven decision-making skills that are valuable in product management. Additional skills in user research, stakeholder management, and strategic thinking are needed for a successful transition." },
    { question: "Which career has better job security?", answer: "Both careers have strong demand. Data science is growing rapidly with a 36% projected growth rate. Product management offers a path to executive leadership roles. Data science roles may have higher educational barriers to entry, which can reduce competition." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Scientist vs Product Manager</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for data scientists and product managers across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/data-scientist" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Data Scientist Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Comparable Mid-Career Salaries</h3><p className="text-sm leading-6 text-zinc-600">Data scientists and product managers earn broadly similar total compensation at mid-career levels. PMs often have higher earning potential at senior and director levels.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Career Paths</h3><p className="text-sm leading-6 text-zinc-600">Data science focuses on analytical depth, model building, and technical expertise. Product management focuses on strategy, user empathy, and cross-functional leadership. Choose based on whether you prefer analysis or strategy.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Data-Driven Decision Making</h3><p className="text-sm leading-6 text-zinc-600">Both roles rely heavily on data. Data scientists generate insights and build models. Product managers use those insights to make strategic product decisions. The synergy between the two roles is critical for successful products.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Both in High Demand</h3><p className="text-sm leading-6 text-zinc-600">Both professions have strong job growth. Data science has a 36% projected growth rate. Product management is increasingly valued as organizations prioritize customer-centric development and data-driven strategy.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Data Scientist</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Product Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$85,000</td><td className="px-4 py-3 text-right text-zinc-950">$70,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$160,000</td><td className="px-4 py-3 text-right text-zinc-950">$175,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Director/Principal (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$220,000+</td><td className="px-4 py-3 text-right text-zinc-950">$240,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data science is one of the fastest-growing fields, with the US Bureau of Labor Statistics projecting 36% growth for data scientists. Organizations across every industry are investing in AI, machine learning, and data-driven decision making, driving strong demand for data science talent.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product management offers a path to executive leadership roles, with many CEOs and C-suite executives having PM backgrounds. The role is increasingly valued as organizations prioritize customer-centric product development and data-informed strategy.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong compensation growth. Data scientists typically have higher starting salaries, while product managers often see significant jumps when moving into senior and director-level roles.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Skills Comparison</h2>
          <div className="grid gap-4 sm:grid-cols-2">
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
            <div className="rounded-md border border-purple-100 bg-purple-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Product Manager Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>User Research & Empathy</li>
                <li>Data Analysis & Metrics</li>
                <li>Strategic Thinking</li>
                <li>Stakeholder Management</li>
                <li>A/B Testing & Experimentation</li>
                <li>Communication & Presentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Progression</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data scientists progress from Junior Data Scientist to Data Scientist, Senior Data Scientist, Lead/Staff Data Scientist, and Principal/Director of Data Science. Each level brings more technical responsibility, mentorship, and strategic influence over data initiatives.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product managers progress from Associate PM to PM, Senior PM, Director of Product, and VP/CPO. Career advancement brings broader product responsibility, team management, and strategic influence over the product roadmap.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both paths offer excellent long-term career prospects. Data scientists who enjoy deep analytical work can advance through individual contributor tracks. PMs who enjoy strategy and leadership can advance into executive roles.</p>
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
            { label: "Data Scientist Hub", href: "/data-scientist" },
            { label: "Data Scientist vs Software Engineer", href: "/data-scientist-vs-software-engineer" },
            { label: "Data Scientist vs Data Analyst", href: "/data-scientist-vs-data-analyst" },
            { label: "Product Manager vs Data Scientist", href: "/product-manager-vs-data-scientist" },
            { label: "Data Scientist Salary Research 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
          ]}
        />
      </div>
    </Shell>
  )
}
