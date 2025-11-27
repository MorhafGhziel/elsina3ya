import { Hero } from "./components/Hero";
import { ValuesSection } from "./components/ValuesSection";
import { MediaFaces } from "./components/MediaFaces";
import { ContactSection } from "./components/ContactSection";
import { AppFooter } from "./components/AppFooter";
import { NavigationBar } from "./components/NavigationBar";
import { OriginsSection } from "./components/OriginsSection";
import { ModulesSection } from "./components/ModulesSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main background - matches hero and footer */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(21, 97, 109, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 125, 0, 0.1) 0%, transparent 50%),
              linear-gradient(180deg, #000a12 0%, #001524 100%)
            `,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff7d00]/15 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#15616d]/15 blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0, 10, 18, 0.8) 100%)",
          }}
        />
      </div>

      <main className="relative z-10">
        <NavigationBar />
        <Hero />
        <OriginsSection />
        <ModulesSection />
        <ValuesSection />
        <MediaFaces />
        <ContactSection />
        <AppFooter />
      </main>
    </div>
  );
}
