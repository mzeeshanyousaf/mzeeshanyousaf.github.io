'use client';

import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  layout?: 'split' | 'stacked';
}

export function SectionHeading({ id, eyebrow, title, description, layout = 'split' }: SectionHeadingProps) {
  const split = layout === 'split';
  return (
    <Reveal
      className={
        split ? 'grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10' : 'flex flex-col'
      }
    >
      <div className={split ? 'lg:col-span-7' : ''}>
        <p className="flex items-center gap-3 font-mono text-xs text-accent">
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="display mt-6 text-4xl leading-[1.02] text-fg sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-md text-base leading-relaxed text-muted ${
            split ? 'lg:col-span-5 lg:justify-self-end' : 'mt-6'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
