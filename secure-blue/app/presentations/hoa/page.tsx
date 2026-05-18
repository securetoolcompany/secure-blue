'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Droplets, 
  Zap, Radio, Home, Bath, Sprout, Building, Calculator, X, CheckCircle2, Terminal, Cpu
} from 'lucide-react';
import Image from 'next/image';

// --- LOCAL HARDWARE DATABASE FOR POPUPS ---
const HOA_PRODUCTS = {
  'leakstop': { 
    name: 'SECURE LeakStop', 
    tagline: 'Autonomous mitigation for catastrophic leaks.', 
    specs: [
      'LoRaWAN wireless, battery-operated (10+ years autonomy)', 
      'Sub-50ms actuation latency upon anomaly trigger', 
      'Integrates directly with mainline plumbing or retrofit solenoids'
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
      'Yields scale from 40 to 1,320+ Gallons/Day', 
      'Multi-Stage Sediment, Carbon, & UV-C Filtration', 
      'Direct integration with off-grid Solar Matrix setups'
    ], 
    image: '/images/products/atmospheric-water-generator/AirToWaterGenerator.png', 
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/80',
    bgGlow: 'bg-cyan-500/5',
    hoverBg: 'hover:bg-cyan-500/10'
  },
  'smart-irrigation': { 
    name: 'Smart Irrigation Arrays', 
    tagline: 'Deploy water only when mathematically necessary.', 
    specs: [
      'Direct 9VDC/12VDC latching solenoid control', 
      'Bypasses the need to trench miles of copper wiring', 
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

export default function HOAPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // --- HARDWARE MODAL STATE ---
  const [activeProduct, setActiveProduct] = useState<keyof typeof HOA_PRODUCTS | null>(null);

  // --- REFINED CALCULATOR STATE ---
  const [annualInsurance, setAnnualInsurance] = useState(4500);
  const [insuranceDiscount, setInsuranceDiscount] = useState(12);
  const [monthlyWater, setMonthlyWater] = useState(180);
  const [monthlyInternet, setMonthlyInternet] = useState(85);
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
      metric: "PERSONAL_SOVEREIGNTY",
      relatedProducts: ['leakstop', 'a2w-machines']
    },
    {
      id: 4,
      title: "Community Resilience",
      subtitle: "Securing the Reserve Fund",
      visual: "community",
      color: "text-cyan-400",
      content: "Protect the beauty of your neighborhood without draining the HOA reserves. We deploy smart topography sensors to optimize common-area irrigation, and install industrial A2W machines to fill community cisterns completely off the grid.",
      metric: "SHARED_ASSET_PROTECTION",
      relatedProducts: ['smart-irrigation', 'a2w-machines']
    },
    {
      id: 5,
      title: "Enterprise Integration",
      subtitle: "Elevating Local Amenities",
      visual: "business",
      color: "text-purple-400",
      content: "Sovereignty extends to your community's local businesses and clubhouses. We equip restaurants and community centers with A2W generation, providing hyper-pure, atmospheric water for drinking fountains and premium cooking.",
      metric: "COMMERCIAL_UPGRADES",
      relatedProducts: ['a2w-machines']
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
      content: "Security isn't just an expense; it is a financial instrument. Use your actual property data to calculate how insurance premium credits, monthly utility reductions, and seasonal internet cancellations allow SECURE Blue to pay for itself.",
      metric: "PERSONALIZED_ROI"
    }
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1)), [slides.length]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return; 
      
      // If modal is open, intercept keys
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

  // --- REFINED CALCULATOR LOGIC ---
  const calcInsuranceSavings = annualInsurance * (insuranceDiscount / 100);
  const calcUtilitySavings = monthlyWater * 12 * 0.45;
  const calcSubscriptionSavings = monthsAway * monthlyInternet;
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
          <div className="w-full max-w-[440px] bg-zinc-900 border border-emerald-500/30 rounded-[2rem] p-6 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-3">
              <Calculator className="h-5 w-5 text-emerald-500" />
              <h3 className="font-mono text-xs tracking-widest text-white uppercase">Sovereignty Projection</h3>
            </div>

            {/* SLIDERS */}
            <div className="space-y-5 mb-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between font-mono text-[9px] text-zinc-400 mb-2">
                    <span>ANNUAL INSURANCE</span>
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
                    <span title="Industry avg discount for autonomous shut-off valves">CREDIT % (Avg: 12%)</span>
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
                  <span>MONTHLY WATER BILL</span>
                  <span className="text-white">${monthlyWater}</span>
                </div>
                <input 
                  type="range" min="50" max="800" step="10" 
                  value={monthlyWater} onChange={(e) => setMonthlyWater(Number(e.target.value))}
                  className="w-full accent-blue-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
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
                    <span>MONTHS AWAY</span>
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
                <span className="font-mono text-[10px] text-zinc-500">Water Conservation</span>
                <span className="font-mono text-xs text-blue-400">+${calcUtilitySavings.toLocaleString(undefined, {maximumFractionDigits:0})}/yr</span>
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
            
            {/* Modal Header & Close */}
            <div className="p-6 flex justify-between items-center border-b border-zinc-900 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <Cpu className={`h-5 w-5 ${HOA_PRODUCTS[activeProduct].color}`} />
                <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">HARDWARE_INSPECTION</span>
              </div>
              <button 
                onClick={() => setActiveProduct(null)} 
                className="text-zinc-500 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="grid md:grid-cols-2">
              
              {/* Product Info Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-black tracking-tighter text-white mb-4">
                  {HOA_PRODUCTS[activeProduct].name}
                </h2>
                <p className="text-xl text-zinc-400 font-light mb-8">
                  {HOA_PRODUCTS[activeProduct].tagline}
                </p>
                
                <div className="space-y-4 mb-10">
                  {HOA_PRODUCTS[activeProduct].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${HOA_PRODUCTS[activeProduct].color}`} />
                      <span className="text-zinc-300 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto border-t border-zinc-800 pt-6 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase ${HOA_PRODUCTS[activeProduct].color}`}>
                   <span className="relative flex h-2 w-2">
                     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 bg-current`}></span>
                   </span>
                   STATUS: READY FOR DEPLOYMENT
                </div>
              </div>

              {/* Hardware Render Side */}
              <div className={`relative p-12 flex items-center justify-center border-l border-zinc-900 ${HOA_PRODUCTS[activeProduct].bgGlow}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                <Image 
                  src={HOA_PRODUCTS[activeProduct].image} 
                  alt={HOA_PRODUCTS[activeProduct].name} 
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
          
          {/* LEFT COLUMN: Text Content */}
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
          
          {/* RIGHT COLUMN: Visuals & Intervention Cards */}
          <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end gap-8 w-full">
            
            {/* The Original Slide Graphic */}
            <div className="w-full flex justify-center lg:justify-end">
              {renderVisual()}
            </div>
            
            {/* MASSIVE HARDWARE TRIGGER CARDS */}
            {current.relatedProducts && (
              <div className="w-full flex justify-center lg:justify-end animate-in fade-in slide-in-from-bottom-4 delay-300">
                <div className="w-full max-w-[400px]">
                  <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Available Interventions
                  </h3>
                  <div className="flex flex-col gap-3">
                    {current.relatedProducts.map((productKey) => {
                      const product = HOA_PRODUCTS[productKey as keyof typeof HOA_PRODUCTS];
                      return (
                        <button 
                          key={productKey}
                          onClick={() => setActiveProduct(productKey as keyof typeof HOA_PRODUCTS)}
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