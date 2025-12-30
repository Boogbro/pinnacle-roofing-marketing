import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Info, TrendingUp, Target, DollarSign, Calculator } from "lucide-react";

// Original Math Constants
const CPA = 70;
const minJobValue = 500;
const maxJobValue = 50000;
const curveExponent = 2.38;

const ROICalculator = () => {
  // 1. Restored original state initialization
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(20);
  const [closingRate, setClosingRate] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(10000);

  const [displayedRevenue, setDisplayedRevenue] = useState(0);
  const [displayedProfit, setDisplayedProfit] = useState(0);
  const [displayedROI, setDisplayedROI] = useState(0);

  // 2. Restored Power Curve Scaling Logic
  const toSliderValue = (value: number) => {
    return Math.pow((value - minJobValue) / (maxJobValue - minJobValue), 1 / curveExponent) * 100;
  };

  const fromSliderValue = (value: number) => {
    const val = minJobValue + (maxJobValue - minJobValue) * Math.pow(value / 100, curveExponent);
    return Math.round(val / 100) * 100;
  };

  // 3. Original Calculation Engine
  const closedDeals = (appointmentsPerMonth * closingRate) / 100;
  const totalRevenue = closedDeals * avgJobValue;
  const systemInvestment = appointmentsPerMonth * CPA;
  const profit = totalRevenue - systemInvestment;
  const roiPercentage = Math.floor((profit / systemInvestment) * 100);

  useEffect(() => {
    const targetRevenue = Math.round(totalRevenue);
    const targetProfit = Math.round(profit);
    const targetROI = roiPercentage;

    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setDisplayedRevenue(Math.floor(targetRevenue * progress));
      setDisplayedProfit(Math.floor(targetProfit * progress));
      setDisplayedROI(Math.floor(targetROI * progress));
      if (frame === totalFrames) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [totalRevenue, profit, roiPercentage]);

  const formatCurrency = (val: number) => `$${Math.floor(val).toLocaleString()}`;

  const formatJobValue = (value: number) => {
    return value >= 50000 ? "$50,000+" : formatCurrency(value);
  };

  return (
    <section id="roi-calculator" className="py-24 px-4 md:px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-float" />

      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            <Calculator className="w-4 h-4" />
            ROI Projection Model
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            See Your <span className="gradient-text">Potential</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Adjust the sliders to calculate your projected returns based on our historical performance metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 md:p-8 glass border-white/10 space-y-10">
              {/* Average Job Value with Power Curve */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      Avg Job Value <Info className="w-3 h-3" />
                    </label>
                    <div className="text-3xl font-bold text-foreground">{formatJobValue(avgJobValue)}</div>
                  </div>
                </div>
                <Slider
                  value={[toSliderValue(avgJobValue)]}
                  onValueChange={(v) => setAvgJobValue(fromSliderValue(v[0]))}
                  min={0}
                  max={100}
                  step={1}
                  className="py-4"
                />
              </div>

              {/* Closing Rate - Step 5 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      Current Close Rate <Target className="w-4 h-4 text-primary" />
                    </label>
                    <div className="text-3xl font-bold text-foreground">{closingRate}%</div>
                  </div>
                </div>
                <Slider
                  value={[closingRate]}
                  onValueChange={(v) => setClosingRate(v[0])}
                  min={10}
                  max={90}
                  step={5}
                  className="py-4"
                />
              </div>

              {/* Monthly Appointments - Max 50 */}
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
                  max={50}
                  step={1}
                  className="py-4"
                />
              </div>
            </Card>
          </div>

          {/* Bento Results Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="md:col-span-2 p-8 bg-primary text-primary-foreground relative overflow-hidden group border-none">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                <DollarSign className="w-24 h-24" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Net Monthly Profit (Est.)</p>
              <h3 className="text-5xl md:text-7xl font-black mt-2 mb-4 tabular-nums">
                {formatCurrency(displayedProfit)}
              </h3>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="bg-white/20 px-3 py-1 rounded-full">{displayedROI}% Projected ROI</span>
                <span className="opacity-70 italic">Based on model variables</span>
              </div>
            </Card>

            <Card className="p-6 glass border-white/5 flex flex-col justify-between">
              <p className="text-muted-foreground text-sm font-medium uppercase">Monthly Revenue</p>
              <div className="mt-4">
                <div className="text-2xl font-bold">{formatCurrency(displayedRevenue)}</div>
                <div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-500" style={{ width: "65%" }} />
                </div>
              </div>
            </Card>

            <Card className="p-6 glass border-white/5 flex flex-col justify-between">
              <p className="text-muted-foreground text-sm font-medium uppercase">Expected Closed Jobs</p>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-3xl font-bold text-primary">{closedDeals.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground italic">Jobs/Month</div>
              </div>
            </Card>

            <Card className="p-6 glass border-white/5 md:col-span-2 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium uppercase">Est. Acquisition Cost</p>
                <div className="text-xl font-semibold mt-1">{formatCurrency(systemInvestment)}</div>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-[10px] uppercase">Model Baseline</p>
                <div className="text-primary font-bold">$70 per Appointment</div>
              </div>
            </Card>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/60 max-w-2xl mx-auto italic">
          *ROI calculations and appointment costs are estimates based on historical system performance. Individual
          results vary by territory and are not guaranteed.
        </p>
      </div>
    </section>
  );
};

export default ROICalculator;
