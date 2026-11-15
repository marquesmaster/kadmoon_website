---
title: "What-if parameters: turning a report into a tool for exploring scenarios"
description: "Most reports tell you what happened. What-if parameters let people ask what would happen, adjusting an assumption and watching the numbers respond, which turns a report from a record into a tool for thinking through decisions."
category: "Power BI"
primaryKeyword: "power bi what-if parameters"
tags: ["Power BI", "what-if", "scenarios", "modeling", "decision support"]
takeaways:
  - "Most reports show what happened; what-if parameters let people explore what would happen under different assumptions."
  - "A what-if parameter is an adjustable input that the viewer changes, and the report recalculates to show the effect."
  - "This turns a report from a record of the past into a tool for thinking through decisions and scenarios."
  - "It works well for questions like pricing changes, growth assumptions, or cost scenarios, where seeing the effect helps decide."
  - "Used well, what-if adds genuine decision support, as long as the assumptions behind it are clear and honest."
faqs:
  - q: "What is a what-if parameter in Power BI?"
    a: "A what-if parameter is an adjustable input in a report that the viewer can change, a value they set with a slider or selection, which the report's calculations then use, so the numbers recalculate to show the effect of that choice. Instead of the report showing one fixed scenario, it lets the viewer vary an assumption, a price, a growth rate, a cost, and see how the results respond. It turns a static report into an interactive model for that assumption: change the input, watch the outputs update. This is what lets a report answer what would happen questions rather than only showing what did happen."
  - q: "What are what-if parameters good for?"
    a: "Questions where seeing the effect of a changed assumption helps someone decide: pricing changes, growth or volume assumptions, cost scenarios, and similar. For example, what happens to revenue if we raise prices by a certain amount, or to margin if costs rise, or to the forecast under different growth rates. A what-if parameter lets the viewer dial the assumption and immediately see the modeled effect, which is far more useful for decision-making than a single fixed number. It is well suited to any decision where understanding the sensitivity to an assumption, how much the outcome changes as the input changes, is part of making the call."
  - q: "How is this different from a normal report?"
    a: "A normal report shows what happened, fixed results from actual data; a what-if parameter lets the viewer explore what would happen by changing an assumption and seeing the modeled result. The normal report is a record; the what-if report is a tool for thinking through scenarios. Both have their place, most reporting is about understanding what actually happened, but for decisions that hinge on assumptions about the future or on hypothetical changes, the ability to vary the input and see the effect adds something a fixed report cannot: it lets people test their thinking against the numbers rather than just reading a single outcome."
  - q: "Are there risks with what-if analysis?"
    a: "The main risk is that the modeled scenarios are only as good as the assumptions behind them, so what-if analysis has to be built and used with the assumptions clear and honest. A what-if parameter produces confident-looking numbers for any input, but those numbers rest on the logic connecting the input to the output, and if that logic oversimplifies or the assumptions are unrealistic, the scenario can mislead even though it looks precise. Used well, with the assumptions transparent and the model sound, what-if adds genuine decision support; used carelessly, it can give false confidence. A good partner builds what-if analysis so the assumptions are clear, so people treat the scenarios as informed models, not predictions."
---

Most reports answer the question "what happened?" They show the results from actual data: sales, costs, performance, as they were. That is valuable, but it leaves a whole class of questions unanswered, the ones that start with "what if?" What if we raised prices? What if growth slowed? What if costs rose? **What-if parameters** let a report answer those questions, by letting people adjust an assumption and watch the numbers respond. This turns a report from a **record** of the past into a **tool** for thinking through decisions. Here is what what-if parameters are and where they help.

## From what happened to what would happen

The defining limitation of a normal report is that it shows **what happened**, one fixed set of results from actual data. It is a **record**: accurate, useful for understanding, but static. It cannot tell you what **would** happen under different circumstances, because it only reflects the circumstances that actually occurred.

A **what-if parameter** breaks that limitation. It is an **adjustable input** in the report that the viewer can **change**, a value they set, typically with a slider or a selection, which the report's calculations then **use**, so the numbers **recalculate** to show the effect of that choice. Instead of one fixed scenario, the report lets the viewer **vary an assumption** and see how the results respond. Change the input, and the outputs update to reflect it. This turns the report, for that assumption, into an **interactive model**: not just a picture of what was, but a tool for exploring what would be. The question shifts from "what happened?" to "what would happen if?", which is exactly the question many decisions actually turn on.

## Where what-if helps

What-if parameters are valuable for decisions where **seeing the effect of a changed assumption** helps someone decide, which covers a lot of real business questions. **Pricing changes**: what happens to revenue if we raise prices by a certain amount? **Growth or volume assumptions**: what does the forecast look like under different growth rates? **Cost scenarios**: what happens to margin if costs rise by some amount? In each, the decision depends not on a single fixed number but on understanding how the outcome **responds** to an assumption.

A what-if parameter lets the viewer **dial the assumption** and immediately see the **modeled effect**, which is far more useful for these decisions than a single fixed figure. It reveals **sensitivity**, how much the outcome changes as the input changes, which is often the crux of the decision: a result that barely moves as the assumption varies is robust, while one that swings wildly is risky and assumption-dependent. Seeing that directly, by moving the input and watching the output, helps people make better decisions than reading one number ever could, because it shows them not just an answer but how much the answer depends on what they are assuming. For any decision where the question is really "how does this change things, and how sensitive is it?", what-if analysis is exactly the right tool.

## A tool for thinking, not just reading

The deeper value is that what-if parameters make a report a **tool for thinking**, not just something to read. A fixed report gives people a result to absorb; a what-if report lets them **test their thinking against the numbers.** Someone considering a price increase can try different levels and see the modeled effect on revenue and margin, exploring the decision interactively rather than asking for a new analysis for each scenario and waiting.

This is a genuinely different relationship with the report. Instead of the report being the end of the analysis, a static answer, it becomes a place to **explore**, where the user drives the scenarios and the report responds. It is the difference between being **told** an answer and being able to **investigate** the question, and for decisions that hinge on assumptions, that investigation is where understanding comes from. Both kinds of report have their place, most reporting is rightly about understanding what actually happened, but for forward-looking or hypothetical decisions, the ability to vary the input and see the effect adds something no fixed report can: it puts the exploration in the hands of the person making the decision, in the moment they are making it.

## The honest caveat: assumptions matter

What-if analysis comes with a real risk that has to be respected: the modeled scenarios are **only as good as the assumptions behind them.** A what-if parameter will produce **confident-looking numbers for any input** you give it, but those numbers rest entirely on the **logic connecting the input to the output.** If that logic oversimplifies, or the assumptions are unrealistic, the scenario can **mislead** even while it looks precise, which is dangerous precisely because the output looks as authoritative as any other number in the report.

So what-if analysis has to be built and used with the **assumptions clear and honest.** The model behind the parameter should be sound, capturing the real relationship between the input and the outcome rather than a convenient oversimplification, and the assumptions should be **transparent**, so people understand that they are looking at a **modeled scenario**, not a prediction. Used this way, with the model solid and the assumptions in view, what-if adds genuine **decision support**, helping people reason about the future with the numbers. Used carelessly, with hidden or unrealistic assumptions, it gives **false confidence**, dressing a guess up as analysis. This is why a good partner builds what-if analysis so the assumptions are explicit and the logic is sound, so people treat the scenarios as **informed models to reason with**, not forecasts to trust blindly. The power of what-if is real, but it is the power to explore assumptions, and that only helps when everyone knows that is what they are doing.

## The point in short

What-if parameters turn a report into a tool for exploring decisions:

- Normal reports show **what happened**; what-if parameters explore **what would happen**.
- A **what-if parameter** is an adjustable input the viewer changes, and the report recalculates.
- It suits decisions on **pricing, growth, costs**, and anywhere sensitivity to an assumption matters.
- It makes a report a **tool for thinking**, letting people test their reasoning against the numbers.
- The scenarios are **only as good as their assumptions**, so build and use them with assumptions clear.

The throughline is that many decisions turn not on what happened but on what would happen under different assumptions, and what-if parameters let a report answer that, by letting people adjust an input and see the effect. Done well, with sound models and transparent assumptions, this adds real decision support, turning a static record into an interactive tool for reasoning about choices. It is one of the ways a report can go beyond showing the past to actively helping people think through the future, as long as it is built and used honestly about the assumptions it rests on.
