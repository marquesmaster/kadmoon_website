---
title: "Power BI embedded analytics: putting reports inside your own app or portal"
description: "How Power BI Embedded lets you put governed, interactive reports directly inside your product, customer portal, or internal app, so users get analytics where they already work instead of a separate login."
category: "Power BI"
primaryKeyword: "power bi embedded analytics"
tags: ["Power BI", "embedded analytics", "Power BI Embedded", "product", "portals"]
takeaways:
  - "Embedded analytics puts Power BI reports inside your own application, so users see analytics in context rather than switching to a separate tool."
  - "The two main cases are customer-facing (analytics inside your product or portal for your users) and internal (reports inside an app your staff already use)."
  - "The report still runs on a governed semantic model, so embedding does not mean giving up consistency or security; row-level security travels with it."
  - "For customer-facing analytics, each customer sees only their own data, enforced in the model, which is what makes multi-tenant embedding safe."
  - "Embedding is a deployment choice on top of good Power BI, not a separate product, so the foundation that makes any report trustworthy still applies."
faqs:
  - q: "What is the difference between Power BI Embedded and regular Power BI?"
    a: "The report and the model are the same; what changes is where people see it. Regular Power BI is consumed in the Power BI service, where users sign in and open reports in Microsoft's app. Embedded analytics takes those same reports and surfaces them inside your own application or portal through the Power BI APIs, so the user sees the analytics in your product rather than in a separate tool. The governed model, the measures, and row-level security all carry over. Embedding is about delivery and experience, not a different kind of report."
  - q: "Can our customers see Power BI reports without a Microsoft login?"
    a: "Yes, and that is the whole point of the customer-facing embedding model. In the embed-for-your-customers pattern, your application authenticates the user your own way, and it holds the Power BI licensing through a capacity, so your customers do not need their own Microsoft accounts or Power BI licenses. They sign in to your product as usual and see the embedded analytics as part of it. Row-level security in the model ensures each customer sees only their own data, which is what makes this safe to offer to many external customers at once."
  - q: "How do we make sure each customer only sees their own data?"
    a: "Through row-level security defined in the semantic model, combined with how your app passes the user's identity when it embeds the report. The model has rules that filter data to the right tenant or account, and the embedding call tells Power BI which user is viewing, so the right filter applies. Because the rule lives in the model rather than in each report or each embed, every report inherits it, and there is one place to get the isolation right. For multi-tenant, customer-facing analytics this is the control that matters most, and it is worth designing and testing carefully before launch."
  - q: "Is embedded analytics worth it versus just sending customers to Power BI?"
    a: "It depends on the experience you want. For internal users, sending staff to the Power BI service is often perfectly fine and simpler. For customer-facing analytics, embedding is usually worth it, because asking your customers to leave your product, log into a separate Microsoft tool, and learn its navigation is a poor experience that many will not adopt. Embedding keeps the analytics inside the product they already use, under your branding, as a feature of your offering rather than a detour. The question is whether the context and experience justify the additional setup, and for a product or portal it usually does."
---

Most analytics lives in a tool of its own: people stop what they are doing, switch to a reporting application, sign in, find the report, and read it. For internal reporting that is often fine. But there are two situations where sending people to a separate tool is the wrong answer, when you want analytics inside a product your customers use, and when you want reports inside an app your staff already live in. Power BI embedded analytics solves both by putting governed Power BI reports directly inside your own application. This is what it is, when to use it, and what to get right.

## What embedded analytics actually is

Embedded analytics means taking a Power BI report, the same report, built on the same governed model, and surfacing it **inside your own application or portal** rather than in Microsoft's Power BI service. Through the Power BI APIs, the report renders as part of your product's interface, so the user interacts with charts, filters, and drill-downs without leaving the app they are already in.

The key thing to understand is that this is a **delivery choice, not a different product**. The semantic model, the measures, the row-level security, everything that makes a Power BI report trustworthy, is unchanged. What changes is where the user sees it. That matters because it means embedding does not ask you to give up the governance and consistency you built; it carries all of it into your own application.

## Two cases: customer-facing and internal

Embedding serves two distinct needs, and it is worth being clear which one you are solving.

**Customer-facing** embedding puts analytics inside the product or portal your customers use. A software product that wants to offer its users dashboards, a service company that gives clients a portal to see their own performance, a platform that wants analytics as a feature. Here the users are external, they are many, and they should not need Microsoft accounts. This is the case where embedding earns its keep most clearly, because the alternative, sending customers off to a separate Microsoft tool, is an experience most of them will not accept.

**Internal** embedding puts reports inside an application your own staff already use, so they see analytics in the context of their work rather than switching tools. This is valuable, but the bar is lower, because for internal users simply sending them to the Power BI service is often a perfectly good and simpler option. Internal embedding is worth it when the in-context experience genuinely matters, not by default.

## Customers without Microsoft logins

The question that comes up immediately for customer-facing analytics is how external customers see Power BI without each needing a Microsoft account and license. The answer is the **embed-for-your-customers** model.

In this pattern, your application authenticates users your own way, as it already does, and your application holds the Power BI licensing through a **capacity**. Your customers sign in to your product normally and see the embedded analytics as part of it, with no Microsoft login and no Power BI license of their own. From their side, it is simply a feature of your product. From yours, it is Power BI doing the analytical work behind your own authentication and branding. This is what makes it practical to offer rich analytics to a large base of external customers at once.

## The control that matters: each customer sees only their own data

The moment analytics is customer-facing and multi-tenant, one requirement dominates everything else: each customer must see only their own data, and a mistake is not a bad chart but a data leak between customers. This is where the governed model earns its importance.

**Row-level security** in the semantic model defines the rules that filter data to the right tenant or account. When your application embeds a report, it passes the identity of the viewing user, and Power BI applies the matching filter. Because the rule lives in the **model**, not in each report or each embed call, every report inherits the same isolation, and there is a single place to get it right and to test it. For multi-tenant embedding this is the control worth the most care: design it deliberately, test it hard, and treat it as the thing that must not fail before launch. Done right, it is exactly what lets you serve many customers from one governed model safely.

## Embedding is good Power BI, delivered differently

It is tempting to think of embedded analytics as a separate discipline, but the foundation is the same one every trustworthy Power BI report rests on. The report is only as good as the model under it. The numbers are only trusted if the measures are defined once and reconcile. The security is only sound if row-level security is designed into the model. Embedding does not change any of that; it rides on top of it.

So the right way to approach an embedding project is to build the Power BI properly first, a governed model, defined measures, row-level security, and then make embedding the delivery decision on top. Teams that skip the foundation and rush to embed end up putting a fragile report inside their product, where its problems are now customer-facing. The order that works is to get the analytics right, then surface it where your users are.

## When embedding is worth it

To decide whether to embed or simply point people at Power BI:

- **Customer-facing product or portal:** embedding is usually worth it. Asking customers to leave your product for a separate Microsoft tool is a poor experience few will adopt, and analytics as a feature of your offering is far stronger than a link to somewhere else.
- **Internal staff:** often the Power BI service is enough and simpler. Embed internally when the in-context experience genuinely changes how the report gets used.
- **Either way:** the report still needs the governed foundation, so the real work is the model and the security, not the embedding itself.

Embedded analytics is one of the clearest examples of Power BI doing its work out of sight. The user sees your product, uses your navigation, trusts your brand, and gets governed, interactive analytics as part of it, with each customer safely seeing only their own data. The Power BI is invisible, which is the point, and the thing that makes it trustworthy, the governed model underneath, is exactly the same thing that makes any good report trustworthy.
