import Image from "next/image"

type Props = {
  href: string
  showTagline?: boolean
  className?: string
}

export function Logo({ href, showTagline, className = "" }: Props) {
  return (
    <a href={href} className={`flex items-center gap-2 font-bold text-lg text-text-primary shrink-0 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <text x="16" y="21.5" text-anchor="middle" font-family="Geist, system-ui, sans-serif" font-size="17" font-weight="700" fill="white">O</text>
          <rect x="9" y="25" width="14" height="1.5" rx="0.75" fill="white" opacity="0.12"/>
        </svg>
      </span>
      <span>Olikit</span>
      {showTagline && (
        <span className="hidden sm:inline text-xs font-normal text-text-muted ml-1.5 pl-2.5 border-l border-border-light">
          Global Salary Intelligence
        </span>
      )}
    </a>
  )
}
