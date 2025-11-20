import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCarousel />
      <SystemProcess />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
