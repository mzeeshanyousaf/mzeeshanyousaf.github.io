'use client';

import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, Server, Terminal, Wrench } from 'lucide-react';

interface SkillTile {
  name: string;
  symbol: string;
  category: 'Programming & Core' | 'Frameworks & Libraries' | 'WordPress Ecosystem' | 'APIs & Cloud' | 'Tools & Optimization';
}

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skills: SkillTile[] = [
    // Programming & Core
    { name: 'WordPress Core', symbol: 'WP', category: 'Programming & Core' },
    { name: 'PHP (OOP & 8.x)', symbol: '🐘', category: 'Programming & Core' },
    { name: 'JavaScript (ES6+)', symbol: 'JS', category: 'Programming & Core' },
    { name: 'TypeScript', symbol: 'TS', category: 'Programming & Core' },
    { name: 'HTML5', symbol: 'H5', category: 'Programming & Core' },
    { name: 'CSS3 / SCSS', symbol: 'CSS', category: 'Programming & Core' },
    { name: 'MySQL Database', symbol: 'SQL', category: 'Programming & Core' },
    { name: 'Liquid (Shopify)', symbol: '{ }', category: 'Programming & Core' },

    // Frameworks & Libraries
    { name: 'React.js', symbol: '⚛', category: 'Frameworks & Libraries' },
    { name: 'Next.js 14', symbol: '▲', category: 'Frameworks & Libraries' },
    { name: 'Vue.js', symbol: 'V', category: 'Frameworks & Libraries' },
    { name: 'Tailwind CSS', symbol: '≋', category: 'Frameworks & Libraries' },
    { name: 'Bootstrap', symbol: 'B', category: 'Frameworks & Libraries' },
    { name: 'jQuery', symbol: '$', category: 'Frameworks & Libraries' },
    { name: 'NestJS', symbol: 'ⓝ', category: 'Frameworks & Libraries' },

    // WordPress & Ecosystem
    { name: 'Custom Theme Dev', symbol: '🎨', category: 'WordPress Ecosystem' },
    { name: 'Custom Plugin Dev', symbol: '🔌', category: 'WordPress Ecosystem' },
    { name: 'Gutenberg Blocks', symbol: '🧱', category: 'WordPress Ecosystem' },
    { name: 'Headless WordPress', symbol: '⚡', category: 'WordPress Ecosystem' },
    { name: 'WooCommerce', symbol: '🛒', category: 'WordPress Ecosystem' },
    { name: 'BuddyBoss Platform', symbol: '👥', category: 'WordPress Ecosystem' },
    { name: 'Elementor Pro', symbol: 'E', category: 'WordPress Ecosystem' },
    { name: 'Divi Builder', symbol: 'D', category: 'WordPress Ecosystem' },
    { name: 'WPBakery', symbol: 'W', category: 'WordPress Ecosystem' },
    { name: 'Security Hardening', symbol: '🛡', category: 'WordPress Ecosystem' },

    // APIs & Cloud Platforms
    { name: 'REST APIs', symbol: '⇌', category: 'APIs & Cloud' },
    { name: 'GraphQL', symbol: '◈', category: 'APIs & Cloud' },
    { name: 'Stripe API', symbol: '💳', category: 'APIs & Cloud' },
    { name: 'PayPal API', symbol: '🅿', category: 'APIs & Cloud' },
    { name: 'QuickBooks Online', symbol: 'QBO', category: 'APIs & Cloud' },
    { name: 'Xero API', symbol: 'Xero', category: 'APIs & Cloud' },
    { name: 'Trackabi API', symbol: '⏱', category: 'APIs & Cloud' },
    { name: 'Streamline VRS', symbol: 'VRS', category: 'APIs & Cloud' },
    { name: 'Shopify Dev', symbol: '🛍', category: 'APIs & Cloud' },
    { name: 'AWS Cloud', symbol: 'AWS', category: 'APIs & Cloud' },
    { name: 'Cloudways', symbol: '☁', category: 'APIs & Cloud' },
    { name: 'WP Engine', symbol: 'WPE', category: 'APIs & Cloud' },

    // Tools & Performance Optimization
    { name: 'Git & GitHub', symbol: '⌥', category: 'Tools & Optimization' },
    { name: 'Docker', symbol: '🐳', category: 'Tools & Optimization' },
    { name: 'Webpack', symbol: '⬡', category: 'Tools & Optimization' },
    { name: 'Composer', symbol: '𝄞', category: 'Tools & Optimization' },
    { name: 'WP-CLI', symbol: '>_', category: 'Tools & Optimization' },
    { name: 'GTmetrix', symbol: '⚡', category: 'Tools & Optimization' },
    { name: 'Google Lighthouse', symbol: '🏮', category: 'Tools & Optimization' },
    { name: 'CI/CD Pipelines', symbol: '⚯', category: 'Tools & Optimization' },
    { name: 'Jira & ClickUp', symbol: '✓', category: 'Tools & Optimization' },
    { name: 'Asana', symbol: '•••', category: 'Tools & Optimization' },
  ];

  const categories = [
    'All',
    'Programming & Core',
    'Frameworks & Libraries',
    'WordPress Ecosystem',
    'APIs & Cloud',
    'Tools & Optimization',
  ];

  const filteredSkills =
    activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Heading & Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <h2 className="section-heading-clean" style={{ marginBottom: '0.4rem' }}>
              <span>Skills &amp; Technologies ({skills.length})</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px' }}>
              Full technical stack extracted directly from enterprise production workflows, custom plugin architectures, and core WordPress engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const count =
                cat === 'All' ? skills.length : skills.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--neon-cyan)' : 'var(--border-glass)',
                    background:
                      activeCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      activeCategory === cat ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      opacity: 0.75,
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '10px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid of rounded dark glass square tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '1rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-glass-tile"
              style={{
                cursor: 'default',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(56, 189, 248, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Inner Icon Box */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-cyan)',
                  fontSize: skill.symbol.length > 3 ? '0.82rem' : '1.15rem',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 700,
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                {skill.symbol}
              </div>

              {/* Skill Name */}
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {skill.name}
              </div>

              {/* Category Mini Tag */}
              <div
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-code)',
                  textAlign: 'center',
                  opacity: 0.8,
                }}
              >
                {skill.category.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
