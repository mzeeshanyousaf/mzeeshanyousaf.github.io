import type { SkillArea } from '../types/portfolio';

export const skillAreas: SkillArea[] = [
  {
    id: 'core-languages',
    label: 'Core Languages & Engine',
    years: 5,
    summary:
      'Object-oriented PHP, strict typing, WordPress internals, TypeScript, and database query optimization for high-throughput backends.',
    tools: [
      { name: 'PHP (OOP & 8.x)', level: 96 },
      { name: 'WordPress Core & Hooks', level: 98 },
      { name: 'JavaScript (ES6+)', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'MySQL & Query Tuning', level: 92 },
      { name: 'Liquid (Shopify)', level: 88 },
      { name: 'HTML5 Semantic & A11y', level: 95 },
      { name: 'CSS3 / Modern SCSS', level: 94 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Modern UI',
    years: 4,
    summary:
      'Component-driven architectures, headless CMS frontends, responsive design systems, and modern Next.js/React development.',
    tools: [
      { name: 'React.js', level: 93 },
      { name: 'Next.js 14 (App Router)', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'NestJS Backend', level: 85 },
      { name: 'React Native', level: 88 },
      { name: 'Bootstrap & Grid Systems', level: 92 },
      { name: 'jQuery & Legacy Bridges', level: 90 },
    ],
  },
  {
    id: 'wordpress-cms',
    label: 'WordPress & CMS Ecosystem',
    years: 5,
    summary:
      'Bespoke update-safe plugin development, custom theme architectures, Gutenberg block creation with React, and WooCommerce e-commerce.',
    tools: [
      { name: 'Custom Plugin Development', level: 98 },
      { name: 'Custom Theme Engineering', level: 96 },
      { name: 'Gutenberg React Blocks', level: 91 },
      { name: 'Headless WordPress & GraphQL', level: 90 },
      { name: 'WooCommerce Architecture', level: 95 },
      { name: 'BuddyBoss Platform', level: 92 },
      { name: 'Elementor Pro & Dynamic Tags', level: 94 },
      { name: 'Security Hardening & OWASP', level: 93 },
    ],
  },
  {
    id: 'apis-cloud',
    label: 'APIs, Integrations & Cloud',
    years: 4,
    summary:
      'Bi-directional REST and GraphQL integrations, financial ledger synchronization, payment gateways, and managed cloud server hosting.',
    tools: [
      { name: 'REST APIs & Webhooks', level: 96 },
      { name: 'GraphQL & WPGraphQL', level: 89 },
      { name: 'Stripe & PayPal APIs', level: 95 },
      { name: 'QuickBooks Online API (OAuth 2)', level: 93 },
      { name: 'Xero Accounting API', level: 91 },
      { name: 'Trackabi & Streamline VRS APIs', level: 90 },
      { name: 'Shopify Admin & Storefront API', level: 90 },
      { name: 'AWS Cloud & Cloudways', level: 86 },
    ],
  },
  {
    id: 'performance-devops',
    label: 'Performance, DevOps & QA',
    years: 4,
    summary:
      'Core Web Vitals optimization, automated CI/CD pipelines, containerized environments, and rigorous Agile engineering workflows.',
    tools: [
      { name: 'Google Lighthouse (95+ CWV)', level: 96 },
      { name: 'GTmetrix & TTFB Tuning', level: 95 },
      { name: 'Git, GitHub & Code Reviews', level: 94 },
      { name: 'Docker Containers', level: 85 },
      { name: 'Composer & PSR Standards', level: 92 },
      { name: 'WP-CLI Automation', level: 90 },
      { name: 'CI/CD & GitHub Actions', level: 88 },
      { name: 'Jira, ClickUp & Asana', level: 92 },
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
