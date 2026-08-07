import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function AdvertisementDisclosurePage() {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useSEO({
    title: 'Advertisement Disclosure | Vidify Games',
    description: 'Vidify Games displays ads through Google AdSense and other partners. Learn how ads work, how personalization operates, and how to control your ad settings.',
    canonicalPath: '/advertisement-disclosure',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Advertisement Disclosure | ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/advertisement-disclosure`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">Advertisement Disclosure</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">Advertisement Disclosure</h1>
      <p className="text-sm text-ink-400 mb-8">Last Updated: {monthYear}</p>

      <div className="prose-edu">
        <p>
          Vidify Games is a free, browser-based educational gaming platform. To keep our games free for everyone, we display advertisements served through Google AdSense and potentially other advertising partners. This disclosure explains how advertising works on our site and what choices you have.
        </p>

        <h2>How Ads Are Served</h2>
        <p>
          The advertisements you see on Vidify Games are provided by third-party ad networks, primarily Google AdSense. These networks select which ads to display based on factors such as your geographic location, the content of the page you are viewing, and your browsing history across other websites. Ads may be personalized based on your prior visits to this and other websites, in accordance with our Privacy Policy and the cookie preferences you have set.
        </p>

        <h2>Third-Party Content</h2>
        <p>
          Vidify Games does not control the specific advertisements that appear, nor do we endorse the products, services, or claims made in third-party ads. Clicking on an advertisement will take you to a third-party website that is not operated or controlled by Vidify Games. We are not responsible for the content, accuracy, privacy practices, or safety of any third-party website you visit through an ad. We encourage you to review the terms and privacy policy of any third-party site before providing personal information or making a purchase.
        </p>

        <h2>Controlling Ad Personalization</h2>
        <p>
          If you prefer not to see personalized ads, you can manage your ad settings directly through Google. Visit <a href="https://adssettings.google.com" className="text-brand-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> to opt out of personalized advertising or adjust your preferences. You can also disable cookies in your browser settings, which will limit the ability of ad networks to personalize the ads you see. Note that disabling personalization does not remove ads entirely — you will still see advertisements, but they will be less relevant to your interests.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about how advertising works on Vidify Games, please contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
