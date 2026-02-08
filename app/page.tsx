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
    <div className="relative min-h-screen overflow-x-hidden">
      <PageLoader />

      {/* Clean layout background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #060a12 0%, #0a1018 40%, #0c1220 100%)`,
          }}
        />
      </div>

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
