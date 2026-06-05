import type { Locale, SubRegion } from "@/types/seo"

export const locales: Locale[] = [
  {
    code: "en-US",
    name: "United States",
    slug: "us",
    currency: { symbol: "$", code: "USD", name: "US Dollar" },
    taxTerms: {
      incomeTaxYear: "2024-2025",
      vatName: "Sales Tax",
      vatRate: 0,
      currency: "USD",
    },
    language: "en",
    region: "north-america",
    defaultTitle: "Free Online Finance & Business Tools",
    defaultDescription:
      "Free finance, salary, tax, mortgage and business calculators. Make informed decisions with our comprehensive suite of online tools.",
    states: usStates(),
    googleProperty: "olikit.com",
    googleAdsId: "ca-pub-xxxxxxxx",
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-GB",
    name: "United Kingdom",
    slug: "uk",
    currency: { symbol: "\u00a3", code: "GBP", name: "British Pound" },
    taxTerms: {
      incomeTaxYear: "2024-2025",
      vatName: "VAT",
      vatRate: 20,
      currency: "GBP",
    },
    language: "en",
    region: "europe",
    defaultTitle: "Free Online Finance & Business Tools United Kingdom",
    defaultDescription:
      "Free UK finance, salary, tax and business calculators. Make informed decisions with our comprehensive suite of online tools.",
    googleProperty: "olikit.com",
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-AU",
    name: "Australia",
    slug: "au",
    currency: { symbol: "A$", code: "AUD", name: "Australian Dollar" },
    taxTerms: {
      incomeTaxYear: "2024-2025",
      vatName: "GST",
      vatRate: 10,
      currency: "AUD",
    },
    language: "en",
    region: "oceania",
    defaultTitle: "Free Online Finance & Business Tools Australia",
    defaultDescription:
      "Free Australian finance, salary, tax and business calculators. Make informed decisions with our online tools.",
    states: [
      { code: "nsw", name: "New South Wales", slug: "nsw" },
      { code: "vic", name: "Victoria", slug: "vic" },
      { code: "qld", name: "Queensland", slug: "qld" },
      { code: "wa", name: "Western Australia", slug: "wa" },
      { code: "sa", name: "South Australia", slug: "sa" },
      { code: "tas", name: "Tasmania", slug: "tas" },
    ],
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-CA",
    name: "Canada",
    slug: "ca",
    currency: { symbol: "C$", code: "CAD", name: "Canadian Dollar" },
    taxTerms: {
      incomeTaxYear: "2024",
      vatName: "GST/HST",
      vatRate: 5,
      currency: "CAD",
    },
    language: "en",
    region: "north-america",
    defaultTitle: "Free Online Finance & Business Tools Canada",
    defaultDescription:
      "Free Canadian finance, salary, tax and mortgage calculators. Make informed decisions with our online tools.",
    states: [
      { code: "on", name: "Ontario", slug: "ontario" },
      { code: "bc", name: "British Columbia", slug: "british-columbia" },
      { code: "ab", name: "Alberta", slug: "alberta" },
      { code: "qc", name: "Quebec", slug: "quebec" },
    ],
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-NZ",
    name: "New Zealand",
    slug: "nz",
    currency: { symbol: "NZ$", code: "NZD", name: "New Zealand Dollar" },
    taxTerms: {
      incomeTaxYear: "2024-2025",
      vatName: "GST",
      vatRate: 15,
      currency: "NZD",
    },
    language: "en",
    region: "oceania",
    defaultTitle: "Free Online Finance & Business Tools New Zealand",
    defaultDescription:
      "Free New Zealand finance, salary, tax and business calculators. Make informed decisions with our online tools.",
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-IN",
    name: "India",
    slug: "in",
    currency: { symbol: "\u20b9", code: "INR", name: "Indian Rupee" },
    taxTerms: {
      incomeTaxYear: "2024-2025",
      vatName: "GST",
      vatRate: 18,
      currency: "INR",
    },
    language: "en",
    region: "asia",
    defaultTitle: "Free Online Finance & Business Tools India",
    defaultDescription:
      "Free Indian finance, salary, tax and business calculators. Make informed decisions with our online tools.",
    states: [
      { code: "mh", name: "Maharashtra", slug: "maharashtra" },
      { code: "dl", name: "Delhi", slug: "delhi" },
      { code: "ka", name: "Karnataka", slug: "karnataka" },
      { code: "tn", name: "Tamil Nadu", slug: "tamil-nadu" },
      { code: "up", name: "Uttar Pradesh", slug: "uttar-pradesh" },
      { code: "wb", name: "West Bengal", slug: "west-bengal" },
      { code: "gj", name: "Gujarat", slug: "gujarat" },
      { code: "rj", name: "Rajasthan", slug: "rajasthan" },
    ],
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
  {
    code: "en-SG",
    name: "Singapore",
    slug: "sg",
    currency: { symbol: "S$", code: "SGD", name: "Singapore Dollar" },
    taxTerms: {
      incomeTaxYear: "2024",
      vatName: "GST",
      vatRate: 9,
      currency: "SGD",
    },
    language: "en",
    region: "asia",
    defaultTitle: "Free Online Finance & Business Tools Singapore",
    defaultDescription:
      "Free Singapore finance, salary, tax and business calculators. Make informed decisions with our online tools.",
    googleSearchConsoleId: "G-zqYpV3qRnw",
  },
]

function usStates(): SubRegion[] {
  return [
    { code: "al", name: "Alabama", slug: "alabama" },
    { code: "ak", name: "Alaska", slug: "alaska" },
    { code: "az", name: "Arizona", slug: "arizona" },
    { code: "ar", name: "Arkansas", slug: "arkansas" },
    { code: "ca", name: "California", slug: "california" },
    { code: "co", name: "Colorado", slug: "colorado" },
    { code: "ct", name: "Connecticut", slug: "connecticut" },
    { code: "de", name: "Delaware", slug: "delaware" },
    { code: "dc", name: "District of Columbia", slug: "district-of-columbia" },
    { code: "fl", name: "Florida", slug: "florida" },
    { code: "ga", name: "Georgia", slug: "georgia" },
    { code: "hi", name: "Hawaii", slug: "hawaii" },
    { code: "id", name: "Idaho", slug: "idaho" },
    { code: "il", name: "Illinois", slug: "illinois" },
    { code: "in", name: "Indiana", slug: "indiana" },
    { code: "ia", name: "Iowa", slug: "iowa" },
    { code: "ks", name: "Kansas", slug: "kansas" },
    { code: "ky", name: "Kentucky", slug: "kentucky" },
    { code: "la", name: "Louisiana", slug: "louisiana" },
    { code: "me", name: "Maine", slug: "maine" },
    { code: "md", name: "Maryland", slug: "maryland" },
    { code: "ma", name: "Massachusetts", slug: "massachusetts" },
    { code: "mi", name: "Michigan", slug: "michigan" },
    { code: "mn", name: "Minnesota", slug: "minnesota" },
    { code: "ms", name: "Mississippi", slug: "mississippi" },
    { code: "mo", name: "Missouri", slug: "missouri" },
    { code: "mt", name: "Montana", slug: "montana" },
    { code: "ne", name: "Nebraska", slug: "nebraska" },
    { code: "nv", name: "Nevada", slug: "nevada" },
    { code: "nh", name: "New Hampshire", slug: "new-hampshire" },
    { code: "nj", name: "New Jersey", slug: "new-jersey" },
    { code: "nm", name: "New Mexico", slug: "new-mexico" },
    { code: "ny", name: "New York", slug: "new-york" },
    { code: "nc", name: "North Carolina", slug: "north-carolina" },
    { code: "nd", name: "North Dakota", slug: "north-dakota" },
    { code: "oh", name: "Ohio", slug: "ohio" },
    { code: "ok", name: "Oklahoma", slug: "oklahoma" },
    { code: "or", name: "Oregon", slug: "oregon" },
    { code: "pa", name: "Pennsylvania", slug: "pennsylvania" },
    { code: "ri", name: "Rhode Island", slug: "rhode-island" },
    { code: "sc", name: "South Carolina", slug: "south-carolina" },
    { code: "sd", name: "South Dakota", slug: "south-dakota" },
    { code: "tn", name: "Tennessee", slug: "tennessee" },
    { code: "tx", name: "Texas", slug: "texas" },
    { code: "ut", name: "Utah", slug: "utah" },
    { code: "vt", name: "Vermont", slug: "vermont" },
    { code: "va", name: "Virginia", slug: "virginia" },
    { code: "wa", name: "Washington", slug: "washington" },
    { code: "wv", name: "West Virginia", slug: "west-virginia" },
    { code: "wi", name: "Wisconsin", slug: "wisconsin" },
    { code: "wy", name: "Wyoming", slug: "wyoming" },
  ]
}

export function getLocale(slug: string): Locale | undefined {
  return locales.find((l) => l.slug === slug)
}

export function getLocaleByCode(code: string): Locale | undefined {
  return locales.find((l) => l.code === code)
}

export function getSubRegion(
  locale: Locale,
  slug: string
): SubRegion | undefined {
  return locale.states?.find((s) => s.slug === slug)
}

export function getPrimaryLocales(): Locale[] {
  return locales.filter((l) =>
    ["us", "uk", "au", "ca", "nz"].includes(l.slug)
  )
}

export function getExpansionLocales(): Locale[] {
  return locales.filter((l) =>
    ["in", "sg"].includes(l.slug)
  )
}

export function getLocalesWithSubRegion(subregionSlug: string): Locale[] {
  return locales.filter((l) =>
    l.states?.some((s) => s.slug === subregionSlug)
  )
}
