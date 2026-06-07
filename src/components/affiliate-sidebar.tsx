import { getProductsForTool } from "@/lib/monetization/registry"
import { affiliatesEnabled } from "@/lib/monetization/config"

type Props = {
  countrySlug: string
  toolCategory: string
  toolName: string
}

export function AffiliateSidebar({ countrySlug, toolCategory, toolName }: Props) {
  if (!affiliatesEnabled) return null

  const products = getProductsForTool(countrySlug, toolCategory)
  if (products.length === 0) return null

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold text-zinc-950">Recommended Services</h3>
      <div className="space-y-2">
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
      <p className="mt-3 text-xs text-zinc-400">
        If you sign up through these links, we may earn a commission.
      </p>
    </div>
  )
}
