export function FooterNew() {
  return (
    <footer className="px-6" style={{ padding: "48px 24px 60px" }}>
      <div className="mx-auto" style={{ maxWidth: "var(--max)" }}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "30px" }}>
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="mb-3 flex items-center gap-2.5 font-extrabold" style={{ letterSpacing: "-.04em" }}>
              <span
                className="grid h-[34px] w-[34px] place-items-center rounded-[9px] text-sm font-bold text-white"
                style={{ background: "var(--ink)", fontFamily: "Georgia, serif" }}
              >
                O
              </span>
              <span>Olikit</span>
            </a>
            <p className="mt-2 max-w-[320px] text-[12px]" style={{ color: "var(--muted)" }}>
              Career and financial intelligence for comparing what work means across countries.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-3 text-[9px] uppercase" style={{ letterSpacing: ".12em", color: "var(--muted)" }}>
              Explore
            </h4>
            <ul className="grid gap-[7px] text-[12px]">
              {[
                { label: "Careers", href: "/professions" },
                { label: "Comparisons", href: "/compare" },
                { label: "Rankings", href: "/rankings" },
                { label: "Research", href: "/research" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-[var(--blue)]" style={{ color: "var(--ink)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="mb-3 text-[9px] uppercase" style={{ letterSpacing: ".12em", color: "var(--muted)" }}>
              Trust
            </h4>
            <ul className="grid gap-[7px] text-[12px]">
              {[
                { label: "Methodology", href: "/methodology" },
                { label: "Data sources", href: "/data-sources" },
                { label: "Editorial policy", href: "/editorial-policy" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-[var(--blue)]" style={{ color: "var(--ink)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-[9px] uppercase" style={{ letterSpacing: ".12em", color: "var(--muted)" }}>
              Legal
            </h4>
            <ul className="grid gap-[7px] text-[12px]">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Privacy", href: "/privacy-policy" },
                { label: "Terms", href: "/terms" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-[var(--blue)]" style={{ color: "var(--ink)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-9 text-[10px]"
          style={{ borderTop: "1px solid var(--line)", paddingTop: "17px", color: "var(--muted)" }}
        >
          © Olikit. Information is provided for research and comparison purposes; individual outcomes vary.
        </div>
      </div>
    </footer>
  )
}
