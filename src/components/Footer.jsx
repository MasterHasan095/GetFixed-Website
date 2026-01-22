import { Facebook, Instagram, MapPin, PhoneCall } from "lucide-react";
import Container from "./ui/Container.jsx";
import { BUSINESS, getTelLink } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-brand-bg">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.svg"
                alt=""
                className="h-10 w-10"
                width="40"
                height="40"
                loading="lazy"
              />
              <div>
                <p className="font-bold">{BUSINESS.name}</p>
                <p className="text-sm text-black/70">Phone repairs & accessories</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-black/70">
              Frontend-only website. Booking is by phone.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">Visit</p>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-primary" />
                <span>
                  {BUSINESS.addressLine}
                  <br />
                  <span className="font-semibold">{BUSINESS.unitInfo}</span>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-brand-primary" />
                <a className="underline decoration-black/20 underline-offset-4 hover:decoration-black/60" href={getTelLink()}>
                  {BUSINESS.PHONE_NUMBER}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold">Socials (placeholders)</p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="Instagram (placeholder)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              >
                <Instagram className="h-5 w-5 text-brand-text" />
              </a>
              <a
                href="#"
                aria-label="Facebook (placeholder)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/70 hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              >
                <Facebook className="h-5 w-5 text-brand-text" />
              </a>
            </div>

            <p className="mt-4 text-xs text-black/60">
              Replace social links in <span className="font-mono">src/components/Footer.jsx</span>.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-black/60">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="text-xs text-black/60">
            Theme colors: <span className="font-mono">#EF6A29</span> •{" "}
            <span className="font-mono">#454648</span> •{" "}
            <span className="font-mono">#F6F2EF</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
