'use client';

import React from 'react';
import { Briefcase, Laptop, UserCheck, Layers } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: '05/2025 – Present',
      role: 'SSE – WordPress Engineer',
      company: 'Amentotech',
      desc: 'Architecting custom WordPress themes, OOP plugins, and headless solutions using React, GraphQL, and REST APIs for global enterprise clients.',
      icon: <Briefcase size={18} />,
    },
    {
      period: '2023 – 2024',
      role: 'Full Stack Developer',
      company: 'Webbuggs',
      desc: 'Maintained and customized complex Shopify, WordPress, and WooCommerce applications. Built custom payment gateway and order management systems.',
      icon: <Laptop size={18} />,
    },
    {
      period: '2022 – 2023',
      role: 'Back-End Developer — PHP',
      company: 'Webbuggs',
      desc: 'Optimized server response times, cutting page load times by 40% via caching and database indexing. Engineered secure OOP PHP solutions.',
      icon: <Layers size={18} />,
    },
    {
      period: '2019 – Present',
      role: 'Freelance & Custom Solutions',
      company: 'Self Employed',
      desc: 'Delivered bespoke themes, custom payment integrations, and high-performance web applications for startups and international businesses.',
      icon: <UserCheck size={18} />,
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>Experience</span>
        </h2>

        {/* Timeline Horizontal / Responsive Node Track (Matching Reference Image) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
            position: 'relative',
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              className="glass-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Header with Circular Glowing Node matching reference */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div className="timeline-dot">
                  {exp.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-code)',
                      color: 'var(--neon-cyan)',
                      fontWeight: 600,
                    }}
                  >
                    {exp.period}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
              </div>

              {/* Role Title */}
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                }}
              >
                {exp.role}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
