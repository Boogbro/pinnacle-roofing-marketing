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
    <section id="system-process" className="py-24 px-6 relative overflow-hidden" style={{ background: 'hsl(var(--background-light))' }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground-light) / 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6" style={{ color: 'hsl(var(--foreground-light))' }}>
            How It Works{" "}
            <span className="gradient-text">In 60 Seconds</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-xl" style={{ color: 'hsl(var(--muted-foreground-light))' }}>
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
                  "group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:border-black/20 hover:bg-white hover:shadow-2xl hover:shadow-black/10",
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
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 min-h-[280px] z-10">
                  {/* Top Section: Icon & Number */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" style={{ color: 'hsl(var(--foreground-light))' }} />
                    </div>
                    <span className="text-sm font-mono tracking-widest" style={{ color: 'hsl(var(--muted-foreground-light) / 0.5)' }}>{step.number}</span>
                  </div>

                  {/* Content Section */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300" style={{ color: 'hsl(var(--foreground-light))' }}>
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground-light))' }}>
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
    </section>
  );
};

export default SystemProcess;
