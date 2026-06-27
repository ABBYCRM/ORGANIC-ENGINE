// Industries the practice has demonstrable experience with.
// Each entry contains genuinely distinct guidance tailored to that vertical —
// no swapped-name city pages, no generic filler.

export type Industry = {
  slug: string;
  name: string;
  oneLiner: string;
  summary: string;
  considerations: ReadonlyArray<{ heading: string; body: string }>;
  // What is generally off-limits in this vertical. Used to drive compliance
  // copy and to inform schema decisions.
  complianceNotes: ReadonlyArray<string>;
  // Real questions practitioners in this vertical ask us, with honest answers.
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

export const INDUSTRIES: ReadonlyArray<Industry> = [
  {
    slug: 'saas',
    name: 'SaaS',
    oneLiner: 'Bottom-of-funnel organic for software companies competing on product-led growth.',
    summary:
      'SaaS SEO is a long game. We focus on product-aware keyword selection, comparison pages, and documentation-driven traffic that converts to trials.',
    considerations: [
      {
        heading: 'Why generic SEO advice fails for SaaS',
        body: 'Most SaaS buyers do not search the way they talk. They search for problems ("how do I integrate X with Y"), comparisons ("X vs Y"), and alternatives ("alternative to X because of Z"). Optimizing only for head terms misses the bulk of qualified intent.',
      },
      {
        heading: 'Comparison and alternative pages',
        body: 'Comparison and alternative pages convert at 3–8x the rate of generic blog content because they catch buyers late in their decision cycle. We build these pages grounded in real product differences, not fabricated features.',
      },
      {
        heading: 'Documentation as organic surface',
        body: 'Docs pages rank for highly qualified long-tail queries. We treat docs as a first-class SEO asset — proper headings, internal links, and structured data — not as a forgotten afterthought.',
      },
      {
        heading: 'Free-tool pages',
        body: 'Original calculators, generators, and free tools are some of the most durable organic assets in SaaS. We plan, brief, and ship them as full-funnel entry points.',
      },
    ],
    complianceNotes: [
      'No fabricated customer counts, MRR figures, or growth percentages.',
      'No fake "trusted by" logos. Customer logos are referenced only with explicit permission.',
      'Reviews and ratings are sourced from verified platforms only.',
    ],
    faqs: [
      {
        q: 'How long until SEO drives trial signups?',
        a: 'Realistic timelines are 6–12 months for net-new content, faster when an existing content surface can be optimized. We do not promise specific signup volumes.',
      },
      {
        q: 'Should we invest in SEO or paid first?',
        a: 'Both, in most cases. SEO compounds over time; paid gives immediate signal. The right ratio depends on runway and stage.',
      },
      {
        q: 'Do you handle product-led SEO or marketing-led SEO?',
        a: 'Both. The keyword strategy is similar; the content production ownership differs.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    oneLiner: 'Catalog SEO that earns revenue, not just traffic.',
    summary:
      'E-commerce SEO at scale. Category, product, and faceted navigation work that converts organic traffic into orders without sacrificing crawl efficiency.',
    considerations: [
      {
        heading: 'Category pages are the highest-leverage surface',
        body: 'In most catalogs, category pages carry the majority of organic revenue. We treat category copy as a primary investment — depth, internal linking, and structured data all matter.',
      },
      {
        heading: 'Crawl budget at scale',
        body: 'A million-URL catalog with unmanaged faceted navigation can waste 90 percent of crawl budget on low-value URLs. We work with engineering to apply canonicals, robots, and parameter handling that focus crawlers on what you want indexed.',
      },
      {
        heading: 'Product schema and offer schema',
        body: 'We deploy Product and Offer schema only where the data is real. AggregateRating is added only when ratings reflect actual customer input — never invented.',
      },
      {
        heading: 'Out-of-stock handling',
        body: 'Sold-out and discontinued products are a constant source of crawl waste and dead pages. We design URL handling that preserves link equity without serving stale content.',
      },
    ],
    complianceNotes: [
      'No fake reviews or ratings.',
      'Price and availability data must match the visible page.',
      'No cloaking for product feeds versus users.',
    ],
    faqs: [
      {
        q: 'What about marketplaces like Amazon?',
        a: 'Marketplace SEO is a different engagement — ranking signals differ. We can refer you to a specialist.',
      },
      {
        q: 'How do you handle seasonal catalogs?',
        a: 'We plan URL handling for seasonal merchandise up front so the team does not have to make it up mid-season.',
      },
      {
        q: 'Do you work with Shopify, BigCommerce, Magento?',
        a: 'Yes. We work within platform constraints and tell you when the platform is the bottleneck.',
      },
    ],
  },
  {
    slug: 'local-business',
    name: 'Local Business',
    oneLiner: 'Map pack, GBP, and local-intent pages for businesses serving a defined area.',
    summary:
      'Local SEO for service businesses, retail, hospitality, and multi-location brands. Honest local signal work — no fake reviews, no incentivized posting.',
    considerations: [
      {
        heading: 'Google Business Profile is the foundation',
        body: 'A complete, accurate, active GBP profile is the single highest-leverage local SEO investment. We audit and optimize it as the starting point for every local engagement.',
      },
      {
        heading: 'NAP consistency',
        body: 'Name, address, and phone must be identical across your website, GBP, and every directory listing. Inconsistency is one of the most common local ranking drags.',
      },
      {
        heading: 'Multi-location pages must be genuinely local',
        body: 'Doorway pages with swapped city names do not work — and Google actively penalizes them. Each location page needs real local content: service area, neighborhood notes, hours, FAQs.',
      },
      {
        heading: 'Reviews',
        body: 'A legitimate review request workflow, not an incentive program. Respond to every review, positive or negative, in a way that is recognizably yours.',
      },
    ],
    complianceNotes: [
      'No fake or incentivized reviews.',
      'No service-area misrepresentation.',
      'No fabricated "as seen in" press logos.',
    ],
    faqs: [
      {
        q: 'How fast can I rank in the map pack?',
        a: 'Depends on competition. Low-competition categories can rank in weeks; high-competition categories typically take 3–6 months of consistent work.',
      },
      {
        q: 'Should I have a page for every service area?',
        a: 'Only if the page has real local content. Doorway pages hurt more than help.',
      },
      {
        q: 'Can you post to my GBP for me?',
        a: 'Yes, with explicit access and a content calendar you approve.',
      },
    ],
  },
  {
    slug: 'fintech',
    name: 'Fintech',
    oneLiner: 'YMYL-aware SEO for financial products with editorial rigor.',
    summary:
      'SEO for fintech companies. We work within YMYL (Your Money or Your Life) guidelines and emphasize expertise, authority, and trust signals that withstand manual review.',
    considerations: [
      {
        heading: 'YMYL and E-E-A-T',
        body: 'Financial content is classified as YMYL by Google. Pages that touch financial decisions must demonstrate real expertise, clear authorship, and primary sources. We design content with these requirements explicit, not bolted on.',
      },
      {
        heading: 'Regulatory disclaimers',
        body: 'Investment, lending, insurance, and tax content carries regulatory disclaimer requirements. We work with your legal team to surface the right disclaimers in the right places without compromising page readability.',
      },
      {
        heading: 'Schema and trust signals',
        body: 'Organization, FinancialProduct, and FAQPage schema where appropriate, with attention to what the schema actually says versus what the page displays. Mismatched schema is a manual action risk.',
      },
      {
        heading: 'Link earning in fintech',
        body: 'Fintech link earning is harder than general digital PR — most finance publishers are saturated with pitches. We focus on original data and substantive expert commentary, not blast outreach.',
      },
    ],
    complianceNotes: [
      'No investment return guarantees or projections.',
      'No "best broker" or "best loan" claims without a transparent methodology.',
      'All schema markup must match visible page content.',
    ],
    faqs: [
      {
        q: 'Can you write the content?',
        a: 'We brief writers with subject matter expertise. For YMYL content, the final author should have credentials the audience can verify.',
      },
      {
        q: 'How do you handle disclaimers?',
        a: 'We collaborate with your legal and compliance team. We never publish financial content without a defined disclaimer path.',
      },
      {
        q: 'Do you work with crypto projects?',
        a: 'Yes, with extra care around regulatory posture. We will not work on projects making return guarantees.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    oneLiner: 'Clinically accurate SEO for healthcare providers and health-tech companies.',
    summary:
      'Healthcare SEO with attention to E-E-A-T, medical review, and HIPAA-aware content. We do not promise medical outcomes or fabricate clinical claims.',
    considerations: [
      {
        heading: 'Medical review and authorship',
        body: 'Health content benefits from named authorship with verifiable credentials — a physician, nurse practitioner, or registered dietitian, depending on the topic. We design content briefs that include medical review requirements.',
      },
      {
        heading: 'No medical claims without sources',
        body: 'Every clinical claim on a healthcare page should be sourced to a peer-reviewed publication or authoritative body (CDC, NIH, WHO, NICE, etc.). We enforce this at the brief level.',
      },
      {
        heading: 'Local SEO for providers',
        body: 'Practitioners and clinics rely heavily on map pack visibility. GBP optimization, NAP consistency, and provider-specific landing pages are core to the engagement.',
      },
      {
        heading: 'HIPAA-aware content',
        body: 'We do not write or edit patient stories, case studies, or testimonials in ways that could implicate HIPAA. De-identified patient narratives require legal review before publication.',
      },
    ],
    complianceNotes: [
      'No medical outcome guarantees.',
      'No patient testimonials without documented consent and HIPAA review.',
      'No fabricated credentials, board certifications, or affiliations.',
    ],
    faqs: [
      {
        q: 'Can you write the medical content?',
        a: 'We write the structure and SEO copy. The clinical substance must come from a credentialed author or be reviewed by one.',
      },
      {
        q: 'How do you handle telehealth providers?',
        a: 'Telehealth SEO follows the same principles with extra attention to state-by-state regulatory language.',
      },
      {
        q: 'Do you handle HIPAA-compliant analytics setup?',
        a: 'That is a separate engagement with a privacy-focused partner. We will refer you when appropriate.',
      },
    ],
  },
  {
    slug: 'legal',
    name: 'Legal',
    oneLiner: 'Attorney advertising–compliant SEO for law firms and legal services platforms.',
    summary:
      'Legal SEO that respects attorney advertising rules in every relevant jurisdiction. No fabricated case results, no guaranteed outcomes, no misleading claims.',
    considerations: [
      {
        heading: 'Attorney advertising rules',
        body: 'State bar rules on attorney advertising vary significantly. We design content with jurisdiction-specific disclaimers and avoid phrasing that implies case results or outcomes.',
      },
      {
        heading: 'No fabricated case results',
        body: 'Case results must be sourced from verifiable firm records, with client consent where required. We do not invent numbers, settlements, verdicts, or rankings.',
      },
      {
        heading: 'Practice area pages',
        body: 'Practice area pages must describe the practice accurately — what kinds of matters the firm handles, who typically hires them, and what the engagement looks like. No superlatives that cannot be substantiated.',
      },
      {
        heading: 'Local SEO for law firms',
        body: 'Map pack visibility is critical for legal services. GBP optimization, NAP consistency, and location pages with real local content are core to the engagement.',
      },
    ],
    complianceNotes: [
      'No case results without verifiable records and client consent.',
      'No "we win X% of cases" or similar claims without methodology disclosure.',
      'No testimonials that violate jurisdiction-specific rules.',
      'Attorney advertising disclaimers where required by state bar.',
    ],
    faqs: [
      {
        q: 'Do you write the content?',
        a: 'We brief and structure it. The substantive legal copy must come from an attorney admitted in the relevant jurisdiction.',
      },
      {
        q: 'How do you handle multi-state firms?',
        a: 'We map practice area pages to the jurisdictions the firm is admitted in and apply jurisdiction-specific disclaimers.',
      },
      {
        q: 'Can you help with Avvo, Justia, FindLaw profiles?',
        a: 'Yes, as part of the broader local SEO engagement.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    oneLiner: 'Local-market SEO for brokerages, agents, and real-estate platforms.',
    summary:
      'Real estate SEO focused on hyperlocal intent, IDX integration, and agent-level personal brand search.',
    considerations: [
      {
        heading: 'Hyperlocal intent',
        body: 'Real estate search is intensely local — neighborhood, school district, commute. We build pages around the actual questions buyers and sellers ask, not generic market reports.',
      },
      {
        heading: 'IDX and listing data',
        body: 'IDX feeds must be crawlable without flooding search engines with stale or duplicate listings. We work with engineering to apply canonicalization and refresh handling that protects crawl budget.',
      },
      {
        heading: 'Agent personal brand',
        body: 'Each agent benefits from a personal page that ranks for their name and the markets they serve. We design templates your team can populate without SEO expertise.',
      },
      {
        heading: 'Market reports and original data',
        body: 'Original local market analysis is one of the best linkable assets in real estate. We plan the data collection, the writing, and the distribution.',
      },
    ],
    complianceNotes: [
      'Fair Housing Act compliance on all local pages.',
      'No fabricated sales records or testimonials.',
      'No misleading claims about market timing or appreciation.',
    ],
    faqs: [
      {
        q: 'Do you handle multi-agent brokerages?',
        a: 'Yes. We build agent templates the brokerage can scale.',
      },
      {
        q: 'What about IDX compliance?',
        a: 'IDX rules are set by your MLS. We work within them and flag conflicts early.',
      },
      {
        q: 'Can you help with realtor.com or Zillow?',
        a: 'Off-platform profile optimization is a separate engagement with a partner.',
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    oneLiner: 'SEO for universities, edtech companies, and online learning platforms.',
    summary:
      'Education SEO for institutions and edtech. Programmatic pages built honestly, E-E-A-T applied to faculty-authored content, and admissions intent mapped carefully.',
    considerations: [
      {
        heading: 'Programmatic pages',
        body: 'Universities and edtech often have hundreds or thousands of program pages. We design them with unique value — different curriculum details, faculty, outcomes — not as doorway pages with swapped program names.',
      },
      {
        heading: 'Faculty-authored content',
        body: 'E-E-A-T in education is driven by named faculty authors with verifiable credentials. We design content systems that make it easy for faculty to contribute.',
      },
      {
        heading: 'Admissions intent',
        body: 'Admissions searches span informational ("how to apply"), commercial ("MBA programs"), and transactional ("apply now"). We map content to each intent bucket explicitly.',
      },
      {
        heading: 'Outcome data',
        body: 'Graduate employment, salary, and satisfaction data is highly scrutinized. We only publish data the institution has documented and can defend.',
      },
    ],
    complianceNotes: [
      'No fabricated employment or salary statistics.',
      'No misleading admissions selectivity claims.',
      'Accreditation references must be current and accurate.',
    ],
    faqs: [
      {
        q: 'Do you work with accredited institutions only?',
        a: 'Yes. We do not work with unaccredited institutions making degree-equivalence claims.',
      },
      {
        q: 'How do you handle faculty bios?',
        a: 'We brief and structure them. Faculty must verify their own credentials.',
      },
      {
        q: 'Can you help with online program rankings?',
        a: 'We optimize for organic discovery. Rankings themselves are determined by third parties.',
      },
    ],
  },
];

export function findIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}