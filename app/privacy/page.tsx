import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Kadmoon, Inc. collects, uses, and protects information from visitors and prospects.',
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="January 2026">
      <p>
        This policy explains how {siteConfig.legalName} (&ldquo;Kadmoon,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) handles information from visitors to {siteConfig.url}. We keep data
        collection to what we need to respond to inquiries and run the site.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact form.</strong> When you submit the form we collect your name, company,
          company size, what you need, and your message.
        </li>
        <li>
          <strong>Technical data.</strong> To prevent abuse we store a one-way hashed version of
          your IP address and your browser user agent with each submission. We do not store your
          raw IP address.
        </li>
        <li>
          <strong>Analytics.</strong> If analytics is enabled, a third-party provider may set
          cookies to measure aggregate traffic. IP addresses are anonymized where supported.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry and prepare a proposal.</li>
        <li>To operate, secure, and improve the website.</li>
        <li>To detect and prevent spam and abuse.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your information. We share it only with service providers that help us run
        the site and communicate with you, such as our hosting provider and email provider, and
        only as needed to provide those services. We may disclose information if required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep contact submissions for as long as needed to follow up and maintain our business
        records, then delete or anonymize them. You can ask us to delete your information at any
        time.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of the information you submitted by
        emailing <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You can control
        cookies through your browser settings.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect information, including
        encryption in transit (HTTPS), input validation, rate limiting, and restricted database
        access. No method of transmission or storage is completely secure.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. {siteConfig.legalName} is
        based in {siteConfig.city}, {siteConfig.region}, {siteConfig.country}.
      </p>
    </LegalPage>
  );
}
