import type { ProcessStep } from '../types/portfolio';

export const processSteps: ProcessStep[] = [
  {
    title: 'Architecture & Discovery',
    duration: 'Week 1',
    description:
      'We deconstruct the core requirements, examine database schema constraints, map third-party API dependencies, and establish measurable performance benchmarks.',
    deliverables: ['Technical Specification', 'Data Model & Schema', 'Milestone Roadmap'],
  },
  {
    title: 'Spike & Interface Prototyping',
    duration: 'Week 1–2',
    description:
      'I build early proof-of-concept spikes for high-risk integrations (Stripe, QuickBooks, custom APIs) and validate Gutenberg block controls with editorial teams.',
    deliverables: ['API Connection Proofs', 'Interactive UI Prototypes', 'Security Threat Model'],
  },
  {
    title: 'OOP Development & Integrations',
    duration: 'Week 2–5',
    description:
      'Bespoke PHP plugins and React frontend components developed strictly adhering to WordPress VIP standards, clean OOP abstractions, and update-safe hooks.',
    deliverables: ['Modular Plugin Codebases', 'Typed REST/GraphQL Endpoints', 'Weekly Staging Demos'],
  },
  {
    title: 'Performance & Security Hardening',
    duration: 'Week 5–6',
    description:
      'Rigorous database indexing, transient caching layers, OWASP vulnerability audits, and Core Web Vitals optimization targeting 95+ Lighthouse scores.',
    deliverables: ['Lighthouse 95+ Audit', 'Database Query Optimization', 'Security Hardening Pass'],
  },
  {
    title: 'End-to-End Testing & QA',
    duration: 'Week 6–7',
    description:
      'Comprehensive verification across real device viewports, stress-testing webhook listeners, validating edge checkout scenarios, and testing backup rollbacks.',
    deliverables: ['Cross-Browser QA Matrix', 'Webhook Failure Simulation', 'User Acceptance Sign-off'],
  },
  {
    title: 'Zero-Downtime Launch & Handover',
    duration: 'Week 7+',
    description:
      'Production deployment with automated 301 redirection maps, CDN edge caching, live monitoring alerts, and comprehensive admin walkthrough documentation.',
    deliverables: ['Production Rollout', '301 Redirect Mapping', 'Technical Documentation & SOPs'],
  },
];
