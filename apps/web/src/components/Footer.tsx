'use client';

import React from 'react';
import { ArrowUp, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 3rem 0',
        background: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Zeeshan Yousaf
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Crafting thoughtful digital experiences built on clarity, purpose, and precision. Creating web platforms that balance aesthetics, usability, and intent.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Full-Stack Monorepo: Next.js 14 • NestJS • Prisma ORM
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li><a href="#works" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Works</a></li>
                <li><a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a></li>
                <li><a href="#process" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Process</a></li>
                <li><a href="#awards" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Awards</a></li>
                <li><a href="#faqs" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>FAQs</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Connect
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li>
                  <a href="https://github.com/mzeeshanyousaf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:mzeeshanyousaf.dev@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    Email Direct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Zeeshan Yousaf. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.825rem',
              fontFamily: 'inherit',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
