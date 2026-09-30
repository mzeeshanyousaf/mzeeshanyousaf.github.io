import type { SkillArea } from '../types/portfolio';

export const skillAreas: SkillArea[] = [
  {
    id: 'wordpress-engineering',
    label: 'WordPress Core & Product Engineering',
    years: 4,
    summary:
      'I build plugins like standalone software systems. I enforce strict PSR-4 autoloading, modular directory structures, and decoupled services rather than monolithic single-file hooks.',
    tools: [
      { name: 'OOP Plugin Architecture', description: 'PSR-4 Autoloading, Dependency Injection, Custom Post Types & Relational Taxonomies, Action/Filter Lifecycle' },
      { name: 'Standards & Security', description: 'WordPress VIP Guidelines, Nonce & Capability Verification, Data Sanitization/Escaping, Zero SQLi/XSS' },
      { name: 'Theme Engineering', description: 'Commercial-ready Theme Architecture (_s / Understrap foundations), Modular Template Hierarchies, Asset Compilation (Vite/Webpack)' },
      { name: 'ACF Block Development', description: 'Custom Block Suites (Advanced Custom Fields Pro, PHP Rendering, Field Groups, Dynamic Content)' },
      { name: 'High Concurrency & Database', description: 'MySQL Query Tuning, Transients API, Redis Object Caching, BuddyBoss & LearnDash Optimization' },
    ],
  },
  {
    id: 'shopify-ecommerce',
    label: 'Shopify & E-Commerce Engineering',
    years: 3,
    summary:
      'I prioritize clean, native Shopify OS 2.0 Liquid code over app bloat, engineering features directly into the theme for sub-second page loads.',
    tools: [
      { name: 'Liquid Development', description: 'Online Store 2.0 (OS 2.0) Architecture, Custom Sections, Blocks, App Blocks & Theme App Extensions' },
      { name: 'Cart & Storefront Workflows', description: 'AJAX Mini-Carts, Dynamic Variant Selectors, Custom Product Upsells, Storefront API (GraphQL)' },
      { name: 'WooCommerce Custom Pipelines', description: 'Bespoke Checkout Modifiers, Custom Database Tables for B2B Wholesale Pricing, Subscriptions Hooking' },
      { name: 'Performance Optimization', description: 'Asset minification, native image rendering, Core Web Vitals optimization (LCP/CLS under 100ms)' },
    ],
  },
  {
    id: 'enterprise-apis',
    label: 'Enterprise APIs & Backend Automations',
    years: 4,
    summary:
      'I implement idempotent webhook listeners and persistent asynchronous queues to prevent data loss or duplicate transactions in API integrations.',
    tools: [
      { name: 'Financial & Accounting Sync', description: 'Stripe API (Idempotent Webhooks), PayPal, QuickBooks Online SDK, Xero' },
      { name: 'Vertical Integrations', description: 'Streamline VRS (Property Management), Trackabi (Time & Payroll ERP), HubSpot CRM, Zapier Webhooks' },
      { name: 'Modern Backend Services', description: 'Node.js, NestJS, TypeScript, PostgreSQL, Prisma ORM' },
      { name: 'Architecture', description: 'Asynchronous Job Queues, Retry Handlers, RESTful API Design, GraphQL Schema Design' },
    ],
  },
  {
    id: 'modern-web',
    label: 'Modern Web & Decoupled Frontend',
    years: 4,
    summary:
      'When high-concurrency or bespoke UI experiences are required, I decouple the backend using modern frontend frameworks and headless CMS architectures.',
    tools: [
      { name: 'Core', description: 'TypeScript, JavaScript (ES6+), HTML5 Semantic & Web A11y, Modern SCSS' },
      { name: 'Frameworks & UI', description: 'Next.js (App Router, ISR, SSR), React, Tailwind CSS' },
      { name: 'Workflow & Infrastructure', description: 'Git / GitHub Actions (CI/CD), Docker, WP Engine, Cloudflare Edge & Caching' },
    ],
  },
];

export const alsoFluent = [
  'Divi Builder',
  'WPBakery',
  'Webpack & Vite',
  'Prisma ORM',
  'SQLite & PostgreSQL',
  'Redis Transient Caching',
  'Cloudflare & CDN Edge',
  'WP Engine EverCache',
  'ACF Pro Field Architectures',
  'ETL Data Migration',
  '301 Redirection Mapping',
  'Figma to Code',
];
