'use client';

import React, { useState } from 'react';
import { Sparkles, Code, Server, Database, Cloud } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';
  level: number; // 0-100
  highlight?: boolean;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skillsData: SkillItem[] = [
    // Frontend
    { name: 'Next.js 14 / App Router', category: 'Frontend', level: 95, highlight: true },
    { name: 'React', category: 'Frontend', level: 95, highlight: true },
    { name: 'TypeScript', category: 'Frontend', level: 92, highlight: true },
    { name: 'Vanilla CSS & Glassmorphism', category: 'Frontend', level: 94 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
    { name: 'State Management (Zustand/Redux)', category: 'Frontend', level: 88 },
    { name: 'HTML5 Semantic & SEO Best Practices', category: 'Frontend', level: 96 },

    // Backend
    { name: 'NestJS Framework', category: 'Backend', level: 92, highlight: true },
    { name: 'Node.js & Express', category: 'Backend', level: 92, highlight: true },
    { name: 'RESTful API Architecture', category: 'Backend', level: 94 },
    { name: 'GraphQL & Apollo', category: 'Backend', level: 85 },
    { name: 'Microservices & Event-Driven APIs', category: 'Backend', level: 84 },
    { name: 'Authentication (JWT, OAuth, NextAuth)', category: 'Backend', level: 90 },

    // Database
    { name: 'Prisma ORM', category: 'Database', level: 94, highlight: true },
    { name: 'PostgreSQL', category: 'Database', level: 90, highlight: true },
    { name: 'MongoDB & Mongoose', category: 'Database', level: 86 },
    { name: 'Redis (Caching & Queues)', category: 'Database', level: 82 },
    { name: 'SQLite', category: 'Database', level: 90 },

    // DevOps & Tools
    { name: 'Git & GitHub Workflows', category: 'DevOps & Tools', level: 92 },
    { name: 'GitHub Actions / CI/CD', category: 'DevOps & Tools', level: 88, highlight: true },
    { name: 'Docker & Containerization', category: 'DevOps & Tools', level: 85 },
    { name: 'Vercel, Render & Cloud Hosting', category: 'DevOps & Tools', level: 90 },
    { name: 'Linux CLI & PowerShell', category: 'DevOps & Tools', level: 86 },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            Technical Toolkit
          </div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive technical proficiency across the entire modern web development spectrum.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              gap: '0.5rem',
              padding: '0.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-color)',
              marginTop: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat ? 'var(--gradient-brand)' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: activeCategory === cat ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: '1.4rem 1.6rem',
                border: skill.highlight ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid var(--border-color)',
                background: skill.highlight ? 'rgba(99, 102, 241, 0.04)' : 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar Track */}
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    borderRadius: '3px',
                    background: skill.highlight ? 'var(--gradient-brand)' : 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo))',
                    transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.75rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>{skill.category}</span>
                {skill.highlight && (
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Core Expertise</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
