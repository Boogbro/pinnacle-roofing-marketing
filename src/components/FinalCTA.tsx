import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/20 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse"></div>
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Ready to Build Your
            <br />
            <span className="gradient-text">Contracting Empire?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join elite contractors who have transformed their businesses with our proven growth system.
          </p>

          <div className="pt-4">
            <Button 
              size="lg"
              className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-105 transition-all duration-300 group"
            >
              Get Your Free Growth Blueprint
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
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
    </section>
  );
};

export default FinalCTA;
