import React from 'react';
import { 
  Droplets, ShieldCheck, Wind, Activity, ArrowRight, Terminal, 
  Database, Network, Cpu, Globe, BarChart3, Crosshair, Zap, Lock, LineChart
} from 'lucide-react';
import Link from 'next/link';

export default function SecureBlueCommandCenter() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30">
      
      {/* HERO SECTION: The Terminal Hook */}
      <section className="relative px-8 pt-24 pb-16 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Terminal className="mr-2 h-3.5 w-3.5 text-cyan-400" />
              Secure Blue OS v1.0
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Command your infrastructure with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">IoT telemetry.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-light">
              A comprehensive command center for global water management. Stop leaks, source atmospheric water, and automate irrigation from a single, high-performance dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#dashboard">
                <button className="h-14 px-8 flex items-center justify-center text-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-none border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] font-bold">
                  Initialize Terminal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="#solutions">
                <button className="h-14 px-8 flex items-center justify-center text-lg w-full sm:w-auto border border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-none font-mono uppercase tracking-widest transition-colors">
                  Browse Nodes
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/80 p-2 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-zinc-800">
              <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-2 text-xs font-mono text-zinc-500">sb-telemetry-view</span>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-zinc-950 flex items-center justify-center border border-zinc-800/50">
               {/* Placeholder for actual dashboard screenshot */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black opacity-50"></div>
               <Activity className="h-16 w-16 text-cyan-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE INFRASTRUCTURE (The 3 Pillars) */}
      <section id="solutions" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Core Infrastructure</h2>
              <p className="text-zinc-500 font-mono text-sm">System modules available in your command center.</p>
            </div>
            <div className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              STATUS: LORAWAN GATEWAYS ONLINE
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* LeakStop */}
            <div className="bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-colors rounded-none flex flex-col p-6 group">
              <div className="pb-4">
                <ShieldCheck className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-mono uppercase tracking-wider font-bold">01. LeakStop</h3>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Autonomous holistic sensors with LoRaWAN integration. Deploy instant shut-off capabilities across entire facilities to prevent catastrophic water loss and infrastructure damage.
                </p>
                <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500">
                  <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-blue-500" /> Valve Actuation</span>
                  <span className="flex items-center gap-2"><Database className="h-3 w-3 text-blue-500" /> Flow Analytics</span>
                </div>
              </div>
            </div>

            {/* A2W / Sourcing */}
            <div className="bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/50 transition-colors rounded-none flex flex-col p-6 group">
              <div className="pb-4">
                <Wind className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-mono uppercase tracking-wider font-bold">02. Sourcing</h3>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Extract high-purity water directly from the atmosphere. Our A2W machines operate independently of local grid constraints, providing reliable water generation for remote or strained facilities.
                </p>
                <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500">
                  <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-cyan-500" /> Humidity Parsing</span>
                  <span className="flex items-center gap-2"><Database className="h-3 w-3 text-cyan-500" /> Generation Metrics</span>
                </div>
              </div>
            </div>

            {/* Conservation / Irrigation */}
            <div className="bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-colors rounded-none flex flex-col p-6 group">
              <div className="pb-4">
                <Droplets className="h-8 w-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-mono uppercase tracking-wider font-bold">03. Conservation</h3>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Intelligent distribution. Combine smart irrigation arrays with graywater distillation to drastically reduce consumption for golf courses, large-scale farms, and resort grounds.
                </p>
                <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500">
                  <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-emerald-500" /> Soil Saturation</span>
                  <span className="flex items-center gap-2"><Database className="h-3 w-3 text-emerald-500" /> Distillation Yield</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA FEEDS SECTION */}
      <section className="px-8 py-24 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Data-Driven Resource Management</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Stop guessing. Secure Blue OS pipes real-time facility telemetry, atmospheric data, and consumption analytics directly into your dashboard, enabling institutional-grade oversight.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Telemetry Data Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold">LoRaWAN Telemetry</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 h-20">
                Low-cost, low-power data transfer across vast areas. Monitor sensors across entire golf courses or hospital wings without laying miles of cable.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-sm font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; NETWORK_STATUS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SIGNAL_STRENGTH</span>
                  <span className="text-emerald-400">-84 dBm (Strong)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ACTIVE_NODES</span>
                  <span className="text-zinc-300">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">PACKET_LOSS</span>
                  <span className="text-blue-400">&lt; 0.01%</span>
                </div>
              </div>
            </div>

            {/* Environmental Data Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-semibold">Atmospheric Index</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 h-20">
                Optimize your Air-to-Water generation. Live tracking of ambient humidity, temperature, and dew points to maximize machine yield and efficiency.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-sm font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; A2W_METRICS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">RELATIVE_HUMIDITY</span>
                  <span className="text-cyan-400">68%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">DEW_POINT</span>
                  <span className="text-zinc-300">18°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">GEN_RATE</span>
                  <span className="text-emerald-400">4.2L / Hr</span>
                </div>
              </div>
            </div>

            {/* Financial Data Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Crosshair className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-semibold">Utility Analytics</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 h-20">
                Track your ROI in real-time. The terminal aggregates water saved via LeakStop and generated via A2W against local municipal utility rates.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-sm font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; COST_SAVINGS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">VOLUME_SAVED_MTD</span>
                  <span className="text-emerald-400">12,400 GAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">MUNICIPAL_RATE</span>
                  <span className="text-zinc-300">$0.007 / GAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">PROJECTED_ROI</span>
                  <span className="text-emerald-400">14 Months</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DASHBOARD DEEP DIVE (Visual Proof / Terminal Replacement) */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mock Terminal & Network Diagram */}
          <div className="space-y-6">
            {/* Terminal Window Mockup */}
            <div className="rounded-md border border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-2 text-xs font-mono text-zinc-500">sb_gateway_log</span>
              </div>
              <div className="p-5 font-mono text-[10px] sm:text-xs text-emerald-500/70 space-y-2 h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950 z-10" />
                <p>&gt; initializing LoRaWAN gateway routing...</p>
                <p>&gt; connecting to sensor network... <span className="text-zinc-300">[OK]</span></p>
                <p>&gt; fetching current flow rates: NODE_SEC_A</p>
                <p className="text-red-400">&gt; WARNING: anomalous flow detected at valve_42</p>
                <p>&gt; validating threshold parameters...</p>
                <p className="text-cyan-400">&gt; executing autonomous shut-off protocol.</p>
                <p>&gt; waiting for actuator confirmation...</p>
                <p>&gt; valve_42 secured. water loss mitigated.</p>
                <p>&gt; logging event to analytics dashboard...</p>
                <p className="animate-pulse">&gt; _</p>
              </div>
            </div>

            {/* Architecture Node Mockup */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-md flex flex-col items-center justify-center text-center gap-2 shadow-inner">
                <Cpu className="h-6 w-6 text-blue-400 mb-1" />
                <span className="font-mono text-xs text-zinc-300">Edge Processing</span>
                <span className="text-[10px] text-zinc-500">Zero-Latency Action</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-md flex flex-col items-center justify-center text-center gap-2 shadow-inner">
                <Network className="h-6 w-6 text-cyan-400 mb-1" />
                <span className="font-mono text-xs text-zinc-300">LoRa Mesh Network</span>
                <span className="text-[10px] text-zinc-500">10km+ Range</span>
              </div>
            </div>
          </div>

          {/* Right Side: Features */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-8">Unprecedented operational control.</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Total Facility Overwatch</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    View every valve, sensor, and A2W machine across your property in one centralized interface. Control infrastructure remotely with immediate execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Consulting & System Design</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    We don&apos;t just sell hardware. Our engineers design bespoke, holistic layouts for golf courses, schools, and government facilities to ensure maximum efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Automated Conservation</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Our smart systems communicate with each other. If soil sensors detect rain, irrigation is halted. Graywater is automatically routed for secondary distillation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <Link href="#contact">
                <button className="flex items-center rounded-none border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-sm px-6 py-3 transition-colors">
                  Request System Audit <Terminal className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE SECURE BLUE ADVANTAGE */}
      <section className="px-8 py-24 bg-blue-900/5 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The SECURE Blue Advantage</h2>
            <p className="text-zinc-400">Why legacy water management is costing your facility time, money, and resources.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
            
            {/* The Old Way */}
            <div className="bg-zinc-950 p-10">
              <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-2">
                <LineChart className="h-5 w-5 rotate-180" /> Legacy Infrastructure
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300">Reactive Maintenance</h4>
                    <p className="text-xs text-zinc-500 mt-1">Leaks are only discovered after structural damage or a massive utility bill arrives.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300">Grid Dependency</h4>
                    <p className="text-xs text-zinc-500 mt-1">Subject to municipal rationing, drought restrictions, and rising local water costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300">Blind Operations</h4>
                    <p className="text-xs text-zinc-500 mt-1">Irrigation runs on timers, not data. Watering happens regardless of soil saturation.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Secure Blue Way */}
            <div className="bg-zinc-900/80 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full" />
              <h3 className="text-xl font-bold text-cyan-400 mb-8 flex items-center gap-2 relative z-10">
                <Zap className="h-5 w-5" /> Secure Blue OS
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Autonomous Mitigation</h4>
                    <p className="text-xs text-cyan-200/70 mt-1">LeakStop sensors shut off valves instantly upon detecting anomalous flow.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Independent Sourcing</h4>
                    <p className="text-xs text-cyan-200/70 mt-1">A2W machines pull clean water from the air, insulating you from grid failures.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Data-Driven Logic</h4>
                    <p className="text-xs text-cyan-200/70 mt-1">LoRaWAN networks aggregate moisture data to ensure water is only deployed when needed.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 border-t border-zinc-800 bg-zinc-950 text-center">
        <h2 className="text-3xl font-bold mb-6">Upgrade Your Infrastructure.</h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Join leading resorts, hospitals, and agricultural hubs operating on Secure Blue&apos;s IoT infrastructure.
        </p>
        <Link href="#contact">
          <button className="h-14 px-10 flex mx-auto items-center justify-center text-lg bg-white text-black hover:bg-zinc-200 rounded-none font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Lock className="mr-2 h-5 w-5" /> Access the Terminal
          </button>
        </Link>
      </section>

    </div>
  );
}