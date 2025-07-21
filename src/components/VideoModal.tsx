import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  videoId: string;
  children: React.ReactNode;
}

const VideoModal = ({ videoId, children }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
        <div className="relative bg-surface-elevated rounded-lg overflow-hidden">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Video Container */}
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="VR Fitness Demo Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Virtualbridge VR Fitness Demo</h3>
            <p className="text-muted-foreground">
              Experience the future of fitness with our AI-powered VR workouts. See how personalized training and real-time analytics transform your fitness journey.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;