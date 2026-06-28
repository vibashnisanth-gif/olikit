"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { FlagImage } from "@/components/ui/flag-image"

type Props = {
  currentSlug: string | null
  currentName: string
  countries: { slug: string; name: string }[]
}

const GLOBAL_OPTION = { slug: "", name: "Global" }

export function CountrySwitcher({ currentSlug, currentName, countries }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const allOptions = [GLOBAL_OPTION, ...countries]

  const switchUrl = (toSlug: string): string => {
    if (!toSlug) return "/"
    if (!currentSlug) return `/${toSlug}`
    if (toSlug === currentSlug) return pathname
    const segments = pathname.split("/").filter(Boolean)
    const newSegments = segments.map((seg) => (seg === currentSlug ? toSlug : seg))
    return "/" + newSegments.join("/")
  }

  const currentFlag = currentSlug || ""

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select country"
      >
        {currentFlag && <FlagImage code={currentFlag} size="xs" />}
        <span className="hidden sm:inline">{currentName}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 max-h-72 w-52 overflow-y-auto rounded-lg border border-zinc-200 bg-white py-1 shadow-lg" role="listbox">
          {allOptions.map((opt) => {
            const isActive = opt.slug === (currentSlug || "")
            return (
              <button
                key={opt.slug || "global"}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setOpen(false)
                  router.push(switchUrl(opt.slug))
                }}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-50 ${isActive ? "font-medium text-zinc-950 bg-zinc-50" : "text-zinc-700"}`}
              >
                {opt.slug ? <FlagImage code={opt.slug} size="sm" /> : <span className="inline-flex items-center justify-center w-5 h-[15px] text-xs" role="img" aria-label="Global">🌍</span>}
                {opt.name}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
