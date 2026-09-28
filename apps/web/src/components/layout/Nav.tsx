'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, SparklesIcon, XIcon } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useThemeSwitcher } from '../../contexts/ThemeContext';
import type { ThemeVariant } from '../../types/portfolio';

const links = [
  { id: 'about', label: 'About & Skills' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards', label: 'Credentials' },
  { id: 'faq', label: 'FAQ' },
];

const themes: { id: ThemeVariant; label: string }[] = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'cybernetic', label: 'Cybernetic' },
  { id: 'glass', label: 'Glass' },
  { id: 'editorial', label: 'Editorial' },
];

const ids = links.map((l) => l.id).concat('contact');

export function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useThemeSwitcher();

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-theme-lg pl-4 pr-2"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-theme-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="glow-soft flex h-8 w-8 items-center justify-center rounded-theme-sm border border-accent/40 font-mono text-[12px] font-bold text-accent">
            ZY
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-fg">M. Zeeshan Yousaf</span>
            <span className="hidden font-mono text-[10px] text-muted sm:inline-block">Senior WordPress & PHP Engineer</span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-theme-sm px-3 py-2 text-sm transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? 'text-fg font-medium' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-theme-sm bg-fg/[0.08]"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Interactive Theme Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setThemeMenuOpen((prev) => !prev)}
              title="Switch Visual Theme"
              className="glass flex h-9 items-center gap-1.5 rounded-theme-sm px-2.5 font-mono text-xs text-muted hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <SparklesIcon className="h-3.5 w-3.5 text-accent" />
              <span className="capitalize">{theme}</span>
            </button>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  className="glass absolute right-0 mt-2 w-36 overflow-hidden rounded-theme p-1 shadow-2xl backdrop-blur-xl"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTheme(t.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-theme-sm px-3 py-1.5 text-left text-xs transition-colors ${
                        theme === t.id
                          ? 'bg-accent/15 font-medium text-accent'
                          : 'text-muted hover:bg-fg/[0.06] hover:text-fg'
                      }`}
                    >
                      <span>{t.label}</span>
                      {theme === t.id && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-theme bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 ease-out hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:inline-flex"
          >
            Let’s talk
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-theme text-fg transition-colors duration-150 ease-out hover:bg-fg/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="glass mx-auto mt-2 max-w-6xl rounded-theme-lg p-3 md:hidden"
          >
            <ul className="space-y-1">
              {links.concat({ id: 'contact', label: 'Contact' }).map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-theme px-4 py-2.5 text-base transition-colors duration-150 ease-out hover:bg-fg/[0.07] ${
                      active === l.id ? 'text-accent font-medium' : 'text-fg'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
