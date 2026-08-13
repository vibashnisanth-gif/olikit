export function HeaderNew() {
  return (
    <>
      {/* Topbar */}
      <div className="border-b" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
        <div className="mx-auto flex h-8 items-center justify-between px-6" style={{ maxWidth: "var(--max)" }}>
          <span className="text-[11px]" style={{ color: "var(--muted)" }}>Global career intelligence</span>
          <span className="text-[11px]" style={{ color: "var(--muted)" }}>Data · comparisons · research</span>
        </div>
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(250,250,247,.94)",
          backdropFilter: "blur(14px)",
          borderColor: "var(--line)",
        }}
      >
        <nav
          className="mx-auto flex h-[70px] items-center justify-between gap-7 px-6"
          style={{ maxWidth: "var(--max)" }}
          aria-label="Primary navigation"
        >
          <a href="/" className="flex items-center gap-2.5 font-extrabold" style={{ letterSpacing: "-.04em" }}>
            <span
              className="grid h-[34px] w-[34px] place-items-center rounded-[9px] text-sm font-bold text-white"
              style={{ background: "var(--ink)", fontFamily: "Georgia, serif" }}
            >
              O
            </span>
            <span>Olikit</span>
          </a>

          <div className="hidden items-center gap-[3px] text-[13px] md:flex">
            {[
              { label: "Careers", href: "/professions" },
              { label: "Comparisons", href: "/compare" },
              { label: "Rankings", href: "/rankings" },
              { label: "Research", href: "/research" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-[11px] py-[9px] transition-colors hover:bg-[var(--paper-2)] hover:text-[var(--ink)]"
                style={{ color: "#4d4d48" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/compare"
            className="text-[13px] font-bold"
            style={{ color: "var(--blue)" }}
          >
            Start comparing →
          </a>
        </nav>
      </header>
    </>
  )
}
