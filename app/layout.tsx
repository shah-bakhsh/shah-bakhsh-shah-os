import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shahbakhsh.tech";
const description =
  "Explore Shah Bakhsh's work in AI engineering, language models, agentic systems, and Balochi NLP research.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shah Bakhsh | AI Engineer & Balochi NLP Researcher — SHAH.OS",
    template: "%s | SHAH.OS",
  },
  description,
  applicationName: "SHAH.OS",
  alternates: { canonical: "/" },
  keywords: [
    "Shah Bakhsh",
    "SHAH.OS",
    "AI Engineer",
    "Balochi NLP",
    "Balochi AI",
    "Language Models",
    "Agentic AI",
    "Low-resource languages",
    "Machine Learning",
  ],
  openGraph: {
    title: "Shah Bakhsh | AI Engineer & Balochi NLP Researcher",
    description,
    type: "website",
    siteName: "SHAH.OS",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Shah Bakhsh | SHAH.OS",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
