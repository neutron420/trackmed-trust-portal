import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { 
  QrCode, ShieldCheck, Package, Bell, Search, MapPin, 
  MessageCircle, Send, CreditCard, Pill, Clock, Heart,
  User, CheckCircle2, IndianRupee, Smartphone, Building2, Lightbulb, Sparkles
} from "lucide-react";
import { ScreenModal } from "./ScreenModal";

const screens = [
  {
    title: "Scan & Verify",
    description: "Point your camera at any medicine QR code for instant verification",
    icon: QrCode,
    iconBg: "bg-accent",
    content: (
      <div className="space-y-4 p-1">
        <div className="flex items-center justify-center h-32 border-2 border-dashed border-accent/30 rounded-2xl bg-accent/5">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-muted-foreground">Tap to scan</p>
          </div>
        </div>
        <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
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
    iconBg: "bg-blue-500",
    content: (
      <div className="space-y-4 p-1">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-bold text-gray-900">Order #TM-2847</p>
            <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full">In Transit</span>
          </div>
          <p className="text-xs text-muted-foreground">3 items • $45.99</p>
        </div>
        <div className="space-y-2.5 px-1">
          {[
            { step: "Confirmed", done: true },
            { step: "Packed", done: true },
            { step: "Shipped", done: true, current: true },
            { step: "Arriving", done: false }
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${item.done ? "bg-blue-500" : "bg-gray-200"}`} />
              <span className={`text-xs ${item.done ? "text-gray-900 font-medium" : "text-gray-400"}`}>{item.step}</span>
              {item.current && <span className="text-[10px] text-blue-500 ml-auto font-medium">Now</span>}
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
    iconBg: "bg-amber-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Recall Alert</p>
              <p className="text-[10px] text-muted-foreground">Batch #ABC123 recalled</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Refill Reminder</p>
              <p className="text-[10px] text-muted-foreground">Prescription due in 3 days</p>
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
    iconBg: "bg-rose-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="bg-gray-50 rounded-xl p-2.5 flex items-center gap-2 border border-gray-100">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">Search pharmacies...</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "CityMed Pharmacy", dist: "0.3 mi", rating: "4.9" },
            { name: "HealthFirst Store", dist: "0.7 mi", rating: "4.7" },
            { name: "WellCare Plus", dist: "1.1 mi", rating: "4.8" }
          ].map((pharmacy) => (
            <div key={pharmacy.name} className="bg-white rounded-xl p-2.5 border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-900">{pharmacy.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-muted-foreground">{pharmacy.dist}</span>
                  <span className="text-[10px] text-amber-500">★ {pharmacy.rating}</span>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Chat with Admin",
    description: "Get instant support from pharmacy administrators",
    icon: MessageCircle,
    iconBg: "bg-violet-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <User className="w-3 h-3 text-violet-600" />
            </div>
            <div className="bg-gray-100 rounded-xl rounded-tl-sm p-2.5 max-w-[85%]">
              <p className="text-[11px] text-gray-700">Hi! How can I help you today?</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-violet-500 rounded-xl rounded-tr-sm p-2.5 max-w-[85%]">
              <p className="text-[11px] text-white">I need to check my prescription status</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <User className="w-3 h-3 text-violet-600" />
            </div>
            <div className="bg-gray-100 rounded-xl rounded-tl-sm p-2.5 max-w-[85%] flex items-center gap-1.5">
              <p className="text-[11px] text-gray-700">Your order is ready for pickup!</p>
              <Sparkles className="w-3 h-3 text-violet-600" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-gray-50 rounded-xl p-2 border border-gray-100">
          <input className="flex-1 bg-transparent text-xs placeholder:text-gray-400 outline-none" placeholder="Type a message..." />
          <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Track Medicine",
    description: "Monitor your complete medication journey",
    icon: Pill,
    iconBg: "bg-teal-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="bg-teal-50 rounded-xl p-3 border border-teal-100">
          <div className="flex items-center gap-2 mb-2">
            <Pill className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-semibold text-gray-900">Amoxicillin 500mg</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8:00 AM</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Taken</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Morning", "Afternoon", "Night"].map((time, i) => (
            <div key={time} className={`p-2 rounded-lg text-center ${i === 0 ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600"}`}>
              <p className="text-[10px] font-medium">{time}</p>
              <p className="text-[9px] opacity-80">{i === 0 ? "Done" : "Pending"}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-2.5 border border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-600">Weekly Progress</span>
            <span className="text-[11px] font-semibold text-teal-600">85%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
            <div className="w-[85%] h-full bg-teal-500 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Razorpay Payment",
    description: "Secure payments with multiple options",
    icon: CreditCard,
    iconBg: "bg-indigo-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">Order Total</span>
            <span className="text-base font-bold text-gray-900 flex items-center"><IndianRupee className="w-3 h-3" />1,249</span>
          </div>
          <div className="text-[10px] text-muted-foreground">3 items from CityMed Pharmacy</div>
        </div>
        <div className="space-y-2">
          {[
            { method: "UPI", icon: Smartphone, selected: true },
            { method: "Credit/Debit Card", icon: CreditCard, selected: false },
            { method: "Net Banking", icon: Building2, selected: false },
          ].map((option) => (
            <div key={option.method} className={`flex items-center gap-3 p-2.5 rounded-xl border ${option.selected ? "border-indigo-500 bg-indigo-50" : "border-gray-100 bg-white"}`}>
              <option.icon className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">{option.method}</span>
              {option.selected && <CheckCircle2 className="w-4 h-4 text-indigo-500 ml-auto" />}
            </div>
          ))}
        </div>
        <button className="w-full bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2">
          <CreditCard className="w-3.5 h-3.5" /> Pay Securely
        </button>
      </div>
    ),
  },
  {
    title: "Health Insights",
    description: "AI-powered health recommendations",
    icon: Heart,
    iconBg: "bg-pink-500",
    content: (
      <div className="space-y-3 p-1">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 border border-pink-100">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-semibold text-gray-900">Health Score</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-pink-500">92</span>
            <span className="text-[10px] text-green-500 mb-1">↑ 5% this week</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-xl p-2.5 border border-gray-100 text-center">
            <p className="text-lg font-bold text-gray-900">7</p>
            <p className="text-[10px] text-muted-foreground">Day Streak</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-gray-100 text-center">
            <p className="text-lg font-bold text-gray-900">12</p>
            <p className="text-[10px] text-muted-foreground">Medications</p>
          </div>
        </div>
        <div className="bg-pink-500/10 rounded-xl p-2.5 border border-pink-200 flex items-start gap-2">
          <Lightbulb className="w-3.5 h-3.5 text-pink-600 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] text-pink-700 font-medium">Tip: Take Vitamin D with food for better absorption</p>
        </div>
      </div>
    ),
  },
];

// Phone Mockup Component matching reference design
const PhoneMockup = ({ 
  screen, 
  index, 
  onClick 
}: { 
  screen: typeof screens[0]; 
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Phone Frame - Realistic iPhone style with better details */}
      <div className="relative mx-auto" style={{ width: "260px" }}>
        {/* Outer frame with realistic gradient and shadows */}
        <div className="bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0a0a0a] rounded-[3rem] p-[4px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
          {/* Inner bezel with metallic look */}
          <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] rounded-[2.8rem] p-[3px]">
            {/* Screen with realistic reflection */}
            <div className="bg-white rounded-[2.7rem] overflow-hidden relative shadow-inner">
              <div className="h-[460px] bg-gradient-to-b from-gray-50 to-white relative">
                {/* Status Bar with better styling */}
                <div className="flex justify-between items-center px-6 pt-3 pb-2 bg-white">
                  <span className="text-[11px] font-semibold text-gray-900">9:41</span>
                  {/* Notch / Dynamic Island - more realistic */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-2.5">
                    <div className="w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-gray-800" />
                      <div className="w-1 h-1 rounded-full bg-gray-800" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-3" viewBox="0 0 18 12" fill="currentColor">
                      <path d="M1 4.5h2v7H1zM5 3h2v8.5H5zM9 1.5h2V12H9zM13 0h2v12h-2z" className="text-gray-900"/>
                    </svg>
                    <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                      <path d="M8 2.5C5.5 2.5 3.3 3.6 2 5.5L0 4c1.7-2.4 4.6-4 8-4s6.3 1.6 8 4l-2 1.5c-1.3-1.9-3.5-3-6-3z" className="text-gray-300"/>
                      <path d="M8 5.5c-1.7 0-3.2.7-4.2 1.8L2 6c1.3-1.5 3.4-2.5 6-2.5s4.7 1 6 2.5l-1.8 1.3c-1-1.1-2.5-1.8-4.2-1.8z" className="text-gray-500"/>
                      <path d="M8 8.5c-1 0-1.9.4-2.5 1L4 8c.9-1 2.4-1.5 4-1.5s3.1.5 4 1.5l-1.5 1.5c-.6-.6-1.5-1-2.5-1z" className="text-gray-700"/>
                      <circle cx="8" cy="11" r="1.5" className="text-gray-900"/>
                    </svg>
                    <svg className="w-6 h-3" viewBox="0 0 25 12" fill="currentColor">
                      <rect x="0" y="1" width="21" height="10" rx="2" className="text-gray-300" strokeWidth="1" stroke="currentColor" fill="none"/>
                      <rect x="2" y="3" width="17" height="6" rx="1" className="text-gray-900"/>
                      <path d="M23 4v4a2 2 0 0 0 0-4z" className="text-gray-400"/>
                    </svg>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-5 pt-2 pb-3">
                  <div className={`w-10 h-10 rounded-xl ${screen.iconBg} flex items-center justify-center mb-2 shadow-sm`}>
                    <screen.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">{screen.title}</h3>
                </div>

                {/* Content */}
                <div className="px-4 pb-4 overflow-hidden">
                  {screen.content}
                </div>

                {/* Home Indicator - more realistic */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-300 rounded-full shadow-sm" />
                {/* Screen reflection overlay for realism */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.7rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description with click hint */}
      <p className="text-sm text-muted-foreground mt-5 text-center leading-relaxed max-w-[240px] mx-auto group-hover:text-foreground transition-colors">
        {screen.description}
      </p>
      <p className="text-xs text-accent mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
        Click to view full screen
      </p>
    </motion.div>
  );
};

export const AppShowcase = () => {
  const [selectedScreen, setSelectedScreen] = useState<typeof screens[0] | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
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

        {/* First row - 4 screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {screens.slice(0, 4).map((screen, index) => (
            <PhoneMockup 
              key={screen.title} 
              screen={screen} 
              index={index}
              onClick={() => setSelectedScreen(screen)}
            />
          ))}
        </div>

        {/* Second row - 4 screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {screens.slice(4, 8).map((screen, index) => (
            <PhoneMockup 
              key={screen.title} 
              screen={screen} 
              index={index + 4}
              onClick={() => setSelectedScreen(screen)}
            />
          ))}
        </div>
      </div>

      {/* Screen Modal */}
      {selectedScreen && (
        <ScreenModal
          open={!!selectedScreen}
          onOpenChange={(open) => !open && setSelectedScreen(null)}
          screen={selectedScreen}
        />
      )}
    </section>
  );
};
