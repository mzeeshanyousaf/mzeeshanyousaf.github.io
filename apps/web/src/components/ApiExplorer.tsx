'use client';

import React, { useState } from 'react';
import { Terminal, Send, CheckCircle, Clock, Server, ArrowRight } from 'lucide-react';

export default function ApiExplorer() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'health' | 'projects' | 'skills'>('health');
  const [loading, setLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<any>({
    status: 'healthy',
    uptime: 1420.45,
    timestamp: new Date().toISOString(),
    service: 'NestJS Portfolio API',
    database: 'Prisma Client connected',
  });
  const [latency, setLatency] = useState<number>(14);

  const mockEndpoints = {
    health: {
      url: '/api/health',
      method: 'GET',
      data: {
        status: 'healthy',
        uptime: 1420.45,
        timestamp: new Date().toISOString(),
        service: 'NestJS Portfolio API',
        database: 'Prisma Client connected',
      },
    },
    projects: {
      url: '/api/projects',
      method: 'GET',
      data: [
        {
          id: 'proj-01',
          title: 'Full-Stack Monorepo Portfolio Engine',
          slug: 'fullstack-monorepo',
          featured: true,
          stars: 42,
          stack: ['Next.js 14', 'NestJS', 'Prisma', 'TypeScript'],
        },
        {
          id: 'proj-02',
          title: 'AI Prompt Pipeline & Automation Workspace',
          slug: 'ai-prompt-engine',
          featured: true,
          stars: 55,
          stack: ['NestJS', 'OpenAI', 'Prisma', 'PostgreSQL'],
        },
      ],
    },
    skills: {
      url: '/api/skills/grouped',
      method: 'GET',
      data: {
        Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        Backend: ['NestJS', 'Node.js', 'REST APIs', 'Microservices'],
        Database: ['Prisma ORM', 'PostgreSQL', 'SQLite', 'Redis'],
      },
    },
  };

  const handleExecute = async (key: 'health' | 'projects' | 'skills') => {
    setSelectedEndpoint(key);
    setLoading(true);

    const startTime = performance.now();
    try {
      // Attempt real fetch if local NestJS server is running
      const res = await fetch(`http://localhost:4000${mockEndpoints[key].url}`, {
        signal: AbortSignal.timeout(1000),
      });
      if (res.ok) {
        const json = await res.json();
        setLatency(Math.round(performance.now() - startTime));
        setResponseOutput(json);
        setLoading(false);
        return;
      }
    } catch {
      // Fallback cleanly to simulated realistic API response
    }

    setTimeout(() => {
      setLatency(Math.round(performance.now() - startTime) + 12);
      setResponseOutput(mockEndpoints[key].data);
      setLoading(false);
    }, 250);
  };

  return (
    <section id="api-demo" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Terminal size={14} />
            Interactive API Explorer
          </div>
          <h2 className="section-title">Test the NestJS &amp; Prisma Endpoints</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Inspect the live contract schemas and responses served by our backend architecture.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2rem',
            border: '1px solid rgba(99, 102, 241, 0.25)',
          }}
        >
          {/* Endpoint Selector Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {(['health', 'projects', 'skills'] as const).map((ep) => (
                <button
                  key={ep}
                  onClick={() => handleExecute(ep)}
                  style={{
                    padding: '0.45rem 0.9rem',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: selectedEndpoint === ep ? 'var(--accent-cyan)' : 'var(--border-color)',
                    background: selectedEndpoint === ep ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                    color: selectedEndpoint === ep ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {mockEndpoints[ep].url}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleExecute(selectedEndpoint)}
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
            >
              <Send size={14} />
              <span>{loading ? 'Sending...' : 'Send Request'}</span>
            </button>
          </div>

          {/* Response Meta Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="pill" style={{ color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)' }}>
                200 OK
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={13} />
                {latency} ms
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Content-Type: application/json
            </span>
          </div>

          {/* Response JSON Output */}
          <pre
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.825rem',
              lineHeight: 1.6,
              color: 'var(--accent-cyan)',
              overflowX: 'auto',
              maxHeight: '340px',
            }}
          >
            <code>{JSON.stringify(responseOutput, null, 2)}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
