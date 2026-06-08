import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getAllCountries, COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

export const metadata: Metadata = {
  title: "Data Sources — Where Olikit Gets Its Data",
  description: "Official data sources used by Olikit including IRS, HMRC, ATO, CRA, IRD, Indian Income Tax Department, IRAS, and government labor statistics.",
  alternates: { canonical: `${SITE_URL}/data-sources` },
}

const sources = [
  { slug: "us", tax: "IRS — Internal Revenue Service", taxUrl: "https://www.irs.gov", labor: "Bureau of Labor Statistics", laborUrl: "https://www.bls.gov" },
  { slug: "uk", tax: "HMRC — HM Revenue & Customs", taxUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs", labor: "Office for National Statistics", laborUrl: "https://www.ons.gov.uk" },
  { slug: "au", tax: "ATO — Australian Taxation Office", taxUrl: "https://www.ato.gov.au", labor: "Australian Bureau of Statistics", laborUrl: "https://www.abs.gov.au" },
  { slug: "ca", tax: "CRA — Canada Revenue Agency", taxUrl: "https://www.canada.ca/en/revenue-agency.html", labor: "Statistics Canada", laborUrl: "https://www.statcan.gc.ca" },
  { slug: "nz", tax: "IRD — Inland Revenue Department", taxUrl: "https://www.ird.govt.nz", labor: "Stats NZ", laborUrl: "https://www.stats.govt.nz" },
  { slug: "in", tax: "Income Tax Department", taxUrl: "https://www.incometax.gov.in", labor: "Ministry of Statistics and Programme Implementation", laborUrl: "https://www.mospi.gov.in" },
  { slug: "sg", tax: "IRAS — Inland Revenue Authority of Singapore", taxUrl: "https://www.iras.gov.sg", labor: "Department of Statistics Singapore", laborUrl: "https://www.singstat.gov.sg" },
]

export default function DataSourcesPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Sources</h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600">
          Olikit uses official government data and publications for all tax and salary calculations.
        </p>
      </section>

      <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white">
        {sources.map((s) => (
          <div key={s.slug} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <span className="text-xl">{COUNTRY_FLAGS[s.slug]}</span>
              <div>
                <p className="text-sm font-semibold text-zinc-950">{COUNTRY_NAMES[s.slug]}</p>
                <p className="text-xs text-zinc-500">Tax: <a href={s.taxUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">{s.tax}</a></p>
                <p className="text-xs text-zinc-500">Labor: <a href={s.laborUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">{s.labor}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
