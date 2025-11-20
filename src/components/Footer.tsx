import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface FooterProps {
  onBookClick?: () => void;
}

const Footer = ({ onBookClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/#system-process", label: "Process" },
    { href: "/#infrastructure", label: "Infrastructure" },
    { href: "/#roi-calculator", label: "ROI" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <footer className="bg-secondary/20 pt-16 pb-6 relative z-10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-black">
                <span className="gradient-text">SP Digital Growth</span>
              </h1>
            </a>
            <p className="text-sm text-muted-foreground">Elite Contractor Marketing. Guaranteed Results.</p>
          </div>

          {/* Column 2: Quick Links (Navigation) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (Placeholder for future) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Main CTA */}
          <div className="col-span-2 md:col-span-1 space-y-4 md:text-right">
            <h3 className="text-lg font-semibold text-foreground">Ready to scale?</h3>
            <Button
              size="lg"
              className="w-full md:w-auto text-lg bg-primary hover:bg-primary/90 text-primary-foreground glow hover:scale-[1.03] transition-all duration-300 group"
              onClick={onBookClick}
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground pt-2">*3.2x ROI guaranteed within 90 days.</p>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-4">
          <p>&copy; {currentYear} SP Digital Growth. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
