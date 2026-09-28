'use client';

import React from 'react';
import { Award, GraduationCap, Trophy, BookmarkCheck } from 'lucide-react';

export default function Awards() {
  const items = [
    {
      icon: <GraduationCap size={20} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'Master’s Degree in Computer Science',
      institution: 'The Islamia University of Bahawalpur',
      detail: 'GPA: 3.56 · Advanced Software Architecture, Data Structures & Algorithms',
    },
    {
      icon: <GraduationCap size={20} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'Bachelor of Science in Computer Science',
      institution: 'The Islamia University of Bahawalpur',
      detail: 'Core Computer Science, Object-Oriented Programming (OOP) & Database Systems',
    },
    {
      icon: <Trophy size={20} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'Employee of the Month (November 2023)',
      institution: 'Webbuggs',
      detail: 'Recognized for outstanding dedication, technical excellence, and company growth contributions',
    },
    {
      icon: <Award size={20} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'Outstanding Research Poster Award',
      institution: 'Academic Research Presentation',
      detail: 'Recognized at IUB for technical research presentation on "Age and Gender Recognition"',
    },
    {
      icon: <BookmarkCheck size={20} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'Professional Freelancing & Business Management',
      institution: 'DigiSkills.pk (Credential ID: 6EYHTCDPQ)',
      detail: 'Professional client management, project delivery frameworks, and agile workflows',
    },
  ];

  return (
    <section id="awards" className="section">
      <div className="container">
        <h2 className="section-heading-clean">
          <span>Education &amp; Recognitions</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {item.institution}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
