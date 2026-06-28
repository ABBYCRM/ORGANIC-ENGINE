import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: ReadonlyArray<Crumb> }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1">
            {c.href && i < items.length - 1 ? (
              <Link
                href={c.href}
                className="hover:text-brand-700 underline-offset-2 hover:underline"
              >
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-700">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-ink-400">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}