import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { FlagImage } from "@/components/ui/flag-image"
const COUNTRY = { slug: "nz", name: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}", currency: "NZ$", taxAuthority: "Inland Revenue (IRD)" }
const SALARY = { average: 100000, entryLevel: 60000, experienced: 145000 }

export const metadata: Metadata = {
  title: "Data Scientist Salary in New Zealand (2026)",
  description: "Research data scientist salaries in New Zealand. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/data-scientist-salary-new-zealand` },
  openGraph: { title: "Data Scientist Salary in New Zealand", description: "Research data scientist salaries in New Zealand." },
}

export default function DataScientistNZ() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist Salary in New Zealand (2026)",
    "Research data scientist salaries in New Zealand. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/data-scientist-salary-new-zealand`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Data Scientist Salary New Zealand", url: `${SITE_URL}/data-scientist-salary-new-zealand` },
  ])

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><FlagImage code={COUNTRY.slug} size="lg" /> {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Scientist Salary in New Zealand</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">New Zealand offers a compelling combination of data science career opportunities and high quality of life. Auckland, Wellington and Christchurch are the primary technology employment markets, with growing demand for data scientists across fintech, agritech, gaming and government services.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/nz/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/nz/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/nz/salary/data-scientist" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Quality of Life Advantage</h3><p className="text-sm leading-6 text-zinc-600">New Zealand is often chosen for lifestyle and work-life balance alongside career opportunities.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Auckland Commands a Premium</h3><p className="text-sm leading-6 text-zinc-600">Auckland generally offers the highest salaries, though housing costs are also higher than other regions.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">No Regional Taxes</h3><p className="text-sm leading-6 text-zinc-600">New Zealand has no regional or state taxes, simplifying the tax system compared to other countries.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Growing Tech Ecosystem</h3><p className="text-sm leading-6 text-zinc-600">New Zealand's technology sector continues to grow, with increasing startup activity and global investment.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">New Zealand Data Scientist Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-700">Data science remains a growing profession in New Zealand, with demand across technology, financial services, agriculture and government sectors.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">New Zealand's technology sector has seen increased investment and international attention, creating new opportunities for skilled data scientists.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">When evaluating compensation, professionals should consider salary alongside tax obligations, housing costs and lifestyle benefits.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
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
            <a href="/professions/data-scientist" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Data Scientist Hub</a>
            <a href="/nz/salary/data-scientist" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/nz/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/nz/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>
      </div>
      </>
  )
}