import { PhoneCall } from "lucide-react";
import { BUSINESS, getTelLink } from "../data/site.js";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      <a
        href={getTelLink()}
        className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white shadow-soft focus:outline-none focus:ring-2 focus:ring-black/20"
        aria-label={`Call now: ${BUSINESS.PHONE_NUMBER}`}
      >
        <PhoneCall className="h-5 w-5" />
        Call Now
      </a>
    </div>
  );
}
