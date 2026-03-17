"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Experience } from "@/types";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import styles from "./TimelineItem.module.css";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className={`${styles.item} ${isLeft ? styles.itemLeft : styles.itemRight}`}
    >
      {/* Dot */}
      <div className={styles.dot} />

      {/* Spacer for desktop alternating */}
      <div className={styles.spacer} />

      {/* Content */}
      <div className={`${styles.content} ${isLeft ? styles.contentLeft : styles.contentRight}`}>
        <div className={styles.period}>
          {experience.type === "work" ? <FiBriefcase size={16} /> : <FiBookOpen size={16} />}
          <span className={styles.periodText}>{experience.period}</span>
        </div>
        <h3 className={styles.role}>{experience.role}</h3>
        <p className={styles.company}>{experience.company}</p>
        <p className={styles.description}>{experience.description}</p>
        <div className={styles.techPills}>
          {experience.tech.map((t) => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
