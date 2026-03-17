"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useHydrated();

  if (!mounted) return <div className={styles.placeholder} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles.button}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
