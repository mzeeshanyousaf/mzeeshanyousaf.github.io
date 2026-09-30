import type { ProcessStep } from '../types/portfolio';

export const processSteps: ProcessStep[] = [
  {
    title: 'Architecture & Systems Discovery',
    duration: 'Week 1',
    description:
      'Deconstructing complex business logic into clean technical specifications. We map relational database models, audit third-party API rate limits (Stripe, QuickBooks, ERPs), define hook lifecycles, and lock in performance targets before writing a single line of code.',
    deliverables: ['Technical Specification & API Contract', 'Entity-Relationship (ER) & Schema Map', 'Milestone Roadmap & Risk Mitigation Plan'],
  },
  {
    title: 'Integration Spikes & Schema Prototyping',
    duration: 'Week 1–2',
    description:
      'Validating critical technical bottlenecks early. I build functional spikes for high-risk external webhooks, prototype custom Shopify Liquid schema sections or ACF block controls, and model database queries to verify indexing strategy under load.',
    deliverables: ['Proof-of-Concept API Gateways', 'ACF / Liquid Schema Prototypes', 'Security Threat Model & Nonce Matrix'],
  },
  {
    title: 'Core OOP Engineering & Platform Build',
    duration: 'Week 2–5',
    description:
      'Developing custom OOP PHP plugins, commercial-ready themes, or custom Liquid architectures. All backend code adheres strictly to PSR-4 standards, modular service containers, and WordPress VIP rules. Frontends use clean semantic markup, custom ACF Block components, or optimized Next.js views.',
    deliverables: ['Modular, Update-Safe Plugin / Theme Codebase', 'Custom REST/GraphQL Endpoints & Hooks', 'Staging Demos with Active Git PR Logs'],
  },
  {
    title: 'Caching, Database Tuning & Security Hardening',
    duration: 'Week 5–6',
    description:
      'Stress-testing data layers and locking down surface areas. I audit SQL execution plans to eradicate slow postmeta joins, configure multi-tiered object caching (Redis/Transients), verify OWASP security sanitization, and optimize assets to hit 90+ Core Web Vitals.',
    deliverables: ['Query Optimization & Redis Cache Strategy', '90+ Mobile Core Web Vitals Audit', 'OWASP & Data Validation Security Pass'],
  },
  {
    title: 'Edge QA, Webhook Stress Testing & UAT',
    duration: 'Week 6–7',
    description:
      'End-to-end verification under real-world scenarios. We simulate intermittent API failures to verify idempotent webhook recovery, run multi-device checkout tests, stress-test high-traffic cart recalculations, and complete user acceptance testing with your stakeholders.',
    deliverables: ['Cross-Device & Viewport QA Matrix', 'Webhook Failure & Recovery Simulation', 'Formal Stakeholder Sign-Off'],
  },
  {
    title: 'Zero-Downtime Rollout & Architecture Handover',
    duration: 'Week 7+',
    description:
      'Executing production deployment with zero customer interruption. Includes automated database migrations, strict 301 redirection maps for SEO preservation, Cloudflare edge rule setup, live error monitoring, and clean architectural documentation for seamless developer onboarding.',
    deliverables: ['Zero-Downtime Production Cutover', 'Automated 301 Redirection Audit', 'System Architecture & API Documentation'],
  },
];
