import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Info, TrendingUp, Target, DollarSign, Calculator } from "lucide-react";

const CPA = 47; // Cost Per Appointment

const ROICalculator = () => {
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(20);
  const [closingRate, setClosingRate] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(10000);

  const [displayedRevenue, setDisplayedRevenue] = useState(0);
  const [displayedProfit, setDisplayedProfit] = useState(0);

  const closedDeals = (appointmentsPerMonth * closingRate) / 100;
  const totalRevenue = closedDeals * avgJobValue;
  const systemInvestment = appointmentsPerMonth * CPA;
  const profit = totalRevenue - systemInvestment;
  const roiMultiplier = (totalRevenue / systemInvestment).toFixed(1);

  useEffect(() => {
    const targetRevenue = Math.round(totalRevenue);
    const targetProfit = Math.round(profit);

    // Smooth number animation
    let start = 0;
    const duration = 1000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setDisplayedRevenue(Math.floor(targetRevenue * progress));
      setDisplayedProfit(Math.floor(targetProfit * progress));

      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, [totalRevenue, profit]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  return (
    <section id="roi-calculator" className="py-24 px-4 md:px-6 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-warm-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            <Calculator className="w-4 h-4" />
            ROI Engine 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Predict Your <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Adjust the metrics below to see how our infrastructure transforms your roofing business revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 md:p-8 glass border-white/10 space-y-10">
              {/* Average Job Value */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      Avg Job Value <Info className="w-3 h-3" />
                    </label>
                    <div className="text-3xl font-bold text-foreground">{formatCurrency(avgJobValue)}</div>
                  </div>
                </div>
                <Slider
                  value={[avgJobValue]}
                  onValueChange={(v) => setAvgJobValue(v[0])}
                  min={5000}
                  max={50000}
                  step={500}
                  className="py-4"
                />
              </div>

              {/* Closing Rate */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      Closing Rate <Target className="w-4 h-4 text-primary" />
                    </label>
                    <div className="text-3xl font-bold text-foreground">{closingRate}%</div>
                  </div>
                </div>
                <Slider
                  value={[closingRate]}
                  onValueChange={(v) => setClosingRate(v[0])}
                  min={10}
                  max={80}
                  step={1}
                  className="py-4"
                />
              </div>

              {/* Monthly Appointments */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      Monthly Appts <TrendingUp className="w-4 h-4 text-primary" />
                    </label>
                    <div className="text-3xl font-bold text-foreground">{appointmentsPerMonth}</div>
                  </div>
                </div>
                <Slider
                  value={[appointmentsPerMonth]}
                  onValueChange={(v) => setAppointmentsPerMonth(v[0])}
                  min={5}
                  max={100}
                  step={1}
                  className="py-4"
                />
              </div>
            </Card>
          </div>

          {/* Results Column (Bento Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main Profit Card */}
            <Card className="md:col-span-2 p-8 bg-primary text-primary-foreground relative overflow-hidden group border-none">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                <DollarSign className="w-24 h-24" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Estimated Net Monthly Profit</p>
              <h3 className="text-5xl md:text-7xl font-black mt-2 mb-4 tabular-nums">
                {formatCurrency(displayedProfit)}
              </h3>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="bg-white/20 px-3 py-1 rounded-full">{roiMultiplier}x Return on Ad Spend</span>
                <span className="opacity-70">Calculated after system fees</span>
              </div>
            </Card>

            {/* Secondary Stat Cards */}
            <Card className="p-6 glass border-white/5 flex flex-col justify-between">
              <p className="text-muted-foreground text-sm font-medium uppercase">Annual Revenue Pace</p>
              <div className="mt-4">
                <div className="text-2xl font-bold">{formatCurrency(totalRevenue * 12)}</div>
                <div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-500" style={{ width: "70%" }} />
                </div>
              </div>
            </Card>

            <Card className="p-6 glass border-white/5 flex flex-col justify-between">
              <p className="text-muted-foreground text-sm font-medium uppercase">Closed Jobs / Mo</p>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-3xl font-bold text-primary">{closedDeals.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground italic">Target: {Math.ceil(closedDeals)}</div>
              </div>
            </Card>

            <Card className="p-6 glass border-white/5 md:col-span-2 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium uppercase">System Investment</p>
                <div className="text-xl font-semibold mt-1">{formatCurrency(systemInvestment)}</div>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-[10px] uppercase">Fixed CPA Model</p>
                <div className="text-primary font-bold">$47.00 / Lead</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Disclaimer / Mobile Hint */}
        <p className="mt-12 text-center text-xs text-muted-foreground/60 max-w-md mx-auto italic">
          *Calculations are based on historical client data. Results vary by market territory and team performance.
        </p>
      </div>
    </section>
  );
};

export default ROICalculator;
