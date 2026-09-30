'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  size?: 'featured' | 'wide' | 'default';
  onOpen: () => void;
}

export function ProjectCard({ project, size = 'default', onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const featured = size === 'featured';

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      aria-label={`Open ${project.title} project details`}
      className="group relative flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-theme-lg border border-line bg-surface text-left transition-[border-color,box-shadow] duration-200 ease-out hover:border-accent/40 hover:shadow-[var(--glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-[transform,opacity] duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/20" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
        style={{
          background: 'radial-gradient(420px circle at var(--mx) var(--my), rgb(var(--c-accent) / 0.16), transparent 60%)',
        }}
      />

      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            <span className="text-accent font-semibold">{project.year}</span> · {project.category}
          </p>
          <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-fg transition-[transform,color] duration-200 ease-out group-hover:rotate-45 group-hover:text-accent">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-auto pt-8">
          <h3 className={`display leading-tight text-fg line-clamp-3 ${featured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
            {project.title}
          </h3>
          <p className={`mt-3 leading-relaxed text-muted line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
            {project.summary}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <p className="mt-4 flex items-baseline gap-2.5">
              <span className="display text-2xl font-semibold text-accent">{project.metrics[0].value}</span>
              <span className="text-xs text-muted">{project.metrics[0].label}</span>
            </p>
          )}

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.slice(0, featured ? 5 : 3).map((t) => (
              <li key={t} className="rounded-theme-sm border border-line bg-bg/50 px-2.5 py-1 font-mono text-[11px] text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.button>
  );
}
