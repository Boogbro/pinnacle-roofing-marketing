import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Brain, Calendar, TrendingUp, CheckCircle2, Zap, ShieldCheck, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data Configuration (Merged from SystemProcess) ---
const steps = [
  {
    id: 1,
    title: "Market Intelligence",
    subtitle: "Targeting",
    description:
      "We analyze 47+ data points to identify high-intent homeowners. We don't guess; we know exactly who is ready to buy.",
    icon: Target,
    // Placeholder video - replace with your actual targeting VSL/Loop
    video: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691eb27388e1e669aaa7d2c7.mp4",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec07053e35079ab4dca1e.png",
    nodes: ["Demographics", "Property Age", "Equity", "Buying Signals"],
  },
  {
    id: 2,
    title: "AI Pre-Qualification",
    subtitle: "Filtering",
    description:
      "Our proprietary AI conducts 12-point qualification calls. Budget, timeline, and decision-making authority are verified before you ever speak to them.",
    icon: Brain,
    video: "", // Add video URL if available
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec0705c5cab484c042f45.png",
    nodes: ["Budget > $15k", "Timeline < 30d", "Homeowner", "No Agents"],
  },
  {
    id: 3,
    title: "Exclusive Scheduling",
    subtitle: "Booking",
    description:
      "Qualified prospects book directly into your calendar. Exclusive territory rights mean you never share a lead or compete in a bidding war.",
    icon: Calendar,
    video: "",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec07093893187ceaab482.png",
    nodes: ["Real-time Sync", "Auto-Reminders", "No-Show Protection", "Direct Booking"],
  },
  {
    id: 4,
    title: "Authority Amplification",
    subtitle: "Closing",
    description:
      "We position you as the obvious choice in your market. Automated nurturing sequences boost show rates and close rates by up to 34%.",
    icon: TrendingUp,
    video: "",
    image: "https://storage.googleapis.com/msgsndr/X2rQE5wKsLFPGWY3j9b7/media/691ec070330ab50a6ad46dd4.png",
    nodes: ["Social Proof", "Case Studies", "Brand Trust", "Retargeting"],
  },
];

const GrowthInfrastructure = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Resize for Responsive Layout
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="infrastructure" className="relative bg-background py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Growth <span className="gradient-text">Infrastructure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            A fully done-for-you ecosystem. We connect the dots between strangers and signed contracts.
          </motion.p>
        </div>

        {/* Main Layout: Grid on Desktop, Stack on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Interactive Steps List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {steps.map((step, index) => (
              <StepTrigger
                key={step.id}
                step={step}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
                onHover={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Visual Node Graph */}
          <div className="lg:col-span-7 relative min-h-[500px] lg:h-[600px]">
            <div className="lg:sticky lg:top-32 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <NodeGraphVisualizer data={steps[activeStep]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Step Trigger (Left Column) ---
const StepTrigger = ({
  step,
  isActive,
  onClick,
  onHover,
}: {
  step: any;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      className={cn(
        "group cursor-pointer relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden",
        isActive
          ? "bg-card/40 border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          : "bg-transparent border-transparent hover:bg-card/20 hover:border-white/5",
      )}
    >
      {/* Progress Bar Background (Active Only) */}
      {isActive && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10 flex gap-5">
        {/* Icon Box */}
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300 shrink-0",
            isActive
              ? "bg-primary text-white border-primary"
              : "bg-secondary/50 text-muted-foreground border-white/10 group-hover:text-foreground",
          )}
        >
          <step.icon className="w-6 h-6" />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">{step.subtitle}</span>
            {isActive && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
          </div>
          <h3
            className={cn(
              "text-xl font-semibold transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed transition-all duration-500",
              isActive
                ? "text-muted-foreground h-auto opacity-100"
                : "text-muted-foreground/0 h-0 opacity-0 overflow-hidden lg:group-hover:h-auto lg:group-hover:opacity-70",
            )}
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Node Graph Visualizer (Right Column) ---
// This replicates the node-connection style from the screenshots
const NodeGraphVisualizer = ({ data }: { data: any }) => {
  return (
    <div className="relative w-full max-w-2xl aspect-[16/10]">
      {/* Central Main Card (Video/Image) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-[70%] h-[70%] relative rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Media */}
          {data.video ? (
            <video
              src={data.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
            />
          )}

          {/* Overlay Label */}
          <div className="absolute bottom-4 left-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-white">Active System</span>
            </div>
          </div>
        </div>
      </div>

      {/* Satellite Nodes & Connections */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="w-full h-full visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>

          {/* We define 4 fixed positions for the nodes relative to center */}
          {/* Top Left, Bottom Left, Top Right, Bottom Right */}
          <ConnectionPath startX="15%" startY="20%" endX="30%" endY="40%" />
          <ConnectionPath startX="15%" startY="80%" endX="30%" endY="60%" />
          <ConnectionPath startX="85%" startY="20%" endX="70%" endY="40%" />
          <ConnectionPath startX="85%" startY="80%" endX="70%" endY="60%" />
        </svg>

        {/* Render Nodes at positions */}
        <NodeCard text={data.nodes[0]} className="top-[10%] left-[0%] md:left-[5%]" delay={0.1} />
        <NodeCard text={data.nodes[1]} className="bottom-[10%] left-[0%] md:left-[5%]" delay={0.2} />
        <NodeCard text={data.nodes[2]} className="top-[10%] right-[0%] md:right-[5%]" delay={0.3} icon={CheckCircle2} />
        <NodeCard text={data.nodes[3]} className="bottom-[10%] right-[0%] md:right-[5%]" delay={0.4} icon={BarChart} />
      </div>
    </div>
  );
};

// SVG Path drawer
const ConnectionPath = ({
  startX,
  startY,
  endX,
  endY,
}: {
  startX: string;
  startY: string;
  endX: string;
  endY: string;
}) => (
  <motion.path
    d={`M ${startX} ${startY} C ${endX} ${startY}, ${startX} ${endY}, ${endX} ${endY}`} // Bezier Curve logic placeholder
    // In real SVG relative units need converting, for simplicity in this demo using simple lines often works better or complex math
    // Simplified visual trick: The SVG creates the "strings"
    stroke="url(#lineGradient)"
    strokeWidth="1"
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  />
);

// Satellite Card Component
const NodeCard = ({
  text,
  className,
  delay,
  icon: Icon = Zap,
}: {
  text: string;
  className: string;
  delay: number;
  icon?: any;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    className={cn(
      "absolute p-3 rounded-xl bg-card border border-white/10 shadow-xl flex items-center gap-3 w-auto max-w-[160px]",
      className,
    )}
  >
    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <span className="text-xs font-medium text-muted-foreground leading-tight">{text}</span>
  </motion.div>
);

export default GrowthInfrastructure;
