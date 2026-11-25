import type { Faq } from '../types/portfolio';

export const faqs: Faq[] = [
  {
    question: 'What makes your custom WordPress plugin architecture different from typical setups?',
    answer:
      'I build plugins like standalone software systems. I enforce strict PSR-4 autoloading, modular directory structures, and decoupled services rather than monolithic single-file hooks. Every database query utilizes prepared statements and transient/Redis caching to eliminate bottlenecks. Most importantly, I strictly follow WordPress VIP coding standards, meaning every plugin is update-safe, secure against vulnerabilities, and capable of operating under enterprise-grade server loads.',
  },
  {
    question: 'How do you approach custom Shopify theme development versus using third-party apps?',
    answer:
      'I prioritize clean, native Shopify OS 2.0 Liquid code over app bloat. Installing too many apps slows down page speed and hurts conversion rates. I engineer features like custom slide-out carts, variant swatches, bundle selectors, and subscription toggles directly into the theme using modular Liquid sections and modern vanilla JavaScript. This delivers sub-second page loads and a 90+ mobile Lighthouse score without paying recurring app fees.',
  },
  {
    question: 'How do you prevent data loss or duplicate transactions in API integrations like Stripe and QuickBooks?',
    answer:
      'I implement idempotent webhook listeners and persistent asynchronous queues. Incoming webhooks are validated by cryptographic signatures, logged to custom audit tables, and executed with duplicate-detection mechanisms. If an external service like QuickBooks is temporarily down, the queue safely retries using exponential backoff rather than failing the transaction or charging the customer twice.',
  },
  {
    question: 'Have you built commercial, ready-for-market WordPress products and plugins?',
    answer:
      'Yes. I have designed and delivered scalable commercial products from the ground up—including a freelance service & job marketplace, a modular WordPress platform builder, BuddyBoss community platforms, and diagnostic profiling tools. Every commercial product passes strict Plugin Check and WPCS audits, ships with standardized translation domains (i18n), and stays update-safe across core WordPress releases.',
  },
  {
    question: 'Can you build cross-platform React Native mobile apps powered by Headless WordPress?',
    answer:
      'Yes. I specialize in pairing Headless WordPress backends (custom REST API endpoints and WPGraphQL with JWT authentication) with production React Native apps for iOS and Android. Using AI-assisted rapid development workflows, I deliver synchronized mobile marketplaces, real-time notifications, and 60fps native experiences without duplicating business logic across platforms.',
  },
];
