'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { contact } from '@/lib/content';
import { siteConfig } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * The contact form and its submit logic, shared between the on-page section
 * (dark, on navy) and the floating popup (light, on white). `idPrefix` keeps
 * input ids unique when both render on the same page.
 */
export function ContactForm({
  theme = 'dark',
  idPrefix = 'c',
  compact = false,
}: {
  theme?: 'dark' | 'light';
  idPrefix?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const startedRef = useRef<number>(0);
  useEffect(() => {
    startedRef.current = Date.now();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (data.company_website) {
      setStatus('sent');
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

  const dark = theme === 'dark';
  const field = dark
    ? 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:bg-white/10'
    : 'w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-accent';
  const label = dark
    ? 'mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-white/60'
    : 'mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2';
  const optionClass = dark ? 'bg-navy' : 'bg-paper';
  const id = (n: string) => `${idPrefix}-${n}`;

  if (status === 'sent') {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-2xl text-success">
          ✓
        </div>
        <h3 className={`mt-5 font-display text-xl font-semibold ${dark ? 'text-white' : 'text-ink'}`}>
          Thanks. Your message is on its way.
        </h3>
        <p className={`mt-3 max-w-sm text-[15px] ${dark ? 'text-white/60' : 'text-ink-2'}`}>
          We reply within one business day with a technical proposal covering scope, architecture,
          timeline, and investment.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-accent"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-5'}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className={label}>
            Name
          </label>
          <input id={id('name')} name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor={id('email')} className={label}>
            Work email
          </label>
          <input
            id={id('email')}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="jane@acme.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id('company')} className={label}>
            Company
          </label>
          <input id={id('company')} name="company" required className={field} placeholder="Acme Corp" />
        </div>
        <div>
          <label htmlFor={id('size')} className={label}>
            Company size
          </label>
          <select id={id('size')} name="size" className={field} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {contact.sizeOptions.map((opt) => (
              <option key={opt} value={opt} className={optionClass}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id('need')} className={label}>
          What you need
        </label>
        <select id={id('need')} name="need" className={field} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {contact.needOptions.map((opt) => (
            <option key={opt} value={opt} className={optionClass}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={id('message')} className={label}>
          Message
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={compact ? 3 : 4}
          required
          className={`${field} resize-none`}
          placeholder="Tell us about the system, the process it supports, and where it hurts today."
        />
      </div>

      {/* Honeypot */}
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-medium text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send project brief'}
        <span aria-hidden>→</span>
      </button>

      {status === 'error' && error && <p className="text-sm text-accent">{error}</p>}
    </form>
  );
}
