"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface AnimatedContainerProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function AnimatedContainer({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
