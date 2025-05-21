import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`w-16 h-8 flex items-center rounded-full px-1 transition duration-300 ${
        isDark ? "bg-purple-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center text-sm transition-transform duration-300 transform rounded-full shadow-md bg-white ${
          isDark ? "translate-x-0" : "translate-x-8"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default DarkModeToggle;
