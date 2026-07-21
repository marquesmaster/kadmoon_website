'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { contact } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Eyebrow } from '../Eyebrow';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  // Timing trap: record when the form became interactive. The API rejects
  // submissions that arrive implausibly fast (bots).
  const startedRef = useRef<number>(0);
  useEffect(() => {
    startedRef.current = Date.now();
  }, []);

  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot: bots fill hidden fields; humans leave them empty.
    if (data.company_website) {
      setStatus('sent'); // pretend success, drop silently
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch(siteConfig.contactApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, startedAt: startedRef.current }),
      });
      if (res.status === 429) {
        setError('Too many requests. Please wait a moment and try again.');
        setStatus('error');
        return;
      }
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setError(`Something went wrong. Email us directly at ${siteConfig.email}.`);
      setStatus('error');
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:bg-white/10';
  const labelClass =
    'mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-white/60';

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
            {status === 'sent' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-2xl text-success">
                  ✓
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  Thanks. Your message is on its way.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] text-white/60">
                  We reply within one business day with a technical proposal covering scope,
                  architecture, timeline, and investment.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-accent"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      required
                      className={fieldClass}
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="size" className={labelClass}>
                      Company size
                    </label>
                    <select id="size" name="size" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.sizeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="need" className={labelClass}>
                      What you need
                    </label>
                    <select id="need" name="need" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.needOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell us about the system, the process it supports, and where it hurts today."
                  />
                </div>

                {/* Honeypot — visually hidden, off the tab order */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-medium text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Sending…' : 'Send project brief'}
                  <span aria-hidden>→</span>
                </button>

                {status === 'error' && error && (
                  <p className="text-sm text-accent">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
