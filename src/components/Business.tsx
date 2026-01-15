import { Button } from "@/components/ui/button";
import { QrCode, Package, AlertTriangle, BarChart3, ArrowRight, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const businessFeatures = [
  {
    icon: Package,
    title: "Batch Management",
    description: "Register and track medicine batches through the entire supply chain with full visibility.",
  },
  {
    icon: QrCode,
    title: "QR Code Generation",
    description: "Generate unique, tamper-proof QR codes for each batch with custom branding options.",
  },
  {
    icon: AlertTriangle,
    title: "Recall Management",
    description: "Issue targeted recalls instantly. Notify affected pharmacies and consumers in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed insights into scan rates, geographic distribution, and compliance metrics.",
  },
];

const benefits = [
  "Reduce counterfeit exposure",
  "Real-time supply chain visibility",
  "Regulatory compliance built-in",
  "Consumer trust & engagement",
];

export const Business = () => {
  return (
    <section id="business" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">For Business</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tools for Manufacturers & Pharmacies
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the network of trusted partners using TrackMed to protect products, 
                ensure compliance, and build consumer trust.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
                <div className="group h-full bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
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
