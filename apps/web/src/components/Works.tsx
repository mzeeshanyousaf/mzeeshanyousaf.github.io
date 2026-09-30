'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  year?: string;
}

export default function Works() {
  const works: WorkItem[] = [
    {
      id: 'custom-woocommerce',
      title: 'Custom WooCommerce Payment Gateway & Order Pipeline',
      category: 'E-Commerce & Plugins',
      description: 'OOP PHP plugins, custom Stripe and PayPal payment gateways, REST APIs, GraphQL, and MySQL optimization.',
      tags: ['PHP (OOP)', 'Stripe/PayPal APIs', 'WooCommerce', 'REST APIs'],
      year: '2024',
    },
    {
      id: 'custom-themes',
      title: 'Enterprise ACF Custom Theme',
      category: 'Theme Engineering',
      description: 'Bespoke lightweight WordPress themes and custom ACF blocks.',
      tags: ['React', 'ACF Blocks', 'Tailwind CSS'],
      year: '2024',
    },
    {
      id: 'veon',
      title: 'Large-Scale Sports Community Platform (Veon)',
      category: 'Community & Scalability',
      description: 'Custom checkout fields, dynamic AJAX filtering, payment gateway extensions, and reliable order pipelines.',
      tags: ['BuddyBoss Ecosystem', 'Custom Plugins', 'MySQL', 'Caching'],
      year: '2023',
    },
    {
      id: 'destello',
      title: 'Performance Engineering & Security Hardening (Destello)',
      category: 'Infrastructure & Audits',
      description: 'Database indexing, server-side caching, security audits, and 90+ GTmetrix and Lighthouse scores.',
      tags: ['Security Hardening', 'Database Indexing', 'Redis', 'Lighthouse 90+'],
      year: '2023',
    },
    {
      id: 'zayla',
      title: 'WordPress API Integration & Automation (Zayla)',
      category: 'APIs & Microservices',
      description: 'Automated data synchronization, custom webhooks, and third-party service integrations with high fault tolerance.',
      tags: ['REST APIs', 'GraphQL', 'Webhooks', 'Node.js'],
      year: '2022',
    },
  ];

  return (
    <section id="works" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">Selected Works</div>
          <h2 className="section-title">A collection of refined digital experiences</h2>
          <p className="section-subtitle">
            The work doesn’t just look good — it performs. Here’s the impact behind the engineering. Every project here was engineered with intention — from backend PHP architecture and custom plugins to sub-second speed.
          </p>
        </div>

        {/* Works List / Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '2rem',
                position: 'relative',
              }}
            >
              <div style={{ maxWidth: '720px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    0{idx + 1}
                  </span>
                  <span className="pill">{work.category}</span>
                  {work.year && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {work.year}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
                  {work.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {work.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.7rem 1.4rem',
                    fontSize: '0.85rem',
                  }}
                >
                  <span>Discuss Case Study</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
