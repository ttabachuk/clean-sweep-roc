import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PricingSection } from "../components/PricingSection";
import { ServicesSection } from "../components/ServicesSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
