'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemeVariant } from '../types/portfolio';

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'minimal',
  setTheme: () => {},
});

interface ThemeProviderProps {
  initialTheme?: ThemeVariant;
  value?: ThemeVariant;
  children: React.ReactNode;
}

export function ThemeProvider({ initialTheme = 'minimal', value, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeVariant>(value || initialTheme);

  useEffect(() => {
    if (value) {
      setTheme(value);
    }
  }, [value]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeVariant {
  const context = useContext(ThemeContext);
  return context.theme;
}

export function useThemeSwitcher() {
  return useContext(ThemeContext);
}
