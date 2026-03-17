import GradientText from "./GradientText";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      <GradientText as="h2" className={styles.title}>
        {title}
      </GradientText>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
