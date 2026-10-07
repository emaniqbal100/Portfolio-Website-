import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Sidebar from "@/components/Sidebar";
import PortfolioSection from "@/components/PortfolioSection";
import PortfolioProjectsSection from "@/components/PortfolioProjectsSection";
import CareerSection from "@/components/CareerSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <PortfolioProjectsSection />
      <CareerSection />
      <AboutSection />
      <ExploreSection />
      <ContactSection />
      <Sidebar />
    </main>
  );
}