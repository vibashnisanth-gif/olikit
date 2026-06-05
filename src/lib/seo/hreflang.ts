import { locales } from "./locales"
import { SITE_URL } from "./constants"

export interface HreflangTag {
  rel: "alternate"
  href: string
  hreflang: string
}

export function generateHreflangTags(
  path: string,
  currentLocale: string,
  validLocaleSlugs?: string[]
): HreflangTag[] {
  const tags: HreflangTag[] = []
  const filteredLocales = validLocaleSlugs
    ? locales.filter((l) => validLocaleSlugs.includes(l.slug))
    : locales

  for (const locale of filteredLocales) {
    const localePath = path.replace(/^\/(us|uk|au|ca|nz|in|sg)(\/|$)/, (_, _slug, rest) =>
      `/${locale.slug}${rest}`
    )
    const fullUrl = `${SITE_URL}${localePath}`

    tags.push({
      rel: "alternate",
      href: fullUrl,
      hreflang: locale.code,
    })
  }

  tags.push({
    rel: "alternate",
    href: `${SITE_URL}${path.replace(/^\/(us|uk|au|ca|nz|in|sg)/, "")}`,
    hreflang: "x-default",
  })

  return tags
}

export function generateLocaleSwitchUrl(
  currentPath: string,
  fromSlug: string,
  toSlug: string
): string {
  return currentPath.replace(`/${fromSlug}`, `/${toSlug}`)
}
