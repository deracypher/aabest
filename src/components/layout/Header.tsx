import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navItems = [{
  name: "Home",
  href: "/"
}, {
  name: "About Us",
  href: "/about"
}, {
  name: "Services",
  href: "/services",
  dropdown: [{
    name: "Personal Care",
    href: "/services#personal-care"
  }, {
    name: "Companionship Care",
    href: "/services#companionship"
  }, {
    name: "Homemaking",
    href: "/services#homemaking"
  }, {
    name: "Specialized Care",
    href: "/services#specialized"
  }, {
    name: "Respite Care",
    href: "/services#respite"
  }, {
    name: "24-Hour Live-In Care",
    href: "/services#livein"
  }]
}, {
  name: "Dementia Care",
  href: "/dementia-care"
}, {
  name: "Contact Us",
  href: "/contact"
}, {
  name: "Careers",
  href: "/careers"
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-card shadow-nav py-2" : "bg-card/95 backdrop-blur-sm py-4")}>
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AA</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">AA Best Choice</span>
              <span className="block text-xs text-muted-foreground">Home Care</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <div key={item.name} className="relative" onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link to={item.href} className={cn("px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1", location.pathname === item.href ? "text-primary" : "text-foreground hover:text-primary hover:bg-muted")}>
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                    {item.dropdown.map(dropItem => <Link key={dropItem.name} to={dropItem.href} className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                        {dropItem.name}
                      </Link>)}
                  </div>}
              </div>)}
          </nav>

          {/* Right Side - Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14031234567" className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary-hover transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(403) 771-8737</span>
            </a>
            <Button asChild size="sm">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map(item => <div key={item.name}>
                  <Link to={item.href} className={cn("block px-4 py-3 rounded-lg font-medium transition-colors", location.pathname === item.href ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-muted")}>
                    {item.name}
                  </Link>
                  {item.dropdown && <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map(dropItem => <Link key={dropItem.name} to={dropItem.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          {dropItem.name}
                        </Link>)}
                    </div>}
                </div>)}
            </nav>
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <a href="tel:+14031234567" className="flex items-center gap-2 text-secondary font-semibold px-4">
                <Phone className="w-4 h-4" />
                <span>(403) 123-4567</span>
              </a>
              <div className="px-4">
                <Button asChild className="w-full">
                  <Link to="/contact">Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
}