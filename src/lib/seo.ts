import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  jsonLd?: object | object[];
}

const SITE_ORIGIN = 'https://www.vidify.site';
const SITE_NAME = 'Vidify Games';

const isBrowser = typeof document !== 'undefined';

/**
 * During static prerendering (Node, no DOM) useSEO records the head data into
 * this store synchronously while the tree renders, so the build script can
 * inline real <title>/<meta>/<link rel=canonical>/JSON-LD into the HTML file.
 * In the browser the same data is applied to document.head in an effect.
 */
export const ssrHead: { current: SEOOptions | null } = { current: null };

export function resetSSRHead() {
  ssrHead.current = null;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data: object | object[]) {
  const id = 'dynamic-jsonld';
  let el = document.getElementById(id);
  if (el) el.remove();
  el = document.createElement('script');
  el.id = id;
  el.setAttribute('type', 'application/ld+json');
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

export function useSEO(options: SEOOptions) {
  // Runs during render on the server pass — effects never fire there.
  if (!isBrowser) {
    ssrHead.current = options;
  }

  const { title, description, keywords, canonicalPath, jsonLd } = options;

  useEffect(() => {
    document.title = title;
    if (description) setMeta('description', description);
    if (keywords && keywords.length) setMeta('keywords', keywords.join(', '));
    setMeta('og:title', title, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    if (description) setMeta('og:description', description, 'property');
    setMeta('og:image', `${SITE_ORIGIN}/og-image.svg`, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:image', `${SITE_ORIGIN}/og-image.svg`);
    if (canonicalPath) {
      const url = canonicalPath === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${canonicalPath}`;
      setCanonical(url);
      setMeta('og:url', url, 'property');
    }
    if (jsonLd) setJsonLd(jsonLd);
  }, [title, description, keywords, canonicalPath, jsonLd]);
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Builds the static <head> markup for a prerendered route. */
export function renderHeadTags(options: SEOOptions | null, routePath: string): string {
  const opts = options ?? { title: SITE_NAME };
  const canonicalPath = opts.canonicalPath ?? routePath;
  const url = canonicalPath === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${canonicalPath}`;
  const tags: string[] = [];

  tags.push(`<title>${escapeAttr(opts.title)}</title>`);
  if (opts.description) {
    tags.push(`<meta name="description" content="${escapeAttr(opts.description)}" />`);
  }
  if (opts.keywords?.length) {
    tags.push(`<meta name="keywords" content="${escapeAttr(opts.keywords.join(', '))}" />`);
  }
  tags.push(`<link rel="canonical" href="${escapeAttr(url)}" />`);
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:site_name" content="${SITE_NAME}" />`);
  tags.push(`<meta property="og:title" content="${escapeAttr(opts.title)}" />`);
  if (opts.description) {
    tags.push(`<meta property="og:description" content="${escapeAttr(opts.description)}" />`);
  }
  tags.push(`<meta property="og:url" content="${escapeAttr(url)}" />`);
  tags.push(`<meta property="og:image" content="${SITE_ORIGIN}/og-image.svg" />`);
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escapeAttr(opts.title)}" />`);
  if (opts.description) {
    tags.push(`<meta name="twitter:description" content="${escapeAttr(opts.description)}" />`);
  }
  tags.push(`<meta name="twitter:image" content="${SITE_ORIGIN}/og-image.svg" />`);
  if (opts.jsonLd) {
    const json = JSON.stringify(opts.jsonLd).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json" id="dynamic-jsonld">${json}</script>`);
  }
  return tags.join('\n    ');
}

export { SITE_ORIGIN, SITE_NAME };
