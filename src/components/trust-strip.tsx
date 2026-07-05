"use client"

export function TrustStrip() {
  return (
    <div className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[11px] leading-5 text-zinc-500 sm:gap-x-8">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Government-sourced data
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Take-home pay, not just gross salary
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Free, no login required
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          7 countries, cross-border comparisons
        </span>
      </div>
    </div>
  )
}
