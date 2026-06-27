import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Cookies',
  description:
    'What cookies this site uses (spoiler: essentially none). Why we made that choice, and what to do if your browser is misconfigured.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <div className="space-y-10">
      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cookies' }]} />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-900">
          Cookies
        </h1>
      </div>

      <section className="prose">
        <h2>Short version</h2>
        <p>
          This site does not set tracking cookies. We do not use third-party
          advertising trackers or retargeting pixels.
        </p>

        <h2>What is set</h2>
        <p>
          The hosting provider may set transient session cookies for load
          balancing. These expire when you close your browser. We do not
          control these cookies; refer to the hosting provider's
          documentation for details.
        </p>

        <h2>Why we made this choice</h2>
        <p>
          Most cookie banners on the web are a performative compliance
          gesture — they present users with a wall of toggles for tracking
          they cannot meaningfully evaluate. We chose not to participate in
          that pattern.
        </p>

        <h2>If you block cookies entirely</h2>
        <p>
          The site should continue to work. If you encounter a problem,
          please email us with the page URL and a description of the issue.
        </p>

        <h2>Third-party services that may set cookies</h2>
        <p>
          None. We do not embed third-party widgets, fonts, or analytics
          tools that set tracking cookies. If we add a service in the future,
          we will update this page before doing so.
        </p>
      </section>
    </div>
  );
}