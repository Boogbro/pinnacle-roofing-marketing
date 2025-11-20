import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "How is this different from HomeAdvisor or Angie's List?",
    answer:
      "Exclusive territory rights, never shared leads, no bidding wars. All prospects are pre-qualified for budget, timeline, and decision authority—no competing with other contractors.",
  },
  {
    id: "item-2",
    question: "What does the AI qualification process include?",
    answer:
      "Our AI uses a comprehensive checklist: budget verification (for $15k+ projects), timeline, decision-maker, project scope, insurance, financing, urgency, and competitor checks. Only highly qualified leads reach your calendar.",
  },
  {
    id: "item-3",
    question: "How much does it typically cost per appointment?",
    answer:
      "$42–$67 per fully qualified booked appointment. Clear pricing—no setup fees, no contracts, no hidden charges.",
  },
  {
    id: "item-4",
    question: "How quickly can we start seeing appointments?",
    answer:
      "Most clients see their first appointments in 10–14 days. Full performance optimization in 30–45 days as we refine targeting and scoring.",
  },
  {
    id: "item-5",
    question: "What's included in the guarantee?",
    answer:
      "3.2x ROI guarantee within 90 days (with required implementation steps). Otherwise, full refund + $2,500 extra, no risks.",
  },
  {
    id: "item-6",
    question: "Do you work with new contracting businesses?",
    answer:
      "Must be established contractors: proper license/insurance, 2+ years' experience, $500k+ annual revenue, sales team, capacity for extra jobs.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-2">
              Have questions?
            </h2>
            <p className="text-3xl sm:text-4xl text-muted-foreground">
              Find answers.
            </p>
          </div>
          
          <div className="hidden sm:block text-right">
            <p className="text-sm text-muted-foreground mb-2">
              Any more questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              Talk to sales
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-0"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-border/50 transition-all"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline group">
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <div className="flex gap-3">
                  <div className="w-1 bg-gradient-to-b from-primary to-warm-accent rounded-full flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Any more questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            Talk to sales
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
