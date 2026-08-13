import { Reveal } from "./Reveal";

const rows: [string, string][] = [
  ["Tool Sprawl", "One platform, all native."],
  ["Subscription Stacking", "Pay only for raw model usage."],
  ["Your Data, Their Servers", "Your files never leave your hard drive."],
  ["Locked-In Models", "Any API key, Ollama, or our cloud — your choice."],
  ["Losing to Giants", "Consensus reasoning + air-gap mode, unlocked from day one."],
];

export function Solution() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/55">02 — The shift</p>
        </Reveal>
        <Reveal variant="tear" delay={100}>
          <h2 className="mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-bold">
            Meet Oxynos Desktop.
          </h2>
        </Reveal>
        <Reveal variant="unfold" delay={220}>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Not another SaaS tool. A local execution layer that gives one-person
            companies the same firepower as thousand-person ones — without the
            bill.
          </p>
        </Reveal>

        <ul className="mt-20 border-t border-border">
          {rows.map(([before, after], i) => (
            <Reveal key={before} variant="unfold" delay={i * 90} as="li">
              <div className="grid grid-cols-1 items-baseline gap-2 border-b border-border py-7 md:grid-cols-[1fr_auto_1.4fr] md:gap-8">
                <span className="font-mono text-sm text-foreground/50 line-through decoration-foreground/50">
                  {before}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden font-mono text-sm text-foreground/40 md:inline"
                >
                  →
                </span>
                <span className="font-display text-lg font-semibold md:text-2xl">
                  {after}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="unfold" delay={200}>
          <p className="mt-16 max-w-3xl text-lg text-foreground/70">
            Oxynos runs on your machine, not ours. That single choice lets a
            two-person startup operate with Fortune-500 data discipline and
            research-lab model flexibility — without hiring either.
          </p>
          <a
            href="#how-it-works"
            className="mt-8 inline-block border-b border-foreground pb-1 font-display text-sm font-semibold transition-opacity ease-out hover:opacity-60"
          >
            See how it actually works ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}