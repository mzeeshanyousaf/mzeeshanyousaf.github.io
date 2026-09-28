'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { alsoFluent, skillAreas } from '../../data/skills';

const ease = [0.23, 1, 0.32, 1] as const;

export function Skills() {
  const [activeId, setActiveId] = useState(skillAreas[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = skillAreas.find((a) => a.id === activeId) ?? skillAreas[0];

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const next = ['ArrowDown', 'ArrowRight'].includes(e.key)
      ? (index + 1) % skillAreas.length
      : ['ArrowUp', 'ArrowLeft'].includes(e.key)
      ? (index - 1 + skillAreas.length) % skillAreas.length
      : null;
    if (next === null) return;
    e.preventDefault();
    setActiveId(skillAreas[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading
        id="about-heading"
        eyebrow="// expertise & skills"
        title={
          <>
            Architectural depth,
            <br />
            codebase reliability.
          </>
        }
        description="4+ years across agencies, startups, and high-concurrency SaaS. I specialize in the hard parts: update-safe custom plugins, deep API synchronizations, database query tuning, and headless CMS architectures."
      />

      <Reveal className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Areas of expertise"
          aria-orientation="vertical"
          className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {skillAreas.map((a, i) => {
            const selected = a.id === activeId;
            return (
              <button
                key={a.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${a.id}`}
                aria-selected={selected}
                aria-controls="skills-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(a.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="relative shrink-0 rounded-theme px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:w-full"
              >
                {selected && (
                  <motion.span
                    layoutId="skill-active"
                    className="glass glow-soft absolute inset-0 rounded-theme"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative flex items-center justify-between gap-6">
                  <span
                    className={`whitespace-nowrap font-medium transition-colors duration-150 ease-out ${
                      selected ? 'text-fg font-semibold' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {a.label}
                  </span>
                  <span className={`font-mono text-xs ${selected ? 'text-accent' : 'text-muted'}`}>
                    {a.years} yrs
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="glass hud relative min-h-[380px] overflow-hidden rounded-theme-lg p-7 sm:p-10 lg:col-span-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease }}
            >
              <h3 className="display text-3xl text-fg sm:text-4xl">{active.label}</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{active.summary}</p>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                {active.tools.map((t, i) => (
                  <li key={t.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="text-fg font-medium">{t.name}</span>
                      <span className="font-mono text-xs text-muted">{levelLabel(t.level)}</span>
                    </div>
                    <div className="relative mt-2.5 h-[3px] overflow-hidden rounded-full bg-line">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: t.level / 100 }}
                        transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease }}
                        className="absolute inset-0 origin-left bg-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" delay={0.05}>
        <p className="shrink-0 font-mono text-xs text-muted uppercase tracking-wider">Also fluent in</p>
        <ul className="flex flex-wrap gap-2">
          {alsoFluent.map((t) => (
            <li
              key={t}
              className="rounded-theme-sm border border-line bg-surface/40 px-3 py-1.5 text-sm text-muted transition-colors duration-150 ease-out hover:border-accent/50 hover:text-fg"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function levelLabel(level: number) {
  if (level >= 95) return 'Master';
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  return 'Proficient';
}
