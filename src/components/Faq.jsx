import { ChevronDown } from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";
import { FAQS } from "../data/site.js";

export default function Faq() {
  return (
    <Section id="faq" className="bg-white/40">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">FAQ</h2>
          <p className="mt-2 text-black/70">
            Quick answers to common questions. Call if you want a quote for your exact device.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-sm font-bold">{item.q}</span>
                <span className="mt-0.5 rounded-xl bg-brand-primary/15 p-2">
                  <ChevronDown className="h-4 w-4 text-brand-primary transition group-open:rotate-180" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
