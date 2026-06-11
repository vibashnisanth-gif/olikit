import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const pagePath = "/software-engineer-vs-cybersecurity-analyst"

export const metadata: Metadata = {
  title: "Software Engineer vs Cybersecurity Analyst: Salary & Career Comparison (2026)",
  description: "Compare software engineer and cybersecurity analyst salaries, career paths, education requirements, and job outlook. Detailed compensation analysis across experience levels and industries.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer vs Cybersecurity Analyst: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer and cybersecurity analyst careers. Salary, education, skills, and job outlook analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function SoftwareEngineerVsCybersecurityAnalyst() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer vs Cybersecurity Analyst: Salary & Career Comparison (2026)",
    "Compare software engineer and cybersecurity analyst salaries, career paths, education requirements, and job outlook across experience levels.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/professions` },
    { label: "Software Engineer vs Cybersecurity Analyst", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "Which career pays more: software engineer or cybersecurity analyst?", answer: "Software engineers generally earn higher salaries, especially at senior levels. The average US software engineer earns approximately $120,000, while cybersecurity analysts average $95,000-110,000. Both fields offer strong compensation growth." },
    { question: "What are the main differences in education requirements?", answer: "Both roles typically require a bachelor's degree in computer science or related field. Cybersecurity analysts benefit from specialized certifications such as CISSP, CEH, or CompTIA Security+. Software engineering certifies less but emphasizes portfolio and practical experience." },
    { question: "Which career has better job growth?", answer: "Both fields have excellent growth prospects. Cybersecurity is growing particularly fast due to increasing security threats and regulatory requirements. The US Bureau of Labor Statistics projects 32% growth for cybersecurity roles, compared to 25% for software developers." },
    { question: "Can a software engineer transition to cybersecurity?", answer: "Yes, software engineers have strong foundational skills for transitioning to cybersecurity, particularly in application security, security engineering, and DevSecOps roles. Understanding how software is built is valuable for securing it." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Career Comparison</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer vs Cybersecurity Analyst</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, education requirements, skills, career progression, and job outlook for software engineers and cybersecurity analysts across major global markets.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Software Engineer Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Software Engineering Pays More</h3><p className="text-sm leading-6 text-zinc-600">Software engineers generally earn higher salaries across all experience levels. Cybersecurity offers strong but slightly lower compensation, particularly at senior levels.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Cybersecurity Growing Faster</h3><p className="text-sm leading-6 text-zinc-600">The cybersecurity field is growing at 32% annually, faster than software engineering's 25%. Increasing security threats and regulatory compliance drive demand for cybersecurity professionals.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Different Certification Paths</h3><p className="text-sm leading-6 text-zinc-600">Cybersecurity emphasizes professional certifications (CISSP, CEH, CompTIA Security+). Software engineering places more value on practical experience, portfolio, and open-source contributions.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Both Essential to Organizations</h3><p className="text-sm leading-6 text-zinc-600">Both professions are critical to modern organizations. Software engineers build products and systems. Cybersecurity analysts protect those systems and data from threats.</p></div>
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
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Cybersecurity Analyst</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level (0-2 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$75,000</td><td className="px-4 py-3 text-right text-zinc-950">$65,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level (3-7 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$120,000</td><td className="px-4 py-3 text-right text-zinc-950">$95,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Senior (8-15 yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$180,000</td><td className="px-4 py-3 text-right text-zinc-950">$140,000</td></tr>
                <tr className="border-t border-zinc-200"><td className="px-4 py-3 font-medium text-zinc-950">Lead/Director (15+ yrs)</td><td className="px-4 py-3 text-right text-zinc-950">$250,000+</td><td className="px-4 py-3 text-right text-zinc-950">$200,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-400">Average US salaries. Cybersecurity salaries vary significantly by industry and clearance level.</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Career Outlook</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Cybersecurity is one of the fastest-growing fields in technology. The US Bureau of Labor Statistics projects 32% growth for information security analysts through 2032, driven by increasing cyber threats and regulatory compliance requirements.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering continues to grow at 25%, with a larger total number of positions. Both fields offer excellent job security, though cybersecurity roles may be less susceptible to outsourcing due to their sensitive nature.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Government and defense contracts, financial services, and healthcare organizations are major employers of cybersecurity talent. Software engineers have broader industry options but face more competition for roles.</p>
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
                <li>Database Design & Optimization</li>
                <li>API Development & Integration</li>
              </ul>
            </div>
            <div className="rounded-md border border-red-100 bg-red-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-950">Cybersecurity Analyst Skills</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                <li>Network Security & Monitoring</li>
                <li>Incident Response & Forensics</li>
                <li>Security Frameworks (NIST, ISO 27001)</li>
                <li>Vulnerability Assessment</li>
                <li>Security Tools (SIEM, IDS/IPS)</li>
                <li>Risk Management & Compliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Work Environment</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineers typically work in collaborative team environments, building and maintaining software products. Remote work is well-established in software engineering, with many companies offering fully remote or hybrid arrangements.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Cybersecurity analysts may work in security operations centers (SOCs), corporate IT security teams, or as consultants. Some roles require on-call availability for incident response. Government and defense cybersecurity roles may require onsite work and security clearances.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Both careers offer strong compensation, career growth, and intellectual challenge. The choice between them depends on whether you prefer building software systems or protecting them from threats.</p>
        </section>

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics - Software Developers", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" },
            { label: "US Bureau of Labor Statistics - Information Security Analysts", url: "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm" },
            { label: "Glassdoor - Cybersecurity Salaries", url: "https://www.glassdoor.com" },
            { label: "(ISC)2 Cybersecurity Workforce Study", url: "https://www.isc2.org" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer vs Data Scientist", href: "/software-engineer-vs-data-scientist" },
            { label: "Software Engineer vs Product Manager", href: "/software-engineer-vs-product-manager" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
          ]}
        />
      </div>
    </Shell>
  )
}
