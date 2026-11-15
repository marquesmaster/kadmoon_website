---
title: "DAX vs Power Query: where your logic belongs"
description: "Power BI gives you two places to put logic, Power Query when data is loaded and DAX when reports are used, and putting each kind of logic in the right place is what keeps a model fast, correct, and maintainable."
category: "Power BI"
primaryKeyword: "dax vs power query"
tags: ["Power BI", "DAX", "Power Query", "data model", "best practices"]
takeaways:
  - "Power BI has two places to put logic: Power Query, which shapes data as it loads, and DAX, which calculates as reports are used."
  - "They run at different times, so the same result in the wrong place can cost performance, correctness, or maintainability."
  - "Shaping and cleaning data belongs in Power Query; calculations that respond to what the user selects belong in DAX."
  - "Putting logic in the wrong layer is a common cause of slow, fragile models that are hard to maintain."
  - "Knowing where each kind of logic belongs is part of what separates a well-built model from one that technically works."
faqs:
  - q: "What is the difference between DAX and Power Query?"
    a: "They are two different tools in Power BI that do their work at different times. Power Query shapes and transforms data as it is loaded into the model, cleaning, combining, filtering, and restructuring the raw data from your sources into the tables the model holds. DAX calculates as reports are used, computing measures and values in response to what the viewer selects, filters, and drills into. The key distinction is timing: Power Query runs when data is refreshed, preparing the data once, while DAX runs continuously as people interact with reports, computing on the fly against whatever the user has selected. Because they run at different times, the same result can have very different costs depending on which one you use."
  - q: "Should I do a calculation in Power Query or DAX?"
    a: "It depends on whether the calculation is about preparing the data or responding to the user. If it is shaping or cleaning the data itself, fixing types, combining sources, filtering out what you never want, creating columns that are just properties of the data, that belongs in Power Query, done once at load. If it is a calculation that needs to respond to what the viewer selects, a total that recomputes as they filter, a measure that changes with the slice, that belongs in DAX, computed live. A rough rule: if the answer is the same regardless of how the user looks at the report, prepare it in Power Query; if it changes with the user's selections, compute it in DAX."
  - q: "What happens if logic is in the wrong place?"
    a: "Models get slow, fragile, or hard to maintain, depending on which way the logic is misplaced. Calculations that could be done once in Power Query but are instead computed live in DAX make reports work harder than they need to, hurting performance. Data preparation forced into DAX, where it does not belong, tends to be convoluted and error-prone. And logic scattered in the wrong layers makes a model hard to understand and maintain, because the next person cannot tell where anything happens. Putting logic in the wrong place is one of the most common reasons a model that technically works is slow, fragile, and painful to change, which is why knowing where each kind belongs matters."
  - q: "Do I need to know this to use Power BI?"
    a: "Not to use reports, but whoever builds the model does, because where logic lives determines whether the model performs and stays maintainable. Someone consuming reports never sees Power Query or DAX. But the person building the model has to decide where each piece of logic belongs, and getting that right is a real part of building a model that is fast, correct, and maintainable rather than one that merely produces the right numbers today. This is one of the areas where experience shows, because the difference between a model that works well and one that works for now often comes down to whether its logic was put in the right layers, which is exactly the kind of judgment a good partner brings."
---

Power BI gives you two different places to put logic, and one of the quieter skills in building a good model is knowing which to use for what. The two are **Power Query**, which shapes data as it is loaded, and **DAX**, which calculates as reports are used. They can often produce the same result, which is exactly why the choice matters: the same answer computed in the wrong place can cost you performance, correctness, or maintainability. Here is what each one does, where each kind of logic belongs, and why getting this right is part of what separates a well-built model from one that merely works.

## Two places, two different times

The key to the whole distinction is **timing.** Power Query and DAX do their work at different moments, and that difference drives everything else.

**Power Query** runs when data is **loaded.** It shapes and transforms the raw data from your sources, cleaning it, combining tables, filtering, fixing types, restructuring, into the tables the model holds. This work happens once, at refresh, and produces the prepared data the model sits on. **DAX** runs when reports are **used.** It computes measures and values live, in response to what the viewer selects, filters, and drills into, recalculating continuously as people interact with the report.

So Power Query prepares the data **once**, ahead of time, and DAX calculates **continuously**, on the fly, against whatever the user is currently looking at. That timing difference is why the same result can have very different costs depending on where you put it. Work done once in Power Query is paid for once per refresh; work done in DAX is paid for every time someone interacts with the report. Put the wrong kind of work in the wrong place and you either pay repeatedly for something you could have prepared once, or force live, user-responsive logic into a layer that cannot do it.

## Where each kind of logic belongs

The dividing line is whether the logic is about **preparing the data** or **responding to the user.**

Logic that **shapes or cleans the data itself** belongs in **Power Query.** Fixing data types, combining sources, filtering out rows you never want, creating columns that are simply properties of the data, these are all preparation, and they should be done once, at load, in Power Query. The data arrives in the model already clean and shaped, and nothing is recomputed when people use reports, because the answer does not depend on how anyone looks at it.

Logic that needs to **respond to what the viewer selects** belongs in **DAX.** A total that recomputes as the user filters, a measure that changes with the slice they choose, a calculation that only makes sense in the context of the user's current selection, these have to be computed **live**, because the answer depends on what the user is doing, and only DAX runs at that moment. A useful rule of thumb captures most cases: **if the answer is the same regardless of how the user looks at the report, prepare it in Power Query; if it changes with the user's selections, compute it in DAX.** A product's category is the same however you slice the report, so it is Power Query work. Sales for the current selection changes with every filter, so it is DAX work.

## What goes wrong in the wrong layer

Putting logic in the wrong place is one of the most common reasons a model that technically produces the right numbers is nonetheless **slow, fragile, or hard to maintain.** The problems differ depending on which way the logic is misplaced.

When logic that **could be done once in Power Query** is instead computed **live in DAX**, reports work harder than they need to. Something that could have been prepared at load is recalculated every time someone interacts with the report, which hurts performance for no reason, because the answer never actually changes with the user's selection. When **data preparation** is forced into **DAX**, where it does not belong, the result tends to be convoluted and error-prone, because DAX is being used for a job it is not suited to, straining to do at report time what should have been done cleanly at load. And when logic is **scattered across the wrong layers** generally, the model becomes hard to understand and maintain, because the next person cannot tell where anything happens or why, so every change risks breaking something.

These problems compound and are easy to miss early, because the model still produces the right answers, it just does so slowly, fragilely, and in a way that gets harder to work with over time. A model can pass the test of "the numbers are right" and still fail the tests of "it is fast," "it is maintainable," and "the next person can understand it," and misplaced logic is a frequent cause of exactly that gap.

## Why this is part of building it well

You do not need to know any of this to **use** Power BI reports; the person consuming a report never sees Power Query or DAX, which is as it should be. But whoever **builds** the model does need to know it, because where the logic lives determines whether the model performs and stays maintainable, not just whether it produces the right numbers today.

This is one of the areas where experience quietly shows. The difference between a model that works **well** and one that works **for now** often comes down to whether its logic was put in the right layers: data preparation done once in Power Query, user-responsive calculation done live in DAX, each kind where it belongs, so the model is fast, correct, and maintainable rather than slow, fragile, and confusing. It is exactly the kind of judgment that does not show up in a demo, where any model looks fine, but shows up over months of the model being used, extended, and maintained. A good partner builds with this distinction in mind by default, which is part of what you are getting when the modeling is done properly: not just a model that returns the right answers, but one built so it keeps performing and stays workable as it grows. The numbers being right is the floor; where the logic lives is much of what decides whether the model is actually good.
