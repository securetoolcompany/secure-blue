'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, LineChart } from 'lucide-react';

export default function LeakStopSection() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24 px-8 font-sans relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(239,68,68,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* LEAKSTOP VISUAL DEBRIEF */}
        <div className="flex-1 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-red-500 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            SECURE_BLUE // HARDWARE_DEBRIEF
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            The LeakStop Valve.
          </h2>
          <h3 className="text-2xl md:text-3xl text-zinc-500 font-light italic">
            Autonomous Overwatch, Zero Latency.
          </h3>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mt-8">
            This is the physical layer of your sovereignty. The exact valve shown above—with its industrial-grade brass body and AI-enabled head—doesn&apos;t just &quot;detect&quot; a leak. It autonomously responds, shutting off the water in less than 50 milliseconds to neutralize the threat.
          </p>
        </div>

        {/* IMAGE & LOGIC SECTION */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg relative">
          
          <div className="w-full max-w-[380px] bg-zinc-900 border border-red-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col relative overflow-hidden">
            
            {/* NEXT.JS OPTIMIZED IMAGE */}
            <Image 
              src="/images/products/leakstop/LeakStop.png" 
              alt="LeakStop side-view visual" 
              width={400}
              height={400}
              className="w-full h-auto mb-6 object-contain"
              priority={false} // Set to true if this is above the fold
            />
            
            {/* Hardware Logic Logs */}
            <div className="pt-6 border-t border-zinc-800 space-y-2">
               <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 flex justify-between items-center">
                  STATUS: OPERATIONAL {"//"} SECURE_BLUE_AG_1.0
                  <span className="text-emerald-500">OPTIMAL</span>
               </div>
               <div className="text-[11px] text-zinc-300 font-light flex items-center gap-2 mt-2">
                 <Zap className="h-3.5 w-3.5 text-blue-500" />
                 Milliseconds Matter: &lt;50ms Response.
               </div>
               <div className="text-[11px] text-zinc-300 font-light flex items-center gap-2">
                 <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                 Anomaly neutralization: INSTANT.
               </div>
               <div className="text-[11px] text-zinc-300 font-light flex items-center gap-2">
                 <LineChart className="h-3.5 w-3.5 text-emerald-500" />
                 Est. Insurance credit: 15% - 20%.
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}