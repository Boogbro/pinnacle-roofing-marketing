import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [marketingSpend, setMarketingSpend] = useState(10000);
  const [closingRate, setClosingRate] = useState(30);
  const [avgJobValue, setAvgJobValue] = useState(5000);
  
  const [displayedRevenue, setDisplayedRevenue] = useState(0);
  const [displayedROI, setDisplayedROI] = useState(0);

  // Calculate results
  const appointments = Math.floor(marketingSpend / 250); // Assume $250 per appointment
  const closedDeals = Math.floor((appointments * closingRate) / 100);
  const totalRevenue = closedDeals * avgJobValue;
  const profit = totalRevenue - marketingSpend;
  const roiPercentage = Math.floor((profit / marketingSpend) * 100);

  // Animate numbers counting up
  useEffect(() => {
    const revenueStep = totalRevenue / 50;
    const roiStep = roiPercentage / 50;
    let currentRevenue = 0;
    let currentROI = 0;
    
    const interval = setInterval(() => {
      currentRevenue += revenueStep;
      currentROI += roiStep;
      
      if (currentRevenue >= totalRevenue) {
        currentRevenue = totalRevenue;
        currentROI = roiPercentage;
        clearInterval(interval);
      }
      
      setDisplayedRevenue(Math.floor(currentRevenue));
      setDisplayedROI(Math.floor(currentROI));
    }, 20);

    return () => clearInterval(interval);
  }, [marketingSpend, closingRate, avgJobValue, totalRevenue, roiPercentage]);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            See Your Potential ROI
          </h2>
          <p className="text-xl text-muted-foreground">
            Adjust the sliders to calculate your projected returns
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass rounded-3xl p-8 md:p-12 space-y-12">
          {/* Inputs */}
          <div className="space-y-8">
            {/* Marketing Spend */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Monthly Marketing Spend</label>
                <span className="text-2xl font-bold text-primary">
                  ${marketingSpend.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[marketingSpend]}
                onValueChange={(value) => setMarketingSpend(value[0])}
                min={5000}
                max={50000}
                step={1000}
                className="cursor-pointer"
              />
            </div>

            {/* Closing Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Closing Rate</label>
                <span className="text-2xl font-bold text-primary">{closingRate}%</span>
              </div>
              <Slider
                value={[closingRate]}
                onValueChange={(value) => setClosingRate(value[0])}
                min={10}
                max={80}
                step={5}
                className="cursor-pointer"
              />
            </div>

            {/* Average Job Value */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Average Job Value</label>
                <span className="text-2xl font-bold text-primary">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[avgJobValue]}
                onValueChange={(value) => setAvgJobValue(value[0])}
                min={1000}
                max={20000}
                step={500}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Appointments
              </div>
              <div className="text-4xl font-bold text-primary animate-count-up">
                {appointments}
              </div>
            </div>

            <div className="text-center space-y-2 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Total Revenue
              </div>
              <div className="text-4xl font-bold text-primary animate-count-up">
                ${displayedRevenue.toLocaleString()}
              </div>
            </div>

            <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 glow">
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold">
                ROI
              </div>
              <div className="text-4xl font-bold gradient-text animate-count-up">
                {displayedROI}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
