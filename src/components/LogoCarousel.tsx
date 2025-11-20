import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const LogoCarousel = () => {
  return (
    // Removed -mt-16 and adjusted pb-12 to pb-6 for a tighter fit at the bottom of the viewport
    <div className="relative z-10 pb-6 w-full">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8 font-light">
          Trusted by top publications
        </h2>

        {/* Removed glassmorphism card and gradient overlay */}
        <div className="relative">
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
                <CarouselItem key={logo.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Simplified styling for integration
                    className="block p-4 transition-opacity duration-300"
                  >
                    <img
                      src={logo.imgSrc}
                      alt={logo.name}
                      // Reduced height and emphasized grayscale/opacity for seamless look
                      className="w-full h-10 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Hidden navigation buttons for a more subtle look */}
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
