'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ShieldAlert, Droplets, Zap, Activity, Cpu, Globe } from 'lucide-react';

export default function HospitalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    id: 1,
    title: "Precision Resource Sovereignty.",
    subtitle: "(The New Agricultural Standard)",
    visual: "canopy",
    color: "text-emerald-400",
    content: "Traditional irrigation is blind. SECURE Blue provides a high-fidelity 'canopy' of intelligence, ensuring every drop is accounted for and every acre is optimized.",
    metric: "INFRASTRUCTURE_AG_v2.1"
  },
  {
    id: 2,
    title: "The Saturation Gap",
    subtitle: "Eliminating the 40% Waste Margin",
    visual: "soil",
    color: "text-amber-500",
    content: "Over-saturation doesn't just waste water—it leaches nutrients and stresses crops. Our soil nodes provide real-time saturation telemetry to stop irrigation the moment the root zone is optimal.",
    metric: "PRECISION_LOGIC"
  },
  {
    id: 3,
    title: "Atmospheric Yield",
    subtitle: "A2W Generation in the Field",
    visual: "gen",
    color: "text-blue-400",
    content: "Decouple from municipal instability. Our industrial A2W units convert humidity into high-purity water, providing a decentralized backup for critical nursery and greenhouse operations.",
    metric: "RESOURCE_GENERATION"
  },
  {
    id: 4,
    title: "The LoRaWAN Mesh",
    subtitle: "Connectivity Across the Horizon",
    visual: "mesh",
    color: "text-cyan-400",
    content: "Standard Wi-Fi fails in the field. Our proprietary LoRaWAN canopy provides miles of encrypted coverage, connecting thousands of nodes without a single cellular subscription.",
    metric: "NETWORK_DOMINANCE"
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

  // --- VISUAL RENDERER ---
  const renderVisual = () => {
  switch (current.visual) {
    case "canopy":
      return (
        <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-emerald-500/30 bg-zinc-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_0%,transparent_70%)]" />
          <Globe className="h-32 w-32 text-emerald-500 animate-pulse" />
        </div>
      );
    case "mesh":
      return (
        <div className="grid grid-cols-3 gap-2 w-full max-w-[400px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
              <div className={`h-2 w-2 rounded-full ${i % 2 === 0 ? 'bg-cyan-500 animate-ping' : 'bg-zinc-700'}`} />
            </div>
          ))}
        </div>
      );
    default:
      return <div className="h-64 w-64 bg-zinc-900 rounded-3xl border border-zinc-800" />;
  }
};

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans flex flex-col overflow-hidden">
      {/* PROGRESS HEADER */}
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
        <div className="font-mono text-[10px] text-zinc-600">
           {/* Wrapping the // in braces fixes the comment error */}
          SLIDE_0{currentSlide + 1} {"//"} 0{slides.length}
        </div>
      </header>

      {/* CONTENT */}
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

      {/* CONTROLS */}
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