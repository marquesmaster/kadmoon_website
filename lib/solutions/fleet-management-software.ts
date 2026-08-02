import type { Solution } from './types';

export const fleetManagement: Solution = {
  slug: 'fleet-management-software',
  name: 'Fleet management software',
  category: 'Logistics',
  eyebrow: 'Fleet management software',
  metaTitle: 'Custom Fleet Management Software | Kadmoon',
  metaDescription:
    'Kadmoon builds custom fleet management software: real-time vehicle location, routing, telematics, fuel and maintenance, cost per mile, and driver compliance. Senior in-house team, code you own.',
  keywords: [
    'fleet management software',
    'custom fleet management software',
    'fleet tracking software',
    'telematics software',
    'vehicle routing software',
  ],
  tagline: 'Fleet management software built around how your fleet really runs.',
  heroIntro:
    'Fleet management software tracks where your vehicles are, how they are driven, and what they cost, so you can dispatch, route, and maintain a fleet from one place. Kadmoon builds it around your operation: real-time location and telematics, routing, fuel and maintenance, cost per mile, and driver compliance, integrated with the systems you already run and delivered as code and infrastructure you own.',
  problem:
    'Most fleets track vehicles in one tool, log maintenance in a spreadsheet, pull fuel data from a card portal, and check compliance by hand. The pieces never line up, so nobody can say what a route actually cost, which trucks are due for service, or why utilization is slipping. Off-the-shelf platforms add per-vehicle fees and still leave you exporting data to answer the questions that matter.',
  approach:
    'We start from how your fleet is dispatched, serviced, and paid for, then define measurable acceptance criteria for each piece, from location accuracy to maintenance triggers. We build in two-week sprints with a working demo each cycle, wire in your telematics hardware and fuel and back-office systems properly, and hand over the source code and infrastructure so you are not renting your own operational data.',
  highlights: [
    {
      title: 'Real-time location and telematics',
      description:
        'Live vehicle location, trips, and engine and driving data from GPS and telematics hardware on one map and timeline.',
    },
    {
      title: 'Routing that reflects the job',
      description:
        'Route planning and dispatch built around your stops, time windows, and vehicle constraints, not a generic optimizer.',
    },
    {
      title: 'Maintenance before breakdowns',
      description:
        'Service schedules, inspections, and fault codes tracked per vehicle, with alerts driven by mileage, hours, and engine data.',
    },
    {
      title: 'Fuel and true cost per mile',
      description:
        'Fuel transactions, maintenance, and utilization rolled into cost per mile and per vehicle you can actually trust.',
    },
    {
      title: 'Driver and compliance in one place',
      description:
        'Driver assignments, hours, licenses, and inspection records tracked so audits and renewals do not sneak up on you.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-vehicle lock-in, no data held hostage.',
    },
  ],
  modules: [
    {
      name: 'Tracking and telematics',
      features: [
        'Real-time vehicle location on a live map',
        'Trip history, geofences, and route playback',
        'Telematics and GPS hardware integration',
        'Driving behavior, idling, and utilization data',
      ],
    },
    {
      name: 'Routing and dispatch',
      features: [
        'Route planning with stops and time windows',
        'Dispatch and assignment to drivers and vehicles',
        'ETA and status updates for the back office',
        'Proof of delivery and job completion',
      ],
    },
    {
      name: 'Maintenance and fuel',
      features: [
        'Preventive service schedules and inspections',
        'Fault codes and alerts from engine data',
        'Fuel transaction tracking and reconciliation',
        'Cost per mile and per vehicle reporting',
      ],
    },
    {
      name: 'Drivers, compliance, and mobile',
      features: [
        'Driver profiles, licenses, and hours',
        'Inspection and compliance records',
        'Mobile app for drivers in the field',
        'Role-based access and audit trails',
      ],
    },
  ],
  whoFor: [
    'Fleets outgrowing spreadsheets and a patchwork of single-purpose tools.',
    'Operations that need location, maintenance, fuel, and compliance in one source of truth.',
    'Logistics and field-service teams paying per-vehicle fees for a platform that still cannot answer their questions.',
  ],
  faqs: [
    {
      q: 'What is fleet management software?',
      a: 'Fleet management software is a system for tracking and running a fleet of vehicles from one place. It typically covers real-time location and telematics, routing and dispatch, maintenance, fuel, cost per mile, and driver and compliance records. A custom build shapes those around your actual operation and integrates the hardware and back-office systems you already use.',
    },
    {
      q: 'Custom fleet software vs an off-the-shelf platform: which is better?',
      a: 'Off-the-shelf platforms are the right call when your operation fits their model and the per-vehicle pricing stays reasonable. A custom build wins when you run non-standard routing or maintenance rules, when you need real integration with dispatch, ERP, or fuel systems, or when per-vehicle fees climb faster than the value. Many fleets also keep a tracking product and build custom routing, cost, and compliance layers around it.',
    },
    {
      q: 'Can it work with our existing GPS and telematics hardware?',
      a: 'Yes. We integrate the telematics and GPS devices you already run, or recommend hardware if you are starting fresh, and normalize their data into one model. That includes location, trips, engine and fault data, and driving behavior, so you are not locked to a single vendor and can change hardware later without rebuilding the software.',
    },
    {
      q: 'How much does custom fleet management software cost?',
      a: 'Cost tracks scope: how many of the pieces you need (tracking, routing, maintenance, fuel, compliance, mobile), how many integrations, and fleet size and data volume. A focused tool for one workflow costs far less than a full platform. We scope the build with acceptance criteria per module so the price maps to something you can verify, and there are no per-vehicle license fees on what you own.',
    },
    {
      q: 'How long does it take to build?',
      a: 'A first usable piece, often live tracking or maintenance, commonly ships in a few months, with a working demo every two weeks. The full system grows in phases rather than one long build, so early modules deliver value while routing, fuel, and compliance are still in progress.',
    },
  ],
  related: [
    { label: 'Logistics software we build', href: '/industries/logistics' },
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
    { label: 'Custom software development company', href: '/custom-software-development-company' },
  ],
};
