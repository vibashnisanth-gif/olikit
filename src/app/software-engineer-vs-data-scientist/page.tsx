import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Software Engineer vs Data Scientist",
  description: "Compare software engineer and data scientist salaries, career paths, and compensation across countries.",
  alternates: { canonical: `${SITE_URL}/software-engineer-vs-data-scientist` },
  openGraph: { title: "Software Engineer vs Data Scientist", description: "Compare software engineer and data scientist compensation." },
}

export default function SoftwareEngineerVsDataScientist() {
  return (
    <Shell>
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Comparison Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer vs Data Scientist</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">A detailed comparison of compensation, career progression and opportunities for software engineers and data scientists across major global markets.</p>
          <p className="mt-3 text-sm leading-7 text-zinc-500">This comparison report is under development. Comprehensive salary, tax and purchasing power analysis will be available soon.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Software Engineer Hub</a>
            <a href="/professions" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">All Professions</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
