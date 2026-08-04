import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/Layout";
import { InfoDialog } from "@/components/site/InfoDialog";
import { coreValues } from "@/content/royal";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Royal Digital Assets" },
      {
        name: "description",
        content:
          "Royal Digital Assets is an institutional digital asset manager built on capital preservation, research discipline and long-term partnership.",
      },
      { property: "og:title", content: "About — Royal Digital Assets" },
      { property: "og:description", content: "Who we are and how we invest." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { title: "Integrity", copy: "We say what we do and we do what we say — in every market condition." },
  { title: "Discipline", copy: "Process before prediction. Every position is sized, tested and reviewed." },
  { title: "Transparency", copy: "Clear reporting, clear fees, clear reasoning behind every decision." },
  { title: "Longevity", copy: "We invest for decades, not headlines. Compounding is our advantage." },
];

function About() {
  return (
    <PageLayout>
      <PageHero kicker="Who we are" title="An institutional approach to a new asset class" />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              Royal Digital Assets was founded on a simple conviction: digital assets deserve the same
              rigour, governance and stewardship that traditional capital has enjoyed for generations.
            </p>
            <p className="mt-5 text-muted-foreground">
              Our team brings together experience from asset management, quantitative research,
              custody and regulatory compliance. That combination lets us evaluate opportunities with
              both technical depth and the caution that fiduciary capital demands.
            </p>
            <p className="mt-5 text-muted-foreground">
              We serve family offices, foundations and private investors across more than twenty
              countries, with reporting and risk frameworks built to institutional standards.
            </p>
            <p className="mt-5 text-muted-foreground">
              We specialise in digital assets, alternative investments and long-term wealth
              management, helping individuals, businesses and institutions pursue their financial
              goals with confidence. By combining in-depth market research, advanced analytics and
              sound risk management, we identify opportunities that deliver consistent long-term
              value while protecting our clients' capital.
            </p>
            <p className="mt-5 text-muted-foreground">
              We believe every investor deserves access to professional investment strategies
              tailored to their objectives — whether that means growing a portfolio, preserving
              wealth or diversifying into emerging markets.
            </p>
          </div>
          <img
            src={team}
            alt="Investment professionals in a high-rise office at night"
            width={1200}
            height={800}
            loading="lazy"
            className="border border-border/60 object-cover"
          />
        </div>
      </section>
      <section className="border-t border-border/60 bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-l border-primary/50 pl-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-border/60 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="border border-border/60 bg-card p-10">
            <h2 className="text-sm uppercase tracking-[0.25em] text-primary">Our Mission</h2>
            <div className="mt-5 gold-rule" />
            <p className="mt-5 text-muted-foreground">
              To empower our clients by creating sustainable wealth through disciplined investment
              strategies, innovation and an unwavering commitment to excellence.
            </p>
          </div>
          <div className="border border-border/60 bg-card p-10">
            <h2 className="text-sm uppercase tracking-[0.25em] text-primary">Our Vision</h2>
            <div className="mt-5 gold-rule" />
            <p className="mt-5 text-muted-foreground">
              To become a globally trusted investment company recognised for delivering outstanding
              financial performance, integrity and long-term client success.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-card px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-sm uppercase tracking-[0.35em] text-primary">
            Our Core Values
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Select a value to see how it shapes the way we invest and report.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v) => (
              <InfoDialog key={v.title} detail={v}>
                <button
                  type="button"
                  className="border border-border/60 bg-background/60 p-6 text-left transition-colors hover:border-primary/60"
                >
                  <h3 className="text-sm uppercase tracking-[0.2em] text-primary">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{v.quote}</p>
                  <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Read more
                  </span>
                </button>
              </InfoDialog>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl text-center text-muted-foreground">
            Royal is your trusted partner in building, preserving and growing wealth for generations
            to come.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}