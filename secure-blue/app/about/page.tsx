import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Terminal, Globe, ShieldCheck, Zap, Key, 
  Droplets, Network, Cpu, ArrowRight,
  HardHat, Briefcase, Code2, MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30 font-sans">
      
      {/* HEADER OVERLAY */}
      <div className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Secure_Blue_OS / core_manifesto.txt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono text-blue-400">NETWORK_ACTIVE</span>
          </div>
        </div>
      </div>

      {/* HERO: THE RESOURCE DOCTRINE */}
      <section className="relative px-8 pt-32 pb-24 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8">
            Scarcity is a monitoring problem. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Resource Sovereignty is the solution.</span>
          </h1>
          
          <div className="max-w-3xl space-y-6 text-xl text-zinc-400 leading-relaxed font-light">
            <p>
              The world isn&apos;t running out of water; it is running out of efficient ways to manage it. Legacy infrastructure is leaking millions of gallons per hour through blind pipes and analog irrigation.
            </p>
            <p>
              SECURE Blue was built to patch the world&apos;s physical routing errors. We are replacing reactive, manual oversight with a proactive, algorithmic IoT layer. By combining industrial hardware with edge-AI, we empower communities and enterprises to own their resources.
            </p>
          </div>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <section className="px-8 py-24 bg-zinc-900/20 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Infrastructure Directives</h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Executing systemic conservation protocols.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-950 border-zinc-800 rounded-none hover:border-blue-500/50 transition-colors group">
              <CardContent className="p-8">
                <ShieldCheck className="h-8 w-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">Asset Protection</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Neutralizing risk through automation. We protect billions in commercial real estate and hospitality assets by detecting and halting anomalies in milliseconds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 rounded-none hover:border-cyan-500/50 transition-colors group">
              <CardContent className="p-8">
                <Droplets className="h-8 w-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">Resource Generation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Independence from the grid. Our industrial A2W generators and Graywater loops turn the atmosphere and waste into pristine, usable utility streams.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 rounded-none hover:border-emerald-500/50 transition-colors group">
              <CardContent className="p-8">
                <Cpu className="h-8 w-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">Edge Intelligence</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Data at the source. We deploy high-performance MCUs that classify threats locally via TinyML, ensuring rapid response without reliance on distant cloud servers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 rounded-none hover:border-purple-500/50 transition-colors group">
              <CardContent className="p-8">
                <Network className="h-8 w-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">Decentralized Mesh</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Resilient communications. Utilizing LoRaWAN topography, we create a proprietary data canopy that functions across thousands of acres without Wi-Fi or Cellular.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* THE ARCHITECTS */}
      <section className="px-8 py-32 bg-zinc-950 border-b border-zinc-800/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">System Architects</h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Founding Partners of SECURE Blue</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* ADAM PAUL SMOLAK */}
            <div className="border border-zinc-800 bg-zinc-900/40 p-10 relative group hover:border-zinc-600 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <HardHat className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center rounded bg-blue-500/10 px-2 py-1 text-[10px] font-mono text-blue-400 mb-6 border border-blue-500/20">
                  NODE_01: PHYSICAL INFRASTRUCTURE & PARTNERSHIPS
                </div>
                <h3 className="text-3xl font-bold mb-2">Adam-Paul Smolak</h3>
                <p className="text-zinc-500 font-mono text-sm mb-6">Co-Founder & CEO</p>
                
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-8">
                  <p>
                    Adam-Paul bridges the gap between massive physical operations and automated digital oversight. With decades of executive experience in manufacturing and physical product companies (SECURE Tool Company), he understands the inherent friction of legacy infrastructure.
                  </p>
                  <p>
                    At SECURE Blue, he drives the strategic expansion of our physical node network—forging the enterprise partnerships that allow our IoT layer to protect everything from luxury resorts to essential agricultural hubs.
                  </p>
                </div>
                
                <a href="https://www.linkedin.com/in/adam-paul-smolak-4b816312/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold font-mono text-zinc-300 hover:text-blue-400 transition-colors">
                  <Key className="mr-2 h-4 w-4" /> VIEW_LINKEDIN_PROFILE
                </a>
              </div>
            </div>

            {/* SCOTT BRADFORD HOLBROOK */}
            <div className="border border-zinc-800 bg-zinc-900/40 p-10 relative group hover:border-zinc-600 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Code2 className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center rounded bg-cyan-500/10 px-2 py-1 text-[10px] font-mono text-cyan-400 mb-6 border border-cyan-500/20">
                  NODE_02: TECHNOLOGY & DEPLOYMENT LOGIC
                </div>
                <h3 className="text-3xl font-bold mb-2">Scott Holbrook</h3>
                <p className="text-zinc-500 font-mono text-sm mb-6">Co-Founder & COO</p>
                
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-8">
                  <p>
                    Scott engineered the underlying logic of the SECURE Blue ecosystem. Specializing in IoT architecture, custom sensor MCU provisioning, and large-scale project management, he translates complex topography into functional, robust code.
                  </p>
                  <p>
                    With a background in vocational education and software development, Scott ensures the SECURE Blue OS remains an accessible, highly usable tool for facility managers. He manages the deployment pipeline—from initial CAD topography mapping to final dashboard handover.
                  </p>
                </div>

                <a href="https://www.linkedin.com/in/imscottholbrook/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold font-mono text-zinc-300 hover:text-cyan-400 transition-colors">
                  <Key className="mr-2 h-4 w-4" /> VIEW_LINKEDIN_PROFILE
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE MANIFESTO (Terminal View) */}
      <section className="px-8 py-24 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto rounded-md border border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500">/sys/mission_manifesto.sh</span>
          </div>
          
          <div className="p-8 font-mono text-sm space-y-6 text-blue-500/80 leading-relaxed">
            <p>
              <span className="text-zinc-500">root@secureblue:~#</span> cat /manifesto/core_beliefs.txt
            </p>
            <div className="space-y-4 pl-4 border-l border-zinc-800">
              <p>&gt; We believe that resource scarcity is a technological failure, not a planetary limit.</p>
              <p>&gt; We believe that a single undetected leak is an unacceptable failure of infrastructure.</p>
              <p>&gt; We believe that communities should own the data generated by their own soil, air, and water.</p>
              <p>&gt; We believe in replacing reactive maintenance with proactive algorithmic overwatch.</p>
              <p>&gt; We believe in replacing analog dials with immutable digital ledgers.</p>
              <p>&gt; We believe that true operational sovereignty is achieved through permissionless access to off-grid water, local energy, and independent fire detection.</p>
            </div>
            <p className="text-zinc-500 pt-4">
              root@secureblue:~# <span className="text-blue-400 animate-pulse">_</span>
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Secure Your Infrastructure.</h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          We are currently deploying nodes for forward-thinking enterprises and communities. Partner with us to modernize your facility and claim resource sovereignty.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/#contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-none font-mono">
              <Zap className="mr-2 h-4 w-4" /> Request System Audit
            </Button>
          </Link>
          <Link href="/methodology">
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-none font-mono">
              The Methodology
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}