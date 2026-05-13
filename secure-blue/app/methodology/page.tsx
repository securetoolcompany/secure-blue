import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Terminal, ArrowRight, Network, Server, 
  Cpu, Wrench, ShieldCheck, BarChart3, Map, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <span className="text-white">DEPLOYMENT_METHODOLOGY</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-blue-400 uppercase tracking-widest mb-8">
            <Network className="mr-2 h-3.5 w-3.5" />
            Engineering & Consulting
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            We don&apos;t ship hardware. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">We engineer ecosystems.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl">
            Enterprise IoT cannot be bought off the shelf. Every facility requires a bespoke mesh network, customized AI edge thresholds, and physical integration. Our engineering team handles the entire lifecycle—from the initial CAD schematics to the final software handover.
          </p>
        </div>
      </section>

      {/* THE 4-PHASE PROCESS */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Deployment Pipeline</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              Our standardized four-phase integration protocol ensures zero downtime for your facility during installation and immediate data acquisition upon boot.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-20 pb-8">
            
            {/* PHASE 01 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[21px] top-0 h-10 w-10 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center font-mono text-xs text-blue-400 font-bold">
                01
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Map className="h-6 w-6 text-blue-400" /> System Design & Topography
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    We begin with a comprehensive site audit. For real estate, we map your main intake lines and high-risk plumbing junctions. For agriculture and golf, our engineers analyze terrain changes to map the optimal line-of-sight for our LoRaWAN mesh gateways, ensuring 100% signal coverage across thousands of acres.
                  </p>
                  <ul className="space-y-3 font-mono text-xs text-zinc-500">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> RF Signal Propagation Mapping</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Valve & Actuator CAD Blueprints</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Municipal ROI & Cost Analysis</li>
                  </ul>
                </div>
                <Card className="bg-zinc-900/30 border-zinc-800 rounded-none h-full min-h-[200px] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
                   <span className="font-mono text-xs tracking-widest text-zinc-600 bg-zinc-950 px-3 py-1 border border-zinc-800 relative z-10">CAD_SCHEMATIC_RENDER</span>
                </Card>
              </div>
            </div>

            {/* PHASE 02 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[21px] top-0 h-10 w-10 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">
                02
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Cpu className="h-6 w-6 text-cyan-400" /> Hardware Provisioning & Edge AI
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Before a single sensor leaves our facility, it is provisioned for your specific network. We flash the Microcontroller Units (MCUs) with custom Edge AI thresholds tailored to your baseline flow rates or atmospheric parameters. This ensures the hardware acts autonomously the second it receives power.
                  </p>
                  <ul className="space-y-3 font-mono text-xs text-zinc-500">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Custom Threshold Calibration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Cryptographic Node Key Generation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Solar & Power Matrix Testing</li>
                  </ul>
                </div>
                <Card className="bg-zinc-900/30 border-zinc-800 rounded-none h-full min-h-[200px] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
                   <span className="font-mono text-xs tracking-widest text-zinc-600 bg-zinc-950 px-3 py-1 border border-zinc-800 relative z-10">NODE_PROVISIONING_UI</span>
                </Card>
              </div>
            </div>

            {/* PHASE 03 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[21px] top-0 h-10 w-10 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center font-mono text-xs text-emerald-400 font-bold">
                03
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Wrench className="h-6 w-6 text-emerald-400" /> Physical Installation
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Our deployment crews or certified regional partners handle the heavy lifting. We plumb industrial ball valves into your mains, mount A2W generators on secure foundations, and sink deep-soil probes into the earth. The entire physical layer is installed to withstand extreme commercial and environmental abuse.
                  </p>
                  <ul className="space-y-3 font-mono text-xs text-zinc-500">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Zero-Downtime Plumb-Ins</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Gateway Tower Erection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Actuator Pressure Testing</li>
                  </ul>
                </div>
                <Card className="bg-zinc-900/30 border-zinc-800 rounded-none h-full min-h-[200px] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
                   <span className="font-mono text-xs tracking-widest text-zinc-600 bg-zinc-950 px-3 py-1 border border-zinc-800 relative z-10">INSTALL_CREW_PHOTO</span>
                </Card>
              </div>
            </div>

            {/* PHASE 04 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[21px] top-0 h-10 w-10 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center font-mono text-xs text-amber-400 font-bold">
                04
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Server className="h-6 w-6 text-amber-400" /> OS Handover & Overwatch
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Once the physical layer establishes uplink, we hand you the keys to the SECURE Blue OS Terminal. We provide full dashboard training for your facility managers, setting up automated SMS threat alerts, API integrations for your existing software, and establishing ongoing network overwatch.
                  </p>
                  <ul className="space-y-3 font-mono text-xs text-zinc-500">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> Manager Terminal Training</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> API / Webhook Integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-700" /> 24/7 Threat Overwatch Activation</li>
                  </ul>
                </div>
                <Card className="bg-zinc-900/30 border-zinc-800 rounded-none h-full min-h-[200px] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
                   <span className="font-mono text-xs tracking-widest text-zinc-600 bg-zinc-950 px-3 py-1 border border-zinc-800 relative z-10">DASHBOARD_PREVIEW</span>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Request an Infrastructure Audit</h2>
            <p className="text-zinc-400 text-sm">
              Ready to begin Phase 01? Submit your facility parameters below and a SECURE Blue network engineer will contact you to schedule an initial topography and scoping call.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
            {/* Reusing your global Formspree integration */}
            <ContactForm productName="CONSULTING & DEPLOYMENT INQUIRY" />
          </div>
        </div>
      </section>

    </div>
  );
}