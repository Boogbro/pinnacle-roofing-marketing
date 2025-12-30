import React, { useState, useRef, useEffect } from "react";
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
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(!testimonial.startWithSound);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);

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

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      const { currentTime, duration } = videoRef.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const seekToPosition = (clientX: number) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = clickX / rect.width;
      const newTime = percentage * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    seekToPosition(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    seekToPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    if (e.touches[0]) {
      seekToPosition(e.touches[0].clientX);
    }
  };

  // Global mouse/touch move and up handlers for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        seekToPosition(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        seekToPosition(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  const isProgressExpanded = isHoveringProgress || isDragging;

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
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Progress bar - only visible when playing */}
        <div
          ref={progressRef}
          className={`absolute bottom-0 left-0 right-0 z-20 cursor-pointer transition-all duration-200 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${isProgressExpanded ? "h-3 md:h-2" : "h-1"}`}
          style={{ touchAction: "none" }}
          onClick={handleProgressClick}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onMouseEnter={() => setIsHoveringProgress(true)}
          onMouseLeave={() => !isDragging && setIsHoveringProgress(false)}
        >
          {/* Background track */}
          <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm transition-all duration-200 ${
            isProgressExpanded ? "rounded-t-sm" : ""
          }`} />
          
          {/* Filled progress */}
          <div
            className={`absolute left-0 top-0 bottom-0 bg-primary transition-all duration-75 ease-linear ${
              isProgressExpanded ? "rounded-t-sm" : ""
            }`}
            style={{ width: `${progress}%` }}
          >
            {/* Playhead dot - larger on hover/drag */}
            <div 
              className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(37,99,235,0.9)] transition-all duration-200 ${
                isProgressExpanded 
                  ? "w-4 h-4 -right-2 md:w-3 md:h-3 md:-right-1.5" 
                  : "w-2 h-2 -right-1"
              }`} 
            />
          </div>

          {/* Larger touch target area for mobile */}
          <div className="absolute -top-4 left-0 right-0 h-8 md:hidden" />
        </div>

        {/* Play/Pause overlay - hidden when playing for Matt & Gary (non-fullscreen videos) */}
        {(!isPlaying || testimonial.fullscreenPreferred) && (
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
        )}

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
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      const { currentTime, duration } = videoRef.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const seekToPosition = (clientX: number) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = clickX / rect.width;
      const newTime = percentage * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    seekToPosition(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    seekToPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    if (e.touches[0]) {
      seekToPosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        seekToPosition(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        seekToPosition(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setProgress(0);
      setIsMuted(false);
    }
  }, [isOpen]);

  if (!testimonial) return null;

  const isProgressExpanded = isHoveringProgress || isDragging;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black border-none overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center group">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="absolute bottom-44 md:bottom-40 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <video
            ref={videoRef}
            src={testimonial.url}
            className="max-w-full max-h-full object-contain cursor-pointer"
            playsInline
            loop
            autoPlay
            muted={isMuted}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
          />

          {/* Bottom overlay with title and progress bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            {/* Text content */}
            <div className="px-4 md:px-6 pt-8 pb-3">
              <p className="text-base md:text-xl font-medium text-white mb-1 md:mb-2 line-clamp-2">
                "{testimonial.quote}"
              </p>
              <p className="text-white font-semibold text-sm md:text-base">{testimonial.author}</p>
              <p className="text-white/70 text-xs md:text-sm">{testimonial.role}</p>
            </div>

            {/* Progress bar - positioned below the text */}
            <div
              ref={progressRef}
              className={`relative mx-4 md:mx-6 mb-4 z-20 cursor-pointer transition-all duration-200 rounded-full overflow-hidden ${
                isProgressExpanded ? "h-3 md:h-2" : "h-1.5"
              }`}
              style={{ touchAction: "none" }}
              onClick={handleProgressClick}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onMouseEnter={() => setIsHoveringProgress(true)}
              onMouseLeave={() => !isDragging && setIsHoveringProgress(false)}
            >
              {/* Background track */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
              
              {/* Filled progress */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-primary transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              >
                {/* Playhead dot */}
                <div 
                  className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(37,99,235,0.9)] transition-all duration-200 ${
                    isProgressExpanded 
                      ? "w-4 h-4 -right-2 md:w-3 md:h-3 md:-right-1.5" 
                      : "w-2.5 h-2.5 -right-1"
                  }`} 
                />
              </div>

              {/* Larger touch target area for mobile */}
              <div className="absolute -top-4 left-0 right-0 h-8 md:hidden" />
            </div>
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
    <section id="results" className="pt-28 pb-24 px-6 relative overflow-hidden">
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
            Trusted by <span className="gradient-text">Elite Contractors</span>
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
