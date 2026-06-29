import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { FlagImage } from "@/components/ui/flag-image"
const COUNTRY = { slug: "us", name: "United States", flag: "🇺🇸", currency: "$" }
const SALARY = { average: 85000, entryLevel: 55000, experienced: 130000 }

export const metadata: Metadata = {
  title: "Project Manager Salary in the United States (2026)",
  description: "Research project manager salaries in the United States. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/project-manager-salary-us` },
  openGraph: {
    title: "Project Manager Salary in the United States",
    description: "Research project manager salaries in the United States.",
  },
}

export default function project_managerSalaryUS() {
  const articleSchema = buildArticleJsonLd(
    "Project Manager Salary in the United States (2026)",
    "Research project manager salaries in the United States.",
    `/project-manager-salary-us`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Project Manager Salary United States", url: `${SITE_URL}/project-manager-salary-us` },
  ])

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700"><FlagImage code={COUNTRY.slug} size="lg" /> {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Project Manager Salary in the United States</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">The United States offers competitive salaries for project managers across various industries and experience levels.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString("en-US")}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString("en-US")}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Competitive Salaries</h3><p className="text-sm leading-6 text-zinc-700">The average project manager salary in the United States is {COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Career Growth</h3><p className="text-sm leading-6 text-zinc-700">Career prospects for project managers in the United States remain strong with growing demand.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0–2 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString("en-US")}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3–7 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString("en-US")}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8–15 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString("en-US")}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/project-manager" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Project Manager Hub</a>
            <a href="/project-manager-salary" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Overview</a>
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          </div>
        </section>
      </div>
      </>
  )
}