'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Droplets, 
  Zap, Radio, Tractor, Trees, Sprout, CloudRain, Calculator, X, CheckCircle2, Terminal, Cpu, Bug
} from 'lucide-react';
import Image from 'next/image';

// --- AGRICULTURE HARDWARE DATABASE FOR POPUPS ---
const AG_PRODUCTS = {
  'a2w-machines': { 
    name: 'Livestock A2W Arrays', 
    tagline: 'Independent water generation for remote pastures.', 
    specs: [
      'Extracts up to 1,320 Gallons/Day from atmospheric humidity', 
      'Solar Matrix integrated for 100% off-grid operation', 
      'Eliminates the need for expensive water hauling or well drilling'
    ], 
    image: '/images/products/atmospheric-water-generator/AirToWaterGenerator.png', 
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/80',
    bgGlow: 'bg-cyan-500/5',
    hoverBg: 'hover:bg-cyan-500/10'
  },
  'ag-weather': { 
    name: 'SenseCAP Weather Station', 
    tagline: 'Hyper-local micro-climate mapping.', 
    specs: [
      '7-in-1 tracking: Wind, Rain, Temp, Humidity, Pressure, Light, UV', 
      'Solar-powered macro-nodes with 10km LoRaWAN range', 
      'Vital for precision harvest windows and frost protection'
    ], 
    image: '/images/products/early-fire-detection/EmberSensePro.jpg', 
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/80',
    bgGlow: 'bg-amber-500/5',
    hoverBg: 'hover:bg-amber-500/10'
  },
  'leaf-wetness': { 
    name: 'Leaf Wetness Nodes', 
    tagline: 'Predict and prevent fungal outbreaks.', 
    specs: [
      'Biomimetic design simulates real leaf thermal resistance', 
      'Detects trace surface moisture that triggers fungal growth', 
      'Eliminates blind, calendar-based chemical spraying'
    ], 
    image: '/images/products/early-fire-detection/EmberSenseCompact.jpg', 
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/80',
    bgGlow: 'bg-blue-500/5',
    hoverBg: 'hover:bg-blue-500/10'
  },
  'smart-irrigation': { 
    name: 'Smart Irrigation Actuators', 
    tagline: 'Root-level moisture management.', 
    specs: [
      'Direct DC latching solenoid control for remote valves', 
      'Bypasses the need for miles of copper signal wiring', 
      'Automates cycles based on exact soil VWC and EC metrics'
    ], 
    image: '/images/products/smart-irrigation/SmartIrrigation.jpg', 
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/80',
    bgGlow: 'bg-emerald-500/5',
    hoverBg: 'hover:bg-emerald-500/10'
  }
};

export default function AgPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState<keyof typeof AG_PRODUCTS | null>(null);

  // --- AG-SPECIFIC CALCULATOR STATE ---
  const [totalAcres, setTotalAcres] = useState(250);
  const [waterCostPerAcre, setWaterCostPerAcre] = useState(120);
  const [cropValuePerAcre, setCropValuePerAcre] = useState(1800);
  const [lossPreventionPercent, setLossPreventionPercent] = useState(5); 

  const slides = [
    {
      id: 1,
      title: "Sovereign Yields.",
      subtitle: "(Autonomous Agricultural Control)",
      visual: "hero",
      color: "text-emerald-400",
      content: "Stop relying on drought-stricken creeks or hauling expensive water tanks to your remote perimeters. SECURE Blue provides the telemetric eyes and the generated resources to keep your livestock hydrated and your crops thriving miles from the grid.",
      metric: "AGRO_INDEPENDENCE"
    },
    {
      id: 2,
      title: "The Power of Prevention",
      subtitle: "Why react to crop loss?",
      visual: "directives",
      color: "text-emerald-400",
      content: "Nature is unpredictable, but your infrastructure shouldn't be. Our agricultural stack allows you to Prevent disease, Conserve water reserves, and Generate your own supply in the most remote perimeters of your acreage.",
      metric: "THE_AG_PILLARS"
    },
    {
      id: 3,
      title: "Livestock Sustainment",
      subtitle: "Hydration Beyond the Main",
      visual: "individual",
      color: "text-cyan-400",
      content: "Our A2W units generate thousands of gallons of potable water directly at the remote trough. By capturing atmospheric humidity and utilizing solar power, your herds thrive without the need for trenching expensive utility lines or relying on seasonal rainfall.",
      metric: "REMOTE_WATER_GENERATION",
      relatedProducts: ['a2w-machines']
    },
    {
      id: 4,
      title: "Precision Crop Defense",
      subtitle: "Defeating the Botanical Threat",
      visual: "community",
      color: "text-amber-400",
      content: "Detect frost and fungal-friendly moisture windows before they destroy your yield. We deploy biomass-mimicking sensors that accurately simulate the surface of a leaf, allowing for surgical intervention rather than blind chemical spraying.",
      metric: "YIELD_LOSS_MITIGATION",
      relatedProducts: ['leaf-wetness', 'ag-weather']
    },
    {
      id: 5,
      title: "Automated Management",
      subtitle: "Zone-Level Precision",
      visual: "business",
      color: "text-emerald-400",
      content: "Eliminate blind irrigation schedules that waste thousands in pumping costs. We deploy sub-surface LoRaWAN probes to monitor soil health at multiple depths, actuating your remote valves only when the crop mathematically requires it.",
      metric: "TELEMETRIC_IRRIGATION",
      relatedProducts: ['smart-irrigation']
    },
    {
      id: 6,
      title: "Farmland Canopy",
      subtitle: "The 'Miles of Range' Network",
      visual: "lorawan",
      color: "text-blue-400",
      content: "Wi-Fi and Cellular are useless in the back-forty. Our proprietary LoRaWAN canopy covers your entire acreage, ensuring that every sensor and every valve remains online 24/7 without a monthly data subscription per node.",
      metric: "PRIVATE_MESH_NETWORK"
    },
    {
      id: 7,
      title: "The Value of Yield",
      subtitle: "A Performing Asset",
      visual: "calculator",
      color: "text-emerald-500",
      content: "Agriculture is a game of margins. Calculate how reducing water waste, eliminating hauling costs, and preventing just 5% of botanical disease allows the SECURE Blue stack to pay for itself in a single harvest cycle.",
      metric: "YIELD_ROI_PROJECTION"
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

  // --- AG CALCULATOR LOGIC ---
  const annualWaterSavings = (totalAcres * waterCostPerAcre) * 0.35; // 30% avg irrigation reduction
  const yieldLossPrevention = (totalAcres * cropValuePerAcre) * (lossPreventionPercent / 100);
  const totalAnnualAgROI = annualWaterSavings + yieldLossPrevention;

  const renderVisual = () => {
    switch (current.visual) {
      case "hero":
        return (
          <div className="w-full max-w-[400px] aspect-square bg-zinc-900 border border-emerald-500/30 rounded-full p-8 relative overflow-hidden flex flex-col justify-center items-center shadow-[0_0_60px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_0%,transparent_70%)]" />
            <Tractor className="h-24 w-24 text-emerald-400 mb-6 relative z-10" />
            <div className="text-center relative z-10">
              <div className="text-2xl font-black tracking-tighter text-white uppercase">Yield Secured</div>
              <div className="font-mono text-[10px] text-emerald-300 tracking-widest mt-2">MONITORING_ACTIVE</div>
            </div>
          </div>
        );
      case "directives":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <Bug className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">PREVENT</div>
                 <div className="text-[10px] font-mono text-zinc-400">Neutralize frost and disease.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <Droplets className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">CONSERVE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Slash pumping and hauling costs.</div>
               </div>
            </div>
            <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-xl p-6 flex items-center gap-6">
               <Zap className="h-8 w-8 text-emerald-400" />
               <div>
                 <div className="font-bold text-white text-lg">GENERATE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Independent water at the trough.</div>
               </div>
            </div>
          </div>
        );
      case "individual":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between">
             <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div className="font-mono text-xs text-cyan-400 tracking-widest">REMOTE_LOG_07</div>
                <div className="text-xs font-bold text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full">NORTH PERIMETER</div>
             </div>
             <div className="flex justify-around items-center my-6">
                <div className="text-center">
                   <CloudRain className="h-10 w-10 text-cyan-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">A2W ACTIVE</div>
                </div>
                <div className="h-12 w-px bg-zinc-800" />
                <div className="text-center">
                   <Droplets className="h-10 w-10 text-cyan-400 mx-auto mb-2" />
                   <div className="font-mono text-[10px] text-white">TROUGH FULL</div>
                </div>
             </div>
             <div className="text-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
               Autonomous livestock sustainment online.
             </div>
          </div>
        );
      case "community":
        return (
           <div className="w-full max-w-[400px] bg-zinc-900 border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Sprout className="h-48 w-48 text-amber-500" />
             </div>
             <div className="relative z-10 space-y-8">
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Crop Health Status</div>
                 <div className="text-3xl font-black text-amber-400">PRECISION DEFENSE</div>
                 <div className="h-2 w-full bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-full bg-amber-400" />
                 </div>
               </div>
               <div>
                 <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Micro-Climate Telemetry</div>
                 <div className="text-xl font-bold text-white">Zero Frost Risk Detected</div>
                 <div className="text-sm text-zinc-500 mt-1">Leaf moisture baseline nominal.</div>
               </div>
             </div>
           </div>
        );
      case "business":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-zinc-950 border border-emerald-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center text-center">
            <Cpu className="h-20 w-20 text-emerald-400 mb-6" />
            <div className="text-xl font-black text-white mb-2">PRECISION ACTUATION</div>
            <div className="font-mono text-xs text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full">
              SOLENOID TAKEOVER ACTIVE
            </div>
            <div className="mt-6 text-sm text-zinc-400 px-4">
              Direct DC-latching control allows for total valve autonomy across thousands of remote acres.
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
                  <span className="font-mono text-[10px] text-zinc-400">Cellular / Wi-Fi Cost</span>
                  <span className="font-mono text-xs text-zinc-600 line-through">NOT REQUIRED</span>
                </div>
                <div className="flex justify-between items-center bg-blue-950/30 p-4 rounded-xl border border-blue-500/30">
                  <span className="font-mono text-[10px] text-blue-300">Agricultural Canopy</span>
                  <span className="font-mono text-xs font-bold text-blue-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-pulse" />
                    10KM RANGE ACTIVE
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
              <h3 className="font-mono text-xs tracking-widest text-white uppercase">Agricultural Yield ROI</h3>
            </div>

            <div className="space-y-5 mb-6">
              <div>
                <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                  <span>TOTAL ACREAGE</span>
                  <span className="text-white">{totalAcres} ACRES</span>
                </div>
                <input 
                  type="range" min="10" max="5000" step="10" 
                  value={totalAcres} onChange={(e) => setTotalAcres(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>WATER $/ACRE</span>
                    <span className="text-white">${waterCostPerAcre}</span>
                  </div>
                  <input 
                    type="range" min="50" max="1000" step="10" 
                    value={waterCostPerAcre} onChange={(e) => setWaterCostPerAcre(Number(e.target.value))}
                    className="w-full accent-blue-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>PREVENTION %</span>
                    <span className="text-white">{lossPreventionPercent}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="25" step="1" 
                    value={lossPreventionPercent} onChange={(e) => setLossPreventionPercent(Number(e.target.value))}
                    className="w-full accent-amber-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* RESULTS */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Water/Hauling Savings</span>
                <span className="font-mono text-xs text-blue-400">+${annualWaterSavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-mono text-[10px] text-zinc-500">Yield Loss Mitigation</span>
                <span className="font-mono text-xs text-amber-400">+${yieldLossPrevention.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Estimated ROI</span>
                <span className="font-black text-lg text-emerald-500">${totalAnnualAgROI.toLocaleString(undefined, {maximumFractionDigits:0})} / yr</span>
              </div>
            </div>
          </div>
        );
      default:
        return <Tractor className="h-32 w-32 text-emerald-500" />;
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
                <Cpu className={`h-5 w-5 ${AG_PRODUCTS[activeProduct].color}`} />
                <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">HARDWARE_INSPECTION</span>
              </div>
              <button onClick={() => setActiveProduct(null)} className="text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-black tracking-tighter text-white mb-4">{AG_PRODUCTS[activeProduct].name}</h2>
                <p className="text-xl text-zinc-400 font-light mb-8">{AG_PRODUCTS[activeProduct].tagline}</p>
                
                <div className="space-y-4 mb-10">
                  {AG_PRODUCTS[activeProduct].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${AG_PRODUCTS[activeProduct].color}`} />
                      <span className="text-zinc-300 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto border-t border-zinc-800 pt-6 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase ${AG_PRODUCTS[activeProduct].color}`}>
                   <span className="relative flex h-2 w-2">
                     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 bg-current`}></span>
                   </span>
                   STATUS: READY FOR DEPLOYMENT
                </div>
              </div>

              <div className={`relative p-12 flex items-center justify-center border-l border-zinc-900 ${AG_PRODUCTS[activeProduct].bgGlow}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                <Image src={AG_PRODUCTS[activeProduct].image} alt={AG_PRODUCTS[activeProduct].name} width={400} height={400} className="relative z-10 object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="p-8 flex justify-between items-center z-10 border-b border-zinc-900/50">
        <div className="font-bold tracking-tighter text-xl flex items-center gap-2">
          <div className="h-6 w-6 bg-emerald-600 rounded-sm" />
          SECURE BLUE
        </div>
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : i < currentSlide ? 'w-4 bg-zinc-600' : 'w-4 bg-zinc-800'}`} />
          ))}
        </div>
        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          AGRO_GRID {"//"} SLIDE_0{currentSlide + 1}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
           <div className={`w-[800px] h-[800px] blur-[120px] rounded-full transition-colors duration-1000 ${
             currentSlide === 0 ? 'bg-emerald-500' : 
             currentSlide === 1 ? 'bg-emerald-500' : 
             currentSlide === 2 ? 'bg-cyan-500' : 
             currentSlide === 3 ? 'bg-amber-500' : 
             currentSlide === 4 ? 'bg-emerald-500' : 
             currentSlide === 5 ? 'bg-blue-500' : 'bg-emerald-500'
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
                      const product = AG_PRODUCTS[productKey as keyof typeof AG_PRODUCTS];
                      return (
                        <button 
                          key={productKey}
                          onClick={() => setActiveProduct(productKey as keyof typeof AG_PRODUCTS)}
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
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-sm border border-emerald-500/20">
          NEXT_DECRYPT <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}