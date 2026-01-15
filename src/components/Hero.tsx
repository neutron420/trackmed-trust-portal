import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Package, Bell, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "2.4M+", label: "Authentications" },
  { value: "45K+", label: "Batches Registered" },
  { value: "850+", label: "Pharmacies" },
];

export const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              <Check className="w-3.5 h-3.5" />
              Trusted by 850+ pharmacies nationwide
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground mb-6"
            >
              Verify Every Medicine.
              <br />
              <span className="text-primary">Trust What You Take.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              TrackMed connects consumers, pharmacies, and manufacturers through secure QR verification. 
              Instantly confirm medicine authenticity, track orders, and receive safety alerts.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Button variant="accent" size="lg">
                Try Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Medicines
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 lg:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[300px] animate-float">
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-float">
                  <div className="bg-card rounded-[2rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="h-[580px] bg-gradient-to-b from-muted/50 to-card p-5">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-xs text-muted-foreground mb-6">
                        <span className="font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-muted-foreground/40 rounded-sm" />
                          <div className="w-4 h-2 bg-muted-foreground/40 rounded-sm" />
                          <div className="w-5 h-2 bg-accent rounded-sm" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="space-y-5">
                        <div>
                          <h3 className="font-display font-bold text-foreground text-lg">Scan Result</h3>
                          <p className="text-sm text-muted-foreground">Medicine verified</p>
                        </div>

                        {/* Verified Card */}
                        <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-foreground">Authentic</span>
                                <span className="px-1.5 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">Verified</span>
                              </div>
                              <p className="text-xs text-muted-foreground">Amoxicillin 500mg • Batch #TM24851</p>
                            </div>
                          </div>
                        </div>

                        {/* Order Card */}
                        <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Package className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground mb-1">Order #TM-2847</p>
                              <p className="text-xs text-muted-foreground mb-2">Arriving today, 2:00 PM</p>
                              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-primary rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Notification Card */}
                        <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                              <Bell className="w-5 h-5 text-amber-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground mb-0.5">Safety Alert</p>
                              <p className="text-xs text-muted-foreground">Refill reminder for your prescription</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute -left-8 top-1/3 bg-card rounded-xl p-3 shadow-lg border border-border hidden md:block animate-float-delayed"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Verified</p>
                    <p className="text-[10px] text-muted-foreground">100% Authentic</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
