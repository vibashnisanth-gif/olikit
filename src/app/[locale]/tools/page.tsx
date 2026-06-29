import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { tools } from "@/lib/content/templates"
import { buildWebPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import { FlagImage } from "@/components/ui/flag-image"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}

  return {
    title: `Financial Calculators for ${locale.name} | Olikit`,
    description: `Free financial calculators for ${locale.name}. Salary, tax, mortgage, investment, retirement, business loan, and break-even calculators with ${locale.name}-specific rates and regulations.`,
    alternates: {
      canonical: `${SITE_URL}/${locale.slug}/tools`,
    },
    openGraph: {
      title: `Financial Calculators for ${locale.name}`,
      description: `Free financial calculators for ${locale.name}.`,
    },
  }
}

export default async function ToolsHubPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name
  const flag = COUNTRY_FLAGS[slug] || ""
  const categories = [...new Set(tools.map((t) => t.category))]
  const path = `/${slug}/tools`
  const webPageJsonLd = buildWebPageJsonLd(locale, path)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { label: "Home", url: `${SITE_URL}/${slug}` },
    { label: `Financial Calculators`, url: `${SITE_URL}${path}` },
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
          <FlagImage code={slug} size="lg" /> Free financial tools for {name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Financial Calculators for {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Free financial calculators for {name}. Salary, tax, mortgage, investment, retirement, business loan, and break-even calculators with {name}-specific rates and regulations.
        </p>
      </section>

      {categories.map((category) => {
        const categoryTools = tools.filter((t) => t.category === category)
        return (
          <section key={category}>
            <h2 className="mb-4 text-xl font-semibold capitalize text-zinc-950">
              {category} Calculators
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryTools.map((tool) => (
                <a
                  key={tool.id}
                  href={`/${slug}/tools/${tool.slug}`}
                  className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
                >
                  <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
                    {tool.category}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    {tool.description.replace("{country}", name)}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
