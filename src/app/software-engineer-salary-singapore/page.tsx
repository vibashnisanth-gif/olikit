import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"

const COUNTRY = { slug: "sg", name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", currency: "S$", taxAuthority: "Inland Revenue Authority of Singapore (IRAS)" }
const SALARY = { average: 72000, entryLevel: 42000, experienced: 110000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in Singapore (2026)",
  description: "Research software engineer salaries in Singapore. Compare compensation across experience levels, understand taxes and evaluate purchasing power in Asia's leading technology hub.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-singapore` },
  openGraph: { title: "Software Engineer Salary in Singapore", description: "Research software engineer salaries in Singapore." },
}

export default function SoftwareEngineerSG() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary in Singapore (2026)",
    "Research software engineer salaries in Singapore. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/software-engineer-salary-singapore`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Software Engineer Salary Singapore", url: `${SITE_URL}/software-engineer-salary-singapore` },
  ])

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in Singapore</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Singapore is a leading global technology and financial hub, attracting software engineers with competitive salaries, a favourable tax environment and strong international career opportunities. The city-state continues to invest heavily in technology infrastructure and digital innovation.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/sg/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/sg/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/sg/salary/software-engineer" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Low Tax Environment</h3><p className="text-sm leading-6 text-zinc-600">Singapore's personal income tax rates are among the lowest in developed economies, allowing engineers to retain more of their earnings.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Global Technology Hub</h3><p className="text-sm leading-6 text-zinc-600">Singapore attracts major technology companies and regional headquarters, creating strong demand for software engineers.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">High Living Costs</h3><p className="text-sm leading-6 text-zinc-600">Housing and general living costs in Singapore are among the highest in Asia and should be factored into compensation evaluations.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">International Career Hub</h3><p className="text-sm leading-6 text-zinc-600">Singapore serves as a gateway for technology careers across Asia-Pacific and global markets.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Singapore Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering is a high-demand profession in Singapore, driven by the city-state's role as a global financial and technology hub.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Demand is particularly strong in fintech, banking technology, e-commerce and government digital services.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">When evaluating compensation, professionals should consider salary alongside tax advantages, CPF contributions and the high cost of housing.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{(SALARY.average + SALARY.experienced / 2).toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/sg/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/sg/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/sg/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
