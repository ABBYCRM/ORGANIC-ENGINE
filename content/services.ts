// Service catalog. Each entry is a real service page with distinct, non-spammy content.
// Do not add services the practice does not actually perform.

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  // 4–6 unique sub-sections. Each must contain genuinely distinct guidance — not
  // generic filler. No "lorem ipsum", no fabricated case results.
  sections: ReadonlyArray<{ heading: string; body: string }>;
  // What the deliverable looks like at the end of the engagement.
  deliverables: ReadonlyArray<string>;
  // Who this is for. Be specific.
  idealFor: ReadonlyArray<string>;
  // What we ask the client to provide. Keeps intake honest.
  prerequisites: ReadonlyArray<string>;
  // Public-facing metrics only — never fabricated numbers, awards, or rankings.
  // We use neutral "what you walk away with" language instead.
  outcome: string;
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

export const SERVICES: ReadonlyArray<Service> = [
  {
    slug: 'seo-audit',
    name: 'SEO Audit',
    tagline: 'A clear, prioritized list of what is holding your organic growth back.',
    summary:
      'A technical and on-page audit that surfaces crawl, index, content, and link-graph issues ranked by impact. You receive a written report plus a recorded walkthrough.',
    sections: [
      {
        heading: 'What we examine',
        body: 'We crawl your site the same way search engines do, then cross-check against live indexing data, log files where available, and your analytics. Coverage areas include crawlability, indexability, canonicalization, redirects, internal link architecture, structured data, page experience signals, content quality, and backlink profile risk. Each finding is logged with the URL, severity, and the evidence we used to detect it.',
      },
      {
        heading: 'How findings are prioritized',
        body: 'Every issue is scored on a three-axis rubric: technical blast radius (how many pages it affects), revenue exposure (how much organic traffic or conversions it touches), and fix cost (engineering hours). The top twenty findings get a one-paragraph remediation note. Lower-priority items go into an appendix so nothing is lost.',
      },
      {
        heading: 'Deliverables',
        body: 'You receive a PDF report (~30–80 pages depending on site size), a spreadsheet of all findings with owner and effort columns, a 60-minute recorded walkthrough, and a follow-up email thread for clarification. Reports cite the source URL and timestamp for every claim so you can verify them yourself.',
      },
      {
        heading: 'What this is not',
        body: 'An audit is not a guarantee of ranking improvement. It is a map of what is wrong and what to fix first. Outcomes depend on the fixes you ship, your competitive landscape, and broader market demand. We do not promise specific traffic or revenue lifts.',
      },
      {
        heading: 'Who this fits',
        body: 'Teams that already publish content or ship product changes regularly, have at least 50 indexed pages, and want a second pair of expert eyes before committing engineering time. It is less useful for brand-new sites that have not yet accumulated enough signal.',
      },
    ],
    deliverables: [
      'Written audit report (PDF)',
      'Findings spreadsheet with severity and effort estimates',
      '60-minute recorded walkthrough',
      'Two rounds of clarification email support',
    ],
    idealFor: [
      'In-house marketing teams with an existing site that has plateaued',
      'Agencies looking for a third-party audit before a major redesign',
      'Startups preparing for a Series B milestone and investor diligence',
    ],
    prerequisites: [
      'Read-only access to Google Search Console and Bing Webmaster Tools',
      'Read-only access to your analytics (GA4, Plausible, or equivalent)',
      'A list of priority URLs and the business questions you want answered',
    ],
    outcome:
      'A ranked, evidence-backed remediation list you can hand to engineering or your in-house team.',
    faqs: [
      {
        q: 'How long does an audit take?',
        a: 'Most engagements run 10–15 business days from kickoff to walkthrough, depending on site size.',
      },
      {
        q: 'Do you implement the fixes?',
        a: 'Not by default. We hand off the prioritized list with engineering-ready notes. Implementation is a separate engagement.',
      },
      {
        q: 'Will you share the crawler logs?',
        a: 'Yes. The raw crawl exports are included as appendices so your team can re-run analysis independently.',
      },
    ],
  },
  {
    slug: 'keyword-research',
    name: 'Keyword Research',
    tagline: 'A keyword map tied to intent, difficulty, and your actual product surface.',
    summary:
      'We build a structured keyword map that aligns search demand with the pages you can credibly publish. No vanity keywords, no keyword stuffing, no fabricated volume numbers.',
    sections: [
      {
        heading: 'How we source keyword data',
        body: 'We combine first-party data (your analytics, Search Console queries) with third-party tools and manual SERP analysis. Where third-party volume estimates disagree by more than 30 percent, we surface the disagreement instead of picking a number. We never invent search volume figures; if a number cannot be sourced, we say so.',
      },
      {
        heading: 'Intent classification',
        body: 'Every keyword is tagged by intent: informational, commercial-investigation, transactional, or navigational. Each tag drives a specific content brief. Informational terms map to guides; commercial terms map to comparison or category pages; transactional terms map to product or pricing surfaces.',
      },
      {
        heading: 'Difficulty and opportunity scoring',
        body: 'We score difficulty on three independent axes — backlink authority required, content depth required, and brand-search demand — then combine them into a single ranking difficulty band (Low / Medium / High / Brutal). Opportunity is computed as estimated clicks × commercial value / difficulty, surfaced as a sortable column.',
      },
      {
        heading: 'Deliverables',
        body: 'A spreadsheet with ~200–800 keywords depending on niche, each tagged by intent, scored, and mapped to an existing or planned URL. A short written rationale for the top twenty priority terms, explaining why each was chosen and what the page needs to win.',
      },
      {
        heading: 'What we will not do',
        body: 'We will not target keywords unrelated to your product or that misrepresent what you sell. We will not pad the list with zero-volume terms to look thorough. We will not promise first-page rankings on any specific keyword.',
      },
    ],
    deliverables: [
      'Structured keyword spreadsheet',
      'Intent and difficulty classification',
      'Top-20 priority rationale memo',
      'Mapping into your existing URL structure',
    ],
    idealFor: [
      'Teams launching a new content vertical and unsure what to write first',
      'Sites with stagnant organic traffic and unclear next moves',
      'Agencies building a content strategy for a client and needing defensible data',
    ],
    prerequisites: [
      'A clear description of the product or service you sell',
      'Access to Search Console and analytics',
      'A list of competitor domains you consider relevant',
    ],
    outcome:
      'A defensible keyword map that ties content production to measurable search demand.',
    faqs: [
      {
        q: 'Do you publish the spreadsheet in our shared drive?',
        a: 'Yes. The deliverable is a Google Sheet or CSV — your choice — handed off with editor access.',
      },
      {
        q: 'How often should we refresh the research?',
        a: 'Quarterly for most industries. Faster-moving categories (finance, tech) benefit from monthly refreshes on the priority subset.',
      },
      {
        q: 'Will you write the content too?',
        a: 'That is a separate service. We can hand off briefs that your writers or ours can execute against.',
      },
    ],
  },
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    tagline: 'Title tags, headings, copy, and structure tuned to what your page actually delivers.',
    summary:
      'On-page optimization rewrites the parts of a page that search engines and humans read first. We treat this as an evidence-driven rewrite, not a rewrite-by-template.',
    sections: [
      {
        heading: 'What gets changed',
        body: 'Title tags, meta descriptions, H1, subheading hierarchy, opening paragraph, internal link placement, image alt text, and structured data. We do not change the visible design or content scope — only the SEO-relevant copy and markup. Every change is logged with before/after values.',
      },
      {
        heading: 'How we decide what to write',
        body: 'We look at the top three currently-ranking pages for the target query, identify what they cover that your page does not, and align your page to the dominant search intent. We never copy competitor phrasing. We write new copy that matches your existing voice and brand guidelines.',
      },
      {
        heading: 'Quality control',
        body: 'Every rewritten page passes a checklist: one H1, no skipped heading levels, no empty alt text on meaningful images, internal links to and from related pages, schema reflecting the actual content type, and copy that a human reader would not flag as AI-generated boilerplate.',
      },
      {
        heading: 'What we will not do',
        body: 'No keyword stuffing. No hidden text. No doorway pages. No copy that contradicts the visible page design. If the page cannot be made compliant without breaking the user experience, we say so instead of patching over it.',
      },
      {
        heading: 'Scope guidance',
        body: 'Engagements are scoped per page. Most clients start with the 10–20 highest-traffic or highest-revenue URLs and expand from there based on what the initial round teaches us.',
      },
    ],
    deliverables: [
      'Per-page rewrite notes (before / after)',
      'Updated page markup deployed to your CMS',
      'Internal link and structured data updates',
      'Post-deploy QA report',
    ],
    idealFor: [
      'Existing pages that rank between positions 8 and 20 and need a push',
      'Pages with declining traffic despite unchanged content',
      'Sites migrating to a new CMS and needing SEO cleanup in the process',
    ],
    prerequisites: [
      'CMS edit access or a developer to deploy changes',
      'Brand voice and style guide',
      'Confirmation that the page is intended to remain publicly indexable',
    ],
    outcome:
      'Pages whose on-page signals match what the page actually delivers, with logged before/after evidence.',
    faqs: [
      {
        q: 'Do you A/B test the rewrites?',
        a: 'A/B testing on-page copy is rarely conclusive because rankings move on much longer timescales. We rely on before/after baselines instead.',
      },
      {
        q: 'How many pages can you handle per sprint?',
        a: 'Typical throughput is 8–15 pages per week depending on complexity and CMS friction.',
      },
      {
        q: 'Will the rewrites hurt existing rankings?',
        a: 'Rewrites can cause short-term fluctuation. We flag high-risk pages up front and stage rollouts to minimize exposure.',
      },
    ],
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    tagline: 'Crawl, render, and index infrastructure that scales with your product.',
    summary:
      'Technical SEO work on the parts of your site that search engines interact with first: crawl budget, rendering, canonicalization, structured data, sitemaps, redirects, and pagination.',
    sections: [
      {
        heading: 'Where we start',
        body: 'We map your current crawl behavior — which URLs search engines actually request, which they ignore, and where they burn budget on low-value pages. From there we identify the highest-leverage technical changes: canonical hygiene, robots and meta robots hygiene, sitemap accuracy, redirect chains, and rendering parity between crawler user agents and human browsers.',
      },
      {
        heading: 'JavaScript rendering',
        body: 'If your site is a JavaScript framework, we verify that rendered HTML matches what crawlers see after execution. We do not assume server-side rendering is "good enough" — we test against the live crawler logs and report exactly what is and is not being indexed.',
      },
      {
        heading: 'Structured data and entity work',
        body: 'We implement schema.org markup only where it reflects the actual page content. No fake ratings, no fake reviews, no fabricated organization data. Each schema deployment is validated against the schema.org specification and the search engine documentation current at the time.',
      },
      {
        heading: 'Sitemaps and discovery files',
        body: 'We build sitemap generation that reflects what you actually want indexed, exclude internal search results and other low-value URLs, and split large sitemaps by content type. robots.txt and llms.txt are treated as first-class discovery files, not afterthoughts.',
      },
      {
        heading: 'Working with engineering',
        body: 'Technical SEO work lands in your codebase. We provide engineering-ready pull requests with test coverage where possible, migration scripts for bulk URL changes, and rollback plans for high-risk edits.',
      },
    ],
    deliverables: [
      'Engineering-ready pull requests',
      'Crawl budget analysis with recommended URL pruning',
      'Structured data implementation with validation',
      'Updated robots.txt, sitemap.xml, and llms.txt',
    ],
    idealFor: [
      'Engineering-led teams shipping changes weekly who need SEO to keep pace',
      'Sites recovering from a migration that lost organic traffic',
      'Large catalogs with millions of URLs where crawl budget is a constraint',
    ],
    prerequisites: [
      'Source code or CMS access',
      'A staging environment we can deploy to for QA',
      'Access to server logs or analytics with referrer data',
    ],
    outcome:
      'A technical foundation that supports organic growth instead of fighting it.',
    faqs: [
      {
        q: 'Do you work in our repo directly?',
        a: 'Yes. We open PRs against your repository with the same review standards your team uses internally.',
      },
      {
        q: 'How do you handle migrations?',
        a: 'We plan URL mapping, redirect rules, and staged rollout. We never ship a redirect map without a rollback plan.',
      },
      {
        q: 'What if the fix needs a backend change?',
        a: 'We will flag it and pair with your engineers. We do not ship workarounds that pretend to fix the underlying problem.',
      },
    ],
  },
  {
    slug: 'link-building',
    name: 'Link Building',
    tagline: 'Digital PR and link earning — not link buying, not link exchanges.',
    summary:
      'We earn links through digital PR, original research, and genuinely useful resource pages. We never buy links, run PBNs, or exchange links for the purpose of manipulating rankings.',
    sections: [
      {
        heading: 'How we earn links',
        body: 'The most durable links come from coverage you did not pay for. We pitch original data, original commentary, and genuinely useful tools to journalists and publishers. Outreach is based on relevance to the publisher\'s existing coverage, not blast email to scraped lists.',
      },
      {
        heading: 'What we will not do',
        body: 'We do not buy links. We do not run private blog networks. We do not exchange links for the purpose of PageRank sculpting. We do not create fake review sites. We do not use AI to mass-generate guest post pitches. If a tactic would fail a manual review by Google\'s spam policies, we do not use it.',
      },
      {
        heading: 'Reporting and quality control',
        body: 'Every earned link is logged with the URL, the referring domain metrics, the anchor text, and the date acquired. Links from domains with clear paid-link patterns or obvious PBN footprints are surfaced as warnings so you can decide whether to keep or disavow them.',
      },
      {
        heading: 'Realistic expectations',
        body: 'Digital PR is a long game. Most engagements measure success in coverage quality and referring-domain authority growth, not raw link counts. We do not promise a specific number of links per month.',
      },
      {
        heading: 'Alternatives we recommend when link building is not the answer',
        body: 'Sometimes the best move is to invest in content depth, internal linking, or brand-search demand instead of links. We will tell you when that is the case.',
      },
    ],
    deliverables: [
      'Outreach campaign strategy',
      'Original data or asset to anchor the campaign',
      'Monthly coverage report',
      'Disavow file review',
    ],
    idealFor: [
      'Brands with newsworthy data or expertise to share',
      'Companies that have plateaued despite strong content',
      'Teams rebuilding authority after a manual action or link penalty',
    ],
    prerequisites: [
      'A spokesperson or subject matter expert available for journalist interviews',
      'Approval to publish original research under your brand',
      'A clear sense of the topics you are credible to comment on',
    ],
    outcome:
      'A growing profile of earned media coverage and referring domains over time.',
    faqs: [
      {
        q: 'How many links will I get?',
        a: 'It depends on the niche and the asset. We do not commit to a specific number; we commit to a process that produces durable links.',
      },
      {
        q: 'Do you do niche edits?',
        a: 'No. We do not pay for link insertions on existing articles for ranking purposes.',
      },
      {
        q: 'Can you help with a disavow file?',
        a: 'Yes — usually as part of a recovery or quarterly hygiene engagement.',
      },
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    tagline: 'Google Business Profile, NAP consistency, and local intent pages that actually convert.',
    summary:
      'Local SEO for businesses that serve customers in a defined geographic area. We focus on Google Business Profile, map pack signals, and local-intent pages that earn calls and visits.',
    sections: [
      {
        heading: 'What local SEO actually moves',
        body: 'Local rankings are driven by three buckets: relevance (how well your profile matches the query), distance (how close the business is to the searcher), and prominence (how authoritative your business is across the web). We optimize all three with the same evidence-driven approach.',
      },
      {
        heading: 'Google Business Profile',
        body: 'We audit your GBP for completeness, category accuracy, photo freshness, Q&A and review response patterns, and policy compliance. We do not post fake reviews, do not use ranking-incentivizing schemes, and do not advise on tactics that violate Google\'s guidelines.',
      },
      {
        heading: 'Local landing pages',
        body: 'For multi-location businesses, we build genuine local pages — not doorways. Each page includes location-specific content such as service area details, neighborhood coverage, hours, parking or transit notes, and locally relevant FAQs. We do not mass-generate city pages with swapped names.',
      },
      {
        heading: 'NAP and citation hygiene',
        body: 'We audit your name, address, and phone consistency across the major data aggregators and high-value directories. Inconsistent NAP is one of the most common local ranking drags and is straightforward to fix.',
      },
      {
        heading: 'Review generation',
        body: 'We help you build a legitimate review request workflow — not an incentive program that violates platform terms. The goal is to make it easy for satisfied customers to leave honest reviews, then respond to them.',
      },
    ],
    deliverables: [
      'Google Business Profile audit and optimization',
      'NAP and citation audit with correction list',
      'Multi-location page templates (where applicable)',
      'Review response playbook',
    ],
    idealFor: [
      'Single-location service businesses (dental, legal, home services)',
      'Multi-location franchises and regional chains',
      'Restaurants, retail, and hospitality with physical storefronts',
    ],
    prerequisites: [
      'Verified ownership of your Google Business Profile',
      'Accurate business information across your website and listings',
      'A realistic service area definition',
    ],
    outcome:
      'A local search presence that reflects the real business and earns calls from qualified customers.',
    faqs: [
      {
        q: 'Will you post to my GBP for me?',
        a: 'Only with explicit access and a content calendar you have approved.',
      },
      {
        q: 'How long until I see results?',
        a: 'GBP corrections can show within weeks. Local page ranking improvements typically take 2–4 months to stabilize.',
      },
      {
        q: 'Do you handle review responses?',
        a: 'We provide a playbook and review draft responses. Replying on your behalf is optional and requires explicit access.',
      },
    ],
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    tagline: 'Category, product, and faceted navigation work that earns revenue, not just traffic.',
    summary:
      'E-commerce SEO work for online stores with thousands to millions of URLs. We focus on crawl budget, canonicalization, product schema, and category content that converts.',
    sections: [
      {
        heading: 'Crawl budget and faceted navigation',
        body: 'For large catalogs, faceted navigation can exhaust crawl budget on low-value URL combinations. We work with your engineering team to apply robots, canonicals, and parameter handling that keeps crawlers focused on the URLs you actually want indexed.',
      },
      {
        heading: 'Product and offer schema',
        body: 'We deploy Product, Offer, and AggregateRating schema only where the data is accurate and visible on the page. We do not invent review counts or aggregate ratings to look better in SERPs. Any rating markup reflects real customer input.',
      },
      {
        heading: 'Category content',
        body: 'Category pages are the highest-leverage SEO surface in e-commerce. We write category copy that covers the topic in enough depth to rank for non-brand informational queries, while keeping the buyer journey obvious. No keyword stuffing, no thin content.',
      },
      {
        heading: 'Out-of-stock and discontinued products',
        body: 'We design URL handling for sold-out and discontinued products so you keep link equity without serving dead pages. The wrong default can quietly cost you months of organic traffic.',
      },
      {
        heading: 'Marketplaces and platform constraints',
        body: 'If you sell on Shopify, BigCommerce, Magento, or a custom platform, we work within the platform\'s actual constraints. We will tell you when the platform is the bottleneck and what to do about it.',
      },
    ],
    deliverables: [
      'Crawl budget and faceted navigation audit',
      'Product schema deployment',
      'Category content briefs and rewrites',
      'Out-of-stock URL handling playbook',
    ],
    idealFor: [
      'D2C brands with 1,000+ SKUs',
      'Marketplace sellers optimizing for organic search alongside paid',
      'Enterprise retailers undergoing replatforming',
    ],
    prerequisites: [
      'Read access to your e-commerce platform admin',
      'Product feed and inventory data',
      'A defined taxonomy and category structure',
    ],
    outcome:
      'A catalog that earns organic traffic at scale without sacrificing crawl efficiency.',
    faqs: [
      {
        q: 'Do you work with Shopify specifically?',
        a: 'Yes. We are familiar with Shopify\'s SEO limits and the workarounds that actually work.',
      },
      {
        q: 'Can you help with marketplace SEO (Amazon, Walmart)?',
        a: 'Marketplace SEO is a separate engagement — the ranking signals differ significantly. We can refer you to a specialist.',
      },
      {
        q: 'What about international SEO?',
        a: 'Hreflang implementation and regional targeting are part of our technical SEO work. We handle it explicitly, not as an afterthought.',
      },
    ],
  },
  {
    slug: 'content-strategy',
    name: 'Content Strategy',
    tagline: 'An editorial plan tied to what your audience actually searches for and reads.',
    summary:
      'A documented content strategy built on keyword research, audience interviews, and competitive gap analysis. The output is a 6–12 month editorial calendar your team can actually execute.',
    sections: [
      {
        heading: 'How we build the strategy',
        body: 'We combine keyword research, audience signal analysis (what your customers actually ask in sales calls and support tickets), and competitor gap analysis. The output is prioritized by expected business impact, not by what is easiest to write.',
      },
      {
        heading: 'Content briefs, not just titles',
        body: 'Every entry in the editorial calendar ships with a content brief: target keyword, search intent, suggested H2/H3 structure, internal links to include, calls to action, and a word count band. Writers can execute against the brief without re-asking the strategy questions.',
      },
      {
        heading: 'Distribution and amplification',
        body: 'A piece of content that nobody reads does not move rankings. We include distribution guidance — channels, formats, and repurposing — for each major asset so it actually gets seen.',
      },
      {
        heading: 'Measurement',
        body: 'We define success metrics up front: which queries the piece should rank for, what traffic level is realistic, and what conversion behavior we expect. No "publish and pray" content.',
      },
      {
        heading: 'What we will not do',
        body: 'We will not build a content calendar that depends on AI-generated filler. We will not chase volume at the expense of quality. We will not recommend topics your team cannot credibly write.',
      },
    ],
    deliverables: [
      '6–12 month editorial calendar',
      'Per-asset content briefs',
      'Distribution playbook',
      'Quarterly refresh cadence',
    ],
    idealFor: [
      'B2B SaaS companies launching a content engine',
      'Publishers and media brands refining their editorial focus',
      'Marketing teams that have been publishing without a clear plan',
    ],
    prerequisites: [
      'Access to customer interviews or sales call recordings',
      'Existing content inventory or sitemap',
      'A clear sense of the business outcomes content should drive',
    ],
    outcome:
      'An editorial plan your team can execute quarter after quarter without re-strategizing.',
    faqs: [
      {
        q: 'Do you write the content too?',
        a: 'We provide briefs and can pair you with vetted writers, or your in-house team can execute. We do not produce AI-filler content.',
      },
      {
        q: 'How often should we refresh the strategy?',
        a: 'Light refresh quarterly, full rebuild annually or whenever the business model changes meaningfully.',
      },
      {
        q: 'Can the strategy work alongside paid acquisition?',
        a: 'Yes — and we recommend it. Organic and paid search inform each other; we treat them as complementary.',
      },
    ],
  },
  {
    slug: 'seo-consulting',
    name: 'SEO Consulting',
    tagline: 'Senior SEO guidance embedded with your team — by the hour, week, or month.',
    summary:
      'Fractional senior SEO leadership for teams that need strategic guidance without a full-time hire. Scope is flexible — by the hour, by the week, or as a monthly retainer.',
    sections: [
      {
        heading: 'Engagement shapes',
        body: 'Hourly for one-off questions. Weekly for active projects. Monthly retainer for ongoing senior guidance. We do not lock you into long contracts — most engagements run month-to-month after an initial scope.',
      },
      {
        heading: 'What we do in the engagement',
        body: 'Attend your team syncs, review your roadmap, push back on requests that would hurt SEO, advise on prioritization, and unblock your team on SEO questions they would otherwise escalate externally. The deliverable is fewer bad decisions and faster execution.',
      },
      {
        heading: 'What we do not do',
        body: 'We do not take over your team\'s work. We do not hide our reasoning behind jargon. We do not bill for "strategy decks" that sit in a Google Drive and never get used.',
      },
      {
        heading: 'Communication',
        body: 'Slack or Teams channel, weekly written status update, monthly Loom summary of decisions and what changed. We work in whatever channel your team already uses.',
      },
      {
        heading: 'When this is the right fit',
        body: 'You need senior SEO judgment more than you need another pair of hands, and you have enough internal execution capacity to ship the work yourself.',
      },
    ],
    deliverables: [
      'Weekly written status update',
      'Monthly decision summary (Loom or doc)',
      'On-demand Slack/Teams availability',
      'Roadmap review and prioritization',
    ],
    idealFor: [
      'Series A–C startups that need senior SEO without a full-time hire',
      'In-house teams whose marketing lead needs a thinking partner',
      'Agencies that need an outside reviewer for client work',
    ],
    prerequisites: [
      'A team with at least one marketing or growth lead',
      'Shared Slack/Teams or async communication channel',
      'Decision-maker access for prioritization calls',
    ],
    outcome:
      'Senior SEO judgment on tap, without the overhead of a full-time hire.',
    faqs: [
      {
        q: 'Do you sign an NDA?',
        a: 'Yes, mutually. Standard terms, no surprises.',
      },
      {
        q: 'Can we pause the retainer?',
        a: 'Yes. Most retainers run month-to-month with 14 days notice.',
      },
      {
        q: 'Will you work with our existing agency?',
        a: 'Yes, when roles are clearly defined. We will tell you when the setup is not working.',
      },
    ],
  },
];

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}