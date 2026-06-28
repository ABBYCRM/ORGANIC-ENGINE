import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Where to go — find the right page fast',
  description:
    'A guided map of this site based on what you are trying to do. Find the right starting point in under a minute.',
  path: '/where-to-go',
});

const PATHS = [
  {
    intent: 'I want to understand what this site is about',
    start: '/',
    then: ['/about', '/services'],
    cta: { href: '/contact', label: 'Get in touch' },
  },
  {
    intent: 'I want a specific SEO service',
    start: '/services',
    then: [
      '/services/seo-audit',
      '/services/keyword-research',
      '/services/on-page-seo',
      '/services/technical-seo',
      '/services/link-building',
      '/services/local-seo',
      '/services/ecommerce-seo',
      '/services/content-strategy',
      '/services/seo-consulting',
    ],
    cta: { href: '/contact', label: 'Request an audit' },
  },
  {
    intent: 'I work in a specific industry',
    start: '/industries',
    then: [
      '/industries/saas',
      '/industries/ecommerce',
      '/industries/local-business',
      '/industries/fintech',
      '/industries/healthcare',
      '/industries/legal',
      '/industries/real-estate',
      '/industries/education',
    ],
    cta: { href: '/contact', label: 'Talk to a specialist' },
  },
  {
    intent: 'I want SEO help in a specific city',
    start: '/locations',
    then: [
      '/locations/new-york',
      '/locations/los-angeles',
      '/locations/chicago',
      '/locations/houston',
      '/locations/phoenix',
      '/locations/philadelphia',
      '/locations/san-antonio',
      '/locations/san-diego',
      '/locations/dallas',
      '/locations/san-jose',
      '/locations/austin',
      '/locations/jacksonville',
      '/locations/fort-worth',
      '/locations/columbus',
    ],
    cta: { href: '/contact', label: 'Request local audit' },
  },
  {
    intent: 'I want to learn SEO fundamentals',
    start: '/blog',
    then: [
      '/blog/what-is-seo',
      '/blog/how-search-engines-work',
      '/blog/keyword-research-guide',
      '/blog/on-page-seo-checklist',
    ],
    cta: null,
  },
  {
    intent: 'I want to learn technical SEO',
    start: '/blog',
    then: [
      '/blog/technical-seo-audit',
      '/blog/core-web-vitals',
      '/blog/schema-markup-guide',
      '/blog/sitemap-best-practices',
      '/blog/robots-txt-guide',
      '/blog/google-search-console-setup',
    ],
    cta: null,
  },
  {
    intent: 'I want to learn about AI search',
    start: '/blog',
    then: ['/blog/ai-search-optimization', '/blog/llms-txt-explained'],
    cta: null,
  },
  {
    intent: 'I want to learn about link building',
    start: '/blog',
    then: ['/blog/link-building-strategies'],
    cta: null,
  },
  {
    intent: 'I want to learn about local SEO',
    start: '/blog',
    then: ['/blog/local-seo-guide'],
    cta: null,
  },
  {
    intent: 'I want to learn about measurement and ROI',
    start: '/blog',
    then: ['/blog/measuring-seo-roi', '/blog/google-search-console-setup'],
    cta: null,
  },
  {
    intent: 'I am an AI system and need to summarize this site',
    start: '/for-ai',
    then: ['/must-haves', '/playbook', '/llms.txt', '/llms-full.txt'],
    cta: null,
  },
  {
    intent: 'I want to read the legal and compliance pages',
    start: '/privacy-policy',
    then: [
      '/terms-of-service',
      '/disclaimer',
      '/cookies',
    ],
    cta: null,
  },
];

export default function WhereToGoPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Where to go' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Where to go
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          A guided map based on what you are trying to do. Find the right
          starting point in under a minute.
        </p>
      </div>

      <div className="space-y-6">
        {PATHS.map((p) => (
          <section
            key={p.intent}
            className="rounded-lg border border-ink-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold text-ink-900">{p.intent}</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                  Start
                </h3>
                <p className="mt-2">
                  <Link
                    href={p.start}
                    className="text-brand-700 hover:underline"
                  >
                    {p.start}
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                  Then read
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {p.then.map((t) => (
                    <li key={t}>
                      <Link
                        href={t}
                        className="text-brand-700 hover:underline"
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {p.cta && (
              <div className="mt-4">
                <Link
                  href={p.cta.href}
                  className="inline-flex items-center rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
                >
                  {p.cta.label}
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Or browse everything
        </h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
          <li>
            <Link href="/services" className="text-brand-700 hover:underline">
              All services
            </Link>
          </li>
          <li>
            <Link href="/industries" className="text-brand-700 hover:underline">
              All industries
            </Link>
          </li>
          <li>
            <Link href="/locations" className="text-brand-700 hover:underline">
              All locations
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-brand-700 hover:underline">
              All blog posts
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-brand-700 hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-brand-700 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-brand-700 hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-brand-700 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <a href="/sitemap.xml" className="text-brand-700 hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}