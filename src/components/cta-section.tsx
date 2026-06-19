interface CTASectionProps {
  title: string
  description: string
  cta: { label: string; href: string }
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-zinc-950 px-6 py-10 text-center shadow-sm sm:px-10">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-300">{description}</p>
      <a
        href={cta.href}
        className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
      >
        {cta.label}
      </a>
    </section>
  )
}
