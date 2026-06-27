import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { ProseNote } from '@/components/site-frame';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Pricing',
  description:
    'How SEO Ranker prices engagements. Audit fees, retainer ranges, and what is included. No surprise invoices.',
  path: '/pricing',
});

const TIERS = [
  {
    name: 'Audit',
    description: 'A scoped technical and on-page audit with a written report and walkthrough.',
    fee: 'Fixed fee',
    range: '$4,500 – $14,000',
    includes: [
      'Written audit report (PDF, 30–80 pages)',
      'Findings spreadsheet with severity and effort',
      '60-minute recorded walkthrough',
      'Two rounds of clarification email support',
    ],
    bestFor: 'Teams that need a second pair of expert eyes before committing engineering time.',
  },
  {
    name: 'Sprint',
    description: 'A scoped piece of work — on-page rewrite, schema deployment, link-earning campaign.',
    fee: 'Fixed fee',
    range: '$6,000 – $24,000 per sprint',
    includes: [
      'Written scope and deliverables',
      'Senior SEO + specialist execution',
      'Mid-sprint and end-of-sprint reporting',
      'Two weeks of post-sprint email support',
    ],
    bestFor: 'Teams with a specific, well-defined piece of work to ship.',
  },
  {
    name: 'Retainer',
    description: 'Ongoing senior SEO guidance — by the week or month.',
    fee: 'Monthly',
    range: '$7,500 – $18,000 per month',
    includes: [
      'Dedicated senior SEO attention',
      'Weekly written status update',
      'Monthly decision summary (Loom)',
      'On-demand Slack/Teams availability',
    ],
    bestFor: 'Teams that need senior SEO judgment without a full-time hire.',
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Pricing
        </h1>
        <p className="mt-3 max-w-2xl text-ink-700">
          Engagements are priced in writing before work begins. The ranges below
          are typical — final fees depend on site size, scope, and complexity.
        </p>
      </div>

      <ProseNote />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border border-ink-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold text-ink-900">{t.name}</h2>
            <p className="mt-1 text-sm text-ink-600">{t.description}</p>
            <p className="mt-4 text-xs uppercase tracking-wider text-ink-500">
              {t.fee}
            </p>
            <p className="mt-1 text-xl font-semibold text-ink-900">{t.range}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {t.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent-500">
                    ✓
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-600">
              <strong>Best for:</strong> {t.bestFor}
            </p>
          </div>
        ))}
      </section>

      <section className="prose">
        <h2>What is not in the ranges</h2>
        <p>
          Implementation work performed by our engineering partners is billed
          separately at their standard rates. Paid media, design, and content
          production by external vendors are not included unless explicitly
          scoped.
        </p>

        <h2>How we invoice</h2>
        <p>
          Audits and sprints: 50 percent on signing, 50 percent on delivery.
          Retainers: monthly in advance. Net 14. We accept ACH, wire, and
          major credit cards (with a 2.5 percent processing fee on cards).
        </p>

        <h2>No performance pricing</h2>
        <p>
          We do not accept payment tied to specific rankings, traffic, or
          revenue. Those structures create the wrong incentive and have
          produced widespread abuse in the industry. Our fee is for the work,
          not the outcome.
        </p>
      </section>

      <CtaBanner />
    </div>
  );
}