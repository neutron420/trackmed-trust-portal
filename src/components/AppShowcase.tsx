import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { QrCode, ShieldCheck, Package, Bell, Search, MapPin } from "lucide-react";

const screens = [
  {
    title: "Scan & Verify",
    description: "Point your camera at any medicine QR code for instant verification",
    icon: QrCode,
    color: "bg-accent",
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-center h-32 border-2 border-dashed border-accent/30 rounded-xl bg-accent/5">
          <div className="text-center">
            <QrCode className="w-10 h-10 text-accent mx-auto mb-2" />
            <p className="text-xs text-gray-500">Scanning...</p>
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-accent">Medicine Verified</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Track Orders",
    description: "Real-time updates from pharmacy to your doorstep",
    icon: Package,
    color: "bg-blue-500",
    content: (
      <div className="space-y-3">
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-gray-900 mb-1">Order #TM-2847</p>
          <p className="text-[10px] text-gray-500">3 items • $45.99</p>
        </div>
        <div className="space-y-2">
          {["Confirmed", "Packed", "Shipped", "Arriving"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${i < 3 ? "bg-blue-500" : "bg-gray-200"}`} />
              <span className={`text-xs ${i < 3 ? "text-gray-900" : "text-gray-400"}`}>{step}</span>
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
    color: "bg-amber-500",
    content: (
      <div className="space-y-2">
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
          <div className="flex items-start gap-2">
            <Bell className="w-4 h-4 text-amber-500 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-gray-900">Recall Alert</p>
              <p className="text-[10px] text-gray-500">Batch #ABC123 has been recalled</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-gray-900">Refill Reminder</p>
              <p className="text-[10px] text-gray-500">Your prescription is due soon</p>
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
    color: "bg-rose-500",
    content: (
      <div className="space-y-3">
        <div className="bg-gray-100 rounded-lg p-2 flex items-center gap-2">
          <Search className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400">Search pharmacies...</span>
        </div>
        <div className="space-y-2">
          {["CityMed Pharmacy", "HealthFirst Store", "WellCare Plus"].map((name, i) => (
            <div key={name} className="bg-white rounded-lg p-2 border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-900">{name}</p>
                <p className="text-[10px] text-gray-500">{0.3 + i * 0.4} mi away</p>
              </div>
              <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-accent" />
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
    <section className="py-20 lg:py-28 bg-muted/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-xl group-hover:shadow-2xl transition-shadow">
                <div className="bg-white rounded-[1.75rem] overflow-hidden">
                  <div className="h-[340px] bg-gradient-to-b from-gray-50 to-white p-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[9px] text-gray-400 mb-3">
                      <span>9:41</span>
                      <div className="flex gap-0.5">
                        <div className="w-3 h-1 bg-gray-300 rounded-sm" />
                        <div className="w-4 h-1 bg-accent rounded-sm" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <div className={`w-8 h-8 rounded-lg ${screen.color} flex items-center justify-center mb-2`}>
                        <screen.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-gray-900 text-sm">{screen.title}</h3>
                    </div>

                    {/* Content */}
                    {screen.content}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {screen.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
