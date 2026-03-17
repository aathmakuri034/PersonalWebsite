"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder handler — hook up Formspree/Resend later
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <AnimatedContainer className={styles.successWrapper}>
        <div className={styles.successInner}>
          <p className={`${styles.successTitle} gradient-text`}>Thanks!</p>
          <p className={styles.successMessage}>
            I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </AnimatedContainer>
    );
  }

  return (
    <AnimatedContainer>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={styles.input}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={styles.textarea}
            placeholder="What's on your mind?"
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </AnimatedContainer>
  );
}
