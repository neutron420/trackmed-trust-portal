import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const securityFeatures = [
  {
    icon: Shield,
    title: "Tamper-Proof QR Codes",
    description: "Cryptographically secured codes that cannot be duplicated or forged.",
  },
  {
    icon: Lock,
    title: "PCI-DSS Compliant",
    description: "Bank-level payment security. We never store sensitive card data.",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Trail",
    description: "Every verification and transaction is logged for regulatory compliance.",
  },
  {
    icon: Eye,
    title: "Privacy Protected",
    description: "Your health data stays private. We never sell personal information.",
  },
];

export const Security = () => {
  return (
    <section id="security" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Security</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise-grade protection
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built from the ground up with security and regulatory compliance at its core.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
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
          <ScrollReveal delay={0.3} className="mt-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 px-5 py-3 bg-muted/50 rounded-lg">
              <span className="text-xs font-semibold text-muted-foreground">SOC 2 Type II</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-xs font-semibold text-muted-foreground">HIPAA Ready</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-xs font-semibold text-muted-foreground">PCI-DSS Level 1</span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-xs font-semibold text-muted-foreground">GDPR</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
