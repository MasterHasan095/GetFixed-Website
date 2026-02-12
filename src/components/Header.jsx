import { useEffect, useMemo, useState } from "react";
import { MapPin, PhoneCall, MessageCircle } from "lucide-react";
import { BUSINESS, getTelLink, getWhatsAppLink } from "../data/site.js";
import { cn } from "./ui/cn.js";
import Container from "./ui/Container.jsx";
import Button from "./ui/Button.jsx";
import logo from "../assets/logo.svg";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Accessories", href: "#accessories" },
  { label: "Location/Hours", href: "#location" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const telHref = useMemo(() => getTelLink(), []);
  const waHref = useMemo(() => getWhatsAppLink(), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-brand-bg/85 backdrop-blur",
        scrolled ? "shadow-soft border-black/5" : "border-black/5"
      )}
      aria-label="Site header"
    >
      <Container className="flex h-20 items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/40">
          <img
            src={logo}
            alt={`${BUSINESS.name} logo`}
            className="h-10 w-10"
            width="40"
            height="40"
            loading="eager"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-tight">{BUSINESS.name}</div>
            <div className="text-xs text-black/60">{BUSINESS.addressLine}</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-brand-text/90 hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            as="a"
            href={BUSINESS.GOOGLE_MAPS_URL}
            variant="secondary"
            className="hidden md:inline-flex"
            aria-label="Get directions on Google Maps"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </Button>

          <Button
            as="a"
            href={telHref}
            variant="primary"
            aria-label={`Call now: ${BUSINESS.PHONE_NUMBER}`}
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </Button>

          <Button
            as="a"
            href={waHref}
            variant="ghost"
            className="hidden md:inline-flex"
            aria-label="Text or WhatsApp us"
          >
            <MessageCircle className="h-4 w-4" />
            Text/WhatsApp
          </Button>
        </div>
      </Container>

      <div className="lg:hidden border-t border-black/5">
        <Container className="flex items-center justify-between gap-2 py-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-1 rounded-xl px-2 py-2 text-center text-xs font-medium text-brand-text/90 hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
