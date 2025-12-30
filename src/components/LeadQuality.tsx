import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react"; // Import the player
import { CheckCircle2, Shield, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Import your uploaded Lottie JSON files
import houseAnim from "@/assets/animations/house.json";
import screeningAnim from "@/assets/animations/screening.json";
import mapPinAnim from "@/assets/animations/map-pin.json";

const features = [
  {
    title: "Target High-Value Projects",
    headline: "High-End Scope of Work",
    description: "We don't just find homeowners; we find investors. We specialize in securing appointments for full kitchen remodels, primary bath gut renovations, and full roof replacements.",
    icon: Target,
    lottie: houseAnim, // Assign the animation
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Rigorously Vetted Readiness",
    headline: "The 5-Point Screening Process",
    description: "Every lead is screened for design, permit, or financing readiness. We ask the homeowner the tough questions you’d ask yourself, ensuring start windows are within 30 to 60 days.",
    icon: Zap,
    lottie: screeningAnim, // Assign the animation
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "Absolute Exclusivity",
    headline: "One Partner. One Area.",
    description: "No shared leads. No bidding wars. We operate with strict qualifying criteria and only allow one partner per service area. When we deliver a lead, it is yours and yours alone.",
    icon: Shield,
    lottie: mapPinAnim, // Assign the animation
    gradient: "from-emerald-500/10 to-transparent",
  },
];

const LeadQuality = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRefs = useRef<Record<number, any>>({});

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

  useEffect(() => {
    Object.entries(lottieRefs.current).forEach(([idx, ref]) => {
      if (ref?.current) {
        if (parseInt(idx) === activeIndex) {
          ref.current.play?.();
        } else {
          ref.current.pause?.();
        }
      }
    });
  }, [activeIndex]);

  return (
    <section ref={containerRef} id="quality" className="relative bg-background h-[300vh] md:h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Beyond the Lead: <br />
              <span className="gradient-text">Truly Prequalified Appointments</span>
            </h2>
          </div>

          <div className="relative h-[500px] md:h-[600px]">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex flex-col md:flex-row gap-12 items-center transition-all duration-700 ease-in-out",
                    isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                  )}
                >
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                      <feature.icon className="w-4 h-4" />
                      {feature.headline}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight">{feature.title}</h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="flex-1 w-full max-w-lg aspect-square relative group">
                    <div className={cn("absolute inset-0 rounded-3xl bg-gradient-to-br opacity-50", feature.gradient)} />
                    <div className="relative h-full w-full flex items-center justify-center border border-white/10 rounded-3xl bg-card/30 backdrop-blur-md overflow-hidden">
                      {/* Render the Lottie Animation */}
                      <Lottie 
                        lottieRef={(instance: any) => {
                          if (!lottieRefs.current[index]) {
                            lottieRefs.current[index] = { current: instance };
                          } else {
                            lottieRefs.current[index].current = instance;
                          }
                        }}
                        animationData={feature.lottie} 
                        loop={true} 
                        className="w-full h-full p-8 md:p-12"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadQuality;
