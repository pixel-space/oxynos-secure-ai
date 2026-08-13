import { useState } from "react";
import { FileSearch, Code2, Calculator, Workflow, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: FileSearch,
    name: "Contract & Risk Scanner",
    job: "Reads every agreement before you sign it.",
    bullets: [
      "Clause-level diff against your prior contracts",
      "Flags liability, auto-renewal and IP exposure",
      "Runs entirely on local embeddings",
    ],
  },
  {
    icon: Code2,
    name: "Codebase Architect",
    job: "Understands your repo, not just your file.",
    bullets: [
      "Whole-repo dependency mapping",
      "Refactor plans with impact surface",
      "Local execution against your working tree",
    ],
  },
  {
    icon: Calculator,
    name: "Financial Model Auditor",
    job: "Stress-tests the spreadsheet you're betting on.",
    bullets: [
      "Formula-chain error detection",
      "Scenario sensitivity in one pass",
      "Numbers never uploaded anywhere",
    ],
  },
  {
    icon: Workflow,
    name: "Automation Runner",
    job: "Turns repeat work into a local job.",
    bullets: [
      "Scheduled multi-step tasks",
      "File-watch triggers on your disk",
      "Deterministic, inspectable run logs",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Compliance Vault",
    job: "Keeps the paper trail auditors ask for.",
    bullets: [
      "Immutable local activity ledger",
      "Per-project data boundaries",
      "Export-ready evidence bundles",
    ],
  },
];

const tabs = ["Problem Solvers", "Claude-Native Tools", "Bring Your Own Everything"] as const;

const nativeTools = [
  ["Native file ops", "Read, write and reorganize real files on disk — not attachments in a chat window."],
  ["Web search", "Grounded retrieval when a task needs the outside world, and only then."],
  ["Code execution", "Runs code locally and returns real output, not a plausible guess."],
  ["Structured outputs", "Typed, schema-validated results you can pipe into the next step."],
];

const providers = ["ANTHROPIC", "OPENAI", "OLLAMA", "CUSTOM ENDPOINT"];

export function Arsenal() {
  const [active, setActive] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <section id="arsenal" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal variant="unfold">
          <p className="mono-label text-foreground/55">04 — Arsenal</p>
        </Reveal>
        <Reveal variant="tear" delay={100}>
          <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-bold">
            What's under the hood.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-px border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              aria-pressed={active === t}
              className={`mono-label -mb-px border border-b-0 border-border px-5 py-4 transition-colors duration-100 ease-out ${
                active === t
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {active === "Problem Solvers" && (
          <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, name, job, bullets }, i) => (
              <Reveal key={name} variant="tear" delay={i * 80}>
                <article className="flex h-full flex-col border border-border p-8">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 font-display text-lg font-semibold">{name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{job}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {bullets.map((b) => (
                      <li key={b} className="font-mono text-xs leading-relaxed text-foreground/70">
                        — {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {active === "Claude-Native Tools" && (
          <div className="mt-12">
            <Reveal variant="unfold">
              <p className="max-w-2xl font-display text-xl font-semibold md:text-2xl">
                The real toolset, not a wrapper.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-2">
              {nativeTools.map(([name, copy], i) => (
                <Reveal key={name} variant="tear" delay={i * 80}>
                  <div className="h-full border border-border p-8">
                    <p className="mono-label text-foreground/55">{name}</p>
                    <p className="mt-4 text-foreground/75">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {active === "Bring Your Own Everything" && (
          <div className="mt-12">
            <Reveal variant="unfold">
              <p className="max-w-2xl font-display text-xl font-semibold md:text-2xl">
                Your keys, your models, your terms.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px md:grid-cols-4">
              {providers.map((p, i) => (
                <Reveal key={p} variant="tear" delay={i * 80}>
                  <div className="flex h-32 items-center justify-center border border-border">
                    <span className="mono-label text-center text-foreground/70">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}