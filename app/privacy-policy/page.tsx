import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy policy',
  description:
    'How Organic Engine handles personal information collected through this site. Minimal data, no third-party tracking we cannot defend.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy policy' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Privacy policy
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          Effective: 2026-06-27
        </p>
      </div>

      <section className="prose">
        <h2>What this policy covers</h2>
        <p>
          This policy describes how Organic Engine handles personal information
          collected through this website. It does not describe how we handle
          client data — that is governed by individual engagement agreements.
        </p>

        <h2>What we collect</h2>
        <p>
          When you submit a contact form or email us, we receive whatever
          information you choose to provide (typically your name, email
          address, and message). We do not collect sensitive categories of
          personal information through this site.
        </p>

        <h2>What we do not collect</h2>
        <p>
          We do not deploy third-party advertising trackers on this site. We
          do not use retargeting pixels. We do not run analytics tools that
          fingerprint users across sites. Server logs are kept for
          operational purposes and are not used for tracking.
        </p>

        <h2>How we use the information</h2>
        <p>
          We use the information you provide to respond to your inquiry. We do
          not sell, rent, or share it with third parties for marketing
          purposes. We do not add you to a marketing list without explicit
          consent.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We retain inquiry emails for up to 24 months for operational
          purposes, then delete them. You can request earlier deletion at any
          time.
        </p>

        <h2>Your rights</h2>
        <p>
          You can request access, correction, or deletion of any personal
          information we hold about you. Email us and we will respond within
          30 days.
        </p>

        <h2>Cookies</h2>
        <p>
          This site does not set tracking cookies. Session cookies may be set
          by the hosting provider for load balancing; those expire when you
          close your browser.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We will update this page if our practices change. The effective date
          at the top of the page reflects the most recent revision.
        </p>
      </section>
    </div>
  );
}