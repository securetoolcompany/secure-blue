import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Terminal, ArrowRight, ChevronRight, 
  Flag, Tractor, Building2, Landmark, Droplets, ShieldCheck, Network, Mountain
} from 'lucide-react';
import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
            <Terminal className="mr-2 h-3.5 w-3.5" />
            Network Deployment Sectors
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Real-World Scale.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl">
            SECURE Blue isn&apos;t theoretical software. It is a live, physical IoT layer currently protecting massive real estate portfolios, automating agricultural delivery systems, and sourcing off-grid water. Select your sector below.
          </p>
          
          <div className="flex gap-4">
            <Link href="/#contact">
              <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-none border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                Request Sector Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* THE INDUSTRIES FUNNEL (Bento Grid) */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          
          {/* Row 1: The Massive Footprints */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            
            {/* GOLF & RESORTS */}
            <Link href="/industries/golf-resorts" className="block group">
              <Card className="bg-zinc-900/40 border-zinc-800 group-hover:border-emerald-500/50 transition-all duration-300 rounded-none h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-4 border-b border-zinc-800/50 bg-zinc-900/20 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded mb-4 group-hover:scale-110 transition-transform">
                      <Flag className="h-6 w-6 text-emerald-400" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-emerald-400 transition-colors group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Golf & Resorts</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-1 relative z-10">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Automate massive irrigation arrays based on real-time soil telemetry. Protect multi-wing hospitality structures from catastrophic internal plumbing failures.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">SMART_IRRIGATION</span>
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">HOSPITALITY_PROTECTION</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* AGRICULTURE */}
            <Link href="/industries/agriculture" className="block group">
              <Card className="bg-zinc-900/40 border-zinc-800 group-hover:border-amber-500/50 transition-all duration-300 rounded-none h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-4 border-b border-zinc-800/50 bg-zinc-900/20 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center rounded mb-4 group-hover:scale-110 transition-transform">
                      <Tractor className="h-6 w-6 text-amber-400" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-amber-400 transition-colors group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Large-Scale Agriculture</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-1 relative z-10">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Deploy 10km+ range LoRaWAN moisture sensors across crop lines. Utilize off-grid A2W generation to insulate yields from drought and municipal rationing.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">CROP_TELEMETRY</span>
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">OFF_GRID_SOURCING</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

          {/* Row 2: Urban & Infrastructure */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Sector: HOAs & Communities */}
            <Link href="/industries/hoas-communities" className="block group outline-none">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 h-full flex flex-col hover:border-violet-500/50 hover:bg-zinc-900/60 active:scale-[0.98] transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mountain className="w-24 h-24 text-violet-500" />
                </div>
                <Mountain className="h-8 w-8 text-violet-400 mb-6 group-hover:scale-110 transition-transform relative z-10" />
                <h3 className="text-xl font-bold mb-3 relative z-10">HOAs & Mountain Estates</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1 relative z-10">
                  Deploy resident-hosted gateway networks to protect shared off-grid utilities and establish early wildfire detection.
                </p>
                <div className="text-violet-400 font-mono text-[10px] tracking-widest font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  ENTER_SECTOR <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </Link>
            
            {/* COMMERCIAL REAL ESTATE */}
            <Link href="/industries/commercial-real-estate" className="block group">
              <Card className="bg-zinc-900/40 border-zinc-800 group-hover:border-blue-500/50 transition-all duration-300 rounded-none h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-4 border-b border-zinc-800/50 bg-zinc-900/20 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center rounded mb-4 group-hover:scale-110 transition-transform">
                      <Building2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-blue-400 transition-colors group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Commercial Real Estate</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-1 relative z-10">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    A single pipe burst on the 10th floor destroys millions in assets. LeakStop provides instant, algorithmic shut-off protocols to secure towers and slash insurance premiums.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">ASSET_PROTECTION</span>
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">RISK_MITIGATION</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* MUNICIPALITIES */}
            <Link href="/industries/municipalities" className="block group">
              <Card className="bg-zinc-900/40 border-zinc-800 group-hover:border-cyan-500/50 transition-all duration-300 rounded-none h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-4 border-b border-zinc-800/50 bg-zinc-900/20 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center rounded mb-4 group-hover:scale-110 transition-transform">
                      <Landmark className="h-6 w-6 text-cyan-400" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Municipalities</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-1 relative z-10">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Modernize aging infrastructure. Equip public parks with data-driven irrigation logic, and deploy industrial A2W units to relieve pressure on local reservoirs.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">PUBLIC_WORKS</span>
                    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">GRID_RELIEF</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-8 py-24 bg-zinc-900/30 border-t border-zinc-800/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Network className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to upgrade your infrastructure?</h2>
          <p className="text-zinc-400 mb-10">
            Join the automated conservation economy. SECURE Blue engineers design bespoke hardware arrays specifically for your sector&apos;s demands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-white text-black hover:bg-zinc-200 rounded-none font-bold tracking-wide">
                Initiate System Audit
              </Button>
            </Link>
            <Link href="/#solutions">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-none font-mono">
                Browse Hardware Nodes <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}