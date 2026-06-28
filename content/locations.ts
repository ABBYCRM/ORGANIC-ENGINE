// Location data for service pages. Each city has genuinely distinct local
// relevance — different market structure, neighborhood notes, search intent
// patterns. No swapped-name doorway pages.

export type Location = {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  metro?: string;
  populationNote: string;
  // Local market structure: what kinds of businesses dominate, how competitive
  // the SEO landscape is, what the buying cycles look like.
  marketOverview: string;
  // Neighborhoods or sub-markets with distinct search behavior.
  districts: ReadonlyArray<{ name: string; note: string }>;
  // Local SEO notes that practitioners actually need.
  localNotes: ReadonlyArray<{ heading: string; body: string }>;
  // Common questions buyers in this market ask.
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

export const LOCATIONS: ReadonlyArray<Location> = [
  {
    slug: 'new-york',
    city: 'New York',
    state: 'New York',
    stateCode: 'NY',
    metro: 'New York–Newark–Jersey City',
    populationNote:
      'The largest US media market and one of the most competitive SEO landscapes in the country.',
    marketOverview:
      'New York SEO is dominated by finance, media, fashion, hospitality, and professional services. Competition for head terms is intense, but hyperlocal and long-tail queries — especially across the five boroughs — remain underserved.',
    districts: [
      { name: 'Manhattan', note: 'Financial services, luxury retail, and corporate HQs drive most search volume.' },
      { name: 'Brooklyn', note: 'Creative agencies, restaurants, and small e-commerce brands.' },
      { name: 'Queens', note: 'Diverse small businesses with strong neighborhood-level search intent.' },
      { name: 'Bronx', note: 'Local services and community-serving businesses dominate the SERP.' },
      { name: 'Staten Island', note: 'Suburban buying patterns within a five-borough market.' },
    ],
    localNotes: [
      {
        heading: 'Five-borough page strategy',
        body: 'Borough and neighborhood pages need genuinely local content. New York penalizes generic regional copy fast.',
      },
      {
        heading: 'GBP and review velocity',
        body: 'New York businesses see high review velocity across Google, Yelp, and industry directories. Response cadence matters.',
      },
      {
        heading: 'Hyperlocal long-tail',
        body: 'Neighborhood × service queries (e.g. "plumber Williamsburg") are where smaller operators win.',
      },
    ],
    faqs: [
      {
        q: 'Do you have a New York office?',
        a: 'We work with New York clients remotely. On-site meetings can be arranged for engagements above a defined scope.',
      },
      {
        q: 'How competitive is NYC SEO?',
        a: 'Very competitive for head terms. Hyperlocal and long-tail queries remain accessible.',
      },
      {
        q: 'Do you work with media companies?',
        a: 'Yes. Editorial SEO is one of our strongest verticals.',
      },
    ],
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    metro: 'Los Angeles–Long Beach–Anaheim',
    populationNote:
      'The second-largest US metro and the global center of entertainment, fashion, and DTC e-commerce.',
    marketOverview:
      'LA SEO spans entertainment IP, fashion and beauty DTC brands, fitness studios, restaurants, and professional services. The competitive landscape is fragmented by neighborhood.',
    districts: [
      { name: 'Downtown LA', note: 'Corporate, legal, and financial services.' },
      { name: 'Westside (Santa Monica, Venice, Beverly Hills)', note: 'Premium retail, wellness, and DTC brands.' },
      { name: 'San Fernando Valley', note: 'Production studios, mid-market retail, and local services.' },
      { name: 'Silver Lake / Echo Park', note: 'Independent brands and creative agencies.' },
      { name: 'Long Beach / South Bay', note: 'Working-class buying patterns with strong local intent.' },
    ],
    localNotes: [
      {
        heading: 'Entertainment IP and rights-aware content',
        body: 'Many LA businesses operate in entertainment-adjacent categories with rights and licensing constraints. SEO copy must respect those.',
      },
      {
        heading: 'DTC e-commerce density',
        body: 'LA has a high concentration of direct-to-consumer brands. Competing here requires sharp category and product-page work.',
      },
      {
        heading: 'Local pack and Yelp interplay',
        body: 'Local pack visibility in LA is heavily influenced by Yelp review volume and response rate, in addition to GBP.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with entertainment companies?',
        a: 'Yes — within the bounds of rights and licensing constraints.',
      },
      {
        q: 'Can you help with DTC brands specifically?',
        a: 'Yes. Category, product, and collection page work is core to our e-commerce practice.',
      },
      {
        q: 'What about creators and personal brands?',
        a: 'Personal brand SEO is a separate engagement — we can refer you to a specialist.',
      },
    ],
  },
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    metro: 'Chicago–Naperville–Elgin',
    populationNote:
      'The third-largest US metro and the commercial hub of the Midwest.',
    marketOverview:
      'Chicago SEO spans financial services, manufacturing, healthcare systems, logistics, and a deep B2B services market. The competitive landscape is less frenzied than NYC or LA but rewards sustained work.',
    districts: [
      { name: 'The Loop', note: 'Financial, legal, and corporate HQs.' },
      { name: 'River North', note: 'Tech startups, agencies, and creative firms.' },
      { name: 'Lincoln Park / Lakeview', note: 'Retail, restaurants, and local services.' },
      { name: 'West Loop / Fulton Market', note: 'Hospitality and corporate headquarters in converted industrial space.' },
      { name: 'Suburban collar counties', note: 'Manufacturing, logistics, and mid-market services.' },
    ],
    localNotes: [
      {
        heading: 'B2B and industrial SEO',
        body: 'Chicago has a deep B2B services market. Industrial and logistics buyers search with specific terminology that content must match.',
      },
      {
        heading: 'Healthcare system competition',
        body: 'Multiple large healthcare systems compete for the same local queries. Schema and content differentiation matters.',
      },
      {
        heading: 'Weather-aware local intent',
        body: 'Seasonal intent swings in Chicago are pronounced. Content calendars should reflect the actual buying cycle.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with B2B companies?',
        a: 'Yes. B2B SEO is a core part of the practice.',
      },
      {
        q: 'How do you handle industrial terminology?',
        a: "We research the actual search behavior of buyers and align content accordingly. No jargon for jargon's sake.",
      },
      {
        q: 'Do you work with Chicago-area suburbs?',
        a: 'Yes. NAP consistency across the metro matters more than which suburb you target.',
      },
    ],
  },
  {
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    metro: 'Houston–The Woodlands–Sugar Land',
    populationNote:
      'The largest US metro by land area and a major energy, healthcare, and logistics hub.',
    marketOverview:
      'Houston SEO spans energy, healthcare (Texas Medical Center), logistics, and a sprawling small-business market. The city\'s geographic spread makes local SEO distinct from denser metros.',
    districts: [
      { name: 'Downtown / Midtown', note: 'Energy, legal, and corporate headquarters.' },
      { name: 'Texas Medical Center', note: 'Healthcare and biotech — one of the largest concentrations globally.' },
      { name: 'The Woodlands', note: 'Master-planned suburban corporate and family services market.' },
      { name: 'Galleria / Uptown', note: 'Retail, professional services, and high-end residential.' },
      { name: 'Energy Corridor', note: 'Oil and gas services and engineering firms.' },
    ],
    localNotes: [
      {
        heading: 'Energy sector terminology',
        body: 'Houston\'s energy market uses specific technical language. Generic B2B SEO copy does not land here.',
      },
      {
        heading: 'Healthcare system competition',
        body: 'Texas Medical Center creates intense local SERP competition. Schema and content differentiation are critical.',
      },
      {
        heading: 'Geographic spread',
        body: 'Houston\'s size means local SEO requires more than a single "Houston" page — submarkets matter.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with energy companies?',
        a: 'Yes. We are familiar with energy-sector terminology and regulatory language.',
      },
      {
        q: 'How do you handle the TMC healthcare market?',
        a: 'Provider-level pages with real differentiation, not swapped name pages.',
      },
      {
        q: 'Do you serve the suburbs?',
        a: 'Yes — The Woodlands, Sugar Land, Katy, and Clear Lake are all in scope.',
      },
    ],
  },
  {
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'Arizona',
    stateCode: 'AZ',
    metro: 'Phoenix–Mesa–Chandler',
    populationNote:
      'One of the fastest-growing US metros and a hub for healthcare, real estate, and remote-work relocations.',
    marketOverview:
      'Phoenix SEO is driven by rapid population growth, healthcare expansion, real estate, and a growing tech and remote-work economy. The market is competitive but not yet saturated.',
    districts: [
      { name: 'Central Phoenix', note: 'Urban revitalization, restaurants, and creative agencies.' },
      { name: 'Scottsdale', note: 'Luxury retail, hospitality, and wellness brands.' },
      { name: 'Tempe / Mesa', note: 'Arizona State University and growing tech corridor.' },
      { name: 'Glendale / Peoria', note: 'Family services and mid-market retail.' },
      { name: 'East Valley (Chandler, Gilbert)', note: 'Master-planned communities and family services.' },
    ],
    localNotes: [
      {
        heading: 'Growth-driven local SEO',
        body: 'Phoenix grows by net migration. Local SEO must track new neighborhoods and changing service areas.',
      },
      {
        heading: 'Healthcare expansion',
        body: 'Major health systems are expanding into Phoenix suburbs. Local competition is intensifying.',
      },
      {
        heading: 'Real estate and relocation',
        body: 'Relocation search is a major category. Genuine local content outperforms generic "moving to Phoenix" copy.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with healthcare systems?',
        a: 'Yes — provider-level pages, schema, and local pack optimization.',
      },
      {
        q: 'What about real estate brokerages?',
        a: 'Yes. We work with brokerages and individual agents.',
      },
      {
        q: 'How do you handle the East Valley vs Scottsdale split?',
        a: 'Each submarket gets its own strategy, not a single "Phoenix" page.',
      },
    ],
  },
  {
    slug: 'philadelphia',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    stateCode: 'PA',
    metro: 'Philadelphia–Camden–Wilmington',
    populationNote:
      'A major Northeast metro with deep roots in healthcare, education, and financial services.',
    marketOverview:
      'Philadelphia SEO spans health systems, higher education, financial services, and a strong small-business market. The competitive landscape rewards sustained, evidence-driven work.',
    districts: [
      { name: 'Center City', note: 'Legal, financial, and corporate headquarters.' },
      { name: 'University City', note: 'Higher education and health system hubs.' },
      { name: 'Fishtown / Northern Liberties', note: 'Independent retail, restaurants, and creative agencies.' },
      { name: 'South Jersey suburbs', note: 'Family services and mid-market retail across the river.' },
      { name: 'Main Line', note: 'Affluent suburban professional services market.' },
    ],
    localNotes: [
      {
        heading: 'Healthcare and education system competition',
        body: 'Major health systems and universities compete for overlapping queries. Content differentiation and schema matter.',
      },
      {
        heading: 'PA + NJ dual jurisdiction',
        body: 'Crossing state lines creates regulatory and citation complexity. NAP must be handled carefully.',
      },
      {
        heading: 'Local pack geography',
        body: 'Map pack results shift quickly across the river. Independent Philadelphia and South Jersey strategies are needed.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with universities?',
        a: 'Yes — programmatic program pages and faculty-authored content.',
      },
      {
        q: 'How do you handle PA/NJ overlap?',
        a: 'We maintain separate jurisdiction-aware strategies and citation profiles.',
      },
      {
        q: 'Do you serve the Main Line?',
        a: 'Yes. Suburban markets are core to the engagement.',
      },
    ],
  },
  {
    slug: 'san-antonio',
    city: 'San Antonio',
    state: 'Texas',
    stateCode: 'TX',
    metro: 'San Antonio–New Braunfels',
    populationNote:
      'A major Texas metro with strong military, healthcare, and tourism sectors.',
    marketOverview:
      'San Antonio SEO spans military services, healthcare, tourism, and a fast-growing small-business market. Local SEO rewards consistent GBP and NAP work.',
    districts: [
      { name: 'Downtown / Riverwalk', note: 'Tourism, hospitality, and corporate offices.' },
      { name: 'Medical Center', note: 'Healthcare systems and ancillary services.' },
      { name: 'Stone Oak / Alamo Heights', note: 'Affluent retail and professional services.' },
      { name: 'North Side', note: 'Family services and mid-market retail.' },
      { name: 'South Side / West Side', note: 'Hispanic-owned small businesses and community services.' },
    ],
    localNotes: [
      {
        heading: 'Military SEO',
        body: 'San Antonio has a large military presence. Service members and families search with specific terminology.',
      },
      {
        heading: 'Bilingual content',
        body: 'A large portion of the market searches in Spanish. Bilingual content strategies outperform English-only.',
      },
      {
        heading: 'Tourism seasonality',
        body: 'Hospitality and tourism intent is highly seasonal. Content calendars should reflect this.',
      },
    ],
    faqs: [
      {
        q: 'Do you provide bilingual content?',
        a: 'Yes — with native Spanish-speaking writers, not machine translation.',
      },
      {
        q: 'Do you work with military-related businesses?',
        a: 'Yes, with appropriate sensitivity to military family audiences.',
      },
      {
        q: 'How competitive is San Antonio SEO?',
        a: 'Less saturated than Houston or Dallas, but growing fast.',
      },
    ],
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    state: 'California',
    stateCode: 'CA',
    metro: 'San Diego–Chula Vista–Carlsbad',
    populationNote:
      'A coastal California metro with strong biotech, defense, tourism, and DTC brand presence.',
    marketOverview:
      'San Diego SEO spans biotech, defense contracting, tourism, and DTC brands. Competition is intense in biotech and defense-adjacent categories, more accessible in local services.',
    districts: [
      { name: 'Downtown / Gaslamp', note: 'Hospitality, tourism, and corporate offices.' },
      { name: 'La Jolla / UTC', note: 'Biotech, UCSD, and premium retail.' },
      { name: 'North County (Carlsbad, Oceanside)', note: 'Family services and mid-market retail.' },
      { name: 'East County (El Cajon, La Mesa)', note: 'Working-class buying patterns with strong local intent.' },
      { name: 'South Bay (Chula Vista, Imperial Beach)', note: 'Hispanic-owned businesses and cross-border commerce.',
      },
    ],
    localNotes: [
      {
        heading: 'Biotech and life sciences terminology',
        body: 'San Diego biotech search uses precise technical language. Content must match buyer-level vocabulary.',
      },
      {
        heading: 'Cross-border commerce',
        body: 'Proximity to Tijuana creates cross-border search patterns worth mapping explicitly.',
      },
      {
        heading: 'Defense contracting compliance',
        body: 'Defense-adjacent categories carry compliance constraints. We work within them.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with biotech?',
        a: 'Yes — with appropriate scientific review for technical content.',
      },
      {
        q: 'What about defense contractors?',
        a: 'We work within compliance constraints and refer when legal review is needed.',
      },
      {
        q: 'Do you handle cross-border SEO?',
        a: 'Yes — both English-language US/Tijuana cross-border and bilingual strategies.',
      },
    ],
  },
  {
    slug: 'dallas',
    city: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    metro: 'Dallas–Fort Worth–Arlington',
    populationNote:
      'A major Texas metro with strong financial services, technology, and corporate headquarters presence.',
    marketOverview:
      'DFW SEO spans financial services, telecom, technology, energy, and a sprawling mid-market services economy. Competition is intense for head terms.',
    districts: [
      { name: 'Uptown / Downtown Dallas', note: 'Financial services, legal, and corporate HQs.' },
      { name: 'Plano / Frisco', note: 'Corporate relocations and family services.' },
      { name: 'Fort Worth', note: 'Energy, manufacturing, and Western-themed hospitality.' },
      { name: 'Las Colinas / Irving', note: 'Telecom and corporate campuses.' },
      { name: 'Richardson / Telecom Corridor', note: 'Technology and engineering services.' },
    ],
    localNotes: [
      {
        heading: 'Financial services density',
        body: 'DFW has a deep financial services market. Search behavior matches the structure of the industry.',
      },
      {
        heading: 'Corporate relocation-driven SEO',
        body: 'Many DFW submarkets are growing because of corporate relocations. Local SEO must adapt.',
      },
      {
        heading: 'Tornado and weather-driven intent',
        body: 'Storm-related searches are a major category. Service businesses benefit from preparedness content.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with financial services?',
        a: 'Yes — with attention to YMYL compliance.',
      },
      {
        q: 'Do you serve both Dallas and Fort Worth?',
        a: 'Yes. They are distinct markets despite sharing a metro designation.',
      },
      {
        q: 'What about corporate campus-area businesses?',
        a: 'Yes — Plano, Frisco, Las Colinas all benefit from submarket-specific strategies.',
      },
    ],
  },
  {
    slug: 'san-jose',
    city: 'San Jose',
    state: 'California',
    stateCode: 'CA',
    metro: 'San Jose–Sunnyvale–Santa Clara',
    populationNote:
      'The capital of Silicon Valley and a hub for technology, venture capital, and semiconductor companies.',
    marketOverview:
      'San Jose SEO is dominated by technology, semiconductor, AI, and venture capital — with a strong local-services economy underneath. Search behavior is highly technical.',
    districts: [
      { name: 'Downtown San Jose', note: 'Government, civic, and downtown residential.' },
      { name: 'North San Jose / Alviso', note: 'Tech campuses and corporate HQs.' },
      { name: 'Santa Clara', note: 'Semiconductor and corporate headquarters.' },
      { name: 'Sunnyvale / Cupertino border', note: 'Consumer tech and engineering services.' },
      { name: 'South San Jose', note: 'Family services and mid-market retail.' },
    ],
    localNotes: [
      {
        heading: 'Highly technical search behavior',
        body: 'Silicon Valley buyers search with precision. Generic B2B copy does not work here.',
      },
      {
        heading: 'High cost of paid acquisition',
        body: 'CPCs in tech categories are among the highest in the country. SEO is a particularly attractive alternative.',
      },
      {
        heading: 'Local services under-served',
        body: 'Despite the tech dominance, local services (HVAC, plumbing, dental) are accessible and well-paying markets.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with B2B SaaS?',
        a: 'Yes — bottom-of-funnel and documentation-driven organic.',
      },
      {
        q: 'What about semiconductor companies?',
        a: 'Yes, with technical content that respects the audience.',
      },
      {
        q: 'Do you serve local services too?',
        a: 'Yes. Local SEO is a core offering across all metros we serve.',
      },
    ],
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateCode: 'TX',
    metro: 'Austin–Round Rock–Georgetown',
    populationNote:
      'One of the fastest-growing US metros, known for technology, music, and live events.',
    marketOverview:
      'Austin SEO spans technology, live events, hospitality, and a deep DTC and creator economy. The market is competitive but still accessible compared to the Bay Area.',
    districts: [
      { name: 'Downtown / East Austin', note: 'Tech, hospitality, and creative agencies.' },
      { name: 'South Congress / South Lamar', note: 'Retail, restaurants, and DTC brands.' },
      { name: 'Domain / North Austin', note: 'Corporate campuses and tech HQs.' },
      { name: 'Westlake / West Austin', note: 'Affluent retail and professional services.' },
      { name: 'Round Rock / Cedar Park suburbs', note: 'Family services and mid-market retail.' },
    ],
    localNotes: [
      {
        heading: 'Tech crossover with local',
        body: 'Austin mixes big-tech with small local businesses. Both audiences search differently.',
      },
      {
        heading: 'Live events and hospitality seasonality',
        body: 'SXSW, ACL, and F1 drive massive search spikes. Content and GBP must adapt.',
      },
      {
        heading: 'Creator and personal brand density',
        body: 'Many Austin businesses are creator-led. Personal brand SEO is common.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with event-driven businesses?',
        a: 'Yes — with attention to seasonal search patterns.',
      },
      {
        q: 'What about personal brands?',
        a: 'We can refer you to a specialist; the practice focuses on business-level SEO.',
      },
      {
        q: 'How competitive is Austin SEO?',
        a: 'Growing fast. Earlier-mover advantage is closing in some categories.',
      },
    ],
  },
  {
    slug: 'jacksonville',
    city: 'Jacksonville',
    state: 'Florida',
    stateCode: 'FL',
    metro: 'Jacksonville',
    populationNote:
      'The largest US city by land area, with strong logistics, financial services, and military presence.',
    marketOverview:
      'Jacksonville SEO spans logistics, financial services, military, healthcare, and a sprawling small-business market. The geographic size makes submarket pages essential.',
    districts: [
      { name: 'Downtown / Southbank', note: 'Financial services and corporate HQs.' },
      { name: 'Jacksonville Beach / Neptune Beach', note: 'Tourism and hospitality.' },
      { name: 'Mandarin / Southside', note: 'Family services and mid-market retail.' },
      { name: 'Orange Park / Clay County', note: 'Suburban family services and commuting professionals.' },
      { name: 'NAS Jacksonville area', note: 'Military and veteran services.' },
    ],
    localNotes: [
      {
        heading: 'Geographic sprawl',
        body: 'Jacksonville\'s land area means a single "Jacksonville" page does not serve submarkets.',
      },
      {
        heading: 'Military SEO',
        body: 'Naval Station Mayport and NAS Jacksonville drive military family search patterns.',
      },
      {
        heading: 'Hurricane-driven intent',
        body: 'Hurricane and storm-related searches are major categories for service businesses.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve the beaches?',
        a: 'Yes — distinct submarket strategies.',
      },
      {
        q: 'What about military families?',
        a: 'We work with appropriate sensitivity and terminology.',
      },
      {
        q: 'How competitive is Jacksonville SEO?',
        a: 'Less saturated than Miami or Orlando, but growing.',
      },
    ],
  },
  {
    slug: 'fort-worth',
    city: 'Fort Worth',
    state: 'Texas',
    stateCode: 'TX',
    metro: 'Dallas–Fort Worth–Arlington',
    populationNote:
      'A major Texas metro distinct from Dallas, with strong energy, manufacturing, and Western-themed hospitality.',
    marketOverview:
      'Fort Worth SEO spans energy, manufacturing, logistics, and a strong local-services market. It is frequently grouped with Dallas in metro designations but has its own search behavior.',
    districts: [
      { name: 'Downtown / Sundance Square', note: 'Corporate, hospitality, and Western-themed attractions.' },
      { name: 'Cultural District', note: 'Museums, design, and creative services.' },
      { name: 'West 7th', note: 'Retail, restaurants, and modern residential.' },
      { name: 'Alliance / North Fort Worth', note: 'Logistics and manufacturing corridor.' },
      { name: 'Burleson / Crowley suburbs', note: 'Family services and mid-market retail.' },
    ],
    localNotes: [
      {
        heading: 'Distinct from Dallas',
        body: 'Search behavior in Fort Worth differs from Dallas — they share a metro but not a SERP.',
      },
      {
        heading: 'Logistics and manufacturing',
        body: 'The Alliance corridor drives B2B search patterns worth mapping explicitly.',
      },
      {
        heading: 'Hospitality and tourism',
        body: 'Stockyards and Cultural District drive significant tourist search intent.',
      },
    ],
    faqs: [
      {
        q: 'Do you treat Fort Worth as its own market?',
        a: 'Yes — it is not a sub-market of Dallas for SEO purposes.',
      },
      {
        q: 'What about the Alliance corridor?',
        a: 'Yes — logistics and manufacturing B2B SEO is part of the practice.',
      },
      {
        q: 'Do you work with hospitality?',
        a: 'Yes — local pack, GBP, and review-response work.',
      },
    ],
  },
  {
    slug: 'columbus',
    city: 'Columbus',
    state: 'Ohio',
    stateCode: 'OH',
    metro: 'Columbus–Marion–Newark',
    populationNote:
      'A growing Midwest metro with strong higher education, retail, and healthcare sectors.',
    marketOverview:
      'Columbus SEO spans higher education, retail, healthcare, insurance, and a strong small-business market. The competitive landscape rewards consistent work.',
    districts: [
      { name: 'Downtown / Short North', note: 'Arts, dining, and corporate offices.' },
      { name: 'Ohio State University area', note: 'Student housing, retail, and higher education search.' },
      { name: 'Dublin / Worthington', note: 'Corporate campuses and affluent family services.' },
      { name: 'Easton / Gahanna', note: 'Retail and family services.' },
      { name: 'Westerville / Polaris', note: 'Family services and mid-market retail.' },
    ],
    localNotes: [
      {
        heading: 'Higher education and student-driven SEO',
        body: 'OSU and surrounding campuses drive student and family search patterns.',
      },
      {
        heading: 'Insurance and financial services',
        body: 'Several major insurers are headquartered in Columbus. YMYL-aware content matters.',
      },
      {
        heading: 'Growth-driven submarkets',
        body: 'Dublin, New Albany, and Polaris are growing fast. Local SEO must track change.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with higher education?',
        a: 'Yes — programmatic program pages and faculty-authored content.',
      },
      {
        q: 'What about insurance?',
        a: 'Yes — YMYL-aware content and schema work.',
      },
      {
        q: 'How competitive is Columbus SEO?',
        a: 'Moderately. Earlier-mover advantage is still available in most categories.',
      },
    ],
  },
];

export function findLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}