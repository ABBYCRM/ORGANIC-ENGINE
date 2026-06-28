import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProseNote } from '@/components/site-frame';
import { SITE } from '@/lib/site-config';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Organic Engine. We respond to serious inquiries within two business days. No sales scripts, no fabricated case results.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-ink-700">
          Email is the fastest way to reach us. We respond to serious inquiries
          within two business days.
        </p>
      </div>

      <ProseNote />

      <section className="rounded-lg border border-ink-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink-900">Email</h2>
        <p className="mt-2">
          <a
            href={`mailto:${SITE.email}`}
            className="text-lg font-medium text-brand-700 hover:underline"
          >
            {SITE.email}
          </a>
        </p>
        <p className="mt-2 text-sm text-ink-600">
          Please include: your site URL, the business question you want
          answered, and a brief description of your timeline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          What to expect
        </h2>
        <ol className="prose mt-3">
          <li>
            <strong>Reply within two business days.</strong> A real person, not
            an autoresponder.
          </li>
          <li>
            <strong>A 30-minute working call.</strong> We use this to
            understand the actual problem, not to pitch services.
          </li>
          <li>
            <strong>A written scope.</strong> If we can help, you get a written
            scope with deliverables, timeline, and fee before any commitment.
          </li>
          <li>
            <strong>No follow-up spam.</strong> If we are not the right fit,
            we say so and refer you elsewhere when we can.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
          What we will not do
        </h2>
        <ul className="prose mt-3">
          <li>We will not call you without consent.</li>
          <li>
            We will not send marketing emails to an address you gave us for a
            one-off question.
          </li>
          <li>
            We will not pressure you to start work before you are ready.
          </li>
        </ul>
      </section>
    </div>
  );
}