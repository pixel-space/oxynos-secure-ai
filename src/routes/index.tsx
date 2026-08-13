import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Architecture } from "@/components/landing/Architecture";
import { Arsenal } from "@/components/landing/Arsenal";
import { TrustRecap } from "@/components/landing/TrustRecap";
import { EarlyAccess } from "@/components/landing/EarlyAccess";
import { Footer } from "@/components/landing/Footer";

const title = "Oxynos Desktop — Local-First AI Operations Layer";
const description =
  "The AI operations layer that never leaves your machine: plug in any model, run fully offline, and get enterprise-grade tooling at startup price.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <Arsenal />
        <TrustRecap />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
