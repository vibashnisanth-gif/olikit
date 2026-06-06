export interface Locale {
  code: string
  name: string
  slug: string
  currency: Currency
  taxTerms: TaxTerms
  language: string
  region: string
  defaultTitle: string
  defaultDescription: string
  states?: SubRegion[]
  googleProperty?: string
  googleAdsId?: string
  googleSearchConsoleId?: string
}

export interface SubRegion {
  code: string
  name: string
  slug: string
}

export interface Currency {
  symbol: string
  code: string
  name: string
}

export interface TaxTerms {
  incomeTaxYear: string
  vatName: string
  vatRate: number
  currency: string
}

export interface Tool {
  id: string
  slug: string
  name: string
  shortName: string
  category: ToolCategory
  description: string
  metaTitleTemplate: string
  metaDescriptionTemplate: string
  keywords: string[]
  relatedTools: string[]
}

export type ToolCategory =
  | "salary"
  | "tax"
  | "mortgage"
  | "investment"
  | "retirement"
  | "business"
  | "loan"

export interface SeoMetadata {
  title: string
  description: string
  canonical: string
  openGraph: OpenGraph
  alternates: AlternateUrls
  keywords: string[]
}

export interface OpenGraph {
  title: string
  description: string
  url: string
  siteName: string
  locale: string
  type: "website"
}

export interface AlternateUrls {
  canonical: string
  languages: Record<string, string>
}

export interface JsonLd {
  "@context": "https://schema.org"
  "@type": string
  [key: string]: unknown
}

export interface InternalLink {
  label: string
  href: string
  type: "related" | "locale" | "comparison" | "subregion" | "breadcrumb" | "content"
}

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface PageContent {
  h1: string
  intro: string
  sections: ContentSection[]
  faqs: FaqItem[]
  cta: CtaContent
  aiAnswer?: AiAnswerBlock
  steps?: HowToStep[]
  stateData?: StateSpecificData
  directAnswer?: DirectAnswerBlock
}

export interface DirectAnswerBlock {
  question: string
  answer: string
  snippetType: "definition" | "table" | "list" | "paragraph"
}

export interface AiAnswerBlock {
  question: string
  answer: string
}

export interface HowToStep {
  name: string
  text: string
}

export interface StateDataPoints {
  averageSalary: number
  medianHouseholdIncome: number
  minimumWage: number
  stateIncomeTaxRate: string
  effectivePropertyTaxRate: number
  medianHomeValue: number
  costOfLivingIndex: number
}

export interface StateSpecificData {
  overview: string
  taxInfo: string
  statistics: string
  faqs?: FaqItem[]
  dataPoints?: StateDataPoints
}

export interface ContentSection {
  heading: string
  body: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CtaContent {
  text: string
  buttonLabel: string
  buttonHref: string
}

export interface Guide {
  id: string
  slug: string
  name: string
  shortName: string
  category: string
  description: string
  metaTitleTemplate: string
  metaDescriptionTemplate: string
  keywords: string[]
  relatedToolSlugs: string[]
}
