import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

interface HeroProps {
  children?: React.ReactNode;
  onBookClick?: () => void;
}

const Hero = ({ children, onBookClick }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-24 pb-10"
    >
      {/* --- 1. Background Video Layer --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-pan"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
        >
          <source
            src="https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691eddf9330ab522c0d78d91.mp4"
            type="video/mp4"
          />
        </video>

        {/* Visual Overlays */}
        <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)] z-20" />
      </div>

      {/* --- 2. Main Content Grid --- */}
      <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        {/* Headline Area */}
        <div className="max-w-3xl space-y-5 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-2 animate-fade-in-up shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
              Exclusive Territory Available
            </span>
          </div>

          {/* Main Title - Scaled Down */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-2xl">
            DOMINATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary animate-shine bg-[length:200%_auto]">
              YOUR MARKET.
            </span>
          </h1>

          {/* Subheadline - Scaled Down */}
          <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            The automated growth infrastructure that fills your calendar with high-value roofing and contracting jobs.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="h-11 px-8 text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(234,179,8,0.6)] transition-all duration-300 hover:scale-105 font-bold uppercase tracking-wide group"
              onClick={onBookClick}
            >
              Claim Your Market
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* --- 3. VSL Player (Compact) --- */}
        {/* Reduced max-width to 2xl for a tighter, modern look */}
        <div
          className="w-full max-w-2xl mx-auto relative group mt-4 perspective-1000"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Floating Label */}
          <div className="absolute -top-6 right-0 md:-right-6 bg-white/5 backdrop-blur-md border border-white/10 p-2.5 rounded-xl hidden md:block animate-float z-30">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <PlayCircle size={16} />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Watch Analysis</p>
                <p className="text-[10px] font-bold text-white">Scaling to $5M+</p>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-amber-500/20 to-primary/40 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

          {/* Player Container */}
          <div className="relative rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden ring-1 ring-white/10 z-20">
            <VideoPlayer
              videoUrl="https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691eb27388e1e669aaa7d2c7.mp4"
              className="w-full aspect-video"
            />
          </div>
        </div>
      </div>

      {/* --- 4. Footer/Children (Logo Carousel) --- */}
      {/* Removed background color to make it transparent to the video */}
      <div className="relative z-30 mt-8 border-t border-white/5 bg-transparent">{children}</div>
    </section>
  );
};

export default Hero;
