'use client';

import React from 'react';
import { Search, PenTool, Code, Rocket, BarChart3 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand the problem deeply.',
      icon: <Search size={18} />,
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Plan architecture & user flows.',
      icon: <PenTool size={18} />,
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'Clean development and build features.',
      icon: <Code size={18} />,
    },
    {
      num: '04',
      title: 'Hardening',
      desc: 'Performance tuning & security audits.',
      icon: <Rocket size={18} />,
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'CI/CD, Lighthouse 90+, and launch.',
      icon: <BarChart3 size={18} />,
    },
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>My Process</span>
        </h2>

        {/* 5 Connected Step Nodes (Exact Reference Replica) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '1.25rem',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="glass-card"
              style={{
                padding: '2rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Circular Glowing Icon Node */}
              <div
                className="timeline-dot"
                style={{
                  width: '54px',
                  height: '54px',
                  marginBottom: '1.25rem',
                }}
              >
                {step.icon}
              </div>

              {/* Step Number */}
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-code)',
                  color: 'var(--neon-cyan)',
                  fontWeight: 600,
                  marginBottom: '0.35rem',
                }}
              >
                {step.num}
              </div>

              {/* Step Title */}
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
