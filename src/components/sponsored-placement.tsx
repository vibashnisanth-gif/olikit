import { sponsoredSlots, sponsoredEnabled } from "@/lib/monetization/config"

type Props = {
  countrySlug: string
}

export function SponsoredPlacement({ countrySlug }: Props) {
  if (!sponsoredEnabled) return null

  const slots = sponsoredSlots.filter((s) => s.countrySlug === countrySlug)
  if (slots.length === 0) return null

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Sponsored</p>
      {slots.map((slot) => (
        <a
          key={slot.name}
          href={slot.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block rounded-md p-3 hover:bg-zinc-50 transition-colors"
        >
          <p className="font-medium text-zinc-900 text-sm">{slot.name}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{slot.description}</p>
        </a>
      ))}
    </div>
  )
}
