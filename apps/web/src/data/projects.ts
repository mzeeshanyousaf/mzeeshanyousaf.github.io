import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'buddyboss-sports-community',
    title: 'BuddyBoss Sports Community',
    year: '2026',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'An enterprise sports community platform powered by BuddyBoss. Engineered custom OOP PHP plugins for player stats, club rosters, discussion forums, and interactive user feeds with sub-second queries.',
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
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['WordPress', 'BuddyBoss', 'Custom Plugins', 'OOP PHP'],
  },
  {
    slug: 'vacation-rental-booking-engine',
    title: 'Vacation Rental & Booking Engine',
    year: '2025',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & API Integration Engineer',
    summary:
      'Luxury vacation rental platform featuring direct Streamline VRS REST API synchronization, real-time availability calendars, and custom AJAX booking filters.',
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
    liveUrl: 'https://floridakoshervillas.com',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['API Integration', 'Booking Engine', 'AJAX', 'PHP OOP'],
  },
  {
    slug: 'rv-automotive-marketplace',
    title: 'Enterprise RV & Automotive Marketplace',
    year: '2025',
    category: 'Themes & Frontend',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'High-density vehicle marketplace featuring dynamic multi-attribute AJAX filtering, custom CPT spec sheets, interactive floor plans, and 360° virtual tours.',
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
    liveUrl: 'https://asrvs.com',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Custom Theme', 'Automotive', 'AJAX', 'ACF Pro'],
  },
  {
    slug: 'shopify-ecommerce-migration',
    title: 'WordPress to Shopify E-Commerce Migration',
    year: '2024',
    category: 'Migrations & Systems',
    role: 'Lead Full-Stack & Migration Engineer',
    summary:
      'End-to-end platform migration from WooCommerce to Shopify with a custom Liquid storefront theme, automated ETL data transfer, and 100% SEO ranking retention.',
    challenge:
      'Migrating high-volume product catalogs, complex variant matrices, customer accounts, and historical orders from a self-hosted WooCommerce database to Shopify without data corruption or organic ranking loss.',
    outcome:
      'Engineered automated ETL migration scripts, built a bespoke high-converting Liquid storefront, and implemented a flawless 301 redirection matrix preserving 100% organic traffic.',
    metrics: [
      { value: '0%', label: 'Customer data loss or disruption' },
      { value: '100%', label: 'SEO rankings & organic traffic preserved' },
      { value: '+35%', label: 'Mobile conversion rate uplift' },
    ],
    stack: ['Shopify Liquid', 'WooCommerce ETL', 'Data Mapping', 'JavaScript ES6+', 'SEO 301 Engine'],
    image: '/projects/shopify-migration.png',
    liveUrl: 'https://fortishd.com',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Shopify', 'WooCommerce', 'Data Migration', 'Liquid'],
  },
  {
    slug: 'stripe-quickbooks-sync',
    title: 'WooCommerce Stripe & QuickBooks Sync Engine',
    year: '2024',
    category: 'Plugins & APIs',
    role: 'Lead Backend PHP & API Integration Engineer',
    summary:
      'Automated accounting integration linking WooCommerce orders, Stripe payment events, and QuickBooks Online ledgers with real-time transaction fee deductions.',
    challenge:
      'Accounting teams spent dozens of hours manually reconciling gross customer charges against net Stripe deposit payouts, resulting in frequent bookkeeping discrepancies.',
    outcome:
      'Engineered a webhook-driven OAuth 2.0 sync daemon with token rotation, automatically mapping gross revenue, line-item taxes, and Stripe processor fees directly into Intuit ledger accounts.',
    metrics: [
      { value: '0%', label: 'Reconciliation error rate' },
      { value: '100%', label: 'Automated ledger entries' },
      { value: 'OAuth 2.0', label: 'Token rotation & security compliance' },
    ],
    stack: ['PHP (OOP)', 'QuickBooks Online API', 'Stripe Webhooks', 'WooCommerce', 'OAuth 2.0'],
    image: '/projects/stripe-quickbooks.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Fintech', 'QuickBooks API', 'Stripe', 'Accounting'],
  },
  {
    slug: 'xero-accounting-automation',
    title: 'WooCommerce Xero Cloud Accounting',
    year: '2024',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & API Integration Engineer',
    summary:
      'Automated Xero accounting synchronization plugin for WooCommerce, mapping order payments, tax rates, contact records, and automated invoice reconciliation.',
    challenge:
      'Handling multi-currency transactions, varying domestic/international sales tax rates, and credit notes for partial returns without manual bookkeeping intervention.',
    outcome:
      'Developed a modular plugin that captures order lifecycle hooks to generate compliant Xero sales invoices, tax line allocations, and balance adjustments automatically.',
    metrics: [
      { value: '100%', label: 'Automated invoice generation' },
      { value: 'Multi-Currency', label: 'Exchange rate & tax line mapping' },
      { value: 'Real-time', label: 'Credit note & refund adjustments' },
    ],
    stack: ['PHP (OOP)', 'Xero REST API', 'OAuth 2.0', 'WooCommerce Core', 'Webhook Handlers'],
    image: '/projects/xero-accounting.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Xero API', 'E-Commerce', 'Financial Automation', 'OOP PHP'],
  },
  {
    slug: 'trackabi-time-tracking-sync',
    title: 'Freelance Platform Trackabi Sync',
    year: '2023',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'Custom WordPress plugin connecting a freelance marketplace with Trackabi REST API for live timer tracking, task mapping, and automated hourly billing.',
    challenge:
      'Freelancers experienced billing disputes due to asynchronous time logs, while marketplace admins lacked visibility into live active timer states across active contracts.',
    outcome:
      'Engineered bi-directional event webhooks and background queue workers syncing active timer states and converting logged work intervals into automated hourly invoice milestones.',
    metrics: [
      { value: '100%', label: 'Automated time log reconciliation' },
      { value: 'Zero', label: 'Impact on marketplace frontend speed' },
      { value: 'Background Queue', label: 'Reliable rate-limited sync' },
    ],
    stack: ['PHP (OOP)', 'Trackabi REST API', 'WordPress Cron', 'Queue Workers', 'Admin UI'],
    image: '/projects/trackabi-sync.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Trackabi API', 'Freelance Platform', 'Time Tracking', 'Automation'],
  },
  {
    slug: 'loggitry-legacy-php-remediation',
    title: 'Loggitry Dev Logger & Legacy PHP Migration',
    year: '2023',
    category: 'Migrations & Systems',
    role: 'Lead PHP Backend & SRE Engineer',
    summary:
      'Lightweight in-browser live-streaming debug console and legacy PHP 5.x/7.x to modern PHP 8.x remediation suite for high-availability enterprise applications.',
    challenge:
      'Mission-critical enterprise platforms suffered from fatal memory leaks, deprecated PHP 5/7 functions, and insecure query patterns, while developers lacked live SSH debugging access.',
    outcome:
      'Created the Loggitry in-browser log streaming tool and led comprehensive refactoring to strict PHP 8.x typing, eliminating OWASP vulnerabilities and cutting query response times by 40%.',
    metrics: [
      { value: '0%', label: 'Critical failure rate post-migration' },
      { value: '+40%', label: 'Query execution speed boost' },
      { value: 'PHP 8.x', label: 'Strict OOP typing & OWASP hardened' },
    ],
    stack: ['Modern PHP 8.x', 'Security Hardening', 'Database Indexing', 'Loggitry Console', 'SRE'],
    image: '/projects/legacy-php-debug.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['Dev Tools', 'PHP 8.x', 'Security', 'Database Optimization'],
  },
  {
    slug: 'woocommerce-bulk-pricing-sync',
    title: 'Bulk Variant Pricing & Custom Meta Sync',
    year: '2023',
    category: 'Plugins & APIs',
    role: 'Lead WordPress & PHP Backend Engineer',
    summary:
      'High-capacity CSV streaming plugin enabling mass pricing and variant attribute updates across 50,000+ SKUs with batch database queries.',
    challenge:
      'Updating regular prices, sale dates, and wholesale tier metadata across complex product variations routinely hit server execution timeouts and memory exhaustion.',
    outcome:
      'Built a stream reader with dry-run syntax validation and batch $wpdb transactions, updating 50,000+ variation records in seconds with zero memory leaks.',
    metrics: [
      { value: '50k+', label: 'SKU variations processed per run' },
      { value: 'Seconds', label: 'Execution time down from hours' },
      { value: 'Dry-Run', label: 'Pre-flight data validation & rollbacks' },
    ],
    stack: ['WooCommerce Core', 'Batch $wpdb', 'PHP Streams', 'CSV Engine', 'Postmeta Optimization'],
    image: '/projects/woocommerce-bulk-price.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['WooCommerce', 'High Performance', 'Batch Processing', 'MySQL'],
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
      { value: 'GraphQL', label: 'Decoupled headless data pipeline' },
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Next.js', '@wordpress/scripts', 'Tailwind CSS'],
    image: '/projects/headless-gutenberg.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
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
      { value: 'PCI Level 1', label: 'Tokenized client-side checkout' },
    ],
    stack: ['PHP (OOP)', 'Stripe SDK', 'PayPal REST API', 'Idempotent Webhooks', 'WooCommerce'],
    image: '/projects/multi-gateway-payments.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
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
    image: '/projects/memberpress-readylaunch.png',
    liveUrl: 'https://mzeeshanyousaf.github.io/#work',
    repoUrl: 'https://github.com/mzeeshanyousaf',
    tags: ['MemberPress', 'LMS', 'Memberships', 'Stripe'],
  },
];
