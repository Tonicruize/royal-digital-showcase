import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/strategies")({
  component: Strategies,
  head: () => ({
    meta: [
      { title: "Strategies — Royal Digital Assets" },
      {
        name: "description",
        content:
          "Core allocation, yield, thematic growth and market-neutral digital asset strategies designed around risk, liquidity and time horizon.",
      },
      { property: "og:title", content: "Strategies — Royal Digital Assets" },
      { property: "og:description", content: "Four disciplined digital asset strategies." },
      { property: "og:url", content: "/strategies" },
    ],
    links: [{ rel: "canonical", href: "/strategies" }],
  }),
});

const strategies = [
  {
    name: "Core Allocation",
    horizon: "5+ years",
    copy: "A concentrated allocation to the most established digital assets, rebalanced systematically to control drift.",
  },
  {
    name: "Yield",
    horizon: "1–3 years",
    copy: "Conservative income generation through staking and vetted lending venues with strict counterparty limits.",
  },
  {
    name: "Thematic Growth",
    horizon: "3–7 years",
    copy: "High-conviction positions in infrastructure, tokenisation and payment networks with durable adoption.",
  },
  {
    name: "Market Neutral",
    horizon: "Any",
    copy: "Basis and arbitrage strategies designed to generate returns with limited directional exposure.",
  },
];

function Strategies() {
  return (
    <PageLayout>
      <PageHero kicker="Strategies" title="Built around your mandate" />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {strategies.map((s) => (
            <article key={s.name} className="border border-border/60 bg-card p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl uppercase text-foreground">{s.name}</h2>
                <span className="text-[11px] uppercase tracking-[0.18em] text-primary">{s.horizon}</span>
              </div>
              <div className="mt-5 gold-rule" />
              <p className="mt-5 text-sm text-muted-foreground">{s.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}