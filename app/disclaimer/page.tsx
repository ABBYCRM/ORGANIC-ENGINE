import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'What SEO Ranker does not provide: legal advice, medical advice, financial advice, or guaranteed outcomes.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Disclaimer
        </h1>
      </div>

      <section className="prose">
        <h2>No professional advice</h2>
        <p>
          Content on this site is for informational and educational purposes
          only. It does not constitute legal, medical, financial, tax, or
          other professional advice. Do not rely on it as a substitute for
          qualified professional consultation relevant to your specific
          situation.
        </p>

        <h2>No attorney advertising</h2>
        <p>
          This site is not attorney advertising. Where we discuss SEO for the
          legal industry, we describe general best practices. We are not a
          law firm, do not provide legal services, and do not represent any
          client.
        </p>

        <h2>No medical or health advice</h2>
        <p>
          Where we discuss SEO for healthcare organizations, we describe
          general best practices for organic search in that vertical. We do
          not provide medical, health, or clinical advice.
        </p>

        <h2>No financial advice</h2>
        <p>
          Where we discuss SEO for fintech organizations, we describe general
          best practices. We do not provide investment, lending, tax, or
          other financial advice. Any financial product references are for
          illustrative purposes only.
        </p>

        <h2>No outcome guarantees</h2>
        <p>
          We do not guarantee specific search engine rankings, traffic levels,
          conversion rates, revenue, or any other measurable outcome from any
          work we perform. Engagement agreements describe the work to be
          performed; outcomes depend on factors outside our control.
        </p>

        <h2>No fabricated claims</h2>
        <p>
          We do not publish fabricated reviews, ratings, testimonials, case
          results, certifications, awards, or credentials. Where case data is
          referenced, it is sourced from verifiable client records with
          explicit permission.
        </p>

        <h2>Third-party references</h2>
        <p>
          References to third-party products, services, platforms, search
          engines, or trademarks are for informational purposes only and do
          not imply endorsement. Trademarks belong to their respective owners.
        </p>
      </section>
    </div>
  );
}