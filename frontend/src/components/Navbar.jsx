import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">InterviewPrepAI</h1>
      <div className="space-x-4 flex items-center">
        <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
