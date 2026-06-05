import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { buildLocalBusinessJsonLd, buildOrganizationJsonLd } from "@/lib/seo/json-ld"

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
  return buildMetadata(locale, null, `/${locale.slug}`)
}

export default async function LocalePage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name
  const states = locale.states
  const description = locale.defaultDescription
  const priorityTools = tools.slice(0, 5)

  const websiteJsonLd = buildLocalBusinessJsonLd(locale)
  const organizationJsonLd = buildOrganizationJsonLd(locale)

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Free calculators for {name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Smart financial decisions start here — free calculators built for {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {priorityTools.map((tool) => (
            <a
              key={tool.id}
              href={`/${slug}/tools/${tool.slug}`}
              className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              {tool.shortName}
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-100 pt-6 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Official Government Sources
          </span>
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            7 Countries Supported
          </span>
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Free Forever
          </span>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">All Tools</h2>
            <p className="mt-1 text-sm text-zinc-600">
              High-value finance calculators first, with country-specific SEO pages.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
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

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
          Financial Guides for {name}
        </h2>
        <p className="mb-4 text-zinc-600">
          Comprehensive guides to help you make better financial decisions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <a
              key={guide.id}
              href={`/${slug}/guides/${guide.slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
                {guide.category}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">
                {guide.description.replace("{country}", name)}
              </p>
            </a>
          ))}
        </div>
      </section>

      {states && states.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
            {name} by State
          </h2>
          <div className="flex flex-wrap gap-2 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            {states.map((state) => (
              <a
                key={state.code}
                href={`/${slug}/state/${state.slug}`}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950"
              >
                {state.name}
              </a>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
          Compare Tools Across Countries
        </h2>
        <p className="mb-4 text-zinc-600">
          See how financial metrics differ between countries.
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.slice(0, 3).map((tool) => (
            <a
              key={tool.id}
              href={`/${slug}/tools/${tool.slug}/compare`}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950"
            >
              {tool.name} — Compare
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
