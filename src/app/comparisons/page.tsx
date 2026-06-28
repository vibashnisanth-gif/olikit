import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
export const metadata: Metadata = {
    title: "Salary Comparisons — Software Engineer, Data Scientist & Cross-Profession Analysis",
  description: "Compare software engineer, data scientist, and product manager salaries, taxes, and career opportunities across countries. Cross-profession and cross-country analysis.",
  alternates: { canonical: `${SITE_URL}/comparisons` },
  openGraph: {
  title: "Salary Comparisons — Software Engineer, Data Scientist & Cross-Profession Analysis",
    description: "Compare salaries, taxes, and career opportunities across countries and professions.",
    url: `${SITE_URL}/comparisons`,
    siteName: "Olikit",
    type: "website",
  },
}

const seComparisons = [
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E8}\u{1F1E6}", nameB: "Canada", href: "/software-engineer-us-vs-canada" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/software-engineer-us-vs-australia" },
  { flagA: "\u{1F1EC}\u{1F1E7}", nameA: "United Kingdom", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/software-engineer-uk-vs-australia" },
  { flagA: "\u{1F1EE}\u{1F1F3}", nameA: "India", flagB: "\u{1F1F8}\u{1F1EC}", nameB: "Singapore", href: "/software-engineer-india-vs-singapore" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1EC}\u{1F1E7}", nameB: "United Kingdom", href: "/software-engineer-us-vs-uk" },
]

const dsComparisons = [
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E8}\u{1F1E6}", nameB: "Canada", href: "/comparisons/data-scientist-us-vs-canada" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/comparisons/data-scientist-us-vs-australia" },
  { flagA: "\u{1F1EC}\u{1F1E7}", nameA: "United Kingdom", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/comparisons/data-scientist-uk-vs-australia" },
  { flagA: "\u{1F1EE}\u{1F1F3}", nameA: "India", flagB: "\u{1F1F8}\u{1F1EC}", nameB: "Singapore", href: "/comparisons/data-scientist-india-vs-singapore" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1EC}\u{1F1E7}", nameB: "United Kingdom", href: "/comparisons/data-scientist-us-vs-uk" },
]

const pmComparisons = [
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1EC}\u{1F1E7}", nameB: "United Kingdom", href: "/product-manager-us-vs-uk" },
  { flagA: "\u{1F1FA}\u{1F1F8}", nameA: "United States", flagB: "\u{1F1E8}\u{1F1E6}", nameB: "Canada", href: "/product-manager-us-vs-canada" },
  { flagA: "\u{1F1EC}\u{1F1E7}", nameA: "United Kingdom", flagB: "\u{1F1E6}\u{1F1FA}", nameB: "Australia", href: "/product-manager-uk-vs-australia" },
]

const crossProfessionComparisons = [
  { nameA: "Software Engineer", nameB: "Data Scientist", href: "/software-engineer-vs-data-scientist", desc: "Compare compensation, skills, education, and career outlook." },
  { nameA: "Software Engineer", nameB: "Product Manager", href: "/software-engineer-vs-product-manager", desc: "Side-by-side analysis of salary, career path, and job satisfaction." },
  { nameA: "Software Engineer", nameB: "Cybersecurity Analyst", href: "/software-engineer-vs-cybersecurity-analyst", desc: "Salary, demand, and skill set comparison." },
  { nameA: "Data Scientist", nameB: "Software Engineer", href: "/data-scientist-vs-software-engineer", desc: "Compensation, education requirements, and career trajectory." },
  { nameA: "Data Scientist", nameB: "Product Manager", href: "/data-scientist-vs-product-manager", desc: "Salary benchmarks and career progression." },
  { nameA: "Data Scientist", nameB: "Data Analyst", href: "/data-scientist-vs-data-analyst", desc: "Role scope, compression, and skill comparison." },
  { nameA: "Product Manager", nameB: "Software Engineer", href: "/product-manager-vs-software-engineer", desc: "PM-focused comparison of salary, career path, and skills." },
  { nameA: "Product Manager", nameB: "Data Scientist", href: "/product-manager-vs-data-scientist", desc: "Compensation, education, and career progression analysis." },
]

export default function ComparisonsHubPage() {
  return (
      <div className="space-y-8">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Salary Comparisons</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            Compare salaries, taxes, cost of living, and career opportunities across countries and professions.
            Each comparison provides data-driven insights to help you make informed career decisions.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Software Engineer Country Comparisons</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {seComparisons.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl">{c.flagA}</span>
                  <span className="text-sm font-semibold text-zinc-500">vs</span>
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

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Data Scientist Country Comparisons</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {dsComparisons.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl">{c.flagA}</span>
                  <span className="text-sm font-semibold text-zinc-500">vs</span>
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

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Product Manager Country Comparisons</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pmComparisons.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl">{c.flagA}</span>
                  <span className="text-sm font-semibold text-zinc-500">vs</span>
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

        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-6 text-lg font-semibold text-zinc-950 sm:text-xl">Cross-Profession Comparisons</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {crossProfessionComparisons.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300"
              >
                <h3 className="text-center text-sm font-semibold text-zinc-950 group-hover:text-emerald-700 transition-colors mb-2">
                  {c.nameA} vs {c.nameB}
                </h3>
                <p className="text-center text-xs text-zinc-500">
                  {c.desc}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
  )
}