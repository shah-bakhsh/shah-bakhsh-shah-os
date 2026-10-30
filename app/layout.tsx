import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SHAH.OS | Shah Bakhsh, AI Engineer",
    template: "%s | SHAH.OS"
  },
  description: "AI engineering, agentic systems, and a mission to bring Balochi language technology into the future.",
  applicationName: "SHAH.OS",
  keywords: ["Shah Bakhsh", "AI Engineer", "LLM Engineer", "Agentic AI", "Balochi NLP", "Low-resource language technology", "Machine Learning"],
  openGraph: {
    title: "SHAH.OS | AI should speak every language.",
    description: "A personal AI engineering portfolio and an open mission to advance low-resource language technology.",
    type: "website",
    siteName: "SHAH.OS"
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAH.OS | Shah Bakhsh",
    description: "Building intelligent systems. Advancing low-resource language AI."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
