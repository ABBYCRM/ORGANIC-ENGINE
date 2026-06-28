import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { INDUSTRIES } from '@/content/industries';

export const metadata = buildMetadata({
  title: 'SEO for industries',
  description:
    'SEO work tailored to the compliance and search-behavior patterns of specific industries: SaaS, e-commerce, local business, fintech, healthcare, legal, real estate, education.',
  path: '/industries',
});

export default function IndustriesIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO for industries
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          Each industry has distinct search behavior patterns and compliance
          constraints. Pages below describe what we apply when working in
          each.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((i) => (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            className="group rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-brand-600"
          >
            <h2 className="text-xl font-semibold text-ink-900 group-hover:text-brand-700">
              {i.name}
            </h2>
            <p className="mt-2 text-sm text-ink-700">{i.oneLiner}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}