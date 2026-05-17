import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, Wind, Droplets, Filter, ArrowLeftRight, Radio, 
  Terminal, ArrowRight, Zap, Mail, Flame, LucideIcon,
  Box, Layers, AlertTriangle, CheckCircle2,
  Stethoscope, Building2, Hotel, Crosshair, Activity,
  SlidersHorizontal, Home, Tractor, CloudRain, Sprout,
  Database, Lock, Snowflake, Trees
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

  sizes?: string[];
  customSizesNote?: string;

  // UPDATED: Added imagePath to individual architectures for model catalogs
  architectures?: { type: string; title: string; desc: string; imagePath?: string }[];
  
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
  
  // --- CORE INFRASTRUCTURE ---
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
      desc: "You don't need a facility manager to operate SECURE Blue. We package the exact same autonomous technology used in high-rises, hospitals, and commercial agricultural farms into a seamless system for your private home. Protect your seasonal properties, hardwood floors, and sprawling estate gardens with zero technical expertise required.",
      icon: Home
    },
    sizes: ['3/4"', '1"', '1.25"', '1.5"', '2"'],
    customSizesNote: 'Custom flanging for 3"+ Commercial, Industrial, and Municipal mains available upon engineering review.',
    architectures: [
      {
        type: 'Type I',
        title: 'Integrated All-in-One Unibody',
        desc: 'Built for mainline plumbing. The actuator, ultrasonic flow meter, and industrial brass valve are seamlessly integrated into a single, tamper-proof housing.'
      },
      {
        type: 'Type II',
        title: 'Solenoid / Motorized Retrofit',
        desc: 'Built for existing irrigation and massive arrays. We insert a flow meter into the line, connecting the smart actuator directly to your existing solenoid valves.'
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
      }
    ],
    telemetryData: [
      { label: 'REAL_TIME_FLOW', value: '1.04 GPM', status: 'normal' },
      { label: 'VALVE_STATE', value: 'OPEN (NOMINAL)', status: 'normal' },
      { label: 'BATTERY_LIFE', value: '10+ YEARS (99%)', status: 'info' }
    ],
    controlParams: [
      { label: 'Pulse Counting Logic', desc: 'Trigger auto shut-off strictly based on exact gallon limits.' },
      { label: 'Digital Input (DI) Triggers', desc: 'Slam valves shut based on external sensor changes.' }
    ],
    techSpecs: [
      {
        category: 'Core Hardware & Protocol',
        items: [
          'Long range wireless, battery operated LoRaWAN valve',
          'Industrial grade (PN25, IP67, fluids up to 140°C/60°F)'
        ]
      }
    ]
  },
  
  'early-fire-detection': {
    name: 'EmberSense Fire Detection',
    systemLabel: 'PREVENT // FIRE_MITIGATION',
    accentColor: 'text-orange-400',
    borderGlow: 'border-orange-500/50',
    icon: Flame,
    tagline: 'Algorithmic early-fire detection. The ultimate water conservation.',
    description: 'A massive blaze doesn\'t just destroy infrastructure; it requires millions of gallons of municipal water to suppress. EmberSense is an enterprise-grade IoT fire mitigation array. Rather than waiting for smoke to hit a ceiling alarm, our nodes detect the specific Volatile Organic Compounds (VOCs), CO₂ spikes, and thermal variances of pre-ignition biomass decomposition.',
    architectures: [
      {
        type: 'Quad-Sensor Array',
        title: 'EmberSense Pro 4',
        desc: 'Features a Non-Dispersive Infrared (NDIR) CO₂ sensor alongside MEMS Temperature, Humidity, and Barometric Pressure sensors to algorithmically filter out false-positives from weather fronts. IP65 rated.'
      },
      {
        type: 'Extended Range Array',
        title: 'EmberSense Compact 3',
        desc: 'Extended-range CO₂ module capable of reading up to 10,000 ppm. Encrypted Bluetooth 5.0 configuration. IP66 rated for severe outdoor exposure.'
      }
    ],
    boldUseCases: [
      {
        scenario: 'Data Center Overheating',
        context: 'Detect the invisible off-gassing of melting wire insulation in an IT rack. The system alerts engineers to cut power to a specific rack hours before the servers ignite.',
        icon: Building2, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      }
    ],
    telemetryData: [
      { label: 'CO2_NDIR_READING', value: '420 PPM (NOMINAL)', status: 'normal' },
      { label: 'SMOLDERING_SIGNATURE', value: 'DETECTED - ELECTRICAL', status: 'alert' }
    ],
    controlParams: [
      { label: 'Multi-Parameter Anomaly Logic', desc: 'Triggers only when CO₂ spikes occur simultaneously with thermal increases and humidity drops.' },
      { label: 'Adaptive Transmission Intervals', desc: 'Nodes conserve battery by reporting every 10-30 minutes, shifting to a 2-minute emergency pulse rate upon anomaly detection.' }
    ],
    techSpecs: [
      {
        category: 'Sensor Array Capabilities',
        items: [
          'CO₂ (NDIR): 400–10,000 ppm range (1 ppm resolution)',
          'Barometric Pressure: 300–1,100 hPa (Pro 4 Exclusive)'
        ]
      }
    ]
  },

  // --- ATMOSPHERIC WATER ---
  'a2w-machines': {
    name: 'Air-2-Water Arrays',
    systemLabel: 'GENERATE // INDEPENDENT_SOURCING',
    accentColor: 'text-cyan-400',
    borderGlow: 'border-cyan-500/50',
    icon: CloudRain,
    tagline: 'Mimicking the Natural Rain Cycle. Unbeatable Water Quality.',
    description: 'Extract high-purity, potable water directly from atmospheric humidity using advanced thermal condensation. We replicate the exact process of natural rain generation within a closed, ultra-sterile environment.',
    sizes: ['40 Gallons/Day (Residential)', '130 Gallons/Day (Commercial)', '265 to 1,320+ Gallons/Day (Industrial)'],
    architectures: [
      { type: '150L / 40G Yield', title: 'A2W-150 [NEXUS]', desc: 'Provides up to 150 liters (40 gallons) per day of high-quality drinking water.' },
      { type: '500L / 130G Yield', title: 'A2W-500 [CUMULUS]', desc: 'Provides up to 500 liters (130 gallons) per day. The core industrial standard.' },
      { type: '5000L / 1320G Yield', title: 'A2W-5000 [THE BEHEMOTH]', desc: 'Our flagship behemoth provides up to 5,000 liters (1,320 gallons) per day of hyper-pure water.' }
    ],
    boldUseCases: [
      {
        scenario: 'Remote Livestock & Wildlife Sustainment',
        context: 'A2W arrays provide an infinite, off-grid water source to automatically fill livestock troughs and wildlife guzzlers exactly where they are needed.',
        icon: Trees, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30'
      }
    ],
    telemetryData: [
      { label: 'CURRENT_YIELD_RATE', value: '4.2 GAL/HR', status: 'normal' },
      { label: 'AMBIENT_HUMIDITY', value: '48% (OPTIMAL)', status: 'normal' }
    ],
    controlParams: [
      { label: 'Intelligent Sensor Auto-Shutdown', desc: 'The OS automatically suspends water generation during extreme, unfavorable weather conditions.' }
    ],
    techSpecs: [
      {
        category: 'Dynamic Filtration Matrix',
        items: [
          'Multi-Stage Carbon Filtration (Neutralizes tastes and odors)',
          'UV-C Sterilization (Eliminates biological contaminants)'
        ]
      }
    ]
  },

  // --- CONSERVATION ---
  'smart-irrigation': {
    name: 'SECURE Smart Irrigation',
    systemLabel: 'CONSERVE // WIRELESS_ACTUATION',
    accentColor: 'text-emerald-400',
    borderGlow: 'border-emerald-500/50',
    icon: Droplets,
    tagline: 'Forget centralized controllers. Total zone-level command.',
    description: 'Deploy water only when mathematically necessary. The SECURE wireless time-controlled smart-actuator connects directly to your 9 or 12VDC latching solenoids, providing seamless, ultra-long-range LoRaWAN control.',
    architectures: [
      { type: 'Class A', title: 'Sub-Terranean Battery Node', desc: 'Powered by single or dual Lithium batteries for 7+ years of autonomy. Buries completely below ground surface.' },
      { type: 'Class C', title: 'Continuous Micro-Solar Node', desc: 'Powered by an external 12VDC power source or micro solar panel for unlimited operational uptime.' }
    ],
    boldUseCases: [
      {
        scenario: 'LoRaWAN Golf Facility Upgrades',
        context: 'Bypass the need to trench miles of new copper wiring across the fairway. Sink these actuators directly at the zone level.',
        icon: CloudRain, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      }
    ],
    telemetryData: [
      { label: 'ZONE_14_LORA_SIGNAL', value: 'RSSI -85dBm (SUB-SURFACE)', status: 'normal' },
      { label: 'FLOW_COUNTER_RETRIEVAL', value: '14,204 GAL (ON-AIR)', status: 'info' }
    ],
    controlParams: [
      { label: 'Decentralized Time-Control', desc: 'Schedules are embedded directly into the actuator firmware. Even if the central network drops, the node executes its routine.' },
      { label: 'On-Air Metering', desc: 'Wire the actuator directly to a water meter or flow sensor to retrieve highly accurate counter values remotely.' }
    ],
    techSpecs: [
      {
        category: 'Telemetry & Connectivity',
        items: [
          'Ultra Long Range: 15+ km (10+ miles) from the Gateway',
          'Exceptional penetration in urban, sub-urban, and buried environments'
        ]
      }
    ]
  },

  'a2w-graywater': {
    name: 'A2W Graywater Distillation',
    systemLabel: 'CONSERVE // LOOP_INTEGRATION',
    accentColor: 'text-purple-400',
    borderGlow: 'border-purple-500/50',
    icon: Filter,
    tagline: 'Closed-loop conservation through thermal distillation.',
    description: 'This unit doesn\'t just filter graywater; it utilizes advanced thermal distillation. Wastewater is vaporized, leaving behind nutrient-rich solutes. The pure water vapor is then captured and condensed by the A2W matrix, returning 100% potable water back into your facility.',
    architectures: [
      { type: 'Type I', title: 'Primary A2W Integration', desc: 'Acts as a direct modular attachment to your existing Atmospheric Water Generator.' }
    ],
    boldUseCases: [
      {
        scenario: 'High-Density Residential & Dormitories',
        context: 'Capture runoff from dozens of apartment showers and sinks. Distill the graywater back to absolute purity.',
        icon: Building2, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      }
    ],
    telemetryData: [
      { label: 'THERMAL_CHAMBER_TEMP', value: '212°F (BOILING)', status: 'normal' },
      { label: 'CONDENSED_YIELD', value: '410 GAL/DAY PURE', status: 'normal' }
    ],
    controlParams: [
      { label: 'Smart Diverter Logic', desc: 'Automatically routes heavily soiled "blackwater" to the municipal sewer while capturing distillable "graywater".' }
    ],
    techSpecs: [
      {
        category: 'Distillation & Routing',
        items: [
          'Thermal vaporization chamber completely separates H2O from chemical solutes',
          'Removable heavy-solute trap for safe disposal or agricultural fertilizer harvesting'
        ]
      }
    ]
  },

  'irrigation-graywater': {
    name: 'Irrigation Graywater',
    systemLabel: 'CONSERVE // WASTEWATER_ROUTING',
    accentColor: 'text-emerald-300',
    borderGlow: 'border-emerald-400/50',
    icon: ArrowLeftRight,
    tagline: 'Turn facility runoff into landscape fuel.',
    description: 'Eliminate the need to use pristine municipal water on grass and crops. This system seamlessly diverts, filters, and pressurizes facility graywater to supply your exterior smart irrigation networks.',
    architectures: [
      { type: 'Type I', title: 'Exterior Diverter & Pump Station', desc: 'Intercepts outgoing graywater lines and ties directly into your irrigation manifolds.' }
    ],
    boldUseCases: [
      {
        scenario: 'Private Home Micro-Economies',
        context: 'Route your family’s daily shower and laundry graywater directly to your raised vegetable beds, fruit trees, and lawn.',
        icon: Home, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30'
      }
    ],
    telemetryData: [
      { label: 'DIVERTED_VOLUME_TODAY', value: '1,200 GAL', status: 'info' },
      { label: 'FILTER_BACKWASH_REQ', value: 'IN 14 DAYS', status: 'info' }
    ],
    controlParams: [
      { label: 'Automated Backwashing', desc: 'Self-cleaning logic clears the bio-filters to maintain optimal flow rates.' }
    ],
    techSpecs: [
      {
        category: 'System Integration',
        items: [
          'Safely removes harmful facility chemicals and heavy detergents via bio-filtration',
          'Variable frequency drive (VFD) pumps ensure consistent PSI across massive sprinkler arrays'
        ]
      }
    ]
  },

  // --- DATA & TELEMETRY (THE NEW SENSOR BREAKOUT) ---
  'iaq-sensors': {
    name: 'Ambient IAQ Nodes',
    systemLabel: 'TELEMETRY // AIR_QUALITY',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Radio,
    tagline: 'Institutional air quality and cognitive optimization.',
    description: 'Complete indoor environmental oversight. Up to 9-in-1 ambient air quality monitoring arrays featuring dynamic E-ink displays, traffic light LED status indicators, and extreme multi-year battery lifespans.',
    architectures: [
      { type: 'Basic', title: '3-in-1 IAQ Node', desc: 'Monitors CO₂, Temperature, and Humidity. Perfect for baseline school and office HVAC compliance.' },
      { type: 'Advanced', title: '9-in-1 IAQ Node', desc: 'Monitors CO₂, Temp, Humidity, PIR Motion, Light, TVOC, Barometric Pressure, PM2.5/10, and Formaldehyde (HCHO).' }
    ],
    boldUseCases: [
      {
        scenario: 'School Cognitive Optimization',
        context: 'Monitor real-time CO₂ density across entire school districts to ensure optimal cognitive environments and instantly detect HVAC circulation failures.',
        icon: Wind, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30'
      }
    ],
    telemetryData: [
      { label: 'HVAC_CO2_LEVELS', value: '420 PPM (NOMINAL)', status: 'normal' },
      { label: 'TVOC_EMISSIONS', value: '0.02 mg/m³', status: 'normal' }
    ],
    controlParams: [
      { label: 'Traffic Light LEDs', desc: 'Visual red/yellow/green indicators on the device alert occupants instantly if air quality drops below safe thresholds.' }
    ],
    techSpecs: [
      {
        category: 'Sensing & Power',
        items: [
          'Up to 9-year battery life with ultra-low power LoRaWAN transmission',
          'Zero-disassembly field provisioning via NFC or Bluetooth 5.0'
        ]
      }
    ]
  },

  'cold-chain-sensors': {
    name: 'Cold-Chain & RTD Probes',
    systemLabel: 'TELEMETRY // THERMODYNAMICS',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Snowflake,
    tagline: 'Sub-degree thermal tracking for perishable compliance.',
    description: 'Protect millions of dollars in perishable assets. These nodes provide absolute thermodynamic oversight for commercial freezers, refrigerated transport, and industrial high-heat pipes.',
    architectures: [
      { type: 'Cold Chain', title: 'Food-Grade Insertion Probes', desc: 'IP67 rated, 316 Stainless Steel probes designed specifically for walk-in freezers and FDA HACCP compliance.' },
      { type: 'Industrial', title: 'High-Capacity RTU Probes', desc: 'Customizable PT100 RTU probes capable of tracking extreme industrial pipe temperatures from -200°C to +800°C.' }
    ],
    boldUseCases: [
      {
        scenario: 'Pharmaceutical Logistics Integrity',
        context: 'Nodes deployed in pharmaceutical storage provide sub-degree telemetry, proving regulatory compliance and alerting you the second a compressor fails.',
        icon: Snowflake, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30'
      }
    ],
    telemetryData: [
      { label: 'FREEZER_7_PROBE', value: '-18.2°C (FDA COMPLIANT)', status: 'normal' },
      { label: 'DATA_BUFFER', value: 'SYNCED (NO PACKET LOSS)', status: 'info' }
    ],
    controlParams: [
      { label: 'Automated Compliance Logging', desc: 'Onboard data buffering (up to 10,000 entries) ensures zero data loss during network outages, maintaining strict FDA 21 CFR Part 11 compliance.' }
    ],
    techSpecs: [
      {
        category: 'Probe Architecture',
        items: [
          'Magnetic mounting and M12 A-coded connectors for rapid industrial tank deployment',
          'FDA and HACCP compliant datalogging structures'
        ]
      }
    ]
  },

  'ag-weather-stations': {
    name: 'Ag. Weather Stations',
    systemLabel: 'TELEMETRY // TOPOGRAPHY',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Tractor,
    tagline: 'Solar-powered micro-climate mapping for vast acreage.',
    description: 'Create a live topographical heat map of your property. These solar-powered macro-nodes aggregate atmospheric data and root-level soil metrics across massive, remote perimeters.',
    architectures: [
      { type: 'Atmospheric', title: 'IoT Weather Station Pro', desc: 'Pole-mounted array tracking Air Temp, Humidity, Wind Speed/Direction, Barometric Pressure, Rainfall, Light, and UV Index.' },
      { type: 'Sub-Surface', title: '3-in-1 Soil Telemetry', desc: 'Ruggedized IP68 probes deployed at multiple root depths tracking Soil Saturation, Temperature, and Electrical Conductivity (EC).' }
    ],
    boldUseCases: [
      {
        scenario: 'Remote Agricultural Topography',
        context: 'Deploy hundreds of nodes across miles of farmland. The LoRaWAN mesh network bounces telemetry data back to the central hub, mapping soil health and micro-climates.',
        icon: Tractor, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30'
      }
    ],
    telemetryData: [
      { label: 'WIND_SPEED', value: '14 MPH (NW)', status: 'normal' },
      { label: 'SOIL_EC_PROBE', value: 'OPTIMAL CONDUCTIVITY', status: 'info' }
    ],
    controlParams: [
      { label: 'Dynamic Reporting Intervals', desc: 'Shift from hourly reporting to minute-by-minute reporting during critical harvests or sudden freeze warnings.' }
    ],
    techSpecs: [
      {
        category: 'Power & Endurance',
        items: [
          'Infinite uptime via integrated Solar Panels (15W) with massive 2,550 mAh backup batteries',
          'Volumetric Water Content (VWC) measurement accuracy of ±3%'
        ]
      }
    ]
  },

  'ai-occupancy-sensors': {
    name: 'AI Spatial & Occupancy',
    systemLabel: 'TELEMETRY // UTILIZATION',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Building2,
    tagline: 'Anonymous spatial analytics and automated HVAC scaling.',
    description: 'Eliminate wasted energy by knowing exactly how your facility is being used. Advanced Time-of-Flight (ToF) and AI stereo-vision sensors provide 99.8% accurate, 100% anonymous people counting.',
    architectures: [
      { type: 'Macro-Spatial', title: 'AI Stereo Vision Counters', desc: 'Ceiling-mounted dual 4MP cameras generating live retail foot traffic heat maps and directional passage counting.' },
      { type: 'Micro-Spatial', title: 'Desk & Cubicle PIR Nodes', desc: 'Under-desk mounted PIR and thermopile arrays providing 98% accurate utilization tracking for hot-desking environments.' }
    ],
    boldUseCases: [
      {
        scenario: 'Commercial Space Utilization',
        context: 'Monitor exact headcount in conference rooms. The OS automatically scales back HVAC delivery to empty floors, saving thousands in wasted utility overhead.',
        icon: Building2, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30'
      }
    ],
    telemetryData: [
      { label: 'CONFERENCE_RM_B', value: '14 OCCUPANTS', status: 'info' },
      { label: 'PASSAGE_COUNTER', value: '412 ENTRANTS TODAY', status: 'normal' }
    ],
    controlParams: [
      { label: 'Building Management (BMS) Hooks', desc: 'Seamlessly port sensor telemetry into existing BACnet/Modbus infrastructure to automate legacy HVAC and lighting systems.' }
    ],
    techSpecs: [
      {
        category: 'Algorithmic Filtering',
        items: [
          'Advanced U-turn filtering and loitering/dwell-time detection prevents false counts',
          'Group counting and staff-exclusion filtering capabilities'
        ]
      }
    ]
  },

  'gas-odor-detectors': {
    name: 'Gas & Odor Detectors',
    systemLabel: 'TELEMETRY // HAZMAT',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Flame,
    tagline: 'Immediate hazard alerting and compliance enforcement.',
    description: 'Protect your personnel and enforce facility policy. These specialized nodes detect hazardous industrial gas build-ups and track illicit behavioral emissions in confined spaces.',
    architectures: [
      { type: 'Hazmat', title: 'Methane (CH₄) Detectors', desc: '12VDC powered wall-mounted nodes tracking combustible gas limits (LEL) with integrated sound and LED alarms.' },
      { type: 'Behavioral', title: 'Vape & Odor Trackers', desc: 'Ceiling mounted nodes tracking illicit vape emissions (TVOC/PM2.5) and bathroom odor metrics (Ammonia / H₂S).' }
    ],
    boldUseCases: [
      {
        scenario: 'School Compliance Enforcement',
        context: 'Detect illicit vape emissions in school or hospital restrooms instantly. The system dispatches a silent SMS alert to security personnel the second a threshold is breached.',
        icon: ShieldCheck, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30'
      }
    ],
    telemetryData: [
      { label: 'CH4_LEL_INDEX', value: '0.01% (SAFE)', status: 'normal' },
      { label: 'RESTROOM_3_AIR', value: 'TVOC SPIKE (VAPE DETECTED)', status: 'alert' }
    ],
    controlParams: [
      { label: 'Automated Ventilation', desc: 'Directly hook Methane sensors to exhaust fans in parking garages to automatically cycle air only when dangerous thresholds are reached.' }
    ],
    techSpecs: [
      {
        category: 'Sensory Output',
        items: [
          'Integrated buzzers and LED traffic lights for immediate localized panic alerting',
          'Vape index scaling (0-100) based on proprietary multi-sensor fusion logic'
        ]
      }
    ]
  },

  'liquid-level-nodes': {
    name: 'Liquid Level & Distance',
    systemLabel: 'TELEMETRY // VOLUMETRIC',
    accentColor: 'text-amber-400',
    borderGlow: 'border-amber-500/50',
    icon: Droplets,
    tagline: 'Ultrasonic tracking for reservoirs, silos, and waste.',
    description: 'Stop dispatching trucks to check empty bins. These nodes use advanced Ultrasonic and Time-of-Flight (ToF) waves to measure the exact depth and volume of liquids, grains, and physical waste.',
    architectures: [
      { type: 'Distance/Level', title: 'Ultrasonic Array Nodes', desc: 'Non-contact sensors bouncing ultrasonic waves to measure exact depths of liquid chemical tanks, grain silos, and municipal waste bins.' },
      { type: 'Submersible', title: 'Hydrostatic Pressure Nodes', desc: 'Heavy duty IP68 probes dropped to the bottom of agricultural reservoirs or dams, measuring exact water volume based on gauge pressure.' }
    ],
    boldUseCases: [
      {
        scenario: 'Municipal Waste Logistics',
        context: 'Deploy ToF sensors to the lid of city trash bins. Logistics teams only route collection trucks to bins that report >85% capacity, slashing fleet fuel consumption.',
        icon: Tractor, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30'
      }
    ],
    telemetryData: [
      { label: 'RESERVOIR_DEPTH', value: '4.5m (STABLE)', status: 'info' },
      { label: 'SILO_3_CAPACITY', value: '88% FULL', status: 'normal' }
    ],
    controlParams: [
      { label: 'Tilt Detection Logic', desc: 'Integrated 3-axis accelerometers instantly alert management if a waste bin tips over or if a mounting pole suffers structural tilt.' }
    ],
    techSpecs: [
      {
        category: 'Measurement Specs',
        items: [
          'Standard ultrasonic ranges from 0.25m up to 10m depths',
          'Capacitive membrane options available for detecting conductive liquid leaks on data-center floors'
        ]
      }
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

      {/* 1. HARDWARE ARCHITECTURE & SIZING */}
      {product.architectures && (
        <section className="px-8 py-24 bg-black border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-tight text-white mb-2">Hardware Architectures</h2>
              <p className="text-zinc-500 font-mono">Select the deployment configuration required for your infrastructure.</p>
            </div>
            
            {product.sizes && (
              <div className="mb-8 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-bold text-white">Available Calibers & Sizing</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.sizes.map((size, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 font-mono text-xs text-zinc-300 rounded">
                      {size}
                    </div>
                  ))}
                </div>
                {product.customSizesNote && (
                  <p className="text-xs text-zinc-500 font-mono mt-4 pt-4 border-t border-zinc-900">
                    * {product.customSizesNote}
                  </p>
                )}
              </div>
            )}

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${product.architectures.length > 2 ? 'lg:grid-cols-3' : ''}`}>
              {product.architectures.map((arch, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col hover:border-zinc-600 transition-colors">
                  <div className={`font-mono text-[10px] uppercase tracking-widest ${product.accentColor} mb-4 bg-zinc-900 inline-block px-3 py-1 rounded self-start`}>
                    {arch.type}
                  </div>
                  
                  {/* DYNAMIC PICTURE SLOT FOR ARCHITECTURES */}
                  {arch.imagePath ? (
                    <div className="mb-6 w-full aspect-square relative border border-zinc-800 bg-zinc-900/50 rounded-xl overflow-hidden shadow-inner">
                      <Image src={arch.imagePath} alt={arch.title} fill className="object-contain p-4 drop-shadow-xl" />
                    </div>
                  ) : (
                    <div className="mb-6 w-full aspect-video border border-zinc-800 border-dashed bg-zinc-900/20 rounded-xl flex flex-col items-center justify-center">
                      <Box className="h-6 w-6 text-zinc-800 mb-2" />
                      <span className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase">AWAITING_RENDER</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-4">{arch.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm flex-1">{arch.desc}</p>
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
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">Granular System Deployment.</h2>
              <p className="text-xl text-zinc-500 mt-4 max-w-2xl mx-auto">Legacy solutions treat your property as a single blind block. You define the specific operational zones; the OS enforces them.</p>
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