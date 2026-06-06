"use client"

import { useState } from "react"
import Link from "next/link"
import { LocaleSwitcher } from "./locale-switcher"

type Props = {
  currentSlug: string
  currentName: string
  locales: { slug: string; name: string }[]
}

export function MobileNav({ currentSlug, currentName, locales }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 sm:hidden"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 sm:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-50 border-b border-zinc-200 bg-white shadow-lg sm:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              <a
                href={`/${currentSlug}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                Tools
              </a>
              <a
                href={`/${currentSlug}/guides`}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                Guides
              </a>
              <a
                href={`/${currentSlug}/salary`}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                Salary
              </a>
              <Link
                href={`/${currentSlug}/search`}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                Search
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-2 border-t border-zinc-100 pt-2">
                <LocaleSwitcher
                  currentSlug={currentSlug}
                  currentName={currentName}
                  locales={locales}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
