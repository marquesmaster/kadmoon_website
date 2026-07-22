import { test, expect } from '@playwright/test';

test.describe('pages load', () => {
  const pages = [
    ['/', 'The custom software'],
    ['/services', 'competencies'],
    ['/services/data-and-ai', 'Data & AI'],
    ['/industries', 'sectors'],
    ['/industries/trade-and-supply-chain', 'Trade & Supply Chain'],
    ['/process', 'production'],
    ['/about', 'engineering arm'],
    ['/blog', 'building software'],
    ['/custom-software-development', 'United States'],
    ['/custom-software-development/austin-tx', 'Austin'],
    ['/privacy', 'Privacy'],
    ['/terms', 'Terms'],
  ] as const;

  for (const [path, text] of pages) {
    test(`GET ${path} renders`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBeLessThan(400);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('body')).toContainText(text);
    });
  }

  test('unknown URL shows the 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.locator('h1')).toContainText('moved on');
  });
});

test('blog search filters results', async ({ page }) => {
  await page.goto('/blog');
  await page.getByPlaceholder('Search articles').fill('customs');
  await expect(page.locator('article').first()).toContainText(/customs/i);
});

test('floating contact popup opens', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.getByRole('button', { name: 'Start a project' }).first().click();
  await expect(page.getByRole('dialog', { name: 'Contact form' })).toBeVisible();
});

test('security headers are present', async ({ request }) => {
  const res = await request.get('/');
  const h = res.headers();
  expect(h['content-security-policy']).toBeTruthy();
  expect(h['strict-transport-security']).toBeTruthy();
  expect(h['x-frame-options']).toBe('DENY');
  expect(h['x-content-type-options']).toBe('nosniff');
});

test.describe('contact API guards', () => {
  test('GET is not allowed', async ({ request }) => {
    const res = await request.get('/api/contact');
    expect(res.status()).toBe(405);
  });

  test('non-JSON is rejected', async ({ request }) => {
    const res = await request.post('/api/contact', {
      headers: { 'content-type': 'text/plain' },
      data: 'x=1',
    });
    expect(res.status()).toBe(415);
  });

  test('invalid payload is rejected', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'A', company: 'B' },
    });
    expect(res.status()).toBe(400);
  });

  test('honeypot submission returns generic success', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'Bot', company: 'X', message: 'hello there', company_website: 'spam' },
    });
    expect(res.status()).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });
});
