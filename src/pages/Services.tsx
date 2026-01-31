import { Link } from "react-router-dom";
import { Sparkles, Heart, Home, Brain, Clock, Car, CheckCircle, ArrowRight, Activity, Pill, Stethoscope, HeartPulse } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import servicePersonalCare from "@/assets/service-personal-care.jpg";
import serviceCompanionship from "@/assets/service-companionship.jpg";
import serviceHomemaking from "@/assets/service-homemaking.jpg";
import serviceDementia from "@/assets/service-dementia.jpg";
import serviceRespite from "@/assets/service-respite.jpg";
import serviceLivein from "@/assets/service-livein.jpg";
const services = [{
  id: "personal-care",
  icon: Sparkles,
  title: "Personal Care Services",
  description: "Daily living can become challenging as we age or recover from illness. Our personal care services help individuals maintain their hygiene, comfort, and dignity.",
  image: servicePersonalCare,
  includes: ["Bathing and showering assistance", "Grooming (hair care, shaving, nail care)", "Dressing and undressing", "Toileting and incontinence care", "Oral hygiene and denture care", "Mobility assistance and transfer support", "Medication reminders and management", "Assistance with eating and feeding"],
  benefits: "Seniors with limited mobility, individuals recovering from surgery, people with chronic conditions, or anyone needing support with activities of daily living."
}, {
  id: "companionship",
  icon: Heart,
  title: "Companionship Care",
  description: "Loneliness and social isolation can significantly impact mental and physical health. Our companionship services provide meaningful interaction and engagement.",
  image: serviceCompanionship,
  includes: ["Friendly conversation and active listening", "Playing games, puzzles, and brain-stimulating activities", "Reading together or audiobooks", "Arts and crafts activities", "Music therapy and reminiscence", "Walking and light exercise", "Accompanying to social events and appointments", "Technology assistance (video calls with family)"],
  benefits: "Isolated seniors, individuals with limited social connections, people experiencing depression or anxiety, or anyone seeking meaningful human connection."
}, {
  id: "homemaking",
  icon: Home,
  title: "Homemaking & Housekeeping",
  description: "A clean, organized home contributes to safety, comfort, and wellbeing. Our homemaking services ensure your living environment remains pleasant and functional.",
  image: serviceHomemaking,
  includes: ["Light housekeeping and tidying", "Vacuuming, dusting, and sweeping", "Kitchen cleaning and dish washing", "Laundry and linen changes", "Bed making and room organization", "Meal planning and preparation", "Grocery shopping and errands", "Trash removal and recycling"],
  benefits: "Anyone struggling to maintain their home, individuals with limited mobility, busy families, or those recovering from illness."
}, {
  id: "specialized",
  icon: Brain,
  title: "Specialized Care Services",
  description: "Complex health conditions require specialized knowledge and skills. Our trained caregivers provide expert support for various medical and cognitive conditions.",
  image: serviceDementia,
  includes: ["Dementia & Alzheimer's care with memory support", "Diabetes care and monitoring", "Heart disease support", "COPD and respiratory assistance", "Arthritis pain management", "Parkinson's disease care", "Post-surgical wound care and monitoring", "Palliative and end-of-life comfort care"],
  benefits: "Individuals with diagnosed medical conditions, those recovering from medical procedures, or anyone requiring specialized health support.",
  specializations: [{
    icon: Brain,
    title: "Dementia & Alzheimer's Care",
    desc: "Memory support and cognitive engagement"
  }, {
    icon: Activity,
    title: "Chronic Condition Management",
    desc: "Diabetes, heart disease, COPD support"
  }, {
    icon: Stethoscope,
    title: "Post-Surgical & Recovery Care",
    desc: "Wound care and mobility restoration"
  }, {
    icon: HeartPulse,
    title: "Palliative & End-of-Life Care",
    desc: "Comfort-focused compassionate support"
  }]
}, {
  id: "respite",
  icon: Clock,
  title: "Respite Care",
  description: "Family caregivers need breaks to rest, recharge, and attend to their own needs. Our respite care provides temporary relief while ensuring your loved one receives quality care.",
  image: serviceRespite,
  includes: ["Short-term care coverage (hours to weeks)", "Flexible scheduling to match your needs", "Familiar caregivers for consistency", "All personal care and companionship services", "Regular updates and communication", "Emergency respite availability"],
  benefits: "Family caregivers experiencing burnout, those needing to travel, caregivers with work commitments, or anyone requiring temporary relief."
}, {
  id: "livein",
  icon: Pill,
  title: "24-Hour Live-In Care",
  description: "For individuals requiring continuous support, our live-in care provides round-the-clock assistance and peace of mind.",
  image: serviceLivein,
  includes: ["Overnight presence and monitoring", "Wake-up and bedtime assistance", "All personal care services", "Meal preparation throughout the day", "Medication management", "Emergency response and support", "Companionship and engagement", "Light housekeeping"],
  benefits: "Individuals with advanced care needs, those at risk during nighttime hours, people requiring constant supervision, or families seeking comprehensive support."
}, {
  id: "transportation",
  icon: Car,
  title: "Transportation & Escort Services",
  description: "Getting to appointments, social activities, and errands is essential for maintaining independence and health.",
  image: serviceCompanionship,
  includes: ["Medical appointment transportation", "Grocery shopping trips", "Social and recreational outings", "Religious service attendance", "Family visit coordination", "Airport transfers", "Accompaniment and assistance"],
  benefits: "Non-drivers, individuals with mobility challenges, those who feel unsafe traveling alone, or anyone needing reliable transportation."
}];
const careProcess = [{
  step: 1,
  title: "Free Consultation",
  description: "We meet with you and your family to discuss needs, preferences, and goals"
}, {
  step: 2,
  title: "Comprehensive Assessment",
  description: "We evaluate care requirements, home environment, and support systems"
}, {
  step: 3,
  title: "Custom Care Plan",
  description: "We develop a detailed plan tailored to your specific situation"
}, {
  step: 4,
  title: "Caregiver Matching",
  description: "We select the best-fit caregiver based on skills, personality, and compatibility"
}, {
  step: 5,
  title: "Ongoing Adjustment",
  description: "We regularly review and modify the plan as needs change"
}];
export default function Services() {
  return <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-gradient-teal">
        <div className="section-container relative z-10">
          <nav className="text-sm text-secondary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary-foreground">Home</Link>
            <span className="mx-2">/</span>
            
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
            Our Comprehensive Care Services
          </h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl">
            From personal care to specialized support, we offer a full spectrum of services designed to meet the diverse needs of Alberta seniors and individuals requiring support.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-20 z-40 bg-card border-b border-border shadow-sm">
        <div className="section-container py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map(service => <a key={service.id} href={`#${service.id}`} className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
                {service.title.split(" ")[0]}
              </a>)}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 1 ? 'bg-muted' : ''}`}>
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Services Include:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.includes.map(item => <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>

                <div className="bg-accent/10 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Who Benefits:</h4>
                  <p className="text-muted-foreground">{service.benefits}</p>
                </div>

                {service.specializations && <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.specializations.map(spec => <div key={spec.title} className="bg-card rounded-lg p-4 border border-border">
                        <spec.icon className="w-6 h-6 text-secondary mb-2" />
                        <h5 className="font-semibold text-foreground text-sm">{spec.title}</h5>
                        <p className="text-xs text-muted-foreground">{spec.desc}</p>
                      </div>)}
                  </div>}

                <Button asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className={`absolute -inset-4 rounded-3xl ${index % 2 === 0 ? 'bg-primary/10 -rotate-3' : 'bg-secondary/10 rotate-3'}`} />
                  <img src={service.image} alt={service.title} className="relative rounded-2xl shadow-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>)}

      {/* Care Plan Process */}
      <section className="section-padding section-highlight">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Creating Your Personalized Care Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every care journey begins with understanding your unique needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/30 hidden md:block" />
              
              <div className="space-y-8">
                {careProcess.map((step, index) => <div key={step.step} className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-card flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Care Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today for a free, no-obligation consultation. Together, we'll create a care plan that's perfect for you.
            </p>
            <Button asChild size="xl" variant="white">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}