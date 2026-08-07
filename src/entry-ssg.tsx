import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router';
import { routes } from './routes';
import { games, categories } from './data/games';
import { ssrHead, resetSSRHead, renderHeadTags } from './lib/seo';

/** Every URL that gets a real, crawlable HTML file at build time. */
export function getRoutePaths(): string[] {
  const staticPaths = [
    '/',
    '/about',
    '/privacy-policy',
    '/terms',
    '/contact',
    '/advertisement-disclosure',
    '/disclaimer',
  ];
  const categoryPaths = Object.keys(categories).map((c) => `/category/${c}`);
  const gamePaths = games.map((g) => `/games/${g.slug}`);
  return [...staticPaths, ...categoryPaths, ...gamePaths];
}

export async function render(path: string): Promise<{ html: string; head: string }> {
  resetSSRHead();

  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`https://www.vidify.site${path}`));

  if (context instanceof Response) {
    throw new Error(`Route ${path} returned a Response (status ${context.status})`);
  }

  const router = createStaticRouter(routes, context);
  const html = renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </StrictMode>,
  );

  return { html, head: renderHeadTags(ssrHead.current, path) };
}
