import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onBookClick?: () => void;
}

const FinalCTA = ({ onBookClick }: FinalCTAProps) => {
  return (
    <section id="contact-us" className="pt-16 pb-48 px-6 relative overflow-hidden bg-[hsl(var(--background-light))]">
      {/* Background effects for light theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[hsl(var(--foreground-light)/0.05)] rounded-full blur-[150px]"></div>
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[hsl(var(--foreground-light))]">
            Ready to Build Your
            <br />
            <span className="gradient-text">Contracting Empire?</span>
          </h2>

          <p className="text-xl md:text-2xl text-[hsl(var(--foreground-light)/0.7)] max-w-2xl mx-auto">
            Join elite contractors who have transformed their businesses with our proven growth system.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-10 py-6 md:py-7 bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              onClick={onBookClick}
            >
              Get Your Free Growth Blueprint
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-[hsl(var(--foreground-light)/0.6)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Results in 14 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Paper mesh transition at BOTTOM (from light CTA to dark Footer) */}
      <div className="absolute -bottom-8 left-0 right-0 h-56 pointer-events-none z-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="crumpleTextureCtaBot" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="6" result="noise" seed="17" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="crumpleTextureCtaBot2" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.1" numOctaves="5" result="noise" seed="19" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="crumpleTextureCtaBot3" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.025 0.12" numOctaves="5" result="noise" seed="23" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          
          <path
            filter="url(#crumpleTextureCtaBot)"
            d="M0,130 Q180,115 360,128 T720,118 T1080,130 T1440,122 L1440,224 L0,224 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.5"
          />
          <path
            filter="url(#crumpleTextureCtaBot2)"
            d="M0,145 Q240,132 480,148 T960,135 T1440,146 L1440,224 L0,224 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.7"
          />
          <path
            filter="url(#crumpleTextureCtaBot3)"
            d="M0,158 Q300,148 600,162 T1200,152 T1440,160 L1440,224 L0,224 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.85"
          />
          <path
            filter="url(#crumpleTextureCtaBot)"
            d="M0,172 Q360,165 720,175 T1440,168 L1440,224 L0,224 Z"
            fill="hsl(var(--background))"
          />
          
          <g opacity="0.12">
            <path filter="url(#crumpleTextureCtaBot2)" d="M0,140 Q480,155 960,138 T1440,148" stroke="hsl(var(--background))" strokeWidth="3" fill="none" />
            <path filter="url(#crumpleTextureCtaBot3)" d="M0,152 Q360,145 720,155 T1440,142" stroke="hsl(var(--background))" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;