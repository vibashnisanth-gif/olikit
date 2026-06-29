import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/software-engineer-vs-data-scientist"

export const metadata: Metadata = {
  title: "Software Engineer vs Data Scientist: Salary & Career Comparison (2026)",
  description: "Compare software engineer and data scientist salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer vs Data Scientist: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer and data scientist careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function SoftwareEngineerVsDataScientist() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer vs Data Scientist: Salary & Career Comparison (2026)",
    "Compare software engineer and data scientist salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Software Engineer vs Data Scientist", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: software engineer or data scientist?", answer: "Salaries are broadly comparable at mid-career levels. Software engineers average approximately $120,000 in the US, while data scientists average $115,000-130,000. At senior levels, software engineers often have higher earning potential due to equity compensation at major tech companies." },
    { question: "What are the main differences in education requirements?", answer: "Software engineering typically requires a bachelor's degree in computer science or related field. Data science roles often prefer a master's or PhD, especially for machine learning and research positions, though bootcamp graduates can enter both fields." },
    { question: "Which career has better job prospects?", answer: "Both fields have strong job prospects. Software engineering has a larger number of available positions globally. Data science is growing rapidly but is a more specialized field with fewer total positions." },
    { question: "Can you switch from software engineering to data science?", answer: "Yes, the transition is common. Software engineers already have strong programming skills. Additional learning in statistics, machine learning, and data analysis tools can facilitate the transition." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer vs Data Scientist</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for software engineers and data scientists across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Software Engineer Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Comparable Mid-Career Salaries</h3><p className="text-sm leading-6 text-zinc-600">Software engineers and data scientists earn broadly similar salaries at mid-career levels. Software engineers have higher earning potential at senior levels, especially with equity compensation.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Education Paths</h3><p className="text-sm leading-6 text-zinc-600">Software engineering typically requires a bachelor's degree. Data science roles, especially those involving machine learning and research, often require advanced degrees.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Overlapping but Distinct Skills</h3><p className="text-sm leading-6 text-zinc-600">Both roles require programming proficiency. Data scientists need stronger statistics and machine learning knowledge. Software engineers focus more on system design and architecture.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Strong Demand for Both</h3><p className="text-sm leading-6 text-zinc-600">Both professions have strong job growth projections. Software engineering has more total positions, while data science is growing at a faster rate from a smaller base.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Software Engineer</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Data Scientist</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$75,000</td><td className="px-4 py-3 text-right text-zinc-950">$85,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$120,000</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$180,000</td><td className="px-4 py-3 text-right text-zinc-950">$160,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Principal/Director (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$250,000+</td><td className="px-4 py-3 text-right text-zinc-950">$220,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering has a larger total addressable job market, with positions available across virtually every industry. The US Bureau of Labor Statistics projects 25% growth for software developers (much faster than average).</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Data science is one of the fastest-growing fields, with demand increasing as organizations invest in AI and machine learning. The field has a higher barrier to entry due to advanced degree requirements in many roles.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong remote work opportunities. Software engineering has more established remote work infrastructure, while data science roles increasingly offer flexible arrangements.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Skills Comparison</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Software Engineer Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>Programming (Python, Java, JavaScript, C++)</li>
                <li>System Design & Architecture</li>
                <li>Data Structures & Algorithms</li>
                <li>Cloud Platforms (AWS, GCP, Azure)</li>
                <li>CI/CD & DevOps Practices</li>
                <li>Database Design & Optimization</li>
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
            { label: "US Bureau of Labor Statistics - Software Developers", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" },
            { label: "US Bureau of Labor Statistics - Data Scientists", url: "https://www.bls.gov/ooh/math/data-scientists.htm" },
            { label: "Glassdoor - Software Engineer Salaries", url: "https://www.glassdoor.com" },
            { label: "Glassdoor - Data Scientist Salaries", url: "https://www.glassdoor.com" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer vs Product Manager", href: "/software-engineer-vs-product-manager" },
            { label: "Software Engineer vs Cybersecurity Analyst", href: "/software-engineer-vs-cybersecurity-analyst" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
          ]}
        />
      </div>
      </>
  )
}