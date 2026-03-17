"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects } from "@/data/projects";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of things I've built recently"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {featured.map((project) => (
            <motion.div key={project.title} variants={fadeInUp}>
              <Card className={styles.cardInner}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techPills}>
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className={styles.viewAll}>
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
