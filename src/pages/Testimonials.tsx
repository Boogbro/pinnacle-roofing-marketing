import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, Play, Pause, Volume2, VolumeX, X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533c73a61a7edd29c280d1.mp4",
    quote: "Getting 2+ roof replacement appointments daily with this system.",
    author: "Matt Farmer",
    role: "Far More Roofing and Construction",
    fullscreenPreferred: false,
  },
  {
    id: 2,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533b5073a5e06b3aabed7b.mp4",
    quote: "We closed 3 jobs in our very first week. The quality is unreal.",
    author: "Gary",
    role: "Fortress Roofing",
    fullscreenPreferred: false,
  },
  {
    id: 3,
    url: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/69533d9eee1047fec242d519.mp4",
    quote: "21 roofs closed in just 60 days. Complete game changer.",
    author: "Kolbie Schilson",
    role: "Eminent Roofing Solutions",
    fullscreenPreferred: true,
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
  const [isMuted, setIsMuted] = useState(true);

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
      {/* Video Container - Portrait aspect ratio */}
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted/20 shadow-xl">
        <video
          ref={videoRef}
          src={testimonial.url}
          className="w-full h-full object-cover"
          muted={isMuted}
          playsInline
          loop
          preload="metadata"
        />

        {/* Play/Pause Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-foreground ml-0" />
            ) : (
              <Play className="w-6 h-6 text-foreground ml-1" />
            )}
          </div>
        </div>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Gradient Overlay for Text */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Quote and Author Info */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-base md:text-lg font-medium leading-snug mb-4">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </div>
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

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

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
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            src={testimonial.url}
            className="max-w-full max-h-full object-contain"
            playsInline
            loop
            autoPlay
            muted={isMuted}
          />

          {/* Info Overlay */}
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

const Testimonials = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState<typeof testimonials[0] | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFullscreenRequest = (testimonial: typeof testimonials[0]) => {
    setFullscreenVideo(testimonial);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="container max-w-7xl mx-auto space-y-16">
          {/* Header - Clean and Bold */}
          <div className="text-left max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Trusted by elite contractors,
              <br />
              <span className="text-muted-foreground">backed by real results</span>
            </h1>
          </div>

          {/* Video Testimonials Grid - 3 Column Portrait Layout */}
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

          {/* Bottom CTA */}
          <div className="text-center pt-12 border-t border-border/30">
            <h3 className="text-2xl font-bold mb-6">Ready to be our next success story?</h3>
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-105 transition-all duration-300 group"
              onClick={() => setIsBookingOpen(true)}
            >
              Claim Your Territory
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      <Footer onBookClick={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
      
      {/* Fullscreen Video Modal */}
      <FullscreenVideoModal 
        isOpen={!!fullscreenVideo} 
        onClose={() => setFullscreenVideo(null)} 
        testimonial={fullscreenVideo}
      />
    </div>
  );
};

export default Testimonials;
