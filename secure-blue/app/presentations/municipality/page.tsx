"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Map,
  ShieldAlert,
  Droplets,
  Activity,
  Radio,
  Gauge,
  CircleStop,
  Sprout,
  CloudRain,
  Wind,
  Network,
  ClipboardCheck,
  TimerReset,
  Waves,
  Mic,
  Clock,
  ChevronUp,
  ChevronDown,
  LineChart,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type SlideVisual =
  | "hero"
  | "visibility"
  | "prevent"
  | "telemetry"
  | "conserve"
  | "generate"
  | "onsite"
  | "recovery"
  | "multifamily"
  | "os"
  | "pilot"
  | "cta";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  visual: SlideVisual;
  color: string;
  content: string;
  metric: string;
  speakerNotes: string;
  time: string;
};

export default function MunicipalityPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "SECURE Blue: A Three-Pathway Strategy",
      subtitle: "Prevent Loss. Conserve Resources. Generate Local Supply.",
      visual: "hero",
      color: "text-blue-400",
      content:
        "Water resilience begins inside existing city boundaries. SECURE Blue gives municipal teams the operational intelligence to stop loss, optimize use, and build targeted local supply—without forcing a massive upfront capital gamble.",
      metric: "URBAN_WATER_RESILIENCE",
      time: "0:00–0:45",
      speakerNotes:
        "Good morning. I'm Scott Holbrook, CTO of SECURE Blue.\n\nWhen municipal leaders discuss water scarcity, the conversation almost always jumps straight to large-scale capital projects or securing new regional water rights. While those are important, the most immediate, cost-effective opportunity for any city lies right inside its existing boundaries: stopping water loss, optimizing current operations, and generating targeted local supply.\n\nToday, I want to share a practical, three-pathway framework designed to give your operational teams real-time control, lower non-revenue water, and build long-term drought resilience—without requiring a massive, upfront capital risk.",
    },
    {
      id: 2,
      title: "Pathway 1: Prevent Water Loss",
      subtitle: "Stop waste before it becomes structural damage.",
      visual: "prevent",
      color: "text-amber-400",
      content:
        "The fastest water a city can secure is the water it stops losing today. While a typical home wastes 10,000 gallons yearly from minor leaks, a single unnoticed commercial or multifamily fixture leak can silently drain over 8,600 gallons a month. SECURE LeakStop combines continuous flow telemetry with autonomous shutoff valves to isolate high-risk municipal facilities instantly.",
      metric: "LEAKSTOP_CONTAINMENT_PROTOCOL",
      time: "1:45–3:00",
      speakerNotes:
        "The fastest, cheapest water a city can secure is the water it stops losing today.\n\nPathway 1 focuses on immediate containment. Through SECURE LeakStop, we instrument high-risk municipal assets—facilities, main lines, and public buildings—with flow and pressure sensors linked to connected shutoff valves.\n\nWhen you get back to your city, have your staff look at high-risk public facilities and aging community buildings where minor leaks compound into thousands of gallons of unbilled waste before anyone notices.",
    },
    {
      id: 3,
      title: "Pathway 2: Connect & Control",
      subtitle: "Telemetry and remote command wherever water flows.",
      visual: "telemetry",
      color: "text-emerald-400",
      content:
        "Water infrastructure cannot be managed only where Wi-Fi or affordable cellular service happens to exist. SECURE Blue uses long-range LoRaWAN telemetry to monitor and remotely control distributed municipal assets—meters, valves, pumps, tanks, irrigation zones, vaults, parks, public facilities, and recovery systems—through one secure operational layer.",
      metric: "CITYWIDE_REMOTE_OPERATIONS",
      time: "3:00–4:30",
      speakerNotes:
        "Pathway 2 begins with reach. Cities have water assets everywhere: parks, road medians, irrigation zones, utility vaults, pump stations, storage tanks, public buildings, cooling systems, and remote facilities. Many of those assets sit outside practical Wi-Fi coverage, and cellular service can become expensive and difficult to manage at scale.\n\nSECURE Blue uses long-range LoRaWAN telemetry to extend monitoring and remote command to distributed water assets across the city. The point is not simply irrigation. Every critical water asset should be visible, measured, and capable of being managed remotely according to its operational requirements.\n\nThat creates the field-to-command layer required for the next slide: condition-based decisions that replace fixed schedules and manual inspection with responsive operations.",
    },
    {
      id: 4,
      title: "Pathway 2: Conserve & Optimize",
      subtitle: "Operate Infrastructure with Real-Time Precision.",
      visual: "conserve",
      color: "text-emerald-400",
      content:
        "Once municipal assets are connected, operations can respond to real conditions instead of fixed schedules and manual inspections. SECURE Blue turns live flow, pressure, tank level, moisture, weather, and equipment-status data into approved actions—reducing unnecessary water use, energy demand, field dispatches, and avoidable asset wear.",
      metric: "CONDITION_BASED_OPERATIONS",
      time: "4:30–6:00",
      speakerNotes:
        "Connectivity creates visibility. Operational intelligence turns that visibility into measurable conservation and efficiency.\n\nThe goal is not simply smart irrigation. Every connected water asset can operate according to its actual condition rather than a fixed schedule or periodic manual inspection. A park zone can suppress irrigation after rain. A storage tank can alert staff before an abnormal level becomes an overflow or service interruption. A pump can be flagged when its pressure or run-time pattern changes. A facility can identify unusual overnight demand before it becomes a major bill or damage event.\n\nSECURE Blue applies rules approved by your operations team: monitor conditions, identify exceptions, notify the right people, and execute authorized responses remotely where appropriate. Conservation becomes an automated behavior of city infrastructure—while public works retains operational control and a verifiable record of each action.",
    },
    {
      id: 5,
      title: "Pathway 3: Generate Local Supply",
      subtitle: "Diversify and Source Water Locally.",
      visual: "generate",
      color: "text-indigo-400",
      content:
        "Reduce dependency on centralized sources by creating a localized portfolio: Atmospheric Water Generation (AWG) for off-grid sites, cooling-tower condensate recovery, rainwater harvesting, and approved graywater reuse.",
      metric: "LOCALIZED_SUPPLY_PORTFOLIO",
      time: "4:30–6:15",
      speakerNotes:
        "The third pathway is Generate. A resilient city cannot depend on a single, centralized water source.\n\nWe help cities construct a localized, diversified water portfolio. Depending on your geography and facilities, this includes capturing cooling-tower condensate, processing graywater for park irrigation, harvesting rainwater, or deploying Atmospheric Water Generation for off-grid municipal facilities.\n\nBy generating and recycling water directly at the point of use, you reduce load on your central grid, lower pumping costs, and insulate critical municipal operations against regional supply disruptions.",
    },
    {
      id: 6,
      title: "Onsite Water Resilience",
      subtitle: "Capture. Treat. Store. Deploy.",
      visual: "onsite",
      color: "text-cyan-400",
      content:
        "Turn a municipal facility, campus, recreation complex, or critical public asset into a managed water node. Capture available local sources, apply treatment matched to the approved end use, store water onsite, and deploy it where it creates the most operational value.",
      metric: "FACILITY_SCALE_WATER_RESILIENCE",
      time: "6:00–6:45",
      speakerNotes:
        "The value of local supply is not a single device. It is an onsite resilience system designed around the facility itself.\n\nFirst, identify the water sources available at that site: rainwater, stormwater, HVAC condensate, approved reuse streams, or—in the right temperature, humidity, and energy conditions—atmospheric water generation.\n\nSecond, match treatment to the intended use. Some sources may support non-potable uses such as irrigation, toilet flushing, cooling-tower make-up, washdown, or other approved facility demands. In specific applications, onsite atmospheric generation may support targeted drinking-water resilience.\n\nThird, store and manage water locally. SECURE Blue connects generation, recovery, storage, treatment status, water quality, and downstream demand into the same operational layer.\n\nThe objective is not to replace a city’s central supply. It is to reduce avoidable demand, create targeted redundancy, and keep priority facilities operating through disruption. The next two slides show what that looks like in cooling-intensive facilities and multifamily buildings.",
    },
    {
      id: 7,
      title: "Cooling-Tower Water Recovery",
      subtitle: "Recover the plume. Reuse the blowdown. Capture the site.",
      visual: "recovery",
      color: "text-cyan-400",
      content:
        "Cooling-intensive facilities concentrate multiple water-recovery opportunities. SECURE Blue can evaluate plume recovery, treatment and reuse of blowdown, rainwater capture across roofs and hardscape, and onsite storage—directing each source to the highest-value approved use.",
      metric: "FACILITY_SCALE_WATER_RECOVERY",
      time: "6:45–7:30",
      speakerNotes:
        "A cooling-intensive municipal facility, campus, data center, recreation complex, or central plant is not just a water customer. It can become a managed water-recovery node.\n\nFirst, the cooling-tower plume. In arid environments, ambient-air atmospheric generation may not make sense on its own. But a cooling-tower exhaust plume is warm and highly humid, which can create a materially better feed condition for atmospheric recovery—subject to site engineering, energy economics, and operating profile.\n\nSecond, cooling-tower blowdown. Blowdown is not simply a disposal problem. With the right treatment train and an approved end use, it can be evaluated as a recoverable non-potable stream for irrigation, washdown, toilet flushing, or other permitted facility demands.\n\nThird, site rainwater. Roof and hardscape runoff can be routed to storage and treatment instead of simply leaving the site.\n\nThe operating principle is capture the source, match treatment to the required end use, store water locally, and use controls to direct it where it creates the most value.",
    },
    {
      id: 8,
      title: "Multifamily Water Resilience",
      subtitle: "Protect Every Unit. Recover Every Available Source.",
      visual: "multifamily",
      color: "text-indigo-400",
      content:
        "A multifamily property can become a complete water-resilience node: detect and isolate leaks, capture roof runoff, recover greywater from showers and laundry, store treated water onsite, and reuse it for approved non-potable demand—all through one monitored operating layer.",
      metric: "BUILDING_SCALE_WATER_RESILIENCE",
      time: "7:30–8:30",
      speakerNotes:
        "Multifamily housing is a powerful example of the full SECURE Blue model working at one property.\n\nFirst, prevent loss. Connected flow monitoring and LeakStop valves can identify unusual demand and isolate a unit, riser, or approved zone before a small failure becomes extensive property damage, resident disruption, and an insurance claim.\n\nSecond, capture what the site already receives. Roof and hardscape runoff can be directed to storage and treatment rather than simply leaving the property. HVAC condensate can also be evaluated as a local source.\n\nThird, recover what the building already uses. Greywater from showers, lavatory sinks, and laundry can be treated, stored, and returned for approved non-potable uses such as toilet flushing, irrigation, cooling-tower make-up, or washdown.\n\nThis is not a claim that every building should operate off-grid. It is a practical building-scale resilience model: prevent unnecessary loss, reduce potable demand, reduce wastewater discharge, and create controlled onsite reserve capacity. SECURE Blue provides the monitoring, controls, alerts, and operational record that make the system manageable.",
    },
    {
      id: 9,
      title: "Unified Command: SECURE Blue OS",
      subtitle: "One connected platform, not disconnected projects.",
      visual: "os",
      color: "text-cyan-400",
      content:
        "Cities do not need more siloed dashboards. SECURE Blue OS acts as the operational layer—integrating leak detection, smart irrigation, and local supply generation into a single interface for public works and mayoral oversight.",
      metric: "UNIFIED_CIVIC_COMMAND",
      time: "6:15–7:30",
      speakerNotes:
        "The real power of SECURE Blue isn't just an individual valve or sensor—it’s the unified operating layer.\n\nCities don't need five more software logins or disconnected point solutions. SECURE Blue OS integrates telemetry from loss prevention, conservation sensors, and local generation into a single, cohesive interface.\n\nPublic works directors get real-time visibility across all municipal water assets, city managers get compliance and usage reporting, and mayors get a verifiable record of water stewardship.",
    },
    {
      id: 10,
      title: "The 90-Day Municipal Pilot",
      subtitle: "Low-Risk Deployment. Local Proof.",
      visual: "pilot",
      color: "text-emerald-400",
      content:
        "Do not commit to massive technology overhauls without proof. Select one high-priority facility. Establish a baseline, deploy targeted nodes, measure exact operational savings, and scale only where the ROI is defensible.",
      metric: "EVIDENCE_BASED_DEPLOYMENT",
      time: "7:30–9:00",
      speakerNotes:
        "We know that cities cannot—and should not—commit to massive technology overhauls without proof. That’s why we advocate starting with a 90-day pilot.\n\nWe select one high-value municipal site—such as a public park with high utility bills or a municipal facility with aging plumbing. We establish your baseline, deploy the hardware, and track performance for 90 days.\n\nAt the end of the pilot, you receive a clear, data-driven report showing exact gallons saved, cost reduction, and risk mitigated. You only scale what the data proves is cost-effective.",
    },
    {
      id: 11,
      title: "Build Operational Control",
      subtitle: "Water Stewardship That Can Be Measured.",
      visual: "cta",
      color: "text-blue-400",
      content:
        "Prevent loss today. Conserve existing supply tomorrow. Generate targeted local redundancy for the future. Schedule a 30-minute zero-commitment site assessment to identify your city's highest-value pilot location.",
      metric: "NEXT_ACTION_SITE_ASSESSMENT",
      time: "9:00–10:00",
      speakerNotes:
        "Water resilience doesn't require waiting for federal mega-projects. It begins today with operational control.\n\nBy preventing loss, conserving existing supplies, and generating local supply, your city can build immediate drought resilience while managing public funds responsibly.\n\nOur proposal is simple: Let us conduct a zero-commitment site assessment on one of your high-priority municipal assets. Let’s identify where you are losing water, where you can optimize, and how a 90-day pilot can deliver immediate value. Thank you.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? previous : previous + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((previous) => (previous === 0 ? 0 : previous - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      }

      if (event.key === "Home") {
        event.preventDefault();
        setCurrentSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, slides.length]);

  const current = slides[currentSlide];

  const renderVisual = () => {
    switch (current.visual) {
      case "hero":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-blue-500/20 bg-zinc-900 group">
            <img
              src="https://images.unsplash.com/photo-1729954924953-ff957b3e9edc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Industrial Power Plant and Cooling Towers"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="h-24 w-24 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <Gauge className="h-10 w-10 text-blue-400" />
              </div>
              <div className="backdrop-blur-md bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-5 text-center w-full max-w-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 mb-2">Regional Utility Node</div>
                <div className="text-xl font-bold text-white mb-3">Measure every drop. Protect every asset. Build local water security.</div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[92%] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        );

      case "prevent":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] border border-amber-500/20 bg-zinc-900 group">
            <img
              src="https://images.unsplash.com/photo-1686890363933-4a1125d4e3b0?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Industrial Water Valves"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="font-mono text-[9px] uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  Potential Losses From Leaks
                </div>
                <ShieldAlert className="h-5 w-5 text-amber-400 animate-pulse" />
              </div>

              {/* 6-Stat Grid */}
              <div className="grid grid-cols-2 gap-2 relative z-10">
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">Medium Toilet Leak</div>
                  <div className="text-base font-black text-amber-400">8,600 <span className="text-[10px] font-mono text-zinc-400">GAL/MO</span></div>
                  <div className="text-[10px] text-zinc-400">Up to $95 / mo</div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-amber-400 uppercase">Drip Irrigation</div>
                  <div className="text-base font-black text-white">43,200 <span className="text-[10px] font-mono text-amber-400">GAL/MO</span></div>
                  <div className="text-[10px] text-zinc-300">$5,700 / year</div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">Broken Line (1 Month)</div>
                  <div className="text-base font-black text-red-400">648,000 <span className="text-[10px] font-mono text-zinc-400">GAL</span></div>
                  <div className="text-[10px] text-zinc-400">Up to $7,200 / mo</div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-amber-400 uppercase">Cooling Tower Valve</div>
                  <div className="text-base font-black text-white">216k <span className="text-[10px] font-mono text-amber-400">GAL/MO</span></div>
                  <div className="text-[10px] text-zinc-300">$29,000 / year</div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-zinc-500 uppercase">Steam Sterilizer Line</div>
                  <div className="text-base font-black text-white">86,400 <span className="text-[10px] font-mono text-amber-400">GAL/MO</span></div>
                  <div className="text-[10px] text-zinc-300">$11,500 / year</div>
                </div>

                <div className="bg-zinc-950/90 border border-amber-500/30 rounded-xl p-2.5 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.1)] flex flex-col justify-center">
                  <div className="font-mono text-[8px] text-amber-400 uppercase">SECURE LeakStop</div>
                  <div className="text-xs font-bold text-emerald-400 uppercase mt-0.5">Automated Isolation</div>
                </div>
              </div>

              {/* Footer Citation Bar */}
              <div className="bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2 backdrop-blur-md flex items-center justify-between">
                <span className="font-mono text-[9px] text-zinc-500 uppercase">Reference Audit Metrics</span>
                <a 
                  href="https://www.epa.gov/watersense/getting-started" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] text-blue-400 hover:text-blue-300 underline"
                >
                  EPA WaterSense & Facility Audits ↗
                </a>
              </div>
            </div>
          </div>
        );

      case "telemetry":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-500/20 bg-zinc-900 group">
            <img
              src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=1200&q=80"
              alt="Distributed municipal water infrastructure and remote telemetry"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-emerald-950/30" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Citywide Remote Operations
                </div>

                <Radio className="h-5 w-5 text-cyan-400 animate-pulse" />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-2">
                <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-mono text-[8px] text-zinc-500 uppercase">
                      Planning Range
                    </div>
                    <Radio className="h-3.5 w-3.5 text-cyan-400" />
                  </div>

                  <div className="mt-1 text-lg font-black text-emerald-400">
                    3–15
                    <span className="ml-1 text-[10px] font-mono text-zinc-400">
                      KM
                    </span>
                  </div>

                  <div className="text-[10px] text-zinc-400">
                    Urban to open-area coverage*
                  </div>
                </div>

                <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-mono text-[8px] text-zinc-500 uppercase">
                      Field Power
                    </div>
                    <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  </div>

                  <div className="mt-1 text-lg font-black text-white">
                    Multi-Year
                  </div>

                  <div className="text-[10px] text-zinc-400">
                    Low-duty-cycle battery operation*
                  </div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-3 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-cyan-400 uppercase">
                    Asset Coverage
                  </div>

                  <div className="mt-1 text-sm font-bold text-white">
                    Monitor + Command
                  </div>

                  <div className="text-[10px] text-zinc-400">
                    Valves · meters · pumps · tanks · vaults
                  </div>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-3 backdrop-blur-md">
                  <div className="font-mono text-[8px] text-indigo-400 uppercase">
                    Network Design
                  </div>

                  <div className="mt-1 text-sm font-bold text-white">
                    Bi-Directional
                  </div>

                  <div className="text-[10px] text-zinc-400">
                    Telemetry upstream · remote actions downstream
                  </div>
                </div>

                <div className="col-span-2 bg-emerald-950/40 border border-emerald-500/25 rounded-xl p-3 backdrop-blur-md flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] text-emerald-400 uppercase">
                      Municipal asset layer
                    </div>

                    <div className="mt-1 text-xs font-semibold text-zinc-100">
                      Every critical water asset visible. Every approved action
                      remotely manageable.
                    </div>
                  </div>

                  <Network className="h-6 w-6 shrink-0 text-emerald-400" />
                </div>
              </div>

              <div className="bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2 backdrop-blur-md flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-400" />

                <span className="font-mono text-[8px] leading-relaxed text-zinc-500 uppercase">
                  *Coverage and battery life vary by terrain, building density,
                  payload size, reporting interval, radio configuration, power
                  source, and control frequency.
                </span>
              </div>
            </div>
          </div>
        );

      case "conserve":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-500/20 bg-zinc-900 group">
            <img
              src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=1200&q=80"
              alt="Municipal water operations monitored through real-time telemetry"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-emerald-950/30" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Condition-Based Operations
                </div>

                <Activity className="h-5 w-5 text-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-2.5 relative z-10">
                <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-3 backdrop-blur-md flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] text-zinc-500 uppercase">
                      Input Layer
                    </div>

                    <div className="text-xs font-semibold text-white mt-0.5">
                      Flow ·Pressure · Level · Moisture · Weather · Runtime
                    </div>
                  </div>

                  <Radio className="h-5 w-5 shrink-0 text-cyan-400" />
                </div>

                <div className="bg-zinc-950/90 border border-amber-500/25 rounded-xl p-3 backdrop-blur-md flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] text-amber-400 uppercase">
                      Decision Layer
                    </div>

                    <div className="text-xs font-semibold text-white mt-0.5">
                      Detect exceptions before they become waste or failure
                    </div>
                  </div>

                  <ShieldAlert className="h-5 w-5 shrink-0 text-amber-400" />
                </div>

                <div className="bg-zinc-950/90 border border-emerald-500/30 rounded-xl p-3 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] text-emerald-400 uppercase">
                      Action Layer
                    </div>

                    <div className="text-xs font-bold text-white mt-0.5">
                      Alert staff · Adjust operation · Execute approved response
                    </div>
                  </div>

                  <CircleStop className="h-5 w-5 shrink-0 text-emerald-400" />
                </div>
              </div>

              <div className="bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2.5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] text-zinc-400 uppercase">
                    Operational outcomes
                  </span>

                  <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase">
                    Less waste · fewer dispatches · longer asset life
                  </span>
                </div>

                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[78%] bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(16,185,129,0.55)]" />
                </div>
              </div>
            </div>
          </div>
        );

      case "generate":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_45px_rgba(99,102,241,0.15)] border border-indigo-500/20 bg-zinc-900">
             <div className="absolute inset-0 bg-zinc-950" />
            <div className="absolute inset-0 p-6 grid grid-cols-2 gap-4">
              
              {/* AWG */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 group">
                <img src="https://images.unsplash.com/photo-1521404176313-085e6cb8eb0c?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity" alt="AWG" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-4 flex flex-col justify-end">
                  <Wind className="h-5 w-5 text-indigo-400 mb-2" />
                  <div className="font-mono text-[9px] text-zinc-400 uppercase">Atmospheric</div>
                  <div className="text-sm font-semibold text-white">Generation (AWG)</div>
                </div>
              </div>

              {/* Rain */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 group">
                <img src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity" alt="Rain" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-4 flex flex-col justify-end">
                  <CloudRain className="h-5 w-5 text-cyan-400 mb-2" />
                  <div className="font-mono text-[9px] text-zinc-400 uppercase">Stormwater</div>
                  <div className="text-sm font-semibold text-white">Rain Harvesting</div>
                </div>
              </div>

              {/* Graywater */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 group">
                <img src="https://images.unsplash.com/photo-1542282811-943ef1a67779?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity" alt="Graywater" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-4 flex flex-col justify-end">
                  <Waves className="h-5 w-5 text-blue-400 mb-2" />
                  <div className="font-mono text-[9px] text-zinc-400 uppercase">Non-Potable</div>
                  <div className="text-sm font-semibold text-white">Graywater Reuse</div>
                </div>
              </div>

              {/* Condensate */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 group">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity" alt="Cooling Tower" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-4 flex flex-col justify-end">
                  <Building2 className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="font-mono text-[9px] text-zinc-400 uppercase">HVAC & Facility</div>
                  <div className="text-sm font-semibold text-white">Cooling Condensate</div>
                </div>
              </div>

            </div>
          </div>
        );

      case "onsite":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-cyan-500/20 bg-zinc-900 group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Municipal facility with onsite water resilience systems"
              className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale mix-blend-luminosity"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-cyan-950/30" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                  Facility-Scale Water Node
                </div>

                <Building2 className="h-5 w-5 text-cyan-400 animate-pulse" />
              </div>

              <div className="relative z-10">
                <div className="bg-zinc-950/90 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Network className="h-4 w-4 text-cyan-400" />

                      <span className="font-mono text-[10px] uppercase text-zinc-200">
                        Onsite Water Resilience
                      </span>
                    </div>

                    <span className="font-mono text-[8px] uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-1">
                      Managed
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-zinc-800 rounded-lg bg-zinc-900/70 p-3">
                      <CloudRain className="h-4 w-4 text-cyan-400 mb-2" />

                      <div className="font-mono text-[8px] text-zinc-500 uppercase">
                        Capture
                      </div>

                      <div className="mt-1 text-xs font-semibold text-white">
                        Rain · condensate · reuse streams
                      </div>
                    </div>

                    <div className="border border-zinc-800 rounded-lg bg-zinc-900/70 p-3">
                      <Activity className="h-4 w-4 text-amber-400 mb-2" />

                      <div className="font-mono text-[8px] text-zinc-500 uppercase">
                        Treat
                      </div>

                      <div className="mt-1 text-xs font-semibold text-white">
                        End-use matched quality
                      </div>
                    </div>

                    <div className="border border-zinc-800 rounded-lg bg-zinc-900/70 p-3">
                      <Droplets className="h-4 w-4 text-blue-400 mb-2" />

                      <div className="font-mono text-[8px] text-zinc-500 uppercase">
                        Store
                      </div>

                      <div className="mt-1 text-xs font-semibold text-white">
                        Local reserve capacity
                      </div>
                    </div>

                    <div className="border border-zinc-800 rounded-lg bg-zinc-900/70 p-3">
                      <Wind className="h-4 w-4 text-indigo-400 mb-2" />

                      <div className="font-mono text-[8px] text-zinc-500 uppercase">
                        Generate
                      </div>

                      <div className="mt-1 text-xs font-semibold text-white">
                        AWG where conditions fit
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 border border-emerald-500/25 rounded-lg bg-emerald-950/25 p-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-mono text-[8px] text-emerald-400 uppercase">
                        Approved End Uses
                      </div>

                      <div className="mt-1 text-[11px] font-semibold text-zinc-100">
                        Irrigation · flushing · cooling · washdown · targeted drinking water
                      </div>
                    </div>

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2.5 backdrop-blur-md flex items-start gap-2">
                <ShieldAlert className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-400" />

                <span className="font-mono text-[8px] leading-relaxed text-zinc-500 uppercase">
                  Source selection, treatment, storage, end use, and controls are
                  engineered to local site conditions and applicable regulatory requirements.
                </span>
              </div>
            </div>
          </div>
        );

        case "recovery":
          return (
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-cyan-500/20 bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Cooling-intensive facility and onsite water recovery system"
                className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-cyan-950/30" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                    Facility-Scale Recovery
                  </div>

                  <Building2 className="h-5 w-5 text-cyan-400 animate-pulse" />
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-2">
                  <div className="bg-zinc-950/90 border border-cyan-500/20 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-mono text-[8px] text-cyan-400 uppercase">
                        Plume Recovery
                      </div>

                      <Wind className="h-4 w-4 text-cyan-400" />
                    </div>

                    <div className="mt-2 text-sm font-bold text-white">
                      Cooling-Tower Exhaust
                    </div>

                    <div className="mt-1 text-[10px] text-zinc-400">
                      Evaluate warm, humid air as an AWG feed source
                    </div>
                  </div>

                  <div className="bg-zinc-950/90 border border-amber-500/20 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-mono text-[8px] text-amber-400 uppercase">
                        Blowdown Reuse
                      </div>

                      <Waves className="h-4 w-4 text-amber-400" />
                    </div>

                    <div className="mt-2 text-sm font-bold text-white">
                      Treat + Reuse
                    </div>

                    <div className="mt-1 text-[10px] text-zinc-400">
                      Approved non-potable end uses after treatment
                    </div>
                  </div>

                  <div className="bg-zinc-950/90 border border-blue-500/20 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-mono text-[8px] text-blue-400 uppercase">
                        Site Rainwater
                      </div>

                      <CloudRain className="h-4 w-4 text-blue-400" />
                    </div>

                    <div className="mt-2 text-sm font-bold text-white">
                      Roof + Hardscape Capture
                    </div>

                    <div className="mt-1 text-[10px] text-zinc-400">
                      Route eligible runoff to storage and treatment
                    </div>
                  </div>

                  <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-mono text-[8px] text-emerald-400 uppercase">
                        Local Storage
                      </div>

                      <Droplets className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div className="mt-2 text-sm font-bold text-white">
                      Managed Reserve
                    </div>

                    <div className="mt-1 text-[10px] text-zinc-400">
                      Store and deploy water when facility demand occurs
                    </div>
                  </div>

                  <div className="col-span-2 bg-cyan-950/25 border border-cyan-500/25 rounded-xl p-3 backdrop-blur-md flex items-center justify-between gap-4">
                    <div>
                      <div className="font-mono text-[8px] text-cyan-400 uppercase">
                        Controlled Water Routing
                      </div>

                      <div className="mt-1 text-xs font-semibold text-zinc-100">
                        Capture → Treat → Store → Deploy to approved end use
                      </div>
                    </div>

                    <Network className="h-6 w-6 shrink-0 text-cyan-400" />
                  </div>
                </div>

                <div className="bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2.5 backdrop-blur-md flex items-start gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-400" />

                  <span className="font-mono text-[8px] leading-relaxed text-zinc-500 uppercase">
                    Recovery, treatment, storage, and end use are engineered to site
                    chemistry, demand, energy profile, regulatory requirements, and
                    approved water-quality standards.
                  </span>
                </div>
              </div>
            </div>
          );

        case "multifamily":
          return (
            <div className="relative w-full aspect-[5/4] max-w-[540px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] border border-indigo-500/20 bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                alt="Multifamily residential building with integrated onsite water resilience"
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-indigo-950/30" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="absolute inset-0 p-5 flex flex-col">
                <div className="flex-none flex justify-between items-center">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full">
                    Building-Scale Resilience
                  </div>

                  <Building2 className="h-5 w-5 text-indigo-400 animate-pulse" />
                </div>

                <div className="relative z-10 flex-1 flex items-center py-3">
                  <div className="w-full bg-zinc-950/90 border border-indigo-500/20 rounded-xl p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2">
                        <Network className="h-4 w-4 text-indigo-400" />

                        <span className="font-mono text-[10px] uppercase text-zinc-200">
                          Multifamily Resilience Loop
                        </span>
                      </div>

                      <span className="font-mono text-[8px] uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-1">
                        Managed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-amber-500/25 rounded-lg bg-amber-950/20 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-mono text-[8px] text-amber-400 uppercase">
                            01 // Prevent
                          </div>

                          <ShieldAlert className="h-4 w-4 text-amber-400" />
                        </div>

                        <div className="mt-1.5 text-xs font-semibold text-white">
                          LeakStop Monitoring
                        </div>

                        <div className="mt-1 text-[10px] leading-snug text-zinc-400">
                          Detect abnormal flow and isolate approved zones remotely.
                        </div>
                      </div>

                      <div className="border border-blue-500/25 rounded-lg bg-blue-950/20 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-mono text-[8px] text-blue-400 uppercase">
                            02 // Capture
                          </div>

                          <CloudRain className="h-4 w-4 text-blue-400" />
                        </div>

                        <div className="mt-1.5 text-xs font-semibold text-white">
                          Roof + Site Runoff
                        </div>

                        <div className="mt-1 text-[10px] leading-snug text-zinc-400">
                          Route eligible rainwater to storage and treatment.
                        </div>
                      </div>

                      <div className="border border-indigo-500/25 rounded-lg bg-indigo-950/20 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-mono text-[8px] text-indigo-400 uppercase">
                            03 // Recover
                          </div>

                          <Waves className="h-4 w-4 text-indigo-400" />
                        </div>

                        <div className="mt-1.5 text-xs font-semibold text-white">
                          Greywater Reuse
                        </div>

                        <div className="mt-1 text-[10px] leading-snug text-zinc-400">
                          Recover showers, lavatories, and laundry water.
                        </div>
                      </div>

                      <div className="border border-emerald-500/25 rounded-lg bg-emerald-950/20 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-mono text-[8px] text-emerald-400 uppercase">
                            04 // Deploy
                          </div>

                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        </div>

                        <div className="mt-1.5 text-xs font-semibold text-white">
                          Managed Reuse
                        </div>

                        <div className="mt-1 text-[10px] leading-snug text-zinc-400">
                          Flush fixtures, irrigate, wash down, or cool.
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 border border-cyan-500/25 rounded-lg bg-cyan-950/20 px-3 py-2.5 flex items-center justify-between gap-3">
                      <div>
                        <div className="font-mono text-[8px] text-cyan-400 uppercase">
                          SECURE Blue Operating Layer
                        </div>

                        <div className="mt-1 text-[10px] font-semibold text-zinc-100">
                          Monitor → alert → isolate → treat → store → deploy
                        </div>
                      </div>

                      <Activity className="h-5 w-5 shrink-0 text-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="flex-none bg-zinc-950/95 border border-zinc-800 rounded-xl px-3 py-2 backdrop-blur-md flex items-start gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-400" />

                  <span className="font-mono text-[8px] leading-relaxed text-zinc-500 uppercase">
                    Design includes source separation, treatment, storage,
                    cross-connection protection, monitoring, and applicable local approvals.
                  </span>
                </div>
              </div>
            </div>
          );
      
        case "os":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-cyan-500/20 bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Command Center Dashboard"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />

            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
              <div className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4 text-cyan-400" />
                    <span className="font-mono text-[10px] uppercase text-zinc-300">SECURE Blue OS</span>
                  </div>
                  <div className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded font-mono text-[8px] text-emerald-400 uppercase">System Active</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-lg p-3">
                    <LineChart className="h-4 w-4 text-amber-400 mb-2" />
                    <div className="text-lg font-bold text-white">12.4k<span className="text-[10px] text-zinc-500 ml-1">GAL</span></div>
                    <div className="font-mono text-[8px] text-zinc-500 uppercase mt-1">Loss Prevented</div>
                  </div>
                  <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-lg p-3">
                    <Sprout className="h-4 w-4 text-emerald-400 mb-2" />
                    <div className="text-lg font-bold text-white">4.1k<span className="text-[10px] text-zinc-500 ml-1">GAL</span></div>
                    <div className="font-mono text-[8px] text-zinc-500 uppercase mt-1">Conserved Today</div>
                  </div>
                  <div className="col-span-2 bg-blue-950/20 border border-blue-500/20 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <div className="font-mono text-[8px] text-blue-400 uppercase">Local Supply (AWG + Reuse)</div>
                      <div className="text-sm font-bold text-white mt-0.5">850 GAL Generated</div>
                    </div>
                    <Activity className="h-4 w-4 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "pilot":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_45px_rgba(16,185,129,0.15)] border border-emerald-500/20 bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Municipal Building"
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-transparent p-6 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-6">
                <TimerReset className="h-6 w-6 text-emerald-400" />
                <h3 className="font-mono text-[12px] text-emerald-400 uppercase tracking-widest">90-Day Rollout</h3>
              </div>

              <div className="space-y-2 relative z-10">
                {[
                  ["01", "Select High-Value Site"],
                  ["02", "Establish Audit Baseline"],
                  ["03", "Deploy Targeted Nodes"],
                  ["04", "Measure Exact ROI"],
                  ["05", "Scale Based on Proof"],
                ].map(([num, label], i) => (
                  <div key={num} className="flex items-center gap-3 bg-zinc-950/60 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-2.5">
                    <div className={`font-mono text-[10px] w-6 text-center ${i === 4 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}`}>{num}</div>
                    <div className={`text-sm ${i === 4 ? 'text-white font-medium' : 'text-zinc-300'}`}>{label}</div>
                    {i === 4 && <ClipboardCheck className="h-4 w-4 text-emerald-400 ml-auto mr-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)] border border-blue-500/30 bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80"
              alt="City Aerial"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/70 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col items-center justify-end text-center">
              <div className="backdrop-blur-xl bg-zinc-950/80 border border-blue-500/30 rounded-2xl p-6 w-full max-w-sm mb-4 shadow-2xl">
                <Map className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Identify The First Asset
                </div>
                <div className="text-lg font-bold text-white mb-4">
                  Municipal Site Assessment
                </div>
                <a
                  href="mailto:scott.holbrook@secureblue.earth"
                  className="flex items-center justify-center gap-2 w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-300 transition-colors py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-widest"
                >
                  Contact Scott
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return <Activity className="h-32 w-32 text-indigo-500" />;
    }
  };

  return (
    <div className="w-full min-h-[calc(100dvh-80px)] flex flex-col bg-zinc-950 text-zinc-50 font-sans overflow-x-hidden md:h-[calc(100dvh-80px)] md:min-h-[600px] md:overflow-hidden">
      
      {/* Header stays rigidly at the top */}
      <header className="flex-none px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] md:p-8 md:px-12 md:py-8 flex justify-between items-center z-10 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="font-bold tracking-tighter text-base md:text-xl flex items-center gap-2">
          <div className="h-5 w-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-sm shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          SECURE BLUE
        </div>

        {/* Progress Bar */}
        <div className="hidden md:flex gap-1.5 items-center">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`h-1.5 w-4 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : index < currentSlide
                    ? "bg-zinc-600 hover:bg-zinc-500"
                    : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            />
          ))}
        </div>

        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          SLIDE {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </header>

      {/* Main Content area */}
      <main className="flex-1 relative min-h-0 overflow-hidden flex">
        
        {/* Slide Content takes 100% width, keeping the presentation perfectly centered */}
        <div className="flex-1 w-full flex flex-col overflow-y-auto relative">
          <div className="min-h-full flex items-start justify-center px-4 py-6 md:items-center md:p-12">
            <div
              key={current.id}
              className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              {/* Left: Text Content */}
              <div className="space-y-6 lg:pr-8 py-4">
                <div className={`font-mono text-[10px] font-bold uppercase tracking-[0.25em] ${current.color} flex items-center gap-2`}>
                  <div className={`h-1.5 w-1.5 rounded-full bg-current animate-pulse`} />
                  {current.metric}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
                  {current.title}
                </h1>

                <h2 className="text-xl md:text-2xl text-zinc-400 font-light italic border-l-2 border-zinc-800 pl-5">
                  {current.subtitle}
                </h2>

                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                  {current.content}
                </p>

                {current.id === 1 && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="rounded-md border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-amber-400">
                      Pathway 1: Prevent
                    </span>
                    <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                      Pathway 2: Conserve
                    </span>
                    <span className="rounded-md border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-indigo-400">
                      Pathway 3: Generate
                    </span>
                  </div>
                )}

                {current.id === 11 && (
                  <div className="pt-4 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    <div>Presenter: Scott Holbrook, CTO</div>
                    <div className="text-blue-400">scott.holbrook@secureblue.earth</div>
                    <div className="text-zinc-600">https://secureblue.earth</div>
                  </div>
                )}
              </div>

              {/* Right: Visual component */}
              <div className="flex justify-center lg:justify-end pb-8 lg:pb-0">
                {renderVisual()}
              </div>
            </div>
          </div>
        </div>

        {/* Speaker Notes Drawer (Absolute Overlay) */}
        <div
          className={`absolute bottom-0 right-0 w-full md:w-80 lg:w-96 bg-zinc-900/95 backdrop-blur-xl border-t md:border-t-0 md:border-l border-zinc-800 transition-transform duration-500 ease-in-out z-20 flex flex-col h-[60vh] md:h-full ${
            notesOpen 
              ? "translate-y-0 md:translate-x-0" 
              : "translate-y-full md:translate-y-0 md:translate-x-full"
          }`}
        >
          <div className="flex-none p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/50">
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
              <Mic className="h-3.5 w-3.5" />
              Speaker Notes
            </div>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
              <Clock className="h-3.5 w-3.5" />
              {current.time}
            </div>
            <button
              className="md:hidden p-1 text-zinc-400 hover:text-white"
              onClick={() => setNotesOpen(false)}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 p-6 overflow-y-auto font-sans text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
            {current.speakerNotes}
          </div>
        </div>
      </main>

      {/* Footer controls stay rigidly at the bottom */}
      <footer className="flex-none p-4 md:px-8 md:py-6 flex justify-between items-center border-t border-zinc-900 bg-zinc-950 z-30">
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center justify-center gap-2 w-28 md:w-auto px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors disabled:opacity-30 disabled:hover:bg-transparent font-mono text-[10px] uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden md:inline">Previous</span>
        </button>

        <button
          type="button"
          onClick={() => setNotesOpen(!notesOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-mono text-[10px] uppercase tracking-widest ${
            notesOpen 
              ? "bg-blue-500/10 border-blue-500/30 text-blue-400" 
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          <Mic className="h-3 w-3" />
          <span className="hidden sm:inline">{notesOpen ? "Hide Notes" : "View Speaker Notes"}</span>
          <span className="sm:hidden">Notes</span>
          {notesOpen ? <ChevronDown className="h-3 w-3 hidden md:block" /> : <ChevronUp className="h-3 w-3 hidden md:block" />}
        </button>

        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center justify-center gap-2 w-28 md:w-auto px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors disabled:opacity-30 disabled:hover:bg-transparent font-mono text-[10px] uppercase tracking-widest"
        >
          <span className="hidden md:inline">Next</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}