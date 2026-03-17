import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styles from "./Footer.module.css";

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiMail, href: "mailto:abi@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Abi Athmakuri. All rights reserved.
        </p>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
