import { getFeaturedProducts } from "@/lib/monetization/registry"
import { affiliatesEnabled } from "@/lib/monetization/config"
import type { AffiliateCategory } from "@/lib/monetization/types"

type Props = {
  countrySlug: string
  category?: AffiliateCategory
  title?: string
}

export function AffiliateInline({ countrySlug, category, title }: Props) {
  if (!affiliatesEnabled) return null

  const products = getFeaturedProducts(countrySlug, category)
  if (products.length === 0) return null

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm my-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
        {title ?? "Recommended"}
      </p>
      <div className="flex flex-wrap gap-3">
        {products.slice(0, 3).map((product) => (
          <a
            key={`${product.name}-${product.category}`}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium text-amber-800 ring-1 ring-amber-200 hover:bg-amber-100 transition-colors"
          >
            {product.name}
          </a>
        ))}
      </div>
      <p className="mt-2 text-xs text-amber-400">
        We may earn a commission if you sign up through these links.
      </p>
    </div>
  )
}
