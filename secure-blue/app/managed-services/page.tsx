import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Terminal, ArrowRight, ShieldCheck, Activity, 
  Network, Battery, CloudCog, Headphones, Zap, 
  Wrench, FileCheck, CheckCircle2, Server
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ManagedServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-purple-500/30">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <span className="text-purple-400">MANAGED_NETWORK_SERVICES</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-purple-400 uppercase tracking-widest mb-8">
            <Network className="mr-2 h-3.5 w-3.5" />
            Software as a Service (SaaS)
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            Unbreakable networks. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Total command control.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl">
            You run your facility; we run the grid. Our managed software subscriptions provide your team with enterprise dashboard access, secure cloud data hosting, remote diagnostics, and 99.9% guaranteed network uptime. We put the power entirely in your hands.
          </p>
          
          <div className="flex gap-4">
            <Link href="#initiate-contact">
              <Button size="lg" className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-none border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                Request Software Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SLA PILLARS (Now a 2x2 Grid) */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ongoing Software & Support Tiers</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              Hardware is a one-time deployment. The SECURE Blue subscription ensures that your data pipeline, API integrations, and facility dashboards remain flawless year after year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 1. Cloud & Dashboard Access */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Server className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">01. Cloud & Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Maintain continuous access to the SECURE Blue OS. We host your Time-Series Databases (TSDB), handle all encrypted data routing from your gateways, and maintain the complex API integrations that allow your facility managers to monitor and actuate nodes globally.
                </p>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-500 border-t border-zinc-800 pt-4">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Secure Data Hosting</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Continuous API Maintenance</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Over-The-Air (OTA) Updates</span>
                </div>
              </CardContent>
            </Card>

            {/* 2. Remote Diagnostics */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Activity className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">02. Remote Diagnostics</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  We constantly monitor the health of your physical network. If a sensor battery drops to 15%, or a node loses signal due to environmental factors, our system instantly flags it on your dashboard so your local maintenance team knows exactly what to fix before failure occurs.
                </p>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-500 border-t border-zinc-800 pt-4">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Battery Life Telemetry</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Signal Strength Monitoring</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Actuator Friction Alerts</span>
                </div>
              </CardContent>
            </Card>

            {/* 3. Tech Support */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <Headphones className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">03. Remote Tech Support</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  When anomalies arise, our network engineers are standing by. We help your facility managers troubleshoot connectivity issues, adjust logic thresholds, and navigate API routing. If an issue exceeds remote capabilities, we can dispatch a billable onsite technician to your location to resolve it directly.
                </p>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-500 border-t border-zinc-800 pt-4">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Priority Remote Troubleshooting</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> OS Logic & API Assistance</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Billable On-Site Tech Dispatch</span>
                </div>
              </CardContent>
            </Card>

            {/* 4. Hardware Warranty */}
            <Card className="bg-zinc-900/40 border-zinc-800 hover:border-purple-500/50 transition-colors rounded-none flex flex-col group">
              <CardHeader className="pb-4">
                <FileCheck className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">04. Hardware Warranty</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Industrial environments are harsh, and components inevitably reach end-of-life. If a SECURE Blue gateway, sensor, or actuator fails due to a manufacturing defect under your active warranty tier, we immediately provision and ship a replacement node to your facility to minimize network blind spots.
                </p>
                <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-500 border-t border-zinc-800 pt-4">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Rapid Provisioning & Fulfillment</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Defect Replacement</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Pre-Configured Node Swaps</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* THE SLA METRICS / PROOF SECTION */}
      <section className="px-8 py-24 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                NETWORK_RELIABILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Enterprise uptime. <br />Client-controlled logic.</h2>
              <p className="text-zinc-400 leading-relaxed">
                We believe in total transparency and zero liability friction. Our job is to ensure the pipeline never drops a packet; your job is to tell the pipeline what to do.
              </p>
              
              <ul className="space-y-6 mt-8">
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">99.9% Telemetry Uptime</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">Our mesh networks are designed with redundant routing. If a central gateway fails, sensor packets are instantly rerouted to adjacent nodes, ensuring continuous data acquisition to your dashboard.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                    <ShieldCheck className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Autonomous, Not Manual</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">We don&apos;t make arbitrary decisions about your water supply. The SECURE Blue OS executes mitigation protocols strictly based on the custom flow-thresholds and logic rules configured by your facility manager.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Simulated SLA Dashboard */}
            <div className="border border-zinc-800 bg-zinc-950 rounded-md overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] pointer-events-none"></div>
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                </div>
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest">/sla-diagnostics/network-health</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-6">
                
                <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                  <div>
                    <div className="text-[10px] text-zinc-500 mb-1">CLOUD_UPTIME (30_DAYS)</div>
                    <div className="text-xl text-emerald-400 font-bold">99.998%</div>
                  </div>
                  <div className="text-[10px] text-emerald-500/70 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5">SLA_MET</div>
                </div>

                <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                  <div>
                    <div className="text-[10px] text-zinc-500 mb-1">NETWORK_LATENCY</div>
                    <div className="text-xl text-cyan-400 font-bold">142ms</div>
                  </div>
                  <div className="text-[10px] text-zinc-500">Target: &lt;500ms</div>
                </div>

                <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                  <div>
                    <div className="text-[10px] text-zinc-500 mb-1">SYSTEM_ALERTS (WARNINGS)</div>
                    <div className="text-xl text-zinc-300 font-bold">1</div>
                  </div>
                  <div className="text-[10px] text-amber-500/70 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5">PENDING_CLIENT_ACTION</div>
                </div>

                <div className="mt-4 text-[10px] text-zinc-500 bg-zinc-900/50 p-3 border border-zinc-800">
                  <div className="text-purple-400 mb-1">REMOTE_DIAGNOSTICS &gt;</div>
                  <div>&gt; Low battery decay detected at NODE_A74.</div>
                  <div>&gt; Node remains functional. 12% reserve remaining.</div>
                  <div className="text-amber-400">&gt; Alert dispatched to Client Facility Manager.</div>
                  <div>&gt; Awaiting local staff battery swap.</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <CloudCog className="h-8 w-8 text-zinc-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight mb-2">Request Software & Support Pricing</h2>
            <p className="text-zinc-400 text-sm">
              Ready to secure your network&apos;s future? Submit your facility parameters below to discuss our SaaS subscription tiers and ongoing technical support capabilities.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
            <ContactForm productName="SOFTWARE SUBSCRIPTION & SUPPORT INQUIRY" />
          </div>
        </div>
      </section>

    </div>
  );
}