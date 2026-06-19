import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { getToolBySlug, tools as allTools } from "@/lib/content/templates"
import { generateComparisonContent } from "@/lib/content/generators"
import { getComparisonLinks } from "@/lib/linking/internal-links"
import { buildWebPageJsonLd, buildFaqJsonLd } from "@/lib/seo/json-ld"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = {
  params: Promise<{ locale: string; tool: string }>
  searchParams: Promise<{ with?: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; tool: string }[] = []
  for (const locale of locales) {
    for (const tool of allTools) {
      params.push({ locale: locale.slug, tool: tool.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, tool: toolSlug } = await params
  const locale = getLocale(localeSlug)
  const tool = getToolBySlug(toolSlug)
  if (!locale || !tool) return {}
  return {
    ...buildMetadata(locale, tool, `/${locale.slug}/tools/${tool.slug}/compare`),
    robots: { index: false, follow: true },
  }
}

export default async function ComparePage({ params, searchParams }: Props) {
  const { locale: localeSlug, tool: toolSlug } = await params
  const { with: compareWith } = await searchParams

  const localeVal = getLocale(localeSlug)
  const toolVal = getToolBySlug(toolSlug)
  if (!localeVal || !toolVal) notFound()

  const locale = localeVal
  const tool = toolVal
  const path = `/${locale.slug}/tools/${tool.slug}/compare`

  const comparisonLinks = getComparisonLinks(tool, locale)

  let comparisonContent = null
  if (compareWith) {
    const otherLocale = getLocale(compareWith)
    if (otherLocale) {
      comparisonContent = generateComparisonContent(tool, locale, otherLocale)
    }
  }

  const localeName = locale.name
  const localeSlug2 = locale.slug
  const toolName = tool.name
  const toolSlug2 = tool.slug

  const webPageJsonLd = buildWebPageJsonLd(locale, path)
  const faqJsonLd = comparisonContent?.faqs ? buildFaqJsonLd(comparisonContent.faqs) : null

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">
          {toolName} - Compare Across Countries
        </h1>
        <p className="text-lg text-zinc-600">
          See how {toolName.toLowerCase()} differs between countries. Select a
          country below to compare with {localeName}.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Compare {localeName} with
        </h2>
        <div className="flex flex-wrap gap-3">
          {comparisonLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                compareWith && link.href.includes(`with=${compareWith}`)
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 hover:bg-zinc-200"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {comparisonContent && (
        <div className="space-y-8">
          <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <h2 className="text-2xl font-bold mb-4">
              {comparisonContent.h1}
            </h2>
            <p className="text-zinc-700 mb-6 leading-relaxed">
              {comparisonContent.intro}
            </p>
            <div className="flex gap-3">
              <a
          href={`/${localeSlug2}/tools/${toolSlug2}`}
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {localeName} Calculator
              </a>
              {compareWith && (
                <a
                  href={`/${compareWith}/tools/${toolSlug2}`}
                  className="px-5 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {getLocale(compareWith)?.name} Calculator
                </a>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {comparisonContent.sections.map((section, i) => (
              <section
                key={i}
                className="p-5 rounded-lg border border-zinc-200"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {section.heading}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <section className="rounded-lg border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold mb-4">FAQs</h2>
            <div className="space-y-4">
              {comparisonContent.faqs.map((faq, i) => (
                <details key={i}>
                  <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-zinc-500 pl-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      )}

      {!comparisonContent && (
        <section className="p-8 rounded-lg border border-dashed border-zinc-300 space-y-6">
          <div className="text-center">
            <p className="text-zinc-500 mb-2">
              Select a country above to compare {toolName} across countries.
            </p>
            <p className="text-sm text-zinc-500">
              See how tax rates, brackets, and rules differ between {localeName} and other countries.
            </p>
          </div>
          <div className="border-t border-zinc-200 pt-6">
            <h3 className="text-sm font-semibold text-zinc-700 mb-3 text-center">
              Quick Compare Examples
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 max-w-lg mx-auto">
              {comparisonLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg bg-white border border-zinc-200 text-center text-sm font-medium text-zinc-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center border-t border-zinc-200 pt-6">
            <a
              href={`/${localeSlug2}/tools/${toolSlug2}`}
              className="inline-block px-6 py-2.5 bg-zinc-950 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Back to {toolName} Calculator
            </a>
          </div>
        </section>
      )}

      <div className="mt-10">
        <LastUpdated />
        <SourceFooter localeSlug={localeSlug2} />
      </div>
    </div>
  )
}
