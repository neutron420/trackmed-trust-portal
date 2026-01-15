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
        <div className="relative aspect-video w-full bg-gradient-to-br from-gray-900 to-black">
          {/* YouTube Embed - Replace VIDEO_ID with your actual YouTube video ID */}
          {/* Example: https://www.youtube.com/watch?v=VIDEO_ID */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
            title="TrackMed Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          
          {/* Fallback if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center pointer-events-none">
            <div className="text-center px-8 opacity-0 hover:opacity-100 transition-opacity">
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
