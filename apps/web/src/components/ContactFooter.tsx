'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const email = 'chzeeshanyousaf343@gmail.com';
  const phone = '+92 303 6982 787';
  const location = 'Lahore, Punjab, Pakistan';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setSent(true);
  };

  return (
    <footer id="contact" className="section" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        {/* Main Glass Contact Banner matching Reference Image */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          {/* Left Title */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Let&apos;s build something <br />
              meaningful <span style={{ color: 'var(--neon-cyan)', borderBottom: '2px solid var(--neon-cyan)' }}>together.</span>
            </h2>

            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="btn-glass btn-cyan-glow"
              style={{ marginTop: '0.5rem' }}
            >
              <span>{modalOpen ? 'Close Message Box' : 'Send Quick Inquiry'}</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Center Details from Resume */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div
              onClick={copyEmail}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            >
              <Mail size={16} style={{ color: 'var(--neon-cyan)' }} />
              <span>{email}</span>
              {copied ? <Check size={14} style={{ color: 'var(--neon-emerald)' }} /> : <Copy size={13} style={{ color: 'var(--text-dim)' }} />}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
              }}
            >
              <Phone size={16} style={{ color: 'var(--neon-cyan)' }} />
              <span>{phone}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
              }}
            >
              <MapPin size={16} style={{ color: 'var(--neon-cyan)' }} />
              <span>{location}</span>
            </div>
          </div>

          {/* Right Social Connect Buttons matching reference */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Let&apos;s Connect
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/mzeeshanyousaf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/devzeeshanyousaf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email Me"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Modal / Quick Message Box */}
        {modalOpen && (
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              marginBottom: '3rem',
              maxWidth: '650px',
              margin: '0 auto 3rem auto',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <Check size={28} style={{ color: 'var(--neon-emerald)', margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ color: '#ffffff', marginBottom: '0.25rem' }}>Message Received!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Thank you. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Project details or message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
                <button type="submit" className="btn-glass btn-cyan-glow" style={{ alignSelf: 'flex-start' }}>
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        )}

        {/* Bottom Copyright matching reference image */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-code)',
          }}
        >
          © {new Date().getFullYear()} Muhammad Zeeshan Yousaf. All rights reserved. 💙
        </div>
      </div>
    </footer>
  );
}
