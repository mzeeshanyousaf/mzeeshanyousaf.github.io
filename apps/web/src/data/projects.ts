import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'buddyboss-sports-community',
    title: 'BuddyBoss Sports Community Platform',
    year: '2026',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'Engineered and customized a large-scale, enterprise BuddyBoss community platform tailored specifically for sports organizations, players, and local clubs. Built bespoke plugin extensions, customized community profiles, optimized user feeds, and overridden native BuddyBoss theme templates to deliver a high-performance interactive ecosystem.',
    challenge:
      'Handling high-density sports statistics and club rosters across thousands of simultaneous members led to database bottlenecks on standard BuddyBoss hooks and template renders.',
    outcome:
      'Engineered an update-safe OOP plugin architecture with template overrides, dedicated taxonomy caches, and optimized MySQL queries that reduced directory load latency by 65%.',
    metrics: [
      { value: '< 200ms', label: 'Feed & directory query response' },
      { value: '10k+', label: 'Active athletes & club members' },
      { value: '100%', label: 'Update-safe core overrides' },
    ],
    stack: ['PHP (OOP)', 'BuddyBoss Ecosystem', 'WordPress Core', 'MySQL', 'REST APIs'],
    image: '/projects/sports-community.png',
    tags: ['WordPress', 'BuddyBoss', 'Custom Plugins', 'OOP PHP'],
  },
  {
    slug: 'vacation-rental-booking-engine',
    title: 'Enterprise Vacation Rental & Real-Time Booking Engine',
    year: '2025',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & API Integration Engineer',
    summary:
      'Architected and engineered a custom, enterprise-grade vacation rental platform integrated directly with Streamline VRS (Vacation Rental Software). Developed custom backend sync scripts and API bridges to dynamically handle property listings, real-time pricing calendars, multi-room availability queries, and automated reservation workflows without sacrificing site performance.',
    challenge:
      'Frequent external API calls for seasonal pricing, dynamic cleaning fees, and live calendar holds caused slow page loads and hit partner rate limits during peak booking periods.',
    outcome:
      'Architected an asynchronous transient caching layer reducing external API latency by 60%, with instantaneous multi-attribute AJAX filtering across hundreds of luxury villas.',
    metrics: [
      { value: '−60%', label: 'External API latency' },
      { value: '100%', label: 'Real-time calendar sync accuracy' },
      { value: '4.9★', label: 'Guest booking experience rating' },
    ],
    stack: ['PHP 8.x', 'Streamline VRS API', 'AJAX Engine', 'WordPress Hooks', 'Transient Caching'],
    image: '/projects/vacation-rental.png',
    tags: ['API Integration', 'Booking Engine', 'AJAX', 'PHP OOP'],
  },
  {
    slug: 'rv-automotive-marketplace',
    title: 'Enterprise RV & Automotive Marketplace Platform',
    year: '2025',
    category: 'Themes & Frontend',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'Engineered a bespoke, high-performance WordPress vehicle marketplace tailored for dynamic inventory browsing, interactive floor plan visualizers, and detailed technical specifications. Architected a custom theme from the ground up to handle high-density inventory data, multi-attribute AJAX filtering, and 360-degree media integration without sacrificing sub-second page rendering.',
    challenge:
      'Showcasing deep technical specs (tank capacities, chassis types, slide-outs, hitch weights) across thousands of units without sacrificing mobile page speeds or search fluidity.',
    outcome:
      'Built a custom lightweight theme with indexed multi-facet taxonomy queries, rendering real-time filtered results in under 300ms without page reloads.',
    metrics: [
      { value: '300ms', label: 'Multi-attribute search response' },
      { value: '5,000+', label: 'Vehicle inventory models managed' },
      { value: '360°', label: 'Virtual tour media integration' },
    ],
    stack: ['WordPress Core', 'Custom CPTs', 'PHP (OOP)', 'AJAX Filters', 'ACF Pro'],
    image: '/projects/rv-marketplace.png',
    tags: ['Custom Theme', 'Automotive', 'AJAX', 'ACF Pro'],
  },
  {
    slug: 'shopify-ecommerce-migration',
    title: 'WordPress to Shopify Enterprise Migration & Custom Theme Architecture',
    year: '2024',
    category: 'Migrations & Systems',
    role: 'Lead Full-Stack & Migration Engineer',
    summary:
      'Architected and executed a complete end-to-end platform migration from an existing WordPress e-commerce store to a modern, high-performance Shopify ecosystem. Developed a bespoke, mobile-optimized Shopify theme engineered with liquid components and custom collection filters, while executing complex data pipelines to transfer legacy products, customer profiles, order histories, taxonomy structures, and blog posts with zero data loss.',
    challenge:
      'Migrating high-volume product catalogs, complex variant matrices, customer accounts, and historical orders from a self-hosted WooCommerce database to Shopify without data corruption or organic ranking loss.',
    outcome:
      'Engineered automated ETL migration scripts, built a bespoke high-converting Liquid storefront, and implemented a flawless 301 redirection matrix preserving 100% organic traffic.',
    metrics: [
      { value: '0%', label: 'Customer data loss or disruption' },
      { value: '100%', label: 'SEO rankings & organic traffic preserved' },
      { value: '< 200ms', label: 'Liquid rendering performance' },
    ],
    stack: ['Shopify Liquid', 'WooCommerce ETL', 'Data Mapping', 'JavaScript ES6+', 'SEO 301 Engine'],
    image: '/projects/shopify-migration.png',
    tags: ['Shopify', 'WooCommerce', 'Data Migration', 'Liquid'],
  },
  {
    slug: 'stripe-quickbooks-sync',
    title: 'WooCommerce Stripe & QuickBooks Online Synchronization Engine',
    year: '2024',
    category: 'Plugins & APIs',
    role: 'Lead Backend PHP & API Integration Engineer',
    summary:
      'Engineered a bespoke object-oriented PHP plugin for WordPress/WooCommerce that automates the synchronization of online order transactions, Stripe payment events, and QuickBooks Online accounting records. Developed dynamic webhook receivers and Intuit API bridges to log sales receipts, extract Stripe processing fees, map custom fields, and provide a clear overview of net business revenue directly inside QuickBooks.',
    challenge:
      'Accounting teams spent dozens of hours manually reconciling gross customer charges against net Stripe deposit payouts, resulting in frequent bookkeeping discrepancies.',
    outcome:
      'Engineered a webhook-driven OAuth 2.0 sync daemon with token rotation, automatically mapping gross revenue, line-item taxes, and Stripe processor fees directly into Intuit ledger accounts.',
    metrics: [
      { value: '0%', label: 'Reconciliation error rate' },
      { value: '100%', label: 'Automated ledger entries' },
      { value: '< 300ms', label: 'API webhook processing speed' },
    ],
    stack: ['PHP (OOP)', 'QuickBooks Online API', 'Stripe Webhooks', 'WooCommerce', 'OAuth 2.0'],
    image: '/projects/stripe-quickbooks.png',
    tags: ['Fintech', 'QuickBooks API', 'Stripe', 'Accounting'],
  },
  {
    slug: 'trackabi-time-tracking-sync',
    title: 'Custom Freelance Platform & Trackabi Time-Tracking API Integration',
    year: '2023',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Integration Engineer',
    summary:
      'Architected and developed a bespoke, object-oriented PHP plugin designed to seamlessly connect a custom WordPress freelance marketplace with the Trackabi Time-Tracking API. Built automated background sync handlers to map client projects, user tasks, time-log entries, and billable hourly rates directly between the platform and Trackabi’s tracking engine.',
    challenge:
      'Freelancers experienced billing disputes due to asynchronous time logs, while marketplace admins lacked visibility into live active timer states across active contracts.',
    outcome:
      'Engineered bi-directional event webhooks and background queue workers syncing active timer states and converting logged work intervals into automated hourly invoice milestones.',
    metrics: [
      { value: '100%', label: 'Automated time log reconciliation' },
      { value: 'Zero', label: 'Impact on marketplace frontend speed' },
      { value: '< 150ms', label: 'Rate-limited sync processing' },
    ],
    stack: ['PHP (OOP)', 'Trackabi REST API', 'WordPress Cron', 'Queue Workers', 'Admin UI'],
    image: '/projects/trackabi-sync.png',
    tags: ['Trackabi API', 'Freelance Platform', 'Time Tracking', 'Automation'],
  },
  {
    slug: 'loggitry-legacy-php-remediation',
    title: 'Legacy PHP Platform Migration & System Remediation',
    year: '2023',
    category: 'Migrations & Systems',
    role: 'Lead PHP Backend & Site Reliability Engineer',
    summary:
      'Engineered end-to-end migrations for legacy PHP web applications to modern PHP environments, resolving critical runtime errors, deprecation warnings, and database bottlenecks. Performed comprehensive codebase refactoring, patched legacy security vulnerabilities, and implemented proactive monitoring frameworks to maintain high availability and performance across complex web applications.',
    challenge:
      'Mission-critical enterprise platforms suffered from fatal memory leaks, deprecated PHP 5/7 functions, and insecure query patterns, while developers lacked live SSH debugging access.',
    outcome:
      'Created the Loggitry in-browser log streaming tool and led comprehensive refactoring to strict PHP 8.x typing, eliminating OWASP vulnerabilities and cutting query response times by 40%.',
    metrics: [
      { value: '0%', label: 'Critical failure rate post-migration' },
      { value: '+40%', label: 'Query execution speed boost' },
      { value: '< 150ms', label: 'Modern PHP 8.x response times' },
    ],
    stack: ['Modern PHP 8.x', 'Security Hardening', 'Database Indexing', 'Loggitry Console', 'SRE'],
    image: '/projects/legacy-php.png',
    tags: ['Dev Tools', 'PHP 8.x', 'Security', 'Database Optimization'],
  },
  {
    slug: 'woocommerce-bulk-pricing-sync',
    title: 'Bulk WooCommerce Variant Pricing & Custom Meta Sync Engine',
    year: '2023',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'Architected and developed a high-performance, object-oriented PHP plugin for WooCommerce designed to handle mass price updates across thousands of product SKUs and complex variations via CSV data feeds. Engineered targeted CSV mapping logic to dynamic custom fields, allowing store managers to update simple, grouped, and variable product pricing, sale schedules, and custom meta attributes in bulk without timeouts or server lockups.',
    challenge:
      'Updating regular prices, sale dates, and wholesale tier metadata across complex product variations routinely hit server execution timeouts and memory exhaustion.',
    outcome:
      'Built a stream reader with dry-run syntax validation and batch $wpdb transactions, updating 50,000+ variation records in seconds with zero memory leaks.',
    metrics: [
      { value: '50k+', label: 'SKU variations processed per run' },
      { value: 'Seconds', label: 'Execution time down from hours' },
      { value: '< 100ms', label: 'Per-batch database transaction' },
    ],
    stack: ['WooCommerce Core', 'Batch $wpdb', 'PHP Streams', 'CSV Engine', 'Postmeta Optimization'],
    image: '/projects/woocommerce-bulk-sync.png',
    tags: ['WooCommerce', 'High Performance', 'Batch Processing', 'MySQL'],
  },
  {
    slug: 'internal-job-board',
    title: 'Internal Job Board & Candidate Recruitment Management Engine',
    year: '2023',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'Architected and developed a standalone, object-oriented PHP plugin providing a private recruitment and internship tracking portal for an enterprise firm. Built custom applicant tracking workflows, department-specific listing managers, secure candidate resume upload pipelines, and role-restricted HR review dashboards without relying on bloated generic job board plugins.',
    challenge:
      'The company was struggling with generic job boards that could not handle custom recruitment workflows or securely manage sensitive resume files.',
    outcome:
      'Delivered a lightweight, secure custom plugin handling end-to-end recruitment with automated emails and bespoke HR review dashboards.',
    metrics: [
      { value: '150 KB', label: 'Plugin footprint' },
      { value: '100%', label: 'Secure private resume handling' },
      { value: '< 200ms', label: 'Dashboard query response' },
    ],
    stack: ['PHP (OOP)', 'Custom Post Types (CPTs)', 'Role-Based Access Control', 'AJAX', 'File Pipeline'],
    image: '/projects/internal-job-board.png',
    tags: ['PHP', 'Recruitment', 'Automation', 'RBAC'],
  },
  {
    slug: 'shopify-wellness-theme',
    title: 'Custom Shopify Wellness & Supplements Theme Architecture',
    year: '2023',
    category: 'Themes & Frontend',
    role: 'Lead Shopify & Frontend Theme Engineer',
    summary:
      'Architected and developed a bespoke, high-converting Shopify storefront for a health, wellness, and travel supplements brand, engineered on top of Shopify’s modern Horizon theme architecture. Built modular, reusable custom sections, configurable blocks, and optimized Liquid snippets designed for complete merchant customizability via the Shopify Theme Editor—strictly adhering to an upgrade-safe codebase pattern so core theme updates never break bespoke modifications.',
    challenge:
      'The client needed a highly customized Shopify storefront that their marketing team could easily manage without breaking the core theme architecture during updates.',
    outcome:
      'Delivered a modular, upgrade-safe theme with high-performance JSON templates, reducing the client\'s reliance on developers by 80% for new product launches.',
    metrics: [
      { value: '100%', label: 'Theme upgrade compatibility' },
      { value: '80%', label: 'Reduced reliance on developers' },
      { value: '< 100ms', label: 'Native Liquid interaction delay' },
    ],
    stack: ['Shopify Liquid', 'JSON Templates', 'ES6 JavaScript', 'Horizon Theme API', 'OS 2.0'],
    image: '/projects/shopify-wellness.png',
    tags: ['Shopify', 'Liquid', 'Frontend', 'Performance'],
  },
  {
    slug: 'headless-woocommerce-react-native',
    title: 'Headless WooCommerce Mobile Engine & React Native Storefront',
    year: '2023',
    category: 'Headless & Mobile',
    role: 'Lead Full-Stack & Mobile Systems Engineer',
    summary:
      'Architected a decoupled, omnichannel mobile shopping experience powered by a Headless WordPress and WooCommerce backend and a high-performance React Native mobile application (iOS & Android). Replaced conventional monolithic PHP page rendering with a high-throughput GraphQL API layer (WPGraphQL / WooGraphQL), enabling real-time product browsing, customer cart mutations, tokenized secure checkouts, and instant order tracking with native mobile performance.',
    challenge:
      'The client’s legacy monolithic WooCommerce architecture was too slow for mobile shopping, leading to high cart abandonment on mobile devices.',
    outcome:
      'Delivered a sub-second, app-native browsing and checkout experience, integrating WPGraphQL with Apollo Client and Redux Toolkit for seamless mobile performance.',
    metrics: [
      { value: '60fps', label: 'Smooth mobile micro-interactions' },
      { value: '100%', label: 'Decoupled omnichannel sync' },
      { value: '< 150ms', label: 'WPGraphQL endpoint response' },
    ],
    stack: ['React Native', 'Headless WordPress', 'WPGraphQL', 'Apollo Client', 'Redux Toolkit'],
    image: '/projects/react-native-headless.png',
    tags: ['React Native', 'Headless WooCommerce', 'GraphQL', 'Mobile'],
  },
  {
    slug: 'headless-wordpress-gutenberg',
    title: 'Headless WordPress & Custom React Gutenberg Blocks',
    year: '2025',
    category: 'Themes & Frontend',
    role: 'Senior WordPress & Frontend Engineer',
    summary:
      'Modern decoupled web architecture combining custom React-based Gutenberg editor blocks with a headless frontend powered by GraphQL and REST APIs.',
    challenge:
      'Enterprise marketing teams needed Gutenberg’s visual editing power, but the engineering team required decoupled Next.js/React performance and edge caching.',
    outcome:
      'Built custom modular Gutenberg blocks with @wordpress/scripts and exposed structured GraphQL schemas consumed by a decoupled Next.js frontend achieving a 98+ Lighthouse score.',
    metrics: [
      { value: '98+', label: 'Google Lighthouse Performance' },
      { value: 'React & WP', label: 'Custom Gutenberg blocks' },
      { value: '< 200ms', label: 'Next.js ISR edge delivery' },
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Next.js', '@wordpress/scripts', 'Tailwind CSS'],
    image: '/projects/headless-gutenberg.png',
    tags: ['Headless', 'React', 'Gutenberg', 'Next.js'],
  },
  {
    slug: 'multi-gateway-payment-engine',
    title: 'Multi-Gateway Payment Engine (Stripe & PayPal)',
    year: '2024',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & Payment Integration Engineer',
    summary:
      'Robust multi-gateway payment processing plugin integrating unified Stripe and PayPal checkout flows with automated webhooks and transactional triggers.',
    challenge:
      'High checkout abandonment caused by redirected gateway pages, along with inconsistent webhook delivery leading to missing customer orders upon network timeouts.',
    outcome:
      'Engineered an in-context modal checkout with PCI-compliant tokenization and idempotent webhook handlers, delivering a 99.9% successful payment completion rate.',
    metrics: [
      { value: '99.9%', label: 'Payment processing success rate' },
      { value: '−85%', label: 'Payment dispute support inquiries' },
      { value: '< 300ms', label: 'Gateway tokenization response' },
    ],
    stack: ['PHP (OOP)', 'Stripe SDK', 'PayPal REST API', 'Idempotent Webhooks', 'WooCommerce'],
    image: '/projects/multi-gateway-payments.png',
    tags: ['Payments', 'Stripe', 'PayPal', 'WooCommerce'],
  },
  {
    slug: 'memberpress-readylaunch-portal',
    title: 'MemberPress LMS & ReadyLaunch Portal',
    year: '2024',
    category: 'Themes & Frontend',
    role: 'Lead WordPress Architect & LMS Specialist',
    summary:
      'High-conversion learning management system and membership portal built with MemberPress ReadyLaunch, tiered access rules, and automated recurring billing.',
    challenge:
      'Legacy course styling caused distraction and slow completion rates, while manual subscriber permission updates created high admin support overhead.',
    outcome:
      'Customized MemberPress ReadyLaunch classroom environments with automated Stripe dunning, video progression tracking, and auto-generated graduation certificates.',
    metrics: [
      { value: '+35%', label: 'Course completion rate increase' },
      { value: '−45%', label: 'Billing churn & support volume' },
      { value: 'Tiered', label: 'Automated role-based access rules' },
    ],
    stack: ['WordPress Core', 'MemberPress', 'ReadyLaunch UI', 'Stripe Subscriptions', 'Custom SCSS'],
    image: '/projects/memberpress-lms.png',
    tags: ['MemberPress', 'LMS', 'Memberships', 'Stripe'],
  },
];
