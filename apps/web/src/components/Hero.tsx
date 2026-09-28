'use client';

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro & Headline */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Hi, I&apos;m</span>
              <span
                style={{
                  width: '30px',
                  height: '1px',
                  backgroundColor: 'var(--neon-cyan)',
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Glowing Hero Name */}
            <h1
              className="glow-title"
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.12,
                marginBottom: '1rem',
              }}
            >
              Muhammad <br />
              <span style={{ color: 'var(--neon-cyan)' }}>Zeeshan Yousaf</span>
            </h1>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              Senior Software Engineer &amp; Full-Stack Developer
            </div>

            {/* Description from Resume */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '520px',
              }}
            >
              I build digital products that solve real problems and create meaningful impact. With 4+ years of expertise in high-performance web systems, custom e-commerce engines, and full-stack architecture, I turn complex challenges into simple, beautiful solutions.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#work" className="btn-glass btn-cyan-glow">
                <span>View My Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="/Zeeshan_CV.pdf"
                download="Muhammad_Zeeshan_Yousaf_CV.pdf"
                className="btn-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <Download size={15} style={{ color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

          {/* Right Column: Glowing Workstation Illustration (Matching Reference Image) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient backlight glow */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            {/* Vector Illustration matching developer on beanbag/laptop with lamp */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '1/1',
              }}
            >
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))' }}
              >
                {/* Overhead Lamp */}
                <path d="M310 0V80M290 80H330L340 105H280L290 80Z" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M310 105L260 210M310 105L360 210" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <circle cx="310" cy="115" r="8" fill="#38bdf8" opacity="0.6" />

                {/* Top Shelf with Books and Plant */}
                <path d="M380 90H450" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="390" y="60" width="8" height="30" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.1)" />
                <rect x="402" y="55" width="10" height="35" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.1)" />
                {/* Potted Plant */}
                <path d="M425 75H445L441 90H429L425 75Z" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.2)" />
                <path d="M435 75C435 60 425 50 422 45C432 50 436 65 435 75Z" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" opacity="0.5" />
                <path d="M437 75C440 60 450 52 452 48C445 54 440 65 437 75Z" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" opacity="0.5" />

                {/* Beanbag Chair */}
                <path
                  d="M200 420C170 410 160 380 180 340C200 300 240 280 270 270C310 260 350 290 370 330C390 370 380 410 330 430C280 445 230 430 200 420Z"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  fill="rgba(14, 21, 35, 0.85)"
                />
                <path d="M220 380C260 410 300 405 340 375" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />

                {/* Developer Character */}
                {/* Head */}
                <circle cx="285" cy="220" r="22" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(14, 21, 35, 0.9)" />
                {/* Hair */}
                <path d="M265 215C268 200 280 195 295 198C308 200 310 215 305 220" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                {/* Glasses */}
                <rect x="272" y="215" width="10" height="8" rx="2" stroke="#38bdf8" strokeWidth="2" />
                <rect x="286" y="215" width="10" height="8" rx="2" stroke="#38bdf8" strokeWidth="2" />
                <path d="M282 219H286" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Smile */}
                <path d="M280 232C284 235 288 235 292 232" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

                {/* Body & Hoodie */}
                <path d="M265 242C250 255 240 280 245 320L315 320C325 280 315 255 305 242" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(14, 21, 35, 0.9)" />

                {/* Laptop & Screen Glow */}
                <path d="M205 300L250 300L255 305H200L205 300Z" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" />
                <path d="M205 300L190 250H235L245 300" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(10, 15, 26, 0.95)" />
                {/* Screen Logo / Code lines */}
                <circle cx="215" cy="275" r="4" fill="#38bdf8" />
                <path d="M198 260H228M198 266H220" stroke="#38bdf8" strokeWidth="1" opacity="0.7" />

                {/* Hands on Laptop */}
                <path d="M270 280C250 285 240 295 230 300" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M285 280C270 285 255 295 245 300" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

                {/* Legs relaxed on footstool */}
                <path d="M245 320L220 370L170 380L160 400" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M280 320L260 370L220 390L210 410" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Sneakers */}
                <path d="M155 400H185C185 408 175 410 155 410V400Z" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.2)" />
                <path d="M205 410H235C235 418 225 420 205 420V410Z" stroke="#38bdf8" strokeWidth="2" fill="rgba(56,189,248,0.2)" />

                {/* Floating ambient particles */}
                <circle cx="150" cy="210" r="2" fill="#38bdf8" opacity="0.6" />
                <circle cx="360" cy="180" r="3" fill="#38bdf8" opacity="0.8" />
                <circle cx="410" cy="260" r="2" fill="#38bdf8" opacity="0.5" />
                <circle cx="170" cy="320" r="1.5" fill="#38bdf8" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
