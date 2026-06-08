import type { Metadata } from "next"
import { locales } from "@/lib/seo/locales"
import { professions, getProfession } from "@/lib/content/professions-data"

const CURRENCY_SYMBOLS: Record<string, string> = {
  us: "$", uk: "£", au: "A$", ca: "C$", nz: "NZ$", in: "₹", sg: "S$",
}

const COUNTRY_FLAGS: Record<string, string> = {
  us: "🇺🇸", uk: "🇬🇧", au: "🇦🇺", ca: "🇨🇦", nz: "🇳🇿", in: "🇮🇳", sg: "🇸🇬",
}

function formatSalary(amount: number, countrySlug: string): string {
  const symbol = CURRENCY_SYMBOLS[countrySlug] || "$"
  if (countrySlug === "in") {
    return `${symbol}${(amount / 100000).toFixed(1)}L`
  }
  return `${symbol}${amount.toLocaleString()}`
}

export const metadata: Metadata = {
  title: "Browse Professions by Salary",
  description: "Browse salaries for software engineer, data scientist, doctor, nurse, teacher, accountant, and more across major economies. Compare highest paying professions.",
  alternates: { canonical: "https://olikit.com/professions" },
  openGraph: {
    title: "Browse Professions by Salary",
    description: "Compare salaries for professions across major economies.",
  },
}

export default function ProfessionsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Olikit Global
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Browse Professions by Salary
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Compare salaries for popular professions across major economies. Find salary data for technology, healthcare, finance, education, engineering, and trades.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Popular Professions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professions.map((prof) => (
            <a
              key={prof.id}
              href={`/us/salary/${prof.slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{prof.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">{prof.description}</p>
              <span className="mt-2 inline-block text-sm font-medium text-emerald-600">View salaries →</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Highest Paying Professions (US)</h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50">
                <th className="px-4 py-3 text-left font-medium text-zinc-700">Profession</th>
                <th className="px-4 py-3 text-left font-medium text-zinc-700">Category</th>
                <th className="px-4 py-3 text-right font-medium text-zinc-700">US Salary</th>
              </tr>
            </thead>
            <tbody>
              {[...professions]
                .sort((a, b) => b.salaries.us.average - a.salaries.us.average)
                .slice(0, 5)
                .map((prof) => (
                <tr key={prof.id} className="border-t border-zinc-100">
                  <td className="px-4 py-3">
                    <a href={`/us/salary/${prof.slug}`} className="font-medium text-zinc-950 hover:text-emerald-600">
                      {prof.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-zinc-500 capitalize">{prof.id}</td>
                  <td className="px-4 py-3 text-right font-medium text-zinc-950">
                    {formatSalary(prof.salaries.us.average, "us")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">All Professions by Country</h2>
        <div className="space-y-4">
          {professions.map((prof) => (
            <div key={prof.id} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">{prof.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{prof.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {locales.map((loc) => {
                  const salary = prof.salaries[loc.slug]
                  return salary ? (
                    <a
                      key={loc.slug}
                      href={`/${loc.slug}/salary/${prof.slug}`}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950 transition-colors"
                    >
                      {COUNTRY_FLAGS[loc.slug]} {loc.name}: {formatSalary(salary.average, loc.slug)}
                    </a>
                  ) : null
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
