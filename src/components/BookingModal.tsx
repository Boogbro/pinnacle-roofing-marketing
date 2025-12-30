import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { CheckCircle2, Trophy, TrendingUp, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ValueProposition = ({ isMobile }: { isMobile: boolean }) => (
  <div className={cn(
    "relative bg-secondary/30 flex flex-col justify-center border-border/50 overflow-hidden",
    isMobile 
      ? "w-full p-5 pb-4 border-b" 
      : "w-[40%] p-8 md:p-10 border-r"
  )}>
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none" />
    <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
    
    <div className="relative z-10 space-y-4 md:space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">
          <Trophy className="w-3 h-3" />
          Elite Contractors Only
        </div>
        <h2 className={cn(
          "font-black leading-tight mb-2 md:mb-4",
          isMobile ? "text-xl" : "text-3xl md:text-4xl"
        )}>
          Scale Your <span className="gradient-text">Empire Today.</span>
        </h2>
        {!isMobile && (
          <p className="text-muted-foreground text-lg">
            Lock in your exclusive territory before your competitor does. This 45-minute strategy session maps out your path to 3.2x ROI.
          </p>
        )}
      </div>

      {!isMobile && (
        <>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-green-500/10">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Growth Roadmap</h4>
                <p className="text-sm text-muted-foreground">Custom market analysis tailored to your service area.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-blue-500/10">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Territory Check</h4>
                <p className="text-sm text-muted-foreground">Confirm availability for exclusive rights in your city.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-purple-500/10">
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Zero Obligation</h4>
                <p className="text-sm text-muted-foreground">100% free strategy call. No pressure, just value.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground italic">
              "We implemented this system and booked 14 jobs in our first week."
            </p>
          </div>
        </>
      )}

      {isMobile && (
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            Free Call
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
            3.2x ROI
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-500" />
            Exclusive
          </span>
        </div>
      )}
    </div>
  </div>
);

const CalendlyEmbed = ({ isMobile }: { isMobile: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn(
      "bg-background relative",
      isMobile ? "w-full flex-1 min-h-0" : "w-[60%] h-full"
    )}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/8V7oS2qwyoQZRC8syytp"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule Strategy Call"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

const BookingModal = ({ isOpen, onOpenChange }: BookingModalProps) => {
  const isMobile = useIsMobile();

  // Use Drawer for mobile, Dialog for desktop
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="h-[92vh] max-h-[92vh] p-0 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col h-full overflow-hidden">
            <ValueProposition isMobile={true} />
            <CalendlyEmbed isMobile={true} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[85vh] p-0 overflow-hidden border-primary/20 bg-background/80 backdrop-blur-xl shadow-[0_0_50px_rgba(37,99,235,0.15)]">
        <div className="flex flex-row h-full w-full relative">
          <ValueProposition isMobile={false} />
          <CalendlyEmbed isMobile={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
