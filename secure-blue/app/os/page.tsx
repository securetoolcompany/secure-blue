import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Terminal, ArrowRight, LayoutDashboard, Database, 
  ShieldCheck, Activity, Code, Lock, Zap, GitBranch, 
  Bell, SlidersHorizontal, Eye, Server
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function SecureBlueOSPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <span className="text-cyan-400">SECURE_BLUE_OS</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              <Terminal className="mr-2 h-3.5 w-3.5" />
              Software & Analytics Layer
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              The central nervous system of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">infrastructure.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-xl">
              Hardware is blind without logic. SECURE Blue OS is an enterprise-grade command center that ingests millions of data points from your edge nodes, applies algorithmic thresholds, and executes autonomous mitigation protocols in milliseconds.
            </p>
            
            <div className="flex gap-4">
              <Link href="#initiate-contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-cyan-600 hover:bg-cyan-700 text-white rounded-none border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                  Request Software Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Data Flow Graphic */}
          <div className="relative aspect-square w-full max-w-md mx-auto flex items-center justify-center">
            {/* Core */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse" />
            <div className="relative z-10 h-32 w-32 bg-zinc-950 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <Activity className="h-12 w-12 text-cyan-400" />
            </div>
            {/* Orbital Rings */}
            <div className="absolute h-64 w-64 border border-zinc-800 rounded-full border-t-cyan-500/50 animate-[spin_10s_linear_infinite]" />
            <div className="absolute h-96 w-96 border border-zinc-800 rounded-full border-b-blue-500/50 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Connected Nodes */}
            <div className="absolute top-10 left-10 h-8 w-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <Database className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="absolute bottom-10 right-10 h-8 w-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <Server className="h-4 w-4 text-zinc-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="px-8 py-24 bg-zinc-950 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Unprecedented operational oversight.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We built SECURE Blue OS to replace fragmented legacy software. Manage your smart irrigation, track A2W atmospheric yield, and monitor fire threats from a single, unified interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-cyan-500/50 transition-colors">
              <CardHeader className="pb-4">
                <Eye className="h-8 w-8 text-cyan-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">Global Telemetry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  View thousands of nodes simultaneously. Real-time mapping tracks active GPM flow rates, deep-soil moisture saturation, and atmospheric dew points across your entire topographical footprint.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-cyan-500/50 transition-colors">
              <CardHeader className="pb-4">
                <Zap className="h-8 w-8 text-cyan-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">Autonomous Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The dashboard doesn&apos;t just display data; it acts on it. Set &quot;If-This-Then-That&quot; logic parameters. If EmberSense detects VOCs, automatically close HVAC dampers and alert the fire department.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-cyan-500/50 transition-colors">
              <CardHeader className="pb-4">
                <SlidersHorizontal className="h-8 w-8 text-cyan-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">Remote Actuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Take manual control of your infrastructure from anywhere in the world. Override automated schedules to open LeakStop valves or adjust smart irrigation cycles with zero latency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-blue-500/50 transition-colors">
              <CardHeader className="pb-4">
                <Bell className="h-8 w-8 text-blue-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">Threat Escalation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Configure multi-tiered alert protocols. Route minor maintenance warnings to facility staff via email, and escalate critical threat detections (fires, major bursts) via direct SMS to executive management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-blue-500/50 transition-colors">
              <CardHeader className="pb-4">
                <Database className="h-8 w-8 text-blue-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">Predictive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The OS utilizes historical Time-Series Databases (TSDB) to track hardware degradation. Receive automated service requests when an actuator shows elevated friction or a LoRaWAN battery drops below 15%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 rounded-none flex flex-col group hover:border-blue-500/50 transition-colors">
              <CardHeader className="pb-4">
                <Lock className="h-8 w-8 text-blue-400 mb-4" />
                <CardTitle className="text-xl font-mono uppercase tracking-wider text-white">RBAC Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Enterprise-grade Role-Based Access Control. Grant groundskeepers &quot;View-Only&quot; access to irrigation telemetry while restricting remote actuator control strictly to authorized facility engineers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DEVELOPER / API INTEGRATION SECTION */}
      <section className="px-8 py-24 bg-zinc-900/20 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Built for developers. <br/>Ready for integration.</h2>
            <p className="text-zinc-400 leading-relaxed">
              You shouldn&apos;t have to rip and replace your existing tech stack. SECURE Blue OS is built API-first. Every data point, alert, and actuation protocol available in our UI is exposed via a secure REST API and WebSocket architecture.
            </p>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-3">
                <GitBranch className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">SCADA Compatibility</h4>
                  <p className="text-xs text-zinc-500 mt-1">Route MQTT threat payloads directly into your existing industrial SCADA or BMS networks.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Code className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Webhook Listeners</h4>
                  <p className="text-xs text-zinc-500 mt-1">Push real-time flow anomalies and threat detections instantly to Slack, Teams, or PagerDuty.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Mock API Code Block */}
          <div className="border border-zinc-800 bg-zinc-950 rounded-md overflow-hidden shadow-2xl">
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/20" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                <div className="h-3 w-3 rounded-full bg-green-500/20" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500">api/v1/nodes/actuate</span>
            </div>
            <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto">
              <div className="text-blue-400 mb-2">{"// POST: Trigger emergency shut-off via API"}</div>
              <div className="text-zinc-300">
                <span className="text-pink-400">const</span> response = <span className="text-pink-400">await</span> fetch(<br/>
                &nbsp;&nbsp;<span className="text-emerald-400">&apos;https://api.securetool.company/v1/actuate&apos;</span>,<br/>
                &nbsp;&nbsp;{'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;method: <span className="text-emerald-400">&apos;POST&apos;</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;headers: {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&apos;Authorization&apos;</span>: <span className="text-emerald-400">&apos;Bearer sb_live_key_...&apos;</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&apos;Content-Type&apos;</span>: <span className="text-emerald-400">&apos;application/json&apos;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'},<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify({'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node_id: <span className="text-emerald-400">&apos;leakstop_tower_04&apos;</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action: <span className="text-emerald-400">&apos;SECURE_VALVE&apos;</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;override_schedule: <span className="text-purple-400">true</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'})<br/>
                &nbsp;&nbsp;{'}'}<br/>
                );
              </div>
              <div className="text-zinc-500 mt-4">
                {/* 200 OK Response */}
                {"{"}<br/>
                &nbsp;&nbsp;&quot;status&quot;: 200,<br/>
                &nbsp;&nbsp;&quot;message&quot;: &quot;Valve successfully secured. Flow halted.&quot;<br/>
                {"}"}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Request Dashboard Access</h2>
            <p className="text-zinc-400 text-sm">
              Ready to see SECURE Blue OS in action? Submit your information below to schedule a live technical demonstration of the software and API capabilities.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
            <ContactForm productName="SOFTWARE DEMO INQUIRY" />
          </div>
        </div>
      </section>

    </div>
  );
}