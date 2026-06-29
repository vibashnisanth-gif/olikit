type Variant = "default" | "emerald" | "tech" | "healthcare" | "finance" | "research"

type BadgeProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  default: "bg-surface-muted text-text-secondary border-border-light",
  emerald: "bg-blue-50 text-blue-800 border-blue-200",
  tech: "bg-profession-tech-bg text-blue-900 border-profession-tech-border",
  healthcare: "bg-profession-healthcare-bg text-amber-900 border-profession-healthcare-border",
  finance: "bg-profession-finance-bg text-yellow-900 border-profession-finance-border",
  research: "bg-profession-research-bg text-indigo-900 border-profession-research-border",
}

export function Badge({ variant = "default", className = "", children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
