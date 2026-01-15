import { Button } from "@/components/ui/button";
import { QrCode, Package, AlertTriangle, BarChart3, ArrowRight, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const businessFeatures = [
  {
    icon: Package,
    title: "Batch Management",
    description: "Register and track medicine batches through the entire supply chain.",
  },
  {
    icon: QrCode,
    title: "QR Code Generation",
    description: "Generate unique, tamper-proof QR codes for each batch with branding.",
  },
  {
    icon: AlertTriangle,
    title: "Recall Management",
    description: "Issue targeted recalls instantly. Notify affected parties in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Insights into scan rates, geographic distribution, and compliance.",
  },
];

const benefits = [
  "Reduce counterfeit exposure",
  "Real-time supply chain visibility",
  "Regulatory compliance built-in",
  "Increase consumer trust",
];

export const Business = () => {
  return (
    <section id="business" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">For Business</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tools for manufacturers & pharmacies
              </h2>
              <p className="text-muted-foreground mb-8">
                Join the network of trusted partners using TrackMed to protect products, 
                ensure compliance, and build consumer trust.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="accent" size="lg">
                Partner with TrackMed
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
            {businessFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group h-full bg-muted/30 rounded-xl p-5 border border-border hover:border-accent/30 hover:bg-card hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
