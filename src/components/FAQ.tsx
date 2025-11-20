import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, DollarSign, Shield, Target, Users } from "lucide-react";

const FAQ = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      id: "item-1",
      icon: Target,
      question: "How is this different from HomeAdvisor and Angie's List?",
      answer: (
        <div className="space-y-4">
          <p>
            Unlike HomeAdvisor and Angie's List, we provide <span className="text-warm font-semibold">exclusive territory rights</span> and never share leads. There are no bidding wars—every qualified prospect is pre-screened for budget, project timeline, and genuine decision-making authority before reaching your calendar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="glass p-4 rounded-lg border border-warm/20">
              <CheckCircle2 className="w-5 h-5 text-warm mb-2" />
              <p className="text-sm font-medium">Exclusive Territory</p>
            </div>
            <div className="glass p-4 rounded-lg border border-warm/20">
              <CheckCircle2 className="w-5 h-5 text-warm mb-2" />
              <p className="text-sm font-medium">No Competition</p>
            </div>
            <div className="glass p-4 rounded-lg border border-warm/20">
              <CheckCircle2 className="w-5 h-5 text-warm mb-2" />
              <p className="text-sm font-medium">Pre-Screened Leads</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "item-2",
      icon: Shield,
      question: "What does the AI qualification process include?",
      answer: (
        <div className="space-y-4">
          <p className="mb-4">
            Our AI conducts a comprehensive, multi-point checklist ensuring only the highest-quality prospects reach your calendar:
          </p>
          <div className="space-y-3">
            {[
              "Budget verification for $15k+ projects",
              "Timeline confirmation and urgency scoring",
              "Decision-maker identification",
              "Project scope and details assessment",
              "Insurance status verification",
              "Financing preferences",
              "Competitor interaction history",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-warm/5 border border-primary/10 hover:border-warm/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "item-3",
      icon: DollarSign,
      question: "How much does it cost per appointment?",
      answer: (
        <div className="space-y-4">
          <div className="glass p-6 rounded-xl border border-warm/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-warm/10" />
            <div className="relative">
              <div className="flex items-baseline gap-2 mb-2">
                <AnimatedNumber start={42} end={67} prefix="$" suffix="" duration={2000} />
                <span className="text-muted-foreground">per qualified appointment</span>
              </div>
              <p className="text-sm text-muted-foreground">Varies by market and competition</p>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <p className="font-medium text-warm">What's Included:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Complete AI qualification process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Appointment booking and calendar integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Automated confirmation and reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Show-up optimization system</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-warm mt-4">
              No setup costs • No contracts • No hidden fees
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "item-4",
      icon: Clock,
      question: "How fast can contractors expect appointments?",
      answer: (
        <div className="space-y-4">
          <TimelineProgress />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="glass p-5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">First Appointments</p>
                  <p className="text-sm text-muted-foreground">10-14 days</p>
                </div>
              </div>
            </div>
            <div className="glass p-5 rounded-lg border border-warm/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-warm/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-warm" />
                </div>
                <div>
                  <p className="font-semibold">Full Optimization</p>
                  <p className="text-sm text-muted-foreground">30-45 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "item-5",
      icon: Shield,
      question: "What's included in the guarantee?",
      answer: (
        <div className="space-y-4">
          <div className="glass p-6 rounded-xl border-2 border-warm/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-warm/10 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-warm" />
                <h4 className="text-xl font-bold">90-Day ROI Guarantee</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-warm">3.2x</span>
                  <span className="text-lg text-muted-foreground">minimum ROI</span>
                </div>
                <p className="text-sm leading-relaxed">
                  If you don't achieve at least a 3.2x return on investment within 90 days, you'll receive a{" "}
                  <span className="text-warm font-semibold">full refund plus $2,500</span> for your time.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <p className="text-sm font-medium mb-2">Guarantee Conditions:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Complete initial setup and onboarding</li>
              <li>• Implement recommended sales processes</li>
              <li>• Train team on best practices</li>
              <li>• Maintain professional follow-up standards</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "item-6",
      icon: Users,
      question: "Who is eligible to work with us?",
      answer: (
        <div className="space-y-4">
          <p className="mb-4">We partner with established contracting businesses that meet our qualification criteria:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Licensed Business", check: true },
              { label: "Proper Insurance", check: true },
              { label: "Proven Sales Process", check: true },
              { label: "Handle 8-15 Monthly Appointments", check: true },
              { label: "Professional Team", check: true },
              { label: "Customer Service Focus", check: true },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg glass border border-primary/20 hover:border-warm/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 group-hover:bg-warm/20 flex items-center justify-center transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-warm transition-colors" />
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-warm/10 border border-warm/30">
            <p className="text-sm font-medium text-center">
              Ready to grow? We'll verify eligibility during your initial consultation.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-warm bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our exclusive contractor growth system
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`glass border border-border hover:border-warm/40 rounded-xl overflow-hidden transition-all duration-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-warm/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <faq.icon className="w-6 h-6 text-primary group-hover:text-warm transition-colors" />
                  </div>
                  <span className="text-lg font-semibold">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pl-16 text-muted-foreground">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-warm text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-warm">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// Animated Number Component
const AnimatedNumber = ({ start, end, prefix = "", suffix = "", duration = 2000 }: { start: number; end: number; prefix?: string; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * easeOut));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [start, end, duration]);

  return (
    <span ref={countRef} className="text-3xl font-bold text-warm">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Timeline Progress Component
const TimelineProgress = () => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(100), 100);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={progressRef} className="space-y-6">
      <div className="relative">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-warm to-warm transition-all duration-2000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary mb-2" />
            <span className="text-xs text-muted-foreground">Day 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-warm mb-2" />
            <span className="text-xs text-muted-foreground">Day 10-14</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-warm-glow mb-2" />
            <span className="text-xs text-muted-foreground">Day 30-45</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
