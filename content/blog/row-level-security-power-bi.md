---
title: "Row level security in Power BI that scales cleanly"
description: "A practical guide to row level security in Power BI: static vs dynamic RLS, USERPRINCIPALNAME, patterns that scale to thousands of users, and how to test roles."
category: "Power BI"
primaryKeyword: "row level security power bi"
tags: ["row level security", "power bi security", "rls dax", "power bi governance"]
takeaways:
  - "Row level security filters the rows a user can see inside a single shared model, so one report serves every region or account manager without cloning it per audience."
  - "Static RLS hard-codes a filter into each role and works for a handful of fixed groups; dynamic RLS uses USERPRINCIPALNAME against a mapping table and scales to thousands of users with zero new roles."
  - "A permissions bridge table is the pattern that scales: map user to the keys they can see, relate that to your dimension, and let the relationship do the filtering instead of writing giant OR conditions."
  - "RLS filters data, it does not hide report structure or measure definitions, so treat it as a data boundary and not a substitute for workspace and app permissions."
  - "Always test roles with View as before publishing, because a broken relationship or a missing mapping row silently shows a user nothing or everything."
faqs:
  - q: "What is the difference between static and dynamic row level security in Power BI?"
    a: "Static RLS writes a fixed filter into each role, such as Region equals West, so you create one role per group and maintain them by hand. Dynamic RLS writes a single role that compares the signed-in user's USERPRINCIPALNAME against a mapping table, so the same role adapts to whoever opens the report. Static suits a few stable groups; dynamic suits many users or membership that changes often."
  - q: "Does row level security slow down a Power BI report?"
    a: "RLS adds a filter to every query, so poorly designed rules can slow things down, especially long OR chains or filters that fan out across a snowflaked model. The fast pattern is a narrow permissions bridge table joined to your dimension on an integer key, evaluated once per query. Keep the security relationship single-direction where possible and avoid applying RLS to large fact tables directly."
  - q: "Can row level security hide specific columns or measures?"
    a: "No. Row level security controls which rows a user can read, not which columns or measures exist. To restrict columns you need object level security, which is a separate feature configured in the model. RLS and OLS are often used together: RLS scopes the rows, OLS hides sensitive fields like salary from certain roles."
---

Row level security (RLS) in Power BI restricts the rows a given user can see within a single shared model. Instead of building one report for the East region and another for the West, you build one model, define a rule that says each user sees only their rows, and publish once. When a sales manager opens the report they see their territory; when the VP opens the same report they see everything. The data model is identical for everyone, but the query that runs is filtered per user based on who is signed in. This guide covers the two ways to implement it, the pattern that scales past a handful of groups, and how to test it so nobody sees the wrong numbers.

## Static RLS: fixed filters per role

Static RLS is the simplest form. You define a role in Power BI Desktop, pick a table, and write a DAX filter expression that is hard-coded. A role named "West" might filter the Region table to `[Region] = "West"`. You then assign users or security groups to that role in the Power BI service.

This works well when you have a small, stable set of audiences. Three sales regions, four business units, a handful of departments: create a role for each, write the filter, assign the group. It is easy to read and easy to reason about because the rule is visible right there in the role definition.

The cost shows up as the number of groups grows. Twenty regions means twenty roles to create and maintain. If a new territory opens, someone has to remember to add a role and assign it. If territories reorganize, you edit filters by hand. Static RLS does not scale, and it puts security maintenance in the report rather than in data where it belongs.

## Dynamic RLS: one role, driven by the user

Dynamic RLS replaces many hard-coded roles with a single role whose filter depends on who is signed in. The key is `USERPRINCIPALNAME()`, a DAX function that returns the email-style identity of the current user in the service. You compare that value against a mapping table that lists which data each user is allowed to see.

Here is the core pattern. Assume a `UserSecurity` table with columns `UserEmail` and `Region`, and a `Sales` fact table with a `Region` column:

```dax
-- RLS rule applied to the Region dimension table
[Region] IN
    CALCULATETABLE(
        VALUES ( UserSecurity[Region] ),
        FILTER (
            UserSecurity,
            UserSecurity[UserEmail] = USERPRINCIPALNAME()
        )
    )
```

When a user opens the report, `USERPRINCIPALNAME()` resolves to their identity, the filter finds every region assigned to them in `UserSecurity`, and the Region dimension is restricted to that set. One role now serves ten users or ten thousand. Adding a user is a row in a table, not a new role. Reorganizing territories is an update to that table, which you can drive from an HR system or an existing access database.

This is the version that belongs in almost every serious deployment. It moves security out of the report and into managed data, which is exactly where your [data governance](/services/data-governance) practice wants it.

## The permissions bridge pattern that scales

The cleanest and fastest implementation does not put a DAX filter on the dimension at all. Instead you model the mapping as a proper relationship. Build a `UserSecurity` bridge table that maps each user to the keys they can see, relate it to your dimension on that key, and apply the RLS filter to the bridge table only:

```dax
-- RLS rule applied to the UserSecurity bridge table
UserSecurity[UserEmail] = USERPRINCIPALNAME()
```

Because the bridge relates to the dimension, and the dimension relates to the fact, filtering the bridge propagates down through the model automatically. The engine evaluates one equality check against a narrow table and lets relationships carry the filter the rest of the way. There are no long OR chains, no `CALCULATETABLE` fan-out, and the security cost is roughly constant regardless of how many keys a user can see.

This pattern handles the hard cases gracefully. A user who manages several regions gets several rows in the bridge. A hierarchy where a director sees all of their managers' territories becomes a bridge populated from an org chart. Because the logic lives in the bridge table's contents rather than in DAX, you can generate it upstream in [data engineering](/services/data-engineering) and keep the model simple.

## Static vs dynamic at a glance

| Consideration | Static RLS | Dynamic RLS |
| --- | --- | --- |
| Rule location | Hard-coded per role | Mapping table plus one role |
| Number of roles | One per audience | One, for everyone |
| Adding a user | Assign to a role | Add a row to the table |
| Reorg / membership change | Edit filters by hand | Update the table |
| Scales to thousands | No | Yes |
| Best for | A few fixed groups | Most production deployments |

## Testing roles before you publish

RLS failures are quiet. A broken relationship or a missing mapping row does not throw an error; it shows a user nothing, or worse, shows them everything. So testing is not optional.

In Power BI Desktop, use **View as** under the Modeling tab. You can impersonate a specific role, and for dynamic RLS you can also supply a username so `USERPRINCIPALNAME()` resolves to that value. Confirm three things every time:

- A scoped user sees only their rows, and totals reconcile to that subset.
- An unmapped user sees nothing rather than everything. If they see the full dataset, your filter is not applied or a relationship is bidirectional in a way that leaks.
- A multi-region user sees the union of their regions, not a single one and not all of them.

After publishing, test again in the service through the dataset security settings, because the service is where real identities resolve. It is worth keeping a small set of test accounts that represent each access shape.

A few rules that prevent most incidents. Keep security relationships single-direction unless you have a specific reason for bidirectional filtering, since bidirectional filters can open paths that leak rows across the model. Do not apply RLS filters directly to large fact tables when a dimension or bridge will do, because the smaller table is cheaper to filter. And remember that RLS is a data boundary only: it does not hide report pages, measure definitions, or the model structure. Restricting who can open the report at all is still a job for workspace and [Power BI](/services/power-bi) app permissions.

## Where RLS fits in a governed model

Row level security is one layer. It pairs with object level security for hiding sensitive columns, with workspace roles for controlling who can edit, and with app audiences for controlling who can open what. Designed well, it lets a single well-built [semantic model](/blog/power-bi-semantic-model-best-practices) serve an entire organization safely, which is far cheaper to maintain than a report cloned per audience. Designed poorly, it becomes a maze of roles nobody trusts. The difference is almost always whether you chose a dynamic, table-driven pattern early and tested it honestly before anyone relied on the numbers.
