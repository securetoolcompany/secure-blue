export type WaterRecoveryProject = {
  slug: string;
  name: string;
  location: string;
  categories: string[];
  systems: string[];
  summary: string;
  wahasoAttribution: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
};

const wahasoAttribution =
  "This project was delivered by Wahaso Water Harvesting Solutions and is presented by SECURE Blue as relevant Wahaso project experience.";

const wahasoProjectsUrl = "https://wahaso.com/projects/";

export const waterRecoveryProjects: WaterRecoveryProject[] = [
  {
		slug: "williams-village-university-of-colorado",
		name: "Williams Village – University of Colorado",
		location: "Boulder, CO",
		categories: ["Educational", "Greywater"],
		systems: ["greywater"],
		summary:
			"A Wahaso-highlighted higher-education project demonstrating commercial greywater recovery for a campus environment.",
		wahasoAttribution,
		image:
			"https://wahaso.com/wp-content/uploads/wahaso-university-of-colorado-housing-dining-services-greywater-harvesting-2-980x654.jpg",
		imageAlt:
			"Williams Village University of Colorado Wahaso greywater harvesting project",
		sourceUrl: wahasoProjectsUrl,
	},
  {
    slug: "ucla-engineering-building-vi",
    name: "UCLA Engineering Building VI",
    location: "Los Angeles, CA",
    categories: ["Educational", "Greywater"],
    systems: ["greywater"],
    summary:
      "A Wahaso-highlighted educational greywater project for a major university engineering facility.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-university-of-california-los-angeles-greywater-harvesting-2-980x654.jpg",
    imageAlt:
      "UCLA Engineering Building VI Wahaso greywater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "sfsu-mashouf-wellness-center",
    name: "SFSU Mashouf Wellness Center",
    location: "San Francisco, CA",
    categories: ["Greywater", "Medical"],
    systems: ["greywater"],
    summary:
      "A Wahaso-highlighted greywater project associated with a large university wellness and recreation environment.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-sfsu-mashouf-wellness-center-greywater-recycling-for-toilet-flushing-irrigation-2-980x654.jpg",
    imageAlt:
      "SFSU Mashouf Wellness Center Wahaso greywater recycling project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted institutional project combining condensate, cooling tower, and rainwater recovery pathways.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Philadelphia-Museum-of-Art-Wahaso-Case-Study-Cool-Tower-Water-Harvesting-980x653.jpg",
    imageAlt:
      "Philadelphia Museum of Art Wahaso cooling tower water harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "metcalfe-federal-building",
    name: "Metcalfe Federal Building",
    location: "Chicago, IL",
    categories: ["Condensate", "Federal Government", "Office"],
    systems: ["condensate"],
    summary:
      "A Wahaso-highlighted federal-office project demonstrating commercial HVAC condensate recovery.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/condensate-project-metcalfe-chicago-federal-building-4-400x284.jpg",
    imageAlt:
      "Metcalfe Federal Building Chicago Wahaso condensate recovery project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "mgm-national-harbor-resort",
    name: "MGM National Harbor Resort",
    location: "Prince George’s County, MD",
    categories: ["Condensate", "Hotel", "Multi-Source", "Rainwater"],
    systems: ["condensate", "rainwater", "multi-source"],
    summary:
      "A Wahaso-highlighted hospitality project incorporating condensate, rainwater, and multi-source water recovery.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/rainwater-condensate-water-harvesting-mgm-national-harbor-resort-2-980x1170.jpg",
    imageAlt:
      "MGM National Harbor Resort Wahaso rainwater and condensate recovery project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted commercial project using multiple on-site water-recovery pathways, including cooling towers and stormwater.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Bank-of-America-Plaza-Wahaso-Cooling-Tower-Make-Up-2-400x284.jpg",
    imageAlt:
      "Bank of America Plaza Wahaso cooling tower make-up recovery project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted convention-center project combining condensate, cooling-tower, and multi-source water recovery.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Broward-County-Convention-Center-Fort-Lauderdale-980x652.jpg",
    imageAlt:
      "Broward County Convention Center Wahaso cooling tower recovery project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted health-care project incorporating cooling tower, condensate, greywater, and multi-source strategies.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Maximizing-Cooling-Tower-Efficiency-Wahaso-Water-Conservation-Solutions-400x284.jpg",
    imageAlt:
      "Kettering Hospital Wahaso cooling tower water conservation project",
    sourceUrl: wahasoProjectsUrl,
  },

  {
    slug: "expo-rail-maintenance-facility",
    name: "Expo Rail Maintenance Facility",
    location: "Santa Monica, CA",
    categories: ["Municipal", "Stormwater"],
    systems: ["stormwater"],
    summary:
      "A Wahaso-highlighted municipal stormwater project for a rail maintenance facility.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-expo-rail-maintenance-facility-stormwater-harvesting-runoff-2-980x654.jpg",
    imageAlt:
      "Expo Rail Maintenance Facility Wahaso stormwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "pioneer-hi-bred-greenhouse",
    name: "Pioneer Hi-Bred Greenhouse",
    location: "Johnston, IA",
    categories: ["Other", "Stormwater"],
    systems: ["stormwater"],
    summary:
      "A Wahaso-highlighted stormwater project serving a greenhouse environment.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-pioneer-hi-bred-greenhouse-stormwater-harvesting-for-irrigation-2-980x654.jpg",
    imageAlt:
      "Pioneer Hi-Bred Greenhouse Wahaso stormwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "missouri-botanical-gardens",
    name: "Missouri Botanical Gardens",
    location: "St. Louis, MO",
    categories: ["Municipal", "Parks", "Rainwater", "Stormwater"],
    systems: ["rainwater", "stormwater"],
    summary:
      "A Wahaso-highlighted botanical-garden project using rainwater and stormwater harvesting approaches.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Missouri-Botanical-Gardens-MBG-Wahaso-Case-Study-28-400x284.jpg",
    imageAlt:
      "Missouri Botanical Gardens Wahaso rainwater and stormwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },

  {
    slug: "the-nature-conservancy-tucson",
    name: "The Nature Conservancy",
    location: "Tucson, AZ",
    categories: ["Institutional", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "A Wahaso-highlighted institutional rainwater harvesting project in Tucson, Arizona.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-nature-conservancy-rainwater-harvesting-project-to-irrigate-landscaping-2-980x654.jpg",
    imageAlt:
      "The Nature Conservancy Tucson Wahaso rainwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "klarman-smith-hall-cornell-university",
    name: "Klarman Smith Hall, Cornell University",
    location: "Ithaca, NY",
    categories: ["Educational", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "A Wahaso-highlighted higher-education rainwater harvesting project at Cornell University.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-rainwater-harvesting-project-cornell-klarman-rainwater-for-toilet-flushing-2-980x1170.jpg",
    imageAlt:
      "Klarman Smith Hall Cornell University Wahaso rainwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "patel-center-global-solutions",
    name: "Patel Center for Global Solutions, University of South Florida",
    location: "Tampa, FL",
    categories: ["Educational", "Rainwater"],
    systems: ["rainwater"],
    summary:
      "A Wahaso-highlighted educational rainwater project at the University of South Florida.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-patel-center-rainwater-harvesting-for-toilet-flushing-2-980x1170.jpg",
    imageAlt:
      "Patel Center for Global Solutions Wahaso rainwater harvesting project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted multifamily project combining greywater, condensate, rainwater, stormwater, and multi-source recovery.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/SOCO-Apartments-in-Austin-Wahaso-Condensate-Irrigation-water-harvesting-400x284.jpg",
    imageAlt:
      "SOCO Apartments Austin Wahaso condensate and irrigation water harvesting project",
    sourceUrl: wahasoProjectsUrl,
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
      "A Wahaso-highlighted commercial insurance-campus project using multiple water-recovery pathways.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/Zurich-American-Insurance-2-400x284.jpg",
    imageAlt:
      "Zurich American Insurance Wahaso commercial water recovery project",
    sourceUrl: wahasoProjectsUrl,
  },
  {
    slug: "new-york-city-sanitation-building",
    name: "New York City Sanitation Building",
    location: "New York, NY",
    categories: ["Condensate", "Multi-Source", "Office", "Rainwater"],
    systems: ["condensate", "rainwater", "multi-source"],
    summary:
      "A Wahaso-highlighted municipal office project using condensate, rainwater, and multi-source water recovery.",
    wahasoAttribution,
    image:
      "https://wahaso.com/wp-content/uploads/wahaso-new-york-city-sanitation-building-multi-source-multi-use-2-980x654.jpg",
    imageAlt:
      "New York City Sanitation Building Wahaso multi-source water recovery project",
    sourceUrl: wahasoProjectsUrl,
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