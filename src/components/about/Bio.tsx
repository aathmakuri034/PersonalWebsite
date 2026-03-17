"use client";

import AnimatedContainer from "@/components/ui/AnimatedContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <AnimatedContainer className={styles.wrapper}>
      <SectionHeading title="About Me" subtitle="A bit about who I am and what drives me" />
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            Hey! I&apos;m <span className={styles.highlight}>Abi Athmakuri</span>, a
            full stack engineer who loves turning ideas into polished digital products. I specialize
            in building performant, accessible web applications with modern JavaScript frameworks.
          </p>
          <p>
            My journey into software engineering started with curiosity about how the web works and
            grew into a passion for crafting experiences that feel seamless. I enjoy working across
            the stack — from pixel-perfect frontends to robust backend systems.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open-source projects, or sharing what I&apos;ve learned through writing and
            mentoring.
          </p>
        </div>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            <div className={`${styles.initials} gradient-text`}>
              AA
            </div>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}
