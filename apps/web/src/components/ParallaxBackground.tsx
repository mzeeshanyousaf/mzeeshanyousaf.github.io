'use client';

import React, { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-ambient-layer" aria-hidden="true">
      {/* Ambient Radial Glows with Parallax offset */}
      <div
        className="ambient-glow-top"
        style={{
          transform: `translate3d(0, ${scrollY * 0.18}px, 0)`,
        }}
      />
      <div
        className="ambient-glow-center"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.12}px, 0)`,
        }}
      />
      <div
        className="ambient-glow-bottom"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`,
        }}
      />

      {/* 3D Glass Orbs Matching Reference Image */}
      <div
        className="glass-orb glass-orb-1"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.22}px, 0)`,
        }}
      />
      <div
        className="glass-orb glass-orb-2"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
        }}
      />
      <div
        className="glass-orb glass-orb-3"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.28}px, 0)`,
        }}
      />
    </div>
  );
}
