#!/usr/bin/env node
// Build-time route audit. Verifies that every expected route is generated
// by Next.js after a static export. Run AFTER `npm run build`.

import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(process.cwd(), 'out');
if (!existsSync(ROOT)) {
  console.error('No out/ directory found. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === '_next' || entry === 'chunks' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, acc);
    else if (entry.endsWith('.html')) acc.push(full.replace(/\\/g, '/'));
  }
  return acc;
}

const htmlFiles = walk(ROOT);
console.log(`Found ${htmlFiles.length} generated HTML files.`);

// Required files at the root
const required = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'llms-full.txt',
  'humans.txt',
  'favicon.svg',
  'og-default.svg',
];

const missing = [];
for (const r of required) {
  const p = join(ROOT, r);
  if (!existsSync(p)) missing.push(r);
}

// For each page, check for the presence of an H1, a canonical link, and a
// meta description.
const issues = [];
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  if (!/<h1[\s>]/i.test(html)) {
    issues.push(`Missing H1: ${f}`);
  }
  if (!/<link[^>]+rel=["']canonical["']/i.test(html)) {
    issues.push(`Missing canonical: ${f}`);
  }
  if (!/<meta[^>]+name=["']description["']/i.test(html)) {
    issues.push(`Missing meta description: ${f}`);
  }
  if (!/<title>[\s\S]*?<\/title>/i.test(html)) {
    issues.push(`Missing title: ${f}`);
  }
  // Count H1s — must be exactly one for non-utility pages.
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    issues.push(`Expected 1 H1, found ${h1Matches.length}: ${f}`);
  }
  // JSON-LD check (must be valid JSON if present)
  const ldMatches = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  for (const m of ldMatches) {
    try {
      JSON.parse(m[1].replace(/\\u003c/g, '<'));
    } catch (e) {
      issues.push(`Invalid JSON-LD in ${f}: ${e.message}`);
    }
  }
}

// Sitemap XML well-formed check
const sitemapPath = join(ROOT, 'sitemap.xml');
let sitemapUrls = 0;
if (existsSync(sitemapPath)) {
  const sm = readFileSync(sitemapPath, 'utf8');
  sitemapUrls = (sm.match(/<loc>/g) || []).length;
}

console.log(`Sitemap URLs: ${sitemapUrls}`);
console.log(`Missing required files: ${missing.length ? missing.join(', ') : 'none'}`);
console.log(`Issues found: ${issues.length}`);
for (const i of issues) console.log(`  - ${i}`);

if (missing.length > 0 || issues.length > 0) {
  process.exitCode = 1;
}