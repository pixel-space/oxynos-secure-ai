import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const left = Math.max(0, target - now);
  return {
    days: Math.floor(left / 86_400_000),
    hours: Math.floor((left / 3_600_000) % 24),
    minutes: Math.floor((left / 60_000) % 60),
    seconds: Math.floor((left / 1000) % 60),
  };
}

export function EarlyAccess() {
  const target = useMemo(
    () => Date.UTC(2026, 8, 12, 0, 0, 0), // 30-day founding window
    [],
  );
  const { days, hours, minutes, seconds } = useCountdown(target);

  const units: [string, number][] = [
    ["days", days],
    ["hours", hours],
    ["minutes", minutes],
    ["seconds", seconds],
  ];

  return (
    <section
      id="early-access"
      className="scroll-mt-16 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
        <Reveal variant="unfold">
          <p className="mono-label opacity-60">06 — Founding access</p>
        </Reveal>
        <Reveal variant="tear" delay={100}>
          <h2 className="mx-auto mt-6 max-w-[22ch] text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold">
            Founding Access Is Open. For 30 Days.
          </h2>
        </Reveal>
        <Reveal variant="unfold" delay={220}>
          <p className="mx-auto mt-8 max-w-2xl text-lg opacity-75">
            We're onboarding the first wave of growing businesses directly — no
            sales calls, no procurement process.
          </p>
        </Reveal>

        <Reveal variant="unfold" delay={320}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-4 gap-px">
            {units.map(([label, value]) => (
              <div
                key={label}
                className="border border-current/25 p-4 md:p-6"
                aria-label={`${value} ${label} remaining`}
              >
                <p className="font-mono text-2xl font-medium tabular-nums md:text-4xl">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="mono-label mt-2 opacity-55">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="unfold" delay={440}>
          <a
            href="https://oxynos.com/early-access"
            className="mt-16 inline-flex items-center gap-3 bg-background px-10 py-4 font-display text-sm font-semibold text-foreground transition-opacity ease-out hover:opacity-85"
          >
            Claim Now
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}