"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/types";
import Card from "@/components/ui/Card";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className={styles.cardInner}>
        {project.image && <div className={styles.imagePlaceholder} />}
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techPills}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FiGithub size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FiExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
