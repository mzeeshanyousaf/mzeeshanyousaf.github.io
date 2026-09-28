'use client';

import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, GithubIcon, XIcon } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ease = [0.23, 1, 0.32, 1] as const;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
            className="glass hud relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-theme-lg sm:rounded-theme-lg shadow-2xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-surface sm:aspect-[16/8]">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" aria-hidden="true" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="glass absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-muted">
                  <span className="text-accent font-semibold">{project.year}</span> · {project.category} · {project.role}
                </p>
                <h2 id="project-modal-title" className="display mt-4 text-3xl leading-snug text-fg sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>

                <h3 className="mt-10 font-mono text-xs text-accent uppercase tracking-wider">// The Challenge</h3>
                <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>

                <h3 className="mt-8 font-mono text-xs text-accent uppercase tracking-wider">// Engineering Solution & Deliverables</h3>
                <p className="mt-3 border-l-2 border-accent pl-4 leading-relaxed text-fg">{project.outcome}</p>
              </div>

              <aside className="flex flex-col gap-8 border-t border-line pt-8 md:border-t-0 md:pt-0">
                <dl className="space-y-5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="display text-3xl font-semibold text-fg">{m.value}</dd>
                      <dd className="mt-1 text-xs text-muted">{m.label}</dd>
                    </div>
                  ))}
                </dl>
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-wider">Tech Stack</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <li key={t} className="rounded-theme-sm border border-line bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-fg">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex flex-col gap-2.5">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-theme bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors duration-150 ease-out hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      Visit Live System <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-theme border border-line px-5 py-3 text-sm text-fg transition-colors duration-150 ease-out hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <GithubIcon className="h-4 w-4" /> View GitHub Profile
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
