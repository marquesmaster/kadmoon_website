// Microsoft credentials shown as trust badges. HONESTY RULE: only items with
// `earned: true` render anywhere on the site. Nothing here is displayed until
// it is actually true, so the site never claims a partner status or a
// certification the team does not hold. Flip `earned` to true (and set the
// year/count) as each one is achieved.

export type Credential = {
  label: string;
  detail?: string;
  kind: 'partner' | 'certification';
  earned: boolean;
};

export const credentials: Credential[] = [
  // Membership in the Microsoft AI Cloud Partner Program (enrollment in
  // progress). Turn on once the enrollment completes.
  { label: 'Microsoft AI Cloud Partner Program', detail: 'Member', kind: 'partner', earned: false },
  // Solutions Partner designation (earned via Partner Capability Score).
  { label: 'Solutions Partner — Data & AI', detail: 'Azure', kind: 'partner', earned: false },
  // Individual certifications the delivery team holds. Set `earned` and a count
  // in `detail` only for those actually certified.
  { label: 'Microsoft Certified: Fabric Analytics Engineer', detail: 'DP-600', kind: 'certification', earned: false },
  { label: 'Microsoft Certified: Fabric Data Engineer', detail: 'DP-700', kind: 'certification', earned: false },
  { label: 'Microsoft Certified: Power BI Data Analyst', detail: 'PL-300', kind: 'certification', earned: false },
  { label: 'Microsoft Certified: Power Platform Solution Architect', detail: 'PL-600', kind: 'certification', earned: false },
];

export const earnedCredentials = () => credentials.filter((c) => c.earned);
