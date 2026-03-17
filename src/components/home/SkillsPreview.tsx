"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./SkillsPreview.module.css";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Docker", "AWS", "GraphQL", "Python",
];

export default function SkillsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Tech I Work With" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.badges}
        >
          {skills.map((skill) => (
            <motion.span key={skill} variants={fadeInUp} className={styles.badge}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
