export const BUSINESS = {
  name: "GetFixed Phone & Accessories",
  addressLine: "Rockwood Mall, 4141 Dixie Rd, Mississauga, ON L4W 1V5",
  unitInfo: "Shop #K7 (In front of TD Bank) / Shop #K5 (In front of CIBC Bank)",
  // Placeholders (replace later)
  PHONE_NUMBER: "+1-6473954450",
  GOOGLE_MAPS_URL: "https://maps.google.com/?q=GetFixed+Rockwood+Mall",
  WHATSAPP_NUMBER: "16473954450"
};

export const HOURS = [
  { day: "Mon", hours: "9:00 AM – 7:30 PM" },
  { day: "Tue", hours: "9:00 AM – 7:30 PM" },
  { day: "Wed", hours: "9:00 AM – 7:30 PM" },
  { day: "Thu", hours: "9:00 AM – 7:30 PM" },
  { day: "Fri", hours: "9:00 AM – 7:30 PM" },
  { day: "Sat", hours: "9:00 AM – 7:00 PM" },
  { day: "Sun", hours: "11:00 PM – 6:00 PM" }
];

export const SERVICES = [
  { title: "Screen Repair", desc: "Cracked, shattered, or unresponsive screens—fixed fast." },
  { title: "Battery Replacement", desc: "Restore all-day power and reliable charging." },
  { title: "Charging Port Repair", desc: "Loose port, no charge, or intermittent connection." },
  { title: "Camera Repair", desc: "Blurry lens, focus issues, or camera not opening." },
  { title: "Speaker/Mic Repair", desc: "Low volume, muffled sound, or call audio problems." },
  { title: "Data Transfer", desc: "Move photos, contacts, and apps to your new device." },
  { title: "Diagnostics", desc: "Quick checks to identify issues before you decide." }
];

export const ACCESSORY_CATEGORIES = [
  { key: "cases", label: "Phone Cases", icon: "Shield" },
  { key: "protectors", label: "Screen Protectors", icon: "Square" },
  { key: "chargers", label: "Chargers", icon: "PlugZap" },
  { key: "cables", label: "Cables", icon: "Cable" },
  { key: "powerbanks", label: "Power Banks", icon: "BatteryCharging" },
  { key: "wireless", label: "Wireless Chargers", icon: "Wifi" },
  { key: "audio", label: "Earbuds/Headphones", icon: "Headphones" },
  { key: "speakers", label: "Speakers", icon: "Speaker" },
  { key: "car", label: "Car Mounts/Holders", icon: "Car" },
  { key: "adapters", label: "Adapters/Dongles", icon: "Usb" }
];

export const FAQS = [
  {
    q: "How long does a repair usually take?",
    a: "Most common repairs can be completed the same day. Timing depends on the issue and parts availability—call for a quick estimate or drop-in for a quick diagnosis."
  },
  {
    q: "How do you price repairs?",
    a: "We quote based on the device model and the exact issue. We’ll confirm the total and fill out the details on a consent form before starting any work."
  },
  {
    q: "Is my data safe during repair?",
    a: "We respect your privacy. Many repairs don’t require accessing your data. For any case where testing is needed or we need access to the data, we’ll explain what’s required."
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes—walk-ins are welcome. If you want to confirm availability or get a time estimate, call ahead."
  },
  {
    q: "Do you use quality parts?",
    a: "We use reliable, quality parts appropriate for your device and budget. We’ll explain options if multiple part grades are available."
  }
];

export function getWhatsAppLink() {
  const msg = encodeURIComponent(
    "Hi GetFixed! I’d like to ask about a repair / accessory. Please share availability and an estimate."
  );
  return `https://wa.me/${BUSINESS.WHATSAPP_NUMBER}?text=${msg}`;
}

export function getTelLink() {
  return `tel:${BUSINESS.PHONE_NUMBER}`;
}
