export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          {/* Reserved logo slot */}
          <div
            aria-hidden="true"
            className="h-8 w-8 shrink-0 border border-border"
          />
          <span className="font-display text-base font-semibold tracking-tight">
            Oxynos
          </span>
        </div>
        <nav className="flex items-center gap-8">
          <a
            href="#how-it-works"
            className="mono-label hidden text-foreground/60 transition-colors ease-out hover:text-foreground sm:inline"
          >
            Architecture
          </a>
          <a
            href="#arsenal"
            className="mono-label hidden text-foreground/60 transition-colors ease-out hover:text-foreground sm:inline"
          >
            Features
          </a>
          <a
            href="#early-access"
            className="mono-label bg-primary px-4 py-2.5 text-primary-foreground transition-opacity ease-out hover:opacity-80"
          >
            Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}