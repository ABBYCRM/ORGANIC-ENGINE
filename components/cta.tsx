import Link from 'next/link';

export function CtaBanner({
  title = 'Ready to talk through your organic growth?',
  body = 'We respond to every serious inquiry within two business days. No sales scripts, no fabricated case results — just a conversation about what would actually move the needle.',
  primaryHref = '/contact',
  primaryLabel = 'Request an audit',
  secondaryHref = '/services',
  secondaryLabel = 'See services',
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="not-prose my-12 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-700">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center rounded-md border border-ink-300 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}