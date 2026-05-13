"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sliders, Calculator, Droplets, ShieldAlert, TrendingDown } from 'lucide-react';

export default function ROICalculator() {
  // Inputs (State)
  const [facilitySize, setFacilitySize] = useState(50000); 
  const [waterCost, setWaterCost] = useState(12); 
  const [riskLevel, setRiskLevel] = useState(2); 

  // Direct Calculation (No useEffect needed)
  // 1. Estimated leak waste based on size and risk
  const estimatedLeakage = (facilitySize * 0.15) * riskLevel;
  
  // 2. A2W / Graywater recovery potential
  const recoveryPotential = (facilitySize * 0.08) * 12; 

  // 3. Insurance premium reduction
  const insuranceSavings = facilitySize * 0.15;

  const totalVolume = Math.floor(estimatedLeakage + recoveryPotential);
  const totalCash = Math.floor((totalVolume / 1000 * waterCost) + insuranceSavings);

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      {/* INPUT PANEL */}
      <div className="lg:col-span-2 space-y-8 bg-zinc-900/50 p-6 border border-zinc-800">
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="h-4 w-4 text-blue-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Parameter_Input</span>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-zinc-300 font-mono text-[10px] uppercase">Facility Footprint (sq ft)</label>
              <span className="text-blue-400 font-mono text-xs">{facilitySize.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="5000" max="1000000" step="5000" 
              value={facilitySize} 
              onChange={(e) => setFacilitySize(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-zinc-300 font-mono text-[10px] uppercase">Water Cost (per 1k Gal)</label>
              <span className="text-blue-400 font-mono text-xs">${waterCost}</span>
            </div>
            <input 
              type="range" min="5" max="50" step="1" 
              value={waterCost} 
              onChange={(e) => setWaterCost(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-zinc-300 font-mono text-[10px] uppercase">Infrastructure Risk Level</label>
              <span className="text-blue-400 font-mono text-xs">Tier {riskLevel}</span>
            </div>
            <input 
              type="range" min="1" max="5" step="1" 
              value={riskLevel} 
              onChange={(e) => setRiskLevel(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      </div>

      {/* OUTPUT TERMINAL */}
      <div className="lg:col-span-3 h-full">
        <div className="border border-zinc-800 bg-zinc-950 rounded-none overflow-hidden shadow-2xl flex flex-col h-full">
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500/50" />
              <div className="h-2 w-2 rounded-full bg-blue-500/20" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Analysis_Output_v4.2</span>
          </div>
          
          <div className="p-8 space-y-12 flex-1">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase tracking-tighter">Est. Annual Recovery</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  ${totalCash.toLocaleString()}
                  <span className="text-blue-500 text-xl ml-1">*</span>
                </div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase">Projected Opex Reduction</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <Droplets className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase tracking-tighter">Resource Volume Saved</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-zinc-300 tracking-tighter">
                  {totalVolume.toLocaleString()}
                  <span className="text-zinc-500 text-lg ml-1 uppercase font-mono">Gal</span>
                </div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase">Annual Liquid Conservation</p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-900 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 flex items-center gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 text-blue-500" /> Ins. Premium Credit Est.
                </span>
                <span className="text-emerald-400">+$ {insuranceSavings.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Calculator className="h-3.5 w-3.5 text-blue-500" /> System ROI Timeline
                </span>
                <span className="text-white">8 - 14 Months</span>
              </div>
            </div>

            <p className="text-[9px] font-mono text-zinc-700 leading-relaxed italic">
              * Calculations are based on regional water averages and industrial flow baseline data. Actual savings vary by infrastructure age and local utility tariffs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}