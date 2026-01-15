import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const securityFeatures = [
  {
    icon: Shield,
    title: "Tamper-Proof QR Codes",
    description: "Cryptographically secured QR codes that cannot be duplicated or forged. Each scan is verified against our blockchain-backed database.",
  },
  {
    icon: Lock,
    title: "PCI-DSS Compliant",
    description: "Your payment information is protected with bank-level security. We never store sensitive card data on our servers.",
  },
  {
    icon: FileCheck,
    title: "Complete Audit Trail",
    description: "Every scan, purchase, and verification is logged immutably. Perfect for regulatory compliance and dispute resolution.",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "Your health data belongs to you. We use anonymized analytics and never sell personal information to third parties.",
  },
];

export const Security = () => {
  return (
    <section id="security" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Security & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-muted-foreground">
            Built from the ground up with security and compliance in mind. 
            Your data and transactions are protected at every step.
          </p>
        </ScrollReveal>

        {/* Security Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto" staggerDelay={0.12}>
          {securityFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group flex gap-5 bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading healthcare organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {["PharmaCorp", "MedSupply", "HealthNet", "CareFirst", "WellRx"].map((name) => (
              <div key={name} className="text-xl font-bold text-muted-foreground/50">
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
