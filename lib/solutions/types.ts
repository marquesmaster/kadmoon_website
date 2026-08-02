// Data model for Kadmoon solution landing pages. Each solution renders a rich,
// answer-first page (hero, problem, highlights, capability modules, who it is
// for, FAQ with schema, CTA) from this structured content. Keep every claim
// honest and grounded; no invented client names or metrics.

export type SolutionModule = { name: string; features: string[] };
export type SolutionFaq = { q: string; a: string };

export type Solution = {
  slug: string;
  name: string; // short name, e.g. "Custom ERP"
  category: string; // grouping label, e.g. "Enterprise systems"
  eyebrow: string; // small label above the H1
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tagline: string; // the H1
  heroIntro: string; // answer-first paragraph, quotable for AI search
  problem: string; // the problem this solution solves
  approach: string; // how Kadmoon builds it
  highlights: { title: string; description: string }[]; // 4 to 6
  modules: SolutionModule[]; // 3 to 5 capability groups with features
  whoFor: string[]; // who this is for
  faqs: SolutionFaq[]; // 4 to 5, power the FAQPage schema
  related?: { label: string; href: string }[]; // internal links
};
