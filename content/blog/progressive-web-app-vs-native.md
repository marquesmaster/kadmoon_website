---
title: "Progressive web app vs native app: which do you need?"
description: "Progressive web app vs native app compared: what a PWA can and cannot do, offline and install behavior, native-only features, and real case-study results."
category: "Mobile Apps"
primaryKeyword: "pwa vs native app"
tags: ["progressive web app", "web app vs native", "pwa pros and cons", "pwa performance"]
takeaways:
  - "A PWA is one web codebase that installs to the home screen, works offline, and sends notifications, and for form, dashboard, and API-driven business apps it delivers an experience users perceive as a real app."
  - "The PWA vs native decision comes down to whether your must-have features need native-only capabilities like deep hardware access, guaranteed background processing, top-tier graphics, or app store distribution."
  - "PWAs are usually cheaper because there is no separate iOS and Android build or store review, you ship updates instantly, and you avoid app store commissions historically as high as 30%."
  - "Real results back the performance case: Tinder's PWA cut time-to-interactive from 11.91 to 4.69 seconds at about 90% smaller than the native Android app, and AliExpress saw a 104% jump in new-user conversion."
  - "Test iOS behavior before committing, since iPhones hold a clear US majority in the high 50s to low 60s percent and Apple's PWA support has historically lagged Android's."
faqs:
  - q: "What is the difference between a PWA and a native app?"
    a: "A PWA is a website enhanced with a service worker and manifest so the browser can treat it like an installed app, delivered from one codebase that also serves desktop. A native app is platform-specific software built in each platform's toolchain and distributed through the app stores. The PWA runs inside the browser's sandbox, which limits access to certain hardware and OS features."
  - q: "What can a PWA not do compared to native?"
    a: "A PWA cannot reach every corner of the device. Deep hardware access like advanced camera controls, Bluetooth, and NFC, background processing that keeps running when the app is closed, tight integration with contacts or health data, and the highest tier of graphics performance all favor native. App store presence, in-app purchases, and MDM-managed distribution also require a native binary."
  - q: "Is a PWA cheaper than a native app?"
    a: "Usually, because it is one codebase serving web and mobile with no separate iOS and Android builds and no store review cycle. You ship updates instantly by deploying to your server, and you avoid the app store commission on in-app purchases, historically as high as 30%. Native costs more because you build and maintain platform-specific software and navigate store review."
  - q: "When is a PWA enough instead of native?"
    a: "List your must-have features and check whether any require native-only capabilities. If none do, a PWA gives most of the benefit at a fraction of the cost, and it fits internal tools, B2B dashboards, portals, and anything centered on displaying and editing data over the network. Many teams launch a PWA to validate quickly, then add native only for features that demand it."
---

Not every mobile experience needs an app in the store. A progressive web app (PWA) is a website engineered to behave much like a native app: it can be installed to the home screen, work offline, and send notifications, all from a single codebase that also serves your desktop users. The PWA vs native app decision comes down to which native capabilities you actually need and how you want to reach users. Here is how to make that call without over-building, with real results from companies that shipped both.

## What a PWA can and cannot do

A PWA is web technology, HTML, CSS, and JavaScript, enhanced with a service worker (a script that runs in the background) and a manifest that lets the browser treat it like an installed app. Users can add it to their home screen, launch it full-screen without browser chrome, and use it offline. For a large class of business apps built from forms, dashboards, and API calls, a PWA delivers an experience users perceive as a real app.

The performance ceiling is higher than skeptics assume. When Tinder rebuilt its experience as a PWA, [it cut time-to-interactive from 11.91 seconds down to 4.69 seconds, and the PWA came in about 90% smaller than the native Android app](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0). That is the core product running in a fraction of the download size. What a PWA cannot do is reach every corner of the device. The web platform has closed much of the gap, but a PWA still runs inside the browser's sandbox, which limits access to certain hardware and OS features. The honest question is not whether a PWA feels app-like, since it usually can, but whether your specific features need something only native code can reach.

It also helps to be clear about what "progressive" means. A PWA degrades gracefully: the same site works as an ordinary web page on a browser that supports none of the app features, and progressively gains install, offline, and notification behavior on browsers that do. You are not building two things. You are building one web app that becomes more capable where the platform allows it.

## Install, offline, and notifications

Installation from the web is friction-light: users visit a URL and choose to install, with no app store download. That is a genuine advantage for reach, though it is less discoverable than a store listing and the install prompt behaves differently across platforms. On Android the experience is close to native. On iOS it works but with more limitations, which matters if your audience is iPhone-heavy.

The engagement payoff can be large. Twitter Lite, the company's PWA, [drove a 65% increase in pages per session, a 75% increase in tweets sent, and a 20% reduction in bounce rate](https://www.mobiloud.com/blog/progressive-web-app-examples) after launch, while loading in under three seconds on slow networks. AliExpress reported a [104% jump in conversion rate for new users after moving to a PWA](https://www.mobiloud.com/blog/progressive-web-app-examples), along with roughly twice the pages visited per session. Offline support through service workers is what makes much of this possible: the PWA caches assets and data so it functions without a connection, which covers many field and travel scenarios. Push notifications are supported too, though again with platform differences, since iOS added web push relatively recently and with constraints. If notifications and offline are important but not deeply hardware-dependent, a PWA often clears the bar. If you need rich, reliable offline sync, weigh the deeper patterns in [offline-first mobile apps](/blog/offline-first-mobile-apps).

## Native-only capabilities

Some things still require a native app. Deep hardware access (advanced camera controls, Bluetooth peripherals, NFC in many cases), background processing that keeps running when the app is closed, tight integration with device features like contacts or health data, and the highest tier of graphics performance all favor native. Certain enterprise distribution and mobile device management scenarios also assume a native binary.

App store presence itself is sometimes the requirement. If users expect to find you in the App Store or Google Play, if you monetize through in-app purchases, or if your buyers mandate MDM-managed native apps, the store is not optional. These are the cases where a PWA hits a wall no amount of web engineering can climb, and where [cross-platform vs native apps](/blog/cross-platform-vs-native-apps) becomes the more relevant comparison.

## Cost and distribution differences

A PWA is usually cheaper to build and maintain because it is one codebase serving web and mobile, with no separate iOS and Android builds and no app store review cycle. You ship updates instantly by deploying to your server, and every user gets the new version on next load. There is no store commission and no approval delay when you need to fix something fast.

Native apps cost more because you are building and maintaining platform-specific software, navigating store review, and shipping updates users have to accept. Two separate native codebases, iOS and Android, roughly double the surface you build and test against, on top of a web app if you also want one. Cross-platform frameworks reduce that overhead but do not erase it. There is also the store tax: Apple and Google take a commission on in-app purchases and subscriptions, historically as high as 30%, that a PWA selling through your own web checkout avoids entirely. The distribution trade-off is real: the store gives you discoverability and trust signals a PWA lacks, while the PWA gives you speed and a single code path. Neither is free of cost, they just move the cost around.

The size difference is not only a build-cost story, it is a reach story. The [90% smaller footprint Tinder achieved with its PWA](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0) meant users on slow networks and cheaper phones could actually load the product, an audience a heavy native binary quietly excludes. If your users are not all on flagship devices with fast connections, that gap decides whether they engage at all.

## When a PWA is enough

A PWA is often the right choice for internal business tools, B2B dashboards, content and portal apps, and anything where the core job is displaying and editing data over the network. If your users are as likely to be on a laptop as a phone, a PWA serves both from one build, which is hard to beat on efficiency. Startups validating an idea also benefit, since a PWA lets them reach mobile users without committing to full native development.

The signal that a PWA is enough: list your must-have features and check whether any of them require native-only capabilities. If none do, a PWA gives you most of the benefit at a fraction of the cost and maintenance. That framing is the same one behind [when a PWA is enough](/#capabilities) versus building for the store.

## Choosing for your use case

Start from the capabilities and the audience, not the technology. If your feature list stays inside what the web platform supports, and app store presence is not a hard requirement, default to a PWA and save the cost and complexity of native. If you need deep hardware access, guaranteed background behavior, top-tier performance, or store distribution, go native or cross-platform.

Many organizations do both over time: launch a PWA to reach users quickly and validate, then invest in native only for the specific features that demand it. That staged path keeps early spending low and defers the expensive commitment until the requirements are proven, which is often the smartest use of a limited budget.

Be honest about iOS in particular when you decide. It is not a niche audience in the US market, where [iPhones hold a clear majority of smartphone share, generally reported in the high 50s to low 60s percent](https://gs.statcounter.com/os-market-share/mobile/united-states-of-america). Apple's support for PWA features has historically lagged Android's, so if your audience skews heavily toward iPhone users, test the specific behaviors you depend on before you commit rather than assuming parity. The gap keeps narrowing, but it is real today, and it is exactly the kind of detail that turns a confident plan into a surprise. If you want help mapping your features to the right approach, [start a project](/#contact) with a short scoping conversation, and browse [the blog](/blog) for related mobile decisions.
