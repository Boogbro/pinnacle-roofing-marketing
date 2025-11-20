import { useEffect, useRef, useState } from "react";
import { Target, Brain, Calendar, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Market Intelligence & Targeting",
    description: "We analyze 47+ data points to identify high-intent homeowners in your service area.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI-Powered Pre-Qualification",
    description: "Our proprietary AI conducts 12-point qualification calls before they ever reach your calendar.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Exclusive Territory Scheduling",
    description: "Qualified prospects book directly into your team's calendar. No sharing, no competition.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Local Authority Amplification",
    description: "We make you the obvious choice in your market, boosting close rates by 34%.",
  },
];

const SystemProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background"></div>
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            The System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How We Deliver Premium Appointments
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-8 md:p-12 transform transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="text-6xl md:text-7xl font-bold text-primary/20">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemProcess;
