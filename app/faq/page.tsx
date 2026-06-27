import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { JsonLd } from '@/components/json-ld';
import { buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Frequently asked questions',
  description:
    'Honest answers to the questions we are asked most often about SEO services, pricing, timelines, and what we will and will not do.',
  path: '/faq',
});

const FAQS = [
  {
    q: 'Do you guarantee rankings, traffic, or revenue?',
    a: 'No. We guarantee the work — a defensible audit, content briefs, engineering-ready pull requests. We do not and cannot guarantee specific ranking, traffic, or revenue outcomes, because those depend on factors outside our control: how the work is implemented, competitor actions, market shifts, and platform changes. We will tell you what is realistic based on your specific situation.',
  },
  {
    q: 'How long until SEO shows results?',
    a: 'Realistic timelines are 3–6 months for the first measurable movement, 6–12 months for material traffic, and 12–24 months for compounding returns. Faster is possible but rare. If anyone is promising faster, they are either lying about the timeline or using tactics that will get you penalized.',
  },
  {
    q: 'Why do you not provide a price on the website?',
    a: 'Because pricing depends on site size, scope, and complexity. Ranges are listed on the Pricing page; final fees are scoped in writing before any commitment.',
  },
  {
    q: 'Do you buy links?',
    a: 'No. We do not buy links, run private blog networks, exchange links for ranking purposes, or use AI to mass-generate guest post pitches. If a tactic would fail a manual review by Google\'s spam policies, we do not use it.',
  },
  {
    q: 'Will you provide case studies?',
    a: 'Only with explicit client permission, and only with verifiable data. We do not publish case studies with numbers the client cannot defend, and we do not use "trusted by" logos without a signed release.',
  },
  {
    q: 'Do you do technical SEO or content SEO?',
    a: 'Both, and we believe the two are inseparable. Technical SEO without content is a foundation with no house. Content SEO without technical is a house with a cracked foundation. Our engagements cover both.',
  },
  {
    q: 'Can you help with a manual action or penalty recovery?',
    a: 'Yes, as a specific scoped engagement. Penalty recovery requires careful diagnosis, a remediation plan, and (in most cases) a reconsideration request. We do not promise recovery, only a defensible process.',
  },
  {
    q: 'Do you work with my CMS?',
    a: 'Probably. We work with WordPress, Shopify, BigCommerce, Magento, Webflow, Contentful, Sanity, Strapi, and custom platforms. If your platform has unusual constraints, we will tell you up front.',
  },
  {
    q: 'Will you work with my existing agency?',
    a: 'When roles are clearly defined, yes. We will tell you when the setup is not working — usually when both sides are doing the same job and stepping on each other.',
  },
  {
    q: 'How do you measure success?',
    a: 'Three metrics in parallel: organic traffic (Search Console), organic conversion rate (analytics), and organic-attributed revenue (analytics, attribution model documented). We report all three and let you draw the conclusion.',
  },
  {
    q: 'What if I disagree with a recommendation?',
    a: 'Push back. We are paid to apply senior SEO judgment, but you know your business better than we do. Most disagreements resolve to a better answer once both sides have explained their reasoning.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, mutually. Standard terms, no surprises.',
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Frequently asked questions
        </h1>
        <p className="mt-3 max-w-2xl text-ink-700">
          Honest answers to the questions we are asked most often. If your
          question is not here, email us and we will add it.
        </p>
      </div>

      <section>
        <dl className="divide-y divide-ink-200 rounded-lg border border-ink-200 bg-white">
          {FAQS.map((f) => (
            <div key={f.q} className="p-6">
              <dt className="text-lg font-semibold text-ink-900">{f.q}</dt>
              <dd className="mt-2 text-ink-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBanner />

      <JsonLd data={faqJsonLd(FAQS)} />
    </div>
  );
}