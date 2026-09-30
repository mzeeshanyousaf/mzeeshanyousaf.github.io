'use client';

import React from 'react';
import { ArrowDownToLineIcon } from 'lucide-react';
import { ExperienceItem } from './ExperienceItem';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { education, experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading
        id="experience-heading"
        eyebrow="// career history"
        title={
          <>
            Four years,
            <br />
            enterprise impact.
          </>
        }
        description="From architecting update-safe commercial WordPress themes and enterprise plugins to engineering custom Shopify Liquid storefronts and resilient API pipelines—building high-throughput digital systems for global clients."
      />

      <ol className="relative mt-16 space-y-10">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent md:left-[25%]"
        />

        {experience.map((job, i) => (
          <ExperienceItem key={job.company} job={job} index={i} />
        ))}
      </ol>

      <Reveal className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 border-t border-line pt-12">
        <div className="md:col-span-3">
          <p className="font-mono text-sm font-semibold text-fg">{education.period}</p>
          <p className="mt-1 text-sm text-muted">Education · {education.grade}</p>
        </div>
        <div className="flex flex-col gap-8 md:col-span-9 pl-6 md:pl-0">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xl font-medium text-fg">{education.degree}</p>
              <p className="mt-1 text-muted text-sm">{education.school} · {education.location}</p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-theme border border-line bg-surface/40 px-5 py-3 text-sm font-medium text-fg transition-colors duration-150 ease-out hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ArrowDownToLineIcon className="h-4 w-4 text-accent" aria-hidden="true" />
              Download résumé (PDF)
            </a>
          </div>

          {education.focus && (
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Focus</p>
              <p className="text-sm text-fg leading-relaxed">{education.focus}</p>
            </div>
          )}

          {education.honors && (
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Key Honors</p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {education.honors.map((honor) => (
                  <li key={honor.title} className="rounded-theme-sm border border-line bg-surface/30 p-4 transition-colors hover:border-accent/40">
                    <p className="text-sm font-medium text-fg">{honor.title}</p>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">{honor.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
