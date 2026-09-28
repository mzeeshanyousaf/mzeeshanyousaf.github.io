'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Software Engineer',
      company: 'Enterprise Tech Solutions',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Architecting scalable web applications, designing NestJS backend microservices, and leading Next.js frontend transitions with strict TypeScript safety.',
      achievements: [
        'Built full-stack monorepo systems serving thousands of monthly active users',
        'Accelerated API response times by 40% through Redis caching and Prisma query optimization',
        'Implemented automated CI/CD deployment pipelines on GitHub Actions',
      ],
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
    },
    {
      role: 'Frontend & Node.js Developer',
      company: 'Digital Innovation Labs',
      period: '2021 - 2023',
      location: 'Hybrid',
      type: 'Full-Time',
      description: 'Developed modern single-page applications, responsive interfaces, client dashboards, and REST API integrations.',
      achievements: [
        'Delivered 12+ responsive client web applications on schedule with 98%+ satisfaction',
        'Refactored legacy UI components to modern React hooks, cutting bundle size by 32%',
        'Integrated headless CMS and payment processing gateways',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Git'],
    },
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Briefcase size={14} />
            Career Journey
          </div>
          <h2 className="section-title">Experience &amp; Milestones</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proven track record of engineering scalable, maintainable, and high-impact web software.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="glass-card"
              style={{
                padding: '2rem 2.2rem',
                position: 'relative',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="pill" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="pill" style={{ color: 'var(--text-secondary)' }}>
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div style={{ marginBottom: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.achievements.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.15rem', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
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
