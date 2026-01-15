import { Button } from "@/components/ui/button";
import { QrCode, Package, AlertTriangle, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const businessFeatures = [
  {
    icon: QrCode,
    title: "QR Code Generation",
    description: "Generate unique, tamper-proof QR codes for every batch. Full customization and branding options.",
  },
  {
    icon: Package,
    title: "Batch Management",
    description: "Track inventory, manage batches, and monitor distribution chains in real-time.",
  },
  {
    icon: AlertTriangle,
    title: "Instant Recalls",
    description: "Issue targeted recalls instantly. Notify affected consumers and pharmacies in seconds.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Deep insights into scan rates, geographic distribution, and consumer engagement.",
  },
];

const benefits = [
  "Reduce counterfeiting by 99%",
  "Real-time supply chain visibility",
  "Regulatory compliance built-in",
  "Consumer trust & engagement",
];

export const Business = () => {
  return (
    <section id="business" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  For Business
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Powerful Tools for Manufacturers & Pharmacies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join the network of trusted partners using TrackMed to protect their products, 
                  build consumer trust, and streamline operations.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Content - Feature Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {businessFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
