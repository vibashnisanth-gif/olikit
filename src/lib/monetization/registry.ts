import type { AffiliateCategory, AffiliateProduct, AffiliatePlacement } from "./types"
import { affiliateProducts, affiliatesEnabled } from "./config"

export function getAffiliateProducts(
  countrySlug: string,
  category: AffiliateCategory,
  limit?: number
): AffiliateProduct[] {
  if (!affiliatesEnabled) return []

  let results = affiliateProducts.filter(
    (p) => p.countrySlug === countrySlug && p.category === category
  )

  if (results.length === 0) {
    results = affiliateProducts.filter(
      (p) => p.countrySlug === countrySlug
    )
  }

  if (limit && results.length > limit) {
    results = results.slice(0, limit)
  }

  return results
}

export function getFeaturedProducts(
  countrySlug: string,
  category?: AffiliateCategory
): AffiliateProduct[] {
  if (!affiliatesEnabled) return []

  let results = affiliateProducts.filter(
    (p) =>
      p.countrySlug === countrySlug &&
      p.featured === true &&
      (category ? p.category === category : true)
  )

  if (results.length === 0) {
    results = affiliateProducts.filter(
      (p) =>
        p.countrySlug === countrySlug &&
        (category ? p.category === category : true)
    ).slice(0, 3)
  }

  return results
}

export function getProductsByPlacement(
  countrySlug: string,
  placement: AffiliatePlacement
): AffiliateProduct[] {
  return getAffiliateProducts(countrySlug, placement.category, placement.limit)
}

export function getProductsForTool(
  countrySlug: string,
  toolCategory: string
): AffiliateProduct[] {
  const categoryMap: Record<string, AffiliateCategory[]> = {
    salary: ["banking", "money-transfer", "investment"],
    tax: ["tax-software", "accounting"],
    mortgage: ["mortgage", "insurance", "banking"],
    investment: ["investment", "trading", "banking"],
    retirement: ["investment", "insurance"],
    business: ["payroll", "accounting", "banking"],
    loan: ["banking", "mortgage"],
  }

  const categories = categoryMap[toolCategory] ?? ["investment", "banking"]

  if (!affiliatesEnabled) return []

  const results: AffiliateProduct[] = []
  const seen = new Set<string>()

  for (const cat of categories) {
    const products = getAffiliateProducts(countrySlug, cat, 2)
    for (const p of products) {
      if (!seen.has(p.name)) {
        seen.add(p.name)
        results.push(p)
      }
    }
  }

  return results.slice(0, 4)
}
