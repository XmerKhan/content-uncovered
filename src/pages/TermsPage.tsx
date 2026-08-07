import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function TermsPage() {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useSEO({
    title: 'Terms of Service | Vidify Games',
    description: 'Read the Vidify Games terms of service. Understand the rules for using our free educational gaming platform.',
    canonicalPath: '/terms',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Terms of Service | ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/terms`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">Terms of Service</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">Terms of Service</h1>
      <p className="text-sm text-ink-400 mb-8">Last Updated: {monthYear}</p>

      <div className="prose-edu">
        <p>
          Please read these Terms of Service ("Terms") carefully before using vidify.site (the "Site"), operated by Vidify Games. By accessing or using the Site, you agree to be bound by these Terms.
        </p>

        <h2>1. Use of the Site</h2>
        <p>
          Vidify Games provides free, browser-based educational games for personal, non-commercial use. You may access and play games on the Site without creating an account. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, any third party.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on the Site, including but not limited to game code, design, graphics, text, articles, and the overall look and feel of the Site, is the property of Vidify Games and is protected by applicable copyright and intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any content on this Site without our express written permission.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use automated tools (bots, scrapers) to access or extract content from the Site</li>
          <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its underlying infrastructure</li>
          <li>Use the Site to transmit any harmful code, viruses, or malicious software</li>
          <li>Use the Site for any commercial purpose without our prior written consent</li>
          <li>Misrepresent your identity or impersonate any person or entity while using the Site</li>
        </ul>

        <h2>4. Advertising and Third-Party Content</h2>
        <p>
          The Site displays advertisements served by Google AdSense and potentially other advertising partners. We are not responsible for the content of advertisements or the practices of advertisers. Any interaction with advertisers, including purchases or use of their services, is solely between you and the advertiser.
        </p>

        <h2>5. No Warranty</h2>
        <p>
          The Site and all games, content, and features are provided "as is" and "as available," without warranties of any kind, either express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or free of harmful components.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Vidify Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site.
        </p>

        <h2>7. Educational Purpose Disclaimer</h2>
        <p>
          Games related to finance, technology, or other topics on this Site are provided for educational and entertainment purposes only. They do not constitute financial, legal, technical, or professional advice. Any financial or technical decisions you make in real life should be made in consultation with a qualified professional.
        </p>

        <h2>8. Changes to the Site and Terms</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice. We may also update these Terms periodically; continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by applicable local law, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Site shall be resolved in accordance with applicable law.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions about these Terms, contact us at:
        </p>
        <p>
          <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
