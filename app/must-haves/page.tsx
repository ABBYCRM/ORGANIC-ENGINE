import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Must-haves — what this site requires of itself',
  description:
    'The non-negotiable requirements this site holds itself to. SEO, AI discoverability, accessibility, content, compliance. Audit your own site against the same list.',
  path: '/must-haves',
});

const MUST_HAVES = [
  {
    category: 'SEO infrastructure',
    items: [
      'Unique title tag on every public page',
      'Unique meta description on every public page',
      'Exactly one H1 per public page',
      'Logical H1 → H2 → H3 → H4+ hierarchy with no skipped levels',
      'Canonical URL on every public page pointing to the final intended URL',
      'Open Graph tags (title, description, URL, type, image) on every page',
      'Twitter/X card tags on every page',
      'Robots meta tag correctly set (no accidental noindex on public pages)',
      'Descriptive URLs (no random IDs, no parameter soup)',
      'Descriptive image alt text on informative images',
    ],
  },
  {
    category: 'Technical SEO files',
    items: [
      '/robots.txt returns HTTP 200 and references /sitemap.xml',
      '/sitemap.xml returns HTTP 200 and includes all public indexable pages',
      '/sitemap.xml excludes private, admin, account, and noindex pages',
      'robots.txt does not block CSS, JS, images, or fonts',
      'robots.txt does not use Disallow: / on production',
      'Public pages are not accidentally noindexed',
      'Private pages are noindexed or blocked',
    ],
  },
  {
    category: 'AI discoverability',
    items: [
      '/llms.txt returns HTTP 200 and is accurate',
      '/llms.txt references the sitemap',
      'Crawler policy is explicit and intentional',
      'GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended are addressed',
      'Structured data is present on appropriate pages',
      'Disclaimers are preserved',
      'No fabricated credentials, reviews, ratings, or guarantees',
    ],
  },
  {
    category: 'Structured data',
    items: [
      'JSON-LD is valid JSON (parses without error)',
      'Schema types match page content',
      'Organization schema on the site root',
      'WebSite schema with potentialAction when search is useful',
      'BreadcrumbList schema where breadcrumbs exist',
      'FAQPage schema where FAQs are visible',
      'Article schema on resource pages',
      'No fake ratings, no fake reviews, no fabricated aggregate scores',
    ],
  },
  {
    category: 'Information architecture',
    items: [
      'Important pages reachable within 3 clicks of homepage',
      'No orphan public pages',
      'Main navigation includes the most important hubs',
      'Footer links to trust, contact, sitemap, privacy, terms, disclaimers',
      'Breadcrumbs exist on category and subcategory pages',
      'Category hubs link to child pages',
      'Child pages link back to parent hubs',
      'Related pages link to each other naturally',
    ],
  },
  {
    category: 'Content quality',
    items: [
      'No lorem ipsum',
      'No placeholder copy',
      'No fake testimonials, fake reviews, fake case results',
      'No unsupported statistics',
      'No keyword stuffing',
      'No doorway pages',
      'No duplicate pages with only swapped names',
      'Unique H1 across the site',
      'Substantive intro on every public page',
      'FAQs are real, not invented',
    ],
  },
  {
    category: 'Accessibility',
    items: [
      'Skip-to-main-content link',
      'Single H1 per page that describes the page topic',
      'Visible focus indicators',
      'Color contrast meets WCAG AA',
      'Form inputs have associated labels',
      'Images have meaningful alt text or empty alt for decorative images',
      'Semantic HTML used appropriately (header, main, nav, footer, article, section)',
    ],
  },
  {
    category: 'Performance',
    items: [
      'Lazy loading for non-critical images',
      'Width and height on images to prevent layout shift',
      'No render-blocking resources where avoidable',
      'Reasonable font loading strategy',
      'No unnecessary third-party scripts',
      'Mobile responsive layout with no horizontal overflow',
    ],
  },
  {
    category: 'Compliance',
    items: [
      'No legal advice presented as legal advice',
      'No medical advice presented as medical advice',
      'No financial advice presented as financial advice',
      'Privacy policy present and accurate',
      'Terms of service present and accurate',
      'Disclaimer present where claims could be misread',
      'No contact forms that imply consent to calls/texts without explicit consent language',
      'No fabricated customer logos, awards, or certifications',
    ],
  },
  {
    category: 'Verification',
    items: [
      'Build succeeds (npm run build)',
      'TypeScript typecheck passes (npm run typecheck)',
      'Lint passes (npm run lint)',
      'Playwright validation runs against the built site',
      'No console errors on public pages',
      'No broken internal links',
      'Sitemap, robots, and llms.txt are reachable',
      'JSON-LD validates as JSON',
    ],
  },
];

export default function MustHavesPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Must-haves' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Must-haves
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          The non-negotiable requirements this site holds itself to. Use this
          list to audit your own site. Every item below is checked in this
          site's build, lint, and Playwright validation.
        </p>
      </div>

      <section className="rounded-lg border border-brand-200 bg-brand-50 p-6">
        <h2 className="text-xl font-semibold text-ink-900">
          How to use this list
        </h2>
        <ol className="mt-3 space-y-2 text-ink-800">
          <li>
            <strong>1.</strong> Walk through each category.
          </li>
          <li>
            <strong>2.</strong> For each item, verify your site meets it — not
            "we plan to" or "we should", but verified today.
          </li>
          <li>
            <strong>3.</strong> If any item fails, prioritize it. Most SEO
            failures come from a small number of these checks being violated.
          </li>
          <li>
            <strong>4.</strong> Re-audit quarterly. Conditions change.
          </li>
        </ol>
      </section>

      <div className="space-y-10">
        {MUST_HAVES.map((m) => (
          <section key={m.category}>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
              {m.category}
            </h2>
            <ul className="mt-4 space-y-2 rounded-lg border border-ink-200 bg-white p-6">
              {m.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink-700">
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-sm border border-ink-300 bg-white text-xs text-brand-700"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Related guidance
        </h2>
        <ul className="mt-3 space-y-1 text-sm">
          <li>
            <Link href="/where-to-go" className="text-brand-700 hover:underline">
              /where-to-go
            </Link>{' '}
            — what to read first based on intent
          </li>
          <li>
            <Link href="/playbook" className="text-brand-700 hover:underline">
              /playbook
            </Link>{' '}
            — site prompt of must-haves
          </li>
          <li>
            <Link href="/for-ai" className="text-brand-700 hover:underline">
              /for-ai
            </Link>{' '}
            — explicit guidance for AI systems
          </li>
        </ul>
      </section>
    </div>
  );
}