# Oxynos Secure AI

PROJECT

Oxynos — a desktop-first, BYOK/local-first AI operations platform for small businesses,

startups, and one-person companies. It replaces fragmented SaaS tooling with a single

local execution layer: data never leaves the user's machine, any model/API can be

plugged in, and enterprise-grade AI tooling (consensus reasoning, air-gap mode,

automations) is available at startup price. Primary conversion goal: claim early access.

DESIGN GOALS

- Impactful: strong type hierarchy, confident whitespace, no filler visuals

- Stunning: editorial-technical aesthetic — feels engineered, not "AI startup template"

- Trustworthy: the #1 priority. Every section should read as precise and deliberate,

  never hypey. No stock illustrations, no generic gradient blobs, no emoji.

- Converting: one clear CTA per section, no competing links, urgency in the final section

DESIGN TOKENS

Colors (strict 2-tone — do not introduce new colors without asking):

  --color-ink:   #333333   (primary text, backgrounds on reversed sections, borders)

  --color-paper: #FFFFFF   (primary background, text on reversed sections)

  Use --color-ink at reduced opacity (e.g. 60-70%) for secondary/muted text instead

  of introducing gray hex values.

Typography:

  Headings:      "Space Grotesk", bold/semibold — confident, slightly technical

  Body:          "Inter", regular/medium — clean, highly legible

  Technical/data labels, tags, comparison table, model names: "IBM Plex Mono" or

    "JetBrains Mono" — used sparingly, only for anything "technical-feeling"

  Type scale: large, confident headline sizes (clamp for responsive), generous

  line-height on body copy (1.6+), tight line-height on headlines (1.05-1.15)

Shape & spacing:

  Sharp-to-minimal border radius (0-4px) — avoid bubbly/rounded-everything look

  Flat design — no heavy drop shadows; use 1px borders in --color-ink at low opacity

  Generous vertical rhythm between sections (min 96-140px desktop padding)

Motion:

  Scroll-triggered reveals should echo a "paper tearing/unfolding" motif — panels

  and cards animate in as if being torn open or unfolded, not simple fade/slide.

  Micro-interactions (hover, toggle states) should be crisp and immediate — no

  bouncy easing, use linear/ease-out.

GLOBAL RULES — DO NOT

- Do not use purple/blue gradient backgrounds (default AI-builder look) — stay 2-tone

- Do not use rounded pill-shaped buttons everywhere — keep buttons sharp/minimal-radius

- Do not add stock photography or 3D illustration

- Do not put more than one CTA button per section

- Do not use generic SaaS copy ("Supercharge your workflow," "Unlock your potential")

  — use the specific copy provided below

PAGE STRUCTURE (build in this exact order)

1. HERO

   Layout: full-viewport, centered or left-aligned headline, paper-tear reveal

   animation on load/scroll.

   Headline: "Oxynos Desktop. Built for the business that has to do more with less."

   Subhead: "The AI operations layer that never leaves your machine — plug in any

   model, run fully offline, and get enterprise-grade tooling at startup price."

   CTA: "Claim Early Access" (primary button, links to anchor #early-access)
 Navbar: sticky, Glassmorphism fill with reserved space for insurting logo at left.

2. PROBLEM

   Layout: headline + subhead, then 5-card grid (icon, short label, 1-sentence copy)

   Headline: "You didn't start a company to become a SaaS procurement manager."

   Subhead: "Every growing business hits the same wall. Here's what it actually costs you."

   Cards:

     - Tool Sprawl — "A different app for chat, docs, code, automations. Your team

       spends more time switching tabs than shipping."

     - Death by a Thousand Subscriptions — "By the time you count every seat and

       tool, you're paying enterprise prices for a startup team."

     - Your Data, Their Servers — "Contracts, financials, unreleased product —

       uploaded to someone else's cloud, every time you want an answer."

     - Locked Into Someone Else's Model — "You don't choose the model. You get

       whatever they decided is 'good enough,' at whatever price they set."

     - Still Losing to the Giants — "Even after all that spend, real enterprise

       tooling stays locked behind six-figure contracts you'll never see."

   Closing line: "There's a reason none of this feels solvable. It's not supposed

   to be — until now."

3. SOLUTION INTRO

   Layout: headline/subhead, then a 5-row "problem → fix" mirrored list

   (strike-through old / reveal new on scroll), then a short paragraph.

   Headline: "Meet Oxynos Desktop."

   Subhead: "Not another SaaS tool. A local execution layer that gives one-person

   companies the same firepower as thousand-person ones — without the bill."

   Mirror rows: Tool Sprawl → "One platform, all native." | Subscription Stacking →

   "Pay only for raw model usage." | Your Data, Their Servers → "Your files never

   leave your hard drive." | Locked-In Models → "Any API key, Ollama, or our cloud

   — your choice." | Losing to Giants → "Consensus reasoning + air-gap mode,

   unlocked from day one."

   Body: "Oxynos runs on your machine, not ours. That single choice lets a

   two-person startup operate with Fortune-500 data discipline and research-lab

   model flexibility — without hiring either."

   Secondary CTA (text link, not button): "See how it actually works ↓"

4. ARCHITECTURE ("How It Works")

   Layout: 3 alternating full-width panels, diagram/visual on one side, copy on other

   Panel 1 — Localized Context Fabric: "Your desktop becomes the knowledge base."

     Oxynos builds vector embeddings of your files locally, on your own hardware.

     Only a stripped-down payload ever leaves your machine. No storage fees.

   Panel 2 — Consensus Reasoning: "Every high-stakes answer, cross-examined first."

     Runs the same prompt across multiple models at once (e.g. cloud Claude + local

     Ollama) and shows outputs side by side, flagging conflicts automatically.

   Panel 3 — Air-Gap Mode: "One switch. Zero internet. Zero exposure."

     A literal toggle that severs outbound connectivity at the process level,

     failing over fully to local Ollama models in memory.

5. FEATURE ARSENAL

   Layout: tabbed or accordion grid, 3 sub-sections

   Headline: "What's under the hood."

   Sub-section A: 5 problem-solving feature cards (icon, name, 1-line job, 2-3

     capability bullets) — use placeholder names like "Contract & Risk Scanner,"

     "Codebase Architect," "Financial Model Auditor" until real names are supplied

   Sub-section B: "Claude-Native Tools" — native file ops, web search, code

     execution, structured outputs — framed as "the real toolset, not a wrapper"

   Sub-section C: "Bring Your Own Everything" — logo row: Anthropic / OpenAI /

     Ollama / custom endpoint (flat monochrome logos only)

6. TRUST RECAP (comparison table)

   Layout: simple 3-column table, full width, high contrast

   Headline: "This isn't a feature. It's a different architecture."

   Rows: Data Perimeter (their database vs. your local drive) | Processing

   Overhead (cloud markup vs. pure local compute) | Operational Stability

   (their outage freezes you vs. you fail over offline)

   Closing line: "You're not buying a tool. You're buying an operational shield

   the giants assumed you couldn't afford."

7. EARLY ACCESS (id="early-access")

   Layout: full-bleed, reversed colors (--color-ink background, --color-paper text),

   countdown timer, single centered CTA — no other links in this section

   Headline: "Founding Access Is Open. For 30 Days."

   Subhead: "We're onboarding the first wave of growing businesses directly — no

   sales calls, no procurement process."

   CTA button: "Claim Now"

8. FOOTER (minimal)

   Logo mark, 2-3 nav links, copyright line. Keep it quiet — this page's job ends

   at the CTA above it.

TECHNICAL REQUIREMENTS

- Fully responsive (mobile-first breakpoints), test the mirror-list and comparison

  table collapse gracefully to single-column on mobile

- WCAG AA contrast minimum (should be easy given the 2-tone palette)

- Smooth scroll-anchor navigation from Hero CTA to #early-access if a sticky nav

  is added

- Keep animations performant — prefer CSS transforms/opacity over JS-heavy libraries

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6dfd48db-22dd-4d6e-b9b0-672636c96cf1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
