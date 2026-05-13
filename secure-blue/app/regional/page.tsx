import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Terminal, ArrowRight, Hammer, Paintbrush, Trees, 
  Wrench, ShieldCheck, MapPin, HardHat, Fence, Building
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function RegionalOperationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-amber-500/30">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <span className="text-amber-400">REGIONAL_OPERATIONS</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-amber-400 uppercase tracking-widest mb-8">
            <MapPin className="mr-2 h-3.5 w-3.5" />
            Southern Arizona Deployment
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            Physical infrastructure. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Elite local execution.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl">
            While our IoT networks deploy globally, SECURE Blue&apos;s physical contracting crews operate exclusively in the Southern Arizona region. We provide elite structural additions, recreation builds, and comprehensive property maintenance for commercial entities, mountain estates, and foothill communities.
          </p>
          
          <div className="flex gap-4">
            <Link href="#initiate-contact">
              <Button size="lg" className="h-12 px-8 bg-amber-600 hover:bg-amber-700 text-white rounded-none border border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                Dispatch Local Crew
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTRACTING SERVICES GRID */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contracting & Maintenance Tracks</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              From pouring concrete for private athletic courts to repairing automated community security gates, our regional crews execute with the same precision as our software engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Recreation Construction */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <HardHat className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">01. Recreation Builds</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Turnkey construction for community and private athletic facilities. We handle grading, pouring, surfacing, and fencing for regulation pickleball, tennis, and basketball courts.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">PICKLEBALL</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">BASKETBALL_COURTS</span>
                </div>
              </CardContent>
            </Card>

            {/* 2. Structural Additions */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Hammer className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">02. Structural Additions</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Enhance your property footprint with high-quality exterior builds. Our crews construct custom breezeways, pergolas, ramadas, and utility outbuildings engineered for the desert climate.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">BREEZEWAYS</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">PERGOLAS</span>
                </div>
              </CardContent>
            </Card>

            {/* 3. Community Infrastructure */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Fence className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">03. HOA Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Reliable repair and fabrication for shared community assets. We service automated security gates, perimeter fencing, masonry walls, and communal shade structures.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">GATE_REPAIR</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">MASONRY</span>
                </div>
              </CardContent>
            </Card>

            {/* 4. Commercial Painting */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Paintbrush className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">04. Commercial Painting</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Industrial-grade exterior and interior painting services. We utilize UV-resistant coatings designed specifically to withstand severe sun exposure and extreme temperature fluctuations.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">EXTERIOR_COATINGS</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">HOA_COMPLIANCE</span>
                </div>
              </CardContent>
            </Card>

            {/* 5. Desert Landscaping */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Trees className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">05. Landscaping</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Comprehensive grounds management perfectly integrated with our smart irrigation systems. We handle xeriscaping, hardscaping, tree maintenance, and erosion control for large properties.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">HARDSCAPING</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">XERISCAPE</span>
                </div>
              </CardContent>
            </Card>

            {/* 6. Handyman & Maintenance */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Wrench className="h-8 w-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">06. Handyman Services</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  On-call deployment for ongoing facility upkeep. From fixing broken fixtures and repairing drywall to routine mechanical maintenance, we keep your property running flawlessly.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-500">
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">FACILITY_UPKEEP</span>
                  <span className="px-2 py-1 bg-zinc-950 border border-zinc-800">REPAIRS</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Request Local Service</h2>
            <p className="text-zinc-400 text-sm">
              Submit your property address and project scope below. A SECURE Regional Operations manager will contact you directly to schedule an on-site consultation.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20"></div>
            {/* Reusing your global Formspree integration */}
            <ContactForm productName="REGIONAL CONTRACTING SERVICE REQUEST" />
          </div>
        </div>
      </section>

    </div>
  );
}