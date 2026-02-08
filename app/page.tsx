import { Hero } from "./components/Hero";
import { StorySection } from "./components/StorySection";
import { VisionSection } from "./components/VisionSection";
import { MissionSection } from "./components/MissionSection";
import { ServicesSection } from "./components/ServicesSection";
import { ValuesSection } from "./components/ValuesSection";
import { ContactSection } from "./components/ContactSection";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PageLoader } from "./components/ui/PageLoader";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#111111]">
      <PageLoader />

      <main className="relative z-10">
        <Nav />
        <Hero />
        <StorySection />
        <VisionSection />
        <MissionSection />
        <ServicesSection />
        <ValuesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
