import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection/>
      <Sidebar/>
    </main>
  );
}