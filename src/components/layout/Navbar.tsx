"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={`${styles.logo} gradient-text`}>
          Abi.
        </Link>

        {/* Desktop nav */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? styles.navLinkActive : styles.navLink
              }
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuInner}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    pathname === link.href
                      ? styles.mobileLinkActive
                      : styles.mobileLink
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
