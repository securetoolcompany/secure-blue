"use client";

import React, { useState } from 'react';
import { Terminal, Filter, Zap, CheckCircle2, Database } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// ----------------------------------------------------------------------
// DATABASE FOR THE HARDWARE HUB
// ----------------------------------------------------------------------
const hardwareCatalog = [
  {
    slug: 'leakstop',
    name: 'SECURE LeakStop',
    systemLabel: 'PREVENT // MITIGATION',
    accentColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    tagline: 'Autonomous mitigation for catastrophic infrastructure failure.',
    categories: ['Prevent', 'Automate'],
    environments: ['Indoor', 'Outdoor'],
    industries: ['HOA & Residential', 'Commercial R.E.', 'Hospitality', 'Municipality', 'Agriculture'],
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
    categories: ['Prevent', 'Automate'],
    environments: ['Indoor', 'Outdoor'],
    industries: ['HOA & Residential', 'Commercial R.E.', 'Hospitality', 'Municipality'],
    keySpecs: [
      'Quad-Sensor Array: NDIR CO₂, Temp, Humidity, and Barometric Pressure',
      'Detects pre-ignition VOC off-gassing before open flames ignite',
      'Adaptive transmission pulses to 2-min intervals during emergency events',
      'Ruggedized IP65/IP66 enclosures for data centers or forest perimeters'
    ]
  },
  {
    slug: 'cold-chain-sensors',
    name: 'Cold-Chain & RTD Probes',
    systemLabel: 'PREVENT // ASSET_SPOILAGE',
    accentColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    tagline: 'Sub-degree thermal tracking for perishable compliance.',
    categories: ['Prevent', 'Telemetry'],
    environments: ['Indoor', 'Outdoor'],
    industries: ['Agriculture', 'Commercial R.E.', 'Hospitality'],
    keySpecs: [
      'FDA 21 CFR Part 11 compliant data buffering (10,000+ entries)',
      'Food-grade 316 SS insertion probes (-200°C to +800°C range)',
      'Detects compressor failure instantly to prevent asset spoilage',
      'Magnetic mounting and M12 A-coded connectors for industrial tanks'
    ]
  },
  {
    slug: 'gas-odor-detectors',
    name: 'Gas & Odor Detectors',
    systemLabel: 'PREVENT // HAZMAT',
    accentColor: 'text-orange-400',
    borderHover: 'hover:border-orange-500/50',
    tagline: 'Immediate hazard alerting and compliance enforcement.',
    categories: ['Prevent', 'Telemetry'],
    environments: ['Indoor'],
    industries: ['Commercial R.E.', 'Municipality', 'Hospitality'],
    keySpecs: [
      'Methane (CH₄) detection prevents parking garage and industrial explosions',
      'Bathroom odor tracking (Ammonia NH₃ and Hydrogen Sulfide H₂S)',
      'Advanced illicit vape detection (TVOC + PM2.5) for school enforcement',
      'Integrated buzzers, LED traffic lights, and immediate SMS dispatch'
    ]
  },
  {
    slug: 'water-ecology-nodes',
    name: 'Liquid Ecology & Quality',
    systemLabel: 'PREVENT // TOXICITY',
    accentColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    tagline: 'Real-time pollutant and baseline water health tracking.',
    categories: ['Prevent', 'Telemetry'],
    environments: ['Outdoor', 'Subterranean'],
    industries: ['Agriculture', 'Municipality', 'HOA & Residential'],
    keySpecs: [
      'Tracks Dissolved Oxygen (DO), pH, Turbidity, and Electrical Conductivity',
      'Early-warning detection for toxic algae blooms and agricultural chemical runoff',
      'Submersible IP68 probes with automated anti-biofouling wipers',
      'Vital for aquaculture safety, civic reservoirs, and private estate lakes'
    ]
  },
  {
    slug: 'leaf-wetness-nodes',
    name: 'Leaf Wetness & Disease Nodes',
    systemLabel: 'PREVENT // BOTANICAL_LOSS',
    accentColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    tagline: 'Micro-moisture tracking for preventative crop care.',
    categories: ['Prevent', 'Telemetry'],
    environments: ['Outdoor'],
    industries: ['Agriculture', 'Hospitality', 'HOA & Residential'],
    keySpecs: [
      'Biomimetic sensor design accurately simulates the thermal resistance of a real leaf',
      'Detects trace amounts of ice and surface water on foliage',
      'Empowers farmers to predict and prevent fungal diseases before they spread',
      'Eliminates the need for blind, calendar-based chemical spraying'
    ]
  },
  {
    slug: 'smart-irrigation',
    name: 'SECURE Smart Irrigation',
    systemLabel: 'CONSERVE // WIRELESS_ACTUATION',
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    tagline: 'Forget centralized controllers. Total zone-level command.',
    categories: ['Conserve', 'Automate'],
    environments: ['Outdoor', 'Subterranean'],
    industries: ['Agriculture', 'Municipality', 'Hospitality', 'HOA & Residential', 'Commercial R.E.'],
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
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    tagline: 'Closed-loop conservation through thermal distillation.',
    categories: ['Conserve', 'Generate'],
    environments: ['Indoor'],
    industries: ['Commercial R.E.', 'Hospitality', 'Agriculture', 'Municipality'],
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
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    tagline: 'Turn facility runoff into landscape fuel.',
    categories: ['Conserve', 'Automate'],
    environments: ['Outdoor'],
    industries: ['Municipality', 'Hospitality', 'HOA & Residential', 'Commercial R.E.'],
    keySpecs: [
      'Intercepts and filters shower/laundry runoff for exterior irrigation use',
      'Safely extracts heavy detergents via advanced bio-filtration',
      'Variable Frequency Drive (VFD) pumps maintain constant sprinkler PSI',
      'Seamless electronic integration with SECURE Blue Irrigation Nodes'
    ]
  },
  {
    slug: 'botanical-par-sensors',
    name: 'Botanical PAR & Light Nodes',
    systemLabel: 'CONSERVE // ENERGY',
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    tagline: 'Precision light tracking for optimal canopy growth.',
    categories: ['Conserve', 'Automate', 'Telemetry'],
    environments: ['Outdoor', 'Indoor'],
    industries: ['Agriculture', 'Commercial R.E.', 'HOA & Residential'],
    keySpecs: [
      'Measures Photosynthetically Active Radiation (PAR) from 400 to 700 nm',
      'Ensures crops and estate gardens receive the exact light spectrum needed',
      'Integrates with facility automation to trigger greenhouse shading or grow-lights',
      'Solar-powered with IP66 UV-resistant housing'
    ]
  },
  {
    slug: 'a2w-machines',
    name: 'Air-2-Water Arrays',
    systemLabel: 'GENERATE // INDEPENDENT_SOURCING',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
    tagline: 'Mimicking the Natural Rain Cycle. Unbeatable Water Quality.',
    categories: ['Generate'],
    environments: ['Indoor', 'Outdoor'],
    industries: ['Agriculture', 'Municipality', 'HOA & Residential', 'Hospitality', 'Commercial R.E.'],
    keySpecs: [
      'Yields scale from 40 Gallons/Day to 1,320+ Gallons/Day',
      'Wide Operating Range: 15-45°C (59-113°F) and 25-100% RH',
      'Multi-Stage: Sediment, Carbon, UV-C, and Patented Mineralization',
      'Direct integration with off-grid Solar Matrix power setups'
    ]
  },
  {
    slug: 'iaq-sensors',
    name: 'Ambient IAQ Nodes',
    systemLabel: 'AUTOMATE // AIR_QUALITY',
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    tagline: 'Institutional air quality and cognitive optimization.',
    categories: ['Automate', 'Telemetry'],
    environments: ['Indoor'],
    industries: ['Municipality', 'Commercial R.E.', 'Hospitality'],
    keySpecs: [
      'Up to 9-in-1 monitoring (CO₂, TVOC, PM2.5, Formaldehyde, PIR)',
      'Dynamic E-ink displays with traffic-light status indicators',
      'Zero-disassembly field provisioning via NFC or Bluetooth 5.0',
      'Directly automates legacy HVAC systems to cycle fresh air automatically'
    ]
  },
  {
    slug: 'ag-weather-stations',
    name: 'Ag. Weather Stations',
    systemLabel: 'AUTOMATE // TOPOGRAPHY',
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    tagline: 'Solar-powered micro-climate mapping for vast acreage.',
    categories: ['Automate', 'Telemetry'],
    environments: ['Outdoor'],
    industries: ['Agriculture', 'Municipality', 'HOA & Residential'],
    keySpecs: [
      'Aggregates wind speed, UV index, rainfall, and barometric pressure',
      'Deep-soil probes measure Saturation, Temp, EC, and pH',
      'Solar-powered macro-nodes designed for infinite remote uptime',
      'Hooks directly into Smart Irrigation nodes to automate watering schedules'
    ]
  },
  {
    slug: 'ai-occupancy-sensors',
    name: 'AI Spatial & Occupancy',
    systemLabel: 'AUTOMATE // UTILIZATION',
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    tagline: 'Anonymous spatial analytics and automated HVAC scaling.',
    categories: ['Automate', 'Conserve', 'Telemetry'],
    environments: ['Indoor'],
    industries: ['Commercial R.E.', 'Hospitality', 'Municipality'],
    keySpecs: [
      'Time-of-Flight (ToF) and AI stereo-vision people counting (99.8% accurate)',
      'Advanced U-turn filtering and loitering/dwell-time detection',
      'Desk/Seat occupancy tracking via PIR and thermopile arrays',
      'Automates lighting and HVAC delivery based on live headcount data'
    ]
  },
  {
    slug: 'liquid-level-nodes',
    name: 'Liquid Level & Distance',
    systemLabel: 'AUTOMATE // LOGISTICS',
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    tagline: 'Ultrasonic tracking for reservoirs, silos, and waste.',
    categories: ['Automate', 'Telemetry'],
    environments: ['Indoor', 'Outdoor', 'Subterranean'],
    industries: ['Agriculture', 'Municipality', 'Commercial R.E.'],
    keySpecs: [
      'Ultrasonic distance sensing for grain silos and liquid chemical tanks',
      'Submersible water level telemetry for dams and agricultural reservoirs',
      'Smart waste bin fill-level optimization (ToF) for municipal logistics',
      'Automates fleet vehicle routing so trucks only visit bins that are 85%+ full'
    ]
  }
];

// ----------------------------------------------------------------------
// FILTER ARRAYS
// ----------------------------------------------------------------------
const CATEGORIES = ['All', 'Prevent', 'Conserve', 'Generate', 'Automate', 'Telemetry'];
const INDUSTRIES = ['All', 'HOA & Residential', 'Commercial R.E.', 'Municipality', 'Agriculture', 'Hospitality'];
const ENVIRONMENTS = ['All', 'Indoor', 'Outdoor', 'Subterranean'];

export default function HardwareHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeEnv, setActiveEnv] = useState('All');

  const filteredHardware = hardwareCatalog.filter((item) => {
    // UPDATED: Now checks if the array includes the active category
    const matchCategory = activeCategory === 'All' || item.categories.includes(activeCategory);
    const matchIndustry = activeIndustry === 'All' || item.industries.includes(activeIndustry);
    const matchEnv = activeEnv === 'All' || item.environments.includes(activeEnv);
    return matchCategory && matchIndustry && matchEnv;
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
          Filter and review technical specifications across our entire proprietary hardware ecosystem.
        </p>
      </section>

      <section className="px-8 py-8 border-b border-zinc-900 bg-zinc-900/20 sticky top-[72px] z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 items-start xl:items-center">
          
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm uppercase tracking-widest shrink-0">
            <Filter className="h-4 w-4" /> Parameters:
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-6">
            
            {/* System Classification */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">System Pillar</span>
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

            {/* Target Industry Filter */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Target Sector</span>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map(ind => (
                  <button
                    key={ind}
                    onClick={() => setActiveIndustry(ind)}
                    className={`px-3 py-1.5 font-mono text-xs border transition-colors ${
                      activeIndustry === ind 
                        ? 'bg-purple-600/10 border-purple-500 text-purple-400' 
                        : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Environment Filter */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Environment</span>
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

          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-7xl mx-auto min-h-[50vh]">
        
        {filteredHardware.length === 0 && (
          <div className="w-full py-24 flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
            <Terminal className="h-8 w-8 text-zinc-600 mb-4" />
            <p className="text-zinc-400 font-mono">ERR: NO_MODULES_MATCH_PARAMETERS</p>
            <button onClick={() => {setActiveCategory('All'); setActiveEnv('All'); setActiveIndustry('All');}} className="mt-4 text-xs text-blue-400 hover:text-blue-300 font-mono uppercase tracking-widest underline">
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
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">
                {product.tagline}
              </p>

              <div className="mt-auto">
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

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}