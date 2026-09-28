'use client';

import React from 'react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Insight',
      desc: 'I start by understanding your world — your audience, your goals, and the challenges behind them.',
    },
    {
      number: '02',
      title: 'Structure & Strategy',
      desc: 'User flows, content direction, and the overall framework. This is where ideas take shape.',
    },
    {
      number: '03',
      title: 'Design & Build',
      desc: 'I explore visuals and layouts that elevate your brand while staying aligned with your goals.',
    },
    {
      number: '04',
      title: 'Refine & Finalize',
      desc: 'This final phase ensures your project feels cohesive, intuitive, and ready for real-world use.',
    },
  ];

  return (
    <section id="process" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">Methodology</div>
          <h2 className="section-title">Creative Approach</h2>
          <p className="section-subtitle">
            Every project is different, but the path to great work stays the same — a balance of research, clarity, creativity, and refinement.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
