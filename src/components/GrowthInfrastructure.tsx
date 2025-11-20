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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Complete Growth Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to dominate your market, fully managed
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-8 space-y-4 group hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
