import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"

const COUNTRY = { slug: "in", name: "India", flag: "\u{1F1EE}\u{1F1F3}", currency: "\u20b9", taxAuthority: "Income Tax Department of India" }
const SALARY = { average: 1200000, entryLevel: 400000, experienced: 2500000 }

function fmt(n: number): string {
  if (n >= 100000) return `\u20b9${(n / 100000).toFixed(1)}L`
  return `\u20b9${n.toLocaleString()}`
}

export const metadata: Metadata = {
  title: "Software Engineer Salary in India (2026)",
  description: "Research software engineer salaries in India. Compare compensation across experience levels, understand taxes and evaluate purchasing power across major technology hubs.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-india` },
  openGraph: { title: "Software Engineer Salary in India", description: "Research software engineer salaries in India." },
  twitter: { card: "summary_large_image", title: "Software Engineer Salary in India", description: "Research software engineer salaries in India." },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Software Engineer Salary in India",
  description: "Research software engineer salaries in India. Compare compensation across experience levels, understand taxes and evaluate purchasing power across major technology hubs.",
  url: `${SITE_URL}/software-engineer-salary-india`,
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/software-engineer-salary-india` },
}

const faqData = [
  { question: "What is the average software engineer salary in India?", answer: "The average software engineer salary in India is approximately ₹12,00,000 per year. Entry-level positions start around ₹4,00,000, while experienced engineers earn up to ₹25,00,000 or more. Bengaluru, Hyderabad and Pune-Gurgaon command the highest salaries, driven by demand from global capability centres and product companies." },
  { question: "Which Indian city offers the highest software engineer salaries?", answer: "Bengaluru generally offers the highest software engineering salaries in India, followed by Hyderabad and Gurgaon. Bengaluru's concentration of global technology companies and startups creates strong demand for engineering talent. Hyderabad has emerged as a competitive market with lower living costs, while Gurgaon serves the Delhi-NCR technology corridor." },
  { question: "How does purchasing power for Indian software engineers compare globally?", answer: "Indian software engineers benefit from significantly lower living costs compared to developed economies, resulting in competitive purchasing power. An engineer earning ₹12,00,000 in Bengaluru enjoys a lifestyle comparable to earning significantly more in US or European cities. When adjusted for purchasing power parity, Indian software engineer compensation is highly competitive globally." },
  { question: "How do the Old and New tax regimes affect Indian software engineer take-home pay?", answer: "India offers two tax regimes. The Old regime allows deductions and exemptions (HRA, 80C, 80D) and is beneficial for those with significant investments and housing costs. The New regime offers lower rates but fewer deductions. For a ₹12,00,000 salary, the New regime typically results in lower taxes. The choice depends on individual investment patterns and housing situation." },
  { question: "What is the job growth outlook for software engineers in India?", answer: "The job outlook for software engineers in India remains exceptionally strong, with the technology sector growing at 8-10% annually. Demand is particularly high in artificial intelligence, cloud computing, cybersecurity and product development. India's digital transformation and the expansion of global capability centres continue to drive substantial hiring across all experience levels." },
  { question: "What is the difference between working at GCCs versus Indian product companies?", answer: "Global Capability Centres (GCCs) of multinational corporations typically offer higher salaries, better work infrastructure and exposure to global engineering practices. Indian product companies offer faster career growth, more ownership and equity opportunities. Both sectors provide strong career development, with GCCs offering international mobility and product companies offering entrepreneurial experience." },
  { question: "What is the career velocity for software engineers in India?", answer: "Career velocity in Indian technology is among the fastest globally. Engineers can progress from entry-level to senior positions within 5-7 years, with corresponding salary growth of 15-25% annually through job switches. The combination of a large talent pool, high demand and competitive dynamics between companies drives rapid career advancement for high-performing engineers." },
]

export default function SoftwareEngineerIN() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary in India (2026)",
    "Research software engineer salaries in India. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/software-engineer-salary-india`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Software Engineer Salary India", url: `${SITE_URL}/software-engineer-salary-india` },
  ])

  return (
    <Shell localeSlug="in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in India</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">India is one of the world's largest and fastest-growing technology talent markets. Bengaluru, Hyderabad, Pune and Gurgaon are major technology hubs offering competitive compensation for software engineers across product development, services, fintech and enterprise software.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.average)}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.entryLevel)}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.experienced)}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/in/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/in/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/in/salary/software-engineer" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Massive Technology Market</h3><p className="text-sm leading-6 text-zinc-600">India is one of the world's largest technology talent markets with a rapidly growing domestic technology sector.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Bengaluru Leads Compensation</h3><p className="text-sm leading-6 text-zinc-600">Bengaluru generally offers the highest software engineering salaries in India, followed by Hyderabad and Gurgaon.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Cost of Living Advantage</h3><p className="text-sm leading-6 text-zinc-600">Lower living costs compared to developed economies can result in competitive purchasing power.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Multiple Tax Regimes</h3><p className="text-sm leading-6 text-zinc-600">India offers Old and New tax regimes with different combinations of rates, deductions and exemptions that affect take-home pay.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">India Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-700">Software engineering is one of India's most dynamic and rapidly evolving professions, with opportunities spanning global technology companies, financial institutions and a vibrant startup ecosystem.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">India's technology sector continues to expand, with increasing demand for engineers in artificial intelligence, cloud computing, cybersecurity and product development.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">When evaluating compensation, professionals should consider salary alongside tax regime choices, housing costs in major cities and purchasing power differences across regions.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">{fmt(SALARY.entryLevel)}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">{fmt(Math.round((SALARY.average + SALARY.experienced) / 2))}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">{fmt(SALARY.experienced)}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/in/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/in/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/in/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqData}
        />
      </div>
    </Shell>
  )
}
