type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md" | "lg"

type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-text-primary text-white hover:bg-gray-800 active:scale-[0.98]",
  secondary: "bg-surface-secondary border border-border-light text-text-secondary hover:bg-blue-50 hover:border-blue-200 hover:text-text-primary active:scale-[0.98]",
  ghost: "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
}

export function Button({ variant = "primary", size = "md", href, className = "", children, ...props }: ButtonProps & Record<string, unknown>) {
  const base = `inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-all duration-150 hover:scale-[1.01] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}
