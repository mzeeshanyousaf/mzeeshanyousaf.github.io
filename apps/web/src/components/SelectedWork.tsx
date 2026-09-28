'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, CheckCircle2, Zap, Layers, Sparkles, X } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: 'Plugins & APIs' | 'Themes & Frontend' | 'Migrations & Systems';
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
      title: 'Sports Community Platform',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'BuddyBoss Ecosystem', 'Custom Plugins', 'MySQL', 'Template Overrides'],
      description:
        'Enterprise sports community platform with custom OOP PHP plugins for player stats, club rosters, forums, and user feeds with sub-second queries.',
      deliverables: [
        'Custom Member Profiles & Player Stats: Overrode core BuddyBoss template structures for dedicated player and club layouts with dynamic stats.',
        'Clubs & Teams Architecture: Built customized group structures for sports clubs, allowing team captains to manage rosters and post updates.',
        'Social Feed & Community Forums: Integrated dynamic user feeds, sports discussion forums, and interactive media uploads for high engagement.',
        'Bespoke Backend Plugins (OOP PHP): Developed custom PHP plugins for dynamic sports search filters and specialized user directory queries.',
      ],
      impact: [
        'Scalability: Optimized complex MySQL queries for member directories and social feeds under heavy dynamic traffic.',
        'Maintainability: Built 100% update-safe customizations using custom child-theme overrides and standalone OOP plugins.',
      ],
      image: '/projects/sports-community.png',
      year: '2024',
    },
    {
      id: 'vacation-rental-vrs',
      title: 'Vacation Rental Booking Engine',
      role: 'Lead WordPress & API Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'Streamline VRS API', 'WordPress Core', 'Dynamic Search', 'AJAX'],
      description:
        'Luxury vacation rental platform with direct Streamline VRS API sync, real-time availability calendars, and custom AJAX booking filters.',
      deliverables: [
        'Streamline VRS REST API Integration: Engineered OOP PHP integration with Streamline VRS to synchronize property data, dynamic pricing, and real-time room availability.',
        'Custom Dynamic Search & Filter Engine: Developed advanced AJAX algorithms allowing users to filter luxury villas by date range, guest count, and amenities.',
        'Live Booking & Reservation Flow: Built a customized checkout and reservation workflow seamlessly handling instant bookings, fees, and real-time holds.',
        'Custom Property & Room Layout Systems: Created bespoke custom post structures and layout controls for high-res photo galleries, floor plans, and virtual tours.',
      ],
      impact: [
        'System Efficiency: Reduced external API latency by 60% using dynamic transient caching for property rates and availability calendars.',
        'Scalability & Security: Built 100% update-safe, OOP-based custom plugins adhering to official WordPress coding standards.',
      ],
      image: '/projects/vacation-rental.png',
      year: '2024',
    },
    {
      id: 'rv-marketplace',
      title: 'RV & Automotive Marketplace',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Themes & Frontend',
      tags: ['PHP (OOP)', 'WordPress Core', 'AJAX Filters', 'Custom Post Types', 'MySQL'],
      description:
        'High-density vehicle marketplace featuring dynamic multi-attribute AJAX filtering, custom CPT spec sheets, floor plans, and 360° virtual tours.',
      deliverables: [
        'Custom Theme Architecture: Built a bespoke, lightweight WordPress theme engineered specifically to showcase complex vehicle inventories and floor plans.',
        'Multi-Facet AJAX Inventory Filtering: Developed real-time search allowing buyers to sort vehicles by make, model, floor plan, length, weight, and slides.',
        'Technical Spec Data Modeling: Designed an object-oriented taxonomy and custom field system to store and display extensive vehicle specifications.',
        'Interactive Floor Plan & 360° Media: Built responsive media modules supporting interactive floor plan hotspots and embeddable 360-degree tour viewers.',
      ],
      impact: [
        'Query Performance: Optimized multi-taxonomy database queries, maintaining sub-second dynamic search results across thousands of inventory units.',
        'Maintainability: Built with 100% update-safe OOP PHP standards, preventing security vulnerabilities and ensuring seamless core updates.',
      ],
      image: '/projects/rv-marketplace.png',
      year: '2024',
    },
    {
      id: 'wp-shopify-migration',
      title: 'WordPress to Shopify Migration',
      role: 'Lead Full-Stack & E-Commerce Migration Engineer',
      category: 'Migrations & Systems',
      tags: ['Shopify (Liquid)', 'Cross-Platform Migration', 'ETL Pipelines', 'Custom Theme', 'Data Mapping'],
      description:
        'End-to-end platform migration from WooCommerce to Shopify with a custom Liquid storefront theme, automated ETL data transfer, and 100% SEO retention.',
      deliverables: [
        'Bespoke Shopify Theme Engineering: Built a lightweight, custom Shopify theme using Liquid, HTML5, SCSS, and modern JavaScript for high conversion rates.',
        'Cross-Platform Data Migration (ETL): Designed automated data extraction scripts to migrate products, variant matrixes, customer profiles, and past orders.',
        'Custom Navigation & Filtering: Engineered advanced storefront collection filters, allowing customers to sort products dynamically by categories and custom attributes.',
        'SEO & URL Redirect Strategy: Executed a comprehensive 301 redirect map for legacy URLs and metadata to retain 100% of organic traffic and rankings.',
      ],
      impact: [
        'Data Integrity: Transferred 100% of legacy orders, customer accounts, and product catalogs with zero data loss or customer account disruption.',
        'Storefront Performance: Improved mobile Core Web Vitals and load performance by replacing legacy database queries with Shopify hosted rendering.',
      ],
      image: '/projects/shopify-migration.png',
      year: '2023',
    },
    {
      id: 'stripe-quickbooks-sync',
      title: 'Stripe & QuickBooks Sync Engine',
      role: 'Lead Backend PHP & API Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WooCommerce', 'Stripe API', 'QuickBooks API', 'Financial Automation'],
      description:
        'Automated accounting integration linking WooCommerce orders, Stripe payment events, and QuickBooks Online ledgers with real-time fee deductions.',
      deliverables: [
        'Two-Way Webhook & Event Listener: Built a reliable webhook engine capturing real-time WooCommerce order statuses, Stripe charges, and refund events.',
        'QuickBooks Online API (OAuth 2.0): Architected a secure connection handler with token auto-refresh mechanisms for Intuit QuickBooks Online REST API.',
        'Stripe Fee Breakdown & Line-Item Allocation: Engineered custom ledger logic that extracts gross order revenue, deducts processing fees, and logs net payouts.',
        'Asynchronous Queue & Logging System: Implemented background queues to prevent API rate-limiting issues, alongside an admin dashboard logging panel.',
      ],
      impact: [
        'Accounting Accuracy: Eliminated manual bookkeeping overhead and reduced reconciliation errors down to 0%.',
        'Financial Transparency: Provided store owners with automated, real-time tracking of gross revenue vs. net earnings on every transaction.',
      ],
      image: '/projects/stripe-quickbooks.png',
      year: '2023',
    },
    {
      id: 'xero-accounting-sync',
      title: 'WooCommerce Xero Accounting Sync',
      role: 'Lead WordPress & API Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WooCommerce API', 'Xero REST API', 'OAuth 2.0', 'Financial Automation'],
      description:
        'Automated Xero accounting synchronization plugin for WooCommerce, mapping order payments, tax rates, contact records, and automated invoice reconciliation.',
      deliverables: [
        'Xero REST API OAuth 2.0: Architected a secure OAuth 2.0 token management workflow with token rotation to interface directly with Xero Accounting API.',
        'Instant Invoice & Contact Creation: Automatically generated corresponding Xero sales invoices and synchronized customer contact profiles upon checkout.',
        'Multi-Currency & Tax Line Allocation: Programmed accurate line-item mapping for domestic/international taxes, shipping fees, and discount codes.',
        'Automated Credit Note Processing: Automatically generated credit notes in Xero when orders are cancelled or refunded within WooCommerce.',
      ],
      impact: [
        'Financial Automation: Automated 100% of e-commerce invoice reconciliation into Xero cloud ledgers.',
        'Audit Compliance: Maintained flawless tax and revenue reporting across multi-currency transactions with zero manual data entry.',
      ],
      image: '/projects/xero-accounting.png',
      year: '2023',
    },
    {
      id: 'trackabi-sync',
      title: 'Freelance Platform Trackabi Sync',
      role: 'Lead WordPress & PHP Backend Integration Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'Plugin Engineering', 'Trackabi REST API', 'Workflow Automation'],
      description:
        'Custom WordPress plugin connecting a freelance marketplace with Trackabi API for live timer tracking, task mapping, and automated hourly billing.',
      deliverables: [
        'Custom OOP Plugin Architecture: Built a modular WordPress plugin following official WordPress coding standards for update safety and extensibility.',
        'Trackabi REST API Integration: Engineered secure authentication handlers to interface directly with Trackabi for tasks, timers, and project creation.',
        'Bi-Directional Time-Log Synchronization: Programmed automated background event hooks to sync logged work hours and active timer states in real time.',
        'Automated Hourly Rate Invoicing: Implemented line-item logic converting tracked time into accurate invoice totals based on freelancer contract rates.',
      ],
      impact: [
        'Workflow Automation: Eliminated manual time logging, automating 100% of time tracking and invoicing sync between marketplace and Trackabi.',
        'Execution Efficiency: Built with background processing queues to handle high-frequency time-log events without impacting marketplace load speeds.',
      ],
      image: '/projects/trackabi-sync.png',
      year: '2023',
    },
    {
      id: 'legacy-php-remediation',
      title: 'Loggitry Live Dev Logger & Migration',
      role: 'Lead PHP Backend & Site Reliability Engineer',
      category: 'Migrations & Systems',
      tags: ['Modern PHP (OOP)', 'System Debugging', 'Database Migration', 'Security Hardening'],
      description:
        'Lightweight in-browser live-streaming debug console and legacy PHP 5.x/7.x to modern PHP 8.x remediation suite for high-availability enterprise applications.',
      deliverables: [
        'Loggitry Live Debug Console: Built a lightweight in-browser log streaming tool for WordPress to view and filter `debug.log` events in real-time without SSH access.',
        'Legacy PHP Version Upgrades: Upgraded legacy PHP codebases to modern PHP 8.x, fixing deprecated function calls and structural incompatibilities.',
        'Error Remediation & Debugging: Diagnosed and resolved fatal PHP runtime errors, memory leakage issues, and database connection timeouts.',
        'Security Hardening: Hardened codebases against OWASP top risks by eliminating SQL injection (SQLi) vectors and unauthenticated function calls.',
      ],
      impact: [
        'System Stability: Achieved a 0% critical failure rate across migrated legacy applications by resolving core execution errors and patching dependencies.',
        'Response Speed: Improved database query execution speeds and overall application response times by 40% through backend refactoring.',
      ],
      image: '/projects/legacy-php-debug.png',
      year: '2022',
    },
    {
      id: 'woocommerce-bulk-price',
      title: 'WooCommerce Bulk Price Sync',
      role: 'Lead WordPress & PHP Backend Engineer',
      category: 'Plugins & APIs',
      tags: ['PHP (OOP)', 'WooCommerce Core', 'CSV Data Pipelines', 'Custom Meta Fields', 'MySQL'],
      description:
        'High-capacity CSV streaming plugin enabling mass pricing and variant attribute updates across 50,000+ SKUs with batch database queries.',
      deliverables: [
        'High-Capacity CSV Processing Engine: Built a stream reader capable of processing large inventory files in background chunks, bypassing PHP timeouts.',
        'Complex Variant Key Mapping: Programmed dynamic array mapping to locate child variations and update regular prices, sale prices, and custom meta.',
        'Custom Meta Field Integration: Extended WooCommerce core hooks to read dynamic meta keys from CSV columns, updating pricing rules directly in postmeta.',
        'Batch Database Transactions: Replaced individual `update_post_meta()` overhead with optimized batch database queries (`$wpdb`) and cache clearing.',
      ],
      impact: [
        'Operational Efficiency: Reduced bulk pricing update times for enterprise stores from hours of manual entry down to seconds via automated CSV uploads.',
        'Server Reliability: Maintained sub-second query execution and zero memory exhaustion failures while bulk-updating complex variable product matrices.',
      ],
      image: '/projects/woocommerce-bulk-price.png',
      year: '2022',
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
      image: '/projects/memberpress-readylaunch.png',
      year: '2022',
    },
  ];

  const categories = ['All', 'Plugins & APIs', 'Themes & Frontend', 'Migrations & Systems'];

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
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
                    height: '220px',
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
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.2rem',
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
