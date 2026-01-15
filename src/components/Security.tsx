import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const securityFeatures = [
  {
    icon: Shield,
    title: "Tamper-Proof QR Codes",
    description: "Cryptographically secured codes that cannot be duplicated. Each scan is verified against our protected database.",
  },
  {
    icon: Lock,
    title: "PCI-DSS Compliant",
    description: "Bank-level payment security. We never store sensitive card data on our servers.",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Trail",
    description: "Every verification and transaction is logged for regulatory compliance and dispute resolution.",
  },
  {
    icon: Eye,
    title: "Privacy Protected",
    description: "Your health data stays private. We use anonymized analytics and never sell personal information.",
  },
];

export const Security = () => {
  return (
    <section id="security" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Security & Compliance</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Protection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built from the ground up with security and regulatory compliance at its core.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4 bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Compliance badges */}
          <ScrollReveal delay={0.3} className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-6 px-6 py-4 bg-muted/50 rounded-lg">
              <span className="text-xs font-semibold text-muted-foreground">SOC 2 Type II</span>
              <span className="text-xs font-semibold text-muted-foreground">HIPAA Ready</span>
              <span className="text-xs font-semibold text-muted-foreground">PCI-DSS Level 1</span>
              <span className="text-xs font-semibold text-muted-foreground">GDPR Compliant</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
