import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, getSubRegion, getLocalesWithSubRegion, locales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { SITE_URL } from "@/lib/seo/constants"
import { getToolsBySlugs, stateSeoToolSlugs } from "@/lib/content/templates"
import { buildWebPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SourceFooter } from "@/components/source-footer"

type Props = {
  params: Promise<{ locale: string; subregion: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; subregion: string }[] = []
  for (const locale of locales) {
    if (locale.states) {
      for (const state of locale.states) {
        params.push({ locale: locale.slug, subregion: state.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, subregion: subregionSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  const subRegion = getSubRegion(locale, subregionSlug)
  if (!subRegion) return {}
  const validLocales = getLocalesWithSubRegion(subregionSlug)
  const validLocaleSlugs = validLocales.map((l) => l.slug)
  return buildMetadata(locale, null, `/${locale.slug}/state/${subRegion.slug}`, subRegion, validLocaleSlugs)
}

export default async function SubRegionPage({ params }: Props) {
  const { locale: localeSlug, subregion: subregionSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()
  const subRegion = getSubRegion(locale, subregionSlug)
  if (!subRegion) notFound()

  const slug = locale.slug
  const name = subRegion.name
  const countryName = locale.name
  const stateTools = getToolsBySlugs(stateSeoToolSlugs)

  const path = `/${slug}/state/${subRegion.slug}`
  const webPageJsonLd = buildWebPageJsonLd(locale, path, subRegion)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: "Home", url: `${SITE_URL}/${slug}` },
    { label: `${name}, ${countryName}`, url: `${SITE_URL}${path}` },
  ])

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <nav className="text-sm text-zinc-500 mb-6">
        <a href={`/${slug}`} className="hover:text-zinc-800">Home</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">{name}, {countryName}</span>
      </nav>

      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">
          {name}, {countryName} - Free Finance & Business Tools
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Free finance and business tools for {name}, {countryName}. Use our
          calculators to make informed financial decisions with {name}-specific
          rates and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          All Tools for {name}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stateTools.map((tool) => (
            <a
              key={tool.id}
              href={`/${slug}/state/${subRegion.slug}/${tool.slug}`}
              className="block p-5 rounded-lg border border-zinc-200 hover:border-zinc-400 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
              <p className="text-sm text-zinc-500">
                {tool.description.replace("{country}", `${name}, ${countryName}`)}
              </p>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <SourceFooter localeSlug={slug} />
      </div>
    </div>
  )
}
