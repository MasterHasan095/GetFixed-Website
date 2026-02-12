import { CheckCircle2, MapPin, PhoneCall, MessageCircle } from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";
import Button from "./ui/Button.jsx";
import { BUSINESS, getTelLink, getWhatsAppLink } from "../data/site.js";

export default function Hero() {
  return (
<Section className="pt-20 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
<div className="text-center sm:text-left">
<p className="mx-auto inline-flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs sm:mx-0 sm:justify-start sm:text-sm">
  <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />
  Rockwood Mall • Mississauga
</p>


            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Fast, reliable phone repairs — and the accessories you need.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
              GetFixed Phone & Accessories helps you get back to normal quickly with honest diagnostics,
              quality parts, and clear pricing. No online booking — just call to book.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Same-day options",
                "Transparent quotes",
                "Local, convenient mall location"
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-2xl bg-white/60 p-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-primary" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={getTelLink()} variant="primary" className="justify-center">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </Button>

              <Button
                as="a"
                href={BUSINESS.GOOGLE_MAPS_URL}
                variant="secondary"
                className="justify-center"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </Button>

              <Button
                as="a"
                href={getWhatsAppLink()}
                variant="ghost"
                className="justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Text/WhatsApp us
              </Button>
            </div>

            <div className="mt-5 text-sm text-black/60">
              <span className="font-semibold">Address:</span> {BUSINESS.addressLine} •{" "}
              <span className="font-semibold">{BUSINESS.unitInfo}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-primary/10 blur-2xl" aria-hidden="true" />
            <div className="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold">Quick help, right now</h2>
                  <p className="mt-1 text-sm text-black/70">
                    Tell us your phone model + issue, and we’ll give you the fastest option.
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-primary/15 p-3">
                  <PhoneCall className="h-6 w-6 text-brand-primary" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-brand-bg p-4">
                  <p className="text-xs font-semibold text-black/60">PHONE_NUMBER (replace later)</p>
                  <p className="mt-1 text-base font-bold">{BUSINESS.PHONE_NUMBER}</p>
                </div>

                <div className="rounded-2xl bg-brand-bg p-4">
                  <p className="text-xs font-semibold text-black/60">Walk-ins welcome</p>
                  <p className="mt-1 text-sm text-black/70">
                    For the best timing, call ahead — booking is by phone.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-sm font-semibold">Pro tip</p>
                  <p className="mt-1 text-sm text-black/70">
                    Bring your old device + charger if possible — it speeds up diagnostics.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={getTelLink()} variant="primary" className="w-full justify-center">
                  Call to book
                </Button>
                <Button
                  as="a"
                  href="#services"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  View services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
