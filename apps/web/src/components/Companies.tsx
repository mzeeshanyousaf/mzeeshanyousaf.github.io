'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Companies() {
  const experiences = [
    {
      company: 'Amentotech',
      role: 'SSE – WordPress Engineer',
      period: '05/2025 – Present',
      location: 'Lahore, Pakistan',
      description:
        'Architect custom WordPress themes, OOP plugins, and headless solutions using React, GraphQL, and REST APIs. Optimize scalability, database tuning, and security for global enterprise clients.',
      highlights: [
        'Headless architectures combining React/Next.js with WordPress APIs',
        'High-concurrency database tuning and query profiling',
        'Enterprise plugins maintaining 99.9% uptime and zero regressions',
      ],
      tags: ['WordPress Core', 'OOP PHP', 'React', 'GraphQL', 'REST APIs', 'MySQL'],
    },
    {
      company: 'Webbuggs',
      role: 'Full-Stack WordPress & PHP Developer',
      period: '10/2022 – 05/2025',
      location: 'Lahore, Pakistan',
      description:
        'Reduced page load times by 40% via server caching and database query indexing. Built custom WooCommerce payment gateway plugins for Stripe and PayPal, and customized BuddyBoss sports community platforms.',
      highlights: [
        'Cut client site load times by 40% through Redis caching & query indexing',
        'Engineered Stripe & PayPal custom payment gateways for WooCommerce',
        'Customized BuddyBoss sports platforms for thousands of active users',
      ],
      tags: ['WooCommerce', 'Stripe API', 'PayPal API', 'BuddyBoss', 'Caching', 'PHP'],
    },
  ];

  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">Career History</div>
          <h2 className="section-title">Companies I’ve Worked With</h2>
          <p className="section-subtitle">
            I collaborate with companies who care about thoughtful digital presence. Each project is shaped through understanding, refinement, and attention to detail.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="glass-card"
              style={{
                padding: '2.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {exp.company}
                  </h3>
                  <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {exp.role}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="pill">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="pill">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {exp.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
