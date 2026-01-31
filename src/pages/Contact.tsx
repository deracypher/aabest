import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
const serviceAreas = ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Airdrie", "Okotoks", "Cochrane", "Sherwood Park", "St. Albert", "Leduc", "Medicine Hat", "Grande Prairie"];
export default function Contact() {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Thank you for reaching out!",
      description: "We've received your message and will contact you within 24 hours."
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  return <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-gradient-cta">
        <div className="section-container relative z-10">
          <nav className="text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            We'd love to hear from you. Whether you're exploring options, ready to begin services, or just have questions, our friendly team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Request a Free Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(403) 123-4567" required className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="city">City/Location *</Label>
                    <Input id="city" placeholder="Calgary" required className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="careFor">Care Needed For</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="self">Myself</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="other">Other Loved One</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="careType">Type of Care Interested In</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Care</SelectItem>
                        <SelectItem value="companion">Companionship</SelectItem>
                        <SelectItem value="homemaking">Homemaking</SelectItem>
                        <SelectItem value="specialized">Specialized Care</SelectItem>
                        <SelectItem value="dementia">Dementia Care</SelectItem>
                        <SelectItem value="respite">Respite Care</SelectItem>
                        <SelectItem value="livein">Live-In Care</SelectItem>
                        <SelectItem value="unsure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="phone" className="flex gap-6 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone" className="font-normal">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email" className="font-normal">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="either" id="contact-either" />
                        <Label htmlFor="contact-either" className="font-normal">Either</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Preferred Time to Contact</Label>
                    <RadioGroup defaultValue="anytime" className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="morning" id="time-morning" />
                        <Label htmlFor="time-morning" className="font-normal">Morning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="afternoon" id="time-afternoon" />
                        <Label htmlFor="time-afternoon" className="font-normal">Afternoon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="evening" id="time-evening" />
                        <Label htmlFor="time-evening" className="font-normal">Evening</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="anytime" id="time-anytime" />
                        <Label htmlFor="time-anytime" className="font-normal">Anytime</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message / Additional Details</Label>
                  <Textarea id="message" placeholder="Tell us about your care needs, questions, or any other details..." className="mt-2 min-h-[120px]" />
                </div>

                <div>
                  <Label htmlFor="referral">How Did You Hear About Us?</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="referral">Friend/Family Referral</SelectItem>
                      <SelectItem value="doctor">Doctor/Healthcare Provider</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : <>
                      Request Free Consultation <Send className="w-4 h-4" />
                    </>}
                </Button>
              </form>
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card sticky top-28">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="tel:+14031234567" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground group-hover:text-secondary transition-colors">(403) 771-8737</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for urgent inquiries</p>
                    </div>
                  </a>

                  <a href="mailto:info@aabestchoice.ca" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <Mail className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-secondary transition-colors">info@aabestchoice.ca</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Office Address</p>
                      <p className="text-muted-foreground">123 Care Street<br />Calgary, AB T2P 1A1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-highlight-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 4:00 PM<br />
                        Sun: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer to visit in person? We'd be delighted to meet you. Please call ahead to schedule an appointment.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="tel:+14031234567">
                      Call Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Service Areas
            </h2>
            <p className="text-muted-foreground">
              We proudly serve communities across Alberta
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => <span key={area} className="px-4 py-2 bg-card rounded-full text-foreground font-medium shadow-sm">
                {area}
              </span>)}
            <span className="px-4 py-2 bg-primary rounded-full text-primary-foreground font-medium">
              + Many More
            </span>
          </div>
        </div>
      </section>
    </Layout>;
}