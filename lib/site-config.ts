// Central site config — all metadata derives from here.
// Production domain is intentionally read from env so Render env-var
// configuration can swap it without code changes.

export const SITE = {
  name: 'Organic Engine',
  shortName: 'OrganicEngine',
  tagline: 'Practical SEO services for teams that want durable organic growth.',
  description:
    'Organic Engine is an independent search engine optimization practice. We run technical audits, build content systems, and engineer link profiles that compound over time — without shortcuts.',
  // Domain used for canonical URLs, sitemap, OG, llms.txt. Override with
  // NEXT_PUBLIC_SITE_URL on Render. Defaults to the deployed onrender.com
  // subdomain so the deploy is self-consistent before a real domain is wired.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://organic-engine.onrender.com',
  // Public contact email. No phone numbers are fabricated — see compliance notes.
  email: 'hello@organic-engine.onrender.com',
  // Founding year is intentionally omitted — do not fabricate history.
  // Locale / region the practice primarily serves.
  locale: 'en-US',
  // Time the llms.txt was last refreshed; updated at build time.
  buildDate: process.env.BUILD_DATE || new Date().toISOString().slice(0, 10),
  // Social profiles intentionally omitted — do not fabricate.
  twitterHandle: undefined as string | undefined,
} as const;

export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Locations', href: '/locations' },
  { label: 'Resources', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV: ReadonlyArray<{
  label: string;
  href: string;
  group: 'company' | 'services' | 'resources' | 'legal';
}> = [
  { label: 'About', href: '/about', group: 'company' },
  { label: 'Contact', href: '/contact', group: 'company' },
  { label: 'Pricing', href: '/pricing', group: 'company' },
  { label: 'FAQ', href: '/faq', group: 'company' },
  { label: 'SEO Audit', href: '/services/seo-audit', group: 'services' },
  { label: 'Keyword Research', href: '/services/keyword-research', group: 'services' },
  { label: 'On-Page SEO', href: '/services/on-page-seo', group: 'services' },
  { label: 'Technical SEO', href: '/services/technical-seo', group: 'services' },
  { label: 'Link Building', href: '/services/link-building', group: 'services' },
  { label: 'Local SEO', href: '/services/local-seo', group: 'services' },
  { label: 'Blog', href: '/blog', group: 'resources' },
  { label: 'Sitemap', href: '/sitemap.xml', group: 'resources' },
  { label: 'llms.txt', href: '/llms.txt', group: 'resources' },
  { label: 'Privacy Policy', href: '/privacy-policy', group: 'legal' },
  { label: 'Terms of Service', href: '/terms-of-service', group: 'legal' },
  { label: 'Disclaimer', href: '/disclaimer', group: 'legal' },
  { label: 'Cookies', href: '/cookies', group: 'legal' },
];

// Use this as the source-of-truth base path for any absolute URL.
export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}