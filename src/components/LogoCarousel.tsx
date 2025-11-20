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
    <div className="relative z-10 py-6 w-full">
      <div className="container mx-auto max-w-7xl relative z-10">
        <p className="text-center text-slate-400/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in">
          Trusted By Top Publications
        </p>

        <div className="relative px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-center">
              {logos.map((logo) => (
                <CarouselItem key={logo.id} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 transition-all duration-300 group"
                  >
                    {/* Reverted to original "Grayscale -> Color" effect
                        Added 'invert' only if necessary for dark mode visibility,
                        but removing 'brightness-0' restores the details.
                     */}
                    <img
                      src={logo.imgSrc}
                      alt={logo.name}
                      className="w-full h-8 object-contain opacity-40 group-hover:opacity-100 transition-all duration-500 filter grayscale hover:grayscale-0"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
