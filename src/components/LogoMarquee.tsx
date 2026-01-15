import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const companies = [
  "Pfizer",
  "Johnson & Johnson",
  "Novartis",
  "Roche",
  "Merck",
  "AbbVie",
  "Bristol-Myers",
  "AstraZeneca",
  "Sanofi",
  "GlaxoSmithKline",
  "Eli Lilly",
  "Amgen",
];

export const LogoMarquee = () => {
  return (
    <section className="py-14 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by leading pharmaceutical companies worldwide
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Content */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 px-6"
              >
                <span className="text-xl font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
