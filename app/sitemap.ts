import type { MetadataRoute } from 'next';
import { SERVICES } from '@/content/services';
import { INDUSTRIES } from '@/content/industries';
import { LOCATIONS } from '@/content/locations';
import { RESOURCES } from '@/content/resources';
import { SITE, absoluteUrl } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const buildDate = now.toISOString();

  // Static core pages
  const staticPaths: ReadonlyArray<{ path: string; priority: number }> = [
    { path: '/', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/industries', priority: 0.9 },
    { path: '/locations', priority: 0.9 },
    { path: '/pricing', priority: 0.8 },
    { path: '/about', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/blog', priority: 0.8 },
    { path: '/for-ai', priority: 0.6 },
    { path: '/must-haves', priority: 0.6 },
    { path: '/where-to-go', priority: 0.6 },
    { path: '/playbook', priority: 0.7 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 },
    { path: '/disclaimer', priority: 0.3 },
    { path: '/cookies', priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: p.priority,
  }));

  // Dynamic service pages
  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic industry pages
  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: absoluteUrl(`/industries/${i.slug}`),
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic location pages
  const locationEntries: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: absoluteUrl(`/locations/${l.slug}`),
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Resource pages
  const resourceEntries: MetadataRoute.Sitemap = RESOURCES.map((r) => ({
    url: absoluteUrl(`/blog/${r.slug}`),
    lastModified: r.reviewedOn,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...resourceEntries,
  ];
}