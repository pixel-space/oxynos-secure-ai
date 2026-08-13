import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center border-b border-border pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/60">
            Local-first · BYOK · Desktop
          </p>
        </Reveal>

        <Reveal variant="tear" delay={120}>
          <h1 className="mt-8 max-w-[20ch] text-[clamp(2.5rem,7vw,5.5rem)] font-bold">
            Oxynos Desktop. Built for the business that has to do more with less.
          </h1>
        </Reveal>

        <Reveal variant="unfold" delay={320}>
          <p className="mt-10 max-w-2xl text-lg text-foreground/70 md:text-xl">
            The AI operations layer that never leaves your machine — plug in any
            model, run fully offline, and get enterprise-grade tooling at startup
            price.
          </p>
        </Reveal>

        <Reveal variant="unfold" delay={460}>
          <div className="mt-12">
            <a
              href="#early-access"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-opacity ease-out hover:opacity-85"
            >
              Claim Early Access
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal variant="unfold" delay={600}>
          <dl className="mt-24 grid grid-cols-1 gap-px border border-border sm:grid-cols-3">
            {[
              ["Data perimeter", "Your hard drive"],
              ["Model choice", "Any API key or Ollama"],
              ["Air-gap mode", "Process-level cutoff"],
            ].map(([label, value]) => (
              <div key={label} className="border border-border p-6">
                <dt className="mono-label text-foreground/55">{label}</dt>
                <dd className="mt-3 font-display text-lg font-semibold">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}