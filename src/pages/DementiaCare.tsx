import { Link } from "react-router-dom";
import { Brain, Heart, Shield, Users, Eye, Hand, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import serviceDementia from "@/assets/service-dementia.jpg";
const approaches = [{
  icon: Users,
  title: "Person-Centered Care",
  description: "We see the person, not the disease. Our approach focuses on preserving identity, honoring life history, and maximizing remaining abilities."
}, {
  icon: Shield,
  title: "Routine & Familiarity",
  description: "Consistent schedules and familiar faces reduce confusion and anxiety, creating a sense of security."
}, {
  icon: Heart,
  title: "Validation Therapy",
  description: "Rather than correcting or contradicting, we validate emotions and redirect gently, preserving dignity and reducing distress."
}, {
  icon: Eye,
  title: "Sensory Engagement",
  description: "Music, aromatherapy, tactile activities, and reminiscence therapy stimulate memory and provide comfort."
}, {
  icon: Hand,
  title: "Safety First",
  description: "We implement strategies to prevent wandering, ensure home safety, and respond to emergencies effectively."
}];
const services = ["Memory exercises and cognitive stimulation", "Routine establishment and maintenance", "Medication reminders and management", "Assistance with confusion and disorientation", "Behavioral support with patience", "Communication using simple, clear language", "Activities tailored to cognitive level", "Nutrition and hydration monitoring", "Incontinence care", "Sleep disturbance management", "Family education and counseling", "Coordination with healthcare providers"];
const familySupport = ["Educational resources about disease progression", "Coping strategies and emotional support", "Respite care to prevent caregiver burnout", "Guidance on difficult conversations", "Connection to support groups and resources"];
const whyChoose = [{
  title: "Specialized Training",
  description: "Our caregivers complete dementia care certification and ongoing education."
}, {
  title: "Experienced Team",
  description: "We have extensive experience supporting individuals through all stages of dementia."
}, {
  title: "Compassionate Approach",
  description: "Patience, empathy, and understanding guide every interaction."
}, {
  title: "Family Partnership",
  description: "We work closely with families, keeping communication open and collaborative."
}];
export default function DementiaCare() {
  return <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${serviceDementia})`
      }}>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="section-container relative z-10">
          <nav className="text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Specialized Memory Care with Heart
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Caring for someone with dementia or Alzheimer's requires patience, expertise, and deep compassion.
          </p>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Understanding Dementia & Alzheimer's
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dementia is an umbrella term for conditions affecting memory, thinking, and daily functioning. 
              Alzheimer's disease is the most common form. These progressive conditions present unique challenges 
              for individuals and families, but with the right support, <strong className="text-foreground">quality of life can be maintained.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach to Memory Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine specialized training with genuine compassion to provide exceptional memory care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map(approach => <div key={approach.title} className="bg-card rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <approach.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{approach.title}</h3>
                <p className="text-muted-foreground">{approach.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Services Provided
              </h2>
              <p className="text-muted-foreground mb-8">
                Our trained caregivers are specially equipped to handle the unique challenges of memory care with patience and expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(service => <div key={service} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>)}
              </div>
            </div>

            <div>
              <div className="bg-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Supporting Family Caregivers
                </h3>
                <p className="text-muted-foreground mb-6">
                  We understand that dementia affects the entire family. We offer:
                </p>
                <ul className="space-y-4">
                  {familySupport.map(item => <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AA Best Choice for Memory Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map(item => <div key={item.title} className="bg-card rounded-xl p-6 shadow-card flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Get Compassionate Memory Care Support
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Schedule a free consultation to discuss how we can support your loved one with specialized dementia care.
            </p>
            <Button asChild size="xl" variant="white">
              <Link to="/contact">
                Schedule Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}