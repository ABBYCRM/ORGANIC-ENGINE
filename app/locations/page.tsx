import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { LOCATIONS } from '@/content/locations';

export const metadata = buildMetadata({
  title: 'SEO services by location',
  description:
    'Local SEO and organic growth work across major US metros. Each location page documents the local market structure and search behavior patterns.',
  path: '/locations',
});

export default function LocationsIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO services by location
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          Local market structure and search behavior differ by metro. Pages
          below describe what we apply when working in each.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((l) => (
          <Link
            key={l.slug}
            href={`/locations/${l.slug}`}
            className="group rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-brand-600"
          >
            <h2 className="text-xl font-semibold text-ink-900 group-hover:text-brand-700">
              {l.city}, {l.stateCode}
            </h2>
            <p className="mt-2 text-sm text-ink-700">
              {l.populationNote}
            </p>
            <p className="mt-4 text-sm font-medium text-brand-700">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}