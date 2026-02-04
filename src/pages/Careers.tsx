import { Link } from "react-router-dom";
import { 
  Heart, Clock, DollarSign, Award, Users, BookOpen,
  Briefcase, CheckCircle, ArrowRight, Mail
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Every day, you'll touch lives, bring comfort, and make a genuine impact on individuals and families.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work with your availability, offering part-time, full-time, casual, and live-in positions.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "We value our team and offer competitive wages that reflect your skills and experience.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "From orientation to ongoing professional development, we invest in your growth and success.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    description: "You're never alone. Our office team provides backup, guidance, and appreciation for the hard work you do.",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "We promote from within and support team members pursuing additional education and certifications.",
  },
];

const positions = [
  {
    title: "Personal Care Aides / Health Care Aides",
    type: "Part-time / Full-time",
    description: "Provide hands-on personal care, companionship, and support to clients in their homes.",
    requirements: [
      "HCA certification or equivalent experience",
      "Valid First Aid & CPR certification",
      "Clean criminal record check",
      "Reliable transportation",
      "Compassionate, patient, and professional demeanor",
    ],
  },
  {
    title: "Live-In Caregivers",
    type: "Full-time",
    description: "Provide 24-hour care and support for clients requiring continuous assistance.",
    requirements: [
      "HCA certification or equivalent experience",
      "Flexibility for overnight stays",
      "Ability to work extended shifts",
      "Previous live-in care experience preferred",
    ],
  },
  {
    title: "Companion Caregivers",
    type: "Part-time / Casual",
    description: "Focus on social engagement, companionship, and light household support.",
    requirements: [
      "Previous caregiving or related experience preferred",
      "Strong interpersonal and communication skills",
      "Patience and empathy",
      "Clean criminal record check",
    ],
  },
];

const qualities = [
  "Genuine compassion and empathy",
  "Reliability and punctuality",
  "Excellent communication skills",
  "Respect for diversity and cultural sensitivity",
  "Physical ability to assist with mobility and personal care",
  "Professional boundaries and ethics",
];

const hiringSteps = [
  { step: 1, title: "Apply Online", desc: "Submit your resume and cover letter" },
  { step: 2, title: "Initial Screening", desc: "Phone interview to discuss your background" },
  { step: 3, title: "In-Person Interview", desc: "Meet with our team to discuss the role" },
  { step: 4, title: "Background Check", desc: "Criminal record check and reference verification" },
  { step: 5, title: "Training & Orientation", desc: "Comprehensive onboarding and skill development" },
  { step: 6, title: "Client Matching", desc: "Placement with clients that match your skills" },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="section-container relative z-10">
          <nav className="text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Careers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Join Our Compassionate Care Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            At AA Best Choice Home Care, we're building a community of caring professionals who make a real difference every day.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              If you're passionate about helping others and want a rewarding career with purpose, we'd love to meet you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position) => (
              <div key={position.title} className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-secondary" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{position.title}</h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <Button asChild>
                    <a href="mailto:careers@aabestchoice.ca?subject=Application: ${position.title}">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                What We're Looking For
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                The best caregivers share certain essential qualities that help them connect with clients and provide exceptional care.
              </p>
              <ul className="space-y-3">
                {qualities.map((quality) => (
                  <li key={quality} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Our Hiring Process</h3>
              <div className="space-y-4">
                {hiringSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-gradient-cta py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
              Ready to Start a Rewarding Career?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8">
              Send your resume and cover letter to join the AA Best Choice Home Care family.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="xl" variant="white">
                <a href="mailto:careers@aabestchoice.ca">
                  <Mail className="w-5 h-5" /> Email Your Resume
                </a>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">Contact HR Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
