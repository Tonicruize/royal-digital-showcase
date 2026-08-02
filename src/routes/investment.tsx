import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/Layout";
import vault from "@/assets/vault.jpg";

export const Route = createFileRoute("/investment")({
  component: Investment,
  head: () => ({
    meta: [
      { title: "Investment Philosophy — Royal Digital Assets" },
      {
        name: "description",
        content:
          "Capital preservation first: how Royal Digital Assets researches, sizes and safeguards digital asset positions for long-term investors.",
      },
      { property: "og:title", content: "Investment Philosophy — Royal Digital Assets" },
      { property: "og:description", content: "Capital preservation, research discipline and custody." },
      { property: "og:url", content: "/investment" },
    ],
    links: [{ rel: "canonical", href: "/investment" }],
  }),
});

const steps = [
  { n: "01", title: "Research", copy: "Fundamental and on-chain analysis, protocol due diligence and market structure review." },
  { n: "02", title: "Selection", copy: "Only high-conviction assets that pass liquidity, governance and security screening." },
  { n: "03", title: "Sizing", copy: "Positions sized to risk budget, with drawdown limits defined before capital is deployed." },
  { n: "04", title: "Custody", copy: "Qualified custodians, multi-signature controls and independent reconciliation." },
  { n: "05", title: "Review", copy: "Continuous monitoring with formal quarterly investment committee review." },
];

function Investment() {
  return (
    <PageLayout>
      <PageHero kicker="Investment" title="Capital preservation comes first" />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <img
            src={vault}
            alt="Bank vault door"
            width={1200}
            height={800}
            loading="lazy"
            className="border border-border/60 object-cover"
          />
          <div>
            <h2 className="text-2xl uppercase text-foreground">Risk defines the return</h2>
            <p className="mt-5 text-muted-foreground">
              Digital assets are volatile by nature. Our role is not to remove that volatility but to
              structure exposure so that a single adverse event never compromises the portfolio.
            </p>
            <p className="mt-5 text-muted-foreground">
              Every mandate begins with a written risk budget, agreed liquidity requirements and clear
              limits on concentration. Reporting is delivered monthly, with full transparency on
              holdings, valuations and counterparties.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-card px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl uppercase text-foreground">Our process</h2>
          <div className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-4 py-7 md:grid-cols-[80px_240px_1fr]">
                <span className="font-display text-lg text-primary">{s.n}</span>
                <h3 className="text-sm uppercase tracking-[0.2em] text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}