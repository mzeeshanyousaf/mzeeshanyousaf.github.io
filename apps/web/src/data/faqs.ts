import type { Faq } from '../types/portfolio';

export const faqs: Faq[] = [
  {
    question: 'What types of projects do you typically take on?',
    answer:
      'I specialize in complex, high-concurrency web engineering: custom WordPress plugin and theme development, REST/GraphQL API integrations (QuickBooks, Xero, Stripe, PayPal, Streamline VRS), WooCommerce e-commerce scaling, cross-platform Shopify migrations, and modern headless React/Next.js architectures.',
  },
  {
    question: 'How do you guarantee that WordPress customizations remain update-safe?',
    answer:
      'I follow strict WordPress VIP and PSR-4 coding standards. Every customization is engineered as an isolated, object-oriented plugin or child-theme hook listener. I never modify WordPress core files, vendor dependencies, or parent themes, ensuring seamless core upgrades without regression.',
  },
  {
    question: 'Can you integrate third-party APIs with WooCommerce or WordPress?',
    answer:
      'Yes. I have deep experience building bi-directional integrations with OAuth 2.0 token rotation, automated webhook listeners, rate-limit queues, and ledger synchronization for platforms like QuickBooks Online, Xero, Stripe, PayPal, Trackabi, and bespoke enterprise REST/SOAP endpoints.',
  },
  {
    question: 'What is your approach to site speed and Core Web Vitals optimization?',
    answer:
      'I take a holistic approach from the database up: indexing high-frequency MySQL query columns, replacing repetitive queries with transient caches, eliminating render-blocking assets, lazy-loading media, and tuning server response times (TTFB) to consistently achieve 95+ Google Lighthouse scores.',
  },
  {
    question: 'Are you open to full-time remote roles or contract consulting?',
    answer:
      'Yes. I am currently open to Senior Software Engineer (WordPress Core, Full-Stack PHP, React) positions with ambitious product teams, as well as select contract architecture and migration consulting.',
  },
  {
    question: 'What does day-to-day collaboration and communication look like?',
    answer:
      'I operate async-first with clean documentation, GitHub pull requests, structured code reviews, and weekly live demo milestones. I keep stakeholders continuously updated via Slack/Skype and track tasks transparently through Jira, ClickUp, or Asana.',
  },
  {
    question: 'Can you work with our existing codebase and engineering team?',
    answer:
      'Absolutely. I frequently step into mature, complex enterprise codebases. I conduct an initial audit, map out dependency risks, follow your established conventions and Git branching models, and mentor junior engineers along the way.',
  },
];
