export interface SalaryIndexSeo {
  metaTitle: string
  metaDescription: string
}

export interface SalaryIndexHero {
  badge: string
  title: string
  description: string
}

export interface SalaryIndexResearchMetadata {
  coverageYear: string
  profession: string
  methodologyVersion: string
  countriesCount: string
  lastUpdated: string
  dataStatus: string
}

export interface SalaryIndexQuickAnswer {
  question: string
  answer: string
}

export interface SalaryIndexExecutiveSummary {
  paragraphs: string[]
  insights?: string[]
  metrics?: { label: string; value: string }[]
}

export interface SalaryIndexProseSection {
  title: string
  paragraphs: string[]
}

export interface SalaryIndexCountryProfile {
  flag: string
  name: string
  slug: string
  summary: string
  metrics: { label: string; value: string }[]
}

export interface SalaryIndexRelocationItem {
  heading: string
  content: string
}

export interface SalaryIndexFinding {
  title: string
  description: string
  metric?: string
}

export interface SalaryIndexMethodologyDeepDive {
  heading: string
  content: string[]
}

export interface SalaryIndexMethodology {
  overviews: string[]
  deepDives: SalaryIndexMethodologyDeepDive[]
}

export interface SalaryIndexSource {
  label: string
  url: string
}

export interface SalaryIndexRelatedPage {
  label: string
  href: string
}

export interface SalaryIndexContent {
  seo: SalaryIndexSeo
  hero: SalaryIndexHero
  researchMetadata: SalaryIndexResearchMetadata
  quickAnswers: SalaryIndexQuickAnswer[]
  executiveSummary: SalaryIndexExecutiveSummary
  globalMarketOverview: SalaryIndexProseSection
  compensationLandscape: SalaryIndexProseSection
  taxAndNetIncomeAnalysis: SalaryIndexProseSection
  purchasingPowerAnalysis: SalaryIndexProseSection
  costOfLivingAnalysis: SalaryIndexProseSection
  countryIntelligence: SalaryIndexCountryProfile[]
  relocationIntelligence: SalaryIndexRelocationItem[]
  technologyEcosystemAnalysis: SalaryIndexProseSection
  keyFindings: SalaryIndexFinding[]
  methodology: SalaryIndexMethodology
  researchLimitations: SalaryIndexProseSection
  dataInterpretationGuidance: SalaryIndexProseSection
  faq: { question: string; answer: string }[]
  sources: SalaryIndexSource[]
  relatedPages: SalaryIndexRelatedPage[]
}
