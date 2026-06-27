import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { JsonLd } from '@/components/json-ld';
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from '@/lib/seo';
import { LOCATIONS, findLocation } from '@/content/locations';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const loc = findLocation(params.slug);
  if (!loc) return {};
  return buildMetadata({
    title: `SEO services in ${loc.city}, ${loc.stateCode}`,
    description: `${loc.marketOverview.slice(0, 155)}...`,
    path: `/locations/${loc.slug}`,
    type: 'article',
  });
}

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = findLocation(params.slug);
  if (!loc) notFound();

  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: `${loc.city}, ${loc.stateCode}` },
          ]}
        />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO services in {loc.city}, {loc.stateCode}
        </h1>
        <p className="mt-3 max-w-3xl text-base text-ink-600">
          {loc.populationNote}
        </p>
      </div>

      <section className="prose">
        <h2>Market overview</h2>
        <p>{loc.marketOverview}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Districts and sub-markets
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {loc.districts.map((d) => (
            <div
              key={d.name}
              className="rounded-lg border border-ink-200 bg-white p-4"
            >
              <h3 className="text-base font-semibold text-ink-900">{d.name}</h3>
              <p className="mt-1 text-sm text-ink-600">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="prose">
        <h2>Local SEO notes</h2>
        {loc.localNotes.map((n, i) => (
          <div key={i}>
            <h3>{n.heading}</h3>
            <p>{n.body}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Frequently asked questions
        </h2>
        <dl className="mt-4 divide-y divide-ink-200 rounded-lg border border-ink-200 bg-white">
          {loc.faqs.map((f) => (
            <div key={f.q} className="p-6">
              <dt className="text-base font-semibold text-ink-900">{f.q}</dt>
              <dd className="mt-2 text-ink-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Other locations
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {LOCATIONS.filter((l) => l.slug !== loc.slug)
            .slice(0, 8)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
              >
                {l.city}, {l.stateCode}
              </Link>
            ))}
        </div>
      </section>

      <CtaBanner
        title={`Ready to talk about SEO in ${loc.city}?`}
        body={`Email us with a brief description of your business and the question you want answered about ${loc.city}'s market. We respond within two business days.`}
      />

      <JsonLd
        data={[
          localBusinessJsonLd({
            city: loc.city,
            state: loc.state,
            path: `/locations/${loc.slug}`,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            {
              name: `${loc.city}, ${loc.stateCode}`,
              path: `/locations/${loc.slug}`,
            },
          ]),
          faqJsonLd(loc.faqs),
        ]}
      />
    </div>
  );
}