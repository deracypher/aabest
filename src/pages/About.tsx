import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Shield, Handshake, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
const values = [{
  icon: Heart,
  title: "Compassion First",
  description: "Every interaction is guided by empathy, kindness, and genuine care for the wellbeing of our clients and their families.",
  color: "text-primary",
  bgColor: "bg-primary/10"
}, {
  icon: Award,
  title: "Dignity & Respect",
  description: "We honor each person's unique story, preferences, and autonomy, ensuring they maintain control over their lives.",
  color: "text-secondary",
  bgColor: "bg-secondary/10"
}, {
  icon: Sparkles,
  title: "Excellence in Service",
  description: "We hold ourselves to the highest standards, continuously improving our skills and services to deliver outstanding care.",
  color: "text-accent-foreground",
  bgColor: "bg-accent/20"
}, {
  icon: Shield,
  title: "Integrity & Transparency",
  description: "Honest communication, ethical practices, and accountability form the foundation of every relationship we build.",
  color: "text-highlight-foreground",
  bgColor: "bg-highlight/20"
}, {
  icon: Users,
  title: "Family-Centered Approach",
  description: "We view ourselves as an extension of your family, working collaboratively to achieve the best outcomes.",
  color: "text-secondary",
  bgColor: "bg-secondary/10"
}, {
  icon: Handshake,
  title: "Cultural Sensitivity",
  description: "We celebrate diversity and provide culturally informed care that respects individual backgrounds, beliefs, and traditions.",
  color: "text-primary",
  bgColor: "bg-primary/10"
}];
const differentiators = [{
  title: "Local Expertise, Personal Touch",
  description: "As an Alberta-based company, we understand the unique needs of our communities and bring that local knowledge to every care plan."
}, {
  title: "Rigorous Caregiver Selection",
  description: "Our hiring process is thorough and selective. Every caregiver undergoes background checks, reference verification, and competency assessments."
}, {
  title: "Ongoing Training & Development",
  description: "Healthcare is always evolving. Our team receives continuous education in best practices, safety protocols, and specialized care techniques."
}, {
  title: "Client-Matched Caregivers",
  description: "We carefully match caregivers with clients based on personality, interests, care needs, and compatibility."
}, {
  title: "Quality Assurance",
  description: "Regular check-ins, client feedback, and performance reviews ensure that our care consistently meets the highest standards."
}];
export default function About() {
  return <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroAbout})`
      }}>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="section-container relative z-10">
          <nav className="text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            About AA Best Choice
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3" />
              <img src={heroAbout} alt="Our caring team" className="relative rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver exceptional, personalized home care services that honor the dignity of every client while providing peace of mind to their families.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Alberta's most trusted home care provider, recognized for our unwavering commitment to quality, compassion, and innovation in senior care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                We are committed to creating an environment where independence thrives, relationships flourish, and every day is lived with purpose and joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is rooted in our core values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(value => <div key={value.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-card transition-shadow">
                <div className={`w-12 h-12 rounded-full ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that truly personalized care can make
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {differentiators.map((item, index) => <div key={item.title} className="bg-card rounded-xl p-6 shadow-card flex gap-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-secondary-foreground font-bold">{index + 1}</span>
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
              Join Our Caring Community
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Whether you're looking for care for a loved one or want to join our team of compassionate caregivers, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" variant="white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}