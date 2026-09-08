import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { ImpactBand } from "./sections/ImpactBand";
import { Nav } from "./sections/Nav";
import { Offer } from "./sections/Offer";
import { Process } from "./sections/Process";
import { Roster } from "./sections/Roster";
import { Services } from "./sections/Services";
import { Values } from "./sections/Values";
import { Vision } from "./sections/Vision";
import { Cursor } from "./ui/Cursor";
import { Preloader } from "./ui/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <span className="grain" aria-hidden />

      <Nav />

      <main>
        <Hero />
        <About />
        <Vision />
        <Process />
        <Services />
        <Offer />
        <Values />
        <Roster />
        <ImpactBand />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
