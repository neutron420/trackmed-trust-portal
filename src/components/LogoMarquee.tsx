import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import pfizerLogo from "@/assets/pfizer.png";
import jnjLogo from "@/assets/jhonson.png";
import novartisLogo from "@/assets/novartis.png";
import rocheLogo from "@/assets/roche.png";
import abbvieLogo from "@/assets/abive.png";
import astrazenecaLogo from "@/assets/astra zeneca.png";
import sanofiLogo from "@/assets/sanofi.png";
import lillyLogo from "@/assets/lily.png";
import amgenLogo from "@/assets/amgem.png";

const companies = [
  { name: "Pfizer", logo: pfizerLogo },
  { name: "Johnson & Johnson", logo: jnjLogo },
  { name: "Novartis", logo: novartisLogo },
  { name: "Roche", logo: rocheLogo },
  { name: "AbbVie", logo: abbvieLogo },
  { name: "AstraZeneca", logo: astrazenecaLogo },
  { name: "Sanofi", logo: sanofiLogo },
  { name: "Eli Lilly", logo: lillyLogo },
  { name: "Amgen", logo: amgenLogo },
];

export const LogoMarquee = () => {
  return (
    <section className="relative py-16 sm:py-20 border-y border-border overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 sm:mb-10">
          <p className="text-center text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Trusted by leading pharmaceutical companies worldwide
          </p>
          <p className="text-center text-sm sm:text-base text-muted-foreground/70">
            Powering verification for the world's most trusted brands
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-20 pointer-events-none" />
          
          {/* Scrolling Content */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 sm:gap-12 lg:gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Duplicate for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 px-4 sm:px-6"
                >
                  <div className="group flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-white/20 hover:border-accent/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 min-w-[140px] sm:min-w-[160px]">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors text-center leading-tight">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
