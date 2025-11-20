import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";

const projects = [
  {
    image: carousel1,
    title: "Luxury Home Exterior",
    link: "#project-1",
  },
  {
    image: carousel2,
    title: "Construction Excellence",
    link: "#project-2",
  },
  {
    image: carousel3,
    title: "Modern Kitchen Renovation",
    link: "#project-3",
  },
  {
    image: carousel4,
    title: "Outdoor Living Space",
    link: "#project-4",
  },
  {
    image: carousel5,
    title: "Bathroom Transformation",
    link: "#project-5",
  },
  {
    image: carousel6,
    title: "Community Development",
    link: "#project-6",
  },
  {
    image: carousel7,
    title: "Client Success Story",
    link: "#project-7",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold">
            Recent Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See the transformations we've delivered for elite contractors
          </p>
        </div>

        {/* Carousel Container with Glassmorphism */}
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>

          {/* Main Carousel */}
          <div className="relative">
            {/* Images Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Image Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </a>
              ))}

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass opacity-0 group-hover:opacity-100 transition-all hover:scale-110 border border-primary/20 hover:border-primary/40"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass opacity-0 group-hover:opacity-100 transition-all hover:scale-110 border border-primary/20 hover:border-primary/40"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </Button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-12 h-3 bg-primary"
                      : "w-3 h-3 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Slide Info */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} / {projects.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
