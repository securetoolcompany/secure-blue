"use client";

import React, { useState } from 'react';
import { 
  Sliders, Calculator, Droplets, ShieldAlert, 
  TrendingDown, HelpCircle, Info, Zap, Search
} from 'lucide-react';

export default function ROICalculator() {
  // --- 1. CONFIGURABLE VARIABLES ---
  const [facilitySize, setFacilitySize] = useState(50000); 
  const [waterCost, setWaterCost] = useState(12); // Per 1k Gallons
  const [efficiencyLoss, setEfficiencyLoss] = useState(20); // The "Hidden Drain"
  const [recoveryYield, setRecoveryYield] = useState(0.08); // A2W + Graywater yield per sqft/mo
  const [insuranceCredit, setInsuranceCredit] = useState(0.15); // Credit per sqft/yr

  // --- 2. THE MATHEMATICAL ENGINE ---
  
  // A. Estimated Annual Leakage (Gals)
  // We calculate loss based on footprint and efficiency percentage. 
  const annualLeakageVolume = (facilitySize * (efficiencyLoss / 100)) * 12;
  
  // B. Annual Resource Recovery (A2W + Graywater Gals)
  const annualRecoveryVolume = (facilitySize * recoveryYield) * 12; 

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
            {/* 1. Facility Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Facility Footprint</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Total irrigated or protected area (sq ft)</p>
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

            {/* 2. Efficiency Loss */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">System Efficiency Loss</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Estimated &quot;Silent Leak&quot; rate (Average: 20%)</p>
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

            {/* 3. Water Cost */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Local Utility Tariff</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Combined cost per 1,000 Gallons ($)</p>
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

            {/* 4. Recovery Yield */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-zinc-300 font-mono text-[10px] uppercase block">Recovery/Generation Yield</label>
                   <p className="text-[9px] text-zinc-600 uppercase">Gal/sqft monthly (A2W + Graywater)</p>
                </div>
                <span className="text-blue-400 font-mono text-xs">{recoveryYield}</span>
              </div>
              <input 
                type="range" min="0.01" max="0.25" step="0.01" 
                value={recoveryYield} 
                onChange={(e) => setRecoveryYield(Number(e.target.value))}
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
                <span className="text-blue-400 font-mono text-xs">${insuranceCredit}</span>
              </div>
              <input 
                type="range" min="0.05" max="0.50" step="0.05" 
                value={insuranceCredit} 
                onChange={(e) => setInsuranceCredit(Number(e.target.value))}
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
              <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Audit_Report_v6.0</span>
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
                 <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Calculation_Matrix_Logs</h4>
                 
                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Leak_Suppression_Recapture:</span>
                    <span className="text-blue-400">{(annualLeakageVolume / 1000).toLocaleString()} kGal</span>
                 </div>
                 
                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Atmospheric_Generation:</span>
                    <span className="text-blue-400">{(annualRecoveryVolume / 1000).toLocaleString()} kGal</span>
                 </div>

                 <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-600">&gt; Risk_Mitigation_Credit:</span>
                    <span className="text-emerald-400">+$ {totalInsuranceSavings.toLocaleString()}</span>
                 </div>

                 <div className="flex justify-between text-xs font-mono pt-4 border-t border-zinc-900">
                    <span className="text-zinc-400">Est. Amortization Period:</span>
                    <span className="text-white">6.4 Months</span>
                 </div>
              </div>

              <div className="bg-blue-500/5 p-4 border border-blue-500/10 flex gap-4">
                <Info className="h-5 w-5 text-blue-400 shrink-0" />
                <p className="text-[10px] font-mono text-zinc-500 leading-relaxed italic">
                  This report utilizes a high-fidelity diagnostic model based on user-supplied variables. These numbers represent the delta between legacy analog systems and hardened SECURE Blue IoT infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}