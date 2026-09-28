'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export function MagneticButton({ href, children, variant = 'primary', className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 260, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === 'primary'
      ? 'border border-transparent bg-accent text-bg glow hover:bg-accent/90'
      : 'glass text-fg hover:border-accent/60 hover:text-accent';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12 }}
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-theme px-6 py-3.5 text-sm font-medium transition-[background-color,border-color,color] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
