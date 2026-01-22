import { ClipboardList, PhoneCall } from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";
import Button from "./ui/Button.jsx";
import { SERVICES, getTelLink } from "../data/site.js";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Services</h2>
            <p className="mt-2 text-black/70">
              Call to book — we’ll confirm availability and give you a quick quote.
            </p>
          </div>

          <Button as="a" href={getTelLink()} variant="primary">
            <PhoneCall className="h-4 w-4" />
            Call to book
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{s.desc}</p>
                </div>
                <div className="rounded-2xl bg-brand-primary/15 p-3">
                  <ClipboardList className="h-5 w-5 text-brand-primary" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-black/60">
                <span>Call for availability</span>
                <span className="font-semibold text-brand-primary">GetFixed</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
