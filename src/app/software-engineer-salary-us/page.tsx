import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

const COUNTRY = { slug: "us", name: "United States", flag: "\u{1F1FA}\u{1F1F8}", currency: "$", taxAuthority: "Internal Revenue Service (IRS)" }
const SALARY = { average: 120000, entryLevel: 75000, experienced: 180000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in the United States (2026)",
  description: "Research software engineer salaries in the United States. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-${COUNTRY.slug}` },
  openGraph: {
    title: "Software Engineer Salary in the United States",
    description: "Research software engineer salaries in the United States.",
  },
}

export default function SoftwareEngineerUS() {
  return (
    <Shell>
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in the United States</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">The United States consistently reports some of the highest software engineering salaries in the world. Technology hubs across California, Washington, New York and Texas offer competitive compensation for skilled engineers.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href={`/us/salary/software-engineer`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Highest Salaries Globally</h3><p className="text-sm leading-6 text-zinc-600">The US offers some of the highest software engineer salaries in the world, particularly in major technology hubs.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Taxes Affect Take-Home Pay</h3><p className="text-sm leading-6 text-zinc-600">Federal and state income taxes, along with healthcare costs, can significantly affect real earnings.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Location Matters</h3><p className="text-sm leading-6 text-zinc-600">Salaries vary significantly between cities such as San Francisco, Seattle, New York and Austin.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Purchasing Power Varies</h3><p className="text-sm leading-6 text-zinc-600">High salaries in expensive cities may result in similar purchasing power to lower salaries in affordable regions.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">US Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering remains one of the highest-paid professions in the United States, with strong demand across technology companies, financial institutions and enterprise organizations.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">The US technology sector continues to drive innovation and compensation growth, particularly in artificial intelligence, cloud computing and cybersecurity.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">When evaluating compensation, professionals should consider salary alongside taxes, benefits, equity compensation and cost of living.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">${SALARY.entryLevel.toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">${(SALARY.average + SALARY.experienced / 2).toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">${SALARY.experienced.toLocaleString()}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/us/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
