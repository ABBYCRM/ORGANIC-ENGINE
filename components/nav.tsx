import Link from 'next/link';
import { NAV, SITE } from '@/lib/site-config';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink-900"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md bg-brand-600 text-white"
          >
            SR
          </span>
          <span>{SITE.name}</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-ink-700">
            {NAV.map((item) => (
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
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-md border border-ink-300 px-3 py-1.5 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700 sm:inline-flex"
          >
            Get in touch
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Request audit
          </Link>
        </div>
      </div>
      {/* Mobile nav */}
      <nav aria-label="Primary mobile" className="md:hidden border-t border-ink-200">
        <ul className="flex gap-4 overflow-x-auto px-4 py-2 text-sm font-medium text-ink-700">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="whitespace-nowrap hover:text-brand-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}