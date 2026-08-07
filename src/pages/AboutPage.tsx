import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Vidify Games',
    description: 'Vidify Games was founded by Umer Khan. Learn why he built this free educational gaming platform and what drives it.',
    canonicalPath: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/about`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-8">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">About Us</span>
      </nav>

      {/* Two-column layout: text left, photo right on desktop; photo top, text below on mobile */}
      <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-ink-900 mb-6 leading-tight">
            Hi, I'm Umer Khan — and I built Vidify Games.
          </h1>

          <div className="prose-edu space-y-5 text-ink-700 leading-relaxed">
            <p>
              I started Vidify Games because I kept running into the same problem: most of the content out there that tries to teach real-world skills — budgeting, investing, coding basics, world knowledge — is either too dry to sit through, or it gets hidden behind a paywall. I wanted something different. Something you could actually sit down with, spend ten minutes on, and walk away having genuinely learned something.
            </p>

            <p>
              So I built the games myself, from scratch. Every single one — no third-party embeds, no recycled content. Vidify Games now has thirty original browser-based games across four categories: Finance Games, Tech &amp; Logic Games, Educational Games, and Brainstorming Games. Whether you're practicing how to build a budget, learning to read binary, brushing up on world capitals, or just keeping your mind sharp, there's something here for you.
            </p>

            <p>
              The idea behind everything on this site is simple: people learn better when they're actually engaged. A game gives you something to react to, to fail at, to try again. It makes the skill feel real in a way that reading a bulleted list just doesn't. Every game on Vidify Games is built around one practical idea — one thing you can actually use — and each game page includes a short, plain-English article explaining what the skill is and why it matters.
            </p>

            <p>
              I take accuracy seriously. Every article and every game mechanic gets reviewed before it goes live. I'm not trying to fill pages with content for the sake of it — I'd rather have thirty games that genuinely work than three hundred that are just noise. If something isn't accurate or isn't useful, it doesn't belong here.
            </p>

            <p>
              Vidify Games is and always will be completely free. No signup, no download, no paywall. I believe that tools for learning should be open to everyone, and that's not going to change.
            </p>

            <p>
              If you have a question, found something that doesn't look right, or just want to say hello, I'd love to hear from you. You can reach me at{' '}
              <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">
                vidifygamesinfo@gmail.com
              </a>{' '}
              or through the{' '}
              <Link to="/contact" className="text-brand-700 font-semibold hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="md:w-64 lg:w-72 shrink-0 mb-8 md:mb-0">
          <div className="sticky top-24">
            <img
              src="/my_photo.jpg"
              alt="Umer Khan, founder of Vidify Games"
              className="w-full rounded-2xl shadow-md object-cover"
              style={{ aspectRatio: '5/6' }}
            />
            <p className="mt-3 text-center text-sm font-semibold text-ink-700">Umer Khan</p>
            <p className="text-center text-xs text-ink-400">Founder, Vidify Games</p>
          </div>
        </div>
      </div>
    </div>
  );
}
