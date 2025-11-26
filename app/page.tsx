import { Hero } from "./components/Hero";
// import { ValuesSection } from "./components/ValuesSection";
// import { MediaFaces } from "./components/MediaFaces";
// import { ContactSection } from "./components/ContactSection";
import { AppFooter } from "./components/AppFooter";
import { NavigationBar } from "./components/NavigationBar";
import { OriginsSection } from "./components/OriginsSection";
// import { ModulesSection } from "./components/ModulesSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-linear-to-b from-[#000a12] via-[#001524] to-[#000a12]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-[#15616d]/30 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-[#ff7d00]/20 blur-[120px] animation-delay-2000" />
        </div>
      </div>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10">
        <NavigationBar />
        <Hero />
        <OriginsSection />
        {/* <ModulesSection />
        <ValuesSection />
        <MediaFaces />
        <ContactSection /> */}
        <AppFooter />
      </main>
    </div>
  );
}
