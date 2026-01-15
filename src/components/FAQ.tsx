import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does medicine verification work?",
    answer: "Simply scan the QR code on any medicine package using the TrackMed app. Our system instantly checks the code against our secure database and returns verification results including manufacturer details, batch information, and expiry date—all in under 2 seconds.",
  },
  {
    question: "Is TrackMed free for consumers?",
    answer: "Yes, TrackMed is completely free for consumers. You can verify unlimited medicines, track orders, and receive safety alerts at no cost. Our business model is based on partnerships with manufacturers and pharmacies.",
  },
  {
    question: "How do you ensure data security?",
    answer: "We use bank-level encryption (AES-256) for all data, maintain SOC 2 Type II certification, and are HIPAA compliant. Your health data is never sold to third parties, and all verification records are stored with end-to-end encryption.",
  },
  {
    question: "What happens if a medicine fails verification?",
    answer: "If verification fails, you'll receive an immediate alert with recommended next steps. We'll guide you to report the product to authorities and find a verified alternative nearby. Your safety is our priority.",
  },
  {
    question: "How can my pharmacy or company partner with TrackMed?",
    answer: "We offer flexible partnership tiers for pharmacies and manufacturers. Contact our business team for a demo and custom pricing. Integration typically takes 2-4 weeks with dedicated support throughout.",
  },
  {
    question: "Which countries does TrackMed operate in?",
    answer: "TrackMed currently operates in the United States, Canada, UK, and EU countries. We're actively expanding to Asia-Pacific and Latin America. Contact us to discuss availability in your region.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about TrackMed and medicine verification.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
