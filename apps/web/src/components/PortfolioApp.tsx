'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Background } from './layout/Background';
import { Nav } from './layout/Nav';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Process } from './sections/Process';
import { Experience } from './sections/Experience';
import { AwardsSection } from './sections/AwardsSection';
import { FaqSection } from './sections/FaqSection';
import { Contact } from './sections/Contact';

export function PortfolioApp() {
  return (
    <ThemeProvider initialTheme="minimal">
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen w-full overflow-x-clip bg-bg font-sans text-fg antialiased">
          <Background />
          <Nav />
          <main className="relative">
            <Hero />
            <Skills />
            <Projects />
            <Process />
            <Experience />
            <AwardsSection />
            <FaqSection />
            <Contact />
          </main>
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
