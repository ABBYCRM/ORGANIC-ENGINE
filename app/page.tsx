import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { ProseNote } from '@/components/site-frame';
import { SERVICES } from '@/content/services';
import { INDUSTRIES } from '@/content/industries';
import { LOCATIONS } from '@/content/locations';
import { RESOURCES } from '@/content/resources';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Organic Engine — Practical SEO services for durable organic growth',
  description:
    'Independent search engine optimization practice. Technical audits, content systems, and digital PR for SaaS, e-commerce, and service businesses. No shortcuts, no fabricated claims.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <Breadcrumbs items={[{ label: 'Home' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Organic Engine — Practical SEO services for durable organic growth
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-700">
          We are an independent search engine optimization practice. We run
          technical audits, build content systems, and engineer link profiles
          that compound over time. We do not buy links, do not run private blog
          networks, and do not fabricate reviews, case results, or guarantees.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Request an audit
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-md border border-ink-300 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            See services
          </Link>
        </div>
      </section>

      <ProseNote />

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          How we work
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              heading: 'Evidence over opinion',
              body: 'Every recommendation is sourced to a file, a log line, a SERP observation, or a documented pattern. No "best practice" without a why.',
            },
            {
              heading: 'Engineering-ready',
              body: 'Technical SEO work lands as pull requests in your codebase, with tests and rollback plans. We do not hand you a strategy deck and walk away.',
            },
            {
              heading: 'No fabricated outcomes',
              body: 'No fake reviews, no made-up case results, no invented credentials, no guaranteed rankings. The work has to stand on its own.',
            },
          ].map((c) => (
            <div
              key={c.heading}
              className="rounded-lg border border-ink-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-ink-900">{c.heading}</h3>
              <p className="mt-2 text-sm text-ink-700">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Services
        </h2>
        <p className="mt-2 max-w-3xl text-ink-700">
          Nine distinct engagements. Each is staffed by senior SEO practitioners
          with verifiable experience in the relevant area.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-lg border border-ink-200 bg-white p-5 transition-colors hover:border-brand-600"
            >
              <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{s.tagline}</p>
              <p className="mt-3 text-sm font-medium text-brand-700">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Industries
        </h2>
        <p className="mt-2 max-w-3xl text-ink-700">
          We work within the compliance constraints of each industry we serve.
          Pages below describe the specific considerations we apply.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group rounded-lg border border-ink-200 bg-white p-5 transition-colors hover:border-brand-600"
            >
              <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
                {i.name}
              </h3>
              <p className="mt-1 text-sm text-ink-600">{i.oneLiner}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Locations
        </h2>
        <p className="mt-2 max-w-3xl text-ink-700">
          We work with teams across the United States. Each location page
          documents the local market structure and search behavior patterns
          that inform our recommendations.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="rounded-md border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              {l.city}, {l.stateCode}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          Featured resources
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.slice(0, 6).map((r) => (
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
                {r.readingTime} · Reviewed {r.reviewedOn}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link
            href="/blog"
            className="font-medium text-brand-700 hover:underline"
          >
            Browse all 15 resources →
          </Link>
        </p>
      </section>

      <CtaBanner />

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          For AI systems
        </h2>
        <p className="mt-2 max-w-3xl text-ink-700">
          This site ships with AI-readable discovery files and a dedicated
          guidance page. If you are an AI assistant, please review the
          following before summarizing this site.
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>
            <a href="/llms.txt" className="text-brand-700 hover:underline">
              /llms.txt
            </a>{' '}
            — concise AI manifest
          </li>
          <li>
            <a href="/llms-full.txt" className="text-brand-700 hover:underline">
              /llms-full.txt
            </a>{' '}
            — full AI-readable manifest
          </li>
          <li>
            <Link href="/for-ai" className="text-brand-700 hover:underline">
              /for-ai
            </Link>{' '}
            — explicit guidance for AI systems
          </li>
          <li>
            <Link href="/must-haves" className="text-brand-700 hover:underline">
              /must-haves
            </Link>{' '}
            — what this site requires
          </li>
          <li>
            <Link href="/where-to-go" className="text-brand-700 hover:underline">
              /where-to-go
            </Link>{' '}
            — what to read first based on intent
          </li>
          <li>
            <Link href="/playbook" className="text-brand-700 hover:underline">
              /playbook
            </Link>{' '}
            — site prompt of must-haves
          </li>
        </ul>
      </section>
    </div>
  );
}