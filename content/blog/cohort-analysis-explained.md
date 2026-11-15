---
title: "Cohort analysis: seeing how groups behave over time, not just totals"
description: "Totals hide what is happening inside them. Cohort analysis groups customers by when they started and follows each group over time, which reveals patterns, like whether retention is improving, that totals conceal."
category: "Power BI"
primaryKeyword: "cohort analysis"
tags: ["Power BI", "cohort analysis", "retention", "analytics", "customers"]
takeaways:
  - "Totals mix together groups that may be behaving very differently, hiding what is actually happening."
  - "Cohort analysis groups customers by when they started and follows each group over time."
  - "This reveals patterns totals hide, like whether newer customers retain better or worse than older ones."
  - "It is especially powerful for retention, where the aggregate number can hide a changing trend underneath."
  - "Cohort analysis is a standard technique that a good model can support, turning a total into a clearer story."
faqs:
  - q: "What is cohort analysis?"
    a: "Cohort analysis groups customers (or users, or accounts) by a shared starting point, usually when they first signed up or purchased, and then follows each group, each cohort, over time to see how they behave. Instead of looking at one overall number that mixes everyone together, you look at the January starters, the February starters, and so on, separately, tracking what each group does month by month afterward. This lets you compare groups that started at different times and see how behavior differs between them and changes over each group's lifetime, which a single aggregate total cannot show."
  - q: "Why is cohort analysis better than looking at totals?"
    a: "Because totals mix together groups that may be behaving very differently, hiding what is actually happening inside the number. An overall retention rate, for example, blends new and old customers together, so it can look stable while newer customers are actually retaining much worse or better than older ones, a trend the total conceals. Cohort analysis separates the groups, so you see each cohort's behavior on its own and can compare them, revealing whether things are improving or declining for newer customers. The total tells you where you are on average; cohorts tell you what is happening inside that average, which is often where the important story is."
  - q: "What is cohort analysis especially good for?"
    a: "Retention and anything that unfolds over a customer's lifetime, because those are exactly where an aggregate number can hide a changing trend. Retention is the classic case: whether customers stay is best seen by cohort, because it shows how each group's retention curve looks over time and whether newer cohorts retain better or worse than older ones, which the overall retention rate hides. It is also useful for lifetime value, repeat purchasing, engagement over time, any pattern that develops as a group ages. Wherever a single number blends groups at different stages of their lifetime, cohort analysis separates them to show the real trend."
  - q: "Can Power BI do cohort analysis?"
    a: "Yes, cohort analysis is a standard technique that a well-built model can support, grouping customers by their start period and tracking each cohort over time. It requires the data to be modeled so that each customer's start point and subsequent activity are captured and can be grouped and followed, which is a matter of building the model to support it. Once the model supports it, Power BI can show cohort tables and charts that make the patterns visible. The technique is well established, and the main requirement is that the model is built to enable it, which is exactly the kind of thing a good partner sets up so that the clearer, cohort-based story is available rather than only the aggregate totals."
---

Here is a number that looks reassuring: your overall customer retention rate, holding steady month after month. Here is what it might be hiding: newer customers churning faster every month, masked by a stable-looking average because older, loyal customers prop the number up. The total looks fine; the trend underneath is bad. **Cohort analysis** is the technique that reveals what totals hide, by grouping customers by when they started and following each group over time. It turns a single, potentially misleading number into a clearer story. Here is what it is and why it matters.

## Totals hide what is happening inside them

The core problem cohort analysis solves is that **totals mix together groups that may be behaving very differently.** An aggregate number, overall retention, average lifetime value, total active customers, blends everyone into one figure, and that blending can **hide** what is actually happening inside it.

The classic illustration is **retention.** An overall retention rate combines **new and old** customers together. Because long-tenured, loyal customers tend to stay, they can keep the overall number looking **stable** even while **newer** customers are churning much faster than they used to. The total says "retention is steady"; the reality is "we are losing new customers at an accelerating rate, hidden by our loyal base." The aggregate is not wrong, it is a true average, but it is **misleading**, because it conceals a trend that matters enormously. This is the general danger of totals: whenever a single number blends groups at different stages or with different behavior, it can look one way while the groups inside it are telling a very different story. You cannot manage what the total hides.

## What cohort analysis does

**Cohort analysis** addresses this by **grouping customers by a shared starting point**, usually when they first signed up or purchased, and then **following each group, each cohort, over time.** Instead of one number mixing everyone, you look at the customers who started in January as one group, those who started in February as another, and so on, and you track **what each group does** in the months after it started.

This separation is what makes the hidden patterns visible. You can **compare cohorts**: do customers who started recently behave like those who started a year ago, or differently? You can see each cohort's **trajectory over its lifetime**: how its retention, spending, or engagement develops month by month after it started. Where the total gave you one blended figure, cohorts give you the figure **broken out by group and followed over time**, which reveals both how groups **differ** and how behavior is **changing** for newer groups versus older ones. The January cohort and the June cohort each have their own story, and cohort analysis lets you read them separately instead of averaging them into a single number that tells neither story clearly.

## What it reveals

Put concretely, cohort analysis reveals **patterns that totals conceal**, and the retention example shows the power. With a cohort view, the problem the aggregate hid becomes obvious: you see each cohort's **retention curve** over time, and you can see directly whether **newer cohorts retain better or worse** than older ones. If newer cohorts are dropping off faster, the cohort chart shows it plainly, each newer cohort's curve falling more steeply, even though the overall rate looked stable. The trend the total masked is laid bare.

This is why cohort analysis is **especially powerful for retention** and for anything that unfolds over a **customer's lifetime.** Retention, lifetime value, repeat purchasing, engagement over time, these all **develop as a group ages**, so a single number that blends groups at different ages necessarily hides the trajectory. Cohort analysis separates the groups by age and shows each one's path, which is exactly what you need to see whether things are **improving or declining** for the customers you are acquiring now. For any business where what matters is how customers behave **over their lifetime**, and how that is changing for newer customers, cohort analysis turns an opaque average into a clear picture of the real trend, which is often the difference between catching a problem early and discovering it when the aggregate finally moves, long after the newer cohorts went bad.

## It is a standard technique a good model supports

Cohort analysis is a **well-established** technique, and a **well-built model can support it.** The requirement is that the data be modeled so each customer's **start point** and **subsequent activity** are captured in a way that lets them be **grouped by cohort and followed over time.** That is a matter of building the model to enable it, structuring the data so cohort tables and charts can be produced.

Once the model supports it, Power BI can present cohort analysis, cohort retention tables, charts of each group's trajectory, that make the patterns visible. The main requirement is simply that the model is **built to enable it**, which is the kind of thing a good partner sets up deliberately, so that the clearer, cohort-based story is **available** rather than only the aggregate totals. This matters because cohort analysis is not something you can meaningfully do on a model that was not built with it in mind; the start points and longitudinal activity have to be there and structured right. A partner who builds the model to support cohort analysis gives the business access to one of the more revealing analytical techniques there is, turning totals that can mislead into cohort views that show the truth underneath.

## The point in short

Cohort analysis reveals what totals hide:

- **Totals** blend groups that may behave very differently, concealing the real story.
- **Cohort analysis** groups customers by **when they started** and follows each group over time.
- It reveals patterns totals hide, like whether **newer customers retain** better or worse than older ones.
- It is especially powerful for **retention** and anything unfolding over a customer's lifetime.
- It is a standard technique a **well-built model supports**, turning a misleading total into a clear story.

The throughline is that a single aggregate number can look stable or healthy while the groups inside it move in very different, sometimes alarming directions, and cohort analysis is how you see inside the total. By grouping customers by when they started and following each group over time, it reveals trends, especially in retention, that averages conceal, often catching problems and confirming improvements long before the overall number reflects them. Building a model that supports it is how a business gains access to that clearer story, turning totals that can quietly mislead into cohort views that show what is really happening to the customers it is winning now.
