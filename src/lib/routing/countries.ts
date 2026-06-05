export interface CountryRoute {
  isoCode: string
  slug: string
  localeCode: string
  isDefault: boolean
}

const countryRoutes: CountryRoute[] = [
  { isoCode: "US", slug: "us", localeCode: "en-US", isDefault: true },
  { isoCode: "GB", slug: "uk", localeCode: "en-GB", isDefault: false },
  { isoCode: "AU", slug: "au", localeCode: "en-AU", isDefault: false },
  { isoCode: "CA", slug: "ca", localeCode: "en-CA", isDefault: false },
  { isoCode: "NZ", slug: "nz", localeCode: "en-NZ", isDefault: false },
  { isoCode: "IN", slug: "in", localeCode: "en-IN", isDefault: false },
  { isoCode: "SG", slug: "sg", localeCode: "en-SG", isDefault: false },
]

const countrySlugs = new Set(countryRoutes.map((r) => r.slug))

const isoToSlug: Record<string, string> = {}
for (const route of countryRoutes) {
  isoToSlug[route.isoCode] = route.slug
}

const slugToRoute = new Map(countryRoutes.map((r) => [r.slug, r]))

export function getDefaultCountrySlug(): string {
  const def = countryRoutes.find((r) => r.isDefault)
  return def!.slug
}

export function getSlugByIsoCode(isoCode: string): string | undefined {
  return isoToSlug[isoCode.toUpperCase()]
}

export function isValidSlug(slug: string): boolean {
  return countrySlugs.has(slug)
}

export function getRouteBySlug(slug: string): CountryRoute | undefined {
  return slugToRoute.get(slug)
}

export function getAllRoutes(): CountryRoute[] {
  return countryRoutes
}

export const COUNTRY_COOKIE = "olikit_country"
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365
