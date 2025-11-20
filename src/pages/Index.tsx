import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectCarousel />
      <SystemProcess />
      <ROICalculator />
      <GrowthInfrastructure />
      <FinalCTA />
    </div>
  );
};

export default Index;
