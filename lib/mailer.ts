import nodemailer from 'nodemailer';
import { siteConfig } from './site';

type Lead = {
  name: string;
  email?: string;
  company: string;
  size?: string;
  need?: string;
  message: string;
};

function bodyText(lead: Lead): string {
  return [
    `New project inquiry from kadmoon.com`,
    ``,
    `Name:    ${lead.name}`,
    `Email:   ${lead.email || '(not provided)'}`,
    `Company: ${lead.company}`,
    `Size:    ${lead.size || '(not provided)'}`,
    `Need:    ${lead.need || '(not provided)'}`,
    ``,
    `Message:`,
    lead.message,
  ].join('\n');
}

/**
 * Sends the lead notification. Prefers Resend (RESEND_API_KEY) over SMTP.
 * If neither is configured it is a no-op that returns false, so the lead is
 * still stored and the request still succeeds.
 *
 * Resend: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM (a verified-domain sender).
 * SMTP:   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO,
 *         CONTACT_FROM.
 */
export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const to = process.env.CONTACT_TO || 'comercial@kadmoon.com';
  const subject = `New lead: ${lead.company} (${lead.need || 'inquiry'})`;
  const text = bodyText(lead);

  // 1) Web3Forms (preferred). The access key stays server-side and is never
  // exposed to the browser; Web3Forms emails the recipient tied to the key.
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject,
        from_name: 'Kadmoon Website',
        // Web3Forms uses `email` as the reply-to, so a reply reaches the lead.
        ...(lead.email ? { email: lead.email, replyto: lead.email } : {}),
        name: lead.name,
        company: lead.company,
        size: lead.size || '(not provided)',
        need: lead.need || '(not provided)',
        message: lead.message,
      }),
    });
    if (!res.ok) throw new Error(`web3forms_http_${res.status}`);
    return true;
  }

  // 2) Resend.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const from = process.env.CONTACT_FROM || 'Kadmoon Website <comercial@kadmoon.com>';
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });
    if (!res.ok) {
      // Surface only the HTTP status, never the key or response body.
      throw new Error(`resend_http_${res.status}`);
    }
    return true;
  }

  // 3) SMTP fallback.
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true';
    const from = process.env.CONTACT_FROM || `Kadmoon Website <${user}>`;
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    await transporter.sendMail({ from, to, subject, text, replyTo: lead.email || undefined });
    return true;
  }

  console.warn('[mailer] No email provider configured. Lead saved but no email sent.');
  return false;
}

/**
 * Auto-reply to the prospect who submitted the form: sends the sales
 * presentation and the meeting-scheduling link. Best-effort; returns false if
 * no provider is configured or no prospect email is present. Never sends the
 * lead's data anywhere but back to their own address.
 *
 * Uses Resend (RESEND_API_KEY) if set, otherwise SMTP. Web3Forms is skipped
 * because its free tier only emails the account owner, not arbitrary prospects.
 * Config: NEXT_PUBLIC_BOOKINGS_URL (Microsoft Bookings public page).
 */
export async function sendProspectAutoReply(lead: Lead): Promise<boolean> {
  if (!lead.email) return false;

  const deckUrl = `${siteConfig.url}/kadmoon-overview.pdf`;
  const bookingsUrl = process.env.NEXT_PUBLIC_BOOKINGS_URL || `${siteConfig.url}/contact`;
  const first = lead.name.split(' ')[0] || 'there';
  const subject = 'Your Microsoft data team, on subscription — Kadmoon';

  const text = [
    `Hi ${first},`,
    ``,
    `Thanks for reaching out to Kadmoon. Here is a short overview of how we work:`,
    `a dedicated Power BI, Fabric, and Power Platform team on a monthly subscription,`,
    `working your business hours, built in your own tenant.`,
    ``,
    `Presentation: ${deckUrl}`,
    `Book a meeting: ${bookingsUrl}`,
    ``,
    `Pick a time that suits you and we will walk through the fastest path to`,
    `measurable results for ${lead.company}.`,
    ``,
    `Talk soon,`,
    `The Kadmoon team`,
    `${siteConfig.url}`,
  ].join('\n');

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#15191E;max-width:560px;line-height:1.55">
    <p>Hi ${first},</p>
    <p>Thanks for reaching out to Kadmoon. Here is a short overview of how we work: a dedicated Power BI, Fabric, and Power Platform team on a monthly subscription, working your business hours, built in your own tenant.</p>
    <p style="margin:26px 0">
      <a href="${bookingsUrl}" style="background:#FF5900;color:#fff;text-decoration:none;font-weight:600;padding:13px 22px;border-radius:999px;display:inline-block">Book a meeting &rarr;</a>
      &nbsp;&nbsp;
      <a href="${deckUrl}" style="color:#15191E;font-weight:600">View the presentation (PDF)</a>
    </p>
    <p>Pick a time that suits you and we will walk through the fastest path to measurable results for ${lead.company}.</p>
    <p style="margin-top:24px">Talk soon,<br/>The Kadmoon team<br/><a href="${siteConfig.url}" style="color:#5B6470">${siteConfig.url.replace('https://', '')}</a></p>
  </div>`;

  // Resend.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const from = process.env.CONTACT_FROM || 'Kadmoon <comercial@kadmoon.com>';
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: lead.email, subject, text, html }),
    });
    if (!res.ok) throw new Error(`resend_http_${res.status}`);
    return true;
  }

  // SMTP.
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true';
    const from = process.env.CONTACT_FROM || `Kadmoon <${user}>`;
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    await transporter.sendMail({ from, to: lead.email, subject, text, html });
    return true;
  }

  return false;
}
