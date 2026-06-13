import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, getSubRegion, getLocalesWithSubRegion, locales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { getToolBySlug, getToolsBySlugs, stateSeoToolSlugs } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { generatePageContent } from "@/lib/content/generators"
import { buildBreadcrumbs, getAllInternalLinks, getSubRegionLinks } from "@/lib/linking/internal-links"
import { buildAggregateJsonLd, buildDatasetJsonLd } from "@/lib/seo/json-ld"
import { CalculatorInteractive } from "@/components/calculator-interactive"
import { StateDataTable } from "@/components/state-data-table"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = {
  params: Promise<{ locale: string; subregion: string; tool: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; subregion: string; tool: string }[] = []
  for (const locale of locales) {
    if (locale.states) {
      for (const state of locale.states) {
        for (const tool of getToolsBySlugs(stateSeoToolSlugs)) {
          params.push({ locale: locale.slug, subregion: state.slug, tool: tool.slug })
        }
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, subregion: subregionSlug, tool: toolSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  const subRegion = getSubRegion(locale, subregionSlug)
  if (!subRegion) return {}
  const tool = getToolBySlug(toolSlug)
  if (!tool) return {}
  const validLocales = getLocalesWithSubRegion(subregionSlug)
  const validLocaleSlugs = validLocales.map((l) => l.slug)
  return buildMetadata(locale, tool, `/${locale.slug}/state/${subRegion.slug}/${tool.slug}`, subRegion, validLocaleSlugs)
}

export default async function SubRegionToolPage({ params }: Props) {
  const { locale: localeSlug, subregion: subregionSlug, tool: toolSlug } = await params
  const localeVal = getLocale(localeSlug)
  const toolVal = getToolBySlug(toolSlug)
  if (!localeVal || !toolVal || !stateSeoToolSlugs.includes(toolVal.slug)) notFound()
  const subRegion = getSubRegion(localeVal, subregionSlug)
  if (!subRegion) notFound()

  const locale = localeVal
  const tool = toolVal
  const path = `/${locale.slug}/state/${subRegion.slug}/${tool.slug}`
  const content = generatePageContent(locale, tool, subRegion)
  const links = getAllInternalLinks(tool, locale)
  const breadcrumbs = buildBreadcrumbs(locale, tool, subRegion.slug)
  const jsonLd = buildAggregateJsonLd(tool, locale, path, content.faqs, content.steps)
  const toolName = tool.name
  const stateLinks = getSubRegionLinks(locale, tool)
  const dataPoints = content.stateData?.dataPoints

  const datasetJsonLd = dataPoints ? buildDatasetJsonLd(dataPoints, subRegion) : null

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {datasetJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(datasetJsonLd),
          }}
        />
      )}

      <nav className="text-sm text-zinc-500 mb-6">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href}>
            {i > 0 && <span className="mx-2">/</span>}
            <a href={crumb.href} className="hover:text-zinc-800">
              {crumb.label}
            </a>
          </span>
        ))}
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">{content.h1}</h1>
        <p className="text-lg text-zinc-600 mb-6">{content.intro}</p>
      </div>

      {content.directAnswer && (
        <div className="direct-answer mb-10 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex">
            <div className="w-1 shrink-0 rounded-l-xl bg-blue-500" />
            <div className="min-w-0 flex-1 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">At a Glance</p>
              <p className="mt-2 text-base font-semibold text-zinc-950">{content.directAnswer.question}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-700">{content.directAnswer.answer}</p>
            </div>
          </div>
        </div>
      )}

      {content.aiAnswer && (
        <div className="quick-answer mb-10 rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex">
            <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
            <div className="min-w-0 flex-1 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Quick Answer</p>
              <p className="mt-2 text-base font-semibold text-zinc-950">{content.aiAnswer.question}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-700">{content.aiAnswer.answer}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12">
        <CalculatorInteractive toolSlug={tool.slug} localeSlug={locale.slug} />
      </div>

      {content.steps && content.steps.length > 0 && (
        <section className="mb-10 rounded-lg border border-zinc-200 bg-white px-6 py-7 shadow-sm">
          <h2 className="mb-1 text-xl font-semibold text-zinc-950">
            How to Use the {toolName}
          </h2>
          <p className="mb-6 text-sm text-zinc-500">
            Follow these simple steps to get accurate results in just a few clicks.
          </p>
          <ol className="space-y-5">
            {content.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-zinc-900">{step.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold mb-3">
                {section.heading}
              </h2>
              <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{section.body}</p>
            </section>
          ))}
          {dataPoints && (
            <section>
              <StateDataTable dataPoints={dataPoints} stateName={subRegion.name} />
              <p className="mt-2 text-xs text-zinc-500">
                Sources: Bureau of Labor Statistics, US Census Bureau, state revenue departments (2024). Figures are estimates and may vary by source and year.
              </p>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold mb-3">Related Tools</h3>
            <div className="space-y-2">
              {links
                .filter((l) => l.type === "related")
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-blue-600 hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          {stateLinks.length > 0 && (
            <div className="p-4 rounded-lg border border-zinc-200">
              <h3 className="font-semibold mb-3">
                {toolName} by State
              </h3>
              <div className="space-y-2">
                {stateLinks.slice(0, 8).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-blue-600 hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold mb-3">Other Countries</h3>
            <div className="space-y-2">
              {links
                .filter((l) => l.type === "locale")
                .slice(0, 6)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-blue-600 hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold mb-3">Related Guide</h3>
            <div className="space-y-2">
              {guides
                .filter((g) => g.relatedToolSlugs.includes(tool.slug) || g.category === tool.category)
                .map((g) => (
                  <a
                    key={g.slug}
                    href={`/${locale.slug}/guides/${g.slug}`}
                    className="block text-sm text-blue-600 hover:text-blue-800"
                  >
                    {g.name}
                  </a>
                ))}
            </div>
          </div>

          {content.faqs.length > 0 && (
            <div className="p-4 rounded-lg border border-zinc-200">
              <h3 className="font-semibold mb-3">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {content.faqs.map((faq, i) => (
                  <details key={i} className="text-sm">
                    <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-zinc-500">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <section className="mt-12 border-t border-zinc-200 pt-8">
        <h2 className="text-xl font-semibold mb-4">Compare {toolName}</h2>
        <div className="flex flex-wrap gap-3">
          {links
            .filter((l) => l.type === "comparison")
            .slice(0, 4)
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
        </div>
      </section>

      <div className="mt-10">
        <LastUpdated />
        <SourceFooter localeSlug={locale.slug} />
      </div>
    </div>
  )
}
