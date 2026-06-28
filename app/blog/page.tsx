import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { RESOURCES, RESOURCE_CATEGORIES } from '@/content/resources';

export const metadata = buildMetadata({
  title: 'SEO resources — guides and references',
  description:
    'Fifteen SEO guides covering fundamentals, technical SEO, content, local SEO, link building, measurement, and AI search optimization.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO resources
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">
          Fifteen grounded guides written by practitioners. Each one is dated,
          reviewed, and references primary sources where applicable.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Browse by category
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CATEGORIES.map((c) => (
            <div
              key={c.slug}
              className="rounded-lg border border-ink-200 bg-white p-5"
            >
              <h3 className="text-base font-semibold text-ink-900">{c.name}</h3>
              <p className="mt-1 text-sm text-ink-600">{c.description}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {RESOURCES.filter((r) => r.category === c.slug).map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="text-brand-700 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          All guides
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="group rounded-lg border border-ink-200 bg-white p-5 transition-colors hover:border-brand-600"
            >
              <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{r.description}</p>
              <p className="mt-3 text-xs text-ink-500">
                {r.readingTime} · Published {r.publishedOn} · Reviewed{' '}
                {r.reviewedOn}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}