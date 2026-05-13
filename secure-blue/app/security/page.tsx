import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShieldCheck, Lock, EyeOff, Radio, Server, 
  Cpu, AlertOctagon, Terminal, ArrowRight,
  Key, Database, Fingerprint
} from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-red-500/30">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <span className="text-red-400">SECURITY_&_ENCRYPTION_PROTOCOLS</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-24 pb-20 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-red-400 uppercase tracking-widest mb-8">
            <ShieldCheck className="mr-2 h-3.5 w-3.5" />
            Hardened Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            Industrial scale. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Military-grade defense.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl">
            When you control a facility&apos;s water supply, security is not optional. SECURE Blue utilizes an end-to-end cryptographic stack, from the physical silicon in our sensors to the encrypted payloads in our LoRaWAN canopy. We ensure your infrastructure remains yours.
          </p>
        </div>
      </section>

      {/* SECURITY PILLARS */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Card className="bg-zinc-900/40 border-zinc-800 rounded-none hover:border-red-500/50 transition-colors group">
            <CardHeader>
              <Key className="h-8 w-8 text-red-400 mb-2" />
              <CardTitle className="font-mono text-lg uppercase">End-to-End Encryption</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-400 leading-relaxed">
              All LoRaWAN traffic is secured using dual 128-bit AES encryption (Network Key and Application Key). Data is encrypted at the sensor level and only decrypted within your private SECURE Blue OS instance.
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/40 border-zinc-800 rounded-none hover:border-red-500/50 transition-colors group">
            <CardHeader>
              <AlertOctagon className="h-8 w-8 text-red-400 mb-2" />
              <CardTitle className="font-mono text-lg uppercase">Physical Tamper Logic</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-400 leading-relaxed">
              Our hardware enclosures are equipped with inertial and light-sensitive tamper triggers. If a node is opened or moved without authorization, the system instantly executes a security lockdown and alerts your team.
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/40 border-zinc-800 rounded-none hover:border-red-500/50 transition-colors group">
            <CardHeader>
              <Database className="h-8 w-8 text-red-400 mb-2" />
              <CardTitle className="font-mono text-lg uppercase">Air-Gapped Survivability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-400 leading-relaxed">
              Critical mitigation logic (like LeakStop shut-offs) is stored on the edge MCU. If your facility loses cloud connectivity, the hardware continues to execute its safety protocols autonomously.
            </CardContent>
          </Card>

        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS (Terminal View) */}
      <section className="px-8 py-24 bg-zinc-900/20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto rounded-md border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[10px] font-mono text-red-500">SECURE_PROTOCOL_V4.0</span>
          </div>
          <div className="p-8 font-mono text-xs sm:text-sm space-y-4 text-zinc-400 leading-relaxed">
            <p className="text-red-400 uppercase font-bold tracking-widest">[ SECURITY_AUDIT_LOG ]</p>
            <p>&gt; Uplink: LoRaWAN v1.0.3 Certified</p>
            <p>&gt; Crypto: AES-128-CCM (MAC/PHY Layers)</p>
            <p>&gt; Hardware: Secure Element (SE) Silicon root-of-trust</p>
            <p>&gt; Logic: Local Edge classification via TinyML (No raw cloud-processing required)</p>
            <p>&gt; Access: Multi-Factor Authentication (MFA) & RBAC Enforcement</p>
            <p className="pt-4 text-emerald-400">RESULT: SYSTEM_HARDENED // ZERO_TRUST_ESTABLISHED</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-24 bg-zinc-950 border-t border-zinc-800/50 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Trust your infrastructure.</h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          We are happy to provide detailed security whitepapers and SOC-2 compliance documentation for your IT and Legal departments upon request.
        </p>
        <Link href="/#contact">
          <Button size="lg" className="h-14 px-10 text-lg bg-red-600 hover:bg-red-700 text-white rounded-none font-mono">
            Request Security Whitepaper
          </Button>
        </Link>
      </section>

    </div>
  );
}