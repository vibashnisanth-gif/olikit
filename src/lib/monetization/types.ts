export type AffiliateCategory =
  | "investment"
  | "banking"
  | "money-transfer"
  | "tax-software"
  | "job-board"
  | "mortgage"
  | "insurance"
  | "payroll"
  | "trading"
  | "accounting"

export interface AffiliateProduct {
  name: string
  description: string
  url: string
  countrySlug: string
  category: AffiliateCategory
  commission?: string
  featured?: boolean
}

export interface AffiliatePlacement {
  category: AffiliateCategory
  title: string
  description: string
  limit?: number
}

export interface SponsoredSlot {
  name: string
  description: string
  url: string
  countrySlug: string
}
