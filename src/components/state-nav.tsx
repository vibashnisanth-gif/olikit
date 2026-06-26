"use client"

import { useState, useMemo } from "react"

interface StateItem {
  code: string
  name: string
  slug: string
}

interface StateNavProps {
  states: StateItem[]
  localeSlug: string
  toolSlug?: string
}

const POPULAR_SLUGS = new Set(["california", "texas", "florida", "new-york"])

export function StateNav({ states, localeSlug, toolSlug }: StateNavProps) {
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState("")

  const popular = useMemo(() => states.filter((s) => POPULAR_SLUGS.has(s.slug)), [states])
  const filtered = useMemo(() => {
    if (!search) return showAll ? states : popular
    const q = search.toLowerCase()
    return states.filter((s) => s.name.toLowerCase().includes(q))
  }, [states, search, showAll, popular])

  const basePath = toolSlug
    ? `/${localeSlug}/state`
    : `/${localeSlug}/state`
  const href = (slug: string) => toolSlug
    ? `${basePath}/${slug}/${toolSlug}`
    : `${basePath}/${slug}`

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setShowAll(true) }}
          placeholder="Search states..."
          aria-label="Search states"
          className="w-full max-w-xs rounded-md border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none"
        />
        {states.length > popular.length && !search && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            {showAll ? "Show Less" : `Show All (${states.length})`}
          </button>
        )}
      </div>

      {!search && !showAll && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Most Popular
          </p>
          <div className="flex flex-wrap gap-2">
            {popular.map((state) => (
              <a
                key={state.code}
                href={href(state.slug)}
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                {state.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {(!showAll && !search) && states.length > popular.length && (
        <button
          onClick={() => setShowAll(true)}
          className="text-sm font-medium text-zinc-500 hover:text-zinc-700"
        >
          + {states.length - popular.length} more states
        </button>
      )}

      {(showAll || search) && (
        <div className="flex flex-wrap gap-2">
          {filtered.map((state) => (
            <a
              key={state.code}
              href={href(state.slug)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                popular.some((p) => p.slug === state.slug)
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              {state.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
