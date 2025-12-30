import * as React from "react";
import { Menu, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#results", label: "Results" },
  { href: "#system-process", label: "Process" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  onBookClick?: () => void;
}

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleBookingTrigger = () => {
    setIsMenuOpen(false);
    if (onBookClick) onBookClick();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NavContent = () => (
    <div className="flex flex-col gap-4 p-6 pt-0">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleNavLinkClick}
            className="text-lg font-medium py-2 text-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="pt-4">
        <Button
          size="lg"
          className="w-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all duration-300 group"
          onClick={handleBookingTrigger}
        >
          Book a Strategy Call
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed w-full transition-all duration-300 z-50",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "glass border-b border-transparent",
      )}
    >
      {/* Dynamic height class applied here */}
      <div
        className={cn(
          "container mx-auto flex items-center justify-between px-6 transition-all duration-300",
          isScrolled ? "h-20" : "h-16", // Shorter on load, taller on scroll
        )}
      >
        {/* Logo/Title */}
        <a href="/" className="flex items-center space-x-2 group" onClick={handleLogoClick}>
          <h1 className="text-xl md:text-2xl font-black">
            <span className="gradient-text">Pinnacle Roofing Marketing</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            className="hidden lg:flex px-6 bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-[1.03] transition-all duration-300 group"
            onClick={onBookClick}
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[540px]">
              {/* Logo in Sheet Header */}
              <div className="pb-6 border-b border-border/50">
                <h1 className="text-xl md:text-2xl font-black">
                  <span className="gradient-text">Pinnacle Roofing Marketing</span>
                </h1>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
