type Variant = "white" | "blue" | "mint" | "muted"

type SectionProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  white: "bg-surface-primary",
  blue: "bg-surface-secondary",
  mint: "bg-surface-tertiary",
  muted: "bg-surface-muted",
}

export function Section({ variant = "white", className = "", children }: SectionProps) {
  return (
    <section className={`py-8 sm:py-10 ${variantClasses[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {children}
      </div>
    </section>
  )
}
