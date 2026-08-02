import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/Layout";
import growth from "@/assets/growth.jpg";

export const Route = createFileRoute("/insights")({
  component: Insights,
  head: () => ({
    meta: [
      { title: "Insights — Royal Digital Assets" },
      {
        name: "description",
        content:
          "Market commentary and research notes from the Royal Digital Assets investment team on allocation, custody, regulation and market structure.",
      },
      { property: "og:title", content: "Insights — Royal Digital Assets" },
      { property: "og:description", content: "Research notes and market commentary." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

const posts = [
  {
    date: "June 2026",
    tag: "Allocation",
    title: "Sizing digital assets in a diversified portfolio",
    copy: "Why a modest, well-governed allocation can improve outcomes without materially raising portfolio risk.",
  },
  {
    date: "May 2026",
    tag: "Custody",
    title: "What qualified custody actually protects against",
    copy: "A practical look at key management, insurance and the operational failures that matter most.",
  },
  {
    date: "April 2026",
    tag: "Regulation",
    title: "The tokenisation of real-world assets",
    copy: "Settlement efficiency is arriving faster than most balance sheets are prepared for.",
  },
  {
    date: "March 2026",
    tag: "Market structure",
    title: "Liquidity is a risk factor, not a footnote",
    copy: "How we screen venues and instruments before a single position is opened.",
  },
];

function Insights() {
  return (
    <PageLayout>
      <PageHero kicker="Insights" title="Perspective over noise" />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-border/60 bg-card">
            <img
              src={growth}
              alt=""
              width={1200}
              height={800}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="relative max-w-xl p-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary">Featured</span>
              <h2 className="mt-4 text-2xl uppercase text-foreground">
                The case for patient capital in digital assets
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Our annual outlook on adoption cycles, liquidity conditions and what disciplined
                investors should expect from the next decade.
              </p>
            </div>
          </div>

          <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {posts.map((p) => (
              <article key={p.title} className="grid gap-3 py-8 md:grid-cols-[200px_1fr]">
                <div className="text-[11px] uppercase tracking-[0.18em] text-primary">
                  {p.date} · {p.tag}
                </div>
                <div>
                  <h3 className="text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}