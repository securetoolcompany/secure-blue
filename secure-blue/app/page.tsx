import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Droplets, ShieldCheck, Wind, Activity, ArrowRight, Terminal, 
  Database, Network, Cpu, Globe, BarChart3, Crosshair, Zap, Lock, LineChart,
  Filter, ArrowLeftRight, Radio, Gauge, Battery, Power, Wrench
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
            <div className="inline-flex items-center rounded-none border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Terminal className="mr-2 h-3.5 w-3.5 text-cyan-400" />
              Secure Blue OS v1.0
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              Total command over your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">water infrastructure.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-light">
              Understand exactly what your infrastructure is doing. We pipe live sensor data and environmental variables into a single command center to help you stop leaks, automate delivery systems, and source water from thin air.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#dashboard">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-none border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  Initialize Terminal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#solutions">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-none font-mono tracking-widest uppercase">
                  Browse Nodes
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Dashboard Preview (Data-Rich Visualization) */}
          <div className="relative rounded-none border border-zinc-800 bg-zinc-950 p-2 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-zinc-800">
              <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-2 text-xs font-mono text-zinc-500">sb-telemetry-view</span>
            </div>
            
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 flex flex-col border border-zinc-800/50 text-xs font-mono">
               {/* Background Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/0 via-zinc-950/50 to-zinc-950 opacity-100 pointer-events-none"></div>
               
               {/* Dashboard Content */}
               <div className="relative z-10 flex flex-col h-full p-4 gap-4">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2">
                       <Activity className="h-4 w-4 text-cyan-500" />
                       <span className="text-zinc-300 font-bold tracking-widest uppercase">Global Telemetry</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-emerald-400">SYS.ONLINE</span>
                      <span className="text-zinc-500">NODES: 1,402</span>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-3 gap-4 flex-1">
                     {/* Left Column: Alerts & Nodes */}
                     <div className="col-span-1 flex flex-col gap-4">
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-sm flex-1">
                           <div className="text-zinc-500 mb-2 border-b border-zinc-800 pb-1">LIVE_ALERTS</div>
                           <div className="space-y-2 text-[10px]">
                              <div className="flex justify-between text-zinc-300"><span className="text-blue-400">[OK]</span> VLV_A12</div>
                              <div className="flex justify-between text-zinc-300"><span className="text-blue-400">[OK]</span> VLV_A13</div>
                              <div className="flex justify-between text-red-400 animate-pulse"><span>[WARN]</span> FLOW_DROP_B04</div>
                              <div className="flex justify-between text-zinc-300"><span className="text-blue-400">[OK]</span> A2W_UNIT_7</div>
                           </div>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-sm">
                           <div className="text-zinc-500 mb-1">A2W_YIELD</div>
                           <div className="text-2xl text-cyan-400 font-bold">482<span className="text-xs text-zinc-500 ml-1 font-normal">L/HR</span></div>
                        </div>
                     </div>

                     {/* Right Column (Span 2): Charts & Maps */}
                     <div className="col-span-2 flex flex-col gap-4">
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-sm flex-1 flex flex-col">
                           <div className="flex justify-between items-center mb-4">
                             <span className="text-zinc-500">CONSUMPTION_RATE (24H)</span>
                             <LineChart className="h-3 w-3 text-zinc-500" />
                           </div>
                           {/* Simulated Bar Chart */}
                           <div className="flex-1 flex items-end gap-[2px] px-2">
                             {[40, 60, 45, 80, 50, 65, 30, 40, 70, 85, 60, 40, 30, 20, 50, 60].map((h, i) => (
                               <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-400 transition-colors border-t border-blue-500/50" style={{ height: `${h}%` }}></div>
                             ))}
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-16">
                           <div className="bg-zinc-900/60 border border-zinc-800 p-2 px-3 rounded-sm flex justify-between items-center">
                              <div>
                                 <div className="text-[9px] text-zinc-500 mb-0.5">SOIL_SATURATION</div>
                                 <div className="text-emerald-400 font-bold">OPTIMAL (42%)</div>
                              </div>
                              <Droplets className="h-4 w-4 text-emerald-500/50" />
                           </div>
                           <div className="bg-zinc-900/60 border border-zinc-800 p-2 px-3 rounded-sm flex justify-between items-center">
                              <div>
                                 <div className="text-[9px] text-zinc-500 mb-0.5">LORAWAN_UPLINK</div>
                                 <div className="text-zinc-300 font-bold">STABLE</div>
                              </div>
                              <Network className="h-4 w-4 text-cyan-500/50" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT SECTION */}
      <section className="px-8 py-24 bg-zinc-900/30 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
              <Globe className="h-3 w-3" /> GLOBAL_MISSION_STATEMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[1.1]">
              We design infrastructure to solve challenges to the world&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">greatest resource.</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              SECURE Blue is an end-to-end water management ecosystem. Every hardware node and software protocol deployed on our network is engineered to execute one of three critical directives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Prevent */}
            <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-none relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="h-32 w-32 text-blue-500" />
              </div>
              <ShieldCheck className="h-8 w-8 text-blue-400 mb-6 relative z-10" />
              <h3 className="text-xl font-mono uppercase tracking-wider font-bold mb-3 relative z-10">01. Prevent Waste</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative z-10">
                Stop catastrophic loss before it happens. We utilize autonomous sensors to detect anomalies and instantly actuate shut-off valves, securing your facility from internal failure.
              </p>
            </div>

            {/* Conserve */}
            <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-none relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Droplets className="h-32 w-32 text-emerald-500" />
              </div>
              <Droplets className="h-8 w-8 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-xl font-mono uppercase tracking-wider font-bold mb-3 relative z-10">02. Conserve Resource</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative z-10">
                Deploy water only when mathematically necessary. We aggregate soil telemetry and atmospheric data to automate delivery systems and establish closed-loop graywater recycling.
              </p>
            </div>

            {/* Generate */}
            <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-none relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wind className="h-32 w-32 text-cyan-500" />
              </div>
              <Wind className="h-8 w-8 text-cyan-400 mb-6 relative z-10" />
              <h3 className="text-xl font-mono uppercase tracking-wider font-bold mb-3 relative z-10">03. Generate Yield</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative z-10">
                Sever your reliance on strained municipal grids. We extract high-purity water directly from atmospheric humidity to create independent, localized sourcing for your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INFRASTRUCTURE (Product Grid) */}
      <section id="solutions" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Hardware & Integration</h2>
              <p className="text-zinc-500 font-mono text-sm">Proprietary nodes and mechanical modules for your network.</p>
            </div>
            <div className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 border border-emerald-500/20">
              STATUS: SYSTEMS ONLINE
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* 1. SECURE LeakStop */}
            <Link href="/infrastructure/leakstop" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-blue-500/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">01. SECURE LeakStop</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Autonomous holistic valves with LoRaWAN integration. Deploy instant shut-off capabilities across your entire infrastructure to prevent catastrophic water loss.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-blue-500" /> Valve Actuation</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-blue-500" /> Flow Analytics</span>
                  </div>
                  <div className="mt-auto text-blue-400 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 2. SECURE A2W Machines */}
            <Link href="/infrastructure/a2w-machines" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-cyan-500/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <Wind className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">02. SECURE A2W</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Extract high-purity water directly from the atmosphere. Industrial-scale generation units that operate independently of local grid constraints.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-cyan-500" /> Humidity Parsing</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-cyan-500" /> Generation Metrics</span>
                  </div>
                  <div className="mt-auto text-cyan-400 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 3. A2W Graywater Attachment */}
            <Link href="/infrastructure/a2w-graywater" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <Filter className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">03. A2W Graywater</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Maximize resource efficiency by routing facility wastewater directly into your A2W system. Enables secondary purification for closed-loop conservation.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-purple-500" /> Secondary Yield</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-purple-500" /> Loop Integration</span>
                  </div>
                  <div className="mt-auto text-purple-400 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 4. SECURE Smart Irrigation System */}
            <Link href="/infrastructure/smart-irrigation" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-emerald-500/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <Droplets className="h-8 w-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">04. Smart Irrigation</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Intelligent arrays that aggregate soil saturation and telemetry to ensure water is deployed exactly when needed, automating delivery systems.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-emerald-500" /> Soil Saturation</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-emerald-500" /> Automated Delivery</span>
                  </div>
                  <div className="mt-auto text-emerald-400 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 5. Irrigation Graywater Conversion */}
            <Link href="/infrastructure/irrigation-graywater" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-emerald-400/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <ArrowLeftRight className="h-8 w-8 text-emerald-300 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">05. Irrig. Graywater</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Seamlessly divert and filter facility graywater to supply your smart irrigation networks, drastically reducing municipal dependency for landscaping.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-emerald-300" /> Wastewater Routing</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-emerald-300" /> Yield Offset</span>
                  </div>
                  <div className="mt-auto text-emerald-300 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 6. Environmental Sensors */}
            <Link href="/infrastructure/environmental-sensors" className="block h-full outline-none">
              <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group cursor-pointer relative overflow-hidden">
                <CardHeader className="pb-4">
                  <Radio className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">06. Environ. Sensors</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Highly resilient LoRaWAN sensor arrays deployed across vast topographical areas to monitor moisture, humidity, temperature, and anomalous flow.
                  </p>
                  <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-2 font-mono text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-2"><Activity className="h-3 w-3 text-amber-500" /> Uplink Status</span>
                    <span className="flex items-center gap-2"><Database className="h-3 w-3 text-amber-500" /> Topo-Mapping</span>
                  </div>
                  <div className="mt-auto text-amber-400 font-mono text-[10px] tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_HARDWARE ↗
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* DATA FEEDS SECTION (Massive 3x3 Grid) */}
      <section className="px-8 py-24 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Data-Driven Resource Management</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Stop guessing. Secure Blue OS pipes massive arrays of real-time telemetry directly into your dashboard, enabling institutional-grade oversight across your entire infrastructure footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Telemetry Data Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold">LoRaWAN Network</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Monitor low-cost, long-range packet transfer health across the entire array.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; NETWORK_STATUS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SIGNAL_STRENGTH</span>
                  <span className="text-emerald-400">-84 dBm</span>
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

            {/* 2. Atmospheric Index Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-semibold">Atmospheric Index</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Track ambient humidity and dew points to maximize A2W generation yield.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
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

            {/* 3. Financial Data Feed */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Crosshair className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-semibold">Utility Analytics</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Aggregate water saved and generated against local municipal utility rates.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; COST_SAVINGS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">VOL_SAVED_MTD</span>
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

            {/* 4. Global Flow Rates */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">System Flow Rates</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Monitor live GPM (Gallons Per Minute) across all active primary lines.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; LINE_PRESSURE</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">MAIN_INTAKE</span>
                  <span className="text-zinc-300">42.8 GPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">ZONE_B_DIST</span>
                  <span className="text-zinc-300">18.4 GPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">PRESSURE_VAR</span>
                  <span className="text-emerald-400">STABLE (±2%)</span>
                </div>
              </div>
            </div>

            {/* 5. Node Power Matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="h-6 w-6 text-amber-400" />
                <h3 className="text-xl font-semibold">Node Power Status</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Track battery degradation and solar-charging states for remote hardware.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; POWER_MATRIX</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">AVG_BATTERY_LVL</span>
                  <span className="text-emerald-400">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SOLAR_UPTAKE</span>
                  <span className="text-amber-400">+1.2W / Node</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">LOW_PWR_WARNINGS</span>
                  <span className="text-blue-400">0</span>
                </div>
              </div>
            </div>

            {/* 6. Soil Topography */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-semibold">Soil Saturation</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Real-time moisture mapping to prevent over-watering in automated zones.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; TOPO_MOISTURE</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SECTOR_1 (GREEN)</span>
                  <span className="text-emerald-400">44% (OPT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SECTOR_2 (FAIRWAY)</span>
                  <span className="text-amber-400">22% (DRY)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">EVAPORATION_EST</span>
                  <span className="text-zinc-300">0.8 in/day</span>
                </div>
              </div>
            </div>

            {/* 7. Actuator & Valve Status */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Power className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold">Actuator States</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Verify the mechanical open/closed state of every LeakStop valve.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; VALVE_CONTROL</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">TOTAL_ACTUATORS</span>
                  <span className="text-zinc-300">86</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">STATE_OPEN</span>
                  <span className="text-blue-400">84</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">STATE_SECURED</span>
                  <span className="text-red-400">2 (MITIGATED)</span>
                </div>
              </div>
            </div>

            {/* 8. Graywater Routing */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Graywater Yield</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Track wastewater recovery rates and secondary filtration efficiency.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; RECOVERY_LOOP</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">INTAKE_VOLUME</span>
                  <span className="text-zinc-300">1,250 GAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">PURIFIED_YIELD</span>
                  <span className="text-purple-400">1,180 GAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">EFFICIENCY_RT</span>
                  <span className="text-emerald-400">94.4%</span>
                </div>
              </div>
            </div>

            {/* 9. Predictive Maintenance */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="h-6 w-6 text-zinc-400" />
                <h3 className="text-xl font-semibold">System Health</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Algorithmic hardware degradation tracking to predict required service.
              </p>
              <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-3 shadow-inner">
                <div className="text-zinc-600 mb-2">LIVE_FEED &gt; DIAGNOSTICS</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">VLV_12_FRICTION</span>
                  <span className="text-amber-400">ELEVATED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">A2W_FILTER_LIFE</span>
                  <span className="text-zinc-300">412 HRS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">NEXT_SVC_REQ</span>
                  <span className="text-emerald-400">22 DAYS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DASHBOARD DEEP DIVE (Visual Proof / Terminal Replacement) */}
      <section id="dashboard" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mock Terminal & Network Diagram */}
          <div className="space-y-6">
            {/* Terminal Window Mockup */}
            <div className="border border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
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
              <div className="border border-zinc-800 bg-zinc-900/30 p-4 flex flex-col items-center justify-center text-center gap-2 shadow-inner">
                <Cpu className="h-6 w-6 text-blue-400 mb-1" />
                <span className="font-mono text-xs text-zinc-300">Edge Processing</span>
                <span className="text-[10px] text-zinc-500">Zero-Latency Action</span>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-4 flex flex-col items-center justify-center text-center gap-2 shadow-inner">
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
                <div className="flex-shrink-0 h-10 w-10 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Total Infrastructure Overwatch</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    View every valve, sensor, and A2W machine across your property in one centralized interface. Control infrastructure remotely with immediate execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Consulting & System Design</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    We don&apos;t just sell hardware. Our engineers design bespoke, holistic layouts for golf courses, massive farms, and government zones to ensure maximum efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-1">Automated Conservation</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Our smart systems communicate with each other. If soil sensors detect rain, automated delivery systems are halted. Graywater is automatically routed for secondary distillation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <Link href="#contact">
                <Button className="rounded-none border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-sm px-6 h-12">
                  Request System Audit <Terminal className="ml-2 h-4 w-4" />
                </Button>
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
            <p className="text-zinc-400">Why legacy water management is costing your infrastructure time, money, and resources.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden">
            
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
                    <p className="text-xs text-zinc-500 mt-1">Delivery systems run on timers, not data. Watering happens regardless of soil saturation.</p>
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
      <section id="contact" className="py-20 border-t border-zinc-800 bg-zinc-950 text-center">
        <h2 className="text-3xl font-bold mb-6">Upgrade Your Infrastructure.</h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Join leading resorts, massive farms, and agricultural hubs operating on Secure Blue&apos;s IoT infrastructure.
        </p>
        <Link href="#contact">
          <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-none font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Lock className="mr-2 h-5 w-5" /> Access the Terminal
          </Button>
        </Link>
      </section>

    </div>
  );
}