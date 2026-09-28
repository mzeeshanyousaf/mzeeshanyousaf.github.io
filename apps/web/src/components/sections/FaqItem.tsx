'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import type { Faq } from '../../types/portfolio';

interface FaqItemProps {
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function FaqItem({ faq, index, open, onToggle }: FaqItemProps) {
  const id = `faq-${index}`;
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        >
          <span
            className={`text-lg transition-colors duration-150 ease-out sm:text-xl ${
              open ? 'text-fg font-medium' : 'text-fg/80 group-hover:text-fg'
            }`}
          >
            {faq.question}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,border-color,color] duration-200 ease-out ${
              open ? 'rotate-45 border-accent text-accent' : 'border-line text-muted group-hover:border-fg/40'
            }`}
            aria-hidden="true"
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
