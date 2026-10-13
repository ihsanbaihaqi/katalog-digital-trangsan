import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import CatalogSection from "@/components/CatalogSection";
import VisualizationSection from "@/components/VisualizationSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MapSection />
        <CatalogSection />
        <VisualizationSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
