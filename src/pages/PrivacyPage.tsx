import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function PrivacyPage() {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useSEO({
    title: 'Our Privacy Policy | Vidify Games',
    description: 'Vidify Games respects your privacy. Read our full Privacy Notice to learn what information we collect, how we use cookies, and what rights you have.',
    canonicalPath: '/privacy-policy',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'PrivacyPolicy',
      name: `Our Privacy Policy | ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/privacy-policy`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">Our Privacy Policy</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">Our Privacy Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Vidify Games Privacy Notice — Last Updated: {monthYear}</p>

      <div className="prose-edu space-y-5">
        <p>
          At Vidify Games ("Vidify Games," "we," "us," or "our"), we respect your privacy and are committed to being transparent about how we collect and process information when you visit vidify.site (the "Site") and play our games. This Privacy Notice explains what information we collect, why we collect it, how it is used and shared, how long we retain it, and what rights you have regarding it.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-900 mt-8">General Information</h2>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Who Is Responsible for Your Data</h3>
        <p>
          Vidify Games operates vidify.site and is the data controller responsible for the processing of information described in this notice. You can contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a> with any privacy-related questions or requests.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">What Information We Collect and How</h3>
        <p>
          You can visit and play every game on Vidify Games without registering, creating an account, or logging in. We do not require any personal information to access or play any game on the Site. Depending on how you use the Site, we may process the following:
        </p>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Information You Provide Directly</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contact information:</strong> If you email us or use our Contact page, we collect the information you provide, such as your name, email address, and the content of your message, solely to respond to your inquiry.</li>
        </ul>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Information We Automatically Collect</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Technical information:</strong> We collect information about your device and browser, including device type, browser type, operating system, and online identifiers such as your IP address.</li>
          <li><strong>Approximate location:</strong> We derive a general geographic location (country or city level) from your IP address.</li>
          <li><strong>Usage information:</strong> We collect information about how you interact with the Site, including which pages and games you visit, how long you stay, and which site referred you to us.</li>
          <li><strong>Cookie data:</strong> As described in the "Cookies" section below, we use cookies and similar technologies, and permit third parties such as Google to use cookies, for the purposes described in this notice.</li>
          <li><strong>Game progress data:</strong> Your scores, achievement badges, and difficulty preferences for each game are stored locally in your browser (localStorage) and are never transmitted to or stored on our servers.</li>
        </ul>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Information We Receive From Third Parties</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>We may receive aggregated, non-personal analytics data from services such as Google Analytics and aggregated advertising performance data from Google AdSense.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Why We Process Your Information</h3>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Operating and Improving the Site</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide, maintain, and improve the games and content on the Site</li>
          <li>To identify and fix bugs or technical errors</li>
          <li>To understand which games and content are most useful to visitors</li>
          <li>To ensure the Site functions correctly across devices</li>
        </ul>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Advertising and Analytics</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>To display advertising through Google AdSense</li>
          <li>To measure the effectiveness of advertising and understand aggregate Site traffic through analytics tools</li>
          <li>To personalize advertising, where you have provided consent through our cookie consent banner</li>
        </ul>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Communication</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>To respond to inquiries sent through our Contact page or email</li>
        </ul>

        <h4 className="font-display font-semibold text-base text-ink-800 mt-5">Legal Compliance</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>To comply with applicable laws, respond to lawful requests from authorities, and protect the security and integrity of the Site</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Legal Basis for Processing</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Consent:</strong> For non-essential cookies and personalized advertising, obtained through our cookie consent banner, which you may withdraw at any time by clearing your browser's cookies</li>
          <li><strong>Legitimate interests:</strong> For essential Site operation, security, fraud prevention, and improving our Services</li>
          <li><strong>Legal obligation:</strong> Where we are required to process data to comply with applicable law</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Cookies</h3>
        <p>
          We use cookies and similar technologies to operate the Site and, with your consent, to support advertising and analytics. A cookie consent banner appears when you first visit the Site. You may decline non-essential cookies; some Site features may function differently as a result.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Advertising</h3>
        <p>
          The Site displays advertisements served through Google AdSense. Google and its advertising partners may use cookies to serve ads based on your prior visits to this and other websites. If you consent to personalized advertising, your information may be shared with Google and its advertising partners for this purpose. If you do not consent, you will still see advertisements, but they will not be based on your browsing interests. You can manage your ad personalization settings at <a href="https://adssettings.google.com" className="text-brand-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>. For more on how Google uses data from sites that use its services, visit <a href="https://policies.google.com/technologies/partner-sites" className="text-brand-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a>. Clicking on any advertisement will redirect you to a third-party website that we do not control and are not responsible for.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Analytics</h3>
        <p>
          We may use third-party analytics services, such as Google Analytics, to understand aggregate Site traffic and usage patterns. These services collect information such as your device type, browser, approximate location, and pages visited. This data is used in aggregate form and is not used to personally identify you. We process this data based on your consent or our legitimate interest in understanding and improving the Site.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">With Whom We Share Your Information</h3>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Service providers:</strong> Hosting providers, analytics services, and email services that help us operate the Site, bound by confidentiality obligations</li>
          <li><strong>Advertising partners:</strong> Google AdSense and its network of advertisers, as described in the "Advertising" section above</li>
          <li><strong>Legal authorities:</strong> Where required by law, court order, or to protect the rights, property, or safety of Vidify Games, our users, or others</li>
          <li><strong>Business transfers:</strong> If Vidify Games is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction, subject to this Privacy Notice</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">How We Protect Minors</h3>
        <p>
          Vidify Games is a general-audience site and is not directed at children under 13. We do not require registration, do not collect names, dates of birth, or contact details from any visitor to play a game, and do not knowingly collect personal information from children under 13. Some of our games in the Brainstorming Games category are designed with younger players in mind and are intended to be played with parental awareness. If you believe a child has provided us with personal information, please contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a> so we can address it.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Where Your Information Is Processed</h3>
        <p>
          Your information may be processed on servers located in different countries depending on our hosting and service providers. Where information is transferred internationally, we take reasonable steps to ensure it remains protected consistent with this Privacy Notice.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">How We Protect Your Information</h3>
        <p>
          We use reasonable technical and organizational measures designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">How Long We Retain Your Information</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contact form/email submissions:</strong> Retained only as long as necessary to respond to and resolve your inquiry</li>
          <li><strong>Analytics data:</strong> Retained in aggregate form for a limited period consistent with the retention policies of our analytics providers</li>
          <li><strong>Game progress data:</strong> Stored locally in your browser and remains until you clear your browser's site data; it is never stored on our servers</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Your Rights</h3>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access the information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Restrict or object to certain processing</li>
          <li>Receive your information in a portable format</li>
          <li>Withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a> with your name, email address, and a description of your request. If you believe we have not complied with applicable data protection law, you have the right to lodge a complaint with your local data protection authority.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Additional Information for California Residents</h3>
        <p>
          Under the California Consumer Privacy Act (CCPA), California residents have the right to know what personal information we collect, request its deletion, and opt out of its sale. We do not sell personal information. You may exercise these rights by contacting us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Additional Information for EEA, UK, and Swiss Residents</h3>
        <p>
          If you are located in the European Economic Area, United Kingdom, or Switzerland, we process your information in accordance with the General Data Protection Regulation (GDPR) and equivalent UK law, relying on the legal bases described above. You have the rights listed in the "Your Rights" section and may lodge a complaint with your local supervisory authority.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Do Not Track</h3>
        <p>
          Some browsers offer a "Do Not Track" signal. The Site does not currently respond to these signals, as no uniform industry standard exists yet.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Third-Party Links</h3>
        <p>
          The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">Changes to This Privacy Notice</h3>
        <p>
          We may update this Privacy Notice from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Material changes will be reflected by an updated "Last Updated" date at the top of this page. Continued use of the Site after changes are posted constitutes acceptance of the revised notice.
        </p>

        <h3 className="font-display font-semibold text-lg text-ink-900 mt-6">How to Contact Us</h3>
        <p>
          If you have questions about this Privacy Notice or how we handle your information, contact us at: <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
