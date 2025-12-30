import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import Lottie from "lottie-react";
import { Shield, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Import your uploaded Lottie JSON files
import houseAnim from "@/assets/animations/house.json";
import screeningAnim from "@/assets/animations/screening.json";
import mapPinAnim from "@/assets/animations/map-pin.json";

const features = [
  {
    title: "Target High-Value Projects",
    headline: "High-End Scope of Work",
    shortLabel: "A",
    fullLabel: "HIGH-VALUE",
    description: "We don't just find homeowners; we find investors. We specialize in securing appointments for full kitchen remodels, primary bath gut renovations, and full roof replacements.",
    icon: Target,
    lottie: houseAnim,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Rigorously Vetted Readiness",
    headline: "The 5-Point Screening Process",
    shortLabel: "B",
    fullLabel: "SCREENED",
    description: "Every lead is screened for design, permit, or financing readiness. We ask the homeowner the tough questions you'd ask yourself, ensuring start windows are within 30 to 60 days.",
    icon: Zap,
    lottie: screeningAnim,
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "Absolute Exclusivity",
    headline: "One Partner. One Area.",
    shortLabel: "C",
    fullLabel: "EXCLUSIVE",
    description: "No shared leads. No bidding wars. We operate with strict qualifying criteria and only allow one partner per service area. When we deliver a lead, it is yours and yours alone.",
    icon: Shield,
    lottie: mapPinAnim,
    gradient: "from-emerald-500/10 to-transparent",
  },
];

// Helper component to properly use lottieRef
const LottiePlayer = ({ 
  animationData, 
  isActive 
}: { 
  animationData: unknown; 
  isActive: boolean;
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isActive) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <Lottie 
      lottieRef={lottieRef}
      animationData={animationData} 
      loop={true} 
      className="w-full h-full p-8 md:p-12"
    />
  );
};

const LeadQuality = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      const index = Math.min(Math.max(Math.floor(scrollProgress * features.length), 0), features.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    // Scroll to the appropriate position in the section
    if (containerRef.current) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + top;
      const scrollHeight = height - window.innerHeight;
      const targetScroll = sectionTop + (scrollHeight * index) / features.length + 100;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} id="quality" className="relative bg-background h-[300vh] md:h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10 pt-24 md:pt-28 flex flex-col h-full pb-8">
          {/* Section Header - Outside Card */}
          <div className="max-w-4xl mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Beyond the Lead: <br />
              <span className="gradient-text">Truly Prequalified Appointments</span>
            </h2>
          </div>

          {/* Main Card Container */}
          <div className="flex-1 min-h-0 border border-white/10 rounded-3xl bg-card/30 backdrop-blur-md p-6 md:p-8 lg:p-10 flex flex-col">
            {/* Tab Navigation */}
            <div className="flex items-center gap-1 mb-6 md:mb-8">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-300 font-semibold text-sm",
                      isActive 
                        ? "bg-primary border-primary text-primary-foreground" 
                        : "border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
                    )}
                  >
                    <span>{feature.shortLabel}</span>
                    {isActive && (
                      <span className="hidden sm:inline">{feature.fullLabel}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feature Content */}
            <div className="relative flex-1 min-h-0">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-all duration-700 ease-in-out",
                      isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="flex-1 space-y-4 md:space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                        <feature.icon className="w-4 h-4" />
                        {feature.headline}
                      </div>
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">{feature.title}</h3>
                      <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>

                    <div className="flex-1 w-full max-w-md lg:max-w-lg aspect-square relative group">
                      {/* Glow effect behind lottie */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl opacity-40" />
                      {/* Inner card for lottie */}
                      <div className={cn(
                        "relative h-full w-full flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden",
                        "bg-gradient-to-br from-background/80 via-card/60 to-background/40"
                      )}>
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", feature.gradient)} />
                        <LottiePlayer 
                          animationData={feature.lottie}
                          isActive={isActive}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadQuality;
