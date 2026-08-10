import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/investment", label: "Investment" },
  { to: "/strategies", label: "Strategies" },
  { to: "/insights", label: "Insights" },
  { to: "https://app.royaldigitalassets.org/login", label: "Login" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/royal-logo.png" alt="Royal Digital Assets logo" width={48} height={48} className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-[0.35em] text-foreground">ROYAL</span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-primary">
              Building wealth through digital assets
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="https://app.royaldigitalassets.org/login"
            className="border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Login
          </Link>
          <Link
            to="https://app.royaldigitalassets.org/register"
            className="border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Register
          </Link>
        </nav>

        <button
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-6 py-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
