import { SITE } from '@/lib/site-config';

export function ProseNote() {
  return (
    <div className="not-prose my-6 rounded-md border border-ink-200 bg-ink-50 p-4 text-xs text-ink-600">
      <p className="font-semibold text-ink-800">A note on what this site does not do.</p>
      <p className="mt-1">
        {SITE.name} does not publish fabricated reviews, ratings, case results,
        certifications, or testimonials. We do not promise specific rankings,
        traffic, or revenue. When a service is described, it is because we
        actually perform that work — not because it padded the navigation.
      </p>
    </div>
  );
}