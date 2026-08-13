import { Layers, Receipt, CloudUpload, Lock, TrendingDown } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: Layers,
    label: "Tool Sprawl",
    copy: "A different app for chat, docs, code, automations. Your team spends more time switching tabs than shipping.",
  },
  {
    icon: Receipt,
    label: "Death by a Thousand Subscriptions",
    copy: "By the time you count every seat and tool, you're paying enterprise prices for a startup team.",
  },
  {
    icon: CloudUpload,
    label: "Your Data, Their Servers",
    copy: "Contracts, financials, unreleased product — uploaded to someone else's cloud, every time you want an answer.",
  },
  {
    icon: Lock,
    label: "Locked Into Someone Else's Model",
    copy: "You don't choose the model. You get whatever they decided is 'good enough,' at whatever price they set.",
  },
  {
    icon: TrendingDown,
    label: "Still Losing to the Giants",
    copy: "Even after all that spend, real enterprise tooling stays locked behind six-figure contracts you'll never see.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/55">01 — The cost</p>
        </Reveal>
        <Reveal variant="tear" delay={100}>
          <h2 className="mt-6 max-w-[24ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold">
            You didn't start a company to become a SaaS procurement manager.
          </h2>
        </Reveal>
        <Reveal variant="unfold" delay={220}>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Every growing business hits the same wall. Here's what it actually
            costs you.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, label, copy }, i) => (
            <Reveal key={label} variant="tear" delay={i * 90}>
              <article className="flex h-full flex-col border border-border p-8">
                <Icon
                  className="h-5 w-5 text-foreground"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-8 font-display text-xl font-semibold">
                  {label}
                </h3>
                <p className="mt-4 text-foreground/70">{copy}</p>
              </article>
            </Reveal>
          ))}
          <Reveal variant="unfold" delay={470} className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-full items-end border border-border bg-primary p-8">
              <p className="font-display text-xl font-semibold leading-snug text-primary-foreground">
                There's a reason none of this feels solvable. It's not supposed to
                be — until now.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}