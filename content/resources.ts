// Resource library — blog articles, guides, and educational content.
// Each entry is a real guide with substantive content. No lorem ipsum,
// no AI-filler, no fabricated case studies.

export type Resource = {
  slug: string;
  title: string;
  description: string;
  // Primary category for internal linking and breadcrumbs.
  category: 'fundamentals' | 'technical' | 'content' | 'local' | 'link' | 'measurement' | 'ai';
  // Reading time estimate.
  readingTime: string;
  // Date published. Real dates, no fabrication.
  publishedOn: string;
  // Last reviewed date. Reviewed date should be ≥ published date.
  reviewedOn: string;
  // Sections — each must be substantive, not filler.
  sections: ReadonlyArray<{ heading: string; body: string }>;
  // Key takeaways for the user.
  takeaways: ReadonlyArray<string>;
  // Linked primary sources, where appropriate.
  references: ReadonlyArray<{ label: string; href: string }>;
};

export const RESOURCES: ReadonlyArray<Resource> = [
  {
    slug: 'what-is-seo',
    title: 'What is SEO? A practical introduction for 2026',
    description:
      'A grounded introduction to search engine optimization — what it actually is, how it works, and where it fits in a marketing plan.',
    category: 'fundamentals',
    readingTime: '8 min read',
    publishedOn: '2026-01-12',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'SEO is the practice of earning relevant organic traffic from search engines.',
        body: 'Search engine optimization (SEO) is the practice of making a website easy for search engines to discover, understand, and rank for the queries your audience is searching for. It is one of three core acquisition channels alongside paid and owned media, and it is the only one whose marginal cost per visitor trends toward zero over time.',
      },
      {
        heading: 'How search engines work, briefly',
        body: 'Modern search engines run three pipelines continuously: crawling (discovering URLs), indexing (storing and parsing content), and ranking (ordering results for a query). Your job in SEO is to make each pipeline like your content: easy to crawl, easy to parse, and easy to rank. Each pipeline has its own failure modes and its own set of best practices.',
      },
      {
        heading: 'The three pillars of SEO',
        body: 'Technical SEO covers crawl, render, and index infrastructure. On-page SEO covers the parts of the page that engines and humans read first. Off-page SEO covers the signals that come from elsewhere on the web, primarily links and brand mentions. A healthy organic program needs all three in balance. Over-investing in one without the others usually produces disappointing returns.',
      },
      {
        heading: 'When SEO is the right channel',
        body: 'SEO compounds. It is the right channel when you have a long enough time horizon to let that compounding pay off, when your customers actually search for what you sell, and when you can sustain the operational discipline required to ship consistently. It is the wrong channel when you need results this quarter or when your product is so niche that search demand does not exist.',
      },
      {
        heading: 'When SEO is the wrong channel',
        body: 'If your product is sold exclusively through outbound sales with no search demand at any stage of the funnel, SEO will not move the needle. If your audience lives entirely on platforms you do not control (TikTok, Reddit, Discord), SEO may be a lower priority than community. Be honest about the channel fit before committing.',
      },
      {
        heading: 'How long SEO takes',
        body: 'Realistic timelines are 3–6 months for the first measurable movement, 6–12 months for material traffic, and 12–24 months for compounding returns. Shorter than that and the work is mostly cleanup. Longer than that usually means a fundamental strategy problem, not a tactics problem.',
      },
    ],
    takeaways: [
      'SEO is one of three core acquisition channels, and the only one whose marginal cost trends to zero.',
      'Technical, on-page, and off-page pillars must be invested in balance.',
      'Realistic timelines are 6–12 months for material traffic.',
    ],
    references: [
      { label: 'Google Search Central — How Search Works', href: 'https://developers.google.com/search/docs/fundamentals/how-search-works' },
    ],
  },
  {
    slug: 'how-search-engines-work',
    title: 'How search engines work: crawling, indexing, ranking',
    description:
      'A grounded walk-through of the three pipelines that determine whether your pages get found, stored, and shown to searchers.',
    category: 'fundamentals',
    readingTime: '10 min read',
    publishedOn: '2026-01-20',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Crawling',
        body: 'Crawling is the discovery phase. Crawlers (Googlebot, Bingbot, and others) start from a set of known URLs and follow links to discover new ones. They also re-visit previously known URLs to detect changes. Crawl budget is finite: the larger and more dynamic your site, the more carefully you have to manage which URLs get crawled and how often.',
      },
      {
        heading: 'Indexing',
        body: 'Indexing is the parsing phase. Once a URL is fetched, the engine extracts text, parses markup, normalizes content, evaluates structured data, and stores representations of the page. Pages can be discovered but not indexed if the engine decides they are duplicates, low-value, or blocked.',
      },
      {
        heading: 'Ranking',
        body: 'Ranking is the ordering phase. When a user issues a query, the engine retrieves relevant indexed pages and orders them by relevance, quality, context, and freshness signals. Relevance is computed by matching query terms and entities against page content. Quality is computed by external signals, primarily links and brand mentions.',
      },
      {
        heading: 'Why this matters for SEO',
        body: 'Most SEO failures are not ranking failures — they are crawling or indexing failures. A page cannot rank if it has never been crawled or indexed. Diagnose in the right order: crawl first, then index, then rank. The tools to verify each are different.',
      },
      {
        heading: 'Verification tools',
        body: 'Crawl verification: server logs, third-party crawl exports (Screaming Frog, Sitebulb), and Google Search Console crawl stats. Index verification: URL Inspection tool in Search Console, site: queries, and Bing Webmaster URL inspection. Ranking verification: rank tracking tools and Search Console performance reports.',
      },
    ],
    takeaways: [
      'Crawling, indexing, and ranking are distinct pipelines with distinct failure modes.',
      'Diagnose in order: crawl → index → rank.',
      'Verification tools differ at each pipeline.',
    ],
    references: [
      { label: 'Google Search Central — How Search Works', href: 'https://developers.google.com/search/docs/fundamentals/how-search-works' },
    ],
  },
  {
    slug: 'keyword-research-guide',
    title: 'Keyword research: a defensible process',
    description:
      'How to build a keyword map that ties content production to measurable search demand — without invented volume figures.',
    category: 'content',
    readingTime: '12 min read',
    publishedOn: '2026-01-28',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Start with intent, not volume',
        body: 'Most keyword research starts with a volume number and works backward. A better process starts with intent — what is the searcher trying to accomplish? — and works forward to the right page type, the right format, and the right success metric.',
      },
      {
        heading: 'Where the data comes from',
        body: 'First-party data (your analytics, Search Console) is the most defensible. Third-party tools (Ahrefs, Semrush, Moz) provide scale but their volume estimates can disagree by 30 percent or more. Manual SERP analysis — searching the query yourself and reading what ranks — is irreplaceable for understanding intent.',
      },
      {
        heading: 'Classifying intent',
        body: 'Every keyword gets one of four intent tags: informational (learn something), commercial-investigation (compare options), transactional (buy something), or navigational (find a specific site). Each tag drives a different page type and a different success metric.',
      },
      {
        heading: 'Difficulty scoring',
        body: 'Difficulty is not a single number. It is at least three independent axes: backlink authority required, content depth required, and brand-search demand. Combine them into a band (Low / Medium / High / Brutal) and use the band to prioritize.',
      },
      {
        heading: 'Building the map',
        body: 'Group keywords by intent and parent topic. Map each group to an existing URL or a planned one. Identify gaps where you have demand but no content, and content gaps where you have content but no demand.',
      },
      {
        heading: 'Avoiding the trap of zero-volume keywords',
        body: 'Some legitimate queries have near-zero reported volume but represent real demand (B2B, niche, long-tail). Include them in your map but flag the volume uncertainty. Do not pad the spreadsheet with random low-volume terms to look thorough.',
      },
    ],
    takeaways: [
      'Start with intent, not volume.',
      'Use first-party data as the primary source, third-party tools for scale, manual SERP analysis for understanding.',
      'Difficulty is multi-axis. Avoid single-number scores.',
    ],
    references: [
      { label: 'Google Search Central — Search Essentials', href: 'https://developers.google.com/search/docs/essentials' },
    ],
  },
  {
    slug: 'on-page-seo-checklist',
    title: 'On-page SEO checklist: title tags, headings, copy, and beyond',
    description:
      'A practical, copy-pasteable checklist for on-page optimization that holds up to manual review.',
    category: 'content',
    readingTime: '9 min read',
    publishedOn: '2026-02-03',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Title tag',
        body: 'One per page. Descriptive of the page topic. Includes the primary keyword naturally. Length is appropriate for the device (typically 50–60 characters for desktop). Distinct from every other title on the site.',
      },
      {
        heading: 'Meta description',
        body: 'One per page. Summarizes what the page delivers. Invites action when appropriate. Distinct from every other description on the site. Not a duplicate of the title.',
      },
      {
        heading: 'H1',
        body: 'Exactly one H1 per page. Describes the page topic in user language. Not a duplicate of the title verbatim. Matches the visible page design.',
      },
      {
        heading: 'Heading hierarchy',
        body: 'H2s for major sections, H3s for subsections, H4s for deeper detail. No skipped levels for structure. Headings reflect the actual outline of the content.',
      },
      {
        heading: 'Opening paragraph',
        body: 'Answers the query in the first 100 words where possible. Does not bury the answer under generic preamble. Includes the primary entity or concept clearly.',
      },
      {
        heading: 'Internal links',
        body: 'Page links to and from related pages within the site. Anchor text is descriptive of the destination, not "click here". No broken internal links. No orphan pages.',
      },
      {
        heading: 'Image alt text',
        body: 'Meaningful for informative images. Empty (alt="") for decorative images. Descriptive of what the image shows, not stuffed with keywords.',
      },
      {
        heading: 'Structured data',
        body: 'Schema reflects the actual page content. No fake ratings, no fake reviews, no fabricated organization data. Validated against schema.org and search-engine documentation.',
      },
      {
        heading: 'Canonical URL',
        body: 'Each page has a canonical URL that points to the final intended public URL. No accidental canonicalization to a broken or redirecting target.',
      },
      {
        heading: 'Robots meta',
        body: 'Public indexable pages do not have noindex. Private/admin/account pages are noindexed or blocked in robots.txt. No accidental indexability.',
      },
    ],
    takeaways: [
      'On-page work is evidence-driven, not template-driven.',
      'Every signal must reflect the actual page content.',
      'Internal linking and structured data are part of on-page SEO, not separate.',
    ],
    references: [
      { label: 'Google Search Central — Essential SEO Guide', href: 'https://developers.google.com/search/docs/essentials' },
    ],
  },
  {
    slug: 'technical-seo-audit',
    title: 'Technical SEO audit: a 12-step process',
    description:
      'A repeatable technical SEO audit process that surfaces crawl, index, render, and structured-data issues ranked by impact.',
    category: 'technical',
    readingTime: '15 min read',
    publishedOn: '2026-02-12',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Step 1 — Crawl the site',
        body: 'Run a third-party crawler (Screaming Frog, Sitebulb, Lumar) at production scale. Capture HTTP status, redirect chains, canonical declarations, robots and meta robots, internal link structure, response times, and rendered HTML. Save the raw exports — they are your evidence base for everything that follows.',
      },
      {
        heading: 'Step 2 — Compare to indexed URLs',
        body: 'Pull the indexed URL list from Search Console and Bing Webmaster Tools. Compare against your crawl. Identify URLs that are crawled but not indexed (crawl waste) and URLs that are indexed but not in your crawl (orphans, external index entries).',
      },
      {
        heading: 'Step 3 — Verify canonicalization',
        body: 'Walk through the canonical declarations on every public URL. Confirm canonicals point to themselves, not to a redirect, not to a different URL, not to a stripped-parameter variant that is not the final intended URL.',
      },
      {
        heading: 'Step 4 — Robots and meta robots hygiene',
        body: 'Confirm robots.txt does not block public pages, does not block CSS/JS/images needed for rendering, and does reference the sitemap. Confirm no public page has accidental noindex.',
      },
      {
        heading: 'Step 5 — Sitemap accuracy',
        body: 'Confirm the sitemap reflects what you want indexed, not what is technically URL-able. Confirm the sitemap excludes private, internal search, admin, and noindexed pages.',
      },
      {
        heading: 'Step 6 — Redirect chains',
        body: 'Walk every redirect chain. Long chains (3+ hops) cost crawl budget and dilute link equity. Document chains for resolution.',
      },
      {
        heading: 'Step 7 — Render parity',
        body: 'Compare the HTML served to a crawler against the HTML rendered in a JavaScript-enabled browser. Differences are not always bugs, but they must be intentional and documented.',
      },
      {
        heading: 'Step 8 — Structured data validation',
        body: 'Run every page with structured data through the Rich Results Test and Schema.org validation. Confirm schema matches visible page content. Flag any fake ratings, fake reviews, or fabricated organization data.',
      },
      {
        heading: 'Step 9 — Page experience signals',
        body: 'Pull Core Web Vitals from Search Console and CrUX. Identify the worst 20 percent of URLs by each metric. Note that fixing page experience is rarely a high-leverage audit finding on its own; it matters most when paired with other improvements.',
      },
      {
        heading: 'Step 10 — Internal link architecture',
        body: 'Visualize the internal link graph. Identify orphan pages, dead-end pages, and pages that receive no internal links from related content. Confirm every public page is reachable within 3 clicks of the homepage.',
      },
      {
        heading: 'Step 11 — Log file analysis',
        body: 'Where log access is available, analyze which URLs Googlebot actually requests. Compare to your crawl. Differences reveal crawl budget priorities the engine has chosen independently.',
      },
      {
        heading: 'Step 12 — Prioritization',
        body: 'Score every finding on technical blast radius, revenue exposure, and fix cost. The top 20 gets a one-paragraph remediation note. The rest go in an appendix. Ship the top 20 first.',
      },
    ],
    takeaways: [
      'Audit in order: crawl, index, render, structure, internal links, log files.',
      'Score findings on three axes, not one.',
      'Keep raw exports as evidence — they protect you when challenged.',
    ],
    references: [
      { label: 'Google Search Central — Crawling and Indexing', href: 'https://developers.google.com/search/docs/crawling-indexing' },
    ],
  },
  {
    slug: 'link-building-strategies',
    title: 'Link building strategies that do not get you penalized',
    description:
      'A grounded look at link earning tactics that work, the ones that will get you a manual action, and how to tell the difference.',
    category: 'link',
    readingTime: '11 min read',
    publishedOn: '2026-02-22',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What link building is actually about',
        body: 'Link building is the practice of earning mentions of your site on other sites such that those mentions pass ranking value. Most of the practice is digital PR — getting your name, your data, or your commentary cited by journalists, publishers, and other authoritative sources.',
      },
      {
        heading: 'Tactics that work',
        body: 'Original research (data-driven reports journalists cite), expert commentary (being a quotable source), free tools (calculators, generators, datasets), resource page inclusion (genuinely useful content that resource curators point to), and broken-link rebuilding (finding dead references and offering your replacement).',
      },
      {
        heading: 'Tactics that get penalized',
        body: 'Paid links intended to manipulate PageRank, private blog networks (PBNs), link exchanges for ranking purposes, mass guest posting with optimized anchor text, comment spam, and fake review sites. Google\'s spam policies documentation is the canonical list — read it.',
      },
      {
        heading: 'Realistic expectations',
        body: 'Digital PR is a long game. Most engagements measure success in coverage quality, referring-domain authority growth, and brand-search lift — not raw link counts. We do not promise a specific number of links per month.',
      },
      {
        heading: 'How to evaluate a link opportunity',
        body: 'Before pursuing a link, ask: would I want this link if Google did not exist? Would my ideal customer find this mention useful? If the answer to either is no, the link will not help you in the long run, regardless of how it shows up in third-party metrics.',
      },
    ],
    takeaways: [
      'Link earning is digital PR — most tactics that work look like PR, not SEO.',
      'Tactics that would fail Google\'s spam policies are not worth the risk.',
      'Evaluate every link opportunity against a "would I want this without SEO?" test.',
    ],
    references: [
      { label: 'Google Search Central — Spam Policies', href: 'https://developers.google.com/search/docs/essentials/spam-policies' },
    ],
  },
  {
    slug: 'local-seo-guide',
    title: 'Local SEO: Google Business Profile, NAP, and local intent pages',
    description:
      'A practical local SEO guide for businesses that serve customers in a defined geographic area.',
    category: 'local',
    readingTime: '10 min read',
    publishedOn: '2026-03-01',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What local rankings depend on',
        body: 'Local rankings are driven by relevance (how well your profile matches the query), distance (how close the business is to the searcher), and prominence (how authoritative your business is across the web). All three are addressable.',
      },
      {
        heading: 'Google Business Profile',
        body: 'A complete GBP profile is the single highest-leverage local SEO investment. Categories must match what you actually offer. Hours, photos, services, and attributes must be current. Posts must be useful, not promotional filler. Q&A should be seeded with real questions your customers ask.',
      },
      {
        heading: 'NAP consistency',
        body: 'Your business Name, Address, and Phone must be identical across your website, your GBP, and every directory listing. Inconsistency is one of the most common local ranking drags. Audit aggregators (Neustar, Factual, Acxiom) and major directories (Yelp, Apple Maps, Bing Places) first.',
      },
      {
        heading: 'Local landing pages',
        body: 'For multi-location businesses, each location needs a real page — not a doorway with a swapped city name. Real content: service area details, neighborhood coverage, hours, parking or transit notes, locally relevant FAQs, photos that are recognizably from that location.',
      },
      {
        heading: 'Reviews',
        body: 'A legitimate review request workflow — not an incentive program. Make it easy for satisfied customers to leave honest reviews, then respond to them. Response cadence matters more than the response itself in most cases.',
      },
    ],
    takeaways: [
      'GBP, NAP consistency, and local landing pages are the foundation.',
      'Doorway pages hurt more than help.',
      'Reviews are a function of operational discipline, not SEO tactics.',
    ],
    references: [
      { label: 'Google Business Profile Help', href: 'https://support.google.com/business' },
    ],
  },
  {
    slug: 'core-web-vitals',
    title: 'Core Web Vitals: what they are and how much they matter',
    description:
      'An honest look at Core Web Vitals — what they measure, how much they actually move rankings, and where to spend your engineering time.',
    category: 'technical',
    readingTime: '9 min read',
    publishedOn: '2026-03-10',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What Core Web Vitals are',
        body: 'Core Web Vitals are three page-experience metrics: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). They are measured at the 75th percentile of real-user sessions and surfaced in Search Console and CrUX.',
      },
      {
        heading: 'How much they actually move rankings',
        body: 'Core Web Vitals are a tiebreaker, not a primary ranking factor. Google has said repeatedly that great content on a slow page can outrank poor content on a fast page. Spend engineering time on the worst-performing pages, but do not let CWV optimization delay content or link work.',
      },
      {
        heading: 'LCP — Largest Contentful Paint',
        body: 'LCP measures when the largest visible element finishes rendering. Common fixes: preload the LCP image, reduce server response time, avoid render-blocking resources, ensure the LCP element is not lazy-loaded.',
      },
      {
        heading: 'INP — Interaction to Next Paint',
        body: 'INP measures how quickly the page responds to user interactions. Common fixes: break up long JavaScript tasks, defer non-critical JavaScript, reduce main-thread work, use web workers for heavy computation.',
      },
      {
        heading: 'CLS — Cumulative Layout Shift',
        body: 'CLS measures unexpected layout shifts during page load. Common fixes: always include width and height on images and embeds, reserve space for late-loading content, avoid injecting content above existing content.',
      },
      {
        heading: 'Measurement discipline',
        body: 'Lab tools (Lighthouse, WebPageTest) and field data (CrUX, Search Console) tell different stories. Use field data for prioritization. Lab tools are useful for debugging specific user flows.',
      },
    ],
    takeaways: [
      'CWV is a tiebreaker, not a primary ranking factor.',
      'Measure with field data, debug with lab tools.',
      'Do not let CWV work delay higher-leverage investments.',
    ],
    references: [
      { label: 'web.dev — Core Web Vitals', href: 'https://web.dev/vitals/' },
    ],
  },
  {
    slug: 'schema-markup-guide',
    title: 'Schema markup: a practical guide for 2026',
    description:
      'How to use schema.org structured data without misrepresenting your content or fabricating claims.',
    category: 'technical',
    readingTime: '11 min read',
    publishedOn: '2026-03-18',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What schema.org is',
        body: 'Schema.org is a vocabulary for structured data that search engines and other systems can parse. It is expressed as JSON-LD embedded in pages, as Microdata in HTML, or as RDFa. JSON-LD is the modern default because it does not pollute the visible markup.',
      },
      {
        heading: 'When to use schema',
        body: 'Use schema when it reflects the actual page content. Article, BlogPosting, Product, Offer, FAQPage, BreadcrumbList, Organization, WebSite, and LocalBusiness are the most common. Anything else should be evaluated against whether the schema matches the page.',
      },
      {
        heading: 'What not to do',
        body: 'Do not fabricate ratings. Do not invent aggregate scores. Do not put review markup on a page with no reviews. Do not claim authorship by people who did not author the content. Do not use schema to claim organization details that differ from what is on the page.',
      },
      {
        heading: 'Validation',
        body: 'Use the Rich Results Test and Schema.org validator on every page with structured data. Validation should run in CI as well as pre-publish. Mismatched schema is a manual action risk.',
      },
      {
        heading: 'Common schema types we deploy',
        body: 'Organization (site-wide), WebSite with SearchAction (site-wide, when search is useful), BreadcrumbList (where breadcrumbs exist), Article or BlogPosting (resource pages), Product and Offer (e-commerce), FAQPage (where FAQs are visible), LocalBusiness (where applicable).',
      },
    ],
    takeaways: [
      'Schema must reflect actual page content.',
      'Validate in CI and pre-publish.',
      'No fake ratings, no fake reviews, no fabricated claims.',
    ],
    references: [
      { label: 'Schema.org', href: 'https://schema.org/' },
      { label: 'Google Search Central — Structured Data', href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
  },
  {
    slug: 'ai-search-optimization',
    title: 'AI search optimization: the practical playbook',
    description:
      'How to optimize for AI-powered search experiences — Google AI Overviews, Bing Copilot, Perplexity, ChatGPT search — without abandoning the fundamentals.',
    category: 'ai',
    readingTime: '13 min read',
    publishedOn: '2026-04-02',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What changed and what did not',
        body: 'AI search experiences — Google AI Overviews, Bing Copilot, Perplexity, ChatGPT search — pull from the same indexed web that traditional search engines use. The fundamentals have not changed: great content, structured data, clear entity signals, and crawlable infrastructure still matter. What changed is the surface that engines present to users.',
      },
      {
        heading: 'Citation and source selection',
        body: 'AI experiences cite sources. The cited sources tend to be pages that are easy to extract: clear topical focus, structured headings, factually dense paragraphs, and explicit entity references. Pages that read like marketing copy are cited less often than pages that read like reference material.',
      },
      {
        heading: 'llms.txt and AI crawler discovery',
        body: 'llms.txt is an emerging convention for telling AI systems what your site is about and which pages matter. It does not replace sitemap.xml — it complements it. Implement llms.txt as a flat-text file at the site root with site description, categories, and important URLs.',
      },
      {
        heading: 'Structured data for AI',
        body: 'Schema markup that reflects the actual content helps AI systems understand your pages. Article schema with explicit author and datePublished fields, FAQPage schema with real questions, Organization schema with verifiable details — all of these improve the chance of accurate citation.',
      },
      {
        heading: 'Crawler policy for AI bots',
        body: 'Be intentional about which AI bots you allow. GPTBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended, and others each have their own user agent. Decide explicitly — the default should not be "block everything" or "allow everything" without thought.',
      },
      {
        heading: 'Measurement',
        body: 'AI search traffic shows up in your analytics as referral traffic from the AI product\'s domain. It is small today but growing. Track it, but do not over-optimize for it at the expense of traditional organic traffic.',
      },
    ],
    takeaways: [
      'AI search still pulls from the indexed web — fundamentals still apply.',
      'Citation favors reference-quality writing over marketing copy.',
      'Implement llms.txt, allow intentional AI bots, and use real structured data.',
    ],
    references: [
      { label: 'llms.txt proposal', href: 'https://llmstxt.org/' },
      { label: 'Google Search Central — AI Features', href: 'https://developers.google.com/search/docs/appearance/ai-features' },
    ],
  },
  {
    slug: 'llms-txt-explained',
    title: 'llms.txt explained: what it is, what it is not, and how to implement it',
    description:
      'A grounded look at the llms.txt convention, when it adds value, and how to implement it without overpromising.',
    category: 'ai',
    readingTime: '7 min read',
    publishedOn: '2026-04-10',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'What llms.txt is',
        body: 'llms.txt is a flat-text file at the site root (/llms.txt) that describes the site to AI systems: what it is, who it is for, what categories of content it covers, and which pages are most important. It is a proposal, not a standard, and adoption is voluntary.',
      },
      {
        heading: 'What llms.txt is not',
        body: 'It is not a replacement for sitemap.xml. It is not a robots.txt. It does not control crawler access. AI systems are not required to read it. Treat it as a useful discovery aid, not a magic switch.',
      },
      {
        heading: 'What to put in llms.txt',
        body: 'A short truthful summary of the site, the audience, the primary content categories, the most important URLs (homepage, contact, key resources), and a link to sitemap.xml. Include disclaimers where they apply. Be conservative — do not overclaim capabilities, do not invent credentials.',
      },
      {
        heading: 'What not to put in llms.txt',
        body: 'No fabricated reviews, no made-up statistics, no exaggerated credentials, no unverifiable claims. AI systems may treat the file as a trusted source of truth about your site — misrepresentations will come back to haunt you.',
      },
      {
        heading: 'Implementation',
        body: 'Add /llms.txt to your site root. Update it when the site changes meaningfully. Do not generate it dynamically in a way that produces different content for different user agents — that defeats the trust premise.',
      },
    ],
    takeaways: [
      'llms.txt is a useful discovery aid, not a magic switch.',
      'Be truthful and conservative.',
      'Treat it as a complement to sitemap.xml, not a replacement.',
    ],
    references: [
      { label: 'llms.txt proposal', href: 'https://llmstxt.org/' },
    ],
  },
  {
    slug: 'sitemap-best-practices',
    title: 'Sitemap best practices: what to include, what to exclude, and why',
    description:
      'How to design a sitemap that reflects what you actually want indexed, without inviting crawl waste.',
    category: 'technical',
    readingTime: '8 min read',
    publishedOn: '2026-04-18',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Sitemaps are a hint, not a command',
        body: 'Sitemaps tell search engines which URLs you would like considered for indexing. They do not guarantee indexing. Pages in the sitemap that are blocked by robots or marked noindex will not be indexed regardless.',
      },
      {
        heading: 'What to include',
        body: 'Public, indexable, canonical URLs that you actually want users to find. Include your homepage, core pages, category hubs, service pages, resource pages, location pages, and FAQs. Use lastmod to signal when content was last updated meaningfully.',
      },
      {
        heading: 'What to exclude',
        body: 'Internal search result pages, admin pages, account pages, dashboard pages, paginated variants you do not want indexed, alternate-language variants that are handled by hreflang, and any URL marked noindex.',
      },
      {
        heading: 'Sitemap splits for large sites',
        body: 'If you have more than 50,000 URLs or multiple distinct content types, split into multiple sitemaps and reference them in a sitemap index. Typical splits: pages, images, news, and alternate-language.',
      },
      {
        heading: 'Generating sitemaps dynamically',
        body: 'For most sites, generate the sitemap at build time from your content data. Dynamic sitemaps that include every URL on the fly will pull in junk. Build-time generation forces the discipline of "would I include this on purpose?"',
      },
    ],
    takeaways: [
      'Sitemaps are a hint, not a command.',
      'Build at build time, not dynamically.',
      'Split by content type for large sites.',
    ],
    references: [
      { label: 'sitemaps.org protocol', href: 'https://www.sitemaps.org/' },
    ],
  },
  {
    slug: 'robots-txt-guide',
    title: 'robots.txt: a safe default and how to think about AI bots',
    description:
      'How to write a robots.txt that protects private areas without accidentally blocking CSS, JS, images, or AI crawlers.',
    category: 'technical',
    readingTime: '6 min read',
    publishedOn: '2026-04-25',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'The default that works for most sites',
        body: 'Allow everything by default. Disallow admin, dashboard, account, and internal paths. Reference your sitemap. Do not block CSS, JS, or images — search engines need those to render and understand your pages.',
      },
      {
        heading: 'Do not use Disallow: /',
        body: 'A site-wide disallow blocks all crawling. It is appropriate for staging environments, not for production sites. If you find yourself reaching for it on production, something else is wrong.',
      },
      {
        heading: 'AI bots — be intentional',
        body: 'You can disallow or allow specific AI crawlers: GPTBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended, CCBot. The right answer depends on your business — there is no universal correct policy. Document the decision.',
      },
      {
        heading: 'Testing robots.txt',
        body: 'Use the robots.txt tester in Search Console. Make sure your public URLs return "Allowed" and your private paths return "Blocked".',
      },
    ],
    takeaways: [
      'Allow by default. Block only what must be blocked.',
      'Do not use Disallow: / on production.',
      'Be intentional about AI bots and document the decision.',
    ],
    references: [
      { label: 'Google Search Central — robots.txt', href: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro' },
    ],
  },
  {
    slug: 'google-search-console-setup',
    title: 'Google Search Console setup: the right way',
    description:
      'How to verify, configure, and actually use Google Search Console — the single most important SEO tool.',
    category: 'measurement',
    readingTime: '7 min read',
    publishedOn: '2026-05-02',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Why Search Console matters',
        body: 'Search Console is the only first-party source of truth for how Google indexes and ranks your site. Third-party rank tracking is a derivative. If you only set up one tool, set up Search Console.',
      },
      {
        heading: 'Verification',
        body: 'Domain verification is preferred over URL-prefix verification because it covers all protocol variants (http/https, www/non-www). DNS verification is the most robust method.',
      },
      {
        heading: 'Sitemap submission',
        body: 'Submit your sitemap in Search Console after every meaningful change. Submission is not strictly required but speeds up discovery.',
      },
      {
        heading: 'What to monitor',
        body: 'Performance (queries, pages, countries, devices), coverage (indexed vs excluded), enhancements (structured data), and links. Review weekly, not daily. Daily review produces noise-driven decisions.',
      },
      {
        heading: 'Common mistakes',
        body: 'Treating Search Console as a rank tracker (it is a discovery tool), ignoring the coverage report, and not setting up email alerts for critical issues like security or manual actions.',
      },
    ],
    takeaways: [
      'Search Console is the only first-party source of truth.',
      'Domain verification over URL-prefix.',
      'Weekly review, not daily.',
    ],
    references: [
      { label: 'Google Search Console Help', href: 'https://support.google.com/webmasters' },
    ],
  },
  {
    slug: 'measuring-seo-roi',
    title: 'Measuring SEO ROI without lying to yourself',
    description:
      'How to attribute revenue to organic search in a way that holds up to CFO scrutiny — without overclaiming.',
    category: 'measurement',
    readingTime: '10 min read',
    publishedOn: '2026-05-10',
    reviewedOn: '2026-05-20',
    sections: [
      {
        heading: 'Why SEO attribution is hard',
        body: 'Search touches every funnel stage. A user may discover you through organic search, leave, return via direct, and convert via email. Last-click attribution under-counts organic. Multi-touch attribution models are better but require careful model selection.',
      },
      {
        heading: 'A defensible framework',
        body: 'Measure three things in parallel: organic traffic volume (Search Console), organic conversion rate (analytics), and organic-attributed revenue (analytics, with attribution model documented). Report all three. Let stakeholders draw their own conclusions about the story.',
      },
      {
        heading: 'Counterfactual discipline',
        body: 'Every claim about SEO ROI implicitly assumes a counterfactual: what would have happened without SEO. Be honest about the limits of this. A 30 percent organic traffic lift on a low-traffic page is meaningless; a 30 percent lift on a high-traffic page is material.',
      },
      {
        heading: 'Avoiding vanity metrics',
        body: 'Domain authority, keyword rankings, and raw traffic are inputs, not outcomes. The outcome is qualified pipeline and revenue. Always report both.',
      },
      {
        heading: 'Reporting cadence',
        body: 'Weekly for operational metrics (indexing, crawl errors, technical health). Monthly for performance metrics (traffic, conversions). Quarterly for strategy metrics (ROI, market share). Daily or weekly reporting on traffic alone produces reactive decisions.',
      },
    ],
    takeaways: [
      'Measure traffic, conversion, and revenue in parallel.',
      'Avoid vanity metrics as primary KPIs.',
      'Match reporting cadence to decision cadence.',
    ],
    references: [
      { label: 'Google Analytics 4 Attribution', href: 'https://support.google.com/analytics/answer/1662518' },
    ],
  },
];

export function findResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

export const RESOURCE_CATEGORIES: ReadonlyArray<{
  slug: Resource['category'];
  name: string;
  description: string;
}> = [
  {
    slug: 'fundamentals',
    name: 'Fundamentals',
    description: 'Foundational guides for teams new to search engine optimization.',
  },
  {
    slug: 'technical',
    name: 'Technical',
    description: 'Crawl, render, index, and structured data engineering.',
  },
  {
    slug: 'content',
    name: 'Content',
    description: 'Keyword research, on-page optimization, and editorial strategy.',
  },
  {
    slug: 'local',
    name: 'Local',
    description: 'Google Business Profile, NAP, and local-intent pages.',
  },
  {
    slug: 'link',
    name: 'Link',
    description: 'Digital PR and durable link earning.',
  },
  {
    slug: 'measurement',
    name: 'Measurement',
    description: 'Attribution, ROI, and reporting cadence.',
  },
  {
    slug: 'ai',
    name: 'AI Search',
    description: 'Optimization for AI-powered search experiences.',
  },
];