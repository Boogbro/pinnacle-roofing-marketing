import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel = () => {
  const logos = [
    {
      id: 1,
      name: "Benzinga",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb613643fd514ad8267.webp",
    },
    {
      id: 2,
      name: "The Globe and Mail",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb634fadb546f515a49.webp",
    },
    {
      id: 3,
      name: "News Channel Nebraska",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb634fadb70d9515a4a.png",
    },
    {
      id: 4,
      name: "Chronicle Journal",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb6f994d956bf869f72.jpeg",
    },
    {
      id: 5,
      name: "Barchart",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb6f994d9c867869f73.png",
    },
    {
      id: 6,
      name: "Business Insider",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c78eb634fadbeff3515a48.webp",
    },
    {
      id: 7,
      name: "Financial Content",
      url: "https://toplimbmedia.com",
      imgSrc: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/68c7905c1708d01ea27e14ea.png",
    },
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
