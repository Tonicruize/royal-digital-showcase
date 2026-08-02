import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function SectionTitle({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="hidden h-px w-24 bg-border sm:block" />
      <h2 className="text-center text-sm uppercase tracking-[0.35em] text-primary">{label}</h2>
      <span className="hidden h-px w-24 bg-border sm:block" />
    </div>
  );
}

export function PageHero({ title, kicker }: { title: string; kicker: string }) {
  return (
    <section className="border-b border-border/60 bg-card px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">{kicker}</p>
        <h1 className="mt-4 text-4xl uppercase text-foreground sm:text-5xl">{title}</h1>
        <div className="mt-6 h-px w-40 bg-primary" />
      </div>
    </section>
  );
}