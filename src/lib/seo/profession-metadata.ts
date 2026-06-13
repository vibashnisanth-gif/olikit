import type { Metadata } from "next"
import { SITE_URL } from "./constants"

const COUNTRY_INFO: Record<string, { name: string; flag: string; code: string; currency: string }> = {
  us: { name: "United States", flag: "\u{1F1FA}\u{1F1F8}", code: "en-US", currency: "$" },
  uk: { name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", code: "en-GB", currency: "\u00a3" },
  ca: { name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", code: "en-CA", currency: "C$" },
  au: { name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", code: "en-AU", currency: "A$" },
  nz: { name: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}", code: "en-NZ", currency: "NZ$" },
  sg: { name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", code: "en-SG", currency: "S$" },
  in: { name: "India", flag: "\u{1F1EE}\u{1F1F3}", code: "en-IN", currency: "\u20b9" },
}

export function buildProfessionMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Olikit",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  }
}

export function getCountryInfo(slug: string) {
  return COUNTRY_INFO[slug]
}

export const COUNTRY_SLUGS = Object.keys(COUNTRY_INFO)
