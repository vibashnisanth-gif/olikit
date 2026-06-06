import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { SITE_URL } from "@/lib/seo/constants"
import { SearchClient } from "@/components/search-client"
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
    title: "Search - Olikit",
    description: "Search across all Olikit calculators, guides, salary data, cost of living data, glossary terms, and research reports.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/search` },
  }
}

export default async function SearchPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Search Olikit</h1>
        <p className="mt-2 text-sm text-zinc-600">Search across calculators, guides, salary data, cost of living data, glossary terms, and research reports.</p>
      </div>
      <SearchClient localeSlug={locale.slug} />
      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
