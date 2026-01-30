import { Link } from "react-router-dom";
import { 
  Shield, Heart, Clock, DollarSign, Users, CheckCircle, 
  ArrowRight, MapPin, Star
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import servicePersonalCare from "@/assets/service-personal-care.jpg";
import serviceCompanionship from "@/assets/service-companionship.jpg";
import serviceHomemaking from "@/assets/service-homemaking.jpg";
import serviceDementia from "@/assets/service-dementia.jpg";
import serviceRespite from "@/assets/service-respite.jpg";
import serviceLivein from "@/assets/service-livein.jpg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Families Served" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Certified Caregivers" },
];

const features = [
  {
    icon: Shield,
    title: "Experienced & Certified Caregivers",
    description: "Our team consists of trained, certified, and compassionate professionals who treat every client with the respect and care they deserve.",
  },
  {
    icon: Heart,
    title: "Personalized Care Plans",
    description: "We recognize that every individual has unique needs. Our care plans are customized to match your specific requirements and lifestyle.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Care doesn't follow a schedule, and neither do we. Our team is available around the clock to provide support whenever you need it.",
  },
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Quality care shouldn't break the bank. We offer competitive pricing and work with Alberta Blue Cross and other funding programs.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description: "As a locally owned business, we understand Alberta families and the unique needs of our communities.",
  },
  {
    icon: CheckCircle,
    title: "Peace of Mind",
    description: "From the first consultation to ongoing care, we maintain open communication, ensuring families feel informed and confident.",
  },
];

const services = [
  {
    title: "Personal Care",
    description: "Assistance with daily activities including bathing, grooming, dressing, and mobility support.",
    image: servicePersonalCare,
    href: "/services#personal-care",
  },
  {
    title: "Companionship Care",
    description: "Meaningful engagement, conversation, and social activities to combat loneliness and enhance quality of life.",
    image: serviceCompanionship,
    href: "/services#companionship",
  },
  {
    title: "Homemaking Services",
    description: "Light housekeeping, meal preparation, laundry, and maintaining a safe, clean environment.",
    image: serviceHomemaking,
    href: "/services#homemaking",
  },
  {
    title: "Specialized Care",
    description: "Support for individuals with dementia, Alzheimer's, chronic conditions, and post-surgery recovery.",
    image: serviceDementia,
    href: "/services#specialized",
  },
  {
    title: "Respite Care",
    description: "Temporary relief for family caregivers, ensuring your loved one continues to receive quality care.",
    image: serviceRespite,
    href: "/services#respite",
  },
  {
    title: "24-Hour Live-In Care",
    description: "Comprehensive around-the-clock support for those requiring continuous assistance.",
    image: serviceLivein,
    href: "/services#livein",
  },
];

const serviceAreas = [
  "Calgary", "Edmonton", "Red Deer", "Lethbridge", 
  "Airdrie", "Okotoks", "Cochrane", "Sherwood Park",
  "St. Albert", "Leduc", "Medicine Hat", "Grande Prairie"
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Calgary",
    text: "AA Best Choice has been a blessing for our family. My mother receives such compassionate care from her caregiver. She looks forward to their time together, and I have complete peace of mind.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Edmonton",
    text: "After my father's stroke, we needed help quickly. AA Best Choice was there within 48 hours with an experienced caregiver who understood Dad's needs perfectly. Highly recommend!",
    rating: 5,
  },
  {
    name: "The Kumar Family",
    location: "Red Deer",
    text: "We appreciate the cultural sensitivity and understanding they bring to my grandmother's care. They respect her traditions, dietary preferences, and religious practices.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="section-container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Caring for Your Loved Ones Like Family
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional home care services delivered with warmth, dignity, and expertise across Alberta
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="white">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-container">
        <div className="stats-bar">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              At AA Best Choice Home Care, we understand that choosing care for yourself or a loved one 
              is one of life's most important decisions. That's why we've built our service on three pillars: 
              <span className="font-semibold text-primary"> compassion, quality, and reliability</span>. 
              Our experienced caregivers provide personalized support that allows individuals to age gracefully 
              in the comfort of their own homes while maintaining independence and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AA Best Choice?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to provide exceptional care that honors the dignity of every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card rounded-xl p-6 shadow-card card-hover"
              >
                <div className="icon-circle mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From personal care to specialized support, we offer a full spectrum of services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.title}
                to={service.href}
                className="group bg-card rounded-xl overflow-hidden shadow-card card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-secondary-hover transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding section-highlight">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-highlight/30 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-highlight-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving All of Alberta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve communities across Alberta with compassionate, reliable care
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span 
                key={area}
                className="px-4 py-2 bg-card rounded-full text-foreground font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary rounded-full text-primary-foreground font-medium">
              + Many More
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Families Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from families we've had the privilege to serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-xl p-8 shadow-card relative"
              >
                <div className="text-6xl text-accent/50 absolute top-4 left-6 leading-none">
                  "
                </div>
                <div className="relative pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-highlight fill-highlight" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Experience the AA Best Choice Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today for a free, no-obligation consultation. Let's discuss how we can support you and your family.
            </p>
            <Button asChild size="xl" variant="white">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
