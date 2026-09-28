'use client';

import React from 'react';
import { AwardIcon, GraduationCapIcon, ShieldCheckIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { awardsList, educationList } from '../../data/experience';

export function AwardsSection() {
  return (
    <section id="awards" aria-labelledby="awards-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <SectionHeading
        id="awards-heading"
        eyebrow="// credentials & recognition"
        title={
          <>
            Accredited knowledge,
            <br />
            industry recognition.
          </>
        }
        description="Formal academic degrees in computer science paired with verified technical certifications and performance honors awarded across engineering tenures."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Academic Degrees */}
        <div className="lg:col-span-5">
          <p className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-6">
            <GraduationCapIcon className="h-4 w-4" />
            Academic Foundations
          </p>

          <div className="space-y-5">
            {educationList.map((edu, idx) => (
              <Reveal key={edu.degree} delay={idx * 0.08}>
                <div className="glass hud rounded-theme-lg p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-accent font-semibold">{edu.period}</span>
                    {edu.grade && (
                      <span className="rounded-theme-sm border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="display mt-3 text-xl font-medium text-fg sm:text-2xl">{edu.degree}</h3>
                  <p className="mt-2 text-sm text-muted">{edu.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted/80">{edu.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="lg:col-span-7">
          <p className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-6">
            <AwardIcon className="h-4 w-4" />
            Honors & Industry Certifications
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {awardsList.map((award, idx) => (
              <Reveal key={award.title} delay={idx * 0.06}>
                <div className="glass hud flex h-full flex-col rounded-theme-lg p-6 transition-all duration-200 hover:border-accent/40">
                  <div className="flex items-start justify-between gap-3">
                    <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-theme-sm text-accent">
                      <ShieldCheckIcon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs text-muted">{award.date}</span>
                  </div>

                  <h3 className="display mt-4 text-lg font-semibold leading-snug text-fg">{award.title}</h3>
                  <p className="mt-1 font-mono text-xs text-accent">{award.organization}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{award.description}</p>

                  {award.credentialId && (
                    <div className="mt-auto pt-4 border-t border-line/60">
                      <p className="font-mono text-[10px] text-muted">
                        Credential ID: <span className="text-fg">{award.credentialId}</span>
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
