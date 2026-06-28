import { Breadcrumbs } from '@/components/breadcrumbs';
import { CtaBanner } from '@/components/cta';
import { ProseNote } from '@/components/site-frame';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About the practice',
  description:
    'How Organic Engine operates — what we do, what we will not do, and how we engage with client teams.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          About the practice
        </h1>
      </div>

      <ProseNote />

      <section className="prose">
        <h2>What this practice is</h2>
        <p>
          Organic Engine is an independent search engine optimization practice. We
          are a services business, not a product. Our deliverables are audits,
          written reports, content briefs, engineering-ready pull requests, and
          senior SEO guidance embedded with client teams.
        </p>

        <h2>How we engage</h2>
        <p>
          Most engagements start with an audit and evolve into either an
          ongoing retainer or a series of scoped sprints. We do not lock
          clients into long contracts. After the initial scope, most
          engagements run month-to-month with 14 days notice.
        </p>

        <h2>What we will not do</h2>
        <ul>
          <li>We will not buy links or run private blog networks.</li>
          <li>We will not fabricate reviews, ratings, testimonials, or case results.</li>
          <li>We will not promise specific rankings, traffic, or revenue outcomes.</li>
          <li>We will not produce AI-generated filler content for clients.</li>
          <li>We will not create doorway pages or pages with swapped city names.</li>
          <li>We will not characterize our content as legal, medical, or financial advice.</li>
        </ul>

        <h2>How we are compensated</h2>
        <p>
          Audits are fixed-fee. Retainers and sprints are scoped in writing
          before work begins. We invoice Net 14. We do not accept performance
          payments tied to specific rankings — those create the wrong incentive
          and have produced widespread abuse in the industry.
        </p>

        <h2>Where we work</h2>
        <p>
          The practice is remote-first and serves clients across the United
          States. On-site meetings are possible for engagements above a defined
          scope.
        </p>

        <h2>Who we work with</h2>
        <p>
          In-house marketing teams at software companies (Series A through
          public), e-commerce brands with 1,000+ SKUs, service businesses
          serving a defined geographic area, and healthcare, legal, fintech,
          real estate, and education companies with YMYL-aware content
          requirements.
        </p>
      </section>

      <CtaBanner
        title="Want to talk through your organic program?"
        body="We respond to every serious inquiry within two business days. The first conversation is a working session, not a sales call."
      />
    </div>
  );
}