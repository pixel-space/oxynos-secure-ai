import { Reveal } from "./Reveal";

const rows: [string, string, string][] = [
  ["Data Perimeter", "Their database", "Your local drive"],
  ["Processing Overhead", "Cloud markup", "Pure local compute"],
  ["Operational Stability", "Their outage freezes you", "You fail over offline"],
];

export function TrustRecap() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/55">05 — Architecture, not features</p>
        </Reveal>
        <Reveal variant="tear" delay={100}>
          <h2 className="mt-6 max-w-[24ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold">
            This isn't a feature. It's a different architecture.
          </h2>
        </Reveal>

        <Reveal variant="unfold" delay={200}>
          <div className="mt-14 border border-border">
            <div className="mono-label hidden grid-cols-3 border-b border-border md:grid">
              <div className="border-r border-border p-5 text-foreground/55">Dimension</div>
              <div className="border-r border-border p-5 text-foreground/55">Typical SaaS</div>
              <div className="bg-primary p-5 text-primary-foreground">Oxynos Desktop</div>
            </div>
            {rows.map(([dim, saas, oxynos]) => (
              <div
                key={dim}
                className="grid grid-cols-1 border-b border-border last:border-b-0 md:grid-cols-3"
              >
                <div className="border-b border-border p-5 font-display font-semibold md:border-b-0 md:border-r">
                  {dim}
                </div>
                <div className="border-b border-border p-5 md:border-b-0 md:border-r">
                  <span className="mono-label text-foreground/45 md:hidden">Typical SaaS</span>
                  <p className="mt-2 font-mono text-sm text-foreground/60 md:mt-0">{saas}</p>
                </div>
                <div className="bg-primary p-5 text-primary-foreground">
                  <span className="mono-label opacity-60 md:hidden">Oxynos</span>
                  <p className="mt-2 font-mono text-sm md:mt-0">{oxynos}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="unfold" delay={140}>
          <p className="mt-14 max-w-3xl font-display text-xl font-semibold leading-snug md:text-2xl">
            You're not buying a tool. You're buying an operational shield the
            giants assumed you couldn't afford.
          </p>
        </Reveal>
      </div>
    </section>
  );
}