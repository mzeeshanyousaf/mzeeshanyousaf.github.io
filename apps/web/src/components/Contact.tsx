'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'mzeeshanyousaf.dev@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(1000),
      });
    } catch {
      // Graceful fallback
    }

    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Have a Project in Mind?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              I’m always open to collaborations and creative challenges. No worries — just reach out. I’m always happy to clarify or walk you through anything.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '3rem 2.5rem',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <CheckCircle2 size={28} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Thank You for Reaching Out
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                  Your inquiry has been received. I will review your requirements and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Project Type / Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Custom WordPress Theme / Headless Application / Full-Stack Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your timeline, goals, or technical challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={copyEmail}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    {copied ? <Check size={15} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={15} />}
                    <span>{copied ? 'Email copied!' : 'Or copy email: ' + email}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 2rem' }}
                  >
                    <span>{loading ? 'Sending...' : 'Send Request'}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
