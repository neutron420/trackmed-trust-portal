import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Secure Your Medicine Supply?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of consumers and hundreds of pharmacies already using TrackMed 
              to ensure medicine authenticity and safety.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Text */}
            <p className="mt-8 text-sm text-primary-foreground/60">
              No credit card required • Free for consumers • 14-day business trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
