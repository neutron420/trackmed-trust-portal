import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "TrackMed has transformed how we manage our pharmacy. Customers trust us more knowing every medicine is verified.",
    author: "Dr. Sarah Chen",
    role: "Owner, CityMed Pharmacy",
    rating: 5,
  },
  {
    quote: "The batch tracking and recall management features have saved us countless hours and potential compliance issues.",
    author: "Michael Rodriguez",
    role: "Operations Director, PharmaCo",
    rating: 5,
  },
  {
    quote: "As a patient, I finally feel confident about the medicines I'm taking. The verification is instant and reliable.",
    author: "Emily Watson",
    role: "TrackMed User",
    rating: 5,
  },
];

const partners = [
  "HealthFirst",
  "MedSupply Co",
  "PharmaCare",
  "SafeRx",
  "CareNet",
  "WellPath",
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Leaders
          </h2>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8">Trusted by leading healthcare organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {partners.map((partner) => (
                <span key={partner} className="text-xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
