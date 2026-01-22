import { MapPin, Clock, PhoneCall } from "lucide-react";
import Container from "./ui/Container.jsx";
import Section from "./ui/Section.jsx";
import Button from "./ui/Button.jsx";
import { BUSINESS, HOURS, getTelLink } from "../data/site.js";

export default function LocationHours() {
  return (
    <Section id="location">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Location & Hours</h2>
            <p className="mt-2 text-black/70">
              Visit us in Rockwood Mall. For fastest service, call ahead to book.
            </p>

            <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-primary/15 p-3">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{BUSINESS.name}</p>
                  <p className="mt-1 text-sm text-black/70">{BUSINESS.addressLine}</p>
                  <p className="mt-1 text-sm font-semibold">{BUSINESS.unitInfo}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  as="a"
                  href={BUSINESS.GOOGLE_MAPS_URL}
                  variant="secondary"
                  className="justify-center"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Maps
                </Button>
                <Button as="a" href={getTelLink()} variant="primary" className="justify-center">
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </Button>
              </div>

              <p className="mt-4 text-xs text-black/60">
                GOOGLE_MAPS_URL is a placeholder — replace later when ready.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-brand-primary/15 p-3">
                <Clock className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold">Hours (placeholder)</h3>
                <p className="text-sm text-black/70">Hours may vary on holidays.</p>
              </div>
            </div>

            <div className="mt-5 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold">{h.day}</span>
                  <span className="text-sm text-black/70">{h.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-brand-bg p-4">
              <p className="text-sm font-semibold">Booking</p>
              <p className="mt-1 text-sm text-black/70">
                No online booking — please <span className="font-semibold">call to book</span>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
