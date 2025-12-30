import { Home, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhoWeServeProps {
  onBookClick?: () => void;
}

const services = [
  {
    icon: Hammer,
    title: "Remodelers & GCs",
    description: "Full kitchens, primary baths, additions, and structural changes.",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: Home,
    title: "Roofers",
    description: "Replacements and insurance-approved projects.",
    gradient: "from-amber-500/20 to-transparent",
  },
];

const WhoWeServe = ({ onBookClick }: WhoWeServeProps) => {
  return (
    <section id="who-we-serve" className="pt-28 pb-20 px-6 relative overflow-hidden bg-[hsl(var(--background-light))]">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-[hsl(var(--foreground-light))]">
            Who We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-lg text-[hsl(var(--foreground-light)/0.7)] max-w-2xl mx-auto">
            If you can staff the work, we can fill the calendar.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--foreground-light)/0.1)] bg-[hsl(var(--foreground-light)/0.03)] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[hsl(var(--foreground-light)/0.2)] hover:bg-[hsl(var(--foreground-light)/0.05)]"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[hsl(var(--foreground-light))] group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[hsl(var(--foreground-light)/0.6)] text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            onClick={onBookClick}
            data-testid="button-who-we-serve-cta"
          >
            Check If Your Area Is Available
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
