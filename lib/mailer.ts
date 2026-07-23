import nodemailer from 'nodemailer';

type Lead = {
  name: string;
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

  // 1) Resend (preferred).
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const from = process.env.CONTACT_FROM || 'Kadmoon Website <comercial@kadmoon.com>';
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, text }),
    });
    if (!res.ok) {
      // Surface only the HTTP status, never the key or response body.
      throw new Error(`resend_http_${res.status}`);
    }
    return true;
  }

  // 2) SMTP fallback.
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true';
    const from = process.env.CONTACT_FROM || `Kadmoon Website <${user}>`;
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    await transporter.sendMail({ from, to, subject, text });
    return true;
  }

  console.warn('[mailer] No email provider configured — lead saved but no email sent.');
  return false;
}
