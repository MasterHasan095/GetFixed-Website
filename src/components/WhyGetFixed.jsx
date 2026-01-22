import { BadgeCheck, HandHeart, Timer, Wrench } from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";

const ITEMS = [
  {
    title: "Honest diagnostics",
    desc: "We explain the issue and options before you commit.",
    icon: Wrench
  },
  {
    title: "Fast turnaround",
    desc: "Same-day options for many common repairs.",
    icon: Timer
  },
  {
    title: "Quality-first parts",
    desc: "Reliable parts with clear expectations for performance.",
    icon: BadgeCheck
  },
  {
    title: "Local, friendly service",
    desc: "Convenient mall location with a team that cares.",
    icon: HandHeart
  }
];

export default function WhyGetFixed() {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Why GetFixed
            </h2>
            <p className="mt-2 text-black/70">
              Simple, trustworthy service designed to get your device back in your hands quickly.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft"
            >
              <div className="inline-flex rounded-2xl bg-brand-primary/15 p-3">
                <Icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
