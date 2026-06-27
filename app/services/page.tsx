import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { SERVICES } from '@/content/services';

export const metadata = buildMetadata({
  title: 'SEO services',
  description:
    'Nine distinct SEO engagements: audit, keyword research, on-page, technical, link building, local, e-commerce, content strategy, and consulting.',
  path: '/services',
});

export default function ServicesIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO services
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          Nine distinct engagements, each staffed by senior practitioners with
          verifiable experience in the relevant area.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-brand-600"
          >
            <h2 className="text-xl font-semibold text-ink-900 group-hover:text-brand-700">
              {s.name}
            </h2>
            <p className="mt-2 text-sm text-ink-700">{s.tagline}</p>
            <p className="mt-3 text-sm text-ink-600">{s.summary}</p>
            <p className="mt-4 text-sm font-medium text-brand-700">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}