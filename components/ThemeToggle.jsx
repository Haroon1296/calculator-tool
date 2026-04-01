"use client";

import useTheme from "../hooks/useTheme";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 4.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.75ZM6.25 12a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-.75.75ZM17.75 12a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-.75.75ZM12 19.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM7.64 7.64a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06ZM16.94 16.94a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06ZM7.64 16.36a.75.75 0 0 1 0-1.06l.36-.36a.75.75 0 0 1 1.06 1.06l-.36.36a.75.75 0 0 1-1.06 0ZM16.94 7.06a.75.75 0 0 1 0-1.06l.36-.36a.75.75 0 1 1 1.06 1.06l-.36.36a.75.75 0 0 1-1.06 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M13.5 2.75a.75.75 0 0 1 .75.75c0 3.9 3.2 7.1 7.1 7.1a.75.75 0 0 1 .56 1.25A9 9 0 1 1 12.1 2.2a.75.75 0 0 1 1.4.55Z"
      />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:text-slate-900 dark:border-gray-700 dark:bg-gray-800/80 dark:text-slate-200 dark:hover:border-gray-500 ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
