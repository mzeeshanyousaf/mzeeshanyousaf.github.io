'use client';

import React from 'react';
import { Layers, Palette, ShoppingBag, Gauge } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layers size={22} style={{ color: 'var(--neon-cyan)' }} />,
      number: '01',
      title: 'Custom Plugin & Backend Engineering',
      desc: 'OOP PHP plugins, custom Stripe and PayPal payment gateways, REST APIs, GraphQL, and MySQL database optimization.',
      points: ['Custom payment gateway plugins', 'Secure API endpoints & webhooks', 'Database architecture & query tuning'],
    },
    {
      icon: <Palette size={22} style={{ color: 'var(--neon-cyan)' }} />,
      number: '02',
      title: 'Custom Theme & ACF Block Development',
      desc: 'Bespoke lightweight WordPress themes and custom ACF blocks.',
      points: ['Full-site editing (FSE) & ACF Pro', 'Interactive React frontend components', 'Clean, semantic & accessible code'],
    },
    {
      icon: <ShoppingBag size={22} style={{ color: 'var(--neon-cyan)' }} />,
      number: '03',
      title: 'Enterprise E-Commerce & WooCommerce Customization',
      desc: 'Custom checkout fields, dynamic AJAX filtering, payment gateway extensions, and reliable order pipelines.',
      points: ['High-conversion checkout flows', 'Custom inventory & order status automation', 'Multi-currency & global payments'],
    },
    {
      icon: <Gauge size={22} style={{ color: 'var(--neon-cyan)' }} />,
      number: '04',
      title: 'Performance Optimization & Security Hardening',
      desc: 'Database indexing, server-side caching, security audits, and 90+ GTmetrix and Lighthouse scores.',
      points: ['Sub-second page load times', 'Complete security audit & vulnerability patch', 'Object caching with Redis & Varnish'],
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>Design &amp; Engineering That Speaks For You</span>
        </h2>

        {/* Services 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    {svc.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem' }}>
                  {svc.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {svc.desc}
                </p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem' }}>
                {svc.points.map((pt) => (
                  <li key={pt} style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--neon-emerald)' }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
