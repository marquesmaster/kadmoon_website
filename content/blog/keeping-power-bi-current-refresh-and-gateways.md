---
title: "Keeping Power BI current: data refresh, gateways, and when you need real time"
description: "How Power BI reports stay up to date: scheduled refresh, the data gateway for on-premises sources, and an honest look at when you actually need real-time data versus current enough to act on."
category: "Power BI"
primaryKeyword: "power bi data refresh"
tags: ["Power BI", "data refresh", "gateway", "operations", "real-time"]
takeaways:
  - "Most Power BI reports stay current through scheduled refresh, which pulls new data on a set cadence rather than continuously."
  - "A data gateway is what lets Power BI in the cloud reach data that still lives on-premises or behind your firewall, securely."
  - "The right refresh frequency is a business question, set by how often the decision is made, not a technical maximum to chase."
  - "True real-time is possible but rarely necessary, and it costs more in complexity, so most operations are served by frequent scheduled refresh."
  - "Refresh reliability matters as much as frequency, because a report that silently stops updating quietly loses trust."
faqs:
  - q: "How often can Power BI data refresh?"
    a: "For most reporting, Power BI refreshes on a schedule you set, which can run several times a day on standard licensing and more frequently on capacity. The practical question is not the maximum frequency but the right one, which is set by how often the decision the report serves actually gets made. A daily management report does not benefit from hourly refreshes; a live operations view might. Match the cadence to the decision, and you avoid both stale reports and the cost and complexity of refreshing more often than anyone uses."
  - q: "What is a data gateway and do we need one?"
    a: "A data gateway is a small piece of software that lets Power BI in the Microsoft cloud securely reach data that lives on-premises or behind your firewall, such as an on-premise SQL Server or files on an internal server. You need one when your sources are not already in the cloud. It runs inside your network, so your data is reached through a controlled channel rather than being exposed, and it is a standard, well-understood part of most Power BI deployments. If all your sources are cloud-based, you may not need a gateway at all; if some are on-premise, it is the normal way to connect them."
  - q: "Do we need real-time data in Power BI?"
    a: "Usually not, though it is often asked for. Real-time means the report reflects changes continuously, to the second, and it adds real complexity and cost. Most decisions, even operational ones, are served perfectly by data that is current to within the last refresh, which can be frequent. The honest test is whether anyone would act differently on second-by-second data than on data refreshed every hour or every fifteen minutes. For a specific need, a live inventory board, a real-time operations screen, it is worth building; as a default expectation, it usually is not, and chasing it adds cost nobody uses."
  - q: "What happens if a refresh fails?"
    a: "The report keeps showing the last data that loaded successfully, which means it can silently go stale if a failure is not noticed. This is why refresh reliability matters as much as frequency: a report that quietly stops updating erodes trust the moment someone discovers the numbers are old. Good practice is to monitor refreshes, alert on failures, and fix the cause, whether it is a credential that expired, a source that changed, or a gateway that went offline, rather than discovering the problem when a leader acts on a week-old number. Keeping refresh healthy is part of running Power BI well, not a one-time setup."
---

A Power BI report is only as useful as it is current, and keeping it current is a part of the platform that rarely gets discussed until something goes stale. How does the data actually get updated? What connects a cloud report to data sitting in your own systems? And do you really need the real-time data everyone asks for? These are practical questions with practical answers, and getting them right is the difference between reports people trust and reports people quietly stop believing. Here is how keeping Power BI current actually works.

## Scheduled refresh: how reports stay up to date

The first thing to understand is that most Power BI reports do not update continuously. They update on a **schedule**. You set a cadence, and at each scheduled time Power BI pulls the latest data from the sources, recalculates, and the reports reflect the new data.

This surprises people who expect reports to be live, but it is the right design for the large majority of reporting. A management report refreshed each morning is current for every decision made that day. An operations report refreshed every hour keeps pace with an operation that moves hourly. The data is current as of the last refresh, and for most decisions that is exactly what current means.

The practical question is not how often Power BI *can* refresh, but how often it *should*, and that is a business question, not a technical one. It is set by how often the decision the report serves actually gets made. Refreshing more often than anyone uses adds load and cost for no benefit; refreshing less often than the decision needs leaves people acting on stale numbers. Match the cadence to the decision and you have it right.

## The data gateway: reaching data in your own systems

Power BI runs in the Microsoft cloud, but a lot of business data does not. It lives in an on-premise SQL Server, in files on an internal server, in systems behind your firewall. Something has to connect the cloud report to that on-premise data, securely, and that something is the **data gateway**.

A gateway is a small piece of software that runs inside your network. When Power BI needs to refresh from an on-premise source, it reaches it through the gateway, over a controlled, authenticated channel, rather than requiring your data to be exposed to the internet. Your data stays where it is; the gateway is the secure door Power BI knocks on to get the latest copy for the refresh.

You need a gateway when your sources are on-premise or behind your firewall. If all your data already lives in the cloud, in Azure, in a cloud database, in cloud applications, you may not need one at all. In a typical organization with a mix, the gateway is a standard, well-understood component, and connecting on-premise sources through it is routine rather than exotic. It is worth knowing it exists, because it is often the answer to the question of how Power BI will reach the data you keep in-house.

## The real-time question, answered honestly

Almost every Power BI project hears the request for real-time data, and it deserves an honest answer rather than an automatic yes.

**Real-time** means the report reflects changes continuously, to the second, as they happen. It is possible in Power BI, and it adds genuine complexity and cost, because continuous data flow is a different and heavier thing than a periodic refresh.

The honest test for whether you need it is simple: would anyone actually act differently on second-by-second data than on data refreshed every hour, or every fifteen minutes? For the large majority of decisions, even operational ones, the answer is no. A sales leader does not restaff on a per-second basis. A finance team does not re-close the books every second. The decision cadence is slower than real time, so frequent scheduled refresh serves it completely.

There are real exceptions, a live inventory board, a real-time operations screen, a monitoring dashboard where seconds matter, and for those it is worth building the real-time path. But as a default expectation applied to every report, real-time is usually a request for complexity and cost that nobody ends up using. The better instinct is to make reports **current enough to act on**, which is almost always frequent scheduled refresh, and reserve real-time for the specific cases that truly need it.

## Reliability matters as much as frequency

There is a quieter issue that matters as much as how often reports refresh: whether the refresh actually succeeds. When a refresh fails, the report does not show an error; it keeps showing the last data that loaded. So a report can silently go stale, looking perfectly normal while the numbers behind it are days old.

This is how trust gets lost. Someone acts on a figure, discovers it was a week out of date because a refresh had been quietly failing, and from then on doubts every number on the page. One silent staleness can undo a lot of good reporting.

So keeping Power BI current is not only about setting a cadence; it is about **monitoring that the refreshes work**. Good practice alerts on failures and fixes the cause, an expired credential, a changed source, a gateway that went offline, before anyone acts on stale data. This is part of running Power BI as an ongoing service rather than a one-time build, and it is exactly the kind of thing that distinguishes an estate that stays trustworthy from one that slowly rots while looking fine.

## The practical picture

Putting it together, keeping Power BI current comes down to a few sensible choices:

- **Set refresh to the decision's cadence**, not to the technical maximum. Daily for daily decisions, hourly for hourly ones.
- **Use a gateway** to reach on-premise and firewalled sources securely; skip it where everything is already in the cloud.
- **Treat real-time as the exception**, built for the specific cases that genuinely need it, not the default for everything.
- **Monitor refresh reliability**, because a report that silently stops updating costs more trust than one that refreshes a little less often.

None of this is glamorous, which is exactly why it gets overlooked, and exactly why getting it right quietly separates a Power BI estate people rely on from one they learn not to trust. Current, reliable data is the unshowy foundation that makes every dashboard above it worth looking at.
