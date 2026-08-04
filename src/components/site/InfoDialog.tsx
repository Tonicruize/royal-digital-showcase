import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type InfoDetail = {
  title: string;
  quote: string;
  meaning: string;
  points: string[];
  simple: string;
};

export function InfoDialog({ detail, children }: { detail: InfoDetail; children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg border-border/60 bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl uppercase tracking-[0.12em] text-foreground">
            {detail.title}
          </DialogTitle>
          <DialogDescription className="text-primary">{detail.quote}</DialogDescription>
        </DialogHeader>
        <div className="gold-rule" />
        <p className="text-sm text-muted-foreground">{detail.meaning}</p>
        <ul className="space-y-2">
          {detail.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="border-l border-primary/60 pl-4 text-sm italic text-foreground">
          In simple terms: {detail.simple}
        </p>
      </DialogContent>
    </Dialog>
  );
}