"use client"

import { useRouter, usePathname } from "next/navigation"
import { COUNTRY_FLAGS } from "@/lib/content/country-registry"

type Props = {
  currentSlug: string
  currentName: string
  locales: { slug: string; name: string }[]
}

export function LocaleSwitcher({ currentSlug, currentName, locales }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const currentFlag = COUNTRY_FLAGS[currentSlug]

  const switchUrl = (toSlug: string): string => {
    if (toSlug === currentSlug) return pathname
    return pathname.replace(`/${currentSlug}`, `/${toSlug}`)
  }

  return (
    <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-zinc-700">
      <span className="hidden whitespace-nowrap text-xs font-medium sm:inline">
        {currentFlag} {currentName}
      </span>
      <select
        className="max-w-32 bg-transparent text-sm font-medium text-zinc-950 outline-none sm:max-w-40"
        onChange={(e) => {
          if (e.target.value) {
            router.push(switchUrl(e.target.value))
          }
        }}
        defaultValue={currentSlug}
        aria-label="Select country"
      >
        {locales.map((locale) => (
          <option key={locale.slug} value={locale.slug}>
            {COUNTRY_FLAGS[locale.slug]} {locale.name}
          </option>
        ))}
      </select>
    </label>
  )
}
