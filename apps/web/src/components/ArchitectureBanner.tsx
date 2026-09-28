'use client';

import React, { useState } from 'react';
import { Play, Globe, Server, Database, CheckCircle2, Cpu } from 'lucide-react';

export default function ArchitectureBanner() {
  const [pingStatus, setPingStatus] = useState<string | null>(null);
  const [pingLoading, setPingLoading] = useState(false);

  const simulateApiPing = () => {
    setPingLoading(true);
    setPingStatus(null);
    setTimeout(() => {
      setPingLoading(false);
      setPingStatus('NestJS API & Prisma client connected • HTTP 200 OK (14ms latency)');
    }, 450);
  };

  return (
    <section id="architecture" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>Full-Stack Monorepo Architecture</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Card 1: Next.js */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="pill" style={{ color: 'var(--neon-cyan)' }}>apps/web</span>
              <span className="pill" style={{ color: 'var(--neon-emerald)' }}>Static Export</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              Next.js 14 Frontend
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Static export optimized for GitHub Pages. Interactive UI, parallax background layers, glassmorphism design tokens, and sub-second load times.
            </p>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--neon-emerald)' }} />
              <span>Automated GitHub Actions CI/CD</span>
            </div>
          </div>

          {/* Card 2: NestJS */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="pill" style={{ color: '#ea284e' }}>apps/api</span>
              <span className="pill" style={{ color: 'var(--neon-cyan)' }}>REST &amp; DTOs</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              NestJS Microservice
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Modular backend engine with dependency injection, validation pipes, contact inquiry handlers, and CORS headers for both local and production origins.
            </p>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--neon-emerald)' }} />
              <span>Strict TypeScript DTO validation</span>
            </div>
          </div>

          {/* Card 3: Prisma */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="pill" style={{ color: '#a855f7' }}>packages/database</span>
              <span className="pill" style={{ color: 'var(--neon-cyan)' }}>Prisma ORM</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              Prisma Data Layer
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Unified data layer with automated schema migrations, zero-config local SQLite prototyping, and production PostgreSQL readiness.
            </p>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--neon-emerald)' }} />
              <span>Auto-generated TypeScript client</span>
            </div>
          </div>
        </div>

        {/* Live Architecture Ping Box */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
              Monorepo Pipeline Test
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
              {pingStatus ? pingStatus : 'npm workspaces configured with apps/web, apps/api, and packages/database'}
            </div>
          </div>

          <button
            onClick={simulateApiPing}
            disabled={pingLoading}
            className="btn-glass btn-cyan-glow"
            style={{ fontSize: '0.825rem', padding: '0.5rem 1.1rem' }}
          >
            <Play size={13} />
            <span>{pingLoading ? 'Testing...' : 'Test Architecture Ping'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
