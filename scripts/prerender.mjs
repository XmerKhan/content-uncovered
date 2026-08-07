/**
 * Static pre-rendering (SSG) for the Vite SPA.
 *
 * Runs after `vite build`:
 *  1. builds an SSR bundle of src/entry-ssg.tsx (pure Node, no headless browser)
 *  2. renders every route to HTML with react-dom/server
 *  3. injects the markup + per-route <head> into a copy of dist/index.html
 *  4. writes dist/<route>/index.html so Vercel serves real HTML to crawlers
 */
import { build } from 'vite';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssgDir = path.join(root, '.ssg');

async function main() {
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/entry-ssg.tsx'),
      outDir: '.ssg',
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'entry-ssg.mjs' } },
    },
  });

  const { render, getRoutePaths } = await import(
    pathToFileURL(path.join(ssgDir, 'entry-ssg.mjs')).href
  );

  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
  const paths = getRoutePaths();

  for (const routePath of paths) {
    const { html, head } = await render(routePath);

    let page = template
      // strip the template's static SEO head; each page gets its own
      .replace(/\s*<title>[\s\S]*?<\/title>/, '')
      .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, '')
      .replace(/\s*<link\s+rel="canonical"[\s\S]*?\/>/, '')
      .replace(/\s*<meta\s+(?:property="og:|name="twitter:)[\s\S]*?\/>/g, '')
      .replace('</head>', `  ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (!page.includes('<div id="root">')) {
      throw new Error(`Failed to inject markup for ${routePath}`);
    }

    const outFile =
      routePath === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, routePath, 'index.html');

    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, page, 'utf8');
    console.log(`prerendered ${routePath} -> ${path.relative(root, outFile)}`);
  }

  // 404 shell (client router renders NotFoundPage for unknown URLs)
  const { html, head } = await render('/this-route-does-not-exist');
  await fs.writeFile(
    path.join(distDir, '404.html'),
    template
      .replace(/\s*<title>[\s\S]*?<\/title>/, '')
      .replace('</head>', `  ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    'utf8',
  );

  await fs.rm(ssgDir, { recursive: true, force: true });
  console.log(`\nPrerendered ${paths.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
