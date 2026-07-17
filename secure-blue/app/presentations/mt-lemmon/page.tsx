'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Droplets, 
  AlertTriangle, Radio, Home, Mountain, CloudRain, Calculator, X, CheckCircle2, Terminal, Cpu, Ban
} from 'lucide-react';
import Image from 'next/image';

// --- MT LEMMON HARDWARE DATABASE FOR POPUPS ---
const MT_LEMMON_PRODUCTS = {
  'leakstop': { 
    name: 'SECURE LeakStop', 
    tagline: 'Autonomous mitigation for catastrophic cabin leaks.', 
    specs: [
      'LoRaWAN wireless, battery-operated (10+ years autonomy)', 
      'Sub-50ms actuation latency upon anomaly trigger', 
      'Neutralizes the "Customer Leak" threat outlined in Stage 2'
    ], 
    image: '/images/products/leakstop/LeakStop.png', 
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/80',
    bgGlow: 'bg-blue-500/5',
    hoverBg: 'hover:bg-blue-500/10'
  },
  'a2w-machines': { 
    name: 'Air-2-Water Arrays', 
    tagline: 'Atmospheric generation for absolute grid independence.', 
    specs: [
      'Bypass Stage 2 restrictions on filling spas, tanks, and pools', 
      'Yields scale from 40 to 1,320+ Gallons/Day completely off-grid', 
      'Multi-Stage Sediment, Carbon, & UV-C Filtration'
    ], 
    image: '/images/products/atmospheric-water-generator/AirToWaterGenerator.png', 
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/80',
    bgGlow: 'bg-cyan-500/5',
    hoverBg: 'hover:bg-cyan-500/10'
  },
  'smart-irrigation': { 
    name: 'Telemetry Actuators', 
    tagline: 'Defend your landscaping without violating mandates.', 
    specs: [
      'Direct 9VDC/12VDC latching solenoid control', 
      'Hyper-precise, sensor-driven micro-drip deployment', 
      'Embedded time-control executes offline schedules automatically'
    ], 
    image: '/images/products/smart-irrigation/SmartIrrigation.jpg', 
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/80',
    bgGlow: 'bg-emerald-500/5',
    hoverBg: 'hover:bg-emerald-500/10'
  }
};

export default function MtLemmonPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState<keyof typeof MT_LEMMON_PRODUCTS | null>(null);

  // --- MT LEMMON CALCULATOR STATE ---
  const [annualInsurance, setAnnualInsurance] = useState(3800);
  const [insuranceDiscount, setInsuranceDiscount] = useState(12);
  const [avgMonthlyFine, setAvgMonthlyFine] = useState(250);
  const [monthlyInternet, setMonthlyInternet] = useState(85);
  const [monthsAway, setMonthsAway] = useState(8); // Typical seasonal cabin

  const slides = [
    {
      id: 1,
      title: "Mountain Sovereignty.",
      subtitle: "(Securing the Mt. Lemmon Estate)",
      visual: "hero",
      color: "text-blue-400",
      content: "As summer approaches and cabin usage increases, the mountain's water supply faces critical strain. SECURE Blue provides the autonomous infrastructure to protect your property and navigate strict district curtailments without sacrificing your lifestyle.",
      metric: "MT_LEMMON_BRIEFING"
    },
    {
      id: 2,
      title: "Stage 2 Curtailment",
      subtitle: "The Current Threat Landscape",
      visual: "directives",
      color: "text-amber-400",
      content: "The Mt Lemmon Water District requires voluntary reductions to prevent entering severe Stage 3 mandates. Irrigation, vehicle washing, misting systems, and filling storage tanks or spas are heavily restricted.",
      metric: "DISTRICT_MANDATES"
    },
    {
      id: 3,
      title: "The 'Customer Leak' Threat",
      subtitle: "Protecting the Vacant Cabin",
      visual: "individual",
      color: "text-blue-400",
      content: "Under Stage 2, undetected leaks are classified as severe water-intensive activities that threaten the entire district. Our LeakStop system autonomously monitors your cabin while you are away, shutting down the main line in milliseconds if a pipe fails.",
      metric: "AUTONOMOUS_MITIGATION",
      relatedProducts: ['leakstop']
    },
    {
      id: 4,
      title: "Bypassing Restrictions",
      subtitle: "Off-Grid Atmospheric Generation",
      visual: "community",
      color: "text-cyan-400",
      content: "Stage 2 prohibits the filling of storage tanks, spas, fountains, and ornamental pools using district water. By deploying our Air-to-Water generators, you create an independent, off-grid water supply to maintain your amenities safely and legally.",
      metric: "INDEPENDENT_SUPPLY",
      relatedProducts: ['a2w-machines']
    },
    {
      id: 5,
      title: "High-Altitude Network",
      subtitle: "The 'Peace of Mind' Canopy",
      visual: "lorawan",
      color: "text-purple-400",
      content: "Mountainous terrain makes cellular and Wi-Fi highly unreliable, and paying for year-round internet for a seasonal cabin is wasteful. Our proprietary LoRaWAN mesh network covers the mountain, keeping your LeakStop and sensors online 24/7, completely off-grid.",
      metric: "ZERO_DEPENDENCY_MESH"
    },
    {
      id: 6,
      title: "The Value of Compliance",
      subtitle: "A Performing Asset",
      visual: "calculator",
      color: "text-emerald-500",
      content: "Security isn't just an expense; it is a financial instrument. Calculate how insurance premium credits, avoiding Stage 2 violation fines, and cancelling seasonal internet allows SECURE Blue to pay for itself.",
      metric: "PERSONALIZED_ROI"
    }
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1)), [slides.length]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return; 
      if (activeProduct) {
        if (e.key === 'Escape') setActiveProduct(null);
        return; 
      }
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, activeProduct]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlide]);

  const current = slides[currentSlide];

  // --- MT LEMMON CALCULATOR LOGIC ---
  const calcInsuranceSavings = annualInsurance * (insuranceDiscount / 100);
  const calcFineAvoidance = avgMonthlyFine * (monthsAway > 3 ? 3 : monthsAway); // Assuming max 3 months of summer fines
  const calcSubscriptionSavings = monthsAway * monthlyInternet;
  const totalAnnualSavings = calcInsuranceSavings + calcFineAvoidance + calcSubscriptionSavings;

  const renderVisual = () => {
    switch (current.visual) {
      case "hero":
        return (
          <div className="w-full max-w-[400px] aspect-square bg-zinc-900 border border-blue-500/30 rounded-full p-8 relative overflow-hidden flex flex-col justify-center items-center shadow-[0_0_60px_rgba(37,99,235,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1)_0%,transparent_70%)]" />
            <Mountain className="h-24 w-24 text-blue-400 mb-6 relative z-10" />
            <div className="text-center relative z-10">
              <div className="text-2xl font-black tracking-tighter text-white uppercase">Mountain Estate</div>
              <div className="font-mono text-[10px] text-blue-300 tracking-widest mt-2">SECURE_BLUE_ACTIVE</div>
            </div>
          </div>
        );
      case "directives":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-6 flex items-start gap-4 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-5"><AlertTriangle className="h-24 w-24" /></div>
               <Ban className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
               <div className="relative z-10">
                 <div className="font-bold text-amber-500 text-sm mb-1 uppercase tracking-wider">Restricted Activities</div>
                 <div className="text-[10px] font-mono text-amber-200/70 space-y-1">
                   <p>• Irrigation of outdoor lawns/shrubs</p>
                   <p>• Drip irrigation or misting systems</p>
                   <p>• Filling of spas, fountains, pools</p>
                 </div>
               </div>
            </div>
            <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-6 flex items-start gap-4">
               <Droplets className="h-6 w-6 text-red-400 shrink-0 mt-1" />
               <div>
                 <div className="font-bold text-red-400 text-sm mb-1 uppercase tracking-wider">High Risk Violations</div>
                 <div className="text-[10px] font-mono text-red-200/70">
                   Customer leaks and unchecked water-intensive activities that threaten Stage 3 transition.
                 </div>
               </div>
            </div>
          </div>
        );
      case "individual":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border border-blue-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col justify-between">
             <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div className="font-mono text-xs text-blue-400 tracking-widest">CABIN_STATUS</div>
                <div className="text-xs font-bold text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full">UNOCCUPIED</div>
             </div>
             <div className="flex flex-col items-center justify-center flex-1 my-6 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="h-48 w-48 border border-blue-500 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                </div>
                <ShieldCheck className="h-16 w-16 text-blue-400 mb-4 relative z-10" />
                <div className="font-mono text-xs text-white bg-blue-900/50 px-4 py-2 rounded border border-blue-500/50 relative z-10">
                  MAIN LINE: SECURED
                </div>
             </div>
             <div className="text-center font-mono text-[10px] text-zinc-500">
               Total property isolation. Zero leak risk to district supply.
             </div>
          </div>
        );
      case "community":
        return (
           <div className="w-full max-w-[400px] bg-zinc-900 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <CloudRain className="h-48 w-48 text-cyan-500" />
             </div>
             <div className="relative z-10 space-y-8">
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Residential Spa / Tank</div>
                 <div className="text-3xl font-black text-cyan-400">FILLING ACTIVE</div>
                 <div className="h-2 w-full bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-2/3 bg-cyan-400 animate-pulse" />
                 </div>
               </div>
               <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="h-2 w-2 rounded-full bg-emerald-500" />
                   <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Compliance Check</div>
                 </div>
                 <div className="text-sm font-bold text-white">100% Off-Grid Supply</div>
                 <div className="text-xs text-zinc-500 mt-1">Zero municipal water drawn. Legal under Stage 2.</div>
               </div>
             </div>
           </div>
        );
      case "lorawan":
        return (
          <div className="w-full max-w-[400px] bg-zinc-900 border border-purple-500/40 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15)_0%,transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-4 border border-purple-500/40 rounded-full animate-[ping_3s_linear_infinite_1s]" />
                <Radio className="h-16 w-16 text-purple-400 relative z-10" />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-400">Mountain ISP Contract</span>
                  <span className="font-mono text-xs text-zinc-600 line-through">CANCELLED</span>
                </div>
                <div className="flex justify-between items-center bg-purple-950/30 p-4 rounded-xl border border-purple-500/30">
                  <span className="font-mono text-[10px] text-purple-300">LoRaWAN Canopy</span>
                  <span className="font-mono text-xs font-bold text-purple-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-purple-400 rounded-full animate-pulse" />
                    ONLINE 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case "calculator":
        return (
          <div className="w-full max-w-[440px] bg-zinc-900 border border-emerald-500/30 rounded-[2rem] p-6 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-3">
              <Calculator className="h-5 w-5 text-emerald-500" />
              <h3 className="font-mono text-xs tracking-widest text-white uppercase">Mountain Sovereignty ROI</h3>
            </div>

            {/* SLIDERS */}
            <div className="space-y-5 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>CABIN INSURANCE</span>
                    <span className="text-white">${annualInsurance.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="15000" step="100" 
                    value={annualInsurance} onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span title="LeakStop Discount">CREDIT %</span>
                    <span className="text-white">{insuranceDiscount}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="25" step="1" 
                    value={insuranceDiscount} onChange={(e) => setInsuranceDiscount(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                  <span>POTENTIAL MONTHLY FINE (STAGE 2)</span>
                  <span className="text-white">${avgMonthlyFine}</span>
                </div>
                <input 
                  type="range" min="50" max="1000" step="50" 
                  value={avgMonthlyFine} onChange={(e) => setAvgMonthlyFine(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>MONTHLY INTERNET</span>
                    <span className="text-white">${monthlyInternet}</span>
                  </div>
                  <input 
                    type="range" min="40" max="250" step="5" 
                    value={monthlyInternet} onChange={(e) => setMonthlyInternet(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>MONTHS VACANT</span>
                    <span className="text-white">{monthsAway}</span>
                  </div>
                  <input 
                    type="range" min="0" max="11" step="1" 
                    value={monthsAway} onChange={(e) => setMonthsAway(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* RESULTS */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Est. Ins. Credit</span>
                <span className="font-mono text-xs text-emerald-400">+${calcInsuranceSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Fine Avoidance (Summer)</span>
                <span className="font-mono text-xs text-amber-400">+${calcFineAvoidance.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Seasonal Wi-Fi Cut</span>
                <span className="font-mono text-xs text-purple-400">+${calcSubscriptionSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Total ROI</span>
                <span className="font-black text-lg text-emerald-500">${totalAnnualSavings.toLocaleString(undefined, {maximumFractionDigits:0})} / yr</span>
              </div>
            </div>
          </div>
        );
      default:
        return <Home className="h-32 w-32 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col overflow-hidden relative">
      
      {/* ---------------------------------------------------- */}
      {/* HARDWARE OVERLAY MODAL */}
      {/* ---------------------------------------------------- */}
      {activeProduct && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className={`bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl flex flex-col overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.8)]`}>
            
            <div className="p-6 flex justify-between items-center border-b border-zinc-900 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <Cpu className={`h-5 w-5 ${MT_LEMMON_PRODUCTS[activeProduct].color}`} />
                <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">HARDWARE_INSPECTION</span>
              </div>
              <button 
                onClick={() => setActiveProduct(null)} 
                className="text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-black tracking-tighter text-white mb-4">
                  {MT_LEMMON_PRODUCTS[activeProduct].name}
                </h2>
                <p className="text-xl text-zinc-400 font-light mb-8">
                  {MT_LEMMON_PRODUCTS[activeProduct].tagline}
                </p>
                
                <div className="space-y-4 mb-10">
                  {MT_LEMMON_PRODUCTS[activeProduct].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${MT_LEMMON_PRODUCTS[activeProduct].color}`} />
                      <span className="text-zinc-300 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto border-t border-zinc-800 pt-6 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase ${MT_LEMMON_PRODUCTS[activeProduct].color}`}>
                   <span className="relative flex h-2 w-2">
                     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 bg-current`}></span>
                   </span>
                   STATUS: READY FOR DEPLOYMENT
                </div>
              </div>

              <div className={`relative p-12 flex items-center justify-center border-l border-zinc-900 ${MT_LEMMON_PRODUCTS[activeProduct].bgGlow}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                <Image 
                  src={MT_LEMMON_PRODUCTS[activeProduct].image} 
                  alt={MT_LEMMON_PRODUCTS[activeProduct].name} 
                  width={400} height={400} 
                  className="relative z-10 object-contain drop-shadow-2xl" 
                />
              </div>

            </div>
          </div>
        </div>
      )}
      {/* ---------------------------------------------------- */}

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
          MT_LEMMON_GRID {"//"} SLIDE_0{currentSlide + 1}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
           <div className={`w-[800px] h-[800px] blur-[120px] rounded-full transition-colors duration-1000 ${
             currentSlide === 0 ? 'bg-blue-500' : 
             currentSlide === 1 ? 'bg-amber-500' : 
             currentSlide === 2 ? 'bg-blue-500' : 
             currentSlide === 3 ? 'bg-cyan-500' : 
             currentSlide === 4 ? 'bg-purple-500' : 
             currentSlide === 5 ? 'bg-emerald-500' : 'bg-blue-500'
           }`} />
        </div>

        <div key={current.id} className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10">
          
          <div className="flex flex-col justify-center">
            <div className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${current.color} mb-6`}>
              {current.metric}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-6">
              {current.title}
            </h1>
            <h2 className="text-3xl md:text-4xl text-zinc-400 font-light italic mb-6">
              {current.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed border-l-2 border-zinc-800 pl-8 py-4">
              {current.content}
            </p>
          </div>
          
          <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end gap-8 w-full">
            
            <div className="w-full flex justify-center lg:justify-end">
              {renderVisual()}
            </div>
            
            {current.relatedProducts && (
              <div className="w-full flex justify-center lg:justify-end animate-in fade-in slide-in-from-bottom-4 delay-300">
                <div className="w-full max-w-[400px]">
                  <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Available Interventions
                  </h3>
                  <div className="flex flex-col gap-3">
                    {current.relatedProducts.map((productKey) => {
                      const product = MT_LEMMON_PRODUCTS[productKey as keyof typeof MT_LEMMON_PRODUCTS];
                      return (
                        <button 
                          key={productKey}
                          onClick={() => setActiveProduct(productKey as keyof typeof MT_LEMMON_PRODUCTS)}
                          className={`group flex items-center justify-between gap-4 ${product.bgGlow} ${product.hoverBg} border ${product.border} ${product.hoverBorder} transition-all duration-300 p-4 rounded-xl w-full text-left shadow-lg`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors shadow-inner`}>
                              <Cpu className={`h-6 w-6 ${product.color}`} />
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg tracking-tight leading-none mb-1.5">{product.name}</div>
                              <div className={`font-mono text-[9px] uppercase tracking-widest ${product.color} leading-none`}>Inspect Architecture</div>
                            </div>
                          </div>
                          <ArrowRight className={`h-5 w-5 ${product.color} opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

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