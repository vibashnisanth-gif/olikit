import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/product-manager-vs-software-engineer"

export const metadata: Metadata = {
  title: "Product Manager vs Software Engineer (2026) Comparison",
  description: "Compare product manager and software engineer salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Product Manager vs Software Engineer (2026) | Olikit",
    description: "Detailed comparison of product manager and software engineer careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function ProductManagerVsSoftwareEngineer() {
  const articleSchema = buildArticleJsonLd(
    "Product Manager vs Software Engineer: Salary & Career Comparison (2026)",
    "Compare product manager and software engineer salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Product Manager vs Software Engineer", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: product manager or software engineer?", answer: "Salaries are broadly comparable at mid-to-senior levels. Software engineers average approximately $120,000 in the US, while product managers average $110,000. At senior levels, both roles have strong earning potential. Software engineers often have higher starting salaries, but PMs can earn more at director levels." },
    { question: "What are the main differences in day-to-day work?", answer: "Product managers focus on strategy, user research, stakeholder management, and defining product requirements. Software engineers focus on building and maintaining software systems, writing code, and solving technical problems. PMs work with people and data; engineers work with code and systems." },
    { question: "Can a product manager transition to software engineering?", answer: "The transition from PM to engineering is less common and typically requires significant additional education in computer science. However, PMs with technical backgrounds may find hybrid roles like technical product management." },
    { question: "Which career has better work-life balance?", answer: "Work-life balance varies by company and role. Software engineering roles often offer more predictable schedules and remote work options. Product management can involve more meetings and stakeholder pressure, particularly during product launches." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Product Manager vs Software Engineer</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for product managers and software engineers across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/product-manager" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Product Manager Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Comparable Mid-Career Compensation</h3><p className="text-sm leading-6 text-zinc-600">Software engineers and product managers earn broadly similar total compensation at mid-career levels. Engineers often have higher starting salaries, while PMs catch up at senior levels.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Skill Sets</h3><p className="text-sm leading-6 text-zinc-600">Software engineering requires deep technical skills in programming and system design. Product management requires strategic thinking, user empathy, stakeholder management, and data analysis.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Career Paths</h3><p className="text-sm leading-6 text-zinc-600">Software engineers advance through technical IC tracks or engineering management. Product managers advance through increasing product responsibility toward Director and CPO roles.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Both in High Demand</h3><p className="text-sm leading-6 text-zinc-600">Both professions have strong demand globally. Software engineering has more total positions. Product management offers clearer paths to executive leadership roles.</p></div>
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
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Software Engineer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$70,000</td><td className="px-4 py-3 text-right text-zinc-950">$75,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$110,000</td><td className="px-4 py-3 text-right text-zinc-950">$120,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$175,000</td><td className="px-4 py-3 text-right text-zinc-950">$180,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Director/Principal (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$240,000+</td><td className="px-4 py-3 text-right text-zinc-950">$250,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering has a larger total addressable job market, with positions available across virtually every industry. The US Bureau of Labor Statistics projects 25% growth for software developers.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product management is increasingly valued as organizations prioritize customer-centric product development. Senior PMs often progress to Director, VP, and CPO roles, offering strong executive career paths.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong remote work opportunities. Software engineering has more established remote work infrastructure. Product management roles increasingly offer hybrid and remote arrangements.</p>
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
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics - Software Developers", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" },
            { label: "Glassdoor - Product Manager Salaries", url: "https://www.glassdoor.com" },
            { label: "Glassdoor - Software Engineer Salaries", url: "https://www.glassdoor.com" },
            { label: "Payscale - Product Manager Salary", url: "https://www.payscale.com" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Product Manager Hub", href: "/product-manager" },
            { label: "Product Manager vs Data Scientist", href: "/product-manager-vs-data-scientist" },
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