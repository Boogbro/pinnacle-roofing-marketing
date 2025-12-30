import { useState, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import LeadQuality from "@/components/LeadQuality";
import WhoWeServe from "@/components/WhoWeServe";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy load the modal (Heavy component)
const BookingModal = lazy(() => import("@/components/BookingModal"));

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen pt-0">
      <Navbar onBookClick={handleBookClick} />
      <Hero onBookClick={handleBookClick}>
        <LogoCarousel />
      </Hero>
      <SystemProcess />
      <WhoWeServe onBookClick={handleBookClick} />
      <LeadQuality />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ onBookClick={handleBookClick} />
      <FinalCTA onBookClick={handleBookClick} />
      <Footer onBookClick={handleBookClick} />

      {/* Only load the code if the modal is requested */}
      {isBookingOpen && (
        <Suspense fallback={<div />}>
          <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
