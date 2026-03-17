import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and applications built by Abi Athmakuri.",
};

export default function ProjectsPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.containerWide}>
        <SectionHeading
          title="Projects"
          subtitle="Things I've built and shipped"
        />
        <ProjectGrid />
      </div>
    </div>
  );
}
