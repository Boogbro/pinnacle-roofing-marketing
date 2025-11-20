import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    // Adjusted min-h-screen to pt-20 to allow the video to reach the top
    <section id="hero" className="relative pt-20 flex flex-col justify-start overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
        
        {/* Animated particles/geometric shapes - KEPT FOR DESIGN */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Grid pattern - KEPT FOR DESIGN */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-12 md:py-16 flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Dominate Your Market.
              <br />
              <span className="gradient-text">We Build Your Growth Engine.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Exclusive, High-Intent Appointments for Elite Contractors. Guaranteed.
            </p>
          </div>

          {/* CTA - MOVED ABOVE VIDEO */}
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
      </div>
      
      {/* Video Player - Adjusted styling for full view at the top */}
      <div className="relative w-full px-4 md:px-6 z-10 animate-scale-in" style={{ animationDelay: "0.2s" }}>
        <div className="max-w-7xl mx-auto aspect-video glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
            {/* Placeholder for video - in production, replace with actual video component */}
            <div className="text-center space-y-4 p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1"></div>
              </div>
              <p className="text-muted-foreground">Sales Letter Video</p>
            </div>
          </div>
        </div>
      </div>

      {/* Children is used to integrate the LogoCarousel */}
      {children}
    </section>
  );
};

export default Hero;
