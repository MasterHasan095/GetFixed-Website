import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import AccessoryCategories from "./components/AccessoryCategories.jsx";
import WhyGetFixed from "./components/WhyGetFixed.jsx";
import LocationHours from "./components/LocationHours.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCallButton from "./components/FloatingCallButton.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />

      <main id="home" className="pt-20">
        <Hero />
        <WhyGetFixed />
        <Services />
        <AccessoryCategories />
        <LocationHours />
        <Faq />
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
