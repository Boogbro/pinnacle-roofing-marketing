import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Pause, Volume2, VolumeX, X, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533c73a61a7edd29c280d1.mp4",
    quote: "Getting 2+ roof replacement appointments daily with this system.",
    author: "Matt Farmer",
    role: "Far More Roofing and Construction",
    fullscreenPreferred: false,
    startWithSound: true,
  },
  {
    id: 2,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533b5073a5e06b3aabed7b.mp4",
    quote: "We closed 3 jobs in our very first week. The quality is unreal.",
    author: "Gary",
    role: "Fortress Roofing",
    fullscreenPreferred: false,
    startWithSound: true,
  },
  {
    id: 3,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533d9eee1047fec242d519.mp4",
    quote: "21 roofs closed in just 60 days. Complete game changer.",
    author: "Kolbie Schilson",
    role: "Eminent Roofing Solutions",
    fullscreenPreferred: true,
    startWithSound: false,
  },
];

interface VideoCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  onFullscreenRequest?: (testimonial: typeof testimonials[0]) => void;
}

const VideoCard = ({ testimonial, index, onFullscreenRequest }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(!testimonial.startWithSound);

  const togglePlay = () => {
    if (testimonial.fullscreenPreferred && onFullscreenRequest) {
      onFullscreenRequest(testimonial);
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="relative group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={togglePlay}
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted/20 shadow-xl border border-border/20">
        <video
          ref={videoRef}
          src={testimonial.url}
          className="w-full h-full object-cover"
          muted={isMuted}
          playsInline
          loop
          preload="metadata"
        />

        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              <Pause className="w-5 h-5 text-foreground" />
            ) : (
              <Play className="w-5 h-5 text-foreground ml-0.5" />
            )}
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-sm md:text-base font-medium leading-snug mb-3">
            "{testimonial.quote}"
          </p>
          <div>
            <p className="font-semibold text-white text-sm">{testimonial.author}</p>
            <p className="text-xs text-white/70">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FullscreenVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: typeof testimonials[0] | null;
}

const FullscreenVideoModal = ({ isOpen, onClose, testimonial }: FullscreenVideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!testimonial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black border-none overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <video
            ref={videoRef}
            src={testimonial.url}
            className="max-w-full max-h-full object-contain"
            playsInline
            loop
            autoPlay
            muted={isMuted}
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-lg md:text-xl font-medium text-white mb-2">
              "{testimonial.quote}"
            </p>
            <p className="text-white font-semibold">{testimonial.author}</p>
            <p className="text-white/70 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TestimonialsSection = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState<typeof testimonials[0] | null>(null);

  const handleFullscreenRequest = (testimonial: typeof testimonials[0]) => {
    setFullscreenVideo(testimonial);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Trusted by Elite Contractors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how top roofing companies are scaling their revenue with our lead generation system.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <VideoCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              onFullscreenRequest={handleFullscreenRequest}
            />
          ))}
        </div>
      </div>

      <FullscreenVideoModal
        isOpen={!!fullscreenVideo}
        onClose={() => setFullscreenVideo(null)}
        testimonial={fullscreenVideo}
      />
    </section>
  );
};

export default TestimonialsSection;
