import * as React from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

  // Close menu when clicking outside or on escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleBookingTrigger = () => {
    setIsMenuOpen(false);
    if (onBookClick) onBookClick();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed w-full transition-all duration-300 z-50",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "glass border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between px-6 transition-all duration-300",
            isScrolled ? "h-20" : "h-16",
          )}
        >
          {/* Logo/Title */}
          <a href="/" className="flex items-center space-x-2 group" onClick={handleLogoClick}>
            <h1 className="text-xl md:text-2xl font-black">
              <span className="gradient-text">
                <span className="font-black italic">Pinnacle</span>
                <span className="font-semibold"> Roofing Marketing</span>
              </span>
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

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )}
                />
                <X
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500 ease-out",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Dropdown Panel */}
        <div
          className={cn(
            "relative bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl transition-all duration-500 ease-out overflow-hidden",
            isMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          )}
          style={{
            paddingTop: isScrolled ? "80px" : "64px",
          }}
        >
          <nav className="container mx-auto px-6 py-8">
            {/* Nav Links with stagger animation */}
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className={cn(
                    "block text-2xl font-semibold py-4 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 border-b border-border/20",
                    "transform transition-all duration-500 ease-out",
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={cn(
                "pt-6 transform transition-all duration-500 ease-out",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 75 + 100}ms` : "0ms",
              }}
            >
              <Button
                size="lg"
                className="w-full text-lg px-8 py-7 bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all duration-300 group rounded-xl"
                onClick={handleBookingTrigger}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative element */}
            <div
              className={cn(
                "mt-8 flex justify-center gap-2 transition-all duration-500",
                isMenuOpen ? "opacity-100" : "opacity-0"
              )}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 75 + 200}ms` : "0ms",
              }}
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary/40"
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
