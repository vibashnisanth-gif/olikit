import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { SITE_URL } from "@/lib/seo/constants"
import { getGuideBySlug, guides } from "@/lib/content/guide-templates"
import { generateGuideContent } from "@/lib/content/guide-generators"
import { buildBreadcrumbs } from "@/lib/linking/internal-links"
import { buildFaqJsonLd, buildHowToJsonLd, buildBreadcrumbJsonLd, buildSpeakableJsonLd, buildWebPageJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = {
  params: Promise<{ locale: string; guide: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; guide: string }[] = []
  for (const locale of locales) {
    for (const guide of guides) {
      params.push({ locale: locale.slug, guide: guide.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, guide: guideSlug } = await params
  const locale = getLocale(localeSlug)
  const guide = getGuideBySlug(guideSlug)
  if (!locale || !guide) return {}
  return buildMetadata(locale, null, `/${locale.slug}/guides/${guide.slug}`)
}

export default async function GuidePage({ params }: Props) {
  const { locale: localeSlug, guide: guideSlug } = await params
  const localeVal = getLocale(localeSlug)
  const guideVal = getGuideBySlug(guideSlug)
  if (!localeVal || !guideVal) notFound()

  const locale = localeVal
  const guide = guideVal
  const path = `/${locale.slug}/guides/${guide.slug}`
  const content = generateGuideContent(guide, locale)
  const breadcrumbs = buildBreadcrumbs(locale)

  const guideName = guide.name
  const schemas = [
    buildArticleJsonLd(content.h1, content.intro, path, locale),
    buildWebPageJsonLd(locale, path),
    buildBreadcrumbJsonLd([
      { label: "Home", url: `${SITE_URL}/${locale.slug}` },
      { label: guideName, url: `${SITE_URL}${path}` },
    ]),
    buildSpeakableJsonLd(),
    ...(content.faqs.length > 0 ? [buildFaqJsonLd(content.faqs)] : []),
    ...(content.steps && content.steps.length > 0
      ? [buildHowToJsonLd(guideName, guide.description, content.steps.map((s) => ({ name: s.name, text: s.text })))]
      : []),
  ]

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <nav className="text-sm text-zinc-500 mb-6">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href}>
            {i > 0 && <span className="mx-2">/</span>}
            <a href={crumb.href} className="hover:text-zinc-800">
              {crumb.label}
            </a>
          </span>
        ))}
        <span className="mx-2">/</span>
        <span className="text-zinc-800">{guideName}</span>
      </nav>

      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">
          {locale.name} guide
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{content.intro}</p>
      </div>

      {content.directAnswer && (
        <div className="direct-answer rounded-lg border border-blue-200 bg-blue-50 px-6 py-5 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            At a Glance
          </p>
          <p className="mb-1 text-base font-semibold text-blue-900">
            {content.directAnswer.question}
          </p>
          <p className="text-sm leading-relaxed text-blue-800">
            {content.directAnswer.answer}
          </p>
        </div>
      )}

      {content.toolLinks.length > 0 && (
        <div className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">
            Related Calculators
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.toolLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {content.steps && content.steps.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white px-6 py-7 shadow-sm">
          <h2 className="mb-1 text-xl font-semibold text-zinc-950">
            How to Use This Guide
          </h2>
          <p className="mb-6 text-sm text-zinc-500">
            Follow these steps to get the most out of this {guideName.toLowerCase()}.
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
                  {step.url && (
                    <a
                      href={step.url}
                      className="mt-1 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-800"
                    >
                      Use the calculator &rarr;
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          {content.sections.map((section, i) => (
            <section key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-zinc-950">
                {section.heading}
              </h2>
              <p className="text-zinc-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <aside className="space-y-6">
          {content.toolLinks.length > 0 && (
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-zinc-950">Calculators</h3>
              <div className="space-y-2">
                {content.toolLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-2 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">All Guides</h3>
            <div className="space-y-2">
              {guides.map((g) => (
                <a
                  key={g.slug}
                  href={`/${locale.slug}/guides/${g.slug}`}
                  className={`block rounded-md px-2 py-1.5 text-sm hover:bg-zinc-100 ${
                    g.slug === guide.slug
                      ? "font-medium text-emerald-700 bg-emerald-50"
                      : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {g.name}
                </a>
              ))}
            </div>
          </div>

          {content.faqs.length > 0 && (
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-zinc-950">
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

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}
