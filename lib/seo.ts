import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site-config';

// Centralized metadata builder. Every page derives its metadata from here
// so titles, descriptions, canonicals, and OG tags are consistent.

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

export function buildMetadata(meta: PageMeta): Metadata {
  const url = absoluteUrl(meta.path);
  const ogImage = meta.image || '/og-default.svg';
  const canonical = url;
  const fullTitle = meta.title.includes(SITE.name)
    ? meta.title
    : `${meta.title} — ${SITE.name}`;
  const description =
    meta.description.length > 160
      ? meta.description.slice(0, 157) + '...'
      : meta.description;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      type: meta.type || 'website',
      locale: SITE.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(meta.publishedTime && { publishedTime: meta.publishedTime }),
      ...(meta.modifiedTime && { modifiedTime: meta.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: meta.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    other: {
      'theme-color': '#1e7df5',
    },
  };
}

export function siteJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      // No fabricated address, phone, founding date, or social profiles.
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      inLanguage: SITE.locale,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE.url}/search?q={search_term_string}`,
        // SearchAction is wired up but the /search route is intentionally
        // a simple on-page query — no fabricated internal search index.
        'query-input': 'required name=search_term_string',
      },
    },
  ];
}

export function breadcrumbJsonLd(
  crumbs: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqJsonLd(
  faqs: ReadonlyArray<{ q: string; a: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  publishedOn: string;
  reviewedOn: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.publishedOn,
    dateModified: opts.reviewedOn,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };
}

export function localBusinessJsonLd(opts: {
  city: string;
  state: string;
  path: string;
}) {
  // Intentionally NOT a LocalBusiness entity. We do not have a verified
  // physical address, phone, or hours. Marking this as LocalBusiness
  // would constitute a fabricated claim. Instead, we surface the location
  // page as an Article about local SEO services in the area.
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `SEO services in ${opts.city}, ${opts.state}`,
    about: {
      '@type': 'Place',
      name: `${opts.city}, ${opts.state}`,
    },
    url: absoluteUrl(opts.path),
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}