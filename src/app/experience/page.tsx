import type { Metadata } from "next";
import Timeline from "@/components/experience/Timeline";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FiDownload } from "react-icons/fi";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and education of Abi Athmakuri.",
};

export default function ExperiencePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.containerNarrow}>
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />
        <Timeline />
        <div className={styles.resumeButton}>
          <Button href="/resume.pdf" variant="outline" external>
            <FiDownload size={16} />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
