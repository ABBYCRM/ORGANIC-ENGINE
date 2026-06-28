import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-ink-900">
        Page not found
      </h1>
      <p className="mt-3 text-ink-600">
        The page you requested does not exist. Here are some places to go next.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
        >
          Resources
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 hover:border-brand-600 hover:text-brand-700"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}