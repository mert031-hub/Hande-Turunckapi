import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import TherapyAreas from "@/components/TherapyAreas";
import Testimonials from "@/components/Testimonials";
import WorkingHours from "@/components/WorkingHours";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <TherapyAreas />
        <Testimonials />
        <WorkingHours />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
