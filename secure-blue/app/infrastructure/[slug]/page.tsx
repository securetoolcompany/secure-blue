import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, Wind, Droplets, Filter, ArrowLeftRight, Radio, 
  Terminal, ArrowRight, Zap, Database, Activity, Mail, Flame
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm'; // <-- Importing your new Client Component

// ----------------------------------------------------------------------
// THE DATABASE
// ----------------------------------------------------------------------
const productDatabase = {
  'leakstop': {
    name: 'SECURE LeakStop System',
    systemLabel: 'PREVENT // WASTE_MITIGATION',
    accentColor: 'text-blue-400',
    borderGlow: 'border-blue-500/50',
    icon: ShieldCheck,
    tagline: 'Autonomous mitigation for catastrophic infrastructure failure.',
    description: 'Stop water loss before it becomes structural damage. SECURE LeakStop utilizes holistic LoRaWAN sensors to monitor baseline flow rates across your entire property. The millisecond a pressure anomaly or leak is detected, our edge-processing actuators instantly shut off the compromised line—securing your facility without requiring human intervention.',
    features: [
      { title: 'Zero-Latency Actuation', desc: 'Valves close instantly upon algorithmic trigger.' },
      { title: 'LoRaWAN Integration', desc: 'Secure communication independent of facility Wi-Fi.' },
      { title: 'Flow Anomaly Detection', desc: 'AI-driven baselines prevent false positives.' }
    ]
  },
  'a2w-machines': {
    name: 'Air-2-Water Generator',
    systemLabel: 'GENERATE // INDEPENDENT_SOURCING',
    accentColor: 'text-cyan-400',
    borderGlow: 'border-cyan-500/50',
    icon: Wind,
    tagline: 'Sever your reliance on strained municipal grids.',
    description: 'Extract high-purity, potable water directly from atmospheric humidity. Our industrial-scale Air-to-Water generation units provide resilient, decentralized sourcing for remote infrastructure, massive farms, or facilities looking to hedge against rising local utility costs and drought restrictions.',
    features: [
      { title: 'Atmospheric Extraction', desc: 'Yields scale dynamically with ambient humidity.' },
      { title: 'Grid Independence', desc: 'Total insulation from municipal water rationing.' },
      { title: 'Multi-Stage Filtration', desc: 'Ozone and UV purification for clinical-grade water.' }
    ]
  },
  'a2w-graywater': {
    name: 'A2W Graywater Unit',
    systemLabel: 'CONSERVE // LOOP_INTEGRATION',
    accentColor: 'text-purple-400',
    borderGlow: 'border-purple-500/50',
    icon: Filter,
    tagline: 'Closed-loop conservation through secondary purification.',
    description: 'Maximize your resource efficiency. This modular attachment routes your facility\'s existing wastewater directly into your A2W ecosystem. By filtering and repurposing graywater for non-potable operational use, you effectively double the lifespan of every gallon generated.',
    features: [
      { title: 'Secondary Yield', desc: 'Drastically reduces net-new water requirements.' },
      { title: 'Modular Attachment', desc: 'Seamlessly integrates with primary A2W units.' },
      { title: 'Automated Routing', desc: 'Smart diverters manage wastewater flow logic.' }
    ]
  },
  'smart-irrigation': {
    name: 'Smart Irrigation Arrays',
    systemLabel: 'CONSERVE // AUTOMATED_DELIVERY',
    accentColor: 'text-emerald-400',
    borderGlow: 'border-emerald-500/50',
    icon: Droplets,
    tagline: 'Deploy water only when mathematically necessary.',
    description: 'Stop watering your landscaping on a blind timer. Our Smart Irrigation arrays aggregate real-time soil saturation telemetry and atmospheric forecasts to automate delivery systems. Water is deployed precisely to the zones that need it, slashing consumption for golf courses, estates, and agricultural hubs.',
    features: [
      { title: 'Topographical Mapping', desc: 'Zone-specific delivery based on micro-climates.' },
      { title: 'Weather API Integration', desc: 'Halts delivery prior to forecasted rainfall.' },
      { title: 'Saturation Telemetry', desc: 'Continuous soil moisture baseline monitoring.' }
    ]
  },
  'irrigation-graywater': {
    name: 'Irrigation Graywater',
    systemLabel: 'CONSERVE // WASTEWATER_ROUTING',
    accentColor: 'text-emerald-300',
    borderGlow: 'border-emerald-400/50',
    icon: ArrowLeftRight,
    tagline: 'Turn facility runoff into landscape fuel.',
    description: 'Eliminate the need to use pristine municipal water on grass and crops. This system seamlessly diverts, filters, and pressurizes facility graywater to supply your exterior smart irrigation networks. It is the ultimate utility offset for massive landscaping operations.',
    features: [
      { title: 'Utility Offset', desc: 'Massive reduction in municipal irrigation costs.' },
      { title: 'Bio-Filtration', desc: 'Safely removes harmful facility chemicals.' },
      { title: 'Pressure Regulation', desc: 'Maintains optimal PSI for extensive sprinkler arrays.' }
    ]
  },
  'environmental-sensors': {
    name: 'Environ. Sensor Array',
    systemLabel: 'TELEMETRY // DATA_ACQUISITION',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Radio,
    tagline: 'Institutional-grade oversight for your entire footprint.',
    description: 'The central nervous system of your infrastructure. These highly resilient, low-power LoRaWAN sensor arrays are deployed across vast topographical areas to monitor soil moisture, ambient humidity, temperature, and anomalous flow rates, feeding live data back to your Command Center.',
    features: [
      { title: 'LoRa Mesh Network', desc: '10km+ transmission range without Wi-Fi.' },
      { title: 'Decade Battery Life', desc: 'Ultra-low power consumption protocols.' },
      { title: 'Ruggedized Housing', desc: 'Built to withstand extreme agricultural conditions.' }
    ]
  },
  'early-fire-detection': {
    name: 'Early Fire Detection',
    systemLabel: 'PREVENT // FIRE_MITIGATION',
    accentColor: 'text-orange-400',
    borderGlow: 'border-orange-500/50',
    icon: Flame, // Ensure you imported Flame from lucide-react
    tagline: 'Algorithmic early-fire detection. The ultimate water conservation.',
    description: 'A massive blaze doesn\'t just destroy infrastructure; it requires millions of gallons of municipal water to suppress. EmberSense is an enterprise-grade IoT fire mitigation node. Rather than waiting for smoke to hit a traditional ceiling alarm, our nodes detect the specific Volatile Organic Compounds (VOCs) and off-gassing associated with smoldering materials—identifying threats hours before an open flame ignites.',
    features: [
      { title: 'Agnostic Environment Scaling', desc: 'Deploy via Solar + LoRaWAN for off-grid mountain forest perimeters, or utilize wired PoE / NB-IoT for indoor data centers and commercial warehouses.' },
      { title: 'Edge AI Data Stack', desc: 'Raw sensor data is classified locally on the MCU via TinyML. Only verified threat payloads are published to the MQTT/TSDB stack, preserving bandwidth and eliminating false positives.' },
      { title: 'System-Wide Actuation', desc: 'Upon verified detection, the OS autonomously secures HVAC dampers to prevent oxygen flow and routes emergency water pressure to localized suppression zones.' }
    ]
  }
};

// Next.js static export requirement
export function generateStaticParams() {
  return Object.keys(productDatabase).map((slug) => ({
    slug: slug,
  }));
}

// ----------------------------------------------------------------------
// THE PAGE TEMPLATE
// ----------------------------------------------------------------------
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productDatabase[resolvedParams.slug as keyof typeof productDatabase];

  if (!product) {
    return <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center font-mono">NODE_NOT_FOUND</div>;
  }

  const Icon = product.icon;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800">
      
      {/* GLOBAL NAVIGATION BREADCRUMBS */}
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <Link href="/#solutions" className="hover:text-white transition-colors">CORE_INFRASTRUCTURE</Link>
          <span>/</span>
          <span className={product.accentColor}>{resolvedParams.slug}</span>
        </div>
      </nav>

      {/* PRODUCT HERO SECTION */}
      <section className="relative px-8 pt-20 pb-16 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left space-y-6">
            <div className="inline-flex items-center rounded-none border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Terminal className={`mr-2 h-3.5 w-3.5 ${product.accentColor}`} />
              {product.systemLabel}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              {product.name}
            </h1>
            
            <p className="text-xl text-zinc-300 font-medium">
              {product.tagline}
            </p>
            
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              {product.description}
            </p>

            <div className="pt-6 border-t border-zinc-800/50">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-zinc-500">BASE_DEPLOYMENT_COST:</span>
                <span className="text-white font-bold tracking-tight">Contact for Custom Quote</span>
              </div>
              <Link href="#initiate-contact">
                <Button size="lg" className={`h-14 px-8 text-lg bg-zinc-100 hover:bg-white text-zinc-950 rounded-none font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all`}>
                  Request System Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className={`relative aspect-square w-full max-w-md mx-auto border ${product.borderGlow} bg-zinc-900/30 flex items-center justify-center overflow-hidden shadow-2xl`}>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col items-center gap-6">
                <Icon className={`h-32 w-32 ${product.accentColor} opacity-80`} />
                <span className="font-mono text-xs tracking-widest text-zinc-500 bg-zinc-950 px-3 py-1 border border-zinc-800">
                   AWAITING_HARDWARE_RENDER
                </span>
             </div>

             <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${product.borderGlow}`}></div>
             <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${product.borderGlow}`}></div>
             <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${product.borderGlow}`}></div>
             <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${product.borderGlow}`}></div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="px-8 py-24 bg-zinc-900/30 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Specifications</h2>
            <p className="text-zinc-500 font-mono text-sm">System capabilities and integration parameters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-4">
                <div className={`h-8 w-8 bg-zinc-900 flex items-center justify-center border border-zinc-700`}>
                  <Zap className={`h-4 w-4 ${product.accentColor}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / QUOTE FORM TERMINAL */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-10 text-center">
            <Mail className="h-8 w-8 text-zinc-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight mb-2">Initiate System Audit</h2>
            <p className="text-zinc-400 text-sm">
              Submit your facility parameters below to request a custom deployment quote. A SECURE Blue engineer will contact you directly from <span className="text-white font-mono">office@securetool.company</span>.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20"></div>
            
            {/* The interactive form is injected right here */}
            <ContactForm productName={product.name} />
            
          </div>
        </div>
      </section>

    </div>
  );
}