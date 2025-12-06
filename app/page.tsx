import { Hero } from "./components/Hero";
import { StorySection } from "./components/StorySection";
import { VisionSection } from "./components/VisionSection";
import { MissionSection } from "./components/MissionSection";
import { ValuesSection } from "./components/ValuesSection";
import { ContactSection } from "./components/ContactSection";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PageLoader } from "./components/ui/PageLoader";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageLoader />

      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 125, 0, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 157, 51, 0.06) 0%, transparent 50%),
              linear-gradient(180deg, #050810 0%, #0a0e1a 100%)
            `,
          }}
        />
      </div>

      <main className="relative z-10">
        <Nav />
        <Hero />
        <StorySection />
        <VisionSection />
        <MissionSection />
        <ValuesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
