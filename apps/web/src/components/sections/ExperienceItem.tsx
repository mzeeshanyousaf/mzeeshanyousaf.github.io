'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { Experience } from '../../types/portfolio';

interface ExperienceItemProps {
  job: Experience;
  index: number;
}

const ease = [0.23, 1, 0.32, 1] as const;

export function ExperienceItem({ job, index }: ExperienceItemProps) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `resp-${index}`;

  return (
    <li className="relative grid grid-cols-1 gap-4 pl-10 md:grid-cols-12 md:gap-10 md:pl-0">
      <span
        aria-hidden="true"
        className={`absolute left-[3px] top-2 h-[9px] w-[9px] rounded-full border md:left-[calc(25%-4px)] ${
          job.current ? 'glow border-accent bg-accent' : 'border-muted bg-bg'
        }`}
      />

      <div className="md:col-span-3 md:pr-10">
        <p className="font-mono text-sm font-semibold text-fg">{job.period}</p>
        <p className="mt-1 text-sm text-muted">{job.location}</p>
        {job.current && (
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Current Role
          </p>
        )}
      </div>

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.3, ease }}
        className="glass rounded-theme-lg p-6 sm:p-8 md:col-span-9"
      >
        <h3 className="display text-2xl text-fg sm:text-3xl">{job.role}</h3>
        <p className="mt-1 font-mono text-sm text-accent">{job.company}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">{job.summary}</p>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
          {job.achievements.map((a) => (
            <div key={a.label}>
              <dt className="sr-only">{a.label}</dt>
              <dd className="display text-3xl font-semibold text-fg">{a.value}</dd>
              <dd className="mt-1 text-xs text-muted">{a.label}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-8 inline-flex items-center gap-2 rounded-theme-sm text-sm font-medium text-fg transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {open ? 'Hide detailed achievements' : 'Show detailed achievements'}
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-200 ease-out ${open ? 'rotate-180 text-accent' : ''}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed text-muted text-sm">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
                {job.stack.map((s) => (
                  <li key={s} className="rounded-theme-sm border border-line bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </li>
  );
}
