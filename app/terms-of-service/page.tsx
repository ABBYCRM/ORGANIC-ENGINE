import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms of service',
  description:
    'The terms under which SEO Ranker provides services. Plain English, no hidden clauses.',
  path: '/terms-of-service',
});

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of service' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Terms of service
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Effective: 2026-06-27
        </p>
      </div>

      <section className="prose">
        <h2>Scope</h2>
        <p>
          These terms govern the use of this website. They do not govern
          specific service engagements — those are covered by separate
          written agreements.
        </p>

        <h2>Use of the site</h2>
        <p>
          You may use this site for informational purposes. You may not scrape
          it, attempt to disrupt it, or use it in any way that violates
          applicable law.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Content on this site is owned by SEO Ranker or used with permission.
          You may quote brief excerpts with attribution and a link back to the
          original page. You may not reproduce substantial portions without
          written permission.
        </p>

        <h2>No professional advice</h2>
        <p>
          Content on this site is for informational purposes only. It does
          not constitute legal, medical, financial, or other professional
          advice. Do not rely on it as a substitute for qualified
          professional consultation relevant to your specific situation.
        </p>

        <h2>No guarantees</h2>
        <p>
          We do not guarantee specific rankings, traffic levels, conversion
          rates, or revenue outcomes from any work we perform. Engagement
          agreements describe the work to be performed; outcomes depend on
          many factors outside our control.
        </p>

        <h2>Third-party references</h2>
        <p>
          References to third-party products, services, platforms, or
          trademarks are for informational purposes only and do not imply
          endorsement.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, SEO Ranker is not liable for
          any indirect, incidental, or consequential damages arising from
          your use of this site.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction in which
          the practice is incorporated. Disputes will be resolved in that
          jurisdiction.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. The effective date at
          the top of the page reflects the most recent revision.
        </p>
      </section>
    </div>
  );
}