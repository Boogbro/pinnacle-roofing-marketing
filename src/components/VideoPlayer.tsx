import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoPlayer = ({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0", className, style }: VideoPlayerProps) => {
  // Check if it's a direct video file URL or an embedded video URL
  const isDirectVideo = videoUrl.includes('.mp4') || videoUrl.includes('.webm') || videoUrl.includes('.mov') || videoUrl.includes('.avi');

  return (
    <div
      className={cn(
        "relative w-full z-10",
        className
      )}
      style={style}
    >
      {/* AspectRatio ensures the video scales correctly on all screen sizes */}
      <AspectRatio ratio={16 / 9} className="glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
        {isDirectVideo ? (
          <video
            src={videoUrl}
            title="Testimonial Video"
            controls
            className="absolute inset-0 w-full h-full object-cover"
            controlsList="nodownload"
          />
        ) : (
          <iframe
            src={videoUrl}
            title="Video Sales Letter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
