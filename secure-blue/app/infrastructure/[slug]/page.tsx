import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, Wind, Droplets, Filter, ArrowLeftRight, Radio, 
  Terminal, ArrowRight, Zap, Mail, Flame, LucideIcon,
  Box, Layers, AlertTriangle, CheckCircle2,
  Stethoscope, Building2, Hotel, Crosshair, Activity,
  SlidersHorizontal, Home, Tractor, CloudRain, Sprout,
  Database, Lock
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; 
import ContactForm from '@/components/ContactForm';

// ----------------------------------------------------------------------
// TYPESCRIPT DEFINITION
// ----------------------------------------------------------------------
type ProductModule = {
  name: string;
  systemLabel: string;
  accentColor: string;
  borderGlow: string;
  icon: LucideIcon;
  imagePath?: string; 
  tagline: string;
  description: string;
  
  residentialContext?: {
    headline: string;
    desc: string;
    icon: LucideIcon;
  };

  architectures?: { type: string; title: string; desc: string }[];
  boldUseCases?: { scenario: string; context: string; icon: LucideIcon; color: string; bg: string }[];
  telemetryData?: { label: string; value: string; status: 'normal' | 'alert' | 'info' }[];
  controlParams?: { label: string; desc: string }[];
  techSpecs?: { category: string; items: string[] }[];
  features?: { title: string; desc: string }[];
};

// ----------------------------------------------------------------------
// THE DATABASE
// ----------------------------------------------------------------------
const productDatabase: Record<string, ProductModule> = {
  
  // --- 1. LEAKSTOP SYSTEM ---
  'leakstop': {
    name: 'SECURE LeakStop',
    systemLabel: 'PREVENT // MITIGATION',
    accentColor: 'text-blue-400',
    borderGlow: 'border-blue-500/50',
    icon: ShieldCheck,
    imagePath: '/images/products/leakstop/LeakStop.png', 
    tagline: 'Autonomous mitigation for catastrophic infrastructure failure.',
    description: 'Stop water loss before it becomes structural damage. SECURE LeakStop utilizes LoRaWAN sensors to monitor baseline flow rates. The millisecond an anomaly is detected, edge-processing actuators shut off the compromised line instantly.',
    
    residentialContext: {
      headline: 'Institutional Grade. Estate Ready.',
      desc: "You don't need a facility manager to operate SECURE Blue. We package the exact same autonomous technology used in high-rises, hospitals, and commercial agricultural farms into a seamless system for your private home. Protect your seasonal properties, hardwood floors, and sprawling estate gardens with zero technical expertise required. If an indoor pipe bursts or an outdoor irrigation line ruptures while you are out of town, the system simply shuts it down and sends you a notification.",
      icon: Home
    },

    architectures: [
      {
        type: 'Type I',
        title: 'Integrated All-in-One Unibody',
        desc: 'Built for mainline plumbing. The actuator, ultrasonic flow meter, and industrial brass valve are seamlessly integrated into a single, tamper-proof housing.'
      },
      {
        type: 'Type II',
        title: 'Solenoid / Motorized Retrofit',
        desc: 'Built for existing irrigation and massive arrays. We insert a flow meter into the line, connecting the smart actuator directly to your existing solenoid valves for total takeover.'
      }
    ],

    boldUseCases: [
      {
        scenario: 'Clinical Pathogen Quarantine',
        context: 'Prevent the spread of waterborne biohazards like Legionella. Isolate a single hospital room or wing instantly without cutting life-safety water to the ICU or surgical floors.',
        icon: Stethoscope, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30'
      },
      {
        scenario: 'High-Rise Tier Mitigation',
        context: 'A ruptured line in the penthouse ruins 39 floors below it. LeakStop isolates the exact luxury tier instantly, saving millions in cascading tenant asset damage.',
        icon: Building2, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      },
      {
        scenario: 'Resort Sector Maintenance',
        context: 'Isolate the East Wing for emergency plumbing maintenance while keeping the casino, restaurants, and active guest towers fully pressurized and operational.',
        icon: Hotel, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30'
      },
      {
        scenario: 'Commercial Agriculture & Irrigation',
        context: 'Retrofit massive farming operations or estate irrigation arrays. The system connects directly to your existing solenoid valves, instantly detecting ruptured lines or broken sprinkler heads to prevent catastrophic crop flooding and water waste.',
        icon: Tractor, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30'
      }
    ],

    telemetryData: [
      { label: 'REAL_TIME_FLOW', value: '1.04 GPM', status: 'normal' },
      { label: 'VALVE_STATE', value: 'OPEN (NOMINAL)', status: 'normal' },
      { label: 'BATTERY_LIFE', value: '10+ YEARS (99%)', status: 'info' },
      { label: 'LORA_SIGNAL', value: 'RSSI -85dBm', status: 'info' },
      { label: 'LAST_TAMPER_CHECK', value: 'SECURE', status: 'normal' },
      { label: 'LAST_INCIDENT', value: 'MICRO-LEAK DETECTED', status: 'alert' }
    ],

    controlParams: [
      { label: 'Pulse Counting Logic', desc: 'Trigger auto shut-off strictly based on exact gallon limits.' },
      { label: 'Digital Input (DI) Triggers', desc: 'Slam valves shut based on external sensor changes.' },
      { label: 'Timed Sequences', desc: 'Automated Open/Close flushing schedules for dead-legs.' },
      { label: 'Slow Closing Mode', desc: 'Prevent water-hammer damage on massive industrial mains.' }
    ],

    techSpecs: [
      {
        category: 'Core Hardware & Protocol',
        items: [
          'Long range wireless, battery operated LoRaWAN valve',
          'Available in Solenoid or Motorized valve technologies',
          'DN10 (3/8”) to DN80 (3”) – larger sizes via add-on board',
          'Industrial grade (PN25, IP67, fluids up to 140°C/60°F)',
          'Available with minimal flow in close position (trickle of 50L/h)',
          'Ultra-low consumption (10+ years autonomy)',
          'Fraud resistant with active tamper alerts'
        ]
      },
      {
        category: 'Network & Connectivity',
        items: [
          'Extreme range: 15+ km (LOS) / 2+ km (Urban) / 22+ Floors (Indoor)',
          'License free operation on EU868, US915, AU915, AS923, IN865',
          'Bi-directional deep indoor communication',
          'IoT ready: Compliant with all Internet of Things platforms',
          'Android & iOS mobile App integration'
        ]
      },
      {
        category: '🔥 2025 Edition Updates',
        items: [
          'Universal Actuator: Same housing for Motorized or Solenoid valves',
          'Bluetooth integrated for local control, LoRaWAN debug, and settings',
          'LoRaWAN Class A (battery) or Class C (external 12VDC power)',
          'Pulse counting up to 20Hz to water meters (+ 2x DI on solenoid)',
          'LoRaWAN 1.04 standards compliance across all frequency bands',
          'Agnostic Integration: Use our recommended valves or retro-fit your own'
        ]
      }
    ]
  },
  
  // --- 2. SMART IRRIGATION ARRAYS ---
  'smart-irrigation': {
    name: 'Smart Irrigation Arrays',
    systemLabel: 'CONSERVE // AUTOMATED_DELIVERY',
    accentColor: 'text-emerald-400',
    borderGlow: 'border-emerald-500/50',
    icon: Droplets,
    tagline: 'Deploy water only when mathematically necessary.',
    description: 'Stop watering your landscaping on a blind timer. Our Smart Irrigation arrays aggregate real-time soil saturation telemetry and atmospheric forecasts to automate delivery systems. Water is deployed precisely to the zones that need it, slashing consumption for massive agricultural hubs and private estates alike.',
    
    residentialContext: {
      headline: 'Agricultural Precision. Estate & Garden Ready.',
      desc: "You don't need to be a commercial farmer to stop wasting water. Bring agricultural-grade soil telemetry to your private garden or summer estate. SECURE Blue monitors the exact moisture at the root level of your rose bushes, raised beds, or lawn. It ensures perfect botanical health without paying the city for a single drop of unnecessary water.",
      icon: Home
    },

    architectures: [
      {
        type: 'Type I',
        title: 'Master Hub Retrofit (Wired)',
        desc: 'Takes over your existing multi-zone sprinkler setups. Replaces the "dumb" timer box on the wall with an edge-computing controller that actuates your existing 24VAC solenoid valves based on telemetry.'
      },
      {
        type: 'Type II',
        title: 'Distributed Solar Nodes (Wireless)',
        desc: 'Built for massive acreage and remote farming. Deploy autonomous, solar-powered valve nodes that communicate back to the master hub via LoRaWAN mesh without trenching miles of copper wire.'
      }
    ],

    boldUseCases: [
      {
        scenario: 'Commercial Ag & Cash Crops',
        context: 'Deploy solar-powered soil probes across hundreds of acres. The system only activates drip lines when root saturation drops below optimal yields, maximizing crop output while slashing utility overhead.',
        icon: Tractor, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30'
      },
      {
        scenario: 'HOA & Golf Course Topography',
        context: 'Stop watering the greens while it rains. The OS pulls live API weather data and halts automated schedules hours before a forecasted downpour, saving thousands in community reserves.',
        icon: CloudRain, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      },
      {
        scenario: 'Private Estate Micro-Climates',
        context: 'Granular zones ensure your drought-tolerant cacti get sipped once a month, while your sensitive fruit trees and vegetable beds get deep-watered automatically exactly when they need it.',
        icon: Sprout, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30'
      }
    ],

    telemetryData: [
      { label: 'ZONE_4_ROOT_SATURATION', value: '42% (OPTIMAL)', status: 'normal' },
      { label: 'FORECAST_API_HOOK', value: '80% RAIN (72H PREDICTIVE)', status: 'info' },
      { label: 'EVAPOTRANSPIRATION_RATE', value: '0.15 in/day', status: 'info' },
      { label: 'MAIN_PUMP_STATUS', value: 'IDLE (CONSERVING)', status: 'normal' },
      { label: 'SOIL_TEMP_PROBE', value: '105°F (STRESS_WARNING)', status: 'alert' }
    ],

    controlParams: [
      { label: 'Weather Override API', desc: 'Instantly suspends upcoming watering cycles if local rain is forecasted.' },
      { label: 'Root-Depth Thresholds', desc: 'Set unique trigger percentages for deep-rooted trees vs. shallow-rooted grass.' },
      { label: 'Evapotranspiration (ET) Logic', desc: 'Automatically adjusts cycle durations based on heat, humidity, and wind data.' },
      { label: 'Broken Head / Leak Alerts', desc: 'Detects broken sprinklers by monitoring unexpected flow volume during cycles.' }
    ],

    techSpecs: [
      {
        category: 'Sensors & Telemetry',
        items: [
          'Volumetric Water Content (VWC) measurement accuracy: ±3%',
          'Integrated Soil Temperature and Electrical Conductivity (EC) probes',
          'Deployable at multiple depths (e.g., 6", 12", 24") for root-zone profiles',
          'Live weather API data ingestion (NOAA, DarkSky, etc.)',
          'Ultra-low power LoRaWAN transmission (10+ year battery life on probes)'
        ]
      },
      {
        category: 'Actuation & Controllers',
        items: [
          'Retrofit Hub: Controls 8, 16, or 32 standard 24VAC solenoid zones',
          'Wireless Nodes: DC latching solenoid control for off-grid deployment',
          'Master Valve & Pump Start Relay integration',
          'Flow meter inputs for real-time gallon tracking and leak detection',
          'Offline Fallback: Executes localized schedules if network connection drops'
        ]
      }
    ]
  },

  // --- 3. A2W MACHINES ---
  'a2w-machines': {
    name: 'Air-2-Water Generator',
    systemLabel: 'GENERATE // INDEPENDENT_SOURCING',
    accentColor: 'text-cyan-400',
    borderGlow: 'border-cyan-500/50',
    icon: Wind,
    tagline: 'Sever your reliance on strained municipal grids.',
    description: 'Extract high-purity, potable water directly from atmospheric humidity. Our industrial-scale units provide resilient sourcing for remote infrastructure.',
    features: [
      { title: 'Atmospheric Extraction', desc: 'Yields scale dynamically with ambient humidity.' },
      { title: 'Grid Independence', desc: 'Total insulation from municipal water rationing.' }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(productDatabase).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productDatabase[resolvedParams.slug as keyof typeof productDatabase];

  if (!product) {
    return <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center font-mono">NODE_NOT_FOUND</div>;
  }

  const Icon = product.icon;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 font-sans">
      
      <nav className="w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center gap-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <Link href="/" className="hover:text-white transition-colors">ROOT_TERMINAL</Link>
          <span>/</span>
          <Link href="/#solutions" className="hover:text-white transition-colors">CORE_INFRASTRUCTURE</Link>
          <span>/</span>
          <span className={product.accentColor}>{resolvedParams.slug}</span>
        </div>
      </nav>

      <section className="relative px-8 pt-20 pb-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <Terminal className={`mr-2 h-3.5 w-3.5 ${product.accentColor}`} />
              {product.systemLabel}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1]">
              {product.name}
            </h1>
            <p className="text-2xl text-zinc-300 font-light italic">
              {product.tagline}
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              {product.description}
            </p>
            <div className="pt-6">
              <Link href="#initiate-contact">
                <Button size="lg" className={`h-14 px-8 text-lg bg-zinc-100 hover:bg-white text-zinc-950 rounded-none font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all`}>
                  Request System Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className={`relative aspect-square w-full max-w-md mx-auto border ${product.borderGlow} bg-zinc-900/30 flex items-center justify-center overflow-hidden shadow-2xl`}>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
             <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
                {product.imagePath ? (
                  <Image src={product.imagePath} alt={product.name} width={400} height={400} className="object-contain w-full h-full drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]" priority />
                ) : (
                  <Icon className={`h-32 w-32 ${product.accentColor} opacity-80`} />
                )}
             </div>
             <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${product.borderGlow}`}></div>
             <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${product.borderGlow}`}></div>
             <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${product.borderGlow}`}></div>
             <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${product.borderGlow}`}></div>
          </div>
        </div>
      </section>

      {/* --- RESIDENTIAL BRIDGE --- */}
      {product.residentialContext && (
        <section className="px-8 py-12 bg-zinc-900/80 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="p-6 bg-black border border-zinc-800 rounded-2xl shadow-xl shrink-0">
               <product.residentialContext.icon className={`h-12 w-12 ${product.accentColor}`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{product.residentialContext.headline}</h2>
              <p className="text-zinc-400 leading-relaxed text-lg max-w-4xl">{product.residentialContext.desc}</p>
            </div>
          </div>
        </section>
      )}

      {/* 1. HARDWARE ARCHITECTURE */}
      {product.architectures && (
        <section className="px-8 py-24 bg-black border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-tight text-white mb-2">Hardware Architectures</h2>
              <p className="text-zinc-500 font-mono">Select the deployment configuration required for your infrastructure.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {product.architectures.map((arch, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors">
                  <div className={`font-mono text-[10px] uppercase tracking-widest ${product.accentColor} mb-4 bg-zinc-900 inline-block px-3 py-1 rounded`}>
                    {arch.type}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{arch.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. BIG BOLD USE CASES */}
      {product.boldUseCases && (
        <section className="px-8 py-32 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">Granular Zone Isolation.</h2>
              <p className="text-xl text-zinc-500 mt-4 max-w-2xl mx-auto">Legacy systems treat your property as a single block. You define the specific zones; the OS enforces them.</p>
            </div>
            
            <div className="space-y-6">
              {product.boldUseCases.map((useCase, idx) => {
                const CaseIcon = useCase.icon;
                return (
                  <div key={idx} className={`p-8 md:p-12 border rounded-3xl ${useCase.bg} backdrop-blur-sm flex flex-col md:flex-row items-center gap-8`}>
                    <div className="p-6 bg-black/50 border border-white/10 rounded-2xl shrink-0">
                      <CaseIcon className={`h-16 w-16 ${useCase.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{useCase.scenario}</h3>
                      <p className="text-xl text-zinc-300 leading-relaxed">{useCase.context}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3 & 4. TELEMETRY AND CONTROL */}
      {(product.telemetryData || product.controlParams) && (
        <section className="px-8 py-24 bg-black border-y border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black tracking-tight text-white mb-4">Command & Control</h2>
              <p className="text-xl text-zinc-500">Don&apos;t just watch your infrastructure. Command it.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {product.telemetryData && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity className="h-4 w-4 text-emerald-500" />
                      <span className="font-mono text-xs text-white tracking-widest">LIVE_DATA_FEED</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    </div>
                  </div>
                  <div className="p-8 font-mono text-sm space-y-6">
                    {product.telemetryData.map((data, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-zinc-900 pb-4 last:border-0 last:pb-0">
                        <span className="text-zinc-500">{data.label}</span>
                        <span className={`text-right font-bold ${
                          data.status === 'alert' ? 'text-red-500' :
                          data.status === 'info' ? 'text-blue-400' : 'text-emerald-500'
                        }`}>
                          {data.status === 'alert' && <AlertTriangle className="inline-block h-4 w-4 mr-2 mb-0.5" />}
                          {data.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.controlParams && (
                <div className="flex flex-col gap-4">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-2">
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                       <SlidersHorizontal className="h-6 w-6 text-zinc-400" />
                       Active Parameters
                     </h3>
                  </div>
                  {product.controlParams.map((param, idx) => (
                    <div key={idx} className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-white mb-1">{param.label}</h4>
                      <p className="text-sm text-zinc-400">{param.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. DETAILED SPECS */}
      {product.techSpecs && (
        <section className="px-8 py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-tight text-white mb-2">Technical Specifications</h2>
              <p className="text-zinc-500 font-mono">Institutional-grade hardware parameters.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {product.techSpecs.map((specGroup, idx) => (
                <div key={idx} className="bg-black border border-zinc-800 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-zinc-800">{specGroup.category}</h3>
                  <ul className="space-y-4">
                    {specGroup.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-zinc-600 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* THE HOLE FILLER: ENGINEERING DOCS LEAD MAGNET */}
              <div className={`bg-zinc-900/30 border border-zinc-800 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group transition-all hover:bg-zinc-900/80 hover:border-zinc-600 ${product.techSpecs.length % 2 === 0 ? 'md:col-span-2' : ''}`}>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="flex gap-4 mb-4 relative z-10">
                    <Database className="h-8 w-8 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                    <Lock className="h-8 w-8 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-2 relative z-10">Require Complete Schematics?</h3>
                 <p className="text-sm text-zinc-400 mb-6 max-w-md relative z-10">
                   Full API documentation, CAD models, wiring diagrams, and architectural integration guides are restricted to verified engineering and development teams.
                 </p>
                 
                 <Link href="#initiate-contact" className="relative z-10">
                   <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400 bg-black font-mono text-[10px] tracking-widest uppercase">
                     Request Dev Access <ArrowRight className="ml-2 h-3 w-3" />
                   </Button>
                 </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Legacy Fallback if features but no tech specs exist */}
      {product.features && !product.techSpecs && (
        <section className="px-8 py-24 bg-zinc-900/30 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">System Integrations</h2>
              <p className="text-zinc-500 font-mono text-sm">Base capabilities included in standard deployments.</p>
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
      )}

      {/* CONTACT / QUOTE FORM TERMINAL */}
      <section id="initiate-contact" className="px-8 py-32 bg-black border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <Mail className="h-8 w-8 text-zinc-400 mx-auto mb-4" />
            <h2 className="text-4xl font-black tracking-tight mb-2">Initiate System Audit</h2>
            <p className="text-zinc-400">
              Submit your facility parameters below to request a custom deployment quote.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden">
            <ContactForm productName={product.name} />
          </div>
        </div>
      </section>

    </div>
  );
}