"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Filter, Zap, ArrowRight, CheckCircle2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ----------------------------------------------------------------------
// DATABASE FOR THE HARDWARE HUB
// ----------------------------------------------------------------------
const hardwareCatalog = [
  // --- CORE INFRASTRUCTURE ---
  {
    slug: 'leakstop',
    name: 'SECURE LeakStop',
    systemLabel: 'PREVENT // MITIGATION',
    accentColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    tagline: 'Autonomous mitigation for catastrophic infrastructure failure.',
    category: 'Core Infrastructure',
    environments: ['Indoor', 'Outdoor'],
    applications: ['Plumbing', 'Real Estate'],
    keySpecs: [
      'LoRaWAN wireless, battery-operated valve (10+ years autonomy)',
      'Sub-50ms actuation latency upon algorithmic anomaly trigger',
      'DN10 (3/8”) to DN80 (3”) with custom industrial flanging',
      'Integrates directly with mainline plumbing or retrofit solenoids'
    ]
  },
  {
    slug: 'early-fire-detection',
    name: 'EmberSense Fire Detection',
    systemLabel: 'PREVENT // FIRE_MITIGATION',
    accentColor: 'text-orange-400',
    borderHover: 'hover:border-orange-500/50',
    tagline: 'Algorithmic early-fire detection. The ultimate water conservation.',
    category: 'Core Infrastructure',
    environments: ['Indoor', 'Outdoor'],
    applications: ['HVAC', 'Real Estate', 'Logistics'],
    keySpecs: [
      'Quad-Sensor Array: NDIR CO₂, Temp, Humidity, and Barometric Pressure',
      'Detects pre-ignition VOC off-gassing before open flames ignite',
      'Adaptive transmission pulses to 2-min intervals during emergency events',
      'Ruggedized IP65/IP66 enclosures for data centers or forest perimeters'
    ]
  },
  
  // --- ATMOSPHERIC WATER ---
  {
    slug: 'a2w-machines',
    name: 'Air-2-Water Arrays',
    systemLabel: 'GENERATE // INDEPENDENT_SOURCING',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
    tagline: 'Mimicking the Natural Rain Cycle. Unbeatable Water Quality.',
    category: 'Atmospheric Water',
    environments: ['Indoor', 'Outdoor'],
    applications: ['Real Estate', 'Agriculture', 'Logistics'],
    keySpecs: [
      'Yields scale from 40 Gallons/Day to 1,320+ Gallons/Day',
      'Wide Operating Range: 15-45°C (59-113°F) and 25-100% RH',
      'Multi-Stage: Sediment, Carbon, UV-C, and Patented Mineralization',
      'Direct integration with off-grid Solar Matrix power setups'
    ]
  },

  // --- CONSERVATION ---
  {
    slug: 'smart-irrigation',
    name: 'SECURE Smart Irrigation',
    systemLabel: 'CONSERVE // WIRELESS_ACTUATION',
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    tagline: 'Forget centralized controllers. Total zone-level command.',
    category: 'Conservation',
    environments: ['Outdoor', 'Subterranean'],
    applications: ['Agriculture', 'Real Estate'],
    keySpecs: [
      'Direct 9VDC/12VDC latching solenoid control via sub-terranean nodes',
      'Bypasses the need to trench miles of copper wiring across property',
      'Embedded time-control executes schedules even if central network drops',
      'Wire directly to flow meters for live "on-air" gallon counter retrieval'
    ]
  },
  {
    slug: 'a2w-graywater',
    name: 'A2W Graywater Distillation',
    systemLabel: 'CONSERVE // LOOP_INTEGRATION',
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    tagline: 'Closed-loop conservation through thermal distillation.',
    category: 'Conservation',
    environments: ['Indoor'],
    applications: ['Plumbing', 'Real Estate'],
    keySpecs: [
      'Thermal vaporization chamber separates H2O from chemical solutes',
      'Converts facility wastewater back into 100% potable, clinical-grade water',
      'Removable heavy-solute trap for safe disposal or fertilizer harvesting',
      'Automated three-way diverter valves for municipal overflow failsafes'
    ]
  },
  {
    slug: 'irrigation-graywater',
    name: 'Irrigation Graywater',
    systemLabel: 'CONSERVE // WASTEWATER_ROUTING',
    accentColor: 'text-emerald-300',
    borderHover: 'hover:border-emerald-400/50',
    tagline: 'Turn facility runoff into landscape fuel.',
    category: 'Conservation',
    environments: ['Outdoor'],
    applications: ['Plumbing', 'Agriculture', 'Real Estate'],
    keySpecs: [
      'Intercepts and filters shower/laundry runoff for exterior irrigation use',
      'Safely extracts heavy detergents via advanced bio-filtration',
      'Variable Frequency Drive (VFD) pumps maintain constant sprinkler PSI',
      'Seamless electronic integration with SECURE Blue Irrigation Nodes'
    ]
  },

  // --- DATA & TELEMETRY (THE SENSOR BREAKDOWN) ---
  {
    slug: 'iaq-sensors',
    name: 'Ambient IAQ Nodes',
    systemLabel: 'TELEMETRY // AIR_QUALITY',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Institutional air quality and cognitive optimization.',
    category: 'Data & Telemetry',
    environments: ['Indoor'],
    applications: ['HVAC', 'Real Estate'],
    keySpecs: [
      'Up to 9-in-1 monitoring (CO₂, TVOC, PM2.5, Formaldehyde, PIR)',
      'Dynamic E-ink displays with traffic-light status indicators',
      'Zero-disassembly field provisioning via NFC or Bluetooth 5.0',
      'Up to 9-year battery life with ultra-low power LoRaWAN transmission'
    ]
  },
  {
    slug: 'cold-chain-sensors',
    name: 'Cold-Chain & RTD Probes',
    systemLabel: 'TELEMETRY // THERMODYNAMICS',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Sub-degree thermal tracking for perishable compliance.',
    category: 'Data & Telemetry',
    environments: ['Indoor', 'Outdoor'],
    applications: ['Logistics', 'Agriculture'],
    keySpecs: [
      'FDA 21 CFR Part 11 compliant data buffering (10,000+ entries)',
      'Food-grade 316 SS insertion probes (-200°C to +800°C range)',
      'Detects compressor failure instantly to prevent asset spoilage',
      'Magnetic mounting and M12 A-coded connectors for industrial tanks'
    ]
  },
  {
    slug: 'ag-weather-stations',
    name: 'Ag. Weather Stations',
    systemLabel: 'TELEMETRY // TOPOGRAPHY',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Solar-powered micro-climate mapping for vast acreage.',
    category: 'Data & Telemetry',
    environments: ['Outdoor'],
    applications: ['Agriculture'],
    keySpecs: [
      'Aggregates wind speed, UV index, rainfall, and barometric pressure',
      'Deep-soil probes measure Saturation, Temp, EC, and pH',
      'Solar-powered macro-nodes designed for infinite remote uptime',
      'Creates live topographical heat maps of crop health and micro-climates'
    ]
  },
  {
    slug: 'ai-occupancy-sensors',
    name: 'AI Spatial & Occupancy',
    systemLabel: 'TELEMETRY // UTILIZATION',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Anonymous spatial analytics and automated HVAC scaling.',
    category: 'Data & Telemetry',
    environments: ['Indoor'],
    applications: ['Real Estate', 'HVAC'],
    keySpecs: [
      'Time-of-Flight (ToF) and AI stereo-vision people counting (99.8% accurate)',
      'Advanced U-turn filtering and loitering/dwell-time detection',
      'Desk/Seat occupancy tracking via PIR and thermopile arrays',
      'Automates legacy HVAC delivery based on live headcount data'
    ]
  },
  {
    slug: 'gas-odor-detectors',
    name: 'Gas & Odor Detectors',
    systemLabel: 'TELEMETRY // HAZMAT',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Immediate hazard alerting and compliance enforcement.',
    category: 'Data & Telemetry',
    environments: ['Indoor'],
    applications: ['HVAC', 'Real Estate'],
    keySpecs: [
      'Methane (CH₄) detection for parking garage ventilation automation',
      'Bathroom odor tracking (Ammonia NH₃ and Hydrogen Sulfide H₂S)',
      'Advanced illicit vape detection (TVOC + PM2.5) for school enforcement',
      'Integrated buzzers, LED traffic lights, and immediate SMS dispatch'
    ]
  },
  {
    slug: 'liquid-level-nodes',
    name: 'Liquid Level & Distance',
    systemLabel: 'TELEMETRY // VOLUMETRIC',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    tagline: 'Ultrasonic tracking for reservoirs, silos, and waste.',
    category: 'Data & Telemetry',
    environments: ['Indoor', 'Outdoor', 'Subterranean'],
    applications: ['Plumbing', 'Agriculture', 'Logistics'],
    keySpecs: [
      'Ultrasonic distance sensing for grain silos and liquid chemical tanks',
      'Submersible water level telemetry for dams and agricultural reservoirs',
      'Smart waste bin fill-level optimization (ToF) for municipal logistics',
      'Capacitive membrane liquid leak detection for data center floors'
    ]
  }
];

// FILTER CATEGORIES
const CATEGORIES = ['All', 'Core Infrastructure', 'Atmospheric Water', 'Conservation', 'Data & Telemetry'];
const ENVIRONMENTS = ['All', 'Indoor', 'Outdoor', 'Subterranean'];
const APPLICATIONS = ['All', 'Plumbing', 'HVAC', 'Agriculture', 'Real Estate', 'Logistics'];

export default function HardwareHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeEnv, setActiveEnv] = useState('All');
  const [activeApp, setActiveApp] = useState('All');

  const filteredHardware = hardwareCatalog.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchEnv = activeEnv === 'All' || item.environments.includes(activeEnv);
    const matchApp = activeApp === 'All' || item.applications.includes(activeApp);
    return matchCategory && matchEnv && matchApp;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800">
      
      <section className="pt-32 pb-12 px-8 max-w-7xl mx-auto border-b border-zinc-900">
        <div className="flex items-center gap-3 mb-6">
          <Database className="h-6 w-6 text-blue-500" />
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">Master_Hardware_Directory</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          Infrastructure Modules.
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl font-light">
          Filter and review technical specifications across our entire proprietary hardware ecosystem. Select a module to review classified engineering architectures and live telemetry integrations.
        </p>
      </section>

      <section className="px-8 py-8 border-b border-zinc-900 bg-zinc-900/20 sticky top-[72px] z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 items-start xl:items-center">
          
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm uppercase tracking-widest shrink-0">
            <Filter className="h-4 w-4" /> Parameters:
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">System Classification</span>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 font-mono text-xs border transition-colors ${
                      activeCategory === cat 
                        ? 'bg-blue-600/10 border-blue-500 text-blue-400' 
                        : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Deployment Environment</span>
              <div className="flex flex-wrap gap-2">
                {ENVIRONMENTS.map(env => (
                  <button
                    key={env}
                    onClick={() => setActiveEnv(env)}
                    className={`px-3 py-1.5 font-mono text-xs border transition-colors ${
                      activeEnv === env 
                        ? 'bg-emerald-600/10 border-emerald-500 text-emerald-400' 
                        : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {env}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Target Integration</span>
              <div className="flex flex-wrap gap-2">
                {APPLICATIONS.map(app => (
                  <button
                    key={app}
                    onClick={() => setActiveApp(app)}
                    className={`px-3 py-1.5 font-mono text-xs border transition-colors ${
                      activeApp === app 
                        ? 'bg-purple-600/10 border-purple-500 text-purple-400' 
                        : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="px-8 py-16 max-w-7xl mx-auto min-h-[50vh]">
        
        {filteredHardware.length === 0 && (
          <div className="w-full py-24 flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
            <Terminal className="h-8 w-8 text-zinc-600 mb-4" />
            <p className="text-zinc-400 font-mono">ERR: NO_MODULES_MATCH_PARAMETERS</p>
            <button onClick={() => {setActiveCategory('All'); setActiveEnv('All'); setActiveApp('All');}} className="mt-4 text-xs text-blue-400 hover:text-blue-300 font-mono uppercase tracking-widest underline">
              Reset Filters
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredHardware.map((product) => (
            <div 
              key={product.slug} 
              className={`bg-black border border-zinc-800 p-8 flex flex-col transition-all duration-300 ${product.borderHover} hover:shadow-2xl hover:bg-zinc-900/20 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`inline-flex items-center border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-mono uppercase tracking-widest ${product.accentColor}`}>
                  <Terminal className="mr-2 h-3 w-3" />
                  {product.systemLabel}
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-1">
                    {product.environments.map(env => (
                      <span key={env} className="text-[9px] font-mono bg-zinc-900 text-zinc-500 px-1.5 py-0.5 uppercase tracking-widest">{env}</span>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                {product.tagline}
              </p>

              <div className="mb-8 flex-1">
                <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-2">
                  <Zap className="h-4 w-4 text-zinc-600" />
                  <span className="font-mono text-xs text-zinc-300 tracking-widest uppercase">Core Specifications</span>
                </div>
                <ul className="space-y-3">
                  {product.keySpecs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${product.accentColor} opacity-70`} />
                      <span className="text-zinc-400 text-sm leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-900 mt-auto">
                <Link href={`/infrastructure/${product.slug}`}>
                  <Button variant="ghost" className="w-full bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-sm font-mono text-xs tracking-widest uppercase h-12 flex justify-between px-6">
                    Review Deployment Architecture
                    <ArrowRight className={`h-4 w-4 ${product.accentColor} transition-transform group-hover:translate-x-1`} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}