export interface ProfessionPageSeo {
  title: string
  description: string
  canonical: string
}

export interface ProfessionPageHero {
  badge: string
  title: string
  description: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export interface ProfessionPageContent {
  seo: ProfessionPageSeo
  hero: ProfessionPageHero
  keyTakeaways?: { title: string; description: string }[]
  salaryCards?: { label: string; value: string }[]
  proseSections?: { title: string; paragraphs: string[] }[]
  salaryTable?: {
    title: string
    headers: string[]
    rows: Record<string, string>[]
  }
  comparisonTable?: {
    title: string
    rows: { category: string; valueA: string; valueB: string }[]
  }
  countryRanking?: {
    title: string
    entries: { rank: number; slug?: string; flag: string; name: string; salary: string; note?: string }[]
  }
  countryCards?: {
    title: string
    countries: { flag: string; name: string; slug: string; summary: string; metrics: { label: string; value: string }[] }[]
  }
  insights?: string[]
  faqs?: { question: string; answer: string }[]
  methodology?: string[]
  sources?: { label: string; url: string }[]
  breadcrumbs?: { label: string; url: string }[]
  relatedPages?: { label: string; href: string }[]
}
