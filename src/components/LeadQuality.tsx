import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Shield, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Target High-Value Projects",
    headline: "High-End Scope of Work",
    description: "We don't just find homeowners; we find investors. We specialize in securing appointments for full kitchen remodels, primary bath gut renovations, and full roof replacements.",
    icon: Target,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Rigorously Vetted Readiness",
    headline: "The 5-Point Screening Process",
    description: "Every lead is screened for design, permit, or financing readiness. We ask the homeowner the tough questions you’d ask yourself, ensuring start windows are within 30 to 60 days.",
    icon: Zap,
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "Absolute Exclusivity",
    headline: "One Partner. One Area.",
    description: "No shared leads. No bidding wars. We operate with strict qualifying criteria and only allow one partner per service area. When we deliver a lead, it is yours and yours alone.",
    icon: Shield,
    gradient: "from-emerald-500/10 to-transparent",
  },
];

const LeadQuality = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      const index = Math.min(
        Math.max(Math.floor(scrollProgress * features.length), 0),
        features.length - 1
      );
      
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="quality" 
      // The height is multiplied by the number of cards to provide "scroll room"
      className="relative bg-background h-[300vh] md:h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Ambient background glows that change with index */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000 blur-[120px] pointer-events-none opacity-20",
          features[activeIndex].gradient.replace("to-transparent", "to-primary/5")
        )} />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          {/* Header - Stays visible but can fade/scale slightly if desired */}
          <div className="max-w-4xl mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Beyond the Lead: <br />
              <span className="gradient-text">Truly Prequalified Appointments</span>
            </h2>
          </div>

          {/* Cards Container */}
          <div className="relative h-[500px] md:h-[600px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex flex-col md:flex-row gap-12 items-center transition-all duration-700 ease-in-out",
                    isActive 
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                      : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                  )}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                      <Icon className="w-4 h-4" />
                      {feature.headline}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Visual/Animation Container */}
                  <div className="flex-1 w-full max-w-lg aspect-square relative group">
                    <div className={cn(
                      "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-50 transition-all duration-500",
                      feature.gradient
                    )} />
                    <div className="relative h-full w-full flex items-center justify-center border border-white/10 rounded-3xl bg-card/30 backdrop-blur-md overflow-hidden">
                      {/* Lottie Placeholder - Animate based on isActive */}
                      <div className={cn(
                        "text-primary/40 transition-transform duration-1000",
                        isActive ? "scale-110" : "scale-100"
                      )}>
                        <Icon size={140} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="mt-12 flex gap-4">
            {features.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  i === activeIndex ? "w-12 bg-primary" : "w-4 bg-muted"
                )}
              />
            ))}
          </div>
        </div>

        {/* The "Trust Bar" - Can be sticky or fixed at the bottom of the last scroll phase */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 delay-300",
          activeIndex === features.length - 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <div className="container max-w-7xl mx-auto">
            <div className="p-8 rounded-3xl bg-foreground text-background flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-1">The Gold Standard Protocol</h4>
                <p className="text-background/60">Rigorous vetting. Absolute exclusivity.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {["Exclusive Leads", "30-60 Day Windows", "Manual Vetting"].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-semibold whitespace-nowrap">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadQuality;
