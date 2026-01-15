import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { QrCode, ShieldCheck, Package, Bell, Search, MapPin, Wifi, Battery, Signal } from "lucide-react";

const screens = [
  {
    title: "Scan & Verify",
    description: "Point your camera at any medicine QR code for instant verification",
    icon: QrCode,
    gradient: "from-accent to-emerald-400",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-center h-36 border-2 border-dashed border-accent/40 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center shadow-lg shadow-accent/30">
              <QrCode className="w-7 h-7 text-white" />
            </div>
            <p className="text-xs text-muted-foreground font-medium">Tap to scan</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-accent/15 to-emerald-400/15 rounded-xl p-4 border border-accent/20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-accent" />
            </div>
            <div>
              <span className="text-sm font-semibold text-accent">Verified ✓</span>
              <p className="text-[10px] text-muted-foreground">Authentic medicine</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Track Orders",
    description: "Real-time updates from pharmacy to your doorstep",
    icon: Package,
    gradient: "from-blue-500 to-cyan-400",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-bold text-gray-900">Order #TM-2847</p>
            <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full">In Transit</span>
          </div>
          <p className="text-xs text-muted-foreground">3 items • $45.99</p>
        </div>
        <div className="space-y-3 px-1">
          {[
            { step: "Confirmed", done: true },
            { step: "Packed", done: true },
            { step: "Shipped", done: true },
            { step: "Arriving", done: false }
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full border-2 ${item.done ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"} shadow-sm`} />
              <span className={`text-xs font-medium ${item.done ? "text-gray-900" : "text-gray-400"}`}>{item.step}</span>
              {i === 2 && <span className="text-[10px] text-blue-500 ml-auto">Now</span>}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Safety Alerts",
    description: "Get notified instantly about recalls and updates",
    icon: Bell,
    gradient: "from-amber-500 to-orange-400",
    content: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Recall Alert</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Batch #ABC123 recalled</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Refill Reminder</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Prescription due in 3 days</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Find Pharmacy",
    description: "Locate verified pharmacies near you",
    icon: MapPin,
    gradient: "from-rose-500 to-pink-400",
    content: (
      <div className="space-y-3">
        <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 border border-gray-100">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">Search pharmacies...</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "CityMed Pharmacy", dist: "0.3", rating: "4.9" },
            { name: "HealthFirst Store", dist: "0.7", rating: "4.7" },
            { name: "WellCare Plus", dist: "1.1", rating: "4.8" }
          ].map((pharmacy) => (
            <div key={pharmacy.name} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <p className="text-xs font-semibold text-gray-900">{pharmacy.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-muted-foreground">{pharmacy.dist} mi</span>
                  <span className="text-[10px] text-amber-500">★ {pharmacy.rating}</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center shadow-md">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export const AppShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">App Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need, in your pocket
          </h2>
          <p className="text-muted-foreground">
            A powerful yet simple app that keeps you and your family safe.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group"
            >
              {/* Phone Mockup */}
              <div className="relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${screen.gradient} opacity-20 blur-3xl rounded-full scale-75 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Phone frame */}
                <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl shadow-black/40 group-hover:shadow-black/60 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Inner bezel */}
                  <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2rem] p-0.5">
                    <div className="bg-white rounded-[1.85rem] overflow-hidden">
                      {/* Screen content */}
                      <div className="h-[380px] bg-gradient-to-b from-gray-50/80 to-white p-5 relative">
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                        </div>

                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-5 mt-1 px-1">
                          <span className="font-semibold">9:41</span>
                          <div className="flex items-center gap-1.5">
                            <Signal className="w-3 h-3" />
                            <Wifi className="w-3 h-3" />
                            <Battery className="w-4 h-3" />
                          </div>
                        </div>

                        {/* Header */}
                        <div className="mb-5">
                          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${screen.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                            <screen.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-display font-bold text-gray-900 text-base">{screen.title}</h3>
                        </div>

                        {/* Content */}
                        {screen.content}

                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mt-6 text-center leading-relaxed">
                {screen.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
