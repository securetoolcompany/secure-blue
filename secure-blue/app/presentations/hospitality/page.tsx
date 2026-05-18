'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Droplets, 
  Zap, Radio, Calculator, X, CheckCircle2, Terminal, Cpu, 
  Hotel, BedDouble, Trees, Users, Building
} from 'lucide-react';
import Image from 'next/image';

// --- HOSPITALITY HARDWARE DATABASE FOR POPUPS ---
const HOSPITALITY_PRODUCTS = {
  'leakstop': { 
    name: 'SECURE LeakStop', 
    tagline: 'Isolate compromised resort wings instantly.', 
    specs: [
      'DN80 (3") Mainline and stack-level isolation', 
      'Prevents cascading multi-floor room-revenue loss', 
      'Deep-indoor LoRaWAN penetration through concrete/steel'
    ], 
    image: '/images/products/leakstop/LeakStop.png', 
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/80',
    bgGlow: 'bg-blue-500/5',
    hoverBg: 'hover:bg-blue-500/10'
  },
  'smart-irrigation': { 
    name: 'Fairway Precision Nodes', 
    tagline: 'Pristine landscaping with zero municipal waste.', 
    specs: [
      'Zone-level soil telemetry across the entire 18-hole course', 
      'Halts watering autonomously hours before rain forecasts', 
      'Eliminates up to 45% of total resort irrigation costs'
    ], 
    image: '/images/products/smart-irrigation/SmartIrrigation.jpg', 
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/80',
    bgGlow: 'bg-emerald-500/5',
    hoverBg: 'hover:bg-emerald-500/10'
  },
  'ai-occupancy': { 
    name: 'AI Spatial Nodes', 
    tagline: 'Automate HVAC based on real-time guest dwell.', 
    specs: [
      'Time-of-Flight (ToF) people counting (99.8% accurate)', 
      'Anonymous spatial heat-mapping for lobbies and ballrooms', 
      'Automates empty-floor energy draw via direct BMS integration'
    ], 
    image: '/images/products/early-fire-detection/EmberSenseCompact.jpg', // Placeholder image until ToF render is ready
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-500/80',
    bgGlow: 'bg-purple-500/5',
    hoverBg: 'hover:bg-purple-500/10'
  },
  'a2w-machines': { 
    name: 'Resort A2W Arrays', 
    tagline: 'Hyper-pure water for premium spa amenities.', 
    specs: [
      'Extracts clinical-grade water from ambient resort humidity', 
      'Perfect for premium culinary, dining, and spa integration', 
      'Offsets massive municipal water draws in high-traffic zones'
    ], 
    image: '/images/products/atmospheric-water-generator/AirToWaterGenerator.png', 
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/80',
    bgGlow: 'bg-cyan-500/5',
    hoverBg: 'hover:bg-cyan-500/10'
  }
};

export default function HospitalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState<keyof typeof HOSPITALITY_PRODUCTS | null>(null);

  // --- HOSPITALITY CALCULATOR STATE ---
  const [totalRooms, setTotalRooms] = useState(300);
  const [avgDailyRate, setAvgDailyRate] = useState(350); // ADR
  const [monthlyWaterBill, setMonthlyWaterBill] = useState(8000);
  const [monthlyEnergyBill, setMonthlyEnergyBill] = useState(15000); 

  const slides = [
    {
      id: 1,
      title: "The Guest Standard.",
      subtitle: "(Zero-Downtime Infrastructure)",
      visual: "hero",
      color: "text-purple-400",
      content: "In a premium resort, a single pipe burst doesn't just damage a room; it creates a cascading revenue loss across floors. SECURE Blue ensures that your facility maintains 100% uptime through autonomous isolation and predictive energy monitoring.",
      metric: "HOSPITALITY_RESILIENCE"
    },
    {
      id: 2,
      title: "The Luxury of Prevention",
      subtitle: "Why react to lost revenue?",
      visual: "directives",
      color: "text-purple-400",
      content: "A 5-star experience requires invisible, flawless infrastructure. Our stack allows you to Prevent catastrophic floor damage, Conserve massive landscaping water reserves, and Automate lobby energy usage in real-time.",
      metric: "THE_HOSPITALITY_PILLARS"
    },
    {
      id: 3,
      title: "Asset Preservation",
      subtitle: "Defending the Revenue Stream",
      visual: "individual",
      color: "text-blue-400",
      content: "Protect your highest-value suites from the inside out. Our LeakStop nodes isolate specific room-stacks the millisecond an anomaly is detected, preventing a 5th-floor leak from ruining four floors of bookable inventory below it.",
      metric: "FLOOD_ISOLATION_PROTOCOL",
      relatedProducts: ['leakstop']
    },
    {
      id: 4,
      title: "Precision Landscaping",
      subtitle: "Golf-Course & Amenity Mastery",
      visual: "community",
      color: "text-emerald-400",
      content: "Stop paying for municipal water to irrigate greens during a rainstorm. We deploy underground LoRaWAN probes to monitor fairways at the root level, actuating your existing sprinklers only when mathematically required.",
      metric: "TELEMETRIC_IRRIGATION",
      relatedProducts: ['smart-irrigation']
    },
    {
      id: 5,
      title: "Operational Automation",
      subtitle: "Spatial Energy Optimization",
      visual: "business",
      color: "text-amber-400",
      content: "Resort lobbies, conference centers, and ballrooms are massive energy drains. We use AI stereo-vision nodes to monitor headcount anonymously, scaling your HVAC and lighting delivery in real-time based on actual guest usage.",
      metric: "FACILITY_AUTONOMY",
      relatedProducts: ['ai-occupancy', 'a2w-machines']
    },
    {
      id: 6,
      title: "Structural Penetration",
      subtitle: "The Deep-Indoor Network",
      visual: "lorawan",
      color: "text-indigo-400",
      content: "Hotels are fortresses of concrete and steel, creating dead-zones for standard Wi-Fi. Our proprietary sub-GHz LoRaWAN canopy punches through elevator shafts and utility closets, ensuring every valve and sensor remains online without taxing your guest Wi-Fi.",
      metric: "DEEP_INDOOR_MESH"
    },
    {
      id: 7,
      title: "The ROI of Uptime",
      subtitle: "Protecting the Bottom Line",
      visual: "calculator",
      color: "text-emerald-500",
      content: "Calculate how isolating a single multi-floor leak, optimizing massive golf course irrigation, and automating ballroom HVAC allows the SECURE Blue stack to generate compounding returns for your ownership group.",
      metric: "PORTFOLIO_ROI_PROJECTION"
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

  // --- HOSPITALITY CALCULATOR LOGIC ---
  // Assuming a major leak ruins 10 rooms for 5 days:
  const revenueProtected = (10 * avgDailyRate) * 5; 
  // 35% reduction in total property water via smart irrigation
  const annualWaterSavings = (monthlyWaterBill * 12) * 0.35; 
  // 15% reduction in total energy via AI HVAC optimization
  const annualEnergySavings = (monthlyEnergyBill * 12) * 0.15; 
  const totalAnnualHospROI = revenueProtected + annualWaterSavings + annualEnergySavings;

  const renderVisual = () => {
    switch (current.visual) {
      case "hero":
        return (
          <div className="w-full max-w-[400px] aspect-square bg-zinc-900 border border-purple-500/30 rounded-full p-8 relative overflow-hidden flex flex-col justify-center items-center shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1)_0%,transparent_70%)]" />
            <Hotel className="h-24 w-24 text-purple-400 mb-6 relative z-10" />
            <div className="text-center relative z-10">
              <div className="text-2xl font-black tracking-tighter text-white uppercase">Uptime Secured</div>
              <div className="font-mono text-[10px] text-purple-300 tracking-widest mt-2">GUEST_EXPERIENCE_NOMINAL</div>
            </div>
          </div>
        );
      case "directives":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-xl p-6 flex items-center gap-6">
               <ShieldCheck className="h-8 w-8 text-purple-400" />
               <div>
                 <div className="font-bold text-white text-lg">PREVENT</div>
                 <div className="text-[10px] font-mono text-zinc-400">Isolate stack leaks instantly.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-xl p-6 flex items-center gap-6">
               <Droplets className="h-8 w-8 text-purple-400" />
               <div>
                 <div className="font-bold text-white text-lg">CONSERVE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Zero golf course water waste.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-xl p-6 flex items-center gap-6">
               <Zap className="h-8 w-8 text-purple-400" />
               <div>
                 <div className="font-bold text-white text-lg">AUTOMATE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Scale HVAC based on occupancy.</div>
               </div>
            </div>
          </div>
        );
      case "individual":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border border-blue-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col justify-between">
             <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div className="font-mono text-xs text-blue-400 tracking-widest">TOWER_ALPHA</div>
                <div className="text-xs font-bold text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full">TIER 4 ISOLATED</div>
             </div>
             <div className="flex justify-around items-center my-6">
                <div className="text-center">
                   <BedDouble className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">ROOM 412 LEAK</div>
                </div>
                <div className="h-12 w-px bg-zinc-800" />
                <div className="text-center">
                   <ShieldCheck className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">STACK SECURED</div>
                </div>
             </div>
             <div className="text-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
               Floors 1-3 protected from cascading water damage.
             </div>
          </div>
        );
      case "community":
        return (
           <div className="w-full max-w-[400px] bg-zinc-900 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Trees className="h-48 w-48 text-emerald-500" />
             </div>
             <div className="relative z-10 space-y-8">
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Golf Course Fairways</div>
                 <div className="text-3xl font-black text-emerald-400">TELEMETRY ACTIVE</div>
                 <div className="h-2 w-full bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-full bg-emerald-400" />
                 </div>
               </div>
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Weather API Hook</div>
                 <div className="text-xl font-bold text-white">Rain Forecasted (72h)</div>
                 <div className="text-sm text-zinc-500 mt-1">All standard irrigation cycles suspended.</div>
               </div>
             </div>
           </div>
        );
      case "business":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-zinc-950 border border-amber-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col items-center justify-center text-center">
            <Users className="h-20 w-20 text-amber-400 mb-6" />
            <div className="text-xl font-black text-white mb-2">GRAND BALLROOM</div>
            <div className="font-mono text-xs text-amber-300 border border-amber-500/30 bg-amber-500/10 px-4 py-2 rounded-full">
              OCCUPANCY: 12 (LOW)
            </div>
            <div className="mt-6 text-sm text-zinc-400 px-4">
              AI Spatial Nodes have autonomously instructed the BMS to dial back HVAC delivery to 20%, saving facility energy.
            </div>
          </div>
        );
      case "lorawan":
        return (
          <div className="w-full max-w-[400px] bg-zinc-900 border border-indigo-500/40 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15)_0%,transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-4 border border-indigo-500/40 rounded-full animate-[ping_3s_linear_infinite_1s]" />
                <Building className="h-16 w-16 text-indigo-400 relative z-10" />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-400">Guest Wi-Fi Strain</span>
                  <span className="font-mono text-xs text-zinc-600 line-through">BYPASSED</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-950/30 p-4 rounded-xl border border-indigo-500/30">
                  <span className="font-mono text-[10px] text-indigo-300">Concrete Penetration</span>
                  <span className="font-mono text-xs font-bold text-indigo-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-pulse" />
                    SUB-GHZ ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case "calculator":
        return (
          <div className="w-full max-w-[440px] bg-zinc-900 border border-purple-500/30 rounded-[2rem] p-6 shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-3">
              <Calculator className="h-5 w-5 text-purple-500" />
              <h3 className="font-mono text-xs tracking-widest text-white uppercase">Resort ROI Projection</h3>
            </div>

            <div className="space-y-5 mb-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>TOTAL ROOMS</span>
                    <span className="text-white">{totalRooms}</span>
                  </div>
                  <input 
                    type="range" min="50" max="1000" step="10" 
                    value={totalRooms} onChange={(e) => setTotalRooms(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>AVG DAILY RATE</span>
                    <span className="text-white">${avgDailyRate}</span>
                  </div>
                  <input 
                    type="range" min="100" max="1500" step="50" 
                    value={avgDailyRate} onChange={(e) => setAvgDailyRate(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                  <span>MONTHLY WATER BILL</span>
                  <span className="text-white">${monthlyWaterBill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="1000" max="50000" step="1000" 
                  value={monthlyWaterBill} onChange={(e) => setMonthlyWaterBill(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                  <span>MONTHLY ENERGY BILL</span>
                  <span className="text-white">${monthlyEnergyBill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="2000" max="100000" step="1000" 
                  value={monthlyEnergyBill} onChange={(e) => setMonthlyEnergyBill(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

            </div>

            {/* RESULTS */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500" title="Assuming 10 rooms saved from 5 days downtime">Downtime Prevention</span>
                <span className="font-mono text-xs text-blue-400">+${revenueProtected.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500" title="35% drop via Smart Irrigation">Water/Irrigation Savings</span>
                <span className="font-mono text-xs text-emerald-400">+${annualWaterSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500" title="15% drop via AI Occupancy HVAC tracking">Energy Automation</span>
                <span className="font-mono text-xs text-amber-400">+${annualEnergySavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Estimated ROI</span>
                <span className="font-black text-lg text-emerald-500">${totalAnnualHospROI.toLocaleString(undefined, {maximumFractionDigits:0})} / yr</span>
              </div>
            </div>
          </div>
        );
      default:
        return <Hotel className="h-32 w-32 text-purple-500" />;
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
                <Cpu className={`h-5 w-5 ${HOSPITALITY_PRODUCTS[activeProduct].color}`} />
                <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">HARDWARE_INSPECTION</span>
              </div>
              <button onClick={() => setActiveProduct(null)} className="text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-black tracking-tighter text-white mb-4">{HOSPITALITY_PRODUCTS[activeProduct].name}</h2>
                <p className="text-xl text-zinc-400 font-light mb-8">{HOSPITALITY_PRODUCTS[activeProduct].tagline}</p>
                
                <div className="space-y-4 mb-10">
                  {HOSPITALITY_PRODUCTS[activeProduct].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${HOSPITALITY_PRODUCTS[activeProduct].color}`} />
                      <span className="text-zinc-300 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto border-t border-zinc-800 pt-6 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase ${HOSPITALITY_PRODUCTS[activeProduct].color}`}>
                   <span className="relative flex h-2 w-2">
                     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 bg-current`}></span>
                   </span>
                   STATUS: READY FOR DEPLOYMENT
                </div>
              </div>

              <div className={`relative p-12 flex items-center justify-center border-l border-zinc-900 ${HOSPITALITY_PRODUCTS[activeProduct].bgGlow}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                <Image src={HOSPITALITY_PRODUCTS[activeProduct].image} alt={HOSPITALITY_PRODUCTS[activeProduct].name} width={400} height={400} className="relative z-10 object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="p-8 flex justify-between items-center z-10 border-b border-zinc-900/50">
        <div className="font-bold tracking-tighter text-xl flex items-center gap-2">
          <div className="h-6 w-6 bg-purple-600 rounded-sm" />
          SECURE BLUE
        </div>
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : i < currentSlide ? 'w-4 bg-zinc-600' : 'w-4 bg-zinc-800'}`} />
          ))}
        </div>
        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          HOSPITALITY_GRID {"//"} SLIDE_0{currentSlide + 1}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
           <div className={`w-[800px] h-[800px] blur-[120px] rounded-full transition-colors duration-1000 ${
             currentSlide === 0 ? 'bg-purple-500' : 
             currentSlide === 1 ? 'bg-purple-500' : 
             currentSlide === 2 ? 'bg-blue-500' : 
             currentSlide === 3 ? 'bg-emerald-500' : 
             currentSlide === 4 ? 'bg-amber-500' : 
             currentSlide === 5 ? 'bg-indigo-500' : 'bg-emerald-500'
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
                  <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Telemetric Interventions
                  </h3>
                  <div className="flex flex-col gap-3">
                    {current.relatedProducts.map((productKey) => {
                      const product = HOSPITALITY_PRODUCTS[productKey as keyof typeof HOSPITALITY_PRODUCTS];
                      return (
                        <button 
                          key={productKey}
                          onClick={() => setActiveProduct(productKey as keyof typeof HOSPITALITY_PRODUCTS)}
                          className={`group flex items-center justify-between gap-4 ${product.bgGlow} ${product.hoverBg} border ${product.border} ${product.hoverBorder} transition-all duration-300 p-4 rounded-xl w-full text-left shadow-lg`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors shadow-inner`}>
                              <Cpu className={`h-6 w-6 ${product.color}`} />
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg tracking-tight leading-none mb-1.5">{product.name}</div>
                              <div className={`font-mono text-[9px] uppercase tracking-widest ${product.color} leading-none`}>Briefing Required</div>
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
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest bg-purple-500/10 px-4 py-2 rounded-sm border border-purple-500/20">
          NEXT_DECRYPT <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}