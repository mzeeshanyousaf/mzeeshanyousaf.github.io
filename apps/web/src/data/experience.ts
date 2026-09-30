import type { Award, Education, Experience } from '../types/portfolio';

export const experience: Experience[] = [
  {
    period: '05/2025 — Present',
    role: 'Senior Software Engineer (WordPress & Systems Architecture)',
    company: 'Amentotech',
    location: 'Lahore, Pakistan (Hybrid / On-site)',
    current: true,
    summary:
      'Lead engineer architecting scalable WordPress plugins, commercial theme ecosystems, and headless interfaces. Focused on enterprise-grade performance, WordPress VIP compliance, and resilient API-driven backends.',
    achievements: [
      { value: '100%', label: 'WordPress VIP & PSR-4 Compliance (Zero vulnerability audit)' },
      { value: 'Sub-250ms', label: 'Core TTFB (Under heavy BuddyBoss & concurrent community load)' },
    ],
    responsibilities: [
      'OOP Plugin & Theme Architecture: Architected modular, object-oriented PHP plugin codebases and bespoke theme frameworks leveraging PSR-4 autoloading, dependency injection, and clean hook lifecycles for global enterprise clients.',
      'Commercial Product Engineering: Developed commercial-grade community and marketplace themes on top of BuddyBoss, optimizing complex relational data layers to prevent query bloat on large-scale installations.',
      'ACF Block Ecosystems: Built custom native block suites using Advanced Custom Fields (ACF Pro), PHP rendering, and dynamic field registries, completely replacing legacy page builders and cutting page payload sizes.',
      'API Automations & Headless Endpoints: Designed secure REST and GraphQL endpoints connecting WordPress with external SaaS backends and modern headless React/Next.js client frontends.',
      'Code Standards & CI/CD: Instituted strict WordPress Coding Standards (WPCS), code review workflows, and automated linting pipelines, eliminating technical debt and regression bugs across team sprints.',
    ],
    stack: ['PHP 8.x (OOP)', 'WordPress Core & VIP', 'ACF Pro Blocks', 'BuddyBoss', 'REST & GraphQL', 'MySQL Indexing', 'Redis Caching'],
  },
  {
    period: '10/2022 — 05/2025',
    role: 'Full-Stack Engineer (WordPress, PHP, Shopify)',
    company: 'Webbuggs',
    location: 'Lahore, Pakistan',
    summary:
      'Engineered custom e-commerce pipelines, bespoke WooCommerce/Shopify solutions, and deep financial API automations. Spearheaded performance tuning and zero-downtime cross-platform migrations.',
    achievements: [
      { value: '−40%', label: 'Server Response Time (Through database query indexing & Redis caching)' },
      { value: 'Zero', label: 'Data Mismatch (Across $1M+ in automated Stripe & accounting API syncs)' },
    ],
    responsibilities: [
      'Financial & ERP Sync Engines: Built fault-tolerant webhook listeners and bi-directional integration pipelines connecting WooCommerce and custom portals to QuickBooks Online, Xero, Stripe, and Trackabi with automated retry handling.',
      'Shopify Theme & Liquid Engineering: Developed custom Shopify OS 2.0 themes from scratch using performant Liquid markup, custom schema sections, AJAX mini-carts, and variant selectors without bloated third-party apps.',
      'Database & Query Optimization: Eradicated high-latency wp_postmeta joins and unindexed queries across multi-thousand SKU stores, dropping checkout and catalog response times by 40%.',
      'Zero-Downtime Data Migrations: Led complex cross-platform migrations between Shopify and WooCommerce, crafting custom ETL import scripts and comprehensive 301 redirect mappings to guarantee zero organic SEO traffic loss.',
      'Custom B2B & Checkout Logic: Authored custom WooCommerce extensions handling dynamic wholesale pricing tiers, custom tax rules, and localized multi-currency checkouts.',
    ],
    stack: ['PHP (OOP)', 'Shopify Liquid (OS 2.0)', 'WooCommerce Internals', 'Stripe / QuickBooks APIs', 'MySQL', 'JavaScript (ES6+)', 'Tailwind CSS'],
  },
];

export const educationList: Education[] = [
  {
    degree: 'Master of Science in Computer Science (MSCS)',
    school: 'The Islamia University of Bahawalpur',
    period: '2020 — 2022',
    grade: 'CGPA 3.56 / 4.00',
    location: 'Bahawalpur, Pakistan',
    focus: 'Advanced Database Architectures, Deep Learning, and Distributed Software Engineering',
    honors: [
      {
        title: 'Employee of the Month (11/2023)',
        date: '11/2023',
        description: 'Awarded at Webbuggs for architectural leadership on enterprise client rollouts.'
      },
      {
        title: 'Outstanding Presentation Award (06/2022)',
        date: '06/2022',
        description: 'Recognized for applied deep learning and computer vision research at IUB.'
      }
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    school: 'The Islamia University of Bahawalpur',
    period: '2018 — 2020',
    location: 'Bahawalpur, Pakistan',
  },
];

export const education = educationList[0];

export const awardsList: Award[] = [
  {
    title: 'Employee of the Month (November 2023)',
    organization: 'Webbuggs',
    date: '11/2023',
    description:
      'Recognized for outstanding dedication, technical leadership, and lead architecture on high-impact client systems.',
  },
  {
    title: 'Outstanding Poster Presentation Award',
    organization: 'The Islamia University of Bahawalpur (IUB)',
    date: '06/2022',
    description:
      'Recognized for pioneering research presentation on "Age and Gender Recognition" utilizing computer vision deep learning models.',
  },
  {
    title: 'Professional Freelancing & Business Management',
    organization: 'DigiSkills.pk',
    date: '11/2019',
    description: 'Certified in agile digital project delivery, global client management, and commercial freelancing.',
    credentialId: '6EYHTCDPQ',
  },
  {
    title: 'Computer Hardware & Network Professional',
    organization: 'Punjab Vocational Training Council (PVTC)',
    date: '01/2018',
    description: 'Professional hardware diagnostics, system administration, and network engineering certification.',
    credentialId: 'BNR-01-ET13-006-18-26',
  },
];
