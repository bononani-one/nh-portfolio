'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-5 rounded-full bg-border relative shrink-0"
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-point transition-all ${
          isDark ? 'left-4' : 'left-0.5'
        }`}
      />
    </button>
  );
}