import { useState, useRef, useEffect } from "react";
import { QrCode, Package, Bell, Play, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import demoVideo from "@/assets/TrackMed_Demo_Video_Generation_Prompts.mp4";

export const DemoVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed && videoRef.current) {
            // Auto-play video when scrolled into view
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
            });
            setHasPlayed(true);
          } else if (!entry.isIntersecting && hasPlayed && videoRef.current) {
            // Pause video when scrolled out of view
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "100px", // Start loading slightly before section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Enhanced AI-generated looking background decoration */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-full blur-[80px]" />
        
        {/* Geometric patterns overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
            >
              <Play className="w-3.5 h-3.5 text-accent" />
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">Watch Demo</p>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              See TrackMed in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Watch how TrackMed makes medicine verification simple, fast, and secure. 
              See real examples of scanning, tracking, and safety alerts.
            </p>
          </ScrollReveal>

          {/* Video Player - Auto-plays when scrolled into view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-border/50 group-hover:border-accent/30 transition-all duration-300">
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
              
              {/* Video Player */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
                {/* Local MP4 Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={demoVideo}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  poster=""
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute top-4 left-4 flex gap-2 pointer-events-none z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                </div>
                
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

            {/* Enhanced Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: QrCode, title: "QR Scanning", desc: "Instant verification", color: "from-accent/20 to-accent/5" },
                { icon: Package, title: "Order Tracking", desc: "Real-time updates", color: "from-blue-500/20 to-blue-500/5" },
                { icon: Bell, title: "Safety Alerts", desc: "Stay protected", color: "from-amber-500/20 to-amber-500/5" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative bg-card/80 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all text-center group overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <feature.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
