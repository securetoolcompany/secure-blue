'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Droplets, 
  Zap, Radio, Home, Bath, Sprout, Building, Calculator
} from 'lucide-react';

export default function HOAPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- CALCULATOR STATE ---
  const [propertyValue, setPropertyValue] = useState(1200000);
  const [monthlyWater, setMonthlyWater] = useState(180);
  const [monthsAway, setMonthsAway] = useState(5);

  const slides = [
    {
      id: 1,
      title: "Sovereign Living.",
      subtitle: "(Protecting Your Legacy & Lifestyle)",
      visual: "hero",
      color: "text-blue-400",
      content: "You shouldn't have to wait on the city to protect your property or manage your community's resources. SECURE Blue empowers you to take control of your water infrastructure, ensuring peace of mind whether you are at home or away for the season.",
      metric: "INDEPENDENT_INFRASTRUCTURE"
    },
    {
      id: 2,
      title: "The Power of Action",
      subtitle: "Why wait for the government?",
      visual: "directives",
      color: "text-emerald-400",
      content: "Bureaucracy moves slowly, but your community doesn't have to. We provide a holistic ecosystem that allows you to Prevent damage, Conserve shared resources, and Generate your own supply—individually, and as a community.",
      metric: "THE_THREE_PILLARS"
    },
    {
      id: 3,
      title: "Individual Independence",
      subtitle: "Protecting the Estate",
      visual: "individual",
      color: "text-amber-400",
      content: "Secure your home from the inside out. Our LeakStop system autonomously shuts off your water if a pipe fails while you're away. Meanwhile, our A2W bathroom retrofits create off-grid water for your showers and toilets, removing your home's biggest utility burdens.",
      metric: "PERSONAL_SOVEREIGNTY"
    },
    {
      id: 4,
      title: "Community Resilience",
      subtitle: "Securing the Reserve Fund",
      visual: "community",
      color: "text-cyan-400",
      content: "Protect the beauty of your neighborhood without draining the HOA reserves. We deploy smart topography sensors to optimize common-area irrigation, and install industrial A2W machines to fill community cisterns completely off the grid.",
      metric: "SHARED_ASSET_PROTECTION"
    },
    {
      id: 5,
      title: "Enterprise Integration",
      subtitle: "Elevating Local Amenities",
      visual: "business",
      color: "text-purple-400",
      content: "Sovereignty extends to your community's local businesses and clubhouses. We equip restaurants and community centers with A2W generation, providing hyper-pure, atmospheric water for drinking fountains and premium cooking.",
      metric: "COMMERCIAL_UPGRADES"
    },
    {
      id: 6,
      title: "Unbreakable Connection",
      subtitle: "The 'Peace of Mind' Network",
      visual: "lorawan",
      color: "text-blue-400",
      content: "When you lock up the house for the season, you shouldn't have to pay for an internet subscription just to keep your security sensors online. Our proprietary LoRaWAN canopy covers the entire community without Wi-Fi, keeping your home monitored 24/7.",
      metric: "ZERO_DEPENDENCY_MESH"
    },
    {
      id: 7,
      title: "The Value of Sovereignty",
      subtitle: "A Performing Asset",
      visual: "calculator",
      color: "text-emerald-500",
      content: "Security isn't just an expense; it is a financial instrument. By combining insurance premium credits, monthly utility reductions, and seasonal internet subscription cancellations, SECURE Blue effectively pays you to protect your own home.",
      metric: "RETURN_ON_INVESTMENT"
    }
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1)), [slides.length]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // UX FIX: If they are interacting with a slider, don't change the slide!
      if (document.activeElement?.tagName === 'INPUT') return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlide]);

  const current = slides[currentSlide];

  // --- CALCULATOR LOGIC ---
  const calcInsuranceSavings = propertyValue * 0.005 * 0.12; // Assuming ~0.5% premium, 12% savings credit
  const calcUtilitySavings = monthlyWater * 12 * 0.45; // Assuming 45% reduction via A2W & Smart Irrigation
  const calcSubscriptionSavings = monthsAway * 85; // Assuming $85/mo for canceled seasonal internet
  const totalAnnualSavings = calcInsuranceSavings + calcUtilitySavings + calcSubscriptionSavings;

  const renderVisual = () => {
    switch (current.visual) {
      case "hero":
        return (
          <div className="w-full max-w-[400px] aspect-square bg-zinc-900 border border-blue-500/30 rounded-full p-8 relative overflow-hidden flex flex-col justify-center items-center shadow-[0_0_60px_rgba(37,99,235,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1)_0%,transparent_70%)]" />
            <ShieldCheck className="h-24 w-24 text-blue-400 mb-6 relative z-10" />
            <div className="text-center relative z-10">
              <div className="text-2xl font-black tracking-tighter text-white uppercase">Asset Secured</div>
              <div className="font-mono text-[10px] text-blue-300 tracking-widest mt-2">PROTECTION_ACTIVE</div>
            </div>
          </div>
        );
      case "directives":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <ShieldCheck className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">PREVENT</div>
                 <div className="text-[10px] font-mono text-zinc-400">Protect the estate from damage.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <Droplets className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">CONSERVE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Optimize shared community funds.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <Zap className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">GENERATE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Create your own independent supply.</div>
               </div>
            </div>
          </div>
        );
      case "individual":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border border-amber-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col justify-between">
             <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div className="font-mono text-xs text-amber-400 tracking-widest">RESIDENCE_STATUS</div>
                <div className="text-xs font-bold text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full">AWAY FOR SEASON</div>
             </div>
             <div className="flex justify-around items-center my-6">
                <div className="text-center">
                   <Bath className="h-10 w-10 text-amber-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">A2W ACTIVE</div>
                </div>
                <div className="h-12 w-px bg-zinc-800" />
                <div className="text-center">
                   <ShieldCheck className="h-10 w-10 text-amber-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">LEAKSTOP ON</div>
                </div>
             </div>
             <div className="text-center font-mono text-[10px] text-zinc-500">
               Total property isolation and protection established.
             </div>
          </div>
        );
      case "community":
        return (
           <div className="w-full max-w-[400px] bg-zinc-900 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Sprout className="h-48 w-48 text-cyan-500" />
             </div>
             <div className="relative z-10 space-y-8">
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Cistern Reserves</div>
                 <div className="text-3xl font-black text-cyan-400">100% OFF-GRID</div>
                 <div className="h-2 w-full bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-full bg-cyan-400" />
                 </div>
               </div>
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Common Area Irrigation</div>
                 <div className="text-xl font-bold text-white">Optimized via Telemetry</div>
                 <div className="text-sm text-zinc-500 mt-1">Zero municipal water drawn today.</div>
               </div>
             </div>
           </div>
        );
      case "business":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-zinc-950 border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col items-center justify-center text-center">
            <Building className="h-20 w-20 text-purple-400 mb-6" />
            <div className="text-xl font-black text-white mb-2">CLUBHOUSE & DINING</div>
            <div className="font-mono text-xs text-purple-300 border border-purple-500/30 bg-purple-500/10 px-4 py-2 rounded-full">
              A2W PURIFICATION ACTIVE
            </div>
            <div className="mt-6 text-sm text-zinc-400 px-4">
              Providing hyper-pure, atmospheric water for community amenities and premium culinary use.
            </div>
          </div>
        );
      case "lorawan":
        return (
          <div className="w-full max-w-[400px] bg-zinc-900 border border-blue-500/40 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15)_0%,transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-4 border border-blue-500/40 rounded-full animate-[ping_3s_linear_infinite_1s]" />
                <Radio className="h-16 w-16 text-blue-400 relative z-10" />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-400">Wi-Fi Dependency</span>
                  <span className="font-mono text-xs text-zinc-600 line-through">REQUIRED</span>
                </div>
                <div className="flex justify-between items-center bg-blue-950/30 p-4 rounded-xl border border-blue-500/30">
                  <span className="font-mono text-[10px] text-blue-300">LoRaWAN Canopy</span>
                  <span className="font-mono text-xs font-bold text-blue-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-pulse" />
                    ONLINE 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case "calculator":
        return (
          <div className="w-full max-w-[420px] bg-zinc-900 border border-emerald-500/30 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col">
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <Calculator className="h-6 w-6 text-emerald-500" />
              <h3 className="font-mono text-sm tracking-widest text-white uppercase">Sovereignty Projection</h3>
            </div>

            {/* SLIDERS */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between font-mono text-[10px] text-zinc-400 mb-2">
                  <span>ESTATE VALUE</span>
                  <span className="text-white">${propertyValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="500000" max="5000000" step="50000" 
                  value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] text-zinc-400 mb-2">
                  <span>MONTHLY WATER BILL</span>
                  <span className="text-white">${monthlyWater}</span>
                </div>
                <input 
                  type="range" min="50" max="800" step="10" 
                  value={monthlyWater} onChange={(e) => setMonthlyWater(Number(e.target.value))}
                  className="w-full accent-blue-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] text-zinc-400 mb-2">
                  <span>MONTHS AWAY FROM HOME</span>
                  <span className="text-white">{monthsAway} Months</span>
                </div>
                <input 
                  type="range" min="0" max="11" step="1" 
                  value={monthsAway} onChange={(e) => setMonthsAway(Number(e.target.value))}
                  className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* RESULTS */}
            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Est. Ins. Credit</span>
                <span className="font-mono text-xs text-emerald-400">+${calcInsuranceSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Water Conservation</span>
                <span className="font-mono text-xs text-blue-400">+${calcUtilitySavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Seasonal Wi-Fi Cut</span>
                <span className="font-mono text-xs text-purple-400">+${calcSubscriptionSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Total ROI</span>
                <span className="font-black text-xl text-emerald-500">${totalAnnualSavings.toLocaleString(undefined, {maximumFractionDigits:0})} / yr</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">*Calculations based on 2026 industry averages.</span>
            </div>
          </div>
        );
      default:
        return <Home className="h-32 w-32 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col overflow-hidden">
      <header className="p-8 flex justify-between items-center z-10 border-b border-zinc-900/50">
        <div className="font-bold tracking-tighter text-xl flex items-center gap-2">
          <div className="h-6 w-6 bg-blue-600 rounded-sm" />
          SECURE BLUE
        </div>
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : i < currentSlide ? 'w-4 bg-zinc-600' : 'w-4 bg-zinc-800'}`} />
          ))}
        </div>
        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          RESIDENTIAL_GRID {"//"} SLIDE_0{currentSlide + 1}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
           <div className={`w-[800px] h-[800px] blur-[120px] rounded-full transition-colors duration-1000 ${
             currentSlide === 0 ? 'bg-blue-500' : 
             currentSlide === 1 ? 'bg-emerald-500' : 
             currentSlide === 2 ? 'bg-amber-500' : 
             currentSlide === 3 ? 'bg-cyan-500' : 
             currentSlide === 4 ? 'bg-purple-500' : 
             currentSlide === 5 ? 'bg-blue-500' : 'bg-emerald-500'
           }`} />
        </div>

        <div key={current.id} className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10">
          <div className="space-y-6">
            <div className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${current.color}`}>
              {current.metric}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              {current.title}
            </h1>
            <h2 className="text-3xl md:text-4xl text-zinc-400 font-light italic">
              {current.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed border-l-2 border-zinc-800 pl-8 py-4">
              {current.content}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {renderVisual()}
          </div>
        </div>
      </main>

      <footer className="p-8 flex justify-between items-center border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md z-10">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest">
          <ArrowLeft className="h-4 w-4" /> PREV_LOG
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-sm border border-blue-500/20">
          NEXT_DECRYPT <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}