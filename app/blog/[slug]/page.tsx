import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { JsonLd } from '@/components/json-ld';
import {
  buildMetadata,
  breadcrumbJsonLd,
  articleJsonLd,
} from '@/lib/seo';
import { RESOURCES, findResource } from '@/content/resources';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const res = findResource(params.slug);
  if (!res) return {};
  return buildMetadata({
    title: res.title,
    description: res.description,
    path: `/blog/${res.slug}`,
    type: 'article',
    publishedTime: res.publishedOn,
    modifiedTime: res.reviewedOn,
  });
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = findResource(params.slug);
  if (!res) notFound();

  return (
    <article className="space-y-10">
      <div>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/blog' },
            { label: res.title },
          ]}
        />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          {res.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">{res.description}</p>
        <p className="mt-3 text-sm text-ink-500">
          {res.readingTime} · Published {res.publishedOn} · Reviewed{' '}
          {res.reviewedOn}
        </p>
      </div>

      <div className="prose">
        {res.sections.map((s, i) => (
          <div key={i}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </div>
        ))}

        <h2>Key takeaways</h2>
        <ul>
          {res.takeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {res.references.length > 0 && (
          <>
            <h2>References</h2>
            <ul>
              {res.references.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Related guides
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {RESOURCES.filter((r) => r.slug !== res.slug)
            .filter((r) => r.category === res.category)
            .slice(0, 3)
            .map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
              >
                {r.title}
              </Link>
            ))}
        </div>
      </section>

      <CtaBanner
        title="Want senior SEO judgment on your program?"
        body="We embed with client teams as fractional senior SEO leadership. The first conversation is a working session, not a sales call."
      />

      <JsonLd
        data={[
          articleJsonLd({
            title: res.title,
            description: res.description,
            path: `/blog/${res.slug}`,
            publishedOn: res.publishedOn,
            reviewedOn: res.reviewedOn,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/blog' },
            { name: res.title, path: `/blog/${res.slug}` },
          ]),
        ]}
      />
    </article>
  );
}