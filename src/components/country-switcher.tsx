"use client"

import { useRouter, usePathname } from "next/navigation"

type Props = {
  currentSlug: string | null
  currentName: string
  countries: { slug: string; name: string; flag: string }[]
}

const GLOBAL_OPTION = { slug: "", name: "Global", flag: "🌍" }

export function CountrySwitcher({ currentSlug, currentName, countries }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const allOptions = [GLOBAL_OPTION, ...countries]
  const safeSlug = currentSlug ?? ""
  const currentFlag = countries.find((c) => c.slug === currentSlug)?.flag || "🌍"

  const switchUrl = (toSlug: string): string => {
    if (!toSlug) return "/"
    if (!currentSlug) return `/${toSlug}`
    if (toSlug === currentSlug) return pathname
    const segments = pathname.split("/").filter(Boolean)
    const newSegments = segments.map((seg) => (seg === currentSlug ? toSlug : seg))
    return "/" + newSegments.join("/")
  }

  return (
    <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-zinc-700">
      <span className="hidden whitespace-nowrap text-xs font-medium sm:inline">
        {currentFlag} {currentName}
      </span>
      <select
        className="max-w-32 bg-transparent text-sm font-medium text-zinc-950 outline-none sm:max-w-40"
        onChange={(e) => {
          if (e.target.value !== undefined) {
            router.push(switchUrl(e.target.value))
          }
        }}
        defaultValue={safeSlug}
        aria-label="Select country"
      >
        {allOptions.map((opt) => (
          <option key={opt.slug || "global"} value={opt.slug}>
            {opt.flag} {opt.name}
          </option>
        ))}
      </select>
    </label>
  )
}
