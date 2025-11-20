import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

interface HeroProps {
  children?: React.ReactNode;
  onBookClick?: () => void;
}

const Hero = ({ children, onBookClick }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-24 pb-12"
    >
      {/* --- 1. Dynamic Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />

        {/* Background Video Placeholder */}
        {/* Replace 'src' with a high-quality roofing or construction B-roll */}
        <video
          className="w-full h-full object-cover opacity-40 grayscale"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-cloudy-sky-over-the-mountains-2688-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Animated ambient light effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse z-20 pointer-events-none" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse z-20 pointer-events-none"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* --- 2. Main Content Grid --- */}
      <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        {/* Headline Area */}
        <div className="max-w-4xl space-y-6 animate-fade-in">
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase backdrop-blur-md mb-4 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Exclusive Territory: Q4 Intake Open
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
            REACH THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-300 to-primary drop-shadow-sm">
              PINNACLE.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            The specialized growth infrastructure for roofing contractors who refuse to compete on price.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105 font-bold"
              onClick={onBookClick}
            >
              Claim Your Market
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-primary/50 transition-all backdrop-blur-sm"
              onClick={() => document.getElementById("system-process")?.scrollIntoView({ behavior: "smooth" })}
            >
              See The System
            </Button>
          </div>
        </div>

        {/* --- 3. VSL Player (Center Stage) --- */}
        <div
          className="w-full max-w-5xl mx-auto relative group animate-scale-in perspective-1000"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Glow Effect behind player */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

          <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
            <VideoPlayer
              videoUrl="https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691eb27388e1e669aaa7d2c7.mp4"
              className="w-full aspect-video"
            />
          </div>

          {/* Trust Label under video */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
              Watch the 2-minute Breakdown
            </p>
          </div>
        </div>
      </div>

      {/* --- 4. Footer/Carousel Integration --- */}
      <div className="relative z-30 mt-20 border-t border-white/5 bg-slate-950/50 backdrop-blur-md">{children}</div>
    </section>
  );
};

export default Hero;
