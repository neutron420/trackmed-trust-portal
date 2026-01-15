import { ShieldCheck, Bell, CreditCard, Zap, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Real-Time Verification",
    description: "Instantly verify medicine authenticity with our secure QR technology. No guesswork, just certainty.",
  },
  {
    icon: Bell,
    title: "Recall Alerts",
    description: "Get immediate notifications if any medicine in your history is recalled. Stay informed, stay safe.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "PCI-compliant payment processing ensures your financial data is always protected.",
  },
  {
    icon: Zap,
    title: "Push Notifications",
    description: "Real-time updates on order status, delivery tracking, and important medicine alerts.",
  },
  {
    icon: Clock,
    title: "Complete History",
    description: "Access your full medication history anytime. Track refills, verify past purchases.",
  },
  {
    icon: Globe,
    title: "Nationwide Network",
    description: "Connected to thousands of verified pharmacies across the country for wide coverage.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why TrackMed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Your Safety
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed to give you confidence in the medicines you take and the pharmacies you trust.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
