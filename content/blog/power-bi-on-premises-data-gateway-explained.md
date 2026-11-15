---
title: "The on-premises data gateway explained: how Power BI reaches data behind your firewall"
description: "When your data lives in systems inside your own network, Power BI in the cloud needs a secure bridge to reach it. That bridge is the on-premises data gateway, and understanding it clears up a common source of confusion and refresh trouble."
category: "Power BI"
primaryKeyword: "power bi on-premises data gateway"
tags: ["Power BI", "data gateway", "refresh", "architecture", "security"]
takeaways:
  - "Power BI runs in the cloud, but much business data lives in systems inside your own network, so the two need a secure bridge."
  - "The on-premises data gateway is that bridge: it lets cloud Power BI reach on-premises data without exposing it to the internet."
  - "The gateway is what makes scheduled refresh work for data that stays behind your firewall."
  - "A healthy, properly set up gateway is essential, and a neglected one is a common cause of refresh failures."
  - "Understanding the gateway clears up confusion about why cloud Power BI can reach some data easily and other data needs extra setup."
faqs:
  - q: "What is the on-premises data gateway?"
    a: "The on-premises data gateway is software that acts as a secure bridge between Power BI in the cloud and data sources that live inside your own network, like an on-premises SQL Server or files on an internal server. Power BI runs in the cloud, but a lot of business data stays behind the company firewall, and the cloud service cannot reach into a private network directly. The gateway, installed on a machine inside the network, provides a controlled, secure channel so that cloud Power BI can get the on-premises data it needs, for refreshing datasets or querying live, without that data being exposed to the internet. It is the connector between the cloud service and your private data."
  - q: "Why do I need a gateway for some data but not other data?"
    a: "Because data already in the cloud is directly reachable by cloud Power BI, while data inside your network is not, and the gateway bridges that gap. If your data lives in a cloud service, Power BI can connect to it directly over the internet with the right credentials, no gateway needed. But if your data lives on-premises, behind your firewall, the cloud service has no direct path to it, so you install a gateway inside the network to provide a secure path. This is why cloud-based sources tend to just work while on-premises sources need the extra gateway setup, it is about where the data lives relative to the cloud service, not about the data itself."
  - q: "How does the gateway relate to refresh?"
    a: "The gateway is what makes scheduled refresh work for on-premises data. When a dataset built on on-premises data refreshes, Power BI reaches back through the gateway to pull the current data from the source inside your network, so the gateway has to be running and healthy for that refresh to succeed. If the gateway is down, overloaded, or misconfigured, refreshes that depend on it fail, and the reports go stale. This is why a healthy gateway matters: for any reporting built on data behind your firewall, the gateway is in the path of every refresh, and keeping it properly set up and running is essential to reliable refresh."
  - q: "Is the gateway something we have to manage ourselves?"
    a: "It needs to be installed and kept healthy, which is part of running an estate well, and a neglected gateway is a common cause of refresh problems. The gateway runs on a machine inside your network and needs to stay online, adequately resourced, and up to date, so it is an ongoing responsibility, not a one-time setup. Done well, it is reliable and largely invisible; neglected, it becomes a frequent point of failure. This is one of the things a managed arrangement looks after, keeping the gateway healthy so the on-premises data keeps flowing and refreshes keep working, which spares you a common and frustrating source of reporting trouble."
---

Here is a source of confusion that trips up a lot of organizations adopting Power BI: some data connects to the cloud service effortlessly, while other data needs extra setup and a piece of software called a gateway, and it is not obvious why. The answer is about **where the data lives.** Power BI runs in the cloud, but much business data lives in systems inside your own network, and bridging that gap is exactly what the **on-premises data gateway** does. Understanding it clears up the confusion and explains a common source of refresh trouble. Here is what the gateway is and why it matters.

## The gap: cloud service, on-premises data

The situation that creates the need is simple once you see it. **Power BI runs in the cloud.** The service that hosts your datasets and reports lives on Microsoft's infrastructure, not inside your building. But a great deal of business data lives **inside your own network**, behind your firewall: an on-premises SQL Server, databases on internal servers, files on a company file share. This data is deliberately **not** exposed to the internet, which is good for security but creates a problem: the cloud service has no direct way to reach into your private network to get it.

So there is a **gap** between where Power BI runs (the cloud) and where a lot of the data lives (inside your network). The cloud service cannot simply reach through your firewall to pull on-premises data, and you would not want it to be able to, that is what the firewall is for. Something has to bridge the gap in a **secure, controlled** way, giving the cloud service a path to the on-premises data without opening that data up to the internet. That something is the gateway.

## What the gateway is

The **on-premises data gateway** is software that acts as a **secure bridge** between Power BI in the cloud and data sources inside your network. You install it on a machine **inside the network**, where it can reach the on-premises data sources, and it establishes a controlled, secure channel out to the Power BI service.

With the gateway in place, the cloud service can get the on-premises data it needs, to refresh a dataset or query live, by going **through the gateway**, which reaches the source inside the network and passes the data back over the secure channel. Crucially, the data is **not exposed to the internet** in this arrangement: the gateway provides a specific, controlled path rather than opening the network, and it is the gateway that reaches **out** to establish the connection, so you are not opening an inbound hole in your firewall. The gateway is, in effect, a trusted agent living inside your network that the cloud service can ask for on-premises data through a secure channel, which is exactly what is needed to connect cloud Power BI to private data safely.

## Why some data needs it and some does not

This explains the confusion about why some sources just work and others need setup. It comes down to **where the data lives relative to the cloud service.**

Data that already lives in the **cloud**, a cloud database, a cloud application, is **directly reachable** by cloud Power BI over the internet with the right credentials, so it needs **no gateway.** The cloud service and the cloud data are both on the internet, so they can connect directly. Data that lives **on-premises**, behind your firewall, is **not** directly reachable by the cloud service, so it needs a **gateway** to bridge the gap. That is the whole distinction: cloud-based sources tend to "just work" because the cloud service can reach them directly, while on-premises sources need the extra gateway because the cloud service has no direct path into your private network. It is not about the data being different in kind; it is about **where it sits** relative to the cloud, and the gateway is what connects the cloud service to the data that sits inside your walls.

## The gateway and refresh

The gateway matters most in the context of **refresh.** When a dataset built on on-premises data refreshes, Power BI reaches **back through the gateway** to pull the current data from the source inside your network. So the gateway is in the **path of every refresh** for any dataset built on on-premises data, which makes its health directly tied to whether those refreshes succeed.

If the gateway is **down, overloaded, or misconfigured**, refreshes that depend on it **fail**, and the reports built on that data go stale. This is why the gateway is a common culprit in refresh trouble specifically for on-premises sources: it is a real piece of software running on a real machine inside your network, and if that machine is off, the gateway is not running, or it is not properly set up, the bridge is broken and the data cannot flow. A **healthy, properly configured gateway** is therefore essential to reliable refresh for on-premises data, and it is exactly the kind of thing that, when neglected, causes the frustrating pattern of refreshes that used to work suddenly failing. The gateway being in the refresh path is why keeping it healthy is not optional for any estate built on data behind the firewall.

## Keeping it healthy

Because the gateway runs on a machine inside your network, it is something that has to be **installed and kept healthy**, which is part of running an estate well. It needs to stay **online**, be **adequately resourced** so it is not overloaded, and be kept **up to date.** Done well, the gateway is reliable and largely invisible: the on-premises data flows, refreshes work, and nobody thinks about it. **Neglected**, it becomes a frequent and frustrating point of failure, the thing that silently breaks refreshes when its machine goes down or it falls out of date.

This ongoing care is one of the things a **managed** arrangement looks after: keeping the gateway healthy, resourced, and current so the on-premises data keeps flowing and refreshes keep working. For an organization with meaningful data behind its firewall, a well-run gateway is a quiet but essential part of reliable reporting, and making sure it stays healthy spares you one of the more common and confusing sources of reporting trouble. It is the kind of infrastructure that is easy to set up and forget until it fails, which is exactly why having it actively looked after is worth it.

## The point in short

The gateway is the bridge between cloud Power BI and your on-premises data:

- Power BI runs in the **cloud**, but much data lives **inside your network**, behind the firewall.
- The **on-premises data gateway** securely bridges that gap, without exposing the data to the internet.
- **Cloud data** needs no gateway; **on-premises data** does, because of where it sits relative to the cloud.
- The gateway is in the path of every **refresh** for on-premises data, so its health is essential and a neglected gateway is a common failure.

The throughline is that connecting cloud-based Power BI to data that deliberately stays behind your firewall requires a secure bridge, and the on-premises data gateway is that bridge. Understanding it explains why some sources connect effortlessly and others need setup, and why a healthy gateway is essential to reliable refresh for on-premises data. For any organization running reporting on data inside its own network, the gateway is a small but critical piece of the picture, and keeping it healthy, usually as part of a well-run or managed estate, is what keeps the on-premises data flowing and the reports current.
