import { ClipboardCheck, Filter, Calendar, TrendingUp, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Capacity Check",
    description: "We confirm your service area and project mix to ensure we can deliver the right appointments for your business.",
    className: "md:col-span-1",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec07053e35079ab4dca1e.png",
  },
  {
    number: "02",
    icon: Filter,
    title: "Screening",
    description: "Homeowners must be design approved, permit ready, or financing approved—and qualified for the scope of work you provide.",
    className: "md:col-span-1",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec0705c5cab484c042f45.png",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Booking",
    description: "You receive qualified, exclusive estimates directly inside your calendar. No shared leads, no bidding wars.",
    className: "md:col-span-1",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec07093893187ceaab482.png",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description: "Increase or pause volume by capacity, not by hope. If you're overwhelmed, we pause so you never waste appointments.",
    className: "md:col-span-3",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec070330ab50a6ad46dd4.png",
  },
];

const SystemProcess = () => {
  return (
    <section id="system-process" className="py-24 pb-48 px-6 relative overflow-hidden bg-background">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            How It Works{" "}
            <span className="gradient-text">In 60 Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            A completely done-for-you system designed to fill your calendar with high-value appointments.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-card/40 hover:shadow-2xl hover:shadow-primary/5",
                  step.className,
                )}
              >
                {/* Internal Gradient Highlight */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br pointer-events-none",
                    step.gradient,
                  )}
                />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 min-h-[280px] z-10">
                  {/* Top Section: Icon & Number */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
                      <Icon className="w-6 h-6 text-foreground/80" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/50 tracking-widest">{step.number}</span>
                  </div>

                  {/* Content Section */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Corner Action Icon */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Paper mesh transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
        {/* Base gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-[hsl(var(--background-light))]" />
        
        {/* Paper mesh SVG pattern */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Mesh fibers - dark to light blending */}
          <defs>
            <filter id="paperTexture" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" seed="1" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="40%" stopColor="hsl(var(--background))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--background-light))" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Organic torn paper edge shapes */}
          <path
            filter="url(#paperTexture)"
            d="M0,180 Q80,140 160,170 T320,150 T480,180 T640,140 T800,175 T960,145 T1120,170 T1280,155 T1440,180 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.4"
          />
          <path
            filter="url(#paperTexture)"
            d="M0,200 Q100,170 200,195 T400,175 T600,200 T800,165 T1000,190 T1200,170 T1440,200 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.6"
          />
          <path
            filter="url(#paperTexture)"
            d="M0,215 Q60,195 120,210 T240,190 T360,215 T480,195 T600,210 T720,185 T840,210 T960,195 T1080,215 T1200,190 T1320,210 T1440,195 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
            fillOpacity="0.8"
          />
          <path
            d="M0,235 Q40,220 80,232 T160,225 T240,235 T320,222 T400,235 T480,220 T560,232 T640,225 T720,235 T800,220 T880,232 T960,225 T1040,235 T1120,222 T1200,232 T1280,225 T1360,235 T1440,228 L1440,256 L0,256 Z"
            fill="hsl(var(--background-light))"
          />
          
          {/* Mesh fiber strands for paper texture effect */}
          <g opacity="0.15">
            <path d="M0,160 Q360,200 720,140 T1440,180" stroke="hsl(var(--background-light))" strokeWidth="2" fill="none" />
            <path d="M0,175 Q480,130 960,190 T1440,150" stroke="hsl(var(--background-light))" strokeWidth="1.5" fill="none" />
            <path d="M0,190 Q240,220 480,170 T960,200 T1440,165" stroke="hsl(var(--background-light))" strokeWidth="1" fill="none" />
          </g>
        </svg>
        
        {/* Additional mesh overlay for depth */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `linear-gradient(to bottom, transparent, hsl(var(--background-light)))`,
            maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
};

export default SystemProcess;
