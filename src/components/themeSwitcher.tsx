"use client"

import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('system'); // Default theme is system

  // Function to update the theme
  const applyTheme = (newTheme: string) => {
    const htmlElement = document.documentElement;

    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      newTheme = systemPrefersDark ? 'dark' : 'light';
    }

    // Apply the light or dark class for manual modes
    if (newTheme === 'light') {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // On component mount, load the user's theme preference or default to system
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);

    // Listen for system theme changes when in "system" mode
    const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    systemThemeListener.addEventListener('change', handleSystemThemeChange);

    return () => systemThemeListener.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <div className='flex flex-row gap-8'>
      <button onClick={() => applyTheme('light')} className={theme === 'light' ? 'active' : ''}>
        Light Mode
      </button>
      <button onClick={() => applyTheme('dark')} className={theme === 'dark' ? 'active' : ''}>
        Dark Mode
      </button>
      <button onClick={() => applyTheme('system')} className={theme === 'system' ? 'active' : ''}>
        System Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
