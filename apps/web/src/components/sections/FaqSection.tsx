'use client';

import React, { useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { FaqItem } from './FaqItem';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { faqs } from '../../data/faqs';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="faq-heading"
              layout="stacked"
              eyebrow="// questions & answers"
              title="Technical insights."
              description="Common questions about WordPress VIP standards, API integrations, and software collaboration."
            />

            <Reveal delay={0.05}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent"
              >
                Have a different question? Email me directly
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-line">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.question}
                faq={f}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
