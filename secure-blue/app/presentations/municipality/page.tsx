'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, ArrowLeft, Building2, Map, 
  ShieldAlert, Droplets, Activity, Radio
} from 'lucide-react';

export default function MunicipalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Civic Resource Sovereignty.",
      subtitle: "(Hardening the Municipal Grid)",
      visual: "hero",
      color: "text-blue-400",
      content: "Aging municipal water infrastructure is a financial and ecological liability. SECURE Blue provides the physical intelligence layer required to modernize civic resource management.",
      metric: "CIVIC_INFRASTRUCTURE_v5.0"
    },
    {
      id: 2,
      title: "Non-Revenue Water",
      subtitle: "The Multi-Million Dollar Bleed",
      visual: "nrw",
      color: "text-red-500",
      content: "Cities globally lose 20% to 30% of their treated water to 'Non-Revenue Water' (NRW)—leaks in the distribution grid before it ever reaches a meter. You are processing water that you cannot bill for.",
      metric: "THE_TAXPAYER_DEFICIT"
    },
    {
      id: 3,
      title: "Grid-Scale Telemetry",
      subtitle: "The LoRaWAN Civic Canopy",
      visual: "mesh",
      color: "text-cyan-400",
      content: "We bypass vulnerable cellular networks by deploying a proprietary LoRaWAN canopy across the city. This encrypted, low-power mesh connects thousands of flow nodes back to the municipal command center.",
      metric: "DECENTRALIZED_NETWORK"
    },
    {
      id: 4,
      title: "Catastrophe Avoidance",
      subtitle: "From Reactive to Autonomous",
      visual: "mitigation",
      color: "text-amber-500",
      content: "A catastrophic main break causes sinkholes, destroys public property, and triggers boil-water advisories. Edge-AI nodes detect the pressure anomaly and isolate the grid sector autonomously, preventing a leak from becoming a disaster.",
      metric: "ZERO_LATENCY_ISOLATION"
    },
    {
      id: 5,
      title: "Strategic A2W",
      subtitle: "Emergency Civic Generation",
      visual: "a2w",
      color: "text-indigo-400",
      content: "For critical infrastructure—hospitals, emergency response centers, and municipal hubs—SECURE Blue A2W units provide decentralized, off-grid water generation to ensure continuous operation during grid failures.",
      metric: "CRITICAL_REDUNDANCY"
    },
    {
      id: 6,
      title: "The Civic ROI",
      subtitle: "Self-Funding Modernization",
      visual: "roi",
      color: "text-emerald-400",
      content: "By eradicating NRW and reducing emergency truck dispatches, the SECURE Blue deployment funds itself. It is a politically defensible, financially sound modernization of the public trust.",
      metric: "TAXPAYER_VALUE_REALIZED"
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
      case "hero":
        return (
          <div className="relative w-full max-w-[400px] aspect-square rounded-[3rem] bg-zinc-900 border border-blue-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <Building2 className="h-40 w-40 text-blue-500 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-20" />
          </div>
        );
      case "nrw":
        return (
          <div className="w-full max-w-[400px] bg-zinc-950 border-2 border-red-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <ShieldAlert className="h-16 w-16 text-red-500 mb-6" />
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-mono text-zinc-500 border-b border-zinc-800 pb-2">
                <span>TREATED_VOLUME</span>
                <span>100%</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-300 border-b border-zinc-800 pb-2">
                <span>BILLED_VOLUME</span>
                <span className="text-emerald-500">72%</span>
              </div>
              <div className="flex justify-between text-xs font-mono font-bold border-b border-red-500/30 pb-2">
                <span className="text-red-400">NON_REVENUE_LOSS</span>
                <span className="text-red-500 animate-pulse">28%</span>
              </div>
            </div>
          </div>
        );
      case "mesh":
        return (
          <div className="relative w-full max-w-[400px] aspect-square bg-black border border-cyan-500/30 rounded-full flex items-center justify-center p-12">
            <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[ping_3s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-[ping_3s_linear_infinite_1s]" />
            <Radio className="h-24 w-24 text-cyan-500 relative z-10" />
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute h-3 w-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{
                  top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
                  left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
                }}
              />
            ))}
          </div>
        );
      case "roi":
        return (
           <div className="grid grid-cols-1 gap-4 w-full max-w-[400px]">
            <div className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div className="space-y-1">
                 <div className="text-[10px] font-mono text-zinc-500 uppercase">Est. Civic Savings</div>
                 <div className="text-emerald-500 font-bold text-2xl">NRW Eradication</div>
              </div>
              <Activity className="h-8 w-8 text-emerald-500/50" />
            </div>
            <div className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div className="space-y-1">
                 <div className="text-[10px] font-mono text-zinc-500 uppercase">Emergency Dispatches</div>
                 <div className="text-emerald-500 font-bold text-2xl">-65% Annually</div>
              </div>
              <Droplets className="h-8 w-8 text-emerald-500/50" />
            </div>
          </div>
        );
      default:
        return <Activity className="h-32 w-32 text-indigo-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col overflow-hidden">
      <header className="p-8 flex justify-between items-center z-10">
        <div className="font-bold tracking-tighter text-xl flex items-center gap-2">
          <div className="h-6 w-6 bg-blue-600 rounded-sm" />
          SECURE BLUE
        </div>
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : i < currentSlide ? 'w-4 bg-zinc-600' : 'w-4 bg-zinc-800'}`} />
          ))}
        </div>
        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          STATUS: CIVIC_GRID {"//"} SLIDE_0{currentSlide + 1}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div key={current.id} className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-6">
            <div className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${current.color}`}>
              {current.metric}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              {current.title}
            </h1>
            <h2 className="text-3xl md:text-4xl text-zinc-500 font-light italic">
              {current.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-8 py-4">
              {current.content}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {renderVisual()}
          </div>
        </div>
      </main>

      <footer className="p-8 flex justify-between items-center border-t border-zinc-900">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest">
          <ArrowLeft className="h-4 w-4" /> PREV_LOG
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors disabled:opacity-10 font-mono text-[10px] uppercase tracking-widest">
          NEXT_DECRYPT <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}