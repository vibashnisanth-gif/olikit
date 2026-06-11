interface HeroSectionProps {
  title: string
  description: string
  badge?: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function HeroSection({ title, description, badge, cta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{badge}</p>
      )}
      <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{description}</p>
      {(cta || secondaryCta) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {cta && (
            <a href={cta.href} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
              {cta.label}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
              {secondaryCta.label}
            </a>
          )}
        </div>
      )}
    </section>
  )
}
