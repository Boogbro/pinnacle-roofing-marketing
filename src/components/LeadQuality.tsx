import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import Lottie from "lottie-react";
import { Shield, Target, Zap, TrendingUp, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Import your uploaded Lottie JSON files
import houseAnim from "@/assets/animations/house.json";
import screeningForwardAnim from "@/assets/animations/screening-forward.json";
import screeningReverseAnim from "@/assets/animations/screening-reverse.json";
import mapPinAnim from "@/assets/animations/map-pin.json";

const features = [
  {
    title: "Target High-Value Projects",
    headline: "High-End Scope of Work",
    shortLabel: "A",
    fullLabel: "HIGH-VALUE",
    description:
      "We don't just find homeowners; we find investors. We specialize in securing appointments for full kitchen remodels, primary bath gut renovations, and full roof replacements.",
    icon: Target,
    lottie: houseAnim,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Rigorously Vetted Readiness",
    headline: "The 5-Point Screening Process",
    shortLabel: "B",
    fullLabel: "SCREENED",
    description:
      "Every lead is screened for design, permit, or financing readiness. We ask the homeowner the tough questions you'd ask yourself, ensuring start windows are within 30 to 60 days.",
    icon: Zap,
    lottie: screeningForwardAnim,
    lottieReverse: screeningReverseAnim,
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    title: "Absolute Exclusivity",
    headline: "One Partner. One Area.",
    shortLabel: "C",
    fullLabel: "EXCLUSIVE",
    description:
      "No shared leads. No bidding wars. We operate with strict qualifying criteria and only allow one partner per service area. When we deliver a lead, it is yours and yours alone.",
    icon: Shield,
    lottie: mapPinAnim,
    gradient: "from-emerald-500/10 to-transparent",
  },
];

const facts = [
  {
    icon: TrendingUp,
    title: "87% Close Rate",
    description: "Pre-qualified leads that convert",
  },
  {
    icon: Users,
    title: "Exclusive Territory",
    description: "No competition, no shared leads",
  },
  {
    icon: Clock,
    title: "30-60 Day Windows",
    description: "Ready-to-start project timelines",
  },
];

// Helper component for standard lottie animations
const LottiePlayer = ({ animationData, isActive }: { animationData: unknown; isActive: boolean }) => {
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
    <Lottie lottieRef={lottieRef} animationData={animationData} loop={true} className="w-full h-full p-8 md:p-12" />
  );
};

// Helper component for forward-reverse seamless looping
const LottieForwardReverse = ({
  forwardData,
  reverseData,
  isActive,
}: {
  forwardData: unknown;
  reverseData: unknown;
  isActive: boolean;
}) => {
  const [playingForward, setPlayingForward] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isActive) {
        lottieRef.current.goToAndPlay(0);
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isActive, playingForward]);

  const handleComplete = () => {
    setPlayingForward((prev) => !prev);
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={playingForward ? forwardData : reverseData}
      loop={false}
      onComplete={handleComplete}
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
    if (containerRef.current) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + top;
      const scrollHeight = height - window.innerHeight;
      const targetScroll = sectionTop + (scrollHeight * index) / features.length + 100;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="quality" className="relative bg-background">
      {/* Header Section */}
      <div className="container max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-12 md:pb-16 relative">
        {/* Vertical Gradient Line - Above Header */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-primary/50 to-primary" />

        <div className="text-center max-w-4xl mx-auto relative">
          {/* Glow effect behind header */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent blur-3xl -z-10" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Beyond the Lead: <br />
            <span className="gradient-text">Truly Prequalified Appointments</span>
          </h2>
        </div>

        {/* Gradient Line - From Header to Card */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-12 md:h-16 bg-primary/60" />
      </div>

      {/* Sticky Scroll Container */}
      <div ref={containerRef} className="relative h-[300vh] md:h-[400vh]">
        {/* Continuous vertical line through sticky section */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/30 pointer-events-none z-0" />

        <div className="sticky top-24 h-[calc(100vh-96px)] w-full flex items-start justify-center overflow-hidden px-4 md:px-6">
          {/* Full-Screen Card Container */}
          <div className="relative w-full max-w-[1400px] h-[calc(100vh-120px)] border border-primary/20 rounded-3xl bg-card/80 backdrop-blur-md overflow-hidden">
            {/* Top border glow where line enters */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative z-10 h-full p-6 md:p-10 lg:p-12 flex flex-col">
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
                          : "border-primary/50 text-primary hover:border-primary hover:bg-primary/10",
                      )}
                    >
                      <span>{feature.shortLabel}</span>
                      {isActive && <span className="hidden sm:inline">{feature.fullLabel}</span>}
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
                        isActive
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-12 scale-95 pointer-events-none",
                      )}
                    >
                      <div className="flex-1 space-y-4 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                          <feature.icon className="w-4 h-4" />
                          {feature.headline}
                        </div>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">{feature.title}</h3>
                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="flex-1 w-full max-w-md lg:max-w-lg aspect-square relative group">
                        <div
                          className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50", feature.gradient)}
                        />
                        <div className="relative h-full w-full flex items-center justify-center">
                          {feature.lottieReverse ? (
                            <LottieForwardReverse
                              forwardData={feature.lottie}
                              reverseData={feature.lottieReverse}
                              isActive={isActive}
                            />
                          ) : (
                            <LottiePlayer animationData={feature.lottie} isActive={isActive} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom border glow where line exits */}
            <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>

      {/* Gradient Line - From Card to Facts */}
      <div className="relative h-20 md:h-28">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-primary/60" />
      </div>

      {/* Three Facts Section */}
      <div className="container max-w-7xl mx-auto px-6 pb-24 md:pb-32 relative">
        {/* Horizontal gradient line that spreads from center */}
        <div className="relative mb-12 md:mb-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Vertical dividers between facts */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-border/50" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-border/50" />

          {facts.map((fact, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <fact.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2">{fact.title}</h4>
              <p className="text-sm md:text-base text-muted-foreground">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadQuality;
