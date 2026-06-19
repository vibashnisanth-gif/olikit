import { getLastUpdated } from "@/lib/seo/freshness"

export function LastUpdated() {
  return (
    <p className="text-xs text-zinc-500 italic border-t border-zinc-100 pt-4 mt-8">
      Last Updated: {getLastUpdated()} — Reviewed Against Official Sources
    </p>
  )
}
