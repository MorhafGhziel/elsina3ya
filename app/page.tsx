import { Hero } from "./components/Hero";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { WhyUsSection } from "./components/WhyUsSection";
import { MediaFaces } from "./components/MediaFaces";
// import { Testimonials } from "./components/ui/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FloatingParticles } from "./components/ui/FloatingParticles";
import { PageLoader } from "./components/ui/PageLoader";
import { CursorEffects } from "./components/ui/CursorEffects";

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

        <div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 125, 0, 0.3) 0%, transparent 70%)",
            animation: "blob 15s infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 157, 51, 0.2) 0%, transparent 70%)",
            animation: "blob 20s infinite",
            animationDelay: "5s",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(10, 14, 26, 0.9) 100%)",
          }}
        />
      </div>

      <FloatingParticles />
      <CursorEffects />

      <main className="relative z-10">
        <Nav />
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <FeaturesGrid />
        </div>
        <div id="why-us">
          <WhyUsSection />
        </div>
        <div id="faces">
          <MediaFaces />
        </div>
        {/* <div id="testimonials">
          <Testimonials />
        </div> */}
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
