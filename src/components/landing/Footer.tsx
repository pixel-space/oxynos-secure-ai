export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="h-6 w-6 border border-border" />
          <span className="font-display text-sm font-semibold">Oxynos</span>
        </div>
        <nav className="flex gap-8">
          <a href="#how-it-works" className="mono-label text-foreground/55 hover:text-foreground">
            Architecture
          </a>
          <a href="#arsenal" className="mono-label text-foreground/55 hover:text-foreground">
            Features
          </a>
          <a href="#early-access" className="mono-label text-foreground/55 hover:text-foreground">
            Early Access
          </a>
        </nav>
        <p className="font-mono text-xs text-foreground/50">
          © {new Date().getFullYear()} Oxynos
        </p>
      </div>
    </footer>
  );
}