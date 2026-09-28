'use client';

import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function Background() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const auroraA = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '-40%']);
  const auroraB = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '30%']);
  const gridY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -240]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: gridY }}
        className="grid-pattern absolute inset-x-0 -top-[10%] h-[130%] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_80%)]"
      />
      
      <motion.div style={{ y: auroraA }} className="absolute -left-[15%] -top-[25%] h-[80vh] w-[75vw]">
        <div className="aurora-a animate-drift h-full w-full" />
      </motion.div>
      <motion.div style={{ y: auroraB }} className="absolute -right-[20%] top-[35%] h-[90vh] w-[70vw]">
        <div className="aurora-b animate-drift-reverse h-full w-full" />
      </motion.div>
      <div className="scanlines absolute inset-0" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
