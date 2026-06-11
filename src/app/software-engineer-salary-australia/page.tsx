import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

const COUNTRY = { slug: "au", name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", currency: "A$", taxAuthority: "Australian Taxation Office (ATO)" }
const SALARY = { average: 110000, entryLevel: 65000, experienced: 160000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in Australia (2026)",
  description: "Research software engineer salaries in Australia. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-australia` },
  openGraph: { title: "Software Engineer Salary in Australia", description: "Research software engineer salaries in Australia." },
}

export default function SoftwareEngineerAU() {
  return (
    <Shell>
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in Australia</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Australia offers strong software engineering salaries driven by demand across financial services, technology and resources sectors. Sydney, Melbourne, Brisbane and Perth are the primary technology employment markets, with growing startup ecosystems in each city.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/au/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/au/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/au/salary/software-engineer" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Strong Compensation</h3><p className="text-sm leading-6 text-zinc-600">Australia offers some of the highest software engineering salaries outside North America.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Sydney Leads the Market</h3><p className="text-sm leading-6 text-zinc-600">Sydney generally reports the highest salaries, though housing costs are also significantly higher.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Superannuation Adds Value</h3><p className="text-sm leading-6 text-zinc-600">Mandatory superannuation contributions provide additional long-term retirement benefits.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Strong Work-Life Balance</h3><p className="text-sm leading-6 text-zinc-600">Australian work culture and leave entitlements are often cited as quality-of-life advantages.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Australia Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering remains a high-demand profession in Australia, with opportunities spanning technology, financial services, mining and government sectors.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">The technology workforce continues to grow, with increasing demand for experienced engineers in cloud computing, cybersecurity and artificial intelligence.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">When evaluating compensation, professionals should consider salary alongside superannuation, tax obligations and regional housing costs.</p>
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
            <a href="/au/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/au/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/au/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
