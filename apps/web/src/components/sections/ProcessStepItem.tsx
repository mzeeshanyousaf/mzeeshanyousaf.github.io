'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ProcessStep } from '../../types/portfolio';

interface ProcessStepItemProps {
  step: ProcessStep;
  index: number;
}

export function ProcessStepItem({ step, index }: ProcessStepItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  return (
    <li ref={ref} className="relative pb-14 pl-16 last:pb-0 sm:pl-20">
      <span
        className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs transition-[color,border-color,background-color,box-shadow] duration-200 ease-out ${
          inView ? 'glow border-accent bg-bg text-accent font-bold' : 'border-line bg-bg text-muted'
        }`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className={`display text-2xl transition-colors duration-200 ease-out sm:text-3xl ${inView ? 'text-fg' : 'text-fg/70'}`}>
            {step.title}
          </h3>
          <span className="font-mono text-xs text-muted">{step.duration}</span>
        </div>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{step.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Deliverables">
          {step.deliverables.map((d) => (
            <li key={d} className="rounded-theme-sm border border-line bg-surface/30 px-2.5 py-1 font-mono text-[11px] text-muted">
              {d}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
}
