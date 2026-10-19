# Google Business Profile — Kadmoon (setup runbook)

Google Business Profile (formerly Google My Business / "Google Meu Negócio") is
created and verified in Google's own console with your Google account. It cannot
be set up from this repo. This file is the runbook: what to decide first, how to
register, and how to keep it consistent with the website.

The website is already prepared to match the listing: the business name, city,
and region are in `lib/site.ts`, and the `JsonLd` component emits
Organization + ProfessionalService structured data. Phone, street address, geo,
hours and the profile URL are optional fields in `lib/site.ts` that stay empty
(and are omitted from the structured data) until you have real, verifiable data.

## 0. Decide this first: the address and phone

This is the real prerequisite, not a formality.

- **Google requires a real, verifiable business location.** Verification is by
  postcard to that address, by phone, by email, or by a video showing your
  premises and operations.
- **Virtual offices and registered-agent addresses get listings suspended.**
  Using the incorporation/registered-agent address in Austin is risky: Google
  routinely flags and suspends these, and a suspended profile is hard to recover.
- **Kadmoon is a service-area business (SAB):** it serves clients remotely, with
  no storefront customers walk into. An SAB verifies at a real address (often the
  owner/operator's business address) and can then **hide that address** publicly,
  showing a service area instead (e.g. "United States").

So, before registering, confirm one of:

1. **You have a real, staffed US address + a US phone** → register as an SAB,
   verify at that address, hide it, set the service area to the US.
2. **No US address/phone yet** → registering now risks suspension. Options:
   get a US phone number first (helps phone verification and NAP), use a genuine
   operating address you can verify, or wait until a real US presence exists.
   Do **not** invent an address to get verified.

## 1. Create the profile

1. Go to https://business.google.com and sign in with the Google account that
   should own the listing (use a shared/company account, not a personal one).
2. Business name: **Kadmoon, Inc.** (exactly as on the site; do not add keywords).
3. Business type: choose **Service business** / "I deliver goods and services to
   my customers" so it is a service-area business.
4. Primary category: pick the closest real category, e.g. **Software company** or
   **Business management consultant** / **Data analytics**. Add secondary
   categories that fit (e.g. consultant).
5. Service area: **United States** (or the specific states/metros you target).
6. Contact: the website is `https://kadmoon.com`; add the US phone if you have one.

## 2. Verify

Pick the method Google offers for your case (postcard, phone, email, or video).
Video verification is increasingly the default for SABs: you record a short,
unedited walkthrough showing your tools/operations and proof of the business.
Keep the business name and address identical to step 1 throughout.

## 3. Complete the profile

- **Description:** reuse the site positioning, e.g. "Kadmoon is a US analytics
  firm focused entirely on foreign trade. We turn the data in your customs,
  logistics, and ERP systems into decisions, delivered on the Microsoft stack in
  your own tenant." No keyword stuffing.
- **Services:** add the analytics domains (landed cost & margin, duty & tariff
  exposure, shipment visibility & OTIF, customs & compliance analytics, inventory
  & warehouse analytics, executive control tower).
- **Hours:** set real business hours (or mark as an SAB without set hours).
- **Logo and photos:** upload the Kadmoon logo and a few real, owned images. Do
  not use stock or anything implying a storefront you do not have.
- **Products/Posts:** optionally post links to cornerstone pages (`/platform`,
  key blog posts) over time.

## 4. Make the site and the profile consistent (NAP)

Google cross-checks the Name, Address, and Phone across the web. Keep them
identical on the site and the profile. Once the listing is live, fill in the
real values in `lib/site.ts` and redeploy:

```ts
// lib/site.ts
phone: '+1-512-555-0100',            // the same number as on the profile
streetAddress: '...',                // only if the address is public on GBP
postalCode: '...',
latitude: '30.2672', longitude: '-97.7431',
openingHours: 'Mo-Fr 09:00-17:00',
foundingYear: '2025',
googleBusinessUrl: 'https://www.google.com/maps/place/?q=place_id:XXXX',
```

- `phone` also renders on `/contact` automatically once set.
- `googleBusinessUrl` is added to `sameAs` in the structured data, linking the
  site and the profile as one entity.
- Leave `streetAddress` empty if you hide the address on GBP (SAB); keeping the
  site and profile consistent means not publishing an address the profile hides.

Then `git pull && docker compose up -d --build` on the VPS (see DEPLOY.md).

## 5. After launch

- Add the profile link to the site footer/contact if you want it public.
- Ask real, satisfied clients for Google reviews once you have them (never buy or
  fabricate reviews; that violates Google's policies and the project's content
  rules).
- Keep the profile and the site in sync whenever the phone, address, or hours
  change.

## Notes / honesty guardrails

- Do not create a listing with a fake or unverifiable address, keyword-stuffed
  name, or stock imagery implying a presence that does not exist. These get the
  profile suspended and are against the project's rule of never inventing
  business facts.
- Google Search Console (for indexing the website) is separate and documented in
  DEPLOY.md, section 7. Business Profile is for the local/maps listing.
