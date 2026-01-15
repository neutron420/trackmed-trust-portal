import { QrCode, ShieldCheck, Truck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "Scan the QR Code",
    description: "Point your camera at the QR code on any medicine packaging. Our app recognizes it instantly.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Verify Authenticity",
    description: "Receive real-time verification with batch details, manufacturer info, and expiry date.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Buy, Track & Stay Safe",
    description: "Purchase with confidence, track your order, and get alerts for recalls or safety updates.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Steps to Verified Medicine
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, fast, and reliable. Protect yourself and your family with instant verification.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={step.step}>
              <div className="relative text-center">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-border" />
                )}
                
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6 relative">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
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
