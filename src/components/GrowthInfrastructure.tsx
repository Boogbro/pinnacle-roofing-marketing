import { useEffect, useRef, useState } from "react";
import { MapPin, Cpu, CalendarCheck, Megaphone, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Exclusive Territory Rights",
    description: "Own your market completely. No competition from other contractors using our system.",
  },
  {
    icon: Cpu,
    title: "AI Qualification Engine",
    description: "Advanced AI pre-screens every lead with 12-point qualification before scheduling.",
  },
  {
    icon: CalendarCheck,
    title: "Direct Calendar Integration",
    description: "Qualified appointments flow directly into your team's schedule automatically.",
  },
  {
    icon: Megaphone,
    title: "Local Authority Engine",
    description: "We position you as the market leader, increasing trust and close rates.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time dashboards showing appointment quality, show rates, and ROI metrics.",
  },
  {
    icon: Sparkles,
    title: "White-Glove Implementation",
    description: "Dedicated onboarding team gets you live in 14 days with full technical support.",
  },
];

const GrowthInfrastructure = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });

              // Animate line height based on visible cards
              const maxVisibleIndex = Math.max(...visibleCards, index);
              const percentage = ((maxVisibleIndex + 1) / features.length) * 100;
              setLineHeight(percentage);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-100px" },
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [visibleCards]);

  return (
    <section ref={sectionRef} id="infrastructure" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="container max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">Complete Growth Infrastructure</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to dominate your market, fully managed
          </p>
        </div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-[280px] bottom-20 w-[2px] bg-border/30 -translate-x-1/2">
          {/* Animated progress line */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50 transition-all duration-1000 ease-out"
            style={{ height: `${lineHeight}%` }}
          >
            {/* Glowing dot at the end */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
          </div>
        </div>

        {/* Features Timeline */}
        <div className="relative space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`glass rounded-2xl p-8 space-y-4 group hover:border-primary/50 transition-all duration-700 hover:scale-[1.02] ml-24 md:ml-0 ${
                    isEven ? "md:mr-[calc(50%+4rem)]" : "md:ml-[calc(50%+4rem)]"
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : `opacity-0 ${isEven ? "-translate-x-20" : "translate-x-20"} translate-y-10`
                  } max-w-md`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthInfrastructure;
