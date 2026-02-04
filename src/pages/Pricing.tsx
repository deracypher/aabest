import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, HelpCircle, CreditCard, Building2, Shield } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Companion Care",
    price: "28",
    description: "Social engagement and light support",
    features: [
      "Friendly companionship",
      "Light housekeeping",
      "Meal preparation",
      "Transportation",
      "Medication reminders",
      "Activity engagement",
    ],
    popular: false,
  },
  {
    title: "Personal Care",
    price: "32",
    description: "Hands-on assistance with daily living",
    features: [
      "All Companion Care services",
      "Bathing & grooming assistance",
      "Dressing assistance",
      "Mobility support",
      "Toileting assistance",
      "Feeding assistance",
    ],
    popular: true,
  },
  {
    title: "Specialized Care",
    price: "38",
    description: "Expert care for complex needs",
    features: [
      "All Personal Care services",
      "Dementia/Alzheimer's care",
      "Chronic condition support",
      "Post-surgery recovery",
      "Palliative care",
      "Complex medication management",
    ],
    popular: false,
  },
];

const liveInPricing = {
  title: "24-Hour Live-In Care",
  daily: "350",
  description: "Comprehensive around-the-clock support",
  features: [
    "Overnight monitoring",
    "All personal care services",
    "Meal preparation (all meals)",
    "Medication management",
    "Emergency response",
    "Companionship throughout the day",
    "Light housekeeping",
    "Consistent, dedicated caregiver",
  ],
};

const fundingOptions = [
  {
    icon: Building2,
    title: "Alberta Blue Cross Client-Directed Care",
    description: "We are an approved provider for the Client-Directed Care program. We assist with enrollment and handle invoicing directly.",
  },
  {
    icon: Shield,
    title: "Veterans Affairs Canada (VAC)",
    description: "We work with VAC benefits to support eligible veterans and their families with home care services.",
  },
  {
    icon: CreditCard,
    title: "Private Insurance",
    description: "Many extended health insurance plans cover home care services. We provide detailed receipts for claims.",
  },
  {
    icon: HelpCircle,
    title: "Private Pay & Payment Plans",
    description: "We accept cash, cheque, credit card, and e-transfer. Flexible payment arrangements available for families.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-gradient-teal">
        <div className="section-container relative z-10">
          <nav className="text-sm text-secondary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary-foreground">Pricing & Funding</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
            Transparent, Affordable Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/90 max-w-2xl">
            At AA Best Choice Home Care, we believe quality care should be accessible. We offer competitive pricing, flexible payment options, and assistance navigating funding programs.
          </p>
        </div>
      </section>

      {/* Hourly Pricing Cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hourly Care Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level of care that's right for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.title}
                className={`rounded-2xl p-8 relative ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground shadow-button scale-105' 
                    : 'bg-card border border-border shadow-card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-highlight text-highlight-foreground rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.popular ? '' : 'text-foreground'}`}>
                  {plan.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-4 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
                  <span className={`text-sm sm:text-base ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>/hour</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${plan.popular ? '' : 'text-secondary'}`} />
                      <span className={`text-sm sm:text-base ${plan.popular ? '' : 'text-muted-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className="w-full"
                  variant={plan.popular ? 'white' : 'default'}
                >
                  <Link to="/contact">Get Custom Quote</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            *Pricing varies based on care complexity, scheduling needs, and location. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Live-In Care */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{liveInPricing.title}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">{liveInPricing.description}</p>
                  <div className="mb-6">
                    <span className="text-sm sm:text-lg text-muted-foreground">Starting at</span>
                    <div>
                      <span className="text-4xl sm:text-5xl font-bold text-primary">${liveInPricing.daily}</span>
                      <span className="text-sm sm:text-base text-muted-foreground">/day</span>
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {liveInPricing.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funding & Payment Options
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with various funding programs to help make care more affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {fundingOptions.map((option) => (
              <div key={option.title} className="bg-card rounded-xl p-6 shadow-card flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <option.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="section-padding bg-accent/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Free Consultation & Assessment
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Every care journey begins with a complimentary, no-obligation consultation. We'll discuss your care needs, 
              explain service options, review funding opportunities, and answer all your questions.
            </p>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">No Hidden Fees</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Our pricing is straightforward and transparent. What you see is what you get—no surprise charges or hidden costs.
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0">
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
