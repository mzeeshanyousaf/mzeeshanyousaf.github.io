'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          background: 'rgba(10, 15, 26, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'var(--radius-full)',
          padding: '0.45rem 0.75rem 0.45rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Monogram Logo matching reference (AH. -> ZY.) */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'var(--font-code)',
            letterSpacing: '-0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
          }}
        >
          <span>ZY</span>
          <span style={{ color: 'var(--neon-cyan)', fontSize: '1.4rem' }}>.</span>
        </a>

        {/* Center Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-code)',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href="#contact"
            className="btn-glass btn-cyan-glow"
            style={{
              padding: '0.45rem 1.15rem',
              fontSize: '0.825rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <span>Let&apos;s Talk</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-trigger"
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              cursor: 'pointer',
              padding: '0.35rem',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '4.5rem',
            left: '1rem',
            right: '1rem',
            background: 'rgba(10, 15, 26, 0.95)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-code)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 820px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile-trigger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
