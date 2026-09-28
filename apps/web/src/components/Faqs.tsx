'use client';

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Faqs() {
  const faqs = [
    {
      q: 'How does a project typically start?',
      a: 'We begin with an architectural discovery conversation to understand your goals, target audience, brand direction, and technical scope before mapping out user flows and database models.',
    },
    {
      q: 'How long does an enterprise WordPress or full-stack project take?',
      a: 'Timelines typically range from 2 to 6 weeks depending on custom plugin complexity, third-party API integrations, and iteration cycles.',
    },
    {
      q: 'Do you build custom plugins rather than relying on bloated third-party tools?',
      a: 'Yes. My core philosophy is writing bespoke object-oriented PHP plugins and clean React/Next.js components to ensure update safety, security, and sub-second execution.',
    },
    {
      q: 'Do you offer ongoing support after project launch?',
      a: 'Yes. I provide post-launch maintenance, security audits, database indexing, and continuous monitoring to keep platforms running smoothly.',
    },
    {
      q: 'Will the website be responsive for all devices?',
      a: 'Every interface is engineered mobile-first and tested rigorously across mobile, tablet, and high-resolution desktop breakpoints.',
    },
    {
      q: 'What about Core Web Vitals & SEO?',
      a: 'Clean semantic markup, optimized schema tags, server-side caching, and sub-second load times are baked into every build to guarantee 90+ GTmetrix and Lighthouse scores.',
    },
  ];

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>Frequently Asked Questions</span>
        </h2>

        <div style={{ maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>
                <span style={{ fontSize: '0.98rem', color: '#ffffff' }}>{faq.q}</span>
                <ChevronDown size={18} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
              </summary>
              <p style={{ marginTop: '0.85rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
