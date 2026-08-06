import type { Solution } from './types';

export const landedCostSoftware: Solution = {
  slug: 'landed-cost-software',
  name: 'Landed cost software',
  category: 'Trade & customs',
  eyebrow: 'Landed cost software',
  metaTitle: 'Landed Cost Software | Kadmoon',
  metaDescription:
    'Kadmoon builds custom landed cost software that rolls duty, freight, insurance, brokerage, and fees into a per-SKU landed cost. Multi-currency, scenario comparison, ERP integration, code you own.',
  keywords: [
    'landed cost software',
    'landed cost calculation software',
    'landed cost tracking',
    'per-sku landed cost',
    'landed cost calculator',
  ],
  tagline: 'Know the true landed cost of every SKU, not just the invoice price.',
  heroIntro:
    'Landed cost software calculates what a product actually costs to get into your warehouse by rolling duty, freight, insurance, brokerage, and fees into a single per-SKU figure. Kadmoon builds it around your own cost structure and suppliers, ties it into your ERP and accounting, and hands you the code, so your margins are based on real numbers instead of the price on the purchase order.',
  problem:
    'The invoice price is only part of what a SKU costs you. Duty, freight, insurance, brokerage, and a dozen small fees land on separate documents in different currencies, often weeks apart, and someone reconciles them by hand in a spreadsheet. By the time the real cost is known the goods are already sold, so margins are set on guesses, allocation across a mixed shipment is rough, and no one can compare two sourcing options on true cost before committing.',
  approach:
    'We start from how your costs actually accrue: which charges apply, how they are allocated across a shipment, and which currencies and exchange rates you settle in. We define measurable acceptance criteria for the allocation math and the ERP sync, then build in two-week sprints with a working demo each cycle, so you can check the landed cost figures against real shipments from the first month.',
  highlights: [
    {
      title: 'Every cost in one per-SKU number',
      description:
        'Duty, freight, insurance, brokerage, and fees allocated down to the SKU, so the landed cost reflects what the product truly cost to receive.',
    },
    {
      title: 'Allocation you can defend',
      description:
        'Costs spread across a mixed shipment by value, weight, volume, or quantity, with the method visible on every line so finance can trace any figure.',
    },
    {
      title: 'Multi-currency, one source of truth',
      description:
        'Charges captured in the currency they were billed in and converted on your rules, so exchange movement does not quietly distort margins.',
    },
    {
      title: 'Scenario comparison before you commit',
      description:
        'Model two suppliers, routes, or incoterms side by side and compare true landed cost, not just unit price, before placing the order.',
    },
    {
      title: 'Integrated with ERP and accounting',
      description:
        'Landed cost flows into inventory valuation, cost of goods, and margin reporting instead of living in a disconnected spreadsheet.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-shipment fees, no lock-in.',
    },
  ],
  modules: [
    {
      name: 'Cost capture and calculation',
      features: [
        'Duty, freight, insurance, brokerage, and fee entry per shipment',
        'Allocation by value, weight, volume, or quantity',
        'Estimated versus actual costs with reconciliation',
        'Per-SKU and per-shipment landed cost breakdown',
      ],
    },
    {
      name: 'Multi-currency and scenarios',
      features: [
        'Charges in original currency with configurable conversion rules',
        'Exchange rate handling and history',
        'Side-by-side scenario comparison of suppliers, routes, and incoterms',
        'What-if modeling before purchase orders are placed',
      ],
    },
    {
      name: 'Integrations and reporting',
      features: [
        'ERP and accounting sync for inventory valuation and cost of goods',
        'Landed cost tracking across shipments over time',
        'Margin and cost dashboards with scheduled exports',
        'Audit trail on every cost line and allocation',
      ],
    },
  ],
  whoFor: [
    'Importers and distributors setting prices without knowing true landed cost.',
    'Finance teams reconciling duty, freight, and fees by hand across currencies.',
    'Buyers who need to compare sourcing options on real cost before committing.',
  ],
  faqs: [
    {
      q: 'What is landed cost software?',
      a: 'Landed cost software calculates the total cost of getting a product to your warehouse by adding duty, freight, insurance, brokerage, and other fees to the purchase price, then allocating that total down to each SKU. It replaces the manual spreadsheet reconciliation most importers rely on, so pricing and margin decisions are based on the real cost of goods rather than the invoice figure.',
    },
    {
      q: 'How is landed cost calculated?',
      a: 'You start with the product cost, add every charge incurred to receive the goods, such as duty, freight, insurance, brokerage, and handling fees, then allocate those charges across the items in the shipment. Allocation is usually done by value, weight, volume, or quantity depending on the charge. The software automates that math and keeps the method visible on each line so any figure can be traced back.',
    },
    {
      q: 'Why build custom landed cost software instead of using a spreadsheet or an off-the-shelf tool?',
      a: 'Spreadsheets break down as shipments, currencies, and allocation rules multiply, and off-the-shelf tools force your cost structure to fit their model. Custom software matches how your charges actually accrue, allocates them the way your finance team defends, and connects directly to your ERP and accounting. You also own the code, so there are no per-shipment fees and the tool changes when your sourcing does.',
    },
    {
      q: 'Does it integrate with our ERP and accounting system?',
      a: 'Yes. Landed cost is only useful when it reaches inventory valuation, cost of goods, and margin reporting, so we build the integration into your ERP and accounting as part of the scope. We map the sync with measurable acceptance criteria and add retries and observability so the numbers stay consistent between systems.',
    },
    {
      q: 'How much does landed cost software cost and how long does it take?',
      a: 'Cost tracks scope: the charge types, allocation rules, currencies, integrations, and reporting you need. A focused calculator for one product line is far smaller than a multi-currency platform tied into an ERP. A first usable version often ships in a few months, with a working demo every two weeks, and later capability is added in phases.',
    },
  ],
  related: [
    { label: 'Trade and supply chain software', href: '/industries/trade-and-supply-chain' },
    { label: 'Landed cost calculation software', href: '/blog/landed-cost-calculation-software' },
    { label: 'Customs broker software', href: '/solutions/customs-broker-software' },
  ],
};
