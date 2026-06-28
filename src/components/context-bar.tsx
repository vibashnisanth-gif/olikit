"use client"

import { COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { trackCountrySwitch } from "@/lib/tracking"
import { FlagImage } from "@/components/ui/flag-image"

type Props = {
  slug: string | null
  name: string | null
  currencyCode: string
  taxAuthority: string
}

const BAR_STYLES: Record<string, string> = {
  global: "bg-zinc-100 text-zinc-700 border-b border-zinc-200",
  us: "bg-blue-50 text-blue-800 border-b border-blue-200",
  uk: "bg-red-50 text-red-800 border-b border-red-200",
  au: "bg-emerald-50 text-emerald-800 border-b border-emerald-200",
  ca: "bg-red-50 text-red-800 border-b border-red-200",
  nz: "bg-indigo-50 text-indigo-800 border-b border-indigo-200",
  in: "bg-orange-50 text-orange-800 border-b border-orange-200",
  sg: "bg-red-50 text-red-800 border-b border-red-200",
}

export function ContextBar({ slug, name, currencyCode, taxAuthority }: Props) {
  if (!slug) return null
  const style = BAR_STYLES[slug] || BAR_STYLES.global

  return (
    <div className={`sticky top-0 z-40 ${style}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
        <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider">
          <FlagImage code={slug} size="sm" />
          {name}
          <span className="text-[10px] font-normal opacity-60">
            &nbsp;&bull; {currencyCode} &bull; {taxAuthority}
          </span>
        </span>
        <a
          href="/"
          onClick={() => trackCountrySwitch(slug, "global")}
          className="rounded px-2 py-1 text-xs font-medium opacity-80 hover:opacity-100 transition-opacity"
        >
          View Global
        </a>
      </div>
    </div>
  )
}
