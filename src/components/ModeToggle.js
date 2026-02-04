"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto theme switching based on time (6 AM - 6 PM = light, else dark)
  useEffect(() => {
    if (!mounted) return;

    const checkAndSetTheme = () => {
      const currentHour = new Date().getHours();
      const shouldBeLightMode = currentHour >= 6 && currentHour < 18;
      
      // Only auto-switch if user hasn't manually set a preference
      const userPreference = localStorage.getItem('user-theme-preference');
      
      if (!userPreference) {
        setTheme(shouldBeLightMode ? 'light' : 'dark');
      }
    };

    // Check immediately
    checkAndSetTheme();

    // Check every minute to update theme at exact 6 AM and 6 PM
    const interval = setInterval(checkAndSetTheme, 60000);

    return () => clearInterval(interval);
  }, [mounted, setTheme]);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // Save user preference to prevent auto-switching
    localStorage.setItem('user-theme-preference', newTheme);
  };

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition cursor-pointer"
      onClick={handleThemeToggle}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
