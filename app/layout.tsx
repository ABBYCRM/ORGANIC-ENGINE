import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { siteJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: 'Next.js',
  keywords: [
    'SEO services',
    'technical SEO',
    'on-page SEO',
    'local SEO',
    'link building',
    'content strategy',
    'SEO audit',
    'search engine optimization',
  ],
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: SITE.locale,
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/og-default.svg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1e7df5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main" className="mx-auto max-w-content px-4 py-10 sm:px-6">
          {children}
        </main>
        <Footer />
        <JsonLd data={siteJsonLd()} />
      </body>
    </html>
  );
}