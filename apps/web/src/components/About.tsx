'use client';

import React from 'react';
import { User, Award, Code2, Rocket, HeartHandshake, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Completed Projects' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const pillars = [
    {
      icon: <Code2 size={22} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'Scalable Full-Stack Engineering',
      desc: 'Building end-to-end architectures connecting clean React/Next.js client experiences with high-throughput NestJS microservices and robust database models.',
    },
    {
      icon: <Rocket size={22} style={{ color: 'var(--accent-indigo)' }} />,
      title: 'Performance & Modern Standards',
      desc: 'Obsessed with fast initial load times, perfect Lighthouse scores, search engine optimization (SEO), and accessible, responsive user interfaces.',
    },
    {
      icon: <Award size={22} style={{ color: 'var(--accent-purple)' }} />,
      title: 'Maintainable Clean Architecture',
      desc: 'Adhering to SOLID principles, strict TypeScript safety, dependency injection, and modular monorepo structures that scale cleanly with team size.',
    },
    {
      icon: <HeartHandshake size={22} style={{ color: 'var(--accent-emerald)' }} />,
      title: 'Collaborative Problem Solver',
      desc: 'Clear communication, agile iterative delivery, and bridging the gap between business objectives, user experience, and technical execution.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <User size={14} />
            About Me
          </div>
          <h2 className="section-title">Driven by Quality &amp; Precision</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transforming complex business challenges into elegant, resilient, and delightful web software.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: '1.75rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
