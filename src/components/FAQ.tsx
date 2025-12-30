import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

interface FAQProps {
  onBookClick?: () => void;
}

const faqData = [
  {
    id: "item-1",
    question: "Why does the video say 'Pinnacle Roofing Marketing'? I'm not a roofer.",
    answer:
      "Most of our early case studies and major nationwide success were in roofing. The same AI engine and human team now books full kitchen and primary bath estimates using remodel-specific screening—design, permit, or financing readiness. You will see familiar, if not better, results. The process is identical. Remodeling and interior work thrives in winter whereas roofing is constrained to the spring, especially in northern states.",
  },
  {
    id: "item-2",
    question: "How is this different from HomeAdvisor or Angie's List?",
    answer:
      "Exclusive territory rights, never shared leads, no bidding wars. All prospects are pre-qualified for budget, timeline, and decision authority—no competing with other contractors.",
  },
  {
    id: "item-3",
    question: "What does the AI qualification process include?",
    answer:
      "Our AI uses a comprehensive checklist: budget verification (for $15k+ projects), timeline, decision-maker, project scope, insurance, financing, urgency, and competitor checks. Only highly qualified leads reach your calendar.",
  },
  {
    id: "item-4",
    question: "How much does it typically cost per appointment?",
    answer:
      "$42–$67 per fully qualified booked appointment. Clear pricing—no setup fees, no contracts, no hidden charges.",
  },
  {
    id: "item-5",
    question: "How quickly can we start seeing appointments?",
    answer:
      "Most clients see their first appointments in 10–14 days. Full performance optimization in 30–45 days as we refine targeting and scoring.",
  },
  {
    id: "item-6",
    question: "What's included in the guarantee?",
    answer:
      "3.2x ROI guarantee within 90 days (with required implementation steps). Otherwise, full refund + $2,500 extra, no risks.",
  },
  {
    id: "item-7",
    question: "Do you work with new contracting businesses?",
    answer:
      "Must be established contractors: proper license/insurance, 2+ years' experience, $500k+ annual revenue, sales team, capacity for extra jobs.",
  },
];

const FAQ = ({ onBookClick }: FAQProps) => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section id="faq" className="py-24 pb-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

      {/* Crumpled paper mesh transition at bottom */}
      <div className="absolute -bottom-4 left-0 right-0 h-64 pointer-events-none z-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="crumpleFaqBot1" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="6" result="noise" seed="31" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="crumpleFaqBot2" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.018 0.09" numOctaves="5" result="noise" seed="37" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="crumpleFaqBot3" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.022 0.11" numOctaves="5" result="noise" seed="43" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="crumpleFaqBot4" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.028 0.14" numOctaves="4" result="noise" seed="47" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          
          {/* Layered crumpled paper waves transitioning to light background */}
          <path
            filter="url(#crumpleFaqBot1)"
            d="M0,100 Q120,85 240,98 T480,88 T720,100 T960,90 T1200,102 T1440,92 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.35"
          />
          <path
            filter="url(#crumpleFaqBot2)"
            d="M0,125 Q180,110 360,122 T720,112 T1080,125 T1440,118 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.55"
          />
          <path
            filter="url(#crumpleFaqBot3)"
            d="M0,150 Q240,138 480,152 T960,140 T1440,150 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.75"
          />
          <path
            filter="url(#crumpleFaqBot4)"
            d="M0,175 Q300,165 600,178 T1200,168 T1440,176 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.9"
          />
          <path
            filter="url(#crumpleFaqBot1)"
            d="M0,200 Q360,192 720,202 T1440,195 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
          />
          
          {/* Subtle crease lines for paper texture */}
          <g opacity="0.15">
            <path filter="url(#crumpleFaqBot2)" d="M0,115 Q480,128 960,112 T1440,122" stroke="hsl(var(--background-light))" strokeWidth="2.5" fill="none" />
            <path filter="url(#crumpleFaqBot3)" d="M0,140 Q360,132 720,142 T1440,135" stroke="hsl(var(--background-light))" strokeWidth="2" fill="none" />
            <path filter="url(#crumpleFaqBot4)" d="M0,165 Q540,175 1080,162 T1440,170" stroke="hsl(var(--background-light))" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-20">
          <div>
            <h2 className="text-5xl sm:text-7xl font-bold mb-4">
              <span className="gradient-text">Have questions?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">Find answers.</p>
          </div>

          <div className="hidden sm:block text-right">
            <p className="text-base text-muted-foreground mb-2">Can't find an answer?</p>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group font-semibold"
            >
              Talk to sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-primary/20 transition-all bg-card/50 px-4 rounded-xl shadow-xl hover:border-primary/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left py-5 hover:no-underline group">
                <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-primary to-primary/50 rounded-full flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-16 text-center">
          <p className="text-base text-muted-foreground mb-2">Can't find an answer?</p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group font-semibold"
          >
            Talk to sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
