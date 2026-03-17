import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abi Athmakuri.",
};

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter/X" },
  { icon: FiMail, href: "mailto:abi@example.com", label: "abi@example.com" },
];

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.containerNarrow}>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message."
        />
        <div className={styles.contactGrid}>
          <ContactForm />
          <div className={styles.contactSidebar}>
            <h3 className={styles.contactSidebarTitle}>Or find me on</h3>
            <div className={styles.socialLinks}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
