"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { experiences } from "@/data/experience";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      {/* Center line */}
      <div className={styles.line} />

      <div className={styles.items}>
        {experiences.map((exp, i) => (
          <TimelineItem key={`${exp.company}-${exp.role}`} experience={exp} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
