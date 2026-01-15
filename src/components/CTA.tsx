import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center gradient-hero rounded-2xl p-10 md:p-14 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to secure your medicine supply?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Join the waitlist for early access. Be among the first to protect your patients and products.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Schedule Demo
                </Button>
              </div>

              <p className="mt-6 text-xs text-white/50">
                No credit card required • Free for consumers • Priority access for partners
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
