import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { getToolsBySlugs, stateSeoToolSlugs } from "@/lib/content/templates"
import { COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { StateNav } from "@/components/state-nav"
import { SITE_URL } from "@/lib/seo/constants"
import { buildWebPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { FlagImage } from "@/components/ui/flag-image"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.filter((l) => l.states).map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale || !locale.states) return {}
  return {
    title: `${locale.name} States & Regions — State-by-State Financial Tools | Olikit`,
    description: `Browse financial calculators and guides for all ${locale.states.length} states and regions in ${locale.name}. State-specific salary, tax, and mortgage calculators.`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/states` },
    openGraph: {
      title: `${locale.name} States & Regions`,
      description: `State-by-state financial tools for ${locale.name}.`,
    },
  }
}

export default async function StatesHubPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale || !locale.states) notFound()

  const slug = locale.slug
  const name = locale.name
  const stateList = locale.states
  const stateSeoTools = getToolsBySlugs(stateSeoToolSlugs)
  const flag = COUNTRY_FLAGS[slug] || ""
  const path = `/${slug}/states`
  const webPageJsonLd = buildWebPageJsonLd(locale, path)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: "Home", url: `${SITE_URL}/${slug}` },
    { label: `${name} States & Regions`, url: `${SITE_URL}${path}` },
  ])

  return (
    <div className="space-y-12">
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
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          <FlagImage code={slug} size="lg" /> {name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {name} States & Regions
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Browse financial calculators and guides for all {stateList.length} states and regions in {name}. Each state has state-specific salary, tax, and mortgage calculators with local rates and regulations.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-zinc-950">Browse by State</h2>
        <StateNav states={stateList} localeSlug={slug} />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-zinc-950">All {name} States & Regions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stateList.map((state) => (
            <a
              key={state.slug}
              href={`/${slug}/state/${state.slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-zinc-950 mb-2">{state.name}</h3>
              <p className="text-sm leading-6 text-zinc-600 mb-3">
                Free financial tools and calculators for {state.name}, {name}.
              </p>
              <div className="flex flex-wrap gap-2">
                {stateSeoTools.map((tool) => (
                  <span
                    key={tool.slug}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600"
                  >
                    {tool.shortName}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {stateSeoTools.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="text-lg font-semibold text-zinc-950 mb-4">State Financial Tools</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {stateSeoTools.map((tool) => (
              <a
                key={tool.slug}
                href={`/${slug}/tools/${tool.slug}`}
                className="block rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <h3 className="font-semibold text-zinc-950 mb-1">{tool.name}</h3>
                <p className="text-sm text-zinc-500">{tool.description.replace("{country}", name)}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
