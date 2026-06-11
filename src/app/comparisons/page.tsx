import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Software Engineer Comparisons — Country-by-Country Analysis | Olikit",
  description: "Compare software engineer salaries, taxes, and career opportunities across countries. Data-driven comparisons to help you make informed career decisions.",
  alternates: { canonical: `${SITE_URL}/comparisons` },
  openGraph: {
    title: "Software Engineer Comparisons — Country-by-Country Analysis | Olikit",
    description: "Compare software engineer careers across countries.",
    url: `${SITE_URL}/comparisons`,
    siteName: "Olikit",
    type: "website",
  },
}

const comparisons = [
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E8}\u{1F1E6}", nameB: "Canada", href: "/comparisons/software-engineer-us-vs-canada" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/comparisons/software-engineer-us-vs-australia" },
  { flagA: "\u{1F1EC}\u{1F1E7}", nameA: "United Kingdom", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/comparisons/software-engineer-uk-vs-australia" },
  { flagA: "\u{1F1EE}\u{1F1F3}", nameA: "India", flagB: "\u{1F1F8}\u{1F1EC}", nameB: "Singapore", href: "/comparisons/software-engineer-india-vs-singapore" },
]

export default function ComparisonsHubPage() {
  return (
    <Shell>
      <div className="space-y-8">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Comparisons</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            Compare software engineer salaries, taxes, cost of living, and career opportunities across countries.
            Each comparison provides data-driven insights to help you make informed career decisions.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Software Engineer Country Comparisons</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl">{c.flagA}</span>
                  <span className="text-sm font-semibold text-zinc-400">vs</span>
                  <span className="text-3xl">{c.flagB}</span>
                </div>
                <h3 className="text-center text-sm font-semibold text-zinc-950 group-hover:text-emerald-700 transition-colors">
                  {c.nameA} vs {c.nameB}
                </h3>
                <p className="mt-2 text-center text-xs text-zinc-500">
                  Salary, tax, cost of living & career analysis
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  )
}
