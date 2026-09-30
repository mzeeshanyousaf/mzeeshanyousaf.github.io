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
    question: 'Have you built commercial, ready-for-market themes and plugins?',
    answer:
      'Yes. I have designed and delivered scalable products from the ground up—including multi-vendor directory themes, community platforms on BuddyBoss, and custom diagnostic profiling tools. My commercial products pass rigorous Theme Check and Plugin Check audits, ship with standardized translation domains (i18n), and offer clean configuration panels without breaking when core platforms update.',
  },
  {
    question: 'Can you build modern headless frontends for WordPress or Shopify?',
    answer:
      'Yes. When high-concurrency, omnichannel performance, or bespoke UI experiences are required, I decouple the backend using Next.js on the frontend and WordPress (GraphQL/REST) or Shopify (Storefront API) as the headless content engine. This delivers sub-100ms client-side page transitions, enhanced security, and the flexibility of React with the editing ease of a CMS.',
  },
];
