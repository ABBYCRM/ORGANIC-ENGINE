import Link from 'next/link';
import { FOOTER_NAV, SITE } from '@/lib/site-config';

const GROUP_LABELS: Record<string, string> = {
  company: 'Company',
  services: 'Services',
  resources: 'Resources',
  legal: 'Legal',
};

const GROUP_ORDER: ReadonlyArray<'company' | 'services' | 'resources' | 'legal'> = [
  'company',
  'services',
  'resources',
  'legal',
];

export function Footer() {
  const grouped = GROUP_ORDER.map((g) => ({
    group: g,
    items: FOOTER_NAV.filter((n) => n.group === g),
  }));

  return (
    <footer className="mt-24 border-t border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-ink-900">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-md bg-brand-600 text-white"
              >
                SR
              </span>
              <span>{SITE.name}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-ink-600">
              {SITE.description}
            </p>
            <p className="mt-4 text-sm text-ink-600">
              Contact:{' '}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-brand-700 hover:underline"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-ink-500">
              We do not provide legal, medical, or financial advice. No
              guarantees of specific rankings, traffic, or revenue.
            </p>
          </div>

          {grouped.map((g) => (
            <div key={g.group}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-700">
                {GROUP_LABELS[g.group]}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-200 pt-6 text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-2 max-w-3xl">
            {SITE.name} is an independent search engine optimization practice.
            Trademarks belong to their respective owners. References to
            third-party products, services, or platforms are for informational
            purposes only and do not imply endorsement.
          </p>
          <p className="mt-2">
            This site ships with verified robots.txt, sitemap.xml, and llms.txt
            — see <a href="/llms.txt" className="underline">llms.txt</a>{' '}
            and <a href="/sitemap.xml" className="underline">sitemap.xml</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}