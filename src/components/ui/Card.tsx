"use client";

import { motion } from "framer-motion";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${hover ? styles.hoverable : ""} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
