import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ----------------------------------------------------------------------
// 1. PASTE YOUR VIDEO LINKS BELOW (replace the placeholder URLs)
// ----------------------------------------------------------------------
const testimonials = [
  {
    id: 1,
    type: "video",
    url: "https://example.com/your-video-1.mp4",
    title: "2+ Roof Replacement Appointments Daily",
    author: "Matt Farmer, Far More Roofing and Construction",
    result: "Hiring New Salesman",
  },
  {
    id: 2,
    type: "video",
    url: "https://example.com/your-video-2.mp4",
    title: "3 Jobs Closed in Week 1",
    author: "Gary, Fortress Roofing",
    result: "3 Jobs Closed",
  },
  {
    id: 3,
    type: "video",
    url: "https://example.com/your-video-3.mp4",
    title: "21 Roofs Closed in 60 Days",
    author: "Kolbie Schilson, Eminent Roofing Solutions",
    result: "21 Roofs Closed",
  },
  // Add more testimonials here...
];

const Testimonials = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="container max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Proven Results</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Real Contractors. <br />
              <span className="gradient-text">Real Empire Growth.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how elite contractors are using our infrastructure to dominate their local markets and scale their
              revenue.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="bg-card/50 border-primary/10 overflow-hidden h-full hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Media Container */}
                    <div className="relative aspect-video w-full bg-black/20 overflow-hidden">
                      {item.type === "video" ? (
                        <VideoPlayer videoUrl={item.url} className="w-full h-full" />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Quote className="w-4 h-4 text-primary/50" />
                          <span>{item.author}</span>
                        </div>
                      </div>

                      {/* Result Badge */}
                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Result:</span>
                        <span className="text-sm font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                          {item.result}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
    </div>
  );
};

export default Testimonials;
