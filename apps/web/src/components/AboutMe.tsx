'use client';

import React from 'react';
import { Lightbulb, Target, Code, BookOpen, Users, Brain } from 'lucide-react';

export default function AboutMe() {
  const chips = [
    { icon: <Lightbulb size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Problem Solver' },
    { icon: <Target size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Detail Oriented' },
    { icon: <Code size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Clean Code Advocate' },
    { icon: <BookOpen size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Always Learning' },
    { icon: <Users size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Team Player & Mentor' },
    { icon: <Brain size={15} style={{ color: 'var(--neon-cyan)' }} />, label: 'Curious Mind' },
  ];

  return (
    <section id="about" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        {/* Glass Card Container (Matching Reference Image) */}
        <div
          className="glass-card"
          style={{
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Character Line-Art with Coffee & Window */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1/1',
              }}
            >
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.25))' }}
              >
                {/* Window Frame in Background */}
                <path
                  d="M60 70C60 40 100 20 150 20C200 20 240 40 240 70V220H60V70Z"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  opacity="0.4"
                  fill="rgba(56, 189, 248, 0.03)"
                />
                <path d="M150 20V220M60 120H240" stroke="#38bdf8" strokeWidth="1.5" opacity="0.3" />
                {/* Cloud & Sun outside window */}
                <circle cx="100" cy="65" r="14" stroke="#38bdf8" strokeWidth="1.5" opacity="0.3" />
                <path d="M170 85C170 75 180 70 190 73C195 68 208 70 210 78C218 80 220 90 215 95H170V85Z" stroke="#38bdf8" strokeWidth="1.5" opacity="0.25" />

                {/* Character Silhouette */}
                {/* Head & Hair */}
                <circle cx="215" cy="195" r="28" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(10, 15, 26, 0.9)" />
                <path d="M190 190C195 170 215 160 235 165C250 170 252 185 245 195" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                {/* Ear */}
                <path d="M192 195C188 198 188 205 192 208" stroke="#38bdf8" strokeWidth="2" />
                {/* Profile feature */}
                <path d="M238 198L244 204L238 208" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                <path d="M228 215C232 218 238 218 240 215" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                {/* Body & Arm holding coffee mug */}
                <path d="M190 225C170 240 150 280 145 340H290C285 280 265 240 245 225" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(10, 15, 26, 0.9)" />
                {/* Arm bending holding mug */}
                <path d="M210 260C225 270 240 270 260 260" stroke="#38bdf8" strokeWidth="2" />
                <path d="M245 260C255 270 260 290 255 310" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                {/* Coffee Mug & Steam */}
                <rect x="250" y="275" width="24" height="32" rx="4" stroke="#38bdf8" strokeWidth="2" fill="rgba(14, 21, 35, 0.95)" />
                <path d="M274 283C280 283 283 288 283 294C283 300 280 304 274 304" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                {/* Steam curves */}
                <path d="M256 268C254 262 258 258 256 252" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M264 268C262 262 266 258 264 250" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

                {/* Desk Line */}
                <path d="M40 340H360" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

                {/* Stack of books on desk */}
                <rect x="290" y="325" width="55" height="15" rx="2" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.15)" />
                <rect x="295" y="310" width="50" height="15" rx="2" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.15)" />
                <rect x="298" y="295" width="45" height="15" rx="2" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.15)" />
              </svg>
            </div>
          </div>

          {/* Right Column: Bio & 6 Attribute Chips */}
          <div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              About Me
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}
            >
              Passionate about creating clean, efficient, and scalable web solutions with great user experiences. I love working with technologies that push the web forward.
            </p>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.925rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              With 4+ years of dedicated professional experience across enterprise software, high-concurrency e-commerce pipelines, and custom API architectures, I specialize in object-oriented PHP, modern React / Next.js, NestJS, and headless web deployments.
            </p>

            {/* 6 Attribute Chips (Matching Reference Image) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    fontSize: '0.8rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
