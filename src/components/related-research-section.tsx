interface RelatedResearchItem {
  title: string
  href: string
  description?: string
}

interface RelatedResearchSectionProps {
  title?: string
  items: RelatedResearchItem[]
}

export function RelatedResearchSection({ title = "Related Research", items }: RelatedResearchSectionProps) {
  if (items.length === 0) return null
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="group rounded-lg border border-zinc-200 bg-zinc-50 p-5 transition hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm"
          >
            <h3 className="text-sm font-semibold text-zinc-950 group-hover:text-emerald-700">{item.title}</h3>
            {item.description && (
              <p className="mt-1.5 text-sm leading-5 text-zinc-600">{item.description}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
