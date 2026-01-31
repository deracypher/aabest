import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
const quickLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About Us",
  href: "/about"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Dementia Care",
  href: "/dementia-care"
}, {
  name: "Pricing & Funding",
  href: "/pricing"
}, {
  name: "Contact Us",
  href: "/contact"
}, {
  name: "Careers",
  href: "/careers"
}, {
  name: "FAQ",
  href: "/faq"
}];
const services = [{
  name: "Personal Care",
  href: "/services#personal-care"
}, {
  name: "Companionship Care",
  href: "/services#companionship"
}, {
  name: "Homemaking Services",
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
}];
export function Footer() {
  return <footer className="bg-footer text-footer-foreground">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AA</span>
              </div>
              <div>
                <span className="font-bold text-lg">AA Best Choice</span>
                <span className="block text-xs text-footer-foreground/70">Home Care</span>
              </div>
            </div>
            <p className="text-footer-foreground/80 text-sm leading-relaxed mb-4">Your Best Choice for Compassionate Care. We provide professional home care services delivered with warmth, dignity, and expertise across Alberta, Airdrie, Calgary, Red deer, Edmonton, Chestermere.</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  
                </li>)}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map(service => <li key={service.name}>
                  <Link to={service.href} className="text-footer-foreground/80 hover:text-primary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14031234567" className="flex items-start gap-3 text-footer-foreground/80 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>(403) 771-8737</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@aabestchoice.ca" className="flex items-start gap-3 text-footer-foreground/80 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>aabestchoicehomecare
@gmail.com </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-footer-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Calgary, Alberta Canada <br />
                  Calgary, AB T2P 1A1
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-footer-foreground/70 mb-2">Office Hours:</p>
              <p className="text-sm text-footer-foreground/80">
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM<br />
                Sun: By appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="border-t border-footer-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-footer-foreground/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Alberta Blue Cross Approved
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Veterans Affairs Partner
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-footer-foreground/60">
            <p className="flex items-center gap-1">© 2025 AA Best Choice Home Care. <Heart className="w-4 h-4 text-primary fill-primary" /> in Alberta
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-footer-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-footer-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}