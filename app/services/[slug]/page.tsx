import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { JsonLd } from '@/components/json-ld';
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from '@/lib/seo';
import { SERVICES, findService } from '@/content/services';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = findService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} — what it is and what it is not`,
    description: service.summary,
    path: `/services/${service.slug}`,
    type: 'article',
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = findService(params.slug);
  if (!service) notFound();

  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]}
        />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          {service.name}
        </h1>
        <p className="mt-3 max-w-3xl text-xl text-ink-700">{service.tagline}</p>
        <p className="mt-3 max-w-3xl text-base text-ink-600">{service.summary}</p>
      </div>

      <section className="prose">
        <h2>Overview</h2>
        {service.sections.map((s, i) => (
          <div key={i}>
            <h3>{s.heading}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink-900">Deliverables</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden="true" className="text-accent-500">
                  ✓
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink-900">Ideal for</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            {service.idealFor.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden="true" className="text-accent-500">
                  ✓
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-ink-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-ink-900">What we need from you</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-700">
          {service.prerequisites.map((d) => (
            <li key={d} className="flex gap-2">
              <span aria-hidden="true" className="text-ink-500">
                ·
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-ink-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-ink-900">Outcome</h2>
        <p className="mt-2 text-ink-700">{service.outcome}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Frequently asked questions
        </h2>
        <dl className="mt-4 divide-y divide-ink-200 rounded-lg border border-ink-200 bg-white">
          {service.faqs.map((f) => (
            <div key={f.q} className="p-6">
              <dt className="text-base font-semibold text-ink-900">{f.q}</dt>
              <dd className="mt-2 text-ink-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Related services
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
              >
                {s.name}
              </Link>
            ))}
        </div>
      </section>

      <CtaBanner
        title={`Ready to scope a ${service.name.toLowerCase()} engagement?`}
        body="Email us with a brief description of your site and the question you want answered. We respond within two business days."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.summary,
            path: `/services/${service.slug}`,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          faqJsonLd(service.faqs),
        ]}
      />
    </div>
  );
}