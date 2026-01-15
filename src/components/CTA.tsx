import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Hero background image with transparency */}
      <div 
        className="absolute inset-0 opacity-[0.15] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center gradient-hero rounded-2xl p-10 md:p-14 relative overflow-hidden backdrop-blur-sm">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            
            {/* Additional subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to secure your medicine supply?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto text-base leading-relaxed">
                Join the waitlist for early access. Be among the first to protect your patients and products.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Button>
              </div>

              <p className="mt-6 text-xs text-white/60">
                No credit card required • Free for consumers • Priority access for partners
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
