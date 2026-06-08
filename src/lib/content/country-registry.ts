export interface CountryData {
  slug: string
  code: string
  name: string
  flag: string
  currencyCode: string
  currencySymbol: string
  taxAuthority: string
  taxAuthorityAbbr: string
  themeColor: string
  themeBg: string
  themeBorder: string
  themeText: string
  description: string
}

const registry: CountryData[] = [
  {
    slug: "us",
    code: "en-US",
    name: "United States",
    flag: "🇺🇸",
    currencyCode: "USD",
    currencySymbol: "$",
    taxAuthority: "Internal Revenue Service",
    taxAuthorityAbbr: "IRS",
    themeColor: "blue",
    themeBg: "bg-blue-50",
    themeBorder: "border-blue-200",
    themeText: "text-blue-800",
    description: "Salary, tax and cost-of-living information for the United States.",
  },
  {
    slug: "uk",
    code: "en-GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    currencyCode: "GBP",
    currencySymbol: "£",
    taxAuthority: "HM Revenue & Customs",
    taxAuthorityAbbr: "HMRC",
    themeColor: "red",
    themeBg: "bg-red-50",
    themeBorder: "border-red-200",
    themeText: "text-red-800",
    description: "Salary, tax and cost-of-living information for the United Kingdom.",
  },
  {
    slug: "au",
    code: "en-AU",
    name: "Australia",
    flag: "🇦🇺",
    currencyCode: "AUD",
    currencySymbol: "A$",
    taxAuthority: "Australian Taxation Office",
    taxAuthorityAbbr: "ATO",
    themeColor: "emerald",
    themeBg: "bg-emerald-50",
    themeBorder: "border-emerald-200",
    themeText: "text-emerald-800",
    description: "Salary, tax and cost-of-living information for Australia.",
  },
  {
    slug: "ca",
    code: "en-CA",
    name: "Canada",
    flag: "🇨🇦",
    currencyCode: "CAD",
    currencySymbol: "C$",
    taxAuthority: "Canada Revenue Agency",
    taxAuthorityAbbr: "CRA",
    themeColor: "red",
    themeBg: "bg-red-50",
    themeBorder: "border-red-200",
    themeText: "text-red-800",
    description: "Salary, tax and cost-of-living information for Canada.",
  },
  {
    slug: "nz",
    code: "en-NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    currencyCode: "NZD",
    currencySymbol: "NZ$",
    taxAuthority: "Inland Revenue Department",
    taxAuthorityAbbr: "IRD",
    themeColor: "indigo",
    themeBg: "bg-indigo-50",
    themeBorder: "border-indigo-200",
    themeText: "text-indigo-800",
    description: "Salary, tax and cost-of-living information for New Zealand.",
  },
  {
    slug: "in",
    code: "en-IN",
    name: "India",
    flag: "🇮🇳",
    currencyCode: "INR",
    currencySymbol: "₹",
    taxAuthority: "Income Tax Department",
    taxAuthorityAbbr: "ITD",
    themeColor: "orange",
    themeBg: "bg-orange-50",
    themeBorder: "border-orange-200",
    themeText: "text-orange-800",
    description: "Salary, tax and cost-of-living information for India.",
  },
  {
    slug: "sg",
    code: "en-SG",
    name: "Singapore",
    flag: "🇸🇬",
    currencyCode: "SGD",
    currencySymbol: "S$",
    taxAuthority: "Inland Revenue Authority of Singapore",
    taxAuthorityAbbr: "IRAS",
    themeColor: "red",
    themeBg: "bg-red-50",
    themeBorder: "border-red-200",
    themeText: "text-red-800",
    description: "Salary, tax and cost-of-living information for Singapore.",
  },
]

export function getCountry(slug: string): CountryData | undefined {
  return registry.find((c) => c.slug === slug)
}

export function getAllCountries(): CountryData[] {
  return registry
}

export function getCountryByCode(code: string): CountryData | undefined {
  return registry.find((c) => c.code === code)
}

export const COUNTRY_FLAGS: Record<string, string> = Object.fromEntries(
  registry.map((c) => [c.slug, c.flag])
)

export const COUNTRY_NAMES: Record<string, string> = Object.fromEntries(
  registry.map((c) => [c.slug, c.name])
)

export const COUNTRY_CURRENCIES: Record<string, { code: string; symbol: string }> =
  Object.fromEntries(
    registry.map((c) => [c.slug, { code: c.currencyCode, symbol: c.currencySymbol }])
  )
