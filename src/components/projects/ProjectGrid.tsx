"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.grid}
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  );
}
