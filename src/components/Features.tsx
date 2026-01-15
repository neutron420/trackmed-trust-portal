import { ShieldCheck, Bell, CreditCard, Smartphone } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Real-Time Verification",
    description: "Instant authenticity checks against our secure database. Know your medicine is genuine.",
  },
  {
    icon: Bell,
    title: "Recall & Safety Alerts",
    description: "Automatic notifications if any medicine in your history is recalled or has safety updates.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "PCI-compliant payment processing with end-to-end encryption for complete protection.",
  },
  {
    icon: Smartphone,
    title: "Order Tracking",
    description: "Real-time delivery updates with push notifications. Know exactly when your medicine arrives.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for safety and trust
          </h2>
          <p className="text-muted-foreground">
            Every feature designed to give you confidence in the medicines you take.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group h-full bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" />
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
    </section>
  );
};
