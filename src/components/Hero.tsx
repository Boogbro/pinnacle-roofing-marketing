import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer"; // Import the new component

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    // Section uses pt-16 (for small navbar) and min-h-svh (full viewport height)
    <section id="hero" className="relative pt-16 flex flex-col justify-between min-h-svh overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>

        {/* Animated particles/geometric shapes - KEPT FOR DESIGN */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern - KEPT FOR DESIGN */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content Container (Headline, CTA, Video) - flex-1 and justify-center centers content vertically */}
      <div className="container relative z-10 px-6 flex flex-col items-center justify-center flex-1 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Dominate Your Market.
              <br />
              <span className="gradient-text">We Build Your Growth Engine.</span>
            </h1>
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Exclusive, High-Intent Appointments for Elite Contractors. Guaranteed.
            </p>
          </div>

          {/* CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="#contact-us">
                Book a Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Video Player Component */}
        <div className="w-full max-w-4xl px-4 md:px-6 pt-12">
          <VideoPlayer
            videoUrl="https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ea48c88e1e6a552a66250.mp4" // Placeholder URL
            className="animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>

      {/* Children (LogoCarousel) is pushed to the bottom of the viewport */}
      {children}
    </section>
  );
};

export default Hero;
