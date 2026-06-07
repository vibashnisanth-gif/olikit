import { getAffiliateProducts } from "@/lib/monetization/registry"
import type { AffiliateCategory } from "@/lib/monetization/types"

type Props = {
  countrySlug: string
  category: AffiliateCategory
}

export function AffiliateProducts({ countrySlug, category }: Props) {
  const products = getAffiliateProducts(countrySlug, category)
  if (products.length === 0) return null

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold text-zinc-950">Recommended Financial Products</h3>
      <div className="space-y-3">
        {products.map((product) => (
          <a
            key={`${product.name}-${product.category}`}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block rounded-md border border-zinc-100 p-3 hover:border-blue-200 hover:bg-blue-50 transition-colors"
          >
            <p className="font-medium text-zinc-900 text-sm">{product.name}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{product.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
