import { Button } from '@/components/ui/button';
import { 
  Terminal, ShieldCheck, Activity, 
  ChevronRight, Target, CheckCircle2, AlertTriangle, 
  Droplets, Wind, Zap, Gauge, Building2, Tractor, Landmark, Mountain, Flame, Hotel
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import React from 'react';

// ----------------------------------------------------------------------
// TYPESCRIPT TYPES
// ----------------------------------------------------------------------
type DeploymentTrack = {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  goals: string[];
  deliverables: string[];
};

type TerminalLog = {
  key: string;
  val: string;
};

type IndustrySector = {
  name: string;
  systemLabel: string;
  accentColor: string;
  borderGlow: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  heroDescription: string;
  paradigmTitle: string;
  paradigmText1: string;
  paradigmText2: string;
  tracks: DeploymentTrack[];
  terminalLogs: TerminalLog[];
};

// ----------------------------------------------------------------------
// INDUSTRY SECTOR DATABASE
// Slugs match navbar: hoa, hospitality, agriculture, real-estate, municipality
// ----------------------------------------------------------------------
const industryDatabase: Record<string, IndustrySector> = {
  'hoa': {
    name: 'HOAs & Communities',
    systemLabel: 'RESIDENTIAL_DEPLOYMENT_MODULE',
    accentColor: 'text-violet-400',
    borderGlow: 'border-violet-500/50',
    icon: Mountain,
    tagline: 'Decentralized infrastructure and threat detection for off-grid estates.',
    heroDescription: 'Mountain communities and remote residential foothills face severe vulnerabilities. Rising HOA fees are heavily driven by inefficient legacy maintenance, undetected shared-pipe leaks, and reliance on distant municipal utility pumping. SECURE Blue puts infrastructure control back into the hands of the community.',
    paradigmTitle: 'Resident-Hosted Safety Networks.',
    paradigmText1: "Remote subdivisions shouldn't have to wait for county resources or drive miles down the mountain to check a community water tank. Relying on centralized monitoring leaves foothill estates blind to both utility hemorrhage and environmental threats.",
    paradigmText2: 'SECURE Blue utilizes a decentralized mesh approach. By coordinating with homeowners to host our LoRaWAN gateways on their properties, the HOA can instantly blanket the entire mountain community in an IoT protection canopy—enabling everything from automated shared-water rationing to early wildfire detection.',
    tracks: [
      {
        id: 'TRACK_01: REMOTE_UTILITIES',
        title: 'Off-Grid Sourcing & Winterization',
        desc: "Protect community water reserves. Deploy A2W units to relieve shared wells, and install LeakStop on residential intake lines to prevent a single frozen, burst pipe from draining the entire subdivision's tank.",
        icon: ShieldCheck,
        goals: [
          'Prevent catastrophic drain of shared water supplies.',
          'Create independent water reserves for mountain estates.',
          'Stabilize and lower annual HOA utility dues.',
        ],
        deliverables: [
          'Main-line LeakStop actuation for winter bursts.',
          'Community-scale A2W atmospheric generators.',
          'Live reservoir/tank volume telemetry.',
        ],
      },
      {
        id: 'TRACK_02: THREAT_CANOPY',
        title: 'Environmental Threat Networks',
        desc: "Leverage the community's physical footprint. Homeowners host localized gateways that connect to environmental sensors across the foothills, providing ultra-early detection for wildfires and flow anomalies.",
        icon: Flame,
        goals: [
          'Establish an early-warning wildfire detection perimeter.',
          'Create a resilient communications mesh without Wi-Fi.',
          'Provide total visibility to the HOA board.',
        ],
        deliverables: [
          'Resident-hosted LoRaWAN gateway hardware.',
          'Topographical fire and moisture sensor arrays.',
          'Community-wide emergency SMS alerting.',
        ],
      },
    ],
    terminalLogs: [
      { key: 'ACTIVE_NODE', val: 'GATEWAY_RESIDENCE_42' },
      { key: 'COMMUNITY_TANK_VOL', val: '92% (STABLE)' },
      { key: 'ENV_SENSOR_STATUS', val: 'SCANNING_PERIMETER' },
      { key: 'LOG', val: '> Ambient temperature/humidity nominal.' },
      { key: 'LOG', val: '> Mesh network strength: OPTIMAL across 86 estates.' },
    ],
  },

  'hospitality': {
    name: 'Golf & Hospitality',
    systemLabel: 'HOSPITALITY_DEPLOYMENT_MODULE',
    accentColor: 'text-emerald-400',
    borderGlow: 'border-emerald-500/50',
    icon: Hotel,
    tagline: 'Automate pristine landscaping. Prevent catastrophic property damage.',
    heroDescription: 'Hospitality runs on microscopic margins. Over-watering a 300-acre fairway wastes hundreds of thousands of dollars, while a single undetected pipe burst in a hotel wing can ruin an entire season. SECURE Blue eliminates both risks.',
    paradigmTitle: 'The End of Blind Irrigation.',
    paradigmText1: 'Legacy golf courses run their sprinklers on simple clocks. Whether the soil is already saturated, or a massive rainstorm is incoming, the timers deploy pristine, expensive municipal water onto the grass.',
    paradigmText2: 'Our Smart Irrigation arrays utilize 10km LoRaWAN topography sensors to measure exact soil moisture levels. Water is deployed algorithmically—only where it is needed, and only when it is needed. Paired with LeakStop sensors in the clubhouse and hotel wings, your entire resort footprint becomes impregnable to waste.',
    tracks: [
      {
        id: 'TRACK_01: TOPO_IRRIGATION',
        title: 'Algorithmic Turf Management',
        desc: 'Deploy wide-area LoRaWAN sensors across all 18 holes. The system aggregates moisture data to automate zone-specific delivery, ensuring tournament-ready greens while slashing utility costs.',
        icon: Droplets,
        goals: [
          'Eliminate over-watering and root rot.',
          'Drastically reduce municipal water bills.',
          'Automate delivery based on live API weather data.',
        ],
        deliverables: [
          'LoRaWAN Soil Sensor array.',
          'Automated actuator integration.',
          'Live topography moisture mapping dashboard.',
        ],
      },
      {
        id: 'TRACK_02: ASSET_PROTECTION',
        title: 'Clubhouse & Hotel Leak Mitigation',
        desc: 'A flooded hotel wing means canceled bookings and massive insurance claims. Install LeakStop on all primary intake lines to instantly neutralize pressure anomalies.',
        icon: ShieldCheck,
        goals: [
          'Prevent structural water damage.',
          'Lower commercial insurance premiums.',
          'Maintain uninterrupted guest experiences.',
        ],
        deliverables: [
          'Holistic intake flow sensors.',
          'Algorithmic baseline anomaly detection.',
          'Millisecond auto-shutoff valves.',
        ],
      },
    ],
    terminalLogs: [
      { key: 'ACTIVE_SECTOR', val: 'FAIRWAY_14 (ZONE_B)' },
      { key: 'SOIL_SATURATION', val: '42% (OPTIMAL)' },
      { key: 'SPRINKLER_STATUS', val: 'HALTED_BY_SYSTEM' },
      { key: 'LOG', val: '> Forecasted rainfall detected via API.' },
      { key: 'LOG', val: '> Suppressing timer schedule. 14,000 GAL conserved.' },
    ],
  },

  'agriculture': {
    name: 'Large-Scale Agriculture',
    systemLabel: 'AGRI_DEPLOYMENT_MODULE',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Tractor,
    tagline: 'Data-driven crop yields. Off-grid water independence.',
    heroDescription: 'The agricultural sector is at the mercy of unpredictable weather and tightening municipal water restrictions. SECURE Blue transforms farming from a guessing game into a precision science, utilizing IoT telemetry and independent atmospheric water generation.',
    paradigmTitle: 'Severing Grid Dependency.',
    paradigmText1: 'As global droughts worsen, farms relying entirely on state-run canals and municipal grids are facing existential threats through forced rationing and skyrocketing costs per acre-foot.',
    paradigmText2: 'By deploying industrial A2W (Air-to-Water) generation units powered by solar, farms can literally pull clean water out of the humidity in the air. Paired with our Smart Irrigation sensors, this generated water is deployed with surgical precision, maximizing crop yield while minimizing input waste.',
    tracks: [
      {
        id: 'TRACK_01: OFF_GRID_SOURCING',
        title: 'Atmospheric Water Extraction',
        desc: 'Deploy banks of industrial A2W machines to create a localized, independent water supply that acts as a hedge against municipal grid failures.',
        icon: Wind,
        goals: [
          'Insulate crops from government water rationing.',
          'Create a secondary, reliable water supply.',
          'Ensure pure, contaminant-free water for sensitive crops.',
        ],
        deliverables: [
          'Industrial A2W generator banks.',
          'Solar/Power matrix integration.',
          'Live atmospheric yield tracking.',
        ],
      },
      {
        id: 'TRACK_02: PRECISION_DELIVERY',
        title: 'Telemetry-Guided Irrigation',
        desc: 'Stop flooding fields blindly. Our ruggedized sensors provide root-level moisture data across vast acreage, triggering localized drip lines only when necessary.',
        icon: Target,
        goals: [
          'Maximize crop yield per gallon.',
          'Prevent fertilizer runoff from over-watering.',
          'Monitor thousands of acres from one screen.',
        ],
        deliverables: [
          'Ruggedized deep-soil sensor probes.',
          'Long-range mesh network gateways.',
          'Automated drip-line actuation.',
        ],
      },
    ],
    terminalLogs: [
      { key: 'ACTIVE_SECTOR', val: 'ORCHARD_NORTH_04' },
      { key: 'A2W_YIELD_RATE', val: '412 L/HR (HUMIDITY: 64%)' },
      { key: 'CROP_MOISTURE_IDX', val: 'CRITICAL_LOW' },
      { key: 'LOG', val: '> Root saturation below 18% threshold.' },
      { key: 'LOG', val: '> Actuating Sector 4 drip lines. Distributing A2W reserves.' },
    ],
  },

  'real-estate': {
    name: 'Commercial Real Estate',
    systemLabel: 'CRE_DEPLOYMENT_MODULE',
    accentColor: 'text-blue-400',
    borderGlow: 'border-blue-500/50',
    icon: Building2,
    tagline: 'Eradicate catastrophic water risk from your portfolio.',
    heroDescription: 'For property managers and REITs, water is the enemy. A single plumbing failure on a weekend can flood multiple commercial floors, destroying millions in tenant assets and rendering the property uninhabitable. LeakStop is your ultimate insurance policy.',
    paradigmTitle: 'Reactive vs. Proactive Mitigation.',
    paradigmText1: 'Traditional facility management relies on tenants noticing a leak, or security guards stumbling upon a flooded hallway during rounds. By the time a human reacts, the drywall, electrical, and flooring are already destroyed.',
    paradigmText2: 'SECURE LeakStop shifts CRE management into the proactive era. Our AI learns the baseline flow of your building. The exact millisecond an anomalous pressure drop occurs—indicating a burst pipe or fixture failure—the system autonomously closes the mains, mitigating the threat in seconds.',
    tracks: [
      {
        id: 'TRACK_01: LEAK_MITIGATION',
        title: 'Autonomous Flow Overwatch',
        desc: 'Protect high-rises and multi-tenant facilities. Install holistic sensors that monitor the entire plumbing architecture and actuate emergency shut-offs without human approval.',
        icon: ShieldCheck,
        goals: [
          'Prevent catastrophic multi-floor flooding.',
          'Negotiate massive commercial insurance discounts.',
          'Protect sensitive tenant server rooms/assets.',
        ],
        deliverables: [
          'Main-line holistic flow sensors.',
          'Industrial-grade automated ball valves.',
          'Instant SMS/Email threat alerts.',
        ],
      },
      {
        id: 'TRACK_02: UTILITY_ANALYTICS',
        title: 'Granular Consumption Tracking',
        desc: 'Identify silent leaks (running toilets, stuck HVAC valves) that cost tens of thousands of dollars a year in wasted utility bills across a large property portfolio.',
        icon: Activity,
        goals: [
          'Eliminate silent utility bleed.',
          'Sub-meter tenant usage accurately.',
          'Increase overall building Net Operating Income (NOI).',
        ],
        deliverables: [
          'Live GPM consumption dashboard.',
          'Historical flow analytics.',
          'Automated ROI and savings reports.',
        ],
      },
    ],
    terminalLogs: [
      { key: 'ACTIVE_NODE', val: 'MAIN_TOWER_INTAKE' },
      { key: 'FLOW_BASELINE', val: '12.4 GPM' },
      { key: 'CURRENT_FLOW', val: '84.2 GPM (ANOMALY)' },
      { key: 'LOG', val: '> WARNING: Massive pressure anomaly detected.' },
      { key: 'LOG', val: '> Actuating emergency shut-off. Securing tower.' },
    ],
  },

  'municipality': {
    name: 'Municipalities',
    systemLabel: 'CIVIC_DEPLOYMENT_MODULE',
    accentColor: 'text-cyan-400',
    borderGlow: 'border-cyan-500/50',
    icon: Landmark,
    tagline: 'Modernize aging civic infrastructure and public works.',
    heroDescription: 'City grids are failing under the weight of population growth and decades of deferred maintenance. SECURE Blue equips local governments with the IoT architecture needed to track civic water loss, automate public park maintenance, and deploy emergency A2W relief.',
    paradigmTitle: 'Data-Driven Public Works.',
    paradigmText1: 'Municipalities lose billions of gallons annually to undetected main breaks and wildly inefficient public landscaping. Taxpayer dollars are literally washing down the storm drains.',
    paradigmText2: 'Our centralized Command Center allows city engineers to oversee massive geographic grids from a single pane of glass. Pinpoint exact pressure drops in city lines, automate civic park irrigation to save reservoir levels, and deploy A2W units to public facilities to reduce grid strain.',
    tracks: [
      {
        id: 'TRACK_01: CIVIC_CONSERVATION',
        title: 'Public Park Automation',
        desc: 'Retrofit city parks, medians, and public golf courses with smart irrigation arrays. Ensure public spaces remain green without wasting a drop of the city reservoir.',
        icon: Droplets,
        goals: [
          'Drastically reduce civic water consumption.',
          'Automate public works maintenance schedules.',
          'Publicly demonstrate green-tech initiatives.',
        ],
        deliverables: [
          'Wide-area LoRaWAN municipal networks.',
          'Smart actuator retrofitting for public spaces.',
          'Centralized city-wide dashboard.',
        ],
      },
      {
        id: 'TRACK_02: GRID_RELIEF',
        title: 'Decentralized Civic Sourcing',
        desc: 'Deploy A2W generation units to critical civic infrastructure (schools, emergency centers, hospitals) to ensure they have independent water supplies during grid failures.',
        icon: Zap,
        goals: [
          'Create resilient disaster-relief water points.',
          'Relieve strain on aging treatment plants.',
          'Ensure critical facilities remain operational.',
        ],
        deliverables: [
          'High-capacity A2W deployment.',
          'Graywater recycling loops for civic buildings.',
          'Independent power/water matrices.',
        ],
      },
    ],
    terminalLogs: [
      { key: 'ACTIVE_NODE', val: 'CENTRAL_PARK_IRRIG' },
      { key: 'CITY_RESERVOIR_LVL', val: '68% (RESTRICTION_ACTIVE)' },
      { key: 'ZONE_MOISTURE', val: 'ADEQUATE' },
      { key: 'LOG', val: '> Civic rationing mandate in effect.' },
      { key: 'LOG', val: '> Delaying public park irrigation cycle by 48hrs.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(industryDatabase).map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industryDatabase[resolvedParams.slug as keyof typeof industryDatabase];

  if (!industry) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center font-mono">
        SECTOR_NOT_FOUND
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800">

      {/* HERO */}
      <section className="relative px-8 pt-24 pb-16 max-w-7xl mx-auto w-full border-b border-zinc-800/50">
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
            <Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link>
            <ChevronRight className="h-3 w-3" />
            <span className={industry.accentColor}>{industry.systemLabel}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            {industry.name}. <br />
            <span className="text-zinc-500 text-4xl md:text-5xl">{industry.tagline}</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-3xl">
            {industry.heroDescription}
          </p>
          <Link href="#initiate-contact">
            <Button size="lg" className="h-12 px-8 bg-zinc-100 hover:bg-white text-zinc-950 rounded-none font-bold tracking-wide transition-all">
              <Terminal className="mr-2 h-4 w-4" /> Request Sector Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* PARADIGM SHIFT */}
      <section className="px-8 py-24 bg-zinc-950 border-b border-zinc-800/50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 border border-zinc-800 bg-zinc-900/40 p-10 md:p-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-8">
            <AlertTriangle className="h-3.5 w-3.5" />
            SYSTEM_WARNING: LEGACY_INFRASTRUCTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {industry.paradigmTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-zinc-400 leading-relaxed font-light">{industry.paradigmText1}</p>
            <p className="text-zinc-400 leading-relaxed font-light">{industry.paradigmText2}</p>
          </div>
          <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center gap-4">
            <Icon className={`h-8 w-8 ${industry.accentColor} opacity-50`} />
            <Gauge className={`h-8 w-8 ${industry.accentColor} opacity-50`} />
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest ml-4">
              &gt; Secure your infrastructure.
            </span>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT TRACKS */}
      <section className="px-8 py-24 bg-zinc-950 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hardware Deployment Tracks</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Turn-key, zero-overhead IoT pipelines specifically engineered for the {industry.name} sector.
            </p>
          </div>
          <div className="space-y-12">
            {industry.tracks.map((track, idx) => {
              const TrackIcon = track.icon;
              return (
                <div key={idx} className="border border-zinc-800 bg-zinc-900/30 p-8 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <TrackIcon className="w-48 h-48" />
                  </div>
                  <div className="relative z-10 grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`inline-flex items-center px-2 py-1 text-xs font-mono ${industry.accentColor} mb-4 border border-zinc-800 bg-zinc-900`}>
                        {track.id}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{track.desc}</p>
                    </div>
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center text-sm font-bold text-white mb-3">
                          <Target className={`mr-2 h-4 w-4 ${industry.accentColor}`} /> Business Goals
                        </h4>
                        <ul className="space-y-2 text-xs text-zinc-400">
                          {track.goals.map((goal, gIdx) => (
                            <li key={gIdx} className="flex items-start">
                              <span className={`${industry.accentColor} mr-2`}>-</span> {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center text-sm font-bold text-white mb-3">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-400" /> Platform Deliverables
                        </h4>
                        <ul className="space-y-2 text-xs text-zinc-400">
                          {track.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start">
                              <span className="text-emerald-400 mr-2">-</span> {deliv}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVE TELEMETRY TERMINAL */}
      <section className="px-8 py-24 bg-zinc-900/20 border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto rounded-md border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex justify-between">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/20" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
            </div>
            <span className={`text-[10px] font-mono ${industry.accentColor}`}>/sector-dashboard/live-telemetry</span>
          </div>
          <div className="p-8 font-mono text-sm space-y-4">
            {industry.terminalLogs.map((log, lIdx) => (
              <div
                key={lIdx}
                className={
                  log.key === 'LOG'
                    ? `mt-4 text-xs ${log.val.includes('WARNING') ? 'text-red-400' : 'text-zinc-400'}`
                    : 'flex justify-between text-zinc-500 border-b border-zinc-800 pb-2'
                }
              >
                {log.key === 'LOG' ? (
                  <p>{log.val}</p>
                ) : (
                  <>
                    <span>{log.key}:</span>
                    <span className="text-zinc-300">{log.val}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="initiate-contact" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Initiate Sector Audit</h2>
            <p className="text-zinc-400 text-sm">
              Submit your specific {industry.name} facility parameters below.
            </p>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20" />
            <ContactForm productName={`INDUSTRY INQUIRY: ${industry.name}`} />
          </div>
        </div>
      </section>

    </div>
  );
}
