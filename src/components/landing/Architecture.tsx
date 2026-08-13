import { Reveal } from "./Reveal";

function FabricDiagram() {
  return (
    <div className="grid grid-cols-4 gap-px border border-border p-px" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square border border-border"
          style={{ backgroundColor: i % 5 === 0 ? "var(--color-ink)" : undefined }}
        />
      ))}
    </div>
  );
}

function ConsensusDiagram() {
  return (
    <div className="border border-border p-6" aria-hidden="true">
      <div className="mono-label border border-border p-3 text-center">prompt</div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {["claude · cloud", "llama3 · local"].map((m) => (
          <div key={m} className="border border-border p-3">
            <p className="font-mono text-[11px]">{m}</p>
            <div className="mt-3 space-y-2">
              <div className="h-1 bg-foreground/70" />
              <div className="h-1 w-4/5 bg-foreground/40" />
              <div className="h-1 w-3/5 bg-foreground/20" />
            </div>
          </div>
        ))}
      </div>
      <div className="mono-label mt-4 border border-foreground bg-primary p-3 text-center text-primary-foreground">
        1 conflict flagged
      </div>
    </div>
  );
}

function AirGapDiagram() {
  return (
    <div className="flex flex-col gap-4 border border-border p-6" aria-hidden="true">
      <div className="flex items-center justify-between border border-border p-4">
        <span className="mono-label">outbound</span>
        <span className="font-mono text-[11px] line-through">enabled</span>
      </div>
      <div className="flex items-center justify-between border border-foreground bg-primary p-4 text-primary-foreground">
        <span className="mono-label">air-gap</span>
        <span className="ml-4 inline-flex h-6 w-12 items-center justify-end border border-current p-0.5">
          <span className="h-full w-1/2 bg-current" />
        </span>
      </div>
      <p className="font-mono text-[11px] text-foreground/60">
        0 sockets open · ollama in memory
      </p>
    </div>
  );
}

const panels = [
  {
    index: "P1",
    name: "Localized Context Fabric",
    claim: "Your desktop becomes the knowledge base.",
    copy: "Oxynos builds vector embeddings of your files locally, on your own hardware. Only a stripped-down payload ever leaves your machine. No storage fees.",
    diagram: <FabricDiagram />,
  },
  {
    index: "P2",
    name: "Consensus Reasoning",
    claim: "Every high-stakes answer, cross-examined first.",
    copy: "Runs the same prompt across multiple models at once (e.g. cloud Claude + local Ollama) and shows outputs side by side, flagging conflicts automatically.",
    diagram: <ConsensusDiagram />,
  },
  {
    index: "P3",
    name: "Air-Gap Mode",
    claim: "One switch. Zero internet. Zero exposure.",
    copy: "A literal toggle that severs outbound connectivity at the process level, failing over fully to local Ollama models in memory.",
    diagram: <AirGapDiagram />,
  },
];

export function Architecture() {
  return (
    <section id="how-it-works" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/55">03 — How it works</p>
        </Reveal>
      </div>

      {panels.map((p, i) => (
        <div key={p.name} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div
            className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal variant="unfold">
              <p className="mono-label text-foreground/55">
                {p.index} — {p.name}
              </p>
              <h3 className="mt-6 max-w-[22ch] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold">
                {p.claim}
              </h3>
              <p className="mt-6 max-w-xl text-foreground/70">{p.copy}</p>
            </Reveal>
            <Reveal variant="tear" delay={140}>
              {p.diagram}
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  );
}