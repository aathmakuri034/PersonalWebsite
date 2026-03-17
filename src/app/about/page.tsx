import type { Metadata } from "next";
import Bio from "@/components/about/Bio";
import TechStack from "@/components/about/TechStack";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Abi Athmakuri — full stack engineer, builder, and lifelong learner.",
};

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.containerWide}>
        <Bio />
        <TechStack />
      </div>
    </div>
  );
}
