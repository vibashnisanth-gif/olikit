import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/software-engineer-vs-product-manager"

export const metadata: Metadata = {
  title: "Software Engineer vs Product Manager: Salary & Career Comparison (2026)",
  description: "Compare software engineer and product manager salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer vs Product Manager: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer and product manager careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function SoftwareEngineerVsProductManager() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer vs Product Manager: Salary & Career Comparison (2026)",
    "Compare software engineer and product manager salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Software Engineer vs Product Manager", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: software engineer or product manager?", answer: "Salaries are broadly comparable at mid-to-senior levels. Software engineers average approximately $120,000 in the US, while product managers average $110,000-130,000. At senior levels, both roles have strong earning potential, with product managers at top tech companies earning $200,000+ in total compensation." },
    { question: "What are the main differences in day-to-day work?", answer: "Software engineers focus on building and maintaining software systems, writing code, and solving technical problems. Product managers focus on strategy, user research, stakeholder management, and defining product requirements. Engineers work with code; PMs work with people and data." },
    { question: "Can a software engineer transition to product management?", answer: "Yes, the transition from engineering to product management is common. Software engineers bring technical credibility and understanding of development processes. Additional skills in user research, data analysis, and stakeholder management are needed." },
    { question: "Which career has better job security?", answer: "Both careers have strong demand. Software engineering has a larger number of total positions. Product management is more competitive for entry-level roles but offers strong career progression for experienced professionals." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer vs Product Manager</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for software engineers and product managers across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Software Engineer Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Comparable Compensation</h3><p className="text-sm leading-6 text-zinc-600">Software engineers and product managers earn broadly similar total compensation. Engineers may have higher starting salaries, while PMs often catch up at senior levels.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Career Paths</h3><p className="text-sm leading-6 text-zinc-600">Engineering focuses on technical depth and system building. Product management focuses on strategy, user empathy, and cross-functional leadership. Choose based on whether you prefer building or defining.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Overlapping Skill Sets</h3><p className="text-sm leading-6 text-zinc-600">Both roles benefit from strong communication, analytical thinking, and understanding of technology. Technical PMs who can understand engineering constraints are highly valued.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Both in High Demand</h3><p className="text-sm leading-6 text-zinc-600">Both professions have strong job growth. Software engineering has more entry-level positions. Product management is more competitive to break into but offers rapid advancement for high performers.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Software Engineer</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Product Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$75,000</td><td className="px-4 py-3 text-right text-zinc-950">$70,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$120,000</td><td className="px-4 py-3 text-right text-zinc-950">$115,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$180,000</td><td className="px-4 py-3 text-right text-zinc-950">$175,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Director/Principal (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$250,000+</td><td className="px-4 py-3 text-right text-zinc-950">$240,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Average US salaries. Total compensation may include equity and bonuses.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering offers a larger total job market with more predictable career progression through engineering levels. The US Bureau of Labor Statistics projects 25% growth for software developers.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product management offers a path to executive leadership roles, with many CEOs and C-suite executives having PM backgrounds. The role is increasingly valued as organizations prioritize customer-centric product development.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong compensation growth. Engineering may offer faster early-career salary progression, while PMs often see significant jumps when moving into senior and director-level roles.</p>
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
                <li>Cloud Platforms & DevOps</li>
                <li>Testing & Code Quality</li>
                <li>Technical Problem Solving</li>
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
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineers progress through technical career ladders: Junior, Mid, Senior, Staff, Principal, and Distinguished Engineer. Each level brings more technical responsibility, mentorship, and architectural decision-making.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Product managers progress from Associate PM to PM, Senior PM, Director of Product, and VP/CPO. Career advancement brings broader product responsibility, team management, and strategic influence.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both paths offer excellent long-term career prospects. Engineers who enjoy deep technical work can advance through individual contributor tracks. PMs who enjoy strategy and leadership can advance into executive roles.</p>
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
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer vs Data Scientist", href: "/software-engineer-vs-data-scientist" },
            { label: "Software Engineer vs Cybersecurity Analyst", href: "/software-engineer-vs-cybersecurity-analyst" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
          ]}
        />
      </div>
    </Shell>
  )
}
