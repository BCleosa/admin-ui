import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

// Icon outline tipis (gaya Lucide) supaya sesuai referensi desain,
// dibuat manual sebagai SVG inline (tidak perlu tambahan library).
function MoonIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="flex items-center justify-center cursor-pointer bg-transparent border-none outline-none p-0 text-gray-02 dark:text-white hover:scale-110 transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default DarkModeToggle;