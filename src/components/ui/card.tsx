type Variant = "default" | "muted" | "accent" | "profession-tech" | "profession-healthcare" | "profession-finance" | "profession-research"

type CardProps = {
  variant?: Variant
  hover?: boolean
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  default: "bg-surface-primary border-border-light",
  muted: "bg-surface-muted border-border-light",
  accent: "bg-surface-secondary border-border-light",
  "profession-tech": "bg-profession-tech-bg border-profession-tech-border",
  "profession-healthcare": "bg-profession-healthcare-bg border-profession-healthcare-border",
  "profession-finance": "bg-profession-finance-bg border-profession-finance-border",
  "profession-research": "bg-profession-research-bg border-profession-research-border",
}

export function Card({ variant = "default", hover = false, className = "", children }: CardProps) {
  const base = "rounded-xl border p-5 shadow-sm"
  const hoverClasses = hover ? "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-border-medium" : ""
  return (
    <div className={`${base} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}
