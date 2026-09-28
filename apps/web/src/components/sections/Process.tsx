'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ProcessStepItem } from './ProcessStepItem';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { processSteps } from '../../data/process';

const principles = [
  { label: 'Engineering Standards', value: 'WordPress VIP & PSR-4' },
  { label: 'Development Cadence', value: 'Weekly Staging Demos' },
  { label: 'Communication Style', value: 'Async-first & Documented' },
  { label: 'Security & Quality', value: 'OWASP & Zero SQLi' },
];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] });

  return (
    <section id="process" aria-labelledby="process-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="process-heading"
              layout="stacked"
              eyebrow="// engineering process"
              title={
                <>
                  Disciplined delivery,
                  <br />
                  predictable execution.
                </>
              }
              description="A battle-tested 6-step engineering methodology that eliminates surprises. Every milestone is validated on staging with automated regression checks and clear progress logs."
            />

            <Reveal delay={0.05}>
              <dl className="glass hud mt-10 divide-y divide-line rounded-theme-lg">
                {principles.map((p) => (
                  <div key={p.label} className="flex items-center justify-between gap-6 px-6 py-4">
                    <dt className="text-sm text-muted">{p.label}</dt>
                    <dd className="font-mono text-sm text-fg">{p.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute bottom-2 left-[17.5px] top-2 w-px bg-line" aria-hidden="true" />
          <motion.span
            style={{ scaleY: scrollYProgress }}
            className="glow absolute bottom-2 left-[17.5px] top-2 w-px origin-top bg-accent"
            aria-hidden="true"
          />

          {processSteps.map((s, i) => (
            <ProcessStepItem key={s.title} step={s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
