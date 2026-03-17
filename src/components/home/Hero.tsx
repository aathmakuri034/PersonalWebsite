"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

const rotatingWords = ["Full Stack Engineer", "React Developer", "TypeScript Enthusiast", "UI/UX Lover"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      {/* Animated background blobs */}
      <div className={styles.blobContainer}>
        <div className={styles.blobPrimary} />
        <div className={styles.blobAccent} />
        <div className={styles.blobPop} />
      </div>

      <div className={styles.content}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.greeting}
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.name}
        >
          <span className="gradient-text">Abi Athmakuri</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.rotatingText}
        >
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.rotatingWord}
          >
            {rotatingWords[wordIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.tagline}
        >
          I build bold, performant web experiences that solve real problems.
          Passionate about clean code, great design, and shipping fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.cta}
        >
          <Button href="/projects">View My Work</Button>
          <Button href="/contact" variant="outline">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
