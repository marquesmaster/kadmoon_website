import { contact } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Eyebrow } from '../Eyebrow';
import { ContactForm } from '../ContactForm';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-shell px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: pitch */}
          <div className="max-w-md">
            <Eyebrow onDark>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-white">{contact.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{contact.sub}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-white/80 underline decoration-accent decoration-2 underline-offset-4 hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            <ContactForm theme="dark" idPrefix="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
