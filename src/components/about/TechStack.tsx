"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <div>
      <SectionHeading title="Tech Stack" subtitle="Technologies and tools I use daily" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {skillCategories.map((cat) => (
          <motion.div key={cat.category} variants={fadeInUp} className={styles.categoryCard}>
            <h3 className={`${styles.categoryTitle} gradient-text`}>
              {cat.category}
            </h3>
            <div className={styles.skills}>
              {cat.skills.map((skill) => (
                <span key={skill.name} className={styles.skillBadge}>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
