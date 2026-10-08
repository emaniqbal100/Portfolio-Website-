import HeroPortfolio from "@/components/HeroPortfolio";
import AboutSection from "@/components/About";
import Sidebar from "@/components/Sidebar";
import PortfolioProjectsSection from "@/components/PortfolioProjectsSection";
import CareerSection from "@/components/CareerSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroPortfolio />
      <PortfolioProjectsSection />
      <CareerSection />
      <AboutSection />
      <ExploreSection />
      <ContactSection />
      <Sidebar />
    </main>
  );
}