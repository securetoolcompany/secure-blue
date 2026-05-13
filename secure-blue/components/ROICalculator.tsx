"use client";

import React, { useState } from 'react';
import { 
  Sliders, Calculator, Droplets, ShieldAlert, 
  TrendingDown, Info, Zap, Search, Box, Check
} from 'lucide-react';

export default function ROICalculator() {
  // --- 1. CONFIGURABLE VARIABLES ---
  const [facilitySize, setFacilitySize] = useState(50000); 
  const [waterCost, setWaterCost] = useState(12); // Per 1k Gallons
  const [efficiencyLoss, setEfficiencyLoss] = useState(20); 
  const [insuranceCredit, setInsuranceCredit] = useState(0.15); 
  
  // A2W Unit Selection (Daily Capacity in Gallons)
  const [a2wCapacity, setA2wCapacity] = useState(1000); 

  // --- 2. THE MATHEMATICAL ENGINE ---
  
  // A. Estimated Annual Leakage (Gals)
  const annualLeakageVolume = (facilitySize * (efficiencyLoss / 100)) * 12;
  
  // B. Annual A2W Generation (Daily Output * 365)
  const annualRecoveryVolume = a2wCapacity * 365; 

  // C. Total Liquid Conservation (Gals)
  const totalVolumeSaved = Math.floor(annualLeakageVolume + annualRecoveryVolume);

  // D. Financial Recovery ($)
  const utilitySavings = (totalVolumeSaved / 1000) * waterCost;
  const totalInsuranceSavings = facilitySize * insuranceCredit;
  const totalAnnualCashRecovery = Math.floor(utilitySavings + totalInsuranceSavings);

  return (
    <div className="space-y-12">
      
      {/* TOOL INTRODUCTION */}
      <div className="grid md:grid-cols-3 gap-8 border-b border-zinc-800 pb-12">
        <div className="space-y-4">
          <div className="h-10 w-10 bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Search className="h-5 w-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold">Infrastructure Audit</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            This tool simulates a physical layer audit. It measures the delta between your current analog &quot;bleed rate&quot; and an automated SECURE Blue environment.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-10 w-10 bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Zap className="h-5 w-5 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold">Variable Logic</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Every facility is unique. Adjust the operational assumptions below—from your local utility tariffs to your estimated pipe efficiency—to generate a localized ROI.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-10 w-10 bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <ShieldAlert className="h-5 w-5 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold">Hardened Opex</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Beyond water, we factor in Insurance Premium Credits (IPC). Hardening a facility with automated shut-offs drastically reduces your risk profile.
          </p>
        </div>
      </div>

      {/* INPUT CONTROLS */}
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center gap-2">
            <Sliders className="h-4 w-4 text-blue-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Adjustment_Matrix</span>
          </div>

          <div className="space-y-8">
            
            {/* A2W UNIT SELECTION (MODIFIED) */}
            <div className="space-y-4">
              <label className="text-zinc-300 font-mono text-[10px] uppercase block mb-2">A2W Generation Unit (Daily Capacity)</label>
              <div className="grid grid-cols-3 gap-2">
                {[250, 1000, 5000].map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setA2wCapacity(cap)}
                    className={`p-3 border font-mono text-xs transition-all flex flex-col items-center gap-1 ${
                      a2wCapacity === cap 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600'
                    }`}
                  >
                    <Box className={`h-4 w-4 ${a2wCapacity === cap ? 'text-white' : 'text-zinc-700'}`} />
                    {cap.toLocaleString()} G
                  </button>
                ))}
              </div>
              <p className="text-[9px] text-zinc-600 uppercase font-mono">Select your intended hardware deployment tier.</p>
            </div>

            {/* Facility Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Facility Footprint</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Total area (sq ft)</p>
                </div>
                <span className="text-blue-400 font-mono text-xs">{facilitySize.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="5000" max="1000000" step="5000" 
                value={facilitySize} 
                onChange={(e) => setFacilitySize(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Efficiency Loss */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">System Efficiency Loss</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Est. Leak rate (Avg: 20%)</p>
                </div>
                <span className="text-blue-400 font-mono text-xs">{efficiencyLoss}%</span>
              </div>
              <input 
                type="range" min="5" max="50" step="1" 
                value={efficiencyLoss} 
                onChange={(e) => setEfficiencyLoss(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Water Cost */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Utility Tariff</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Cost per 1k Gallons ($)</p>
                </div>
                <span className="text-blue-400 font-mono text-xs">${waterCost}</span>
              </div>
              <input 
                type="range" min="2" max="60" step="1" 
                value={waterCost} 
                onChange={(e) => setWaterCost(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* 5. Insurance Credit */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Insurance Premium Credit</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Estimated reduction per sqft/year ($)</p>
                </div>
                <span className="text-blue-400 font-mono text-xs">${insuranceCredit.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0.01" 
                max="0.50" 
                step="0.01" 
                value={insuranceCredit} 
                onChange={(e) => setInsuranceCredit(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        {/* OUTPUT TERMINAL */}
        <div className="lg:col-span-3">
          <div className="border border-zinc-800 bg-zinc-950 rounded-none overflow-hidden shadow-2xl sticky top-24">
            <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <div className="h-2 w-2 rounded-full bg-zinc-800" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Audit_Report_v6.1</span>
            </div>
            
            <div className="p-8 space-y-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-[10px] font-mono uppercase tracking-tighter">Annual Financial Recovery</span>
                  </div>
                  <div className="text-5xl font-bold text-white tracking-tighter">
                    ${totalAnnualCashRecovery.toLocaleString()}
                  </div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase">Estimated Opex Saved</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <Droplets className="h-4 w-4" />
                    <span className="text-[10px] font-mono uppercase tracking-tighter">Annual Liquid Conservation</span>
                  </div>
                  <div className="text-5xl font-bold text-zinc-300 tracking-tighter">
                    {totalVolumeSaved.toLocaleString()}
                    <span className="text-zinc-500 text-lg ml-1 uppercase font-mono">Gal</span>
                  </div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase">Total Resource volume</p>
                </div>
              </div>

              {/* Data Breakdown */}
              <div className="pt-8 border-t border-zinc-900 space-y-4">
                 <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Hardware_Generation_Metrics</h4>
                 
                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Selected Unit Capacity:</span>
                    <span className="text-blue-400">{a2wCapacity.toLocaleString()} Gal/Day</span>
                 </div>

                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Annual A2W Generation:</span>
                    <span className="text-blue-400">{annualRecoveryVolume.toLocaleString()} Gal/Yr</span>
                 </div>
                 
                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Leak_Suppression_Audit:</span>
                    <span className="text-blue-400">{Math.floor(annualLeakageVolume).toLocaleString()} Gal/Yr</span>
                 </div>

                 <div className="flex justify-between text-xs font-mono pt-4 border-t border-zinc-900">
                    <span className="text-zinc-400">Est. Amortization Period:</span>
                    <span className="text-white">6.2 Months</span>
                 </div>
              </div>

              <div className="bg-blue-500/5 p-4 border border-blue-500/10 flex gap-4">
                <Info className="h-5 w-5 text-blue-400 shrink-0" />
                <p className="text-[10px] font-mono text-zinc-500 leading-relaxed italic">
                  Calculations utilize ideal daily outputs for SECURE Blue A2W units. Actual yield may vary based on localized dew points and relative humidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}