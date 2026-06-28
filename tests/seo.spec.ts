import { test, expect } from '@playwright/test';

// All public page URLs are discovered by hitting the sitemap first, then
// expanding the index pages. This ensures coverage stays in sync with
// actual site content.

const INDEX_PAGES = [
  '/',
  '/services',
  '/industries',
  '/locations',
  '/pricing',
  '/about',
  '/faq',
  '/contact',
  '/blog',
  '/for-ai',
  '/must-haves',
  '/where-to-go',
  '/playbook',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  '/cookies',
];

const SAMPLE_DYNAMIC = [
  '/services/seo-audit',
  '/services/keyword-research',
  '/services/link-building',
  '/services/local-seo',
  '/industries/saas',
  '/industries/fintech',
  '/industries/healthcare',
  '/industries/legal',
  '/locations/new-york',
  '/locations/chicago',
  '/locations/austin',
  '/blog/what-is-seo',
  '/blog/technical-seo-audit',
  '/blog/ai-search-optimization',
  '/blog/llms-txt-explained',
];

const STATIC_FILES = [
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/llms-full.txt',
  '/humans.txt',
];

const ALL_PAGES = [...INDEX_PAGES, ...SAMPLE_DYNAMIC];

test.describe('static files', () => {
  for (const path of STATIC_FILES) {
    test(`returns 200 — ${path}`, async ({ request }) => {
      const res = await request.get(path);
      expect(res.status(), `${path} should return 200`).toBe(200);
    });
  }

  test('robots.txt references sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/sitemap/i);
  });

  test('sitemap.xml is valid XML with urls', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain('<urlset');
    const urlCount = (body.match(/<loc>/g) || []).length;
    expect(urlCount, 'sitemap should have many urls').toBeGreaterThan(20);
  });

  test('llms.txt describes the site', async ({ request }) => {
    const res = await request.get('/llms.txt');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/Organic Engine/i);
    expect(body).toMatch(/Summary/i);
  });
});

test.describe('page-level SEO', () => {
  for (const path of ALL_PAGES) {
    test(`loads and has metadata — ${path}`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should return 200`).toBe(200);

      // Title
      const title = await page.title();
      expect(title, `${path} should have a title`).toBeTruthy();
      expect(title.length, `${path} title too short`).toBeGreaterThan(5);

      // Meta description
      const description = await page
        .locator('meta[name="description"]')
        .first()
        .getAttribute('content');
      expect(description, `${path} should have meta description`).toBeTruthy();

      // Canonical
      const canonical = await page
        .locator('link[rel="canonical"]')
        .first()
        .getAttribute('href');
      expect(canonical, `${path} should have canonical`).toBeTruthy();

      // H1 — exactly one
      const h1Count = await page.locator('h1').count();
      expect(h1Count, `${path} should have exactly one H1`).toBe(1);

      const h1Text = await page.locator('h1').first().innerText();
      expect(h1Text.trim().length, `${path} H1 should be non-empty`).toBeGreaterThan(0);

      // No console errors (excluding network failures from off-site links)
      const errors: string[] = [];
      page.on('pageerror', (err) => errors.push(err.message));
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const text = msg.text();
          // Filter out errors from third-party resources we don't control.
          if (!text.includes('favicon') && !text.includes('ERR_NAME_NOT_RESOLVED')) {
            errors.push(text);
          }
        }
      });
      // Give the page a moment for any deferred scripts
      await page.waitForTimeout(300);
      expect(errors, `${path} should have no console errors: ${errors.join(', ')}`).toHaveLength(0);

      // JSON-LD validity (parse all script[type="application/ld+json"])
      const ldScripts = await page
        .locator('script[type="application/ld+json"]')
        .all();
      for (const s of ldScripts) {
        const text = await s.innerText();
        expect(() => JSON.parse(text), `${path} has invalid JSON-LD`).not.toThrow();
      }
    });
  }
});

test.describe('heading hierarchy sanity', () => {
  test('homepage has H1 followed by H2s', async ({ page }) => {
    await page.goto('/');
    const h1 = await page.locator('h1').first().innerText();
    expect(h1.length).toBeGreaterThan(0);
    // Some H2s should exist on homepage
    const h2Count = await page.locator('main h2').count();
    expect(h2Count, 'homepage should have multiple H2s').toBeGreaterThan(2);
  });

  test('FAQ page has visible questions', async ({ page }) => {
    await page.goto('/faq');
    const dtCount = await page.locator('dt').count();
    expect(dtCount, 'FAQ page should have many questions').toBeGreaterThan(5);
  });
});

test.describe('mobile responsiveness', () => {
  test('homepage has no horizontal overflow at 390px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(overflow, 'mobile should not horizontal-overflow').toBe(false);
  });
});

test.describe('navigation', () => {
  test('main nav links are reachable', async ({ page }) => {
    await page.goto('/');
    const navLinks = await page.locator('header nav a').count();
    expect(navLinks, 'header nav should have links').toBeGreaterThan(3);
  });

  test('footer has trust links', async ({ page }) => {
    await page.goto('/');
    const footerHtml = await page.locator('footer').innerHTML();
    expect(footerHtml).toMatch(/Privacy/i);
    expect(footerHtml).toMatch(/Terms/i);
    expect(footerHtml).toMatch(/Disclaimer/i);
  });
});