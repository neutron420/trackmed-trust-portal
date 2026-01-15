import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Package, Bell, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 2400000, suffix: "+", label: "Authentications" },
  { value: 45000, suffix: "+", label: "Batches Tracked" },
  { value: 850, suffix: "+", label: "Partner Pharmacies" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Strong left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium mb-6 border border-accent/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now accepting early access partners
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Verify Every Medicine.
              <br />
              <span className="text-accent">Trust What You Take.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8"
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
              <Button variant="accent" size="lg" className="font-semibold">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                Watch Demo
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 lg:gap-10 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-display font-bold text-white">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-16"
          >
            <div className="relative">
              {/* Phone Frame - Larger with better shadows */}
              <div className="relative w-[280px] md:w-[320px] animate-float">
                <div className="bg-gray-900 rounded-[3rem] p-2.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.4)] ring-1 ring-white/20">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="h-[560px] bg-gradient-to-b from-gray-50 to-white p-5">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-[10px] text-gray-400 mb-5">
                        <span className="font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3.5 h-1.5 bg-gray-300 rounded-sm" />
                          <div className="w-3.5 h-1.5 bg-gray-300 rounded-sm" />
                          <div className="w-5 h-1.5 bg-accent rounded-sm" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-display font-bold text-gray-900">Scan Result</h3>
                          <p className="text-xs text-gray-500">Medicine verified successfully</p>
                        </div>

                        {/* Verified Card */}
                        <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="w-4 h-4 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-semibold text-gray-900">Authentic</span>
                                <span className="px-1.5 py-0.5 bg-accent text-white text-[10px] font-semibold rounded">VERIFIED</span>
                              </div>
                              <p className="text-[11px] text-gray-500 truncate">Amoxicillin 500mg • Batch #TM24851</p>
                            </div>
                          </div>
                        </div>

                        {/* Order Card */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                              <Package className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 mb-0.5">Order #TM-2847</p>
                              <p className="text-[11px] text-gray-500 mb-2">Arriving today, 2:00 PM</p>
                              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-accent rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Alert Card */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                              <Bell className="w-4 h-4 text-amber-500" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 mb-0.5">Refill Reminder</p>
                              <p className="text-[11px] text-gray-500">Your prescription is due for renewal</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Larger */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -left-8 top-1/3 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-gray-100 hidden md:block animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">100% Verified</p>
                    <p className="text-xs text-gray-500">Authentic Medicine</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badge - Larger */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-gray-100 hidden md:block animate-float"
              >
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-accent">99.9%</p>
                  <p className="text-xs text-gray-500">Accuracy Rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
