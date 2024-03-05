import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div
      id="dark-mode-switch"
      className="ml-auto cursor-pointer text-2xl md:fixed md:top-6 md:right-6"
    >
      <input
        type="checkbox"
        id="dark-mode-toggle"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="hidden"
      />
      <label htmlFor="dark-mode-toggle">
        {darkMode ? '🌞' : '🌚'}
      </label>
    </div>
  );
};

export default DarkModeToggle;
