export type WaterRecoverySolution = {
  slug:
    | "greywater"
    | "condensate"
    | "cooling-tower-recovery"
    | "stormwater"
    | "rainwater"
    | "multi-source";
  title: string;
  shortTitle: string;
  system: string;
  sourceLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroAccent: "cyan" | "blue" | "lime";
  heroDescription: string;
  overview: string;
  sourceWater: string[];
  reuseApplications: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  systemNotes: string[];
  primaryCtaLabel: string;
};

export const waterRecoverySolutions: WaterRecoverySolution[] = [
  {
    slug: "greywater",
    title: "Greywater Recovery Systems",
    shortTitle: "Greywater Recovery",
    system: "GREYFLO SERIES",
    sourceLabel: "SHOWERS / LAVATORIES / BATHS / LAUNDRY",
    heroEyebrow: "SECURE BLUE + WAHASO // GREYFLO SERIES",
    heroTitle: "Turn Gently Used Water Into a Managed On-Site Resource.",
    heroAccent: "cyan",
    heroDescription:
      "Greywater recovery captures water from showers, lavatories, baths, and laundry, then treats it for planned non-potable reuse throughout the facility.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/wahaso-commercial-greywater-harvesting-systems-1-980x1306.jpg",
    heroImageAlt:
      "Wahaso GreyFlo commercial greywater harvesting and recovery system",
      overview:
      "SECURE Blue and Wahaso help commercial, institutional, multifamily, hospitality, campus, and mixed-use projects capture greywater and put it back to work. GreyFlo systems are selected around source volume, required treatment level, intended reuse, facility controls, and applicable project requirements.",
    sourceWater: [
      "Showers and bathing fixtures",
      "Lavatory sinks",
      "Laundry systems",
      "Other approved greywater sources",
    ],
    reuseApplications: [
      "Landscape irrigation",
      "Subsurface irrigation",
      "Toilet flushing",
      "Urinal flushing",
      "Cooling tower make-up",
    ],
    benefits: [
      {
        title: "Commercial-Scale Recovery",
        description:
          "Recover water generated every day inside the facility and redirect it toward planned non-potable demand.",
      },
      {
        title: "Scalable Treatment Paths",
        description:
          "GreyFlo system configurations support small irrigation-focused projects through high-capacity, fully monitored commercial reuse systems.",
      },
      {
        title: "Automation Ready",
        description:
          "System controls, monitoring, pumps, filtration, and optional BAS integration support reliable operation.",
      },
      {
        title: "Designed for Reuse",
        description:
          "Treatment is matched to the intended end use, from irrigation to flushing and cooling tower make-up.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Capture",
        description:
          "Collect approved greywater from showers, lavatories, laundry, and other designated building sources.",
      },
      {
        step: "02",
        title: "Treat",
        description:
          "Apply the project-appropriate filtration, ultrafiltration, UV, disinfection, and monitoring approach.",
      },
      {
        step: "03",
        title: "Store",
        description:
          "Hold treated water in the appropriate tank configuration for reliable facility demand management.",
      },
      {
        step: "04",
        title: "Reuse",
        description:
          "Distribute treated non-potable water to irrigation, flushing, cooling-tower, or other approved uses.",
      },
    ],
    systemNotes: [
      "GreyFlo-Core: compact option for small subsurface irrigation projects.",
      "GreyFlo-Pro: flexible mid-size system for commercial reuse and BAS-connected applications.",
      "GreyFlo-Max: high-capacity treatment with advanced monitoring for demanding applications.",
      "Available configurations are selected around actual site conditions, reuse demand, and project requirements.",
    ],
    primaryCtaLabel: "Discuss a Greywater Recovery Project",
  },
  {
    slug: "condensate",
    title: "HVAC Condensate Recovery",
    shortTitle: "Condensate Recovery",
    system: "CONDENSAFLO SERIES",
    sourceLabel: "HVAC / AIR-HANDLING EQUIPMENT",
    heroEyebrow: "SECURE BLUE + WAHASO // CONDENSAFLO SERIES",
    heroTitle: "Make Your Cooling System Part of Your Water Strategy.",
    heroAccent: "blue",
    heroDescription:
      "Commercial cooling equipment produces condensate as it removes moisture from the air. CondensaFlo systems capture that water at its source and return it to high-value facility reuse.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/wahaso-commercial-best-condensate-systems-2-980x1306.jpg",
    heroImageAlt:
      "Wahaso CondensaFlo commercial HVAC condensate recovery system",
      overview:
      "HVAC condensate can be a dependable on-site water source, especially in cooling-dominant facilities and hot climates. SECURE Blue and Wahaso evaluate condensate volume, mechanical-system configuration, storage, reuse demand, and control requirements to develop the right recovery approach.",
    sourceWater: [
      "Air handling units",
      "Commercial HVAC systems",
      "Cooling coils",
      "Mechanical-room condensate drains",
    ],
    reuseApplications: [
      "Cooling tower make-up",
      "Landscape irrigation",
      "Approved non-potable reuse",
      "Integrated multi-source reuse systems",
    ],
    benefits: [
      {
        title: "Recover Water at the Source",
        description:
          "Capture HVAC condensate before it reaches the drain and put it back to work within the facility.",
      },
      {
        title: "Compact Skid-Mounted Delivery",
        description:
          "Pre-wired and pre-plumbed equipment supports efficient installation in constrained commercial mechanical environments.",
      },
      {
        title: "Automated Operation",
        description:
          "Self-cleaning filtration, controls, metering, and automation reduce manual operating burden.",
      },
      {
        title: "BAS Integration Ready",
        description:
          "Connect water-recovery equipment to facility controls for better visibility and operational coordination.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Collect",
        description:
          "Route condensate from cooling equipment and air-handling systems into the recovery system.",
      },
      {
        step: "02",
        title: "Filter",
        description:
          "Filter and condition collected condensate for the intended reuse pathway.",
      },
      {
        step: "03",
        title: "Store",
        description:
          "Manage recovered water through the selected storage and pumping configuration.",
      },
      {
        step: "04",
        title: "Reuse",
        description:
          "Deliver recovered water to cooling tower make-up, irrigation, or another approved non-potable application.",
      },
    ],
    systemNotes: [
      "CondensaFlo systems are engineered for commercial HVAC condensate recovery.",
      "Skid-mounted configurations support compact, scalable deployment.",
      "Factory-built systems are pre-wired and pre-plumbed for streamlined project delivery.",
      "CondensaFlo can be integrated into larger water-recovery strategies.",
    ],
    primaryCtaLabel: "Explore Condensate Recovery",
  },
  {
    slug: "cooling-tower-recovery",
    title: "Cooling Tower Recovery",
    shortTitle: "Cooling Tower Recovery",
    system: "CT RECOVER SERIES",
    sourceLabel: "COOLING TOWER BLOWDOWN",
    heroEyebrow: "SECURE BLUE + WAHASO // CT RECOVER SERIES",
    heroTitle: "Recover Blowdown. Cut Water Use. Protect Equipment.",
    heroAccent: "lime",
    heroDescription:
      "CT Recover captures cooling tower blowdown before discharge, uses advanced treatment to manage water quality, and returns recovered water to tower operation.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/Wahaso-Commercial-Cooling-Tower-Blowdown-Water-Savings-Reuse-Systems-1-980x551.jpg",
    heroImageAlt:
      "Wahaso CT Recover commercial cooling tower blowdown recovery system",
      overview:
      "Cooling towers are often among a facility's largest water and chemical cost centers. SECURE Blue and Wahaso help commercial and industrial facility teams evaluate tower operation, recover blowdown, improve water efficiency, and reduce resource demand.",
    sourceWater: [
      "Cooling tower blowdown",
      "Cooling tower basin discharge",
      "Multi-tower cooling systems",
      "Existing tower water-management systems",
    ],
    reuseApplications: [
      "Cooling tower make-up",
      "Reduced blowdown discharge",
      "Reduced potable-water demand",
      "Reduced chemical-treatment demand",
    ],
    benefits: [
      {
        title: "Up to 75% Less Water Use",
        description:
          "CT Recover can save up to 75% on cooling tower water usage, depending on site conditions and system operation.",
      },
      {
        title: "Up to 50% Lower Chemical Cost",
        description:
          "Recovering and managing tower water can cut chemical treatment costs by up to 50%.",
      },
      {
        title: "0.02-Micron Ultra-Filtration",
        description:
          "Advanced ultra-filtration supports water recovery and controlled return to tower operation.",
      },
      {
        title: "Retrofit-Ready Approach",
        description:
          "Evaluate existing cooling tower systems for a recovery strategy with minimal disruption to facility operations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Capture",
        description:
          "Divert cooling tower blowdown before it is discharged from the system.",
      },
      {
        step: "02",
        title: "Filter",
        description:
          "Process blowdown through advanced ultra-filtration and water-quality management equipment.",
      },
      {
        step: "03",
        title: "Optimize",
        description:
          "Blend and manage recovered water to the target operational quality for the cooling tower.",
      },
      {
        step: "04",
        title: "Return",
        description:
          "Automatically return recovered water to cooling tower operation for continued use.",
      },
    ],
    systemNotes: [
      "CT Recover is designed for commercial and industrial cooling tower recovery.",
      "Compatible with building automation system integration.",
      "Supports water, chemical, sustainability, and operating-cost reduction objectives.",
      "Wahaso provides feasibility, ROI, and payback analysis based on project-specific tower data.",
    ],
    primaryCtaLabel: "Request a Cooling Tower Savings Analysis",
  },
  {
    slug: "stormwater",
    title: "Stormwater Harvesting Systems",
    shortTitle: "Stormwater Harvesting",
    system: "STORMFLO SERIES",
    sourceLabel: "RUNOFF / HARDSCAPE / SITE DRAINAGE",
    heroEyebrow: "SECURE BLUE + WAHASO // STORMFLO SERIES",
    heroTitle: "Turn Site Runoff Into a Productive Water Resource.",
    heroAccent: "cyan",
    heroDescription:
      "Stormwater harvesting captures ground-level runoff from hardscape, parking, landscape, and site-drainage areas for engineered treatment and non-potable reuse.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/wahaso-commercial-stormwater-harvesting-systems-1-980x1306.jpg",
    heroImageAlt:
      "Wahaso StormFlo commercial stormwater harvesting system",
      overview:
      "Stormwater is different from rooftop rainwater. It can carry sediment, debris, hydrocarbons, and other contaminants from the site. SECURE Blue and Wahaso evaluate collection areas, water quality, storage, treatment, detention requirements, and reuse demand to configure a suitable recovery system.",
    sourceWater: [
      "Parking areas",
      "Roadways and drive lanes",
      "Walkways and hardscape",
      "Landscaped and softscape areas",
      "Site drainage systems",
    ],
    reuseApplications: [
      "Landscape irrigation",
      "Toilet flushing",
      "Cooling tower make-up",
      "Other approved non-potable applications",
    ],
    benefits: [
      {
        title: "Convert Runoff to Supply",
        description:
          "Capture water from the site and direct it toward planned building or landscape demand.",
      },
      {
        title: "Support Site Water Management",
        description:
          "Coordinate harvesting strategy with detention, drainage, storage, and reuse requirements.",
      },
      {
        title: "Treat for Intended Use",
        description:
          "Treatment components are selected around the source quality and target application.",
      },
      {
        title: "Scale to the Project",
        description:
          "Configure collection, treatment, storage, controls, and pumping around actual site conditions.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Collect",
        description:
          "Capture runoff from approved site areas and route it to the collection and storage system.",
      },
      {
        step: "02",
        title: "Pre-Treat",
        description:
          "Remove sediment, debris, and site-specific contaminants before reuse treatment.",
      },
      {
        step: "03",
        title: "Treat",
        description:
          "Apply the required filtration and treatment for the intended non-potable application.",
      },
      {
        step: "04",
        title: "Reuse",
        description:
          "Deliver treated water to irrigation, flushing, cooling-tower, or other approved demand.",
      },
    ],
    systemNotes: [
      "Stormwater projects require site-specific source and water-quality evaluation.",
      "Collection zones may include parking, hardscape, landscape, and other runoff areas.",
      "Storage and detention requirements are evaluated as part of early project scoping.",
      "Treatment is engineered around the source-water characteristics and intended reuse.",
    ],
    primaryCtaLabel: "Explore Stormwater Harvesting",
  },
  {
    slug: "rainwater",
    title: "Rainwater Harvesting Systems",
    shortTitle: "Rainwater Harvesting",
    system: "STORMFLO-RAIN SERIES",
    sourceLabel: "ROOFTOP COLLECTION",
    heroEyebrow: "SECURE BLUE + WAHASO // STORMFLO-RAIN SERIES",
    heroTitle: "Capture Rainfall. Supply Your Facility. Reduce Demand.",
    heroAccent: "blue",
    heroDescription:
      "StormFlo-Rain systems capture rooftop rainwater, treat it for its intended use, and distribute it as reliable non-potable supply for commercial projects.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/wahaso-commercial-rainwater-harvesting-systems-1-980x861.jpg",
    heroImageAlt:
      "Wahaso StormFlo-Rain commercial rainwater harvesting system",
      overview:
      "Rooftop rainwater is a focused collection source that can support multiple non-potable applications. SECURE Blue and Wahaso evaluate roof area, rainfall, cistern location, storage capacity, demand profile, treatment needs, and controls to build the appropriate system strategy.",
    sourceWater: [
      "Commercial rooftops",
      "Roof drainage systems",
      "Gutters and downspouts",
      "Dedicated rooftop collection zones",
    ],
    reuseApplications: [
      "Landscape irrigation",
      "Toilet flushing",
      "Urinal flushing",
      "Cooling tower make-up",
      "Other approved non-potable uses",
    ],
    benefits: [
      {
        title: "Smart, Scalable Systems",
        description:
          "StormFlo-Rain equipment ranges from compact systems to high-capacity, fully monitored commercial installations.",
      },
      {
        title: "Commercial Project Delivery",
        description:
          "Pre-wired and pre-plumbed equipment supports efficient installation and project coordination.",
      },
      {
        title: "Automation and Controls",
        description:
          "System controls, filtration, pumping, metering, and BAS connectivity support managed operation.",
      },
      {
        title: "Designed for Reuse Demand",
        description:
          "System selection is based on actual roof collection potential and target non-potable demand.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Collect",
        description:
          "Capture rainwater from designated rooftop drainage and collection areas.",
      },
      {
        step: "02",
        title: "Pre-Treat",
        description:
          "Remove debris and prepare collected rainwater for storage and treatment.",
      },
      {
        step: "03",
        title: "Treat",
        description:
          "Apply filtration, disinfection, pumping, and controls matched to the reuse application.",
      },
      {
        step: "04",
        title: "Reuse",
        description:
          "Supply irrigation, flushing, cooling tower make-up, or another approved non-potable demand.",
      },
    ],
    systemNotes: [
      "StormFlo-Rain-Core supports compact and irrigation-focused projects up to 30 GPM.",
      "StormFlo-Rain-Pro supports versatile commercial applications up to 100 GPM.",
      "StormFlo-Rain-Max supports high-capacity, monitored projects up to 500 GPM.",
      "Final system configuration depends on source volume, storage, reuse demand, and project requirements.",
    ],
    primaryCtaLabel: "Explore Rainwater Harvesting",
  },
  {
    slug: "multi-source",
    title: "Multi-Source Water Reuse",
    shortTitle: "Multi-Source Water Reuse",
    system: "INTEGRATED WATER RECOVERY",
    sourceLabel: "MULTIPLE ON-SITE WATER STREAMS",
    heroEyebrow: "SECURE BLUE + WAHASO // INTEGRATED WATER RECOVERY",
    heroTitle: "Build One Water Strategy From Multiple On-Site Sources.",
    heroAccent: "lime",
    heroDescription:
      "Multi-source systems combine available water streams into a coordinated supply strategy designed around a facility's non-potable demand.",
    heroImage:
      "https://wahaso.com/wp-content/uploads/wahaso-multi-source-water-harvesting-systems-980x697.png",
    heroImageAlt:
      "Wahaso multi-source commercial water harvesting and reuse system",
      overview:
      "The strongest water-recovery opportunity is often a combination of sources rather than a single stream. SECURE Blue and Wahaso evaluate the supply profile, source quality, storage requirements, treatment threshold, controls, and reuse demand to create one integrated water strategy.",
    sourceWater: [
      "Rainwater",
      "Stormwater",
      "Greywater",
      "HVAC condensate",
      "Cooling tower blowdown",
      "Other suitable on-site water sources",
    ],
    reuseApplications: [
      "Irrigation",
      "Toilet and urinal flushing",
      "Cooling tower make-up",
      "Process water",
      "Vehicle wash and pressure washing",
      "Other approved non-potable uses",
    ],
    benefits: [
      {
        title: "More Reliable Supply",
        description:
          "Combine complementary sources to create a more dependable on-site water resource.",
      },
      {
        title: "Designed Around Demand",
        description:
          "Match supply, storage, treatment, and controls to the facility's intended non-potable uses.",
      },
      {
        title: "One Integrated System",
        description:
          "Coordinate collection, treatment, storage, monitoring, and delivery through a unified approach.",
      },
      {
        title: "Future-Ready Infrastructure",
        description:
          "Build flexibility into the system to support future facility growth, sustainability, and resilience goals.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map Sources",
        description:
          "Identify each usable source, its volume, quality, seasonality, and collection requirements.",
      },
      {
        step: "02",
        title: "Model Demand",
        description:
          "Define current and future non-potable water demand across all intended facility applications.",
      },
      {
        step: "03",
        title: "Integrate",
        description:
          "Design coordinated collection, storage, treatment, controls, and backup-water logic.",
      },
      {
        step: "04",
        title: "Deploy",
        description:
          "Operate one managed water-recovery system built around the facility's complete water opportunity.",
      },
    ],
    systemNotes: [
      "Multi-source systems are configured around the most demanding source-water treatment requirement.",
      "Supply diversity can improve recovery availability across seasons and facility operating conditions.",
      "System sizing considers source availability, storage, reuse demand, peak requirements, and backup supply.",
      "Controls and monitoring support coordinated operation across multiple source streams.",
    ],
    primaryCtaLabel: "Start a Multi-Source Water Assessment",
  },
];

export function getWaterRecoverySolution(slug: string) {
  return waterRecoverySolutions.find((solution) => solution.slug === slug);
}