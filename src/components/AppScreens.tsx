import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Bell, History, MapPin } from "lucide-react";

const screens = [
  {
    title: "Scan & Verify",
    icon: ShieldCheck,
    description: "Instant authenticity verification",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Order Tracking",
    icon: Package,
    description: "Real-time delivery updates",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Alerts",
    icon: Bell,
    description: "Safety notifications",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "History",
    icon: History,
    description: "Complete medication log",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Find Pharmacy",
    icon: MapPin,
    description: "Nearby verified stores",
    color: "bg-rose-500/10 text-rose-600",
  },
];

export const AppScreens = () => {
  return (
    <section id="app" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">The App</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, intuitive experience for consumers and healthcare providers alike.
          </p>
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 lg:pb-0 lg:grid lg:grid-cols-5 scrollbar-hide"
          >
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[200px] lg:w-auto"
              >
                {/* Phone mockup */}
                <div className="bg-foreground rounded-[1.75rem] p-1.5 shadow-lg">
                  <div className="bg-card rounded-[1.5rem] overflow-hidden">
                    <div className="h-[320px] bg-gradient-to-b from-muted/30 to-card p-4 flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center text-[10px] text-muted-foreground mb-4">
                        <span>9:41</span>
                        <div className="flex gap-0.5">
                          <div className="w-3 h-1.5 bg-muted-foreground/40 rounded-sm" />
                          <div className="w-4 h-1.5 bg-accent rounded-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className={`w-14 h-14 rounded-xl ${screen.color} flex items-center justify-center mb-4`}>
                          <screen.icon className="w-7 h-7" />
                        </div>
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                          {screen.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {screen.description}
                        </p>
                      </div>

                      {/* Bottom nav indicator */}
                      <div className="flex justify-center gap-1 pt-4">
                        <div className="w-8 h-1 bg-muted rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
