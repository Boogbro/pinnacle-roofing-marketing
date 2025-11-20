import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

const CPA = 47; // Cost Per Appointment: $940 / 20 = $47

const ROICalculator = () => {
  // 1. Updated state variables
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(20);
  const [closingRate, setClosingRate] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(10000); // Set initial value to $10,000 based on screenshots

  const [displayedRevenue, setDisplayedRevenue] = useState(0);
  const [displayedROI, setDisplayedROI] = useState(0);

  // 2. Calculate results using new logic
  const closedDeals = (appointmentsPerMonth * closingRate) / 100;
  const totalRevenue = closedDeals * avgJobValue;

  // New Calculation: System Investment = Appointments * $47 (CPA)
  const systemInvestment = appointmentsPerMonth * CPA;
  const profit = totalRevenue - systemInvestment;
  const roiPercentage = Math.floor((profit / systemInvestment) * 100);

  // Animate numbers counting up
  useEffect(() => {
    // Round to nearest integer for display consistency with screenshots
    const targetRevenue = Math.round(totalRevenue);
    const targetROI = roiPercentage;

    const revenueStep = targetRevenue / 50;
    const roiStep = targetROI / 50;
    let currentRevenue = 0;
    let currentROI = 0;

    const interval = setInterval(() => {
      currentRevenue += revenueStep;
      currentROI += roiStep;

      if (currentRevenue >= targetRevenue) {
        currentRevenue = targetRevenue;
        currentROI = targetROI;
        clearInterval(interval);
      }

      setDisplayedRevenue(Math.floor(currentRevenue));
      setDisplayedROI(Math.floor(currentROI));
    }, 20);

    // Only re-run if the calculated targets change
    return () => clearInterval(interval);
  }, [appointmentsPerMonth, closingRate, avgJobValue, totalRevenue, roiPercentage]);

  // Helper for formatting large job value string
  const formatJobValue = (value: number) => {
    return value >= 50000 ? "$50,000+" : `$${value.toLocaleString()}`;
  };

  // Helper for formatting large investment value string
  const formatInvestment = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  // Custom Power Curve Scaling
  // Constraints: 0% = 500, 50% = 10,000, 100% = 50,000
  // Exponent calculated via: Math.log((10000 - 500) / (50000 - 500)) / Math.log(0.5) ≈ 2.38
  const minJobValue = 500;
  const maxJobValue = 50000;
  const curveExponent = 2.38;

  const toSliderValue = (value: number) => {
    // Inverse of the power function
    // returns 0 to 100
    return Math.pow((value - minJobValue) / (maxJobValue - minJobValue), 1 / curveExponent) * 100;
  };

  const fromSliderValue = (value: number) => {
    // Power function: Min + (Range) * (percent)^exponent
    const val = minJobValue + (maxJobValue - minJobValue) * Math.pow(value / 100, curveExponent);
    // Round to nearest 100 for cleaner numbers
    return Math.round(val / 100) * 100;
  };

  return (
    <section id="roi-calculator" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">See Your Potential ROI</h2>
          <p className="text-xl text-muted-foreground">Adjust the sliders to calculate your projected returns</p>
        </div>

        {/* Calculator Card */}
        <div className="glass rounded-3xl p-8 md:p-12 space-y-12">
          {/* Inputs */}
          <div className="space-y-8">
            {/* Average Job Value */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Average Job Value</label>
                <span className="text-2xl font-bold text-primary">{formatJobValue(avgJobValue)}</span>
              </div>
              <Slider
                value={[toSliderValue(avgJobValue)]}
                onValueChange={(value) => setAvgJobValue(fromSliderValue(value[0]))}
                min={0}
                max={100}
                step={1}
                className="cursor-pointer"
              />
            </div>

            {/* Closing Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Current Close Rate (%)</label>
                <span className="text-2xl font-bold text-primary">{closingRate}%</span>
              </div>
              <Slider
                value={[closingRate]}
                onValueChange={(value) => setClosingRate(value[0])}
                min={10}
                max={90} // Changed max from 80 to 90 based on screenshot range
                step={5}
                className="cursor-pointer"
              />
            </div>

            {/* Qualified Appointments/Month */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Qualified Appointments/Month</label>
                <span className="text-2xl font-bold text-primary">{appointmentsPerMonth}</span>
              </div>
              <Slider
                value={[appointmentsPerMonth]}
                onValueChange={(value) => setAppointmentsPerMonth(value[0])}
                min={5} // Changed min from 5000/1000 to 5 appointments
                max={50} // Changed max from 50000/1000 to 50 appointments
                step={1}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Results - Changed layout to 4 rows for consistency with the screenshots' data structure */}
          <div className="space-y-4">
            {/* Row 1: Monthly Qualified Appointments */}
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <div className="text-lg text-muted-foreground">Monthly Qualified Appointments</div>
              <div className="text-lg font-bold text-primary">{appointmentsPerMonth}</div>
            </div>

            {/* Row 2: Expected Closed Jobs */}
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <div className="text-lg text-muted-foreground">Expected Closed Jobs</div>
              <div className="text-lg font-bold text-primary">{closedDeals.toFixed(1)}</div>
            </div>

            {/* Row 3: Monthly Revenue */}
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <div className="text-lg text-muted-foreground">Monthly Revenue</div>
              <div className="text-lg font-bold text-primary">${totalRevenue.toLocaleString()}</div>
            </div>

            {/* Row 4: System Investment */}
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <div className="text-lg text-muted-foreground">System Investment</div>
              <div className="text-lg font-bold text-primary">{formatInvestment(systemInvestment)}</div>
            </div>

            {/* Final Row: Net Monthly Profit (Highlighted) */}
            <div className="flex justify-between items-center pt-4">
              <div className="text-2xl font-bold uppercase tracking-wider">Net Monthly Profit</div>
              <div className="text-2xl font-bold gradient-text animate-count-up">${profit.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
