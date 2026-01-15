import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

interface DemoVideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoVideoModal = ({ open, onOpenChange }: DemoVideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-white/10">
        <DialogHeader className="sr-only">
          <DialogTitle>TrackMed Demo Video</DialogTitle>
        </DialogHeader>
        
        {/* Video Container */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          {/* Placeholder for actual video - replace with real video embed */}
          <div className="text-center px-8">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-accent/10">
              <Play className="w-8 h-8 text-accent ml-1" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              TrackMed Demo
            </h3>
            <p className="text-white/60 text-sm max-w-md mx-auto">
              See how TrackMed protects you from counterfeit medicines with instant QR verification, 
              real-time tracking, and smart safety alerts.
            </p>
            
            {/* Demo Features Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Scan & Verify", time: "0:00" },
                { label: "Track Orders", time: "0:45" },
                { label: "Safety Alerts", time: "1:30" },
                { label: "Find Pharmacy", time: "2:15" },
              ].map((feature) => (
                <div 
                  key={feature.label}
                  className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <p className="text-xs text-white/40">{feature.time}</p>
                  <p className="text-sm text-white font-medium">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
