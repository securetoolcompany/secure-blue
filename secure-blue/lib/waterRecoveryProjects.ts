export type ProjectDetail = {
  label: string;
  value: string;
};

export type WaterRecoveryProject = {
  slug: string;
  name: string;
  location: string;
  categories: string[];
  systems: string[];
  summary: string;
  caseStudy: string[];
  headlineStat?: {
    value: string;
    label: string;
  };
  wahasoAttribution: string;
  image: string;
  imageAlt: string;
  details: ProjectDetail[];
};

const wahasoAttribution =
  "This project was delivered by Wahaso Water Harvesting Solutions and is presented by SECURE Blue as relevant Wahaso project experience.";

const designTeam =
  "Plumbing Engineer, Civil Engineer, Commercial Contractors, Commercial Architect";

export const waterRecoveryProjects: WaterRecoveryProject[] = [
  {
    slug: "williams-village-university-of-colorado",
    name: "Williams Village – University of Colorado",
    location: "Boulder, CO",
    categories: ["Educational", "Greywater"],
    systems: ["greywater"],
    summary:
      "Wahaso designed a greywater harvesting system for University of Colorado Housing and Dining Services, producing high-quality non-potable water for toilet flushing.",
    caseStudy: [
      "The system treats greywater to a quality suitable for toilet flushing in a campus housing environment.",
      "Wahaso's design begins with twin 300-gallon settling tanks that condition the greywater before it moves through treatment.",
    ],
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-university-of-colorado-housing-dining-services-greywater-harvesting-2-980x654.jpg",
    imageAlt:
      "Williams Village University of Colorado Wahaso greywater harvesting project",
    details: [
      { label: "System Type", value: "Greywater Harvesting" },
      { label: "Client", value: "University of Colorado Housing and Dining Services" },
      { label: "Building Type", value: "Educational" },
      { label: "Water Source", value: "Greywater" },
      { label: "Primary Reuse", value: "Toilet Flushing" },
      { label: "Pre-Treatment", value: "Twin 300-Gallon Settling Tanks" },
      { label: "Project Location", value: "Boulder, CO" },
    ],
  },
  {
    slug: "ucla-engineering-building-vi",
    name: "UCLA Engineering Building VI",
    location: "Los Angeles, CA",
    categories: ["Educational", "Greywater"],
    systems: ["greywater"],
    summary:
      "UCLA wanted its new 90,000 square-foot research and academic building to be a showcase. Wahaso built a greywater system that serves toilet flushing throughout the building.",
    caseStudy: [
      "Wahaso was brought in during early planning by Buro Happold Engineering to support water conservation goals for a building targeting LEED Gold or Platinum.",
      "The system treats greywater from lavatory sinks and reverse-osmosis discharge from the laboratories to a quality suitable for toilet flushing. Los Angeles County required the output to be clean, clear, and free of harmful coliforms and other bacteria.",
      "Raw greywater flows by gravity into a large below-grade concrete sump. Transfer pumps push it through Wahaso's GW-Series treatment skid: disk filtration, multi-media filtration, chlorine sanitation, and ultraviolet sanitation.",
      "Treated water is held in a 500-gallon processed water holding tank and pressurized to the toilet fixtures by a duplex 7.5 HP pump system.",
    ],
    headlineStat: {
      value: "~130,000",
      label: "Gallons of municipal water saved per year (expected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-university-of-california-los-angeles-greywater-harvesting-2-980x654.jpg",
    imageAlt:
      "UCLA Engineering Building VI Wahaso greywater harvesting project",
    details: [
      { label: "System Type", value: "Greywater Harvesting" },
      { label: "Client", value: "University of California, Los Angeles" },
      { label: "Building Type", value: "Educational" },
      { label: "Water Sources", value: "Lavatory Sink Greywater, Laboratory Reverse-Osmosis Discharge" },
      { label: "Primary Reuse", value: "Toilet Flushing" },
      { label: "Treatment", value: "Disk Filtration, Multi-Media Filtration, Chlorine, Ultraviolet" },
      { label: "Processing Rate", value: "10 Gallons Per Minute" },
      { label: "Storage", value: "500-Gallon Processed Water Holding Tank" },
      { label: "Pressurization", value: "Duplex 7.5 HP Pump System" },
      { label: "Estimated Annual Water Savings", value: "Approximately 130,000 Gallons" },
      { label: "Commissioning Date", value: "September 2015" },
      { label: "Design & Specialty", value: designTeam },
    ],
  },
  {
    slug: "sfsu-mashouf-wellness-center",
    name: "SFSU Mashouf Wellness Center",
    location: "San Francisco, CA",
    categories: ["Greywater", "Medical"],
    systems: ["greywater"],
    summary:
      "Wahaso delivered a greywater recycling system for toilet flushing and irrigation at San Francisco State University's Mashouf Wellness Center.",
    caseStudy: [
      "The Mashouf Wellness Center recycles water for two uses: flushing toilets and irrigating landscaping.",
      "SFSU Campus Recreation describes the system as collecting, recycling, and treating water from pools, showers, sinks, and fountains.",
    ],
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-sfsu-mashouf-wellness-center-greywater-recycling-for-toilet-flushing-irrigation-2-980x654.jpg",
    imageAlt:
      "SFSU Mashouf Wellness Center Wahaso greywater recycling project",
    details: [
      { label: "System Type", value: "Greywater Recycling" },
      { label: "Client", value: "San Francisco State University" },
      { label: "Water Source", value: "Greywater" },
      { label: "Primary Reuse", value: "Toilet Flushing and Irrigation" },
      { label: "Project Location", value: "San Francisco, CA" },
    ],
  },

  {
    slug: "philadelphia-museum-of-art",
    name: "Philadelphia Museum of Art",
    location: "Philadelphia, PA",
    categories: [
      "Condensate",
      "Cooling Towers",
      "Municipal",
      "Parks",
      "Rainwater",
    ],
    systems: [
      "condensate",
      "cooling-tower-recovery",
      "rainwater",
      "multi-source",
    ],
    summary:
      "A Wahaso case study in cooling-tower water harvesting at one of the country's best-known cultural institutions, with a projected 1,140,000 gallons saved annually.",
    caseStudy: [
      "Wahaso designed a water harvesting system that supplies cooling-tower make-up at the Philadelphia Museum of Art.",
      "Wahaso classifies the project across condensate, cooling tower, and rainwater recovery pathways.",
    ],
    headlineStat: {
      value: "1,140,000",
      label: "Gallons saved annually (projected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Philadelphia-Museum-of-Art-Wahaso-Case-Study-Cool-Tower-Water-Harvesting-980x653.jpg",
    imageAlt:
      "Philadelphia Museum of Art Wahaso cooling tower water harvesting project",
    details: [
      { label: "System Type", value: "Cooling Tower Water Harvesting" },
      { label: "Water Sources", value: "Condensate, Rainwater" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Projected Annual Water Savings", value: "1,140,000 Gallons" },
      { label: "Project Location", value: "Philadelphia, PA" },
    ],
  },
  {
    slug: "metcalfe-federal-building",
    name: "Metcalfe Federal Building",
    location: "Chicago, IL",
    categories: ["Condensate", "Federal Government", "Office"],
    systems: ["condensate"],
    summary:
      "Wahaso designed a system to collect condensate from the air conditioning system at the GSA's R.H. Metcalfe Federal Building for cooling tower use.",
    caseStudy: [
      "The GSA identified condensate recovery as the most cost-effective water-recovery option for the Metcalfe building's two large air handlers.",
      "Because both air handlers are on the same floor, one condensate system serves both, and recovered condensate returns to the cooling towers.",
    ],
    headlineStat: {
      value: "~672,000",
      label: "Gallons saved per year",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/condensate-project-metcalfe-chicago-federal-building-4-400x284.jpg",
    imageAlt:
      "Metcalfe Federal Building Chicago Wahaso condensate recovery project",
    details: [
      { label: "System Type", value: "Condensate Recovery" },
      { label: "Client", value: "U.S. General Services Administration" },
      { label: "Building Type", value: "Federal Office Building" },
      { label: "Water Source", value: "Air Conditioning Condensate" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Annual Water Savings", value: "About 672,000 Gallons" },
      { label: "Project Location", value: "Chicago, IL" },
    ],
  },
  {
    slug: "mgm-national-harbor-resort",
    name: "MGM National Harbor Resort",
    location: "Prince George’s County, MD",
    categories: ["Condensate", "Hotel", "Multi-Source", "Rainwater"],
    systems: ["condensate", "rainwater", "multi-source"],
    summary:
      "One of Wahaso's most successful projects by water savings: a rainwater and condensate system projected to cut municipal demand by 10.7 million gallons a year.",
    caseStudy: [
      "Wahaso designed a system that treats rainwater and condensate at 60 GPM into a 1,000-gallon processed water holding tank, which keeps system cost down while ensuring supply for the 150 GPM pressurization pumps.",
      "Pressurized output is split so a separate non-potable stream serves the toilets.",
      "Control logic monitors average irrigation and toilet demand along with cistern levels, and reserves a 21-day supply for those uses. When the cistern drops to the 21-day level, no further water is sent to the cooling towers until a rain event raises levels.",
      "The project earned LEED Gold certification, saves the owner over $120,000 per year in water and sewer costs at current rates, and is projected to reach ROI breakeven in year three.",
    ],
    headlineStat: {
      value: "10.7 Million",
      label: "Gallons of municipal demand avoided per year (projected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/rainwater-condensate-water-harvesting-mgm-national-harbor-resort-2-980x1170.jpg",
    imageAlt:
      "MGM National Harbor Resort Wahaso rainwater and condensate recovery project",
    details: [
      { label: "System Type", value: "Rainwater and Condensate Harvesting" },
      { label: "Building Type", value: "Hotel and Casino Resort" },
      { label: "Water Sources", value: "Rainwater, Condensate" },
      { label: "Primary Reuse", value: "Irrigation, Toilet Flushing, Cooling Tower Make-Up" },
      { label: "Treatment Rate", value: "60 GPM" },
      { label: "Day Tank", value: "1,000-Gallon Processed Water Holding Tank" },
      { label: "Pressurization", value: "150 GPM Pumps" },
      { label: "Reserve Logic", value: "21-Day Irrigation and Toilet Supply Reserve" },
      { label: "Projected Annual Water Savings", value: "10.7 Million Gallons" },
      { label: "Annual Water and Sewer Cost Savings", value: "Over $120,000" },
      { label: "ROI Breakeven", value: "Year Three" },
      { label: "Certification", value: "LEED Gold" },
    ],
  },

  {
    slug: "bank-of-america-plaza",
    name: "Bank of America Plaza",
    location: "Los Angeles, CA",
    categories: [
      "Condensate",
      "Cooling Towers",
      "Multi-Source",
      "Rainwater",
      "Stormwater",
    ],
    systems: [
      "condensate",
      "cooling-tower-recovery",
      "rainwater",
      "stormwater",
      "multi-source",
    ],
    summary:
      "A Wahaso cooling-tower make-up project at a Los Angeles high-rise office tower, classified by Wahaso across condensate, cooling tower, rainwater, stormwater, and multi-source pathways.",
    caseStudy: [
      "Wahaso designed a water harvesting system to supply cooling-tower make-up at Bank of America Plaza in downtown Los Angeles.",
      "Wahaso lists the project across five recovery pathways, making it one of the broadest multi-source examples in the project portfolio.",
    ],
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Bank-of-America-Plaza-Wahaso-Cooling-Tower-Make-Up-2-400x284.jpg",
    imageAlt:
      "Bank of America Plaza Wahaso cooling tower make-up recovery project",
    details: [
      { label: "System Type", value: "Cooling Tower Make-Up" },
      { label: "Water Sources", value: "Condensate, Rainwater, Stormwater" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Project Location", value: "Los Angeles, CA" },
    ],
  },
  {
    slug: "broward-county-convention-center",
    name: "Broward County Convention Center",
    location: "Fort Lauderdale, FL",
    categories: [
      "Condensate",
      "Cooling Towers",
      "Federal Government",
      "Multi-Source",
    ],
    systems: ["condensate", "cooling-tower-recovery", "multi-source"],
    summary:
      "Wahaso designed a cooling condensate harvesting system for cooling tower use at the Broward County Convention Center, specialized for condensate and cooling tower make-up.",
    caseStudy: [
      "The system captures condensate from the facility's cooling equipment and returns it to the cooling towers as non-potable make-up water.",
      "It saves over 3.14 million gallons of water annually, a measurable reduction in the potable water a large multi-use venue draws for cooling.",
    ],
    headlineStat: {
      value: "3,144,000",
      label: "Gallons saved annually (projected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Broward-County-Convention-Center-Fort-Lauderdale-980x652.jpg",
    imageAlt:
      "Broward County Convention Center Wahaso condensate cooling tower make-up project",
    details: [
      { label: "System Type", value: "Condensate Cooling Tower Make-Up" },
      { label: "Client", value: "Broward County Convention Center" },
      { label: "Building Type", value: "Multi-Use" },
      { label: "Water Source", value: "Cooling Condensate" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Projected Annual Water Savings", value: "3,144,000 Gallons" },
      { label: "Project Location", value: "Fort Lauderdale, FL" },
      { label: "Design & Specialty", value: designTeam },
    ],
  },
  {
    slug: "kettering-hospital",
    name: "Kettering Hospital",
    location: "Dayton, OH",
    categories: ["Condensate", "Cooling Towers", "Greywater", "Multi-Source"],
    systems: [
      "greywater",
      "condensate",
      "cooling-tower-recovery",
      "multi-source",
    ],
    summary:
      "A hospital campus water harvesting system that saves over 13.8 million gallons of water annually by diverting groundwater to the cooling towers.",
    caseStudy: [
      "Groundwater collected in the campus's drains is diverted into the Wahaso system, cleaned, and pumped into the cooling towers.",
      "Kettering Health reports the system takes main-campus water use from about 16 million gallons a year to roughly three to four million, a reduction of up to 75%.",
    ],
    headlineStat: {
      value: "13,800,000+",
      label: "Gallons saved annually",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Maximizing-Cooling-Tower-Efficiency-Wahaso-Water-Conservation-Solutions-400x284.jpg",
    imageAlt:
      "Kettering Hospital Wahaso cooling tower water conservation project",
    details: [
      { label: "System Type", value: "Groundwater Harvesting for Cooling Towers" },
      { label: "Building Type", value: "Hospital Campus" },
      { label: "Water Source", value: "Groundwater Collected in Building Drains" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Annual Water Savings", value: "Over 13,800,000 Gallons" },
      { label: "Campus Water Use Reduction", value: "Up to 75%" },
      { label: "Project Location", value: "Dayton, OH" },
    ],
  },

  {
    slug: "expo-rail-maintenance-facility",
    name: "Expo Rail Maintenance Facility",
    location: "Santa Monica, CA",
    categories: ["Municipal", "Stormwater"],
    systems: ["stormwater"],
    summary:
      "A stormwater harvesting system for a nearly 80,000 square-foot light rail operations and maintenance facility, expected to save 1.2 to 1.6 million gallons per year.",
    caseStudy: [
      "Landscape irrigation and train washing create an estimated demand of 5,500 gallons per day at the facility.",
      "Poor soil conditions ruled out infiltration, so the design captures runoff in an underground cistern of roughly 400,000 gallons beneath the parking lot, keeping the lot intact.",
      "Pretreated stormwater passes through Wahaso's harvesting package: mechanical filtration to 50 microns, bag filtration to 5 microns, and ultraviolet sanitation rated for 70 GPM, making it safe for irrigation and vehicle washing.",
      "Predictive controls use weather forecasts to lower cistern levels ahead of storms and hold water during them. The project contributes toward a LEED Gold rating.",
    ],
    headlineStat: {
      value: "1.2–1.6 Million",
      label: "Gallons saved per year (expected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-expo-rail-maintenance-facility-stormwater-harvesting-runoff-2-980x654.jpg",
    imageAlt:
      "Expo Rail Maintenance Facility Wahaso stormwater harvesting project",
    details: [
      { label: "System Type", value: "Stormwater Harvesting" },
      { label: "Building Type", value: "Municipal Rail Operations and Maintenance Facility" },
      { label: "Water Source", value: "Stormwater Runoff" },
      { label: "Primary Reuse", value: "Landscape Irrigation, Train Washing" },
      { label: "Estimated Daily Demand", value: "5,500 Gallons" },
      { label: "Storage Volume", value: "About 400,000 Gallons" },
      { label: "Filtration", value: "50-Micron Mechanical, 5-Micron Bag" },
      { label: "Disinfection", value: "Ultraviolet, Rated 70 GPM" },
      { label: "Expected Annual Water Savings", value: "1.2 to 1.6 Million Gallons" },
      { label: "Project Completion", value: "May 2015" },
    ],
  },
  {
    slug: "pioneer-hi-bred-greenhouse",
    name: "Pioneer Hi-Bred Greenhouse",
    location: "Johnston, IA",
    categories: ["Other", "Stormwater"],
    systems: ["stormwater"],
    summary:
      "Six new greenhouses were slated to use over 13 million gallons of municipal water a year for irrigation. Wahaso's stormwater system is expected to save over 3 million gallons annually.",
    caseStudy: [
      "The company planned six new greenhouses for construction in 2011 that would draw more than 13 million gallons of municipal water annually for irrigation.",
      "The harvesting system is expected to save over 3 million gallons of municipal water per year while also reducing the company's stormwater runoff fees.",
    ],
    headlineStat: {
      value: "3 Million+",
      label: "Gallons of municipal water saved per year (expected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-pioneer-hi-bred-greenhouse-stormwater-harvesting-for-irrigation-2-980x654.jpg",
    imageAlt:
      "Pioneer Hi-Bred Greenhouse Wahaso stormwater harvesting project",
    details: [
      { label: "System Type", value: "Stormwater Harvesting for Irrigation" },
      { label: "Building Type", value: "Agricultural Greenhouse" },
      { label: "Water Source", value: "Stormwater" },
      { label: "Primary Reuse", value: "Greenhouse Irrigation" },
      { label: "Planned Municipal Demand", value: "Over 13 Million Gallons Per Year" },
      { label: "Expected Annual Water Savings", value: "Over 3 Million Gallons" },
      { label: "Additional Benefit", value: "Reduced Stormwater Runoff Fees" },
      { label: "Project Location", value: "Johnston, IA" },
    ],
  },
  {
    slug: "missouri-botanical-gardens",
    name: "Missouri Botanical Gardens",
    location: "St. Louis, MO",
    categories: ["Municipal", "Parks", "Rainwater", "Stormwater"],
    systems: ["rainwater", "stormwater"],
    summary:
      "Wahaso designed a rainwater harvesting system for landscape irrigation at the Missouri Botanical Garden. The system saves nearly 700,000 gallons of water annually.",
    caseStudy: [
      "Captured rainwater is used for landscape irrigation across the garden, replacing municipal water for the plantings.",
      "Wahaso classifies the project across rainwater and stormwater pathways in its municipal and parks portfolio.",
    ],
    headlineStat: {
      value: "~700,000",
      label: "Gallons saved annually",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Missouri-Botanical-Gardens-MBG-Wahaso-Case-Study-28-400x284.jpg",
    imageAlt:
      "Missouri Botanical Gardens Wahaso rainwater and stormwater harvesting project",
    details: [
      { label: "System Type", value: "Rainwater Harvesting" },
      { label: "Building Type", value: "Botanical Garden / Park" },
      { label: "Water Source", value: "Rainwater" },
      { label: "Primary Reuse", value: "Landscape Irrigation" },
      { label: "Annual Water Savings", value: "Nearly 700,000 Gallons" },
      { label: "Project Location", value: "St. Louis, MO" },
    ],
  },

  {
    slug: "the-nature-conservancy-tucson",
    name: "The Nature Conservancy",
    location: "Tucson, AZ",
    categories: ["Institutional", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "A rainwater harvesting system for landscape irrigation at The Nature Conservancy in Tucson, also serving as a public demonstration of rainwater storage.",
    caseStudy: [
      "The system is expected to save 60,000 to 70,000 gallons per year of municipal water.",
      "It doubles as a demonstration project, showing visiting members of the public how rainwater harvesting storage works.",
    ],
    headlineStat: {
      value: "60–70K",
      label: "Gallons saved per year (expected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-nature-conservancy-rainwater-harvesting-project-to-irrigate-landscaping-2-980x654.jpg",
    imageAlt:
      "The Nature Conservancy Tucson Wahaso rainwater harvesting project",
    details: [
      { label: "System Type", value: "Rainwater Harvesting" },
      { label: "Building Type", value: "Institutional" },
      { label: "Water Source", value: "Rainwater" },
      { label: "Primary Reuse", value: "Landscape Irrigation" },
      { label: "Expected Annual Water Savings", value: "60,000 to 70,000 Gallons" },
      { label: "Added Value", value: "Public Demonstration of Rainwater Storage" },
      { label: "Project Location", value: "Tucson, AZ" },
    ],
  },
  {
    slug: "klarman-smith-hall-cornell-university",
    name: "Klarman Smith Hall, Cornell University",
    location: "Ithaca, NY",
    categories: ["Educational", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "Rooftop rainwater supports about 1,950 gallons of toilet flushing per day across Klarman Hall and the connected Goldman Smith Hall.",
    caseStudy: [
      "Klarman Hall is the first new humanities building on Cornell's central campus since 1905. The project team set a goal of LEED Platinum, and water harvesting can earn up to 15 of the points needed.",
      "Because the project was both new construction and a retrofit of Goldman Smith Hall, the system had to meet toilet flushing needs for both buildings.",
      "Rainwater is collected from 8,356 square feet of rooftop and 1,200 square feet of green roof, then cleaned, sanitized, and pressurized. Any excess is stored in a 6,000-gallon cistern under the building.",
    ],
    headlineStat: {
      value: "167,300",
      label: "Gallons of municipal water saved (estimated)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-rainwater-harvesting-project-cornell-klarman-rainwater-for-toilet-flushing-2-980x1170.jpg",
    imageAlt:
      "Klarman Smith Hall Cornell University Wahaso rainwater harvesting project",
    details: [
      { label: "System Type", value: "Rooftop Rainwater for Toilet Flushing" },
      { label: "Building Type", value: "Educational" },
      { label: "Water Source", value: "Rainwater, Green Roof Runoff" },
      { label: "Primary Reuse", value: "Toilet Flushing" },
      { label: "Daily Flushing Supported", value: "About 1,950 Gallons" },
      { label: "Collection Area", value: "8,356 sq ft Roof, 1,200 sq ft Green Roof" },
      { label: "Storage", value: "6,000-Gallon Cistern" },
      { label: "Estimated Municipal Water Savings", value: "167,300 Gallons" },
      { label: "Certification Goal", value: "LEED Platinum" },
      { label: "Project Location", value: "Ithaca, NY" },
    ],
  },
  {
    slug: "patel-center-global-solutions",
    name: "Patel Center for Global Solutions, University of South Florida",
    location: "Tampa, FL",
    categories: ["Educational", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "The first LEED certified building at the University of South Florida uses harvested rooftop rainwater to flush toilets, saving over 350,000 gallons of municipal water a year.",
    caseStudy: [
      "The University asked Wahaso to design and build a system that captures rooftop water and harvests it for toilet flushing.",
      "With an estimated 700 students and 70 teachers and employees per day, the system needed to meet demand of 1,400 gallons per day and over 1,000 flushes.",
      "Wahaso sized storage at 30,000 gallons of filtered rooftop rainwater in a single fiberglass tank. High-capacity pumps sit in a below-grade wet vault next to the tank.",
      "The building was commissioned in late 2010.",
    ],
    headlineStat: {
      value: "350,000+",
      label: "Gallons of municipal water saved per year (expected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-patel-center-rainwater-harvesting-for-toilet-flushing-2-980x1170.jpg",
    imageAlt:
      "Patel Center for Global Solutions Wahaso rainwater harvesting project",
    details: [
      { label: "System Type", value: "Rainwater Harvesting for Toilet Flushing" },
      { label: "Building Type", value: "Educational" },
      { label: "Water Source", value: "Rooftop Rainwater" },
      { label: "Primary Reuse", value: "Toilet Flushing" },
      { label: "Daily Demand", value: "1,400 Gallons, Over 1,000 Flushes" },
      { label: "Daily Occupancy", value: "About 700 Students and 70 Staff" },
      { label: "Storage", value: "30,000-Gallon Fiberglass Tank" },
      { label: "Expected Annual Water Savings", value: "Over 350,000 Gallons" },
      { label: "Commissioned", value: "Late 2010" },
      { label: "Project Location", value: "Tampa, FL" },
    ],
  },

  {
    slug: "soco-apartments",
    name: "SOCO Apartments",
    location: "Austin, TX",
    categories: [
      "Condensate",
      "Greywater",
      "Multi-Source",
      "Rainwater",
      "Stormwater",
    ],
    systems: [
      "greywater",
      "condensate",
      "rainwater",
      "stormwater",
      "multi-source",
    ],
    summary:
      "Wahaso integrated condensate and irrigation systems at an Austin multifamily community for improved water harvesting.",
    caseStudy: [
      "Rather than treating each source separately, Wahaso integrated the condensate and irrigation systems so recovered water serves landscape demand.",
      "Wahaso classifies the project across greywater, condensate, rainwater, stormwater, and multi-source pathways.",
    ],
    headlineStat: {
      value: "248,500",
      label: "Gallons saved annually (projected)",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/SOCO-Apartments-in-Austin-Wahaso-Condensate-Irrigation-water-harvesting-400x284.jpg",
    imageAlt:
      "SOCO Apartments Austin Wahaso condensate and irrigation water harvesting project",
    details: [
      { label: "System Type", value: "Integrated Condensate and Irrigation" },
      { label: "Building Type", value: "Multifamily" },
      { label: "Water Source", value: "Condensate" },
      { label: "Primary Reuse", value: "Irrigation" },
      { label: "Projected Annual Water Savings", value: "248,500 Gallons" },
      { label: "Project Location", value: "Austin, TX" },
    ],
  },
  {
    slug: "zurich-american-insurance",
    name: "Zurich American Insurance",
    location: "Schaumburg, IL",
    categories: [
      "Condensate",
      "Cooling Towers",
      "Multi-Source",
      "Rainwater",
      "Stormwater",
    ],
    systems: [
      "condensate",
      "cooling-tower-recovery",
      "rainwater",
      "stormwater",
      "multi-source",
    ],
    summary:
      "Wahaso designed a groundwater harvesting system for cooling tower use at Zurich American Insurance's Schaumburg campus.",
    caseStudy: [
      "The system supplies cooling tower make-up from harvested groundwater, offsetting municipal water on a large corporate campus.",
      "Wahaso classifies the project across condensate, cooling tower, rainwater, stormwater, and multi-source pathways.",
    ],
    headlineStat: {
      value: "~2.4 Million",
      label: "Gallons saved annually",
    },
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Zurich-American-Insurance-2-400x284.jpg",
    imageAlt:
      "Zurich American Insurance Wahaso commercial water recovery project",
    details: [
      { label: "System Type", value: "Groundwater Harvesting for Cooling Towers" },
      { label: "Building Type", value: "Corporate Campus" },
      { label: "Water Source", value: "Groundwater" },
      { label: "Primary Reuse", value: "Cooling Tower Make-Up" },
      { label: "Annual Water Savings", value: "Nearly 2.4 Million Gallons" },
      { label: "Project Location", value: "Schaumburg, IL" },
    ],
  },
  {
    slug: "new-york-city-sanitation-building",
    name: "New York City Sanitation Building",
    location: "New York, NY",
    categories: ["Condensate", "Multi-Source", "Office", "Rainwater"],
    systems: ["condensate", "rainwater", "multi-source"],
    summary:
      "A Wahaso multi-source, multi-use system at a New York City municipal office building, combining condensate and rainwater recovery.",
    caseStudy: [
      "Wahaso designed a multi-source system that combines condensate and rainwater and directs recovered water to multiple uses within the building.",
    ],
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-new-york-city-sanitation-building-multi-source-multi-use-2-980x654.jpg",
    imageAlt:
      "New York City Sanitation Building Wahaso multi-source water recovery project",
    details: [
      { label: "System Type", value: "Multi-Source, Multi-Use" },
      { label: "Building Type", value: "Municipal Office" },
      { label: "Water Sources", value: "Condensate, Rainwater" },
      { label: "Project Location", value: "New York, NY" },
    ],
  },
];

export function getWaterRecoveryProject(slug: string) {
  return waterRecoveryProjects.find((project) => project.slug === slug);
}

export function getProjectsForSystem(systemSlug: string) {
  return waterRecoveryProjects.filter((project) =>
    project.systems.includes(systemSlug)
  );
}