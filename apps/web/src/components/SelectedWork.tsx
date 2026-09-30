'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, CheckCircle2, Zap, Layers, Sparkles, X } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: 'Plugins & APIs' | 'Themes & Frontend' | 'Migrations & Systems' | 'Headless & Mobile';
  tags: string[];
  description: string;
  deliverables: string[];
  impact: string[];
  image: string;
  year: string;
}

export default function SelectedWork() {
  const [filter, setFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModalProject]);

  const projects: ProjectItem[] = [
    {
      id: 'sports-community',
      title: 'BuddyBoss Sports Community Platform',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'BuddyBoss Ecosystem', 'Custom Plugins', 'MySQL', 'Template Overrides'],
      description:
        'Engineered and customized a large-scale, enterprise BuddyBoss community platform tailored specifically for sports organizations, players, and local clubs. Built bespoke plugin extensions, customized community profiles, optimized user feeds, and overridden native BuddyBoss theme templates to deliver a high-performance interactive ecosystem.',
      deliverables: [
        'Custom Member Profiles & Player Stats: Overrode core BuddyBoss template structures to build dedicated player and club profile layouts featuring custom fields, dynamic stats, and role-based permissions.',
        'Clubs & Teams Architecture: Built customized group structures for sports clubs, allowing team captains to manage rosters, schedule matches, and post dedicated club updates.',
        'Social Feed & Community Forums: Integrated dynamic user feeds, sports discussion forums, and interactive media uploads tailored for high-volume engagement.',
        'Bespoke Backend Plugins (OOP PHP): Developed custom PHP plugins to extend standard BuddyBoss functionality, including dynamic sports search filters, custom notification triggers, and specialized user directory queries.',
        'Template Overrides & Frontend Tuning: Applied clean theme overrides without touching core files, ensuring seamless future updates while maintaining a lightweight frontend user interface.',
      ],
      impact: [
        'Scalability: Optimized complex MySQL queries for member directories and social feeds to handle heavy dynamic traffic.',
        'Maintainability: Built 100% update-safe customizations using custom child-theme overrides and standalone OOP plugins.',
      ],
      image: '/projects/sports-community.png',
      year: '2024',
    },
    {
      id: 'vacation-rental-vrs',
      title: 'Enterprise Vacation Rental & Real-Time Booking Engine',
      role: 'Lead WordPress & API Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WordPress Core', 'Streamline VRS API', 'Custom Search & Filters', 'WooCommerce / Custom Checkout'],
      description:
        'Architected and engineered a custom, enterprise-grade vacation rental platform integrated directly with Streamline VRS (Vacation Rental Software). Developed custom backend sync scripts and API bridges to dynamically handle property listings, real-time pricing calendars, multi-room availability queries, and automated reservation workflows without sacrificing site performance.',
      deliverables: [
        'Streamline VRS API Integration: Engineered an object-oriented PHP integration with the Streamline VRS REST API to synchronize live property data, dynamic pricing rules, seasonal rates, and real-time room availability.',
        'Custom Dynamic Search & Filter Engine: Developed advanced search algorithms allowing users to filter luxury villas and properties by location, date ranges, guest capacity, amenities, and price brackets via custom AJAX queries.',
        'Live Booking & Reservation Flow: Built a customized checkout and reservation workflow seamlessly handling instant booking requests, dynamic fee calculations (cleaning fees, deposits, taxes), and real-time availability holds.',
        'Custom Property & Room Layout Systems: Created bespoke, lightweight custom post structures and layout controls for high-resolution photo galleries, interactive floor plans, virtual tours, and detailed property specs.',
        'Performance & Caching Optimization: Implemented custom transient caching and database indexing for API responses, reducing external API call overhead and maintaining sub-second page load times during peak traffic.',
      ],
      impact: [
        'System Efficiency: Reduced external API latency by 60% using dynamic transient caching for property rates and availability calendars.',
        'Scalability & Security: Built 100% update-safe, OOP-based custom plugins and child theme overrides adhering to official WordPress coding and security standards.',
      ],
      image: '/projects/vacation-rental.png',
      year: '2024',
    },
    {
      id: 'rv-marketplace',
      title: 'Enterprise RV & Automotive Marketplace Platform',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Themes & Frontend',
      tags: ['PHP (OOP)', 'WordPress Core', 'Custom AJAX Filtering', 'Custom Post Types (CPTs)', 'ACF Pro', 'MySQL'],
      description:
        'Engineered a bespoke, high-performance WordPress vehicle marketplace tailored for dynamic inventory browsing, interactive floor plan visualizers, and detailed technical specifications. Architected a custom theme from the ground up to handle high-density inventory data, multi-attribute AJAX filtering, and 360-degree media integration without sacrificing sub-second page rendering.',
      deliverables: [
        'Custom Theme Architecture & Layout System: Built a custom, lightweight WordPress theme engineered specifically to showcase complex vehicle inventories, interactive floor plans, specs, and immersive 360-degree media tours.',
        'Multi-Facet AJAX Inventory Filtering: Developed dynamic search and taxonomy filtering engines allowing buyers to sort vehicles in real-time by make, model, floor plan layout, length, weight, sleep capacity, and price bracket without reloading the page.',
        'Technical Spec & Attribute Data Modeling: Designed an object-oriented taxonomy and custom field system (via custom code and ACF Pro) to easily store, update, and display extensive spec sheets (tank capacities, chassis types, slide-outs, hitches).',
        'Interactive Floor Plan & 360° Media Integration: Built lightweight, mobile-responsive media modules supporting interactive floor plan hotspots, high-res photo galleries, and embeddable 360-degree virtual tour viewers.',
        'Database & Query Optimization: Optimized dynamic MySQL queries and transient caches for multi-attribute filtering, keeping server response times fast even with thousands of dynamic vehicle listings.',
      ],
      impact: [
        'Query Performance: Optimized complex multi-taxonomy database queries, maintaining sub-second dynamic search results across thousands of inventory specs.',
        'Maintainability & Security: Built with 100% update-safe OOP PHP standards, preventing security vulnerabilities and ensuring seamless core WordPress updates.',
      ],
      image: '/projects/rv-marketplace.png',
      year: '2024',
    },
    {
      id: 'wp-shopify-migration',
      title: 'WordPress to Shopify Enterprise Migration & Custom Theme Architecture',
      role: 'Lead Full-Stack & E-Commerce Migration Engineer',
      category: 'Migrations & Systems',
      tags: ['Shopify (Liquid)', 'WordPress to Shopify Migration', 'ETL Pipelines', 'Custom Theme Development', 'Data Mapping'],
      description:
        'Architected and executed a complete end-to-end platform migration from an existing WordPress e-commerce store to a modern, high-performance Shopify ecosystem. Developed a bespoke, mobile-optimized Shopify theme engineered with liquid components and custom collection filters, while executing complex data pipelines to transfer legacy products, customer profiles, order histories, taxonomy structures, and blog posts with zero data loss.',
      deliverables: [
        'Bespoke Shopify Theme Engineering: Built a lightweight, custom Shopify theme using Liquid, HTML5, SCSS, and JavaScript (ES6+), tailored specifically for high conversion rates, seamless navigation, and rapid page rendering.',
        'Cross-Platform Data Migration (ETL): Designed automated data extraction and transformation scripts to seamlessly migrate legacy WordPress/WooCommerce database records to Shopify’s architecture.',
        'Products, Customers & Orders: Transferred product catalogs, variant attributes, inventory counts, pricing matrixes, historical customer accounts, billing/shipping addresses, and past order records.',
        'Taxonomies & Blogs: Re-mapped WordPress post categories, custom tags, dynamic collection structures, and content blog archives to Shopify blog handles.',
        'Custom Navigation & Filtering Architecture: Engineered advanced Shopify storefront filters and search components, allowing customers to sort products dynamically by categories, tags, price ranges, and custom attributes.',
        'SEO & URL Redirect Strategy: Executed a comprehensive 301 redirect map for legacy WordPress URLs, canonical tags, and metadata structures to retain 100% of existing search engine rankings and organic traffic.',
      ],
      impact: [
        'Data Integrity: Transferred 100% of legacy orders, customer accounts, product catalogs, and blog archives with zero data loss or customer account disruption.',
        'Storefront Performance: Improved overall mobile Core Web Vitals and load performance by replacing legacy WordPress database queries with Shopify’s hosted Liquid rendering engine.',
      ],
      image: '/projects/shopify-migration.png',
      year: '2023',
    },
    {
      id: 'stripe-quickbooks-sync',
      title: 'WooCommerce Stripe & QuickBooks Online Synchronization Engine',
      role: 'Lead Backend PHP & API Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WordPress / WooCommerce', 'Stripe REST API', 'QuickBooks Online API', 'Accounting Automation'],
      description:
        'Engineered a bespoke object-oriented PHP plugin for WordPress/WooCommerce that automates the synchronization of online order transactions, Stripe payment events, and QuickBooks Online accounting records. Developed dynamic webhook receivers and Intuit API bridges to log sales receipts, extract Stripe processing fees, map custom fields, and provide a clear overview of net business revenue directly inside QuickBooks.',
      deliverables: [
        'Two-Way Webhook & Event Listener: Built a reliable webhook engine capturing real-time WooCommerce order statuses, Stripe checkout completions, and payout/refund notifications to trigger background sync operations.',
        'QuickBooks Online API (OAuth 2.0 Integration): Architected a secure OAuth 2.0 connection handler with token auto-refresh mechanisms to communicate seamlessly with the Intuit QuickBooks Online REST API.',
        'Stripe Fee Breakdown & Line-Item Allocation: Engineered custom ledger mapping logic that automatically extracts gross order revenue, deducts real-time Stripe transaction fees, and logs net payout amounts into specified QuickBooks accounts.',
        'Custom Field & Metadata Mapping: Added dynamic custom data fields to QuickBooks Sales Receipts and Invoices (such as Stripe Transaction IDs, payment gateway metadata, and customer IDs) for auditing and reconciliation.',
        'Automated Refund & Dispute Syncing: Programmed background event triggers to automatically post Refund Receipts or Credit Memos into QuickBooks whenever a customer refund or chargeback occurs on WooCommerce or Stripe.',
        'Asynchronous Queue & Logging System: Implemented a background job queue to prevent API rate-limiting issues, alongside an admin dashboard logging panel to track sync statuses, identify payload errors, and rerun failed transfers.',
      ],
      impact: [
        'Accounting Accuracy: Eliminated manual bookkeeping overhead and reduced accounting reconciliation errors down to 0%.',
        'Financial Transparency: Provided store owners with automated, real-time tracking of gross revenue vs. net earnings by isolating payment processor fee breakdowns on every transaction.',
        'Scalability: Built using OOP architecture and background queueing to process high-volume daily transactions without impacting store checkout speeds.',
      ],
      image: '/projects/stripe-quickbooks.png',
      year: '2023',
    },
    {
      id: 'trackabi-sync',
      title: 'Custom Freelance Platform & Trackabi Time-Tracking API Integration',
      role: 'Lead WordPress & PHP Backend Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WordPress Plugin Engineering', 'Trackabi REST API', 'OAuth 2.0 / API Keys', 'Automation Pipelines'],
      description:
        'Architected and developed a bespoke, object-oriented PHP plugin designed to seamlessly connect a custom WordPress freelance marketplace with the Trackabi Time-Tracking API. Built automated background sync handlers to map client projects, user tasks, time-log entries, and billable hourly rates directly between the platform and Trackabi’s tracking engine.',
      deliverables: [
        'Custom Object-Oriented Plugin Architecture: Built a lightweight, modular WordPress plugin following OOP design patterns and official WordPress coding standards for update safety and extensibility.',
        'Trackabi REST API Integration: Engineered secure authentication and payload handlers to interface directly with Trackabi’s REST API, handling project creation, task assignments, timer state triggers, and user mapping.',
        'Bi-Directional Time-Log Synchronization: Programmed automated background event hooks to sync logged work hours, active timer states, and activity notes between freelancers and client task dashboards in real time.',
        'Automated Invoice & Financial Rate Mapping: Implemented line-item logic connecting tracked time data to platform billing systems, dynamically converting logged hours into accurate invoice totals based on freelancer hourly rates.',
        'Admin Control & Error Logging Panel: Developed a custom admin interface allowing platform managers to configure API endpoint parameters, map user roles, monitor API rate limits, and review real-time transaction logs.',
      ],
      impact: [
        'Workflow Automation: Eliminated manual time entry logging, automating 100% of time tracking and invoicing sync operations between the marketplace and Trackabi.',
        'Execution Efficiency: Built with background processing queues to handle high-frequency time-log events without impacting frontend marketplace load speeds.',
      ],
      image: '/projects/trackabi-sync.png',
      year: '2023',
    },
    {
      id: 'legacy-php-remediation',
      title: 'Legacy PHP Platform Migration & System Remediation',
      role: 'Lead PHP Backend & Site Reliability Engineer',
      category: 'Migrations & Systems',
      tags: ['PHP (Legacy to Modern OOP)', 'Core PHP', 'Database Migration', 'Bug Remediation', 'System Maintenance'],
      description:
        'Engineered end-to-end migrations for legacy PHP web applications to modern PHP environments, resolving critical runtime errors, deprecation warnings, and database bottlenecks. Performed comprehensive codebase refactoring, patched legacy security vulnerabilities, and implemented proactive monitoring frameworks to maintain high availability and performance across complex web applications.',
      deliverables: [
        'Legacy PHP Version Upgrades & Migration: Upgraded legacy PHP codebases (PHP 5.x/7.x to modern PHP 8.x) while fixing breaking changes, deprecated function calls, and structural incompatibilities across custom systems and CMS platforms.',
        'Deep-Level Error Remediation & Debugging: Diagnosed and resolved fatal PHP runtime errors, memory leakage issues, database connection timeouts, and unhandled exception loops to restore operational stability.',
        'Database & Schema Restructuring: Migrated legacy database schemas (MySQL/MariaDB), optimized slow queries, fixed encoding issues, and rebuilt data structures to support modernized server infrastructure.',
        'Security Patching & Vulnerability Fixes: Hardened legacy codebases against OWASP top security risks by eliminating SQL injection (SQLi) vectors, Cross-Site Scripting (XSS), and unauthenticated dynamic function calls.',
        'Continuous Platform Maintenance & Health Audits: Established routine system health audits, error-logging frameworks, automated backup workflows, and performance monitoring to prevent downtime across production servers.',
      ],
      impact: [
        'System Stability: Achieved a 0% critical failure rate across migrated legacy applications by resolving core execution errors and patching legacy dependencies.',
        'Execution Speed: Improved database query execution speeds and overall application response times through backend refactoring and PHP 8.x engine optimizations.',
      ],
      image: '/projects/legacy-php.png',
      year: '2022',
    },
    {
      id: 'woocommerce-bulk-price',
      title: 'Bulk WooCommerce Variant Pricing & Custom Meta Sync Engine',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WooCommerce API', 'CSV Data Pipelines', 'Custom Fields (Meta Keys)', 'Database Query Optimization'],
      description:
        'Architected and developed a high-performance, object-oriented PHP plugin for WooCommerce designed to handle mass price updates across thousands of product SKUs and complex variations via CSV data feeds. Engineered targeted CSV mapping logic to dynamic custom fields, allowing store managers to update simple, grouped, and variable product pricing, sale schedules, and custom meta attributes in bulk without timeouts or server lockups.',
      deliverables: [
        'High-Capacity CSV Processing Engine: Built a custom stream reader and CSV parser capable of processing large inventory files in background chunks, bypassing PHP execution limits (max_execution_time) and server memory constraints.',
        'Complex Variant & Attribute Key Mapping: Programmed dynamic array mapping to accurately locate child product variations (product_variation), updating specific regular prices, sale prices, and custom variation metadata without affecting non-targeted variants.',
        'Custom Meta Field Integration: Extended WooCommerce core update hooks to read dynamic meta keys from CSV columns, updating custom pricing rules (such as wholesale rates, tier pricing, and supplier cost metrics) directly in the wp_postmeta database table.',
        'Batch Database Transactions & Caching: Replaced individual update_post_meta() overhead with optimized batch database queries ($wpdb) and transient clearing, maintaining fast throughput for catalogs exceeding 50,000+ variations.',
        'Dry-Run Validation & Rollback Logs: Designed a built-in CSV syntax validator and preview panel to detect missing SKUs, invalid currency formats, or broken variation IDs before executing mass updates, complete with detailed transaction logs.',
      ],
      impact: [
        'Operational Efficiency: Reduced bulk pricing update times for enterprise stores from hours of manual entry down to seconds via automated CSV uploads.',
        'Server Reliability: Maintained sub-second database query execution and zero memory exhaustion failures while bulk-updating complex variable product matrices.',
      ],
      image: '/projects/woocommerce-bulk-sync.png',
      year: '2022',
    },
    {
      id: 'internal-job-board',
      title: 'Internal Job Board & Candidate Recruitment Management Engine',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WordPress Plugin Engineering', 'Custom Post Types (CPTs)', 'Role-Based Access Control (RBAC)', 'Resume Upload Pipeline'],
      description:
        'Architected and developed a standalone, object-oriented PHP plugin providing a private recruitment and internship tracking portal for an enterprise firm. Built custom applicant tracking workflows, department-specific listing managers, secure candidate resume upload pipelines, and role-restricted HR review dashboards without relying on bloated generic job board plugins.',
      deliverables: [
        'Custom Recruitment Architecture: Designed dedicated custom post types (job_listing, application) and taxonomies (Departments, Internship Tracks, Experience Levels) with custom capabilities for internal HR roles.',
        'Private Application Portal & Front-End Forms: Developed lightweight, responsive front-end submission forms with real-time field validation, dynamic portfolio link handling, and AJAX-based submission states.',
        'Secure Resume & Document Upload Pipeline: Engineered a server-side file processing pipeline with strict MIME-type verification (PDF/DOCX), automated sanitization, randomized hashing, and protected storage paths to prevent unauthenticated file execution.',
        'HR Candidate Pipeline Dashboard: Created a bespoke WordPress admin sub-panel allowing hiring managers to screen applicants, move candidates across recruitment stages (Applied, Under Review, Interview, Hired, Rejected), and log private interview evaluations.',
        'Automated Email Notification Triggers: Configured custom transactional email hooks alerting HR leads when new applications arrive and sending branded confirmation updates to applicants as their status changes.',
      ],
      impact: [
        'Security & Compliance: Prevented unauthorized public access to sensitive candidate resumes via role-based authentication checks and direct asset download guards.',
        'Performance: Lightweight, bespoke plugin footprint under 150 KB, maintaining sub-second load times across high-volume applicant review queries.',
      ],
      image: '/projects/internal-job-board.png',
      year: '2023',
    },
    {
      id: 'shopify-wellness-theme',
      title: 'Custom Shopify Wellness & Supplements Theme Architecture',
      role: 'Lead Shopify & Frontend Theme Engineer',
      category: 'Themes & Frontend',
      tags: ['Shopify (Liquid)', 'Horizon Base Theme', 'Custom Sections & Blocks', 'Upgrade-Safe Architecture', 'JSON Templates'],
      description:
        'Architected and developed a bespoke, high-converting Shopify storefront for a health, wellness, and travel supplements brand, engineered on top of Shopify’s modern Horizon theme architecture. Built modular, reusable custom sections, configurable blocks, and optimized Liquid snippets designed for complete merchant customizability via the Shopify Theme Editor—strictly adhering to an upgrade-safe codebase pattern so core theme updates never break bespoke modifications.',
      deliverables: [
        'Upgrade-Safe Theme Architecture: Implemented a decoupled architecture using isolated custom sections, child snippet references, and schema presets. Kept core Horizon theme files clean and untouched to guarantee frictionless, 100% safe future theme updates.',
        'Bespoke Sections & Dynamic Schema Blocks: Developed modular, responsive Shopify sections (e.g., Clinical Benefits Grid, Travel-Size Bundles Showcase, Supplement Ingredients Accordion, Dynamic Subscription Upsell) with customizable JSON schema settings (color palettes, typography scale, responsive padding, layout toggles).',
        'High-Performance Liquid Snippets: Programmed lightweight, reusable Liquid snippets for star ratings, trust badges, supplement nutrition facts, and dosage instructions, cutting redundant template code and speeding up render times.',
        'Modern JSON Templates (OS 2.0): Leveraged Shopify Online Store 2.0 JSON page templates, empowering the client\'s marketing team to add, remove, reorder, and nest custom sections dynamically on product, collection, and landing pages without editing code.',
        'Core Web Vitals & Asset Optimization: Replaced heavy third-party app scripts with native Liquid, vanilla JavaScript (ES6+), and asynchronous asset loading, preserving sub-second page performance across mobile and desktop devices.',
      ],
      impact: [
        'Maintainability & Update Safety: Preserved 100% theme upgrade compatibility, allowing upstream Horizon security patches and Shopify feature releases to apply cleanly without regressions.',
        'Merchant Autonomy: Reduced the client’s reliance on developers by 80% for new product launches through flexible, drag-and-drop custom blocks in the Shopify Theme Customizer.',
        'Performance: Maintained a 90+ mobile Google Lighthouse score by relying on native Liquid logic rather than bloated app embeds.',
      ],
      image: '/projects/shopify-wellness.png',
      year: '2023',
    },
    {
      id: 'headless-woocommerce-react-native',
      title: 'Headless WooCommerce Mobile Engine & React Native Storefront',
      role: 'Lead Full-Stack & Mobile Systems Engineer',
      category: 'Headless & Mobile',
      tags: ['React Native', 'Headless WordPress', 'WPGraphQL / WooGraphQL', 'WooCommerce Core', 'Apollo Client', 'Redux Toolkit'],
      description:
        'Architected a decoupled, omnichannel mobile shopping experience powered by a Headless WordPress and WooCommerce backend and a high-performance React Native mobile application (iOS & Android). Replaced conventional monolithic PHP page rendering with a high-throughput GraphQL API layer (WPGraphQL / WooGraphQL), enabling real-time product browsing, customer cart mutations, tokenized secure checkouts, and instant order tracking with native mobile performance.',
      deliverables: [
        'Decoupled Backend Architecture (WPGraphQL & WooGraphQL): Configured and extended a headless WordPress and WooCommerce instance using WPGraphQL to expose normalized endpoints for catalog queries, customer account structures, dynamic variation pricing, and checkout operations.',
        'Cross-Platform React Native Mobile App: Built a high-performance, single-codebase mobile application targeting iOS and Android with smooth 60fps micro-interactions, pull-to-refresh feeds, category tab navigators, and skeleton loaders.',
        'State Management & Apollo Client Pipeline: Integrated Apollo Client with normalized caching and Redux Toolkit to orchestrate local persistent carts, optimistic inventory additions, and global user session states across network fluctuations.',
        'Tokenized Mobile Authentication & Payment Processing: Engineered a stateless customer authentication pipeline (JWT via GraphQL) paired with native payment gateways (Apple Pay, Google Pay, and Stripe SDK) that directly post verified transaction tokens to the WooCommerce order ledger.',
        'Query Optimization & Transient Caching: Implemented custom GraphQL query fragments and server-side Edge caching mechanisms on the WordPress backend, drastically lowering response payload sizes and eliminating redundant REST API roundtrips.',
      ],
      impact: [
        'Mobile UX & Speed: Delivered a sub-second, app-native browsing and checkout experience previously impossible on monolithic WooCommerce architectures.',
        'Omnichannel Scaling: Created a unified backend capable of seamlessly syncing inventory, accounts, and payments across the new mobile app and the existing web storefront.',
      ],
      image: '/projects/react-native-headless.png',
      year: '2023',
    },
    {
      id: 'headless-gutenberg-blocks',
      title: 'Headless React & Gutenberg Blocks',
      role: 'Senior WordPress & Frontend Engineer',
      category: 'Themes & Frontend',
      tags: ['React', 'TypeScript', 'GraphQL', 'WP REST API', 'Gutenberg Blocks', 'Next.js'],
      description:
        'Modern decoupled web architecture combining custom React-based Gutenberg editor blocks with a headless frontend powered by GraphQL and REST APIs.',
      deliverables: [
        'React Gutenberg Block Library: Developed custom interactive Gutenberg blocks using `@wordpress/scripts`, React components, and custom inspector controls.',
        'Headless API Architecture: Connected WordPress CMS data to a modern decoupled React/Next.js frontend using GraphQL queries and optimized REST endpoints.',
        'Dynamic Component Hydration: Built client-side interactive widgets embedded directly inside Gutenberg block content.',
        'Performance & CDN Caching: Configured edge caching and incremental static regeneration (ISR) for fast page delivery.',
      ],
      impact: [
        'Editorial Experience: Provided non-technical content creators with intuitive drag-and-drop Gutenberg blocks while maintaining decoupled frontend flexibility.',
        'Performance Score: Achieved 98+ Google Lighthouse scores across mobile and desktop devices with instantaneous page transitions.',
      ],
      image: '/projects/headless-gutenberg.png',
      year: '2023',
    },
    {
      id: 'multi-gateway-payments',
      title: 'Multi-Gateway Payment Engine',
      role: 'Lead WordPress & Payment Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'Stripe SDK', 'PayPal REST API', 'WooCommerce', 'Webhooks'],
      description:
        'Robust multi-gateway payment processing plugin integrating unified Stripe and PayPal checkout flows with automated webhooks and transactional triggers.',
      deliverables: [
        'Unified Gateway Architecture: Engineered an OOP plugin allowing customers to seamlessly checkout with Stripe (Credit/Debit/Apple Pay) or PayPal.',
        'PCI-Compliant Tokenization: Integrated client-side tokenization ensuring zero sensitive cardholder data touches the WordPress server.',
        'Idempotent Webhook Processing: Built webhook handlers to reliably capture asynchronous payment captures, authorization holds, and refunds.',
        'Automated Transactional Notifications: Engineered custom email and SMS notification triggers based on instant payment status transitions.',
      ],
      impact: [
        'Checkout Reliability: Achieved a 99.9% payment success rate with automated fallback retry logic for transient gateway interruptions.',
        'Operational Overhead: Reduced failed payment dispute inquiries by 85% through clear, automated customer order status notifications.',
      ],
      image: '/projects/multi-gateway-payments.png',
      year: '2022',
    },
    {
      id: 'memberpress-readylaunch',
      title: 'MemberPress LMS & ReadyLaunch Portal',
      role: 'Lead WordPress Architect & LMS Specialist',
      category: 'Themes & Frontend',
      tags: ['WordPress Core', 'MemberPress', 'ReadyLaunch', 'Subscription Billing', 'Custom CSS'],
      description:
        'High-conversion learning management system and membership portal built with MemberPress ReadyLaunch, tiered access rules, and automated recurring billing.',
      deliverables: [
        'ReadyLaunch UI Customization: Styled and customized MemberPress ReadyLaunch templates for a cohesive, branded student classroom experience.',
        'Granular Access Control: Configured automated rule sets protecting premium video lessons, downloadable PDF course materials, and private community areas.',
        'Recurring Subscription Architecture: Integrated Stripe Billing with automated renewal workflows, grace periods, and failed payment dunning.',
        'Student Progress Tracking: Implemented visual lesson completion indicators and course certification generation upon graduation.',
      ],
      impact: [
        'Student Engagement: Increased course completion rates by 35% through distraction-free, responsive ReadyLaunch classroom layouts.',
        'Subscription Retention: Streamlined self-service account management, reducing churn and billing support tickets by 45%.',
      ],
      image: '/projects/memberpress-lms.png',
      year: '2022',
    },
  ];

  const categories = ['All', 'Plugins & APIs', 'Themes & Frontend', 'Migrations & Systems', 'Headless & Mobile'];

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Heading & Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <h2 className="section-heading-clean" style={{ marginBottom: '0.4rem' }}>
              <span>Selected Work ({projects.length})</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px' }}>
              Handcrafted enterprise systems, bespoke WordPress plugins, and high-concurrency API integrations.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: filter === cat ? 'var(--neon-cyan)' : 'var(--border-glass)',
                  background: filter === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: filter === cat ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: filter === cat ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid with Large Screenshots and Dark Glass Framing */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                {/* Screenshot Device Mockup Frame */}
                <div
                  style={{
                    width: '100%',
                    height: '240px',
                    borderRadius: '14px',
                    background: 'rgba(8, 12, 22, 0.95)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Glass overlay badge on top of image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(10, 15, 26, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.2rem 0.65rem',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-code)',
                      color: 'var(--neon-cyan)',
                      fontWeight: 600,
                    }}
                  >
                    {project.year}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      background: 'rgba(10, 15, 26, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.2rem 0.65rem',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-code)',
                      color: '#ffffff',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Title & Link Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.35,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-code)' }}>
                      {project.role}
                    </p>
                  </div>
                  <div style={{ color: 'var(--neon-cyan)', marginTop: '0.2rem', flexShrink: 0 }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Tag Pills at bottom */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.725rem',
                      fontFamily: 'var(--font-code)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Project Case Study Details */}
        {mounted &&
          activeModalProject &&
          createPortal(
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                background: 'rgba(5, 8, 15, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
              }}
              onClick={() => setActiveModalProject(null)}
            >
              <div
                className="glass-card"
                style={{
                  maxWidth: '820px',
                  width: '100%',
                  maxHeight: '92vh',
                  overflowY: 'auto',
                  padding: '2.5rem',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.25)',
                  position: 'relative',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                  }}
                >
                  <X size={18} />
                </button>

                {/* Modal Screenshot Frame */}
                <div
                  style={{
                    width: '100%',
                    height: '340px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '1.75rem',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    background: 'rgba(8, 12, 22, 0.95)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span className="pill" style={{ color: 'var(--neon-cyan)' }}>
                    {activeModalProject.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                    {activeModalProject.year}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'var(--font-code)',
                      marginLeft: 'auto',
                    }}
                  >
                    {activeModalProject.role}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  {activeModalProject.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {activeModalProject.description}
                </p>

                {/* Key Technical Deliverables */}
                {activeModalProject.deliverables && activeModalProject.deliverables.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-code)',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--neon-cyan)" />
                      Key Technical Contributions & Architecture
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                      {activeModalProject.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6,
                            paddingLeft: '1.25rem',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.45rem',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: 'var(--neon-cyan)',
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact Highlights */}
                {activeModalProject.impact && activeModalProject.impact.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-code)',
                      }}
                    >
                      <Zap size={16} color="var(--neon-cyan)" />
                      Impact & Performance Highlights
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      {activeModalProject.impact.map((imp, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(56, 189, 248, 0.05)',
                            border: '1px solid rgba(56, 189, 248, 0.2)',
                            borderRadius: '12px',
                            padding: '1rem',
                            fontSize: '0.85rem',
                            color: '#e2e8f0',
                            lineHeight: 1.5,
                          }}
                        >
                          {imp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-code)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        color: 'var(--neon-cyan)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Modal Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => setActiveModalProject(null)} className="btn-glass">
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="btn-glass btn-cyan-glow"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
}
