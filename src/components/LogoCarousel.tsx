import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel = () => {
  // Placeholder data for 7 logos - users will replace these
  const logos = [
    { id: 1, name: "Company 1", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+1" },
    { id: 2, name: "Company 2", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+2" },
    { id: 3, name: "Company 3", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+3" },
    { id: 4, name: "Company 4", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+4" },
    { id: 5, name: "Company 5", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+5" },
    { id: 6, name: "Company 6", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+6" },
    { id: 7, name: "Company 7", url: "https://example.com", imgSrc: "https://placeholder.svg/400x200/1a1a2e/00ffff?text=Logo+7" },
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-12 font-light">
          Trusted by Industry Leaders
        </h2>
        
        {/* Glassmorphism container with gradient overlay */}
        <div className="relative group">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl pointer-events-none z-10" />
          
          {/* Glassmorphism card */}
          <div className="glass p-8 rounded-2xl border border-primary/20 relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo) => (
                  <CarouselItem key={logo.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <a 
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:scale-105"
                    >
                      <img
                        src={logo.imgSrc}
                        alt={logo.name}
                        className="w-full h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/20" />
              <CarouselNext className="right-0 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/20" />
            </Carousel>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-xl -z-10 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
