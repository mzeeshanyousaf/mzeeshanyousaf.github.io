'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpIcon, CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Reveal } from '../ui/Reveal';

const EMAIL = 'chzeeshanyousaf343@gmail.com';
const PHONE = '+92 303 6982 787';

const socials = [
  { label: 'GitHub', href: 'https://github.com/mzeeshanyousaf', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/devzeeshanyousaf', icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: MailIcon },
];

const details = [
  { label: 'Direct Response', value: 'Within 24 Hours' },
  { label: 'Current Location', value: 'Lahore, Pakistan · UTC+5' },
  { label: 'Work Mode', value: 'Remote / Hybrid / On-site' },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['40%', '0%']);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-heading" className="relative overflow-hidden pb-10 pt-28 lg:pt-40">
      <motion.div
        style={{ y: glowY, x: '-50%' }}
        aria-hidden="true"
        className="aurora-a pointer-events-none absolute left-1/2 top-1/4 h-[70vh] w-[90vw]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="glass hud grid grid-cols-1 gap-14 rounded-theme-lg p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="flex flex-col lg:col-span-6">
              <p className="flex items-center gap-3 font-mono text-xs text-accent">
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                {'// initialize communication'}
              </p>
              <h2 id="contact-heading" className="display mt-6 text-4xl leading-[1.02] text-fg sm:text-5xl lg:text-6xl">
                Have a <span className="text-gradient">mission-critical</span> project or role?
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Whether you need a Senior WordPress Engineer, a custom PHP plugin architect, or a team lead for scalable web integrations — let’s build together.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-medium text-fg underline decoration-line decoration-1 underline-offset-8 transition-colors duration-150 ease-out hover:decoration-accent focus:outline-none focus-visible:decoration-accent sm:text-2xl"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    aria-label={copied ? 'Email copied' : 'Copy email address'}
                    className="flex h-9 w-9 items-center justify-center rounded-theme-sm border border-line text-muted transition-colors duration-150 ease-out hover:border-accent/60 hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {copied ? <CheckIcon className="h-4 w-4 text-accent" /> : <CopyIcon className="h-4 w-4" />}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copied ? 'Email copied to clipboard' : ''}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <PhoneIcon className="h-3.5 w-3.5 text-accent" />
                  <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="hover:text-fg transition-colors">
                    {PHONE}
                  </a>
                  <span className="text-line">|</span>
                  <span>Skype: <span className="text-fg">zaki@teamento.com</span></span>
                </div>
              </div>

              <dl className="mt-10 grid grid-cols-1 gap-5 border-t border-line pt-8 sm:grid-cols-3 lg:mt-auto">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="font-mono text-[11px] text-muted uppercase tracking-wider">{d.label}</dt>
                    <dd className="mt-1.5 text-xs text-fg font-medium">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6 lg:border-l lg:border-line lg:pl-12">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <footer className="mt-14 flex flex-col-reverse gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Muhammad Zeeshan Yousaf · Senior Software Engineer
          </p>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#top"
              aria-label="Back to top"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
