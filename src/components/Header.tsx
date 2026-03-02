import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { getContent, type Language } from "@/i18n/content";

type HeaderProps = {
  lang: Language;
};

const Header = ({ lang }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = getContent(lang);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
            <span className="hidden sm:inline">{header.brandLong}</span>
            <span className="sm:hidden">{header.brandShort}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {header.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {header.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {header.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {header.nav.contact}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary"
            >
              {header.cta}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {header.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {header.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {header.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {header.nav.contact}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary w-fit"
              >
                {header.cta}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
