import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ScreenModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  screen: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    iconBg: string;
    content: React.ReactNode;
  };
}

export const ScreenModal = ({ open, onOpenChange, screen }: ScreenModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden bg-transparent border-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          {/* Phone Frame - Larger for modal */}
          <div className="relative mx-auto" style={{ width: "320px" }}>
            {/* Outer frame with realistic details */}
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[3.5rem] p-[4px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_2px_rgba(255,255,255,0.1)]">
              {/* Inner bezel with metallic look */}
              <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[3.2rem] p-[3px]">
                {/* Screen */}
                <div className="bg-white rounded-[3rem] overflow-hidden relative">
                  <div className="h-[600px] bg-gradient-to-b from-gray-50 to-white relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-4 pb-3 bg-white">
                      <span className="text-xs font-semibold text-gray-900">9:41</span>
                      {/* Notch / Dynamic Island */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-3">
                        <div className="w-[100px] h-[28px] bg-black rounded-full flex items-center justify-center gap-2 shadow-lg">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] ring-1 ring-gray-800" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-3.5" viewBox="0 0 18 12" fill="currentColor">
                          <path d="M1 4.5h2v7H1zM5 3h2v8.5H5zM9 1.5h2V12H9zM13 0h2v12h-2z" className="text-gray-900"/>
                        </svg>
                        <svg className="w-4 h-3.5" viewBox="0 0 16 12" fill="currentColor">
                          <path d="M8 2.5C5.5 2.5 3.3 3.6 2 5.5L0 4c1.7-2.4 4.6-4 8-4s6.3 1.6 8 4l-2 1.5c-1.3-1.9-3.5-3-6-3z" className="text-gray-300"/>
                          <path d="M8 5.5c-1.7 0-3.2.7-4.2 1.8L2 6c1.3-1.5 3.4-2.5 6-2.5s4.7 1 6 2.5l-1.8 1.3c-1-1.1-2.5-1.8-4.2-1.8z" className="text-gray-500"/>
                          <path d="M8 8.5c-1 0-1.9.4-2.5 1L4 8c.9-1 2.4-1.5 4-1.5s3.1.5 4 1.5l-1.5 1.5c-.6-.6-1.5-1-2.5-1z" className="text-gray-700"/>
                          <circle cx="8" cy="11" r="1.5" className="text-gray-900"/>
                        </svg>
                        <svg className="w-7 h-3.5" viewBox="0 0 25 12" fill="currentColor">
                          <rect x="0" y="1" width="21" height="10" rx="2" className="text-gray-300" strokeWidth="1" stroke="currentColor" fill="none"/>
                          <rect x="2" y="3" width="17" height="6" rx="1" className="text-gray-900"/>
                          <path d="M23 4v4a2 2 0 0 0 0-4z" className="text-gray-400"/>
                        </svg>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-3 pb-4 bg-white">
                      <div className={`w-12 h-12 rounded-xl ${screen.iconBg} flex items-center justify-center mb-3 shadow-md`}>
                        <screen.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-gray-900 text-xl leading-tight">{screen.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{screen.description}</p>
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-5 overflow-y-auto max-h-[450px]">
                      {screen.content}
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-900" />
          </button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
