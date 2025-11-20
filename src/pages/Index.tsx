import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen pt-0">
      <Navbar />
      {/* Pass LogoCarousel as a child to Hero */}
      <Hero>
        <LogoCarousel />
      </Hero>
      {/* The LogoCarousel component is removed from here since it's a child of Hero now */}
      <SystemProcess />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
