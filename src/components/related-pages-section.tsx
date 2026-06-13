interface RelatedPageItem {
  label: string
  href: string
}

interface RelatedPagesSectionProps {
  title?: string
  pages: RelatedPageItem[]
}

export function RelatedPagesSection({ title = "Explore More", pages }: RelatedPagesSectionProps) {
  if (pages.length === 0) return null
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {pages.map((p, i) => (
          <a
            key={i}
            href={p.href}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
          >
            {p.label}
          </a>
        ))}
      </div>
    </section>
  )
}
