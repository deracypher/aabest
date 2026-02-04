import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What areas do you serve?",
        answer: "We provide services throughout Alberta, including Calgary, Edmonton, Red Deer, Lethbridge, and surrounding communities.",
      },
      {
        question: "Are you available 24/7?",
        answer: "Yes, we offer care services around the clock, including evenings, weekends, and holidays.",
      },
      {
        question: "Do you provide services in care facilities?",
        answer: "Our primary focus is in-home care, but we can discuss options for assisted living or group home settings.",
      },
      {
        question: "What makes AA Best Choice different?",
        answer: "Our combination of experienced caregivers, personalized care plans, cultural sensitivity, transparent pricing, and genuine compassion sets us apart.",
      },
    ],
  },
  {
    title: "Caregiver Questions",
    faqs: [
      {
        question: "How are your caregivers selected?",
        answer: "Every caregiver undergoes thorough background checks, reference verification, skills assessment, and interviews before joining our team.",
      },
      {
        question: "Are caregivers insured and bonded?",
        answer: "Yes, all our caregivers are fully insured, bonded, and covered under our comprehensive liability policy.",
      },
      {
        question: "What training do caregivers receive?",
        answer: "Caregivers complete initial orientation, specialized training (dementia care, first aid, etc.), and ongoing professional development.",
      },
      {
        question: "Can I request a specific caregiver?",
        answer: "Absolutely. We work to match you with a compatible caregiver and accommodate preferences whenever possible.",
      },
      {
        question: "What if I don't connect with my caregiver?",
        answer: "Your comfort is paramount. We'll immediately work to find a better match at no additional cost.",
      },
    ],
  },
  {
    title: "Service Questions",
    faqs: [
      {
        question: "What is the minimum number of hours?",
        answer: "We offer flexible scheduling starting from 2-hour minimum visits, with custom arrangements available.",
      },
      {
        question: "Can services be adjusted as needs change?",
        answer: "Yes, care plans are dynamic. We regularly review and adjust services to match evolving needs.",
      },
      {
        question: "Do you provide care for couples?",
        answer: "Yes, we can arrange care for couples with varying needs in the same household.",
      },
      {
        question: "Can you help with medical appointments?",
        answer: "Our caregivers can provide transportation and accompaniment to appointments, though they cannot provide medical treatment.",
      },
      {
        question: "What happens in an emergency?",
        answer: "Caregivers are trained in emergency response and will contact emergency services and family members as appropriate.",
      },
    ],
  },
  {
    title: "Cost & Funding",
    faqs: [
      {
        question: "How much does home care cost?",
        answer: "Costs vary based on care type, hours, and complexity. Contact us for a personalized quote based on your needs.",
      },
      {
        question: "Do you accept insurance?",
        answer: "We provide detailed receipts for private insurance claims and work directly with Alberta Blue Cross Client-Directed Care.",
      },
      {
        question: "Are there contracts or cancellation fees?",
        answer: "We offer flexible agreements without long-term commitments. Cancellation policies vary by service type.",
      },
      {
        question: "How do I apply for government funding?",
        answer: "We can guide you through the Alberta Blue Cross Client-Directed Care application and handle invoicing.",
      },
    ],
  },
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How quickly can services begin?",
        answer: "Depending on availability, we can often begin services within 24-48 hours of the initial consultation.",
      },
      {
        question: "What's the first step?",
        answer: "Contact us to schedule a free consultation where we'll discuss your needs and create a personalized care plan.",
      },
      {
        question: "Do I need a medical referral?",
        answer: "No medical referral is required, though we welcome collaboration with healthcare providers.",
      },
      {
        question: "Can I tour your office or meet caregivers?",
        answer: "Yes, we welcome visits to our office and can arrange meet-and-greets with potential caregivers.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.faqs.length > 0);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-gradient-teal">
        <div className="section-container relative z-10">
          <nav className="text-sm text-secondary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary-foreground">FAQ</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/90 max-w-2xl">
            Find answers to common questions about our services, caregivers, and getting started with AA Best Choice Home Care.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 sticky top-20 z-40 bg-card border-b border-border shadow-sm">
        <div className="section-container">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No questions found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.faqs.map((faq, index) => {
                      const itemId = `${category.title}-${index}`;
                      const isOpen = openItems.has(itemId);
                      
                      return (
                        <div 
                          key={itemId}
                          className="bg-card rounded-xl border border-border overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-sm sm:text-base font-semibold text-foreground pr-4">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-secondary shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 text-sm sm:text-base text-muted-foreground animate-fade-in">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              We're here to help. Contact us anytime—we're happy to discuss your unique situation and answer any concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:+14031234567">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:info@aabestchoice.ca">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
