import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Package, Bell } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "2.5M+", label: "Medicines Verified" },
  { value: "50K+", label: "Batches Tracked" },
  { value: "1,200+", label: "Partner Pharmacies" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Trusted by 1,200+ pharmacies</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">Verify Every Medicine.</span>
              <br />
              <span className="text-gradient">Trust Every Purchase.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              TrackMed connects consumers, pharmacies, and manufacturers through 
              secure QR verification. Know your medicine is authentic before you buy.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Try Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Explore Medicines
              </Button>
            </motion.div>

            {/* Stats Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative floating-animation"
            >
              {/* Main Phone */}
              <div className="relative w-72 md:w-80 h-[580px] md:h-[620px] bg-foreground rounded-[3rem] p-3 shadow-float">
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary to-card">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-4 text-xs text-muted-foreground">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-6 h-2 bg-accent rounded-sm" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-6">
                      <h3 className="text-lg font-bold text-foreground">Scan Medicine</h3>
                      <p className="text-sm text-muted-foreground">Point camera at QR code</p>
                    </div>

                    {/* QR Scanner Area */}
                    <div className="mx-6 mt-4 aspect-square rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="w-16 h-16 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">QR Code Detected</p>
                      </div>
                    </div>

                    {/* Recent Scans */}
                    <div className="px-6 pt-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Recent Scans</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-card rounded-xl shadow-card">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Package className="w-5 h-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Amoxicillin 500mg</p>
                            <p className="text-xs text-accent">✓ Verified Authentic</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-16 top-1/4 w-48 bg-card rounded-xl p-4 shadow-float floating-animation-delayed hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                    <Bell className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Order Update</p>
                    <p className="text-xs text-muted-foreground">Out for delivery</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -right-12 bottom-1/3 w-44 bg-card rounded-xl p-4 shadow-float floating-animation hidden md:block"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <p className="text-xs text-muted-foreground">Verified Safe</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
