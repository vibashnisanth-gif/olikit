import { getLocaleSources } from "@/lib/seo/sources"
import { getLocale } from "@/lib/seo/locales"

interface SourceFooterProps {
  localeSlug: string
}

export function SourceFooter({ localeSlug }: SourceFooterProps) {
  const locale = getLocale(localeSlug)
  if (!locale) return null

  const sources = getLocaleSources(localeSlug)
  if (!sources) return null

  const localeName = locale.name

  return (
    <section className="border-t border-border-light pt-8 space-y-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-4">
          Official Sources
        </h2>
        <p className="text-sm text-text-muted mb-4">
          {localeName} calculators use data from the following official government agencies:
        </p>
        <ul className="space-y-3">
          {sources.officialSources.map((source) => (
            <li key={source.name} className="text-sm">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                {source.name}
              </a>
              <span className="text-text-muted"> &mdash; {source.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3">
          Methodology
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">{sources.methodology}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3">
          Data Sources
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          All tax brackets, contribution rates, and economic data used in our
          calculators are sourced from the official government publications listed
          above. Rates are updated at least annually to reflect the latest tax year
          and regulatory changes. Users should verify critical figures with
          official sources or qualified professionals.
        </p>
      </div>

      <p className="text-xs text-text-muted italic">
        Last updated: {sources.lastUpdated}. Information may change; always verify with official sources.
      </p>
    </section>
  )
}
