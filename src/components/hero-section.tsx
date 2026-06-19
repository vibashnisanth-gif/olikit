import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

interface HeroSectionProps {
  title: string
  description: string
  badge?: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function HeroSection({ title, description, badge, cta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="rounded-xl border border-border-light bg-gradient-to-b from-white to-surface-secondary px-6 py-10 shadow-sm sm:px-10 sm:py-14">
      {badge && (
        <Badge variant="emerald" className="mb-4">{badge}</Badge>
      )}
      <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-text-secondary">{description}</p>
      {(cta || secondaryCta) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {cta && <Button href={cta.href} variant="primary">{cta.label}</Button>}
          {secondaryCta && <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>}
        </div>
      )}
    </section>
  )
}
