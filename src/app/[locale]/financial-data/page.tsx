import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { SITE_URL } from "@/lib/seo/constants"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return {
    title: "Financial Data Library - Olikit",
    description: "Access verified financial data including average salaries, cost of living indices, tax rates, mortgage data, minimum wages, and property tax rates. All data sourced from official government publications.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/financial-data` },
    robots: { index: false, follow: true },
    openGraph: { title: "Financial Data Library - Olikit", description: "Verified financial data from official government sources.", url: `${SITE_URL}/${locale.slug}/financial-data`, siteName: "Olikit", type: "website" },
  }
}

export default async function FinancialDataPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const dataCategories = [
    {
      title: "Average Salary Data",
      description: "State-level average annual salaries from the Bureau of Labor Statistics Occupational Employment and Wage Statistics survey. Includes mean annual wages across all occupations.",
      source: "Bureau of Labor Statistics - OEWS",
      coverage: "All 50 US states + DC",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Average Salary by State", href: `/${locale.slug}/average-salary/california` },
        { label: "Best States for Salary", href: `/${locale.slug}/best-states-for-salary` },
        { label: "Salary Calculator", href: `/${locale.slug}/tools/salary-calculator` },
      ],
    },
    {
      title: "Cost of Living Data",
      description: "State-level cost of living indices from the Bureau of Economic Analysis Regional Price Parities and the Council for Community and Economic Research. Includes overall index plus category breakdowns for housing, utilities, food, transportation, and healthcare.",
      source: "BEA Regional Price Parities, C2ER Cost of Living Index",
      coverage: "11 US states with full category breakdowns; all 50 states BEA data",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Cost of Living by State", href: `/${locale.slug}/cost-of-living/california` },
        { label: "Best States for Cost of Living", href: `/${locale.slug}/best-states-for-cost-of-living` },
        { label: "Salary vs. Cost of Living", href: `/${locale.slug}/salary-vs-cost-of-living/california` },
      ],
    },
    {
      title: "Tax Data",
      description: "State income tax rates and structures including progressive bracket rates, flat tax rates, and no-income-tax states. Property tax data includes effective property tax rates by state.",
      source: "State Revenue Departments, Tax Foundation",
      coverage: "All 50 US states",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Tax Calculator", href: `/${locale.slug}/tools/tax-calculator` },
        { label: "States With Lowest Income Tax", href: `/${locale.slug}/research/states-with-lowest-income-tax` },
        { label: "Salary Calculator", href: `/${locale.slug}/tools/salary-calculator` },
      ],
    },
    {
      title: "Mortgage Data",
      description: "Median home values by state from Zillow Home Value Index. Home affordability metrics including home price-to-income ratios and estimated monthly mortgage payments.",
      source: "Zillow Home Value Index, US Census Bureau",
      coverage: "All 50 US states",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Mortgage Calculator", href: `/${locale.slug}/tools/mortgage-calculator` },
        { label: "Best States for Home Affordability", href: `/${locale.slug}/best-states-for-home-affordability` },
        { label: "Cost of Living by State", href: `/${locale.slug}/cost-of-living/california` },
      ],
    },
    {
      title: "Minimum Wage Data",
      description: "State minimum wage rates including federal minimum wage states and states with above-federal minimum wages. Updated when states enact new minimum wage legislation.",
      source: "US Department of Labor, State Labor Departments",
      coverage: "All 50 US states + DC",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Average Salary by State", href: `/${locale.slug}/average-salary/california` },
        { label: "Salary Calculator", href: `/${locale.slug}/tools/salary-calculator` },
      ],
    },
    {
      title: "Property Tax Data",
      description: "Effective property tax rates by state, calculated as total property taxes paid divided by total home value. Rates vary significantly from under 0.5% to over 2.0%.",
      source: "US Census Bureau, Tax Foundation, State Revenue Departments",
      coverage: "All 50 US states",
      lastReviewed: "June 2026",
      relatedPages: [
        { label: "Mortgage Calculator", href: `/${locale.slug}/tools/mortgage-calculator` },
        { label: "Cost of Living by State", href: `/${locale.slug}/cost-of-living/california` },
      ],
    },
  ]

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Financial Data Library</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Verified financial data sourced from official government publications. All data is reviewed and updated at least annually following each tax year and reporting cycle. Use this library to access raw data and find related tools and resources.</p>
      </div>

      <div className="grid gap-6">
        {dataCategories.map((cat) => (
          <section key={cat.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-zinc-950">{cat.title}</h2>
            <p className="mb-3 text-sm text-zinc-600">{cat.description}</p>
            <div className="mb-3 grid grid-cols-3 gap-4 text-xs">
              <div><span className="font-semibold text-zinc-700">Source:</span> <span className="text-zinc-500">{cat.source}</span></div>
              <div><span className="font-semibold text-zinc-700">Coverage:</span> <span className="text-zinc-500">{cat.coverage}</span></div>
              <div><span className="font-semibold text-zinc-700">Last Reviewed:</span> <span className="text-zinc-500">{cat.lastReviewed}</span></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.relatedPages.map((page) => (
                <Link key={page.href} href={page.href} className="rounded-md bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100">{page.label}</Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}
