import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { INDUSTRIES, findIndustry } from '@/content/industries';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = findIndustry(params.slug);
  if (!industry) return {};
  return buildMetadata({
    title: `SEO for ${industry.name}`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
    type: 'article',
  });
}

export default function IndustryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = findIndustry(params.slug);
  if (!industry) notFound();

  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: industry.name },
          ]}
        />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          SEO for {industry.name}
        </h1>
        <p className="mt-3 max-w-3xl text-xl text-ink-700">{industry.oneLiner}</p>
        <p className="mt-3 max-w-3xl text-base text-ink-600">{industry.summary}</p>
      </div>

      <section className="prose">
        <h2>Considerations</h2>
        {industry.considerations.map((c, i) => (
          <div key={i}>
            <h3>{c.heading}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-lg font-semibold text-amber-900">
          Compliance posture
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-amber-900">
          {industry.complianceNotes.map((c) => (
            <li key={c} className="flex gap-2">
              <span aria-hidden="true">!</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Frequently asked questions
        </h2>
        <dl className="mt-4 divide-y divide-ink-200 rounded-lg border border-ink-200 bg-white">
          {industry.faqs.map((f) => (
            <div key={f.q} className="p-6">
              <dt className="text-base font-semibold text-ink-900">{f.q}</dt>
              <dd className="mt-2 text-ink-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Related industries
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {INDUSTRIES.filter((i) => i.slug !== industry.slug)
            .slice(0, 4)
            .map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="rounded-md border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
              >
                {i.name}
              </Link>
            ))}
        </div>
      </section>

      <CtaBanner
        title={`Ready to talk about ${industry.name.toLowerCase()} SEO?`}
        body="We respond to serious inquiries within two business days. The first conversation is a working session, not a sales call."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: industry.name, path: `/industries/${industry.slug}` },
          ]),
          faqJsonLd(industry.faqs),
        ]}
      />
    </div>
  );
}