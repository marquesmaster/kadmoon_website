import nodemailer from 'nodemailer';

/**
 * Sends the lead notification email if SMTP is configured via env. If it is
 * not configured, this is a no-op that returns false, so the API still stores
 * the lead and responds success.
 *
 * Env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE ("true"/"false"),
 * CONTACT_TO, CONTACT_FROM.
 */
export async function sendLeadEmail(lead: {
  name: string;
  company: string;
  size?: string;
  need?: string;
  message: string;
}): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true';
  const to = process.env.CONTACT_TO || 'comercial@kadmoon.com';
  const from = process.env.CONTACT_FROM || `Kadmoon Website <${user}>`;

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  const text = [
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

  await transporter.sendMail({
    from,
    to,
    replyTo: undefined,
    subject: `New lead: ${lead.company} (${lead.need || 'inquiry'})`,
    text,
  });
  return true;
}
