import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, TrendingUp, Globe, UserRound } from "lucide-react";
import { PageLayout, SectionTitle } from "@/components/site/Layout";
import hero from "@/assets/hero-tower.jpg";
import vault from "@/assets/vault.jpg";
import growth from "@/assets/growth.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Royal Digital Assets — Building Wealth Through Digital Assets" },
      {
        name: "description",
        content:
          "Institutional-grade digital asset strategies. Disciplined risk management, long-term value and a global perspective from Royal Digital Assets.",
      },
      { property: "og:title", content: "Royal Digital Assets — Building Wealth Through Digital Assets" },
      {
        property: "og:description",
        content: "Institutional-grade digital asset strategies built for long-term value.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const pillars = [
  { icon: ShieldCheck, title: "Secure", copy: "Institutional-grade security and asset protection." },
  { icon: TrendingUp, title: "Strategic", copy: "Data-driven strategies built for long-term value." },
  { icon: Globe, title: "Global", copy: "A global perspective with local market expertise." },
  { icon: UserRound, title: "Trusted", copy: "Transparency, integrity, and disciplined execution." },
];

const approach = [
  {
    title: "Capital Preservation",
    copy: "We prioritise the protection of capital through rigorous risk management.",
    image: vault,
    to: "/investment" as const,
  },
  {
    title: "Strategic Growth",
    copy: "We identify high-conviction opportunities in digital assets with long-term potential.",
    image: growth,
    to: "/strategies" as const,
  },
  {
    title: "Institutional Expertise",
    copy: "Our team combines deep industry knowledge with disciplined investment processes.",
    image: team,
    to: "/about" as const,
  },
];

const stats = [
  { value: "$2.4B+", label: "Assets under management" },
  { value: "35+", label: "Investment professionals" },
  { value: "50+", label: "Digital assets invested" },
  { value: "20+", label: "Countries served" },
  { value: "10+", label: "Years of experience" },
];

function Index() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={hero}
          alt="Illuminated tower at night"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40">
          <h1 className="max-w-2xl text-4xl uppercase leading-[1.1] text-foreground sm:text-6xl">
            Building Wealth
            <span className="mt-2 block font-light text-muted-foreground">Through Digital Assets</span>
          </h1>
          <div className="mt-8 flex max-w-md items-center gap-3">
            <span className="h-px flex-1 bg-primary/60" />
            <span className="h-2 w-2 rotate-45 bg-primary" />
            <span className="h-px flex-1 bg-primary/60" />
          </div>
          <p className="mt-8 space-y-1 text-lg text-primary">
            Institutional-grade strategies.
            <br />
            Unwavering focus.
            <br />
            Long-term value.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 border border-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl divide-y divide-border/60 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex gap-4 px-8 py-10">
              <Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.2} />
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Our Approach" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {approach.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-border/60 bg-card"
              >
                <img
                  src={item.image}
                  alt=""
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/20" />
                <div className="relative p-8">
                  <h3 className="text-lg uppercase text-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">{item.copy}</p>
                  <Link
                    to={item.to}
                    className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="gold-text font-display text-4xl">{s.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl uppercase text-foreground">A partnership built on discipline</h2>
          <p className="mt-5 text-muted-foreground">
            We work with family offices, foundations and private investors who want considered
            exposure to digital assets — without speculation, hype or shortcuts.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
