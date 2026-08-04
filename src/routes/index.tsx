import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe,
  UserRound,
  Search,
  Filter,
  Scale,
  Lock,
  RefreshCw,
  Layers,
  Coins,
  Activity,
  Eye,
  FileText,
  BookOpen,
} from "lucide-react";
import { PageLayout, SectionTitle } from "@/components/site/Layout";
import { InfoDialog } from "@/components/site/InfoDialog";
import { pillarDetails, approachDetails } from "@/content/royal";
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

const process = [
  {
    icon: Search,
    n: "01",
    title: "Research",
    copy: "Fundamental and on-chain analysis, protocol due diligence and market structure review.",
  },
  {
    icon: Filter,
    n: "02",
    title: "Selection",
    copy: "Only high-conviction assets that pass liquidity, governance and security screening.",
  },
  {
    icon: Scale,
    n: "03",
    title: "Sizing",
    copy: "Positions sized to risk budget, with drawdown limits defined before capital is deployed.",
  },
  {
    icon: Lock,
    n: "04",
    title: "Custody",
    copy: "Qualified custodians, multi-signature controls and independent reconciliation.",
  },
  {
    icon: RefreshCw,
    n: "05",
    title: "Review",
    copy: "Continuous monitoring with formal quarterly investment committee review.",
  },
];

const strategies = [
  {
    icon: Layers,
    name: "Core Allocation",
    horizon: "5+ years",
    copy: "A concentrated allocation to the most established digital assets, rebalanced systematically to control drift.",
  },
  {
    icon: Coins,
    name: "Yield",
    horizon: "1–3 years",
    copy: "Conservative income generation through staking and vetted lending venues with strict counterparty limits.",
  },
  {
    icon: TrendingUp,
    name: "Thematic Growth",
    horizon: "3–7 years",
    copy: "High-conviction positions in infrastructure, tokenisation and payment networks with durable adoption.",
  },
  {
    icon: Activity,
    name: "Market Neutral",
    horizon: "Any",
    copy: "Basis and arbitrage strategies designed to generate returns with limited directional exposure.",
  },
];

const safeguards = [
  {
    icon: ShieldCheck,
    title: "Independent custody",
    copy: "Assets held with qualified custodians and segregated wallets.",
  },
  {
    icon: Eye,
    title: "Transparent reporting",
    copy: "Monthly statements on holdings, valuations, counterparties and fees.",
  },
  {
    icon: FileText,
    title: "Written risk budgets",
    copy: "Every mandate starts with clear limits on concentration and drawdown.",
  },
  {
    icon: Lock,
    title: "Institutional controls",
    copy: "Multi-signature approvals, segregation of duties and independent reconciliation.",
  },
];

const insights = [
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
            <InfoDialog key={title} detail={pillarDetails[title]!}>
              <button
                type="button"
                className="flex gap-4 px-8 py-10 text-left transition-colors hover:bg-background/60"
              >
                <Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.2} />
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                  <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    What this means
                  </span>
                </div>
              </button>
            </InfoDialog>
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
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <InfoDialog detail={approachDetails[item.title]!}>
                      <button
                        type="button"
                        className="border border-primary/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        What this means
                      </button>
                    </InfoDialog>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Investment Process" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            A disciplined, repeatable process that puts risk management before return chasing.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {process.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-primary">{s.n}</span>
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.2} />
                </div>
                <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
                {i !== process.length - 1 && (
                  <div className="absolute right-0 top-0 hidden h-full w-px bg-border/40 md:translate-x-4 lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/investment"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
            >
              See our philosophy <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Strategies" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Four strategies designed around risk, liquidity and time horizon.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {strategies.map((s) => (
              <article key={s.name} className="border border-border/60 bg-card p-8">
                <div className="flex items-center gap-4">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.2} />
                  <div className="flex flex-1 items-baseline justify-between gap-4">
                    <h3 className="text-xl uppercase text-foreground">{s.name}</h3>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-primary">{s.horizon}</span>
                  </div>
                </div>
                <div className="mt-5 gold-rule" />
                <p className="mt-5 text-sm text-muted-foreground">{s.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/strategies"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
            >
              Explore all strategies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-card px-6 py-20">
        <img
          src={vault}
          alt=""
          width={1200}
          height={800}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle label="Risk Management" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Capital preservation is not a feature of our process — it is the foundation.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {safeguards.map((g) => (
              <div key={g.title} className="border border-border/60 bg-background/80 p-6 backdrop-blur">
                <g.icon className="h-6 w-6 text-primary" strokeWidth={1.2} />
                <h3 className="mt-5 text-sm uppercase tracking-[0.2em] text-foreground">{g.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{g.copy}</p>
              </div>
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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Latest Insights" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((p) => (
              <article key={p.title} className="border border-border/60 bg-card p-8">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary">
                  <BookOpen className="h-4 w-4" strokeWidth={1.2} />
                  <span>{p.date}</span>
                  <span className="text-border">·</span>
                  <span>{p.tag}</span>
                </div>
                <h3 className="mt-5 text-lg text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
            >
              Read all insights <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
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
