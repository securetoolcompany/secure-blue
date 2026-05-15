'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ShieldAlert, Droplets, Zap, Activity, Cpu, Globe } from 'lucide-react';

export default function HospitalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    id: 1,
    title: "Hardening the Asset.",
    subtitle: "(Portfolio-Scale Risk Mitigation)",
    visual: "skyline",
    color: "text-indigo-400",
    content: "For multi-family and commercial owners, water is the primary driver of insurance premium hikes. SECURE Blue is the physical layer fire-wall for your plumbing.",
    metric: "ASSET_PROTECTION_v3.2"
  },
  {
    id: 2,
    title: "Zero-Trust Plumbing",
    subtitle: "Autonomous Mitigation for High-Rises",
    visual: "valve",
    color: "text-red-500",
    content: "A single burst pipe on the 20th floor can destroy a dozen units in minutes. Our system identifies the pressure drop and kills the main line before the first floor gets wet.",
    metric: "MITIGATION_LATENCY: <50ms"
  },
  {
    id: 3,
    title: "Insurance Arbitrage",
    subtitle: "Converting Security into Capital",
    visual: "finance",
    color: "text-emerald-400",
    content: "By installing SECURE Blue hardware, portfolio owners can negotiate significant premium reductions. The system pays for itself purely through the reduction in liability risk.",
    metric: "INSURANCE_CREDIT_READY"
  },
  {
    id: 4,
    title: "Tenant Sovereignty",
    subtitle: "Sub-metering with Precision",
    visual: "os",
    color: "text-blue-500",
    content: "Stop guessing at usage. Provide tenants with accurate, real-time resource data and detect unit-level anomalies that traditional meters miss.",
    metric: "TELEMETRY_DATA_FIX"
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
    case "skyline":
      return (
        <div className="relative w-full max-w-[400px] aspect-video bg-zinc-900 rounded-xl border border-indigo-500/30 flex items-end justify-between p-8 overflow-hidden">
          {[40, 70, 50, 90, 60].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="w-8 bg-indigo-500/20 border-t-2 border-indigo-500" />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
        </div>
      );
    case "valve":
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 blur-3xl animate-pulse" />
          <ShieldAlert className="h-48 w-48 text-red-500 relative z-10" />
        </div>
      );
    default:
      return <Cpu className="h-32 w-32 text-zinc-800" />;
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