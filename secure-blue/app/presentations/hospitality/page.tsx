'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ShieldAlert, Droplets, Zap, Activity, Cpu } from 'lucide-react';

export default function HospitalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "The Blind Spot of Luxury.",
      subtitle: "(Resource Sovereignty for Resorts)",
      visual: "hero",
      color: "text-blue-400",
      content: "Water is the most unmanaged risk in hospitality. Why are the world's most expensive properties still relying on analog dials and reactive maintenance?",
      metric: "OPERATIONAL_OVERWATCH_v1.0"
    },
    {
      id: 2,
      title: "The Silent Bleed",
      subtitle: "Detection Latency = Financial Loss",
      visual: "problem",
      color: "text-red-500",
      content: "Typical 500-key properties lose 150,000 gallons per month to undetected micro-leaks. That is thousands of dollars flushed away before a human ever notices.",
      metric: "THE_COST_OF_SILENCE"
    },
    {
      id: 3,
      title: "Asset Protection",
      subtitle: "Hardening the Physical Layer",
      visual: "protection",
      color: "text-amber-400",
      content: "Water damage is the #1 cause of insurance claims. SECURE Blue converts your plumbing from a liability into a hardened, monitored asset.",
      metric: "RISK_MITIGATION"
    },
    {
      id: 4,
      title: "Autonomous Response",
      subtitle: "Milliseconds Matter.",
      visual: "automation",
      color: "text-cyan-400",
      content: "When our edge-AI detects an anomaly, it doesn't send an email—it triggers a hardware shut-off. Total mitigation happens in under 50 milliseconds.",
      metric: "ZERO_LATENCY_RESPONSE"
    },
    {
      id: 5,
      title: "SECURE Blue OS",
      subtitle: "The Property Command Center",
      visual: "os",
      color: "text-indigo-400",
      content: "A unified, encrypted dashboard for every valve, sensor, and generator on your property. Real-time telemetry meets industrial-grade control.",
      metric: "COMMAND_LOGIC"
    },
    {
      id: 6,
      title: "The Math of Recovery",
      subtitle: "Self-Amortizing Infrastructure",
      visual: "roi",
      color: "text-emerald-400",
      content: "Between utility savings, labor reduction, and insurance premium credits, SECURE Blue systems typically pay for themselves in 8 to 14 months.",
      metric: "OPEX_RECOVERY"
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
      case "hero":
        return (
          <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <div className="text-center z-10 p-8 border border-white/5 bg-black/40 backdrop-blur-md rounded-xl">
               <div className="text-5xl mb-4 text-blue-500"><Droplets className="h-16 w-16 mx-auto" /></div>
               <div className="font-mono text-xs text-blue-300">SYSTEM_AUDIT.INIT()</div>
            </div>
          </div>
        );
      case "problem":
        return (
          <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl animate-pulse" />
              <ShieldAlert className="h-48 w-48 text-red-500 relative z-10" />
            </div>
          </div>
        );
      case "roi":
        return (
          <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-zinc-900 border border-emerald-500/20 rounded-2xl flex flex-col items-center justify-center p-4">
                <div className="text-emerald-500 font-bold text-2xl">+{10 + i}%</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mt-2">RECOVERY_{i}</div>
              </div>
            ))}
          </div>
        );
      default:
        return (
            <div className="w-full max-w-[400px] aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Cpu className="h-32 w-32 text-zinc-700" />
            </div>
        );
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