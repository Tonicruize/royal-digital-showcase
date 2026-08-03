import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src="/royal-logo.png" alt="Royal Digital Assets" width={56} height={56} loading="lazy" className="h-14 w-14 object-contain" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Royal Digital Assets builds long-term wealth through disciplined, institutional-grade
              digital asset strategies.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About" },
                { to: "/investment", label: "Investment" },
                { to: "/strategies", label: "Strategies" },
                { to: "/insights", label: "Insights" },
                { to: "/contact", label: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="transition-colors hover:text-primary">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary">Office</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              One Royal Exchange
              <br />
              London EC3V 3DG
              <br />
              hello@royaldigitalassets.com
            </p>
          </div>
        </div>
        <div className="mt-12 gold-rule" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Royal Digital Assets. Capital at risk. Past performance is not
          a guide to future returns.
        </p>
      </div>
    </footer>
  );
}