import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Royal Digital Assets" },
      {
        name: "description",
        content:
          "Speak with the Royal Digital Assets team about institutional-grade digital asset mandates, custody and reporting.",
      },
      { property: "og:title", content: "Contact — Royal Digital Assets" },
      { property: "og:description", content: "Start a conversation with our investment team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <PageLayout>
      <PageHero kicker="Contact" title="Start a conversation" />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              Whether you are exploring a first allocation or reviewing an existing one, our team is
              happy to talk through structure, custody and reporting — with no obligation.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-primary">Email</dt>
                <dd className="mt-1 text-foreground">hello@royaldigitalassets.com</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-primary">Telephone</dt>
                <dd className="mt-1 text-foreground">+44 (0)20 7946 0210</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-primary">Office</dt>
                <dd className="mt-1 text-foreground">One Royal Exchange, London EC3V 3DG</dd>
              </div>
            </dl>
          </div>

          <form className="border border-border/60 bg-card p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5">
              {[
                { id: "name", label: "Full name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "company", label: "Company", type: "text" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}