import type { Solution } from './types';

export const schoolManagement: Solution = {
  slug: 'school-management-software',
  name: 'School management software',
  category: 'Education',
  eyebrow: 'School management software',
  metaTitle: 'School Management Software Development | Kadmoon',
  metaDescription:
    'Kadmoon builds custom school management software: student information, attendance, gradebook, scheduling, parent and teacher portals, and tuition billing you own. Senior in-house team, measurable scope, no lock-in.',
  keywords: [
    'school management software',
    'student information system',
    'custom school management software',
    'school management system development',
    'sis development',
  ],
  tagline: 'School management software built around how your school actually runs.',
  heroIntro:
    'School management software is a single system that runs the daily operation of a school: student records, attendance, grades, scheduling, billing, and the portals that connect teachers, parents, and administrators. Kadmoon builds it around your programs, calendar, and grading rules, connects the tools you already use, and hands you the code and infrastructure on delivery, so it fits your school and you own it.',
  problem:
    'Most schools run on a patchwork of a rigid student information system, a separate gradebook, spreadsheets for scheduling, and email for parents. Data is re-entered between tools, attendance and grades live in different places, tuition tracking sits in accounting nobody else can see, and every custom report or new program means a workaround. The staff spends time moving data between systems instead of teaching and running the school.',
  approach:
    'We start from your academic calendar, grading policy, and enrollment process, not a generic template. We map the workflow, define measurable acceptance criteria for each module, and build in two-week sprints with a working demo every cycle, so administrators and teachers can react to the real system early instead of at a launch at the end. We treat student data as sensitive from day one, with role-based access, audit trails, and FERPA-aware handling.',
  highlights: [
    {
      title: 'One system of record',
      description:
        'Student information, attendance, grades, schedules, and billing share one source of truth, so records stay consistent instead of drifting across tools.',
    },
    {
      title: 'Built around your grading and calendar',
      description:
        'Weighted grades, standards-based rubrics, terms, block schedules, and your own report card format, modeled the way your school actually grades and schedules.',
    },
    {
      title: 'Portals that fit each role',
      description:
        'Parents, students, teachers, and administrators each see what they need, from attendance and assignments to invoices and enrollment, on web and mobile.',
    },
    {
      title: 'Integrated with the tools you keep',
      description:
        'Connected to your LMS, accounting, payment processor, email, and single sign-on, so the software adds to your stack instead of replacing everything.',
    },
    {
      title: 'Student data handled with care',
      description:
        'Role-based access, audit logging, and FERPA-aware data handling built in, with the security controls documented rather than assumed.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-student license creep and no vendor lock-in.',
    },
  ],
  modules: [
    {
      name: 'Student information and enrollment',
      features: [
        'Student and family records with custom fields',
        'Enrollment, re-enrollment, and application workflows',
        'Health, contact, and document management',
        'Role-based access and audit trails',
      ],
    },
    {
      name: 'Attendance and gradebook',
      features: [
        'Daily and period attendance with alerts',
        'Weighted, points, and standards-based grading',
        'Report cards and transcripts in your format',
        'Progress tracking and teacher comments',
      ],
    },
    {
      name: 'Scheduling and academics',
      features: [
        'Course catalog, sections, and rooms',
        'Class and bell schedule building',
        'Teacher assignment and load management',
        'Term and academic calendar control',
      ],
    },
    {
      name: 'Portals and mobile',
      features: [
        'Parent and student portals for grades and attendance',
        'Teacher portal for rosters, grading, and communication',
        'Administrator dashboards and reporting',
        'Mobile apps with push notifications',
      ],
    },
    {
      name: 'Billing and integrations',
      features: [
        'Tuition and fee billing with online payments',
        'Invoices, plans, and financial aid tracking',
        'LMS, accounting, and single sign-on integrations',
        'Data import, export, and scheduled reports',
      ],
    },
  ],
  whoFor: [
    'Schools and districts outgrowing a rigid off-the-shelf SIS and a pile of spreadsheets.',
    'Private, charter, and specialty schools whose grading, calendar, or programs do not fit a standard product.',
    'Education groups that need attendance, grades, billing, and parent communication to work as one system.',
    'Institutions that must keep tight control over student data and access.',
  ],
  faqs: [
    {
      q: 'What is school management software?',
      a: 'School management software is a single system that runs the daily operation of a school, covering student records, attendance, grades, scheduling, tuition billing, and the portals that connect teachers, parents, and administrators. A custom build shapes those modules around your school\'s programs, grading policy, and calendar, and you own the code rather than renting a shared product.',
    },
    {
      q: 'Is custom school management software better than a product like PowerSchool or Blackbaud?',
      a: 'It depends on your school. Packaged systems are the right call when your operation fits their model closely and per-student pricing stays reasonable. A custom system wins when the standard product forces workarounds for your grading, scheduling, or programs, when you need integrations it does not offer, or when license costs climb faster than the value. Many schools also keep a packaged system and build custom modules and portals around it.',
    },
    {
      q: 'How much does custom school management software cost?',
      a: 'Cost tracks scope: the number of modules, the size of your school or district, the integrations, and the compliance requirements. A focused build covering attendance, grades, and a parent portal costs far less than a full district platform with billing and scheduling. We scope the work with acceptance criteria per module so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build?',
      a: 'A first usable module, such as attendance or a parent portal, often ships in a few months, with a working demo every two weeks. The full system grows in phases rather than one long build, so your staff gets value from early modules while later ones like billing or scheduling are still in progress. Many schools time the first launch to the start of a term.',
    },
    {
      q: 'Is student data kept secure and FERPA compliant?',
      a: 'Yes. We build role-based access, audit logging, and FERPA-aware data handling in from the start, so records are only visible to the people who should see them and every change is traceable. Because you own the code and infrastructure, your compliance and security team can review exactly how student data is stored and protected.',
    },
  ],
  related: [
    { label: 'Education software we build', href: '/industries/education' },
    { label: 'SaaS platforms', href: '/services/saas-platforms' },
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
  ],
};
