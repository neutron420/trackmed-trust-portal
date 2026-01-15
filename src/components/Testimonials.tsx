import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "TrackMed has transformed how we manage our pharmacy. Customers trust us more knowing every medicine is verified.",
    author: "Dr. Sarah Chen",
    role: "Owner, CityMed Pharmacy",
  },
  {
    quote: "The batch tracking and recall management features have saved us countless hours and potential compliance issues.",
    author: "Michael Rodriguez",
    role: "Operations Director, PharmaCo",
  },
  {
    quote: "As a patient, I finally feel confident about the medicines I'm taking. The verification is instant and reliable.",
    author: "Emily Watson",
    role: "TrackMed User",
  },
];

const partners = [
  "HealthFirst",
  "MedSupply",
  "PharmaCare",
  "SafeRx",
  "CareNet",
  "WellPath",
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trusted by healthcare leaders
          </h2>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-foreground text-sm leading-relaxed mb-5">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted-foreground">
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
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {partners.map((partner) => (
                <span key={partner} className="text-lg font-display font-semibold text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors">
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
