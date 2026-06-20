type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md" | "lg"

type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover active:scale-[0.98]",
  secondary: "bg-secondary border border-secondary-border text-secondary-text hover:bg-secondary-hover hover:border-primary active:scale-[0.98]",
  ghost: "text-secondary-text hover:bg-muted hover:text-primary active:scale-[0.98]",
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
}

const focusStyles = "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"

export function Button({ variant = "primary", size = "md", href, className = "", children, disabled, ...props }: ButtonProps & Record<string, unknown>) {
  const base = `inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-all duration-150 hover:scale-[1.01] ${variantClasses[variant]} ${sizeClasses[size]} ${focusStyles} ${disabledStyles} ${className}`

  if (href) {
    return (
      <a href={href} className={base} aria-disabled={disabled}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
