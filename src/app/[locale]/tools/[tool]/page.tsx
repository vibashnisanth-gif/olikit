import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { getToolBySlug, tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { generatePageContent } from "@/lib/content/generators"
import { buildBreadcrumbs, getAllInternalLinks } from "@/lib/linking/internal-links"
import { buildAggregateJsonLd } from "@/lib/seo/json-ld"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"
import { AffiliateSidebar } from "@/components/affiliate-sidebar"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { AdUnit } from "@/components/ad-unit"
import { professions } from "@/lib/content/professions-data"
import { SkeletonCard } from "@/components/ui/skeleton"

const CalculatorInteractive = dynamic(
  () => import("@/components/calculator-interactive").then(m => m.CalculatorInteractive),
  { loading: () => <SkeletonCard /> }
)

type Props = {
  params: Promise<{ locale: string; tool: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; tool: string }[] = []
  for (const locale of locales) {
    for (const tool of tools) {
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
  return buildMetadata(locale, tool, `/${locale.slug}/tools/${tool.slug}`)
}

export default async function ToolPage({ params }: Props) {
  const { locale: localeSlug, tool: toolSlug } = await params
  const localeVal = getLocale(localeSlug)
  const toolVal = getToolBySlug(toolSlug)
  if (!localeVal || !toolVal) notFound()

  const locale = localeVal
  const tool = toolVal
  const path = `/${locale.slug}/tools/${tool.slug}`
  const content = generatePageContent(locale, tool)
  const links = getAllInternalLinks(tool, locale)
  const breadcrumbs = buildBreadcrumbs(locale, tool)
  const jsonLd = buildAggregateJsonLd(tool, locale, path, content.faqs, content.steps)
  const toolName = tool.name

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
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
      </nav>

      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">
          {locale.name} calculator
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{content.intro}</p>
      </div>

      {content.directAnswer && (
        <div className="direct-answer rounded-xl border border-zinc-200 bg-white shadow-sm">
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
        <div className="quick-answer rounded-xl border border-zinc-200 bg-white shadow-sm">
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

      <div>
        <CalculatorInteractive toolSlug={tool.slug} localeSlug={locale.slug} />
      </div>

      <div className="flex flex-wrap gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <span className="mr-1 self-center text-sm font-semibold text-zinc-600">Also explore:</span>
        <a href={`/${locale.slug}/salary`} className="rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800">Salary Hub</a>
        <a href={`/${locale.slug}/methodology`} className="rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800">Methodology</a>
        {professions.slice(0, 3).map(p => (
          <a key={p.slug} href={`/${locale.slug}/salary/${p.slug}`} className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50">{p.name} Salary</a>
        ))}
        <a href={`/${locale.slug}/glossary`} className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50">Financial Glossary</a>
      </div>

      {content.steps && content.steps.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white px-6 py-7 shadow-sm">
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

      <NewsletterSignup locale={locale.slug} source="tool-inline" variant="banner" />

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
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Related Tools</h3>
            <div className="space-y-2">
              {links
                .filter((l) => l.type === "related")
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Other Countries</h3>
            <div className="space-y-2">
              {links
                .filter((l) => l.type === "locale")
                .slice(0, 6)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          <AffiliateSidebar
            countrySlug={locale.slug}
            toolCategory={tool.category}
            toolName={tool.name}
          />

          <NewsletterSignup locale={locale.slug} source="tool-sidebar" variant="sidebar" />

          <AdUnit slot="TOOL_PAGE_SLOT" format="rectangle" />

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Related Guide</h3>
            <div className="space-y-2">
              {guides
                .filter((g) => g.relatedToolSlugs.includes(tool.slug) || g.category === tool.category)
                .map((g) => (
                  <a
                    key={g.slug}
                    href={`/${locale.slug}/guides/${g.slug}`}
                    className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {g.name}
                  </a>
                ))}
            </div>
          </div>

          {links.filter((l) => l.type === "content").length > 0 && (
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-zinc-950">Salary Resources</h3>
              <div className="space-y-2">
                {links
                  .filter((l) => l.type === "content")
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          )}

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Salary by Profession</h3>
            <div className="space-y-2">
              {professions.slice(0, 6).map((p) => (
                <a
                  key={p.slug}
                  href={`/${locale.slug}/salary/${p.slug}`}
                  className="block rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {p.name}
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

      <section className="border-t border-zinc-200 pt-8">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Compare {toolName}</h2>
        <div className="flex flex-wrap gap-3">
          {links
            .filter((l) => l.type === "comparison")
            .slice(0, 4)
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
        </div>
      </section>

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}
