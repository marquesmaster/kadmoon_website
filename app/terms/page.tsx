import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern your use of the Kadmoon, Inc. website.',
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="January 2026">
      <p>
        These terms govern your use of {siteConfig.url}, operated by {siteConfig.legalName}. By
        using the site you agree to them.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may use the site for lawful purposes and to learn about our services. You agree not to
        misuse the site, interfere with its operation, attempt unauthorized access, or use it to
        transmit spam or malicious content.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content on this site, including text, design, and marks, belongs to{' '}
        {siteConfig.legalName} unless stated otherwise. You may not reproduce or redistribute it
        without permission. Nothing here transfers ownership of client work; when we deliver a
        project, the client owns that work as set out in the engagement contract.
      </p>

      <h2>No warranty</h2>
      <p>
        The site and its content are provided &ldquo;as is&rdquo; without warranties of any kind.
        Information here is for general purposes and is not a binding offer, professional advice, or
        a guarantee of results. Any project engagement is governed by a separate written contract.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.legalName} is not liable for any
        indirect, incidental, or consequential damages arising from your use of the site.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party sites we do not control. We are not responsible for their
        content or practices.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the site after changes means
        you accept the updated terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of {siteConfig.region}, {siteConfig.country},
        without regard to conflict-of-law rules.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
