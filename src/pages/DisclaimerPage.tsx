import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function DisclaimerPage() {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useSEO({
    title: 'Disclaimer | Vidify Games',
    description: 'Vidify Games are provided for educational and entertainment purposes only and do not constitute professional advice. Read our full disclaimer.',
    canonicalPath: '/disclaimer',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Disclaimer | ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/disclaimer`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">Disclaimer</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">Disclaimer</h1>
      <p className="text-sm text-ink-400 mb-8">Last Updated: {monthYear}</p>

      <div className="prose-edu">
        <p>
          The information and games provided on Vidify Games (the "Site") are offered solely for educational and entertainment purposes. Nothing on this Site constitutes financial, legal, medical, investment, tax, or professional advice of any kind. You should consult a qualified professional before making any decisions based on information obtained from this Site.
        </p>

        <h2>Educational and Entertainment Purposes Only</h2>
        <p>
          All games on Vidify Games — particularly those in the Finance category, such as the Stock Market Simulator, Budget Master, Rent vs. Buy, Credit Score Climb, and Retirement Countdown — are designed to introduce concepts in an interactive, gamified way. They use simplified models, simulated data, and hypothetical scenarios that do not reflect real-world financial markets, real investment performance, or guaranteed outcomes. Game scores, simulated portfolio returns, and other in-game results are not predictions, recommendations, or indicators of future performance. Acting on any information or outcome presented in these games without first consulting a qualified financial advisor is done entirely at your own risk.
        </p>

        <h2>Accuracy of Content</h2>
        <p>
          Vidify Games makes reasonable efforts to ensure that factual information presented in educational games and articles is accurate at the time of publication. However, we do not guarantee the completeness, reliability, or accuracy of any content at all times. Information may become outdated, and we may update, revise, or remove content periodically without prior notice. Always verify critical information through independent, authoritative sources before relying on it.
        </p>

        <h2>External Links</h2>
        <p>
          Articles and game pages on this Site may include links to external websites for reference and additional learning. These links are provided for convenience only and do not signify endorsement. Vidify Games is not responsible for the content, accuracy, or practices of any third-party website, and we accept no liability for any loss or damage that may arise from your use of external sites.
        </p>

        <h2>No Warranty</h2>
        <p>
          The Site and all content are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of accuracy, fitness for a particular purpose, or non-infringement. To the fullest extent permitted by law, Vidify Games disclaims all liability for any errors, omissions, or damages arising from the use of this Site or its content.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this disclaimer, please reach out to us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
