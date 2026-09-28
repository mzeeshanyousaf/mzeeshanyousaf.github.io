'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { projects } from '../../data/projects';
import type { Project } from '../../types/portfolio';

const categories = ['All', 'Plugins & APIs', 'Themes & Frontend', 'Migrations & Systems'];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  const close = useCallback(() => setSelected(null), []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="work" aria-labelledby="work-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading
        id="work-heading"
        eyebrow="// selected work"
        title={
          <>
            Engineered to scale,
            <br />
            built to last.
          </>
        }
        description="A curated catalog of 12 enterprise applications, bespoke plugins, API synchronizations, and migrations. Click any project for the architectural challenge, code outcome, and measurable metrics."
      />

      {/* Category Filter Pills */}
      <Reveal className="mt-10 flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const active = filter === cat;
          const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-theme-sm border px-3.5 py-1.5 font-mono text-xs transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                active
                  ? 'border-accent bg-accent/15 text-accent font-medium'
                  : 'border-line text-muted hover:border-fg/30 hover:text-fg'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-[360px] lg:grid-cols-3">
        {filteredProjects.map((p, i) => {
          // Dynamic bento sizing for visual rhythm
          let size: 'featured' | 'wide' | 'default' = 'default';
          let className = '';

          if (filter === 'All') {
            if (i === 0) {
              size = 'featured';
              className = 'md:col-span-2 lg:row-span-2';
            } else if (i === 3) {
              size = 'wide';
              className = 'md:col-span-2 lg:col-span-2';
            } else if (i === 7) {
              size = 'wide';
              className = 'md:col-span-2 lg:col-span-3';
            } else if (i === 9) {
              size = 'featured';
              className = 'md:col-span-2 lg:row-span-2';
            }
          }

          return (
            <Reveal key={p.slug} delay={(i % 4) * 0.05} className={className}>
              <ProjectCard project={p} size={size} onOpen={() => setSelected(p)} />
            </Reveal>
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
