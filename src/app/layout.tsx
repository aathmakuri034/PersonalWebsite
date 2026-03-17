import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abi Athmakuri — Full Stack Engineer",
    template: "%s | Abi Athmakuri",
  },
  description:
    "Full stack engineer building bold, performant web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Abi Athmakuri — Full Stack Engineer",
    description:
      "Full stack engineer building bold, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-[73px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
