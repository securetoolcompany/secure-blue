"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { 
  ChevronRight, ChevronLeft, Zap, ShieldAlert, 
  Droplets, Info, TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- TYPES & INTERFACES ---

interface SlidePoint {
  icon?: React.ReactNode;
  text?: string;
  label?: string;
  value?: string;
}

interface Slide {
  type: "hero" | "problem" | "solution" | "roi";
  title: string;
  subtitle?: string;
  stat?: string;
  statLabel?: string;
  points?: SlidePoint[];
  image?: string;
}

interface IndustryContent {
  title: string;
  subtitle: string;
  slides: Slide[];
}

export function generateStaticParams() {
  return [
    { industry: 'hospitality' },
    { industry: 'agriculture' },
    { industry: 'real-estate' },
  ];
}

// --- DATA STRUCTURE ---

const PRESENTATION_DATA: Record<string, IndustryContent> = {
  "hospitality": {
    title: "Hospitality Resource Sovereignty",
    subtitle: "RESORT_OPERATIONS_v4.2",
    slides: [
      {
        type: "hero",
        title: "The Blind Spot of Luxury.",
        subtitle: "Water damage and undetected waste represent the largest unmanaged risk in modern resort operations.",
        stat: "90%",
        statLabel: "Leaks go undetected for 30+ days",
      },
      {
        type: "problem",
        title: "The Cost of Silence.",
        points: [
          { icon: <ShieldAlert className="h-5 w-5" />, text: "Water is the #1 cause of insurance loss in hospitality." },
          { icon: <Zap className="h-5 w-5" />, text: "Manual truck dispatches increase opex by 18% annually." },
          { icon: <Droplets className="h-5 w-5" />, text: "Typical 500-key properties lose 150k gallons/month." }
        ]
      },
      {
        type: "solution",
        title: "Autonomous Oversight.",
        subtitle: "We replace reactive maintenance with algorithmic, millisecond-response hardware.",
      },
      {
        type: "roi",
        title: "The Math of Recovery.",
        points: [
          { label: "Opex Reduction", value: "22%" },
          { label: "Ins. Premium Credit", value: "15%" },
          { label: "Amortization", value: "8 Months" }
        ]
      }
    ]
  },
  "agriculture": {
    title: "Precision Resource Sovereignty",
    subtitle: "AGRICULTURAL_INFRASTRUCTURE_v2.0",
    slides: [
      {
        type: "hero",
        title: "The Scarcity Bottleneck.",
        subtitle: "Traditional irrigation is blind to soil saturation levels and atmospheric potential.",
        stat: "40%",
        statLabel: "Water wasted through over-saturation",
      },
      {
        type: "problem",
        title: "Analog Inefficiency.",
        points: [
          { icon: <TrendingDown className="h-5 w-5" />, text: "High energy costs from running pumps on fixed timers." },
          { icon: <Droplets className="h-5 w-5" />, text: "Crop loss due to undetected localized irrigation failures." },
          { icon: <ShieldAlert className="h-5 w-5" />, text: "Rising municipal and groundwater extraction costs." }
        ]
      },
      {
        type: "solution",
        title: "The Atmospheric Canopy.",
        subtitle: "Integrating A2W generation and TinyML soil sensors into a proprietary mesh network.",
      },
      {
        type: "roi",
        title: "Yield & Recovery.",
        points: [
          { label: "Water Conservation", value: "45%" },
          { label: "Yield Increase", value: "12%" },
          { label: "Opex Savings", value: "$18k/yr" }
        ]
      }
    ]
  },
  "real-estate": {
    title: "Commercial Asset Hardening",
    subtitle: "PORTFOLIO_PROTECTION_v3.1",
    slides: [
      {
        type: "hero",
        title: "Protect the Portfolio.",
        subtitle: "Multi-family and commercial assets are vulnerable to catastrophic water loss events.",
        stat: "$2.5M",
        statLabel: "Average annual water-loss claim",
      },
      {
        type: "problem",
        title: "Passive Liability.",
        points: [
          { icon: <ShieldAlert className="h-5 w-5" />, text: "Water is the primary driver of commercial insurance premium hikes." },
          { icon: <Zap className="h-5 w-5" />, text: "Manual metering fails to detect micro-leaks in high-density units." },
          { icon: <Droplets className="h-5 w-5" />, text: "Tenant-led water waste accounts for 30% of total opex." }
        ]
      },
      {
        type: "solution",
        title: "Zero-Trust Infrastructure.",
        subtitle: "Hardening the asset with autonomous shut-off nodes and immutable usage logs.",
      },
      {
        type: "roi",
        title: "Value Enhancement.",
        points: [
          { label: "NOI Increase", value: "4.5%" },
          { label: "Insurance Credit", value: "20%" },
          { label: "Portfolio Risk", value: "-60%" }
        ]
      }
    ]
  }
};

export default function PresentationPage() {
  const params = useParams();
  const industry = params?.industry as string;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = PRESENTATION_DATA[industry] || PRESENTATION_DATA["hospitality"];

  const next = () => currentSlide < data.slides.length - 1 && setCurrentSlide(prev => prev + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(prev => prev - 1);

  const slide = data.slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col font-sans overflow-hidden">
      
      {/* HEADER STATUS BAR */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase italic">
            SECURE_BLUE // {data.subtitle}
          </span>
        </div>
        <div className="font-mono text-[10px] text-zinc-600">
            SLIDE_0{currentSlide + 1} {"//"} 0{data.slides.length}
        </div>
      </div>

      {/* SLIDE CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 relative overflow-hidden">
        
        {/* BACKGROUND AMBIENCE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-6xl">
          
          {slide.type === "hero" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight max-w-4xl text-white">
                {slide.title}
              </h1>
              <p className="text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-12 border-t border-zinc-900 inline-block">
                <span className="text-6xl font-bold text-blue-500">{slide.stat}</span>
                <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-2">{slide.statLabel}</p>
              </div>
            </div>
          )}

          {slide.type === "problem" && (
            <div className="grid md:grid-cols-2 gap-20 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-6xl font-bold tracking-tighter leading-tight text-white">{slide.title}</h2>
              <div className="space-y-8">
                {slide.points?.map((p, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 bg-zinc-900/40 border border-zinc-800 rounded-none">
                    <div className="text-blue-500 pt-1">{p.icon}</div>
                    <p className="text-lg text-zinc-300 font-light leading-snug">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "solution" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-7xl font-bold tracking-tighter text-white">{slide.title}</h2>
                <p className="text-2xl text-zinc-400 max-w-2xl leading-relaxed">{slide.subtitle}</p>
                <div className="h-[400px] w-full border border-zinc-800 bg-zinc-900/20 rounded-none flex items-center justify-center italic text-zinc-600 font-mono text-xs uppercase tracking-widest">
                    [ HARDWARE_VISUAL_ASSET_PLACEHOLDER ]
                </div>
            </div>
          )}

          {slide.type === "roi" && (
            <div className="text-center space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-6xl font-bold tracking-tighter italic text-blue-500">{slide.title}</h2>
              <div className="grid grid-cols-3 gap-12">
                {slide.points?.map((p, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-6xl font-bold text-white">{p.value}</div>
                    <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="px-12 py-10 border-t border-zinc-800 bg-zinc-950 flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={prev} 
          disabled={currentSlide === 0}
          className="rounded-none border-zinc-800 text-zinc-500 hover:text-white font-mono text-[10px]"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> PREV_LOG
        </Button>

        <div className="flex gap-2">
          {data.slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 w-8 transition-all ${i === currentSlide ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-zinc-800'}`} 
            />
          ))}
        </div>

        <Button 
          onClick={next} 
          disabled={currentSlide === data.slides.length - 1}
          className="rounded-none bg-blue-600 hover:bg-blue-700 text-white font-mono text-[10px] px-8"
        >
          {currentSlide === data.slides.length - 1 ? 'END_DEBRIEF' : 'NEXT_DECRYPT'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

    </div>
  );
}