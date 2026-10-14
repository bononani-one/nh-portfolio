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
    document.activeElement.blur();
  }

  const label = isDark ? '라이트 모드로 전환' : '다크 모드로 전환';

  return (
    <div className='relative group'>
      <button
        onClick={toggleTheme}
        aria-label={label}
        className="w-9 h-5 rounded-full bg-border relative shrink-0 cursor-pointer"
      >
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-point transition-all ${
            isDark ? 'left-4' : 'left-0.5'
          }`}
        />
      </button>
      <span
        role='tooltip'
        className='absolute right-0 top-full mt-2 whitespace-nowrap rounded-md border border-border bg-bg-sub px-2 py-1 text-caption text-text-sub opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus-within:opacity-100'
        >{label}</span>
    </div>
  );
}