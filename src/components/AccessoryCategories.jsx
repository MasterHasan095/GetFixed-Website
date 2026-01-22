import * as Icons from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";
import { ACCESSORY_CATEGORIES } from "../data/site.js";

function getIcon(name) {
  // Fallback to Package if an icon name changes in the library
  return Icons[name] || Icons.Package;
}

export default function AccessoryCategories() {
  return (
    <Section id="accessories" className="bg-white/40">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Accessories</h2>
          <p className="mt-2 text-black/70">
            Grab the essentials while you’re here — protection, power, audio, and more.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ACCESSORY_CATEGORIES.map((c) => {
            const Icon = getIcon(c.icon);
            return (
              <div
                key={c.key}
                className="rounded-3xl border border-black/10 bg-white/70 p-5 text-center shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="mx-auto inline-flex rounded-2xl bg-brand-primary/15 p-3">
                  <Icon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{c.label}</h3>
                <p className="mt-1 text-xs text-black/60">In-store selection</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
