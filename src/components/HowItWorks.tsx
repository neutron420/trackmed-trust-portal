import { QrCode, ShieldCheck, Truck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "Scan the QR Code",
    description: "Point your camera at the QR code on any medicine packaging. Instant recognition.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Verify Authenticity",
    description: "Get real-time verification with batch details, manufacturer info, and expiry date.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Track & Stay Safe",
    description: "Purchase with confidence, track your order, and receive alerts for recalls.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three steps to verified medicine
          </h2>
          <p className="text-muted-foreground">
            Simple, fast, and reliable. Protect yourself and your family with instant verification.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-10" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={step.step}>
              <div className="relative text-center group">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border" />
                )}
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6 relative group-hover:shadow-lg transition-shadow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
