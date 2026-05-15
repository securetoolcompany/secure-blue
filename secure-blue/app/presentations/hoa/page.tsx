'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldAlert, Droplets, 
  Zap, WifiOff, Radio, Home, Bath, BatteryCharging
} from 'lucide-react';

export default function HOAPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "No One is Coming.",
      subtitle: "(The Era of Infinite Water is Over)",
      visual: "reality",
      color: "text-red-500",
      content: "The city isn't going to magically solve our infrastructure problems. Municipal pipelines are aging, and water bills are skyrocketing. As an HOA and as individual homeowners, your water security is now your responsibility.",
      metric: "THE_2026_REALITY"
    },
    {
      id: 2,
      title: "The Holistic Solution",
      subtitle: "Prevent. Conserve. Generate.",
      visual: "directives",
      color: "text-blue-400",
      content: "We don't just sell meters. SECURE Blue provides a holistic, three-pillar solution to residential water sovereignty. We stop waste, optimize usage, and create new supply out of thin air.",
      metric: "THE_THREE_DIRECTIVES"
    },
    {
      id: 3,
      title: "Directive 01: Prevent",
      subtitle: "Autonomous Leak Mitigation",
      visual: "leakstop",
      color: "text-amber-500",
      content: "A warning isn't enough when you aren't home. The LeakStop node doesn't just send an alert to your phone—it actively shuts off the main water line in under 50 milliseconds when an anomaly is detected.",
      metric: "ZERO_LATENCY_RESPONSE"
    },
    {
      id: 4,
      title: "Directive 02: Conserve",
      subtitle: "Smart Irrigation & Soil Telemetry",
      visual: "conserve",
      color: "text-emerald-400",
      content: "Stop watering the sidewalks. Common area landscaping and outdated irrigation timers are the biggest hidden drains on your HOA reserve funds. Our nodes ensure you only use the exact amount of water the soil needs.",
      metric: "PRECISION_EFFICIENCY"
    },
    {
      id: 5,
      title: "Directive 03: Generate",
      subtitle: "Grid-Free Bathrooms",
      visual: "generate",
      color: "text-cyan-400",
      content: "Toilets and showers are the biggest water sinks in any property. By integrating an A2W (Atmospheric Water) generator directly into your bathroom stack, we enable completely grid-free flushing and washing.",
      metric: "RESOURCE_CREATION"
    },
    {
      id: 6,
      title: "The LoRaWAN Advantage",
      subtitle: "Why We Don't Use Wi-Fi",
      visual: "lorawan",
      color: "text-purple-400",
      content: "Wi-Fi drops. Cellular subscriptions are expensive. We use a proprietary LoRaWAN canopy. When you leave your summer home, you can cancel your internet subscription and your property remains 100% protected and monitored.",
      metric: "MISSION_CRITICAL_MESH"
    }
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1)), [slides.length]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const current = slides[currentSlide];

  const renderVisual = () => {
    switch (current.visual) {
      case "reality":
        return (
          <div className="w-full max-w-[400px] aspect-square bg-zinc-950 border-2 border-red-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <ShieldAlert className="h-20 w-20 text-red-500 mb-8 mx-auto" />
            <div className="text-center space-y-4">
              <div className="text-3xl font-black tracking-tighter text-white">MUNICIPAL_RISK</div>
              <div className="font-mono text-xs text-red-400 bg-red-500/10 py-2 px-4 rounded-full inline-block">
                SYSTEM DEPENDENCY: CRITICAL
              </div>
            </div>
          </div>
        );
      case "directives":
        return (
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="bg-zinc-900 border-l-4 border-amber-500 rounded-r-xl p-6 flex items-center gap-6">
               <ShieldAlert className="h-8 w-8 text-amber-500" />
               <div>
                 <div className="font-black text-white text-xl">01. PREVENT</div>
                 <div className="text-[10px] font-mono text-zinc-400">Neutralize leaks instantly.</div>
               </div>
            </div>
            <div className="bg-zinc-900 border-l-4 border-emerald-500 rounded-r-xl p-6 flex items-center gap-6">
               <Droplets className="h-8 w-8 text-emerald-500" />
               <div>
                 <div className="font-black text-white text-xl">02. CONSERVE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Optimize outdoor usage.</div>
               </div>
            </div>
            <div className="bg-zinc-900 border-l-4 border-cyan-500 rounded-r-xl p-6 flex items-center gap-6">
               <Zap className="h-8 w-8 text-cyan-500" />
               <div>
                 <div className="font-black text-white text-xl">03. GENERATE</div>
                 <div className="text-[10px] font-mono text-zinc-400">Create off-grid supply.</div>
               </div>
            </div>
          </div>
        );
      case "leakstop":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-zinc-900 border border-amber-500/30 rounded-full flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0%,transparent_70%)]" />
             <div className="text-center z-10">
                <div className="text-amber-500 font-mono text-sm tracking-widest mb-2">SHUT-OFF LATENCY</div>
                <div className="text-7xl font-black text-white">&lt;50<span className="text-3xl text-amber-500">ms</span></div>
             </div>
             <div className="absolute inset-2 rounded-full border-t-4 border-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        );
      case "conserve":
        return (
           <div className="w-full max-w-[400px] bg-zinc-900 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
             <div className="flex justify-between items-end mb-6 border-b border-zinc-800 pb-4">
                <div>
                   <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">HOA Common Area</div>
                   <div className="text-2xl font-black text-white">Irrigation Spend</div>
                </div>
                <div className="text-emerald-500 font-bold text-3xl">-40%</div>
             </div>
             <div className="flex items-end gap-2 h-32 mt-8">
               {[100, 95, 105, 60, 55, 62, 58].map((h, i) => (
                 <div key={i} className={`flex-1 rounded-t-sm ${i > 2 ? 'bg-emerald-500' : 'bg-zinc-700'}`} style={{ height: `${h}%` }} />
               ))}
             </div>
             <div className="text-[10px] font-mono text-zinc-500 text-center mt-4">SECURE BLUE SOIL TELEMETRY ACTIVATED</div>
           </div>
        );
      case "generate":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border-[4px] border-zinc-900 rounded-3xl p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/30">
                 <BatteryCharging className="h-8 w-8 text-cyan-400" />
               </div>
               <div className="text-right">
                 <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">A2W Integration</div>
                 <div className="text-cyan-400 font-black">OFF-GRID_ACTIVE</div>
               </div>
            </div>
            <div className="flex justify-around items-center bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
               <div className="text-center">
                 <Bath className="h-10 w-10 text-white mx-auto mb-2" />
                 <div className="font-mono text-[10px] text-zinc-400">SHOWER</div>
               </div>
               <div className="h-12 w-px bg-zinc-800" />
               <div className="text-center">
                 <div className="h-10 w-10 text-white mx-auto mb-2 text-3xl flex items-center justify-center">🚽</div>
                 <div className="font-mono text-[10px] text-zinc-400">TOILET</div>
               </div>
            </div>
          </div>
        );
      case "lorawan":
        return (
          <div className="w-full max-w-[400px] space-y-4">
             {/* Wi-Fi Example */}
             <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between opacity-50 grayscale">
                <div className="flex items-center gap-4">
                   <div className="bg-zinc-800 p-3 rounded-lg"><WifiOff className="h-6 w-6 text-zinc-400" /></div>
                   <div>
                     <div className="font-bold text-white text-sm">Wi-Fi / Cellular</div>
                     <div className="text-[10px] font-mono text-zinc-500">Subscription Canceled</div>
                   </div>
                </div>
                <div className="text-xs font-mono text-red-500 border border-red-500/30 bg-red-500/10 px-2 py-1 rounded">OFFLINE</div>
             </div>
             {/* LoRaWAN Example */}
             <div className="bg-zinc-900 border border-purple-500/50 rounded-2xl p-6 flex items-center justify-between shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-500/20 to-transparent" />
                <div className="flex items-center gap-4 relative z-10">
                   <div className="bg-purple-500/20 border border-purple-500/50 p-3 rounded-lg">
                     <Radio className="h-6 w-6 text-purple-400" />
                   </div>
                   <div>
                     <div className="font-bold text-white text-sm">LoRaWAN Canopy</div>
                     <div className="text-[10px] font-mono text-zinc-400">Independent Mesh</div>
                   </div>
                </div>
                <div className="text-xs font-mono text-purple-400 border border-purple-400/50 bg-purple-400/10 px-2 py-1 rounded relative z-10 flex items-center gap-2">
                   <div className="h-1.5 w-1.5 bg-purple-400 rounded-full animate-pulse" />
                   SECURED
                </div>
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
        {/* Background Ambient Glow based on slide color */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
           <div className={`w-[800px] h-[800px] blur-[120px] rounded-full transition-colors duration-1000 ${
             currentSlide === 0 ? 'bg-red-500' : 
             currentSlide === 1 ? 'bg-blue-500' : 
             currentSlide === 2 ? 'bg-amber-500' : 
             currentSlide === 3 ? 'bg-emerald-500' : 
             currentSlide === 4 ? 'bg-cyan-500' : 'bg-purple-500'
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