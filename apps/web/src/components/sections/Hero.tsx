'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRightIcon, ArrowUpRightIcon, DownloadIcon } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { MagneticButton } from '../ui/MagneticButton';
import { useTheme } from '../../contexts/ThemeContext';

const ease = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
};

export function Hero() {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -140]);
  const visualY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const ctas = (
    <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
      <MagneticButton href="#work">
        View selected work
        <ArrowDownRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </MagneticButton>
      <MagneticButton href="#contact" variant="ghost">
        Get in touch
        <ArrowUpRightIcon className="h-4 w-4" />
      </MagneticButton>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex items-center gap-2 rounded-theme px-5 py-3.5 text-sm font-medium text-muted hover:border-accent/60 hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <DownloadIcon className="h-4 w-4 text-accent" />
        Résumé (PDF)
      </a>
    </motion.div>
  );

  if (theme === 'editorial') {
    return (
      <section id="top" ref={ref} className="relative overflow-hidden pb-24 pt-36 lg:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-7xl px-6 lg:px-10"
        >
          <motion.div style={{ y: textY, opacity: fade }}>
            <motion.h1 variants={item} className="display text-[14vw] leading-[0.88] text-fg lg:text-[9.5vw]">
              Zeeshan
              <br />
              <span className="pl-[8vw] italic text-gradient">Yousaf</span>
            </motion.h1>
          </motion.div>
          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <motion.div variants={item} className="order-2 lg:order-1 lg:col-span-6 lg:pt-10">
              <p className="max-w-xl text-xl leading-relaxed text-muted">
                I engineer scalable, high-performance platforms across WordPress and Shopify. Specializing in VIP-standard OOP plugins, lean Liquid storefronts, and fault-tolerant API integrations designed for enterprise reliability.
              </p>
              {ctas}
            </motion.div>
            <motion.div style={{ y: visualY }} className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:-mt-64">
              <HeroVisual />
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY, opacity: fade }}
          className="order-2 lg:order-1 lg:col-span-7"
        >
          <motion.h1
            variants={item}
            className="display text-4xl leading-[1.05] text-fg sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Engineering <span className="text-gradient">high-performance</span> web systems.
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I’m <span className="text-fg font-semibold">Muhammad Zeeshan Yousaf</span> — a Senior Software Engineer specializing in custom OOP PHP plugins, commercial theme architecture, Shopify Liquid development, and robust API integrations. I build scalable, secure platforms engineered for speed, reliability, and zero downtime.
          </motion.p>
          {ctas}
          <motion.p variants={item} className="mt-12 font-mono text-xs text-muted">
            Currently <span className="text-fg font-medium">SSE – WordPress Engineer @ Amentotech</span>
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.15, ease }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
