import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center gradient-hero rounded-2xl p-10 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to secure your medicine supply?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join thousands of consumers and hundreds of pharmacies already using TrackMed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                Schedule Demo
              </Button>
            </div>

            <p className="mt-6 text-xs text-white/50">
              No credit card required • Free for consumers • 14-day business trial
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
