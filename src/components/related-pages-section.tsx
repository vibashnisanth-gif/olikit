type Props = {
  title?: string
  pages: { label: string; href: string }[]
}

export function RelatedPagesSection({ title = "Explore More", pages }: Props) {
  if (pages.length === 0) return null
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {pages.map((page) => (
          <a
            key={page.href}
            href={page.href}
            className="rounded-md bg-surface-muted px-3 py-1.5 text-sm font-medium text-text-secondary transition hover:bg-gray-200 hover:text-text-primary"
          >
            {page.label}
          </a>
        ))}
      </div>
    </section>
  )
}
