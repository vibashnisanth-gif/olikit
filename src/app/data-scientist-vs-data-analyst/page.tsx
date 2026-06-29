import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/data-scientist-vs-data-analyst"

export const metadata: Metadata = {
  title: "Data Scientist vs Data Analyst: Salary & Career Comparison (2026)",
  description: "Compare data scientist and data analyst salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist vs Data Analyst: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist and data analyst careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function DataScientistVsDataAnalyst() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist vs Data Analyst: Salary & Career Comparison (2026)",
    "Compare data scientist and data analyst salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Data Scientist vs Data Analyst", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "What is the main difference between a data scientist and a data analyst?", answer: "Data analysts focus on examining historical data to answer specific business questions, create reports, and build dashboards. Data scientists use advanced statistics, machine learning, and predictive modeling to forecast trends, build automated systems, and uncover deeper insights from complex datasets." },
    { question: "Which career pays more: data scientist or data analyst?", answer: "Data scientists earn significantly more than data analysts at all career levels. Entry-level data scientists average $85,000 vs $55,000 for analysts. At senior levels, data scientists earn $160,000+ compared to $105,000+ for analysts. The salary gap reflects the advanced technical skills and higher educational requirements for data science roles." },
    { question: "What education do I need for each role?", answer: "Data analyst positions typically require a bachelor's degree in a quantitative field such as statistics, mathematics, or economics. Data scientist roles often require a master's or PhD, particularly for machine learning and research positions, making the educational barrier to entry higher for data science." },
    { question: "Can a data analyst become a data scientist?", answer: "Yes, this is a common career progression. Data analysts already have foundational skills in SQL, data visualization, and business analysis. To transition to data science, they need to develop advanced skills in machine learning, statistical modeling, programming (Python/R), and big data technologies." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Scientist vs Data Analyst</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for data scientists and data analysts across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/data-scientist" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Data Scientist Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Significant Salary Difference</h3><p className="text-sm leading-6 text-zinc-600">Data scientists earn substantially more than data analysts at every career level. The gap widens at senior levels, with data scientists earning 50%+ more than their analyst counterparts.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Skill Requirements</h3><p className="text-sm leading-6 text-zinc-600">Data analysts focus on SQL, visualization tools (Tableau, Power BI), and business reporting. Data scientists require advanced programming, machine learning, and statistical modeling skills.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Lower Barrier to Entry for Analysts</h3><p className="text-sm leading-6 text-zinc-600">Data analysis has a lower barrier to entry, typically requiring only a bachelor's degree. Data science roles often require advanced degrees (master's or PhD) for specialized positions.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Clear Career Progression Path</h3><p className="text-sm leading-6 text-zinc-600">Many data analysts transition into data science roles after gaining experience and developing advanced technical skills. This is one of the most common and logical career progressions in the data field.</p></div>
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
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Data Analyst</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$85,000</td><td className="px-4 py-3 text-right text-zinc-950">$55,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td><td className="px-4 py-3 text-right text-zinc-950">$75,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$160,000</td><td className="px-4 py-3 text-right text-zinc-950">$105,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Principal/Director (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$220,000+</td><td className="px-4 py-3 text-right text-zinc-950">$150,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data science is one of the fastest-growing fields, with the US Bureau of Labor Statistics projecting 36% growth for data scientists. Organizations across every industry are investing in AI, machine learning, and predictive analytics, driving strong demand for advanced data science talent.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data analysis also has strong growth prospects, with a projected 23% growth rate. Nearly every organization needs data analysts to interpret business metrics, create reports, and support decision-making. The role has a lower barrier to entry, making it more accessible to newcomers.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">The demand for both roles is driven by the increasing volume of data generated by businesses. Companies need both analysts to understand current performance and data scientists to build predictive models that drive future growth.</p>
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
            <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Data Analyst Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>SQL & Database Querying</li>
                <li>Data Visualization (Tableau, Power BI)</li>
                <li>Spreadsheet Analysis (Excel, Google Sheets)</li>
                <li>Business Intelligence Tools</li>
                <li>Statistical Analysis (descriptive stats)</li>
                <li>Reporting & Dashboard Creation</li>
              </ul>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics - Data Scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
            { label: "US Bureau of Labor Statistics - Data Analysts", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
            { label: "Glassdoor - Data Scientist Salaries", url: "https://www.glassdoor.com" },
            { label: "Glassdoor - Data Analyst Salaries", url: "https://www.glassdoor.com" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist vs Software Engineer", href: "/data-scientist-vs-software-engineer" },
            { label: "Data Scientist vs Product Manager", href: "/data-scientist-vs-product-manager" },
            { label: "Data Scientist Salary Research 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
          ]}
        />
      </div>
      </>
  )
}