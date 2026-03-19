"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message too long"),
});

// In-memory rate limiter: IP -> list of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export type ContactResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return { success: false, error: "Too many submissions. Please try again later." };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid input";
    return { success: false, error: firstError };
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or RESEND_TO_EMAIL environment variable");
    return { success: false, error: "Contact form is not configured. Please try again later." };
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: toEmail,
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { success: true };
  } catch (err) {
    console.error("Failed to send email:", err);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
