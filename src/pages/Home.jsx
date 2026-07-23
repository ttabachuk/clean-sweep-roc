import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ContactSection />
        </main>
        {/* footer */}
        <Footer />
    </div>;
}