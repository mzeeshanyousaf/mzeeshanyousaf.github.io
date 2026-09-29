'use client';

import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Star, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'AI / Systems';
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  stars?: number;
  highlights: string[];
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'fullstack-monorepo',
      title: 'Full-Stack Monorepo Portfolio Engine',
      category: 'Full-Stack',
      description: 'A production-grade developer platform combining Next.js 14 static export on GitHub Pages with an enterprise NestJS backend and Prisma ORM data layer.',
      tags: ['Next.js 14', 'NestJS', 'Prisma', 'TypeScript', 'GitHub Pages'],
      githubUrl: 'https://github.com/mzeeshanyousaf/mzeeshanyousaf.github.io',
      liveUrl: 'https://mzeeshanyousaf.github.io',
      featured: true,
      stars: 42,
      highlights: [
        'Static export for zero-latency GitHub Pages hosting',
        'Modular NestJS microservice architecture',
        'Prisma type-safe schema with auto-migrations',
      ],
    },
    {
      id: 'collaborative-dashboard',
      title: 'Real-Time Telemetry & Analytics Dashboard',
      category: 'Frontend',
      description: 'High-throughput operational monitoring console with live WebSocket streams, glassmorphic data visualizers, and customizable widget grids.',
      tags: ['Next.js', 'React', 'WebSockets', 'Modern CSS', 'Chart.js'],
      githubUrl: 'https://github.com/mzeeshanyousaf',
      liveUrl: 'https://mzeeshanyousaf.github.io',
      featured: true,
      stars: 38,
      highlights: [
        'Sub-50ms data streaming latency',
        'Dynamic layout engine with drag & drop',
        'Dark/Light mode contrast optimization',
      ],
    },
    {
      id: 'ai-prompt-engine',
      title: 'AI Prompt Pipeline & Automation Workspace',
      category: 'AI / Systems',
      description: 'Autonomous orchestration tool allowing users to assemble chained prompt recipes, parse structured JSON schemas, and monitor token usage.',
      tags: ['NestJS', 'Next.js', 'Prisma', 'OpenAI API', 'PostgreSQL'],
      githubUrl: 'https://github.com/mzeeshanyousaf',
      liveUrl: 'https://mzeeshanyousaf.github.io',
      featured: true,
      stars: 55,
      highlights: [
        'Deterministic schema validation with class-validator',
        'Vector memory cache layer with Redis',
        'Background job queue with BullMQ',
      ],
    },
    {
      id: 'headless-ecommerce',
      title: 'High-Conversion Headless Commerce Engine',
      category: 'Full-Stack',
      description: 'Decoupled storefront with sub-second page transitions, dynamic cart state management, automated tax calculation, and Stripe checkout webhooks.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind'],
      githubUrl: 'https://github.com/mzeeshanyousaf',
      liveUrl: 'https://mzeeshanyousaf.github.io',
      featured: false,
      stars: 29,
      highlights: [
        'Optimistic cart updates with zero layout shift',
        'Stripe webhooks with idempotency keys',
        '100/100 Core Web Vitals score',
      ],
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI / Systems'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <FolderGit2 size={14} />
            Selected Portfolio
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated collection of production web applications, open-source repositories, and system architectures.
          </p>

          {/* Filter Pills */}
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
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: filter === cat ? 'var(--gradient-brand)' : 'transparent',
                  color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: filter === cat ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header: Category & Stars */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span className="pill" style={{ color: 'var(--accent-cyan)' }}>
                    {project.category}
                  </span>

                  {project.stars && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--accent-amber)' }}>
                      <Star size={14} fill="currentColor" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Key Architectural Highlights:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {project.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-cyan)', marginTop: '0.1rem' }}>▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
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

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
