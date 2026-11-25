import type { SkillArea } from '../types/portfolio';

export const skillAreas: SkillArea[] = [
  {
    id: 'wordpress-engineering',
    label: 'WordPress Core & Product Engineering',
    summary:
      'I engineer commercial WordPress software products—marketplaces, platform builders, and OOP plugins—built with strict PSR-4 autoloading, modular services, and WordPress VIP security standards.',
    tools: [
      { name: 'Commercial Product & OOP Plugins', description: 'PSR-4 Autoloading, Dependency Injection, Freelance Marketplaces, Platform Builders & Action/Filter Lifecycles' },
      { name: 'Standards & Security', description: 'WordPress VIP Guidelines, Nonce & Capability Verification, Data Sanitization/Escaping, Zero SQLi/XSS' },
      { name: 'Headless REST & GraphQL APIs', description: 'Custom Versioned WP REST API Endpoints, JWT Auth, WPGraphQL Schemas & Mobile-Ready Data Contracts' },
      { name: 'ACF Block Ecosystems', description: 'Custom Block Suites (Advanced Custom Fields Pro, PHP Rendering, Field Groups, Dynamic Content)' },
      { name: 'High Concurrency & Database', description: 'MySQL Query Tuning, Custom Indexed Tables, Transients API, Redis Object Caching & BuddyBoss Optimization' },
    ],
  },
  {
    id: 'mobile-headless',
    label: 'React Native & Headless Mobile',
    summary:
      'I build production cross-platform iOS & Android mobile applications powered by Headless WordPress REST APIs and WPGraphQL, delivering native 60fps experiences synchronized with web ecosystems.',
    tools: [
      { name: 'Cross-Platform Mobile Apps', description: 'React Native (iOS & Android), TypeScript, Native Navigation, Push Notifications & App Store Delivery' },
      { name: 'Headless WordPress Integration', description: 'Custom WordPress REST APIs, WPGraphQL / WooGraphQL, Tokenized JWT Auth & Real-Time Data Sync' },
      { name: 'State & Offline Resilience', description: 'Redux Toolkit, Apollo Client, Optimistic UI Updates, Secure Local Storage & API Caching' },
      { name: 'Marketplace & Commerce Flows', description: 'Mobile Job/Service Feeds, Proposals, Messaging, Tokenized Checkouts & Order Tracking' },
    ],
  },
  {
    id: 'shopify-ecommerce',
    label: 'Shopify & E-Commerce Engineering',
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
    label: 'Enterprise APIs & AI Workflows',
    summary:
      'I pair idempotent backend automations and resilient webhook queues with AI-assisted rapid development workflows to accelerate architecture, delivery, and QA at scale.',
    tools: [
      { name: 'AI-Assisted Rapid Engineering', description: 'AI-Accelerated Architecture Prototyping, Automated Code Scaffolding, Refactoring & Regression QA Workflows' },
      { name: 'Financial & Accounting Sync', description: 'Stripe API (Idempotent Webhooks), PayPal, QuickBooks Online SDK, Xero' },
      { name: 'Vertical Integrations', description: 'Streamline VRS (Property Management), Trackabi (Time & Payroll ERP), HubSpot CRM, Zapier Webhooks' },
      { name: 'Backend & Infrastructure', description: 'Node.js, TypeScript, PostgreSQL, GitHub Actions (CI/CD), Docker, WP Engine & Cloudflare Edge' },
    ],
  },
];

export const alsoFluent = [
  'React Native',
  'WordPress REST API',
  'AI-Assisted Workflows',
  'Commercial Product Architecture',
  'WPGraphQL & WooGraphQL',
  'Redis Transient Caching',
  'Cloudflare & CDN Edge',
  'WP Engine EverCache',
  'ACF Pro Field Architectures',
  'ETL Data Migration',
  '301 Redirection Mapping',
  'GitHub Actions CI/CD',
];
