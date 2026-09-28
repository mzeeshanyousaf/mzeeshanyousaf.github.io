'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Mascot } from 'page-mascot';
import { useTheme } from '../../contexts/ThemeContext';

const ticks = Array.from({ length: 72 }, (_, i) => i);

export function HeroVisual() {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });

  const ringX = useTransform(sx, (v) => v * -14);
  const ringY = useTransform(sy, (v) => v * -14);
  const coreX = useTransform(sx, (v) => v * 6);
  const coreY = useTransform(sy, (v) => v * 6);
  const chipX = useTransform(sx, (v) => v * 22);
  const chipY = useTransform(sy, (v) => v * 22);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce, mx, my]);

  if (theme === 'editorial') {
    return (
      <figure className="relative">
        <motion.div style={{ x: coreX, y: coreY }} className="relative flex items-center justify-center aspect-[4/5] overflow-hidden rounded-theme">
          <div className="relative z-10">
            <Mascot
              directions="/mascots/zeeshan-directions.png"
              reactions="/mascots/zeeshan-directions.png"
              size={220}
              label="Zeeshan's mascot"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/10" aria-hidden="true" />
        </motion.div>
        <motion.figcaption
          style={{ x: chipX, y: chipY }}
          className="glass absolute -bottom-6 -left-6 rounded-theme px-4 py-3 font-mono text-[11px] text-muted"
        >
          <span className="text-accent">Fig. 01</span> — Lahore · SSE Engineer
        </motion.figcaption>
      </figure>
    );
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.svg
        style={{ x: ringX, y: ringY }}
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-accent"
        aria-hidden="true"
      >
        <g className="animate-spin-slow" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="200" r="192" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeDasharray="2 7" />
          <circle cx="200" cy="8" r="3.5" fill="currentColor" />
        </g>
        <g opacity="0.35">
          {ticks.map((i) => {
            const a = (i / ticks.length) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = long ? 166 : 171;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * r1}
                y1={200 + Math.sin(a) * r1}
                x2={200 + Math.cos(a) * 176}
                y2={200 + Math.sin(a) * 176}
                stroke="currentColor"
                strokeWidth={long ? 1.2 : 0.6}
              />
            );
          })}
        </g>
        <g className="animate-spin-slower" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="200" r="152" fill="none" stroke="currentColor" strokeOpacity="0.14" />
          <path
            d="M 200 48 A 152 152 0 0 1 352 200"
            fill="none"
            stroke="rgb(var(--c-accent2))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </motion.svg>

      {/* Mascot replaces the portrait photo */}
      <motion.div
        style={{ x: coreX, y: coreY }}
        className="glow absolute inset-[19%] flex items-center justify-center overflow-hidden rounded-full border border-line"
      >
        <div className="relative z-10">
          <Mascot
            directions="/mascots/zeeshan-directions.png"
            reactions="/mascots/zeeshan-directions.png"
            size={220}
            label="Zeeshan's mascot"
          />
        </div>
        <div className="absolute inset-0 bg-accent/5 mix-blend-color" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" aria-hidden="true" />
      </motion.div>

      <motion.div style={{ x: chipX, y: chipY }} className="absolute inset-0" aria-hidden="true">
        <div className="glass absolute left-0 top-[12%] flex items-center gap-2 rounded-theme-sm px-3 py-2 font-mono text-[11px] text-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          STATUS // AVAILABLE
        </div>
        <div className="glass absolute right-0 top-[46%] rounded-theme-sm px-3 py-2 font-mono text-[11px] text-muted">
          EXPERIENCE <span className="text-fg">4+ YRS</span>
        </div>
        <div className="glass absolute bottom-[8%] left-[6%] rounded-theme-sm px-3 py-2 font-mono text-[11px] text-muted">
          31.52°N 74.35°E · <span className="text-fg">Lahore, PK</span>
        </div>
      </motion.div>
    </div>
  );
}
