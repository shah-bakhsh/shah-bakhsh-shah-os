import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shah Bakhsh | AI Engineer",
  description: "SHAH.OS is the personal portfolio and research universe of Shah Bakhsh, focused on AI engineering, language technology, and intelligent systems.",
  openGraph: {
    title: "Shah Bakhsh | AI Engineer",
    description: "Building intelligent AI systems for real-world impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}