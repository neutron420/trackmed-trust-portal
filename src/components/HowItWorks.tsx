import { QrCode, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "Scan QR Code",
    description: "Point your phone camera at the QR code on any medicine package to instantly access its verification data.",
  },
  {
    icon: ShieldCheck,
    step: "02", 
    title: "Verify Authenticity",
    description: "Get real-time confirmation that your medicine is genuine, with full batch history and manufacturer details.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Buy & Track",
    description: "Purchase with confidence and track your order in real-time with push notifications at every step.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How TrackMed Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to verify and purchase authentic medicines with complete peace of mind.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
