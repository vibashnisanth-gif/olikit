import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"

const COUNTRY = { slug: "in", name: "India", flag: "\u{1F1EE}\u{1F1F3}", currency: "\u20b9", taxAuthority: "Income Tax Department of India" }
const SALARY = { average: 1400000, entryLevel: 500000, experienced: 2800000 }

function fmt(n: number): string {
  if (n >= 100000) return `\u20b9${(n / 100000).toFixed(1)}L`
  return `\u20b9${n.toLocaleString()}`
}

export const metadata: Metadata = {
  title: "Data Scientist Salary in India (2026)",
  description: "Research data scientist salaries in India. Compare compensation across experience levels, understand taxes and evaluate purchasing power across major technology hubs.",
  alternates: { canonical: `${SITE_URL}/data-scientist-salary-india` },
  openGraph: { title: "Data Scientist Salary in India", description: "Research data scientist salaries in India." },
}

export default function DataScientistIN() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist Salary in India (2026)",
    "Research data scientist salaries in India. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/data-scientist-salary-india`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Data Scientist Salary India", url: `${SITE_URL}/data-scientist-salary-india` },
  ])

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Scientist Salary in India</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">India is one of the world's largest and fastest-growing technology talent markets. Bengaluru, Hyderabad, Pune and Gurgaon are major technology hubs offering competitive compensation for data scientists across product development, services, fintech and enterprise software.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.average)}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.entryLevel)}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{fmt(SALARY.experienced)}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/in/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/in/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/in/salary/data-scientist" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Massive Technology Market</h3><p className="text-sm leading-6 text-zinc-600">India is one of the world's largest technology talent markets with a rapidly growing domestic technology sector.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Bengaluru Leads Compensation</h3><p className="text-sm leading-6 text-zinc-600">Bengaluru generally offers the highest data scientist salaries in India, followed by Hyderabad and Gurgaon.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Cost of Living Advantage</h3><p className="text-sm leading-6 text-zinc-600">Lower living costs compared to developed economies can result in competitive purchasing power.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Multiple Tax Regimes</h3><p className="text-sm leading-6 text-zinc-600">India offers Old and New tax regimes with different combinations of rates, deductions and exemptions that affect take-home pay.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">India Data Scientist Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-700">Data science is one of India's most dynamic and rapidly evolving professions, with opportunities spanning global technology companies, financial institutions and a vibrant startup ecosystem.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">India's technology sector continues to expand, with increasing demand for data scientists in artificial intelligence, machine learning, big data analytics and product development.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">When evaluating compensation, professionals should consider salary alongside tax regime choices, housing costs in major cities and purchasing power differences across regions.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
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
            <a href="/professions/data-scientist" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Data Scientist Hub</a>
            <a href="/in/salary/data-scientist" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/in/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/in/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
