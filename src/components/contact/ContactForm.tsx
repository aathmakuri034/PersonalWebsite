"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { submitContactForm, contactSchema } from "@/app/actions/contact";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setPending(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
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
        {error && <p className={styles.error}>{error}</p>}
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
        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </AnimatedContainer>
  );
}
