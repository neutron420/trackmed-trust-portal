import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Package, Bell, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "2.4M+", label: "Authentications" },
  { value: "45K+", label: "Batches Registered" },
  { value: "850+", label: "Partner Pharmacies" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/70" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              Trusted by 850+ pharmacies nationwide
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Verify Every Medicine.
              <br />
              <span className="text-accent">Trust What You Take.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8"
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
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 lg:gap-10 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
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
              <div className="relative w-[260px] md:w-[280px] animate-float">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-float ring-1 ring-white/10">
                  <div className="bg-card rounded-[2rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="h-[540px] bg-gradient-to-b from-muted/50 to-card p-4">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-[10px] text-muted-foreground mb-5">
                        <span className="font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3.5 h-1.5 bg-muted-foreground/40 rounded-sm" />
                          <div className="w-3.5 h-1.5 bg-muted-foreground/40 rounded-sm" />
                          <div className="w-5 h-1.5 bg-accent rounded-sm" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-display font-bold text-foreground">Scan Result</h3>
                          <p className="text-xs text-muted-foreground">Medicine verified successfully</p>
                        </div>

                        {/* Verified Card */}
                        <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-4.5 h-4.5 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-semibold text-foreground">Authentic</span>
                                <span className="px-1.5 py-0.5 bg-accent text-accent-foreground text-[10px] font-semibold rounded">VERIFIED</span>
                              </div>
                              <p className="text-[11px] text-muted-foreground truncate">Amoxicillin 500mg • Batch #TM24851</p>
                            </div>
                          </div>
                        </div>

                        {/* Order Card */}
                        <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Package className="w-4.5 h-4.5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground mb-0.5">Order #TM-2847</p>
                              <p className="text-[11px] text-muted-foreground mb-2">Arriving today, 2:00 PM</p>
                              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-accent rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Alert Card */}
                        <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                              <Bell className="w-4.5 h-4.5 text-amber-500" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground mb-0.5">Refill Reminder</p>
                              <p className="text-[11px] text-muted-foreground">Your prescription is due for renewal</p>
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
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -left-6 top-1/4 bg-card rounded-lg p-3 shadow-elevated border border-border hidden md:block animate-float-slow"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full gradient-accent flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">100% Verified</p>
                    <p className="text-[9px] text-muted-foreground">Authentic Medicine</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-card rounded-lg p-3 shadow-elevated border border-border hidden md:block animate-float"
              >
                <div className="text-center">
                  <p className="text-lg font-display font-bold text-accent">99.9%</p>
                  <p className="text-[9px] text-muted-foreground">Accuracy Rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
