import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shahbakhsh.tech";
const description =
  "Shah Bakhsh is an AI engineer working on LLMs, agentic AI, RAG, and Balochi language technology. Explore research, open-source projects, and collaboration opportunities.";

const professionalProfiles = [
  "https://www.linkedin.com/in/shah-bakhsh/",
  "https://github.com/shah-bakhsh",
  "https://huggingface.co/shah-bakhsh",
  "https://www.kaggle.com/shahbakhshtech",
  "https://shah-bakhsh.netlify.app/",
  "https://app.jasm.app/shah-bakhsh",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Shah Bakhsh",
      alternateName: "shah-bakhsh",
      url: `${siteUrl}/`,
      jobTitle: "AI Engineer and LLM Developer",
      description,
      image: "https://avatars.githubusercontent.com/u/226354638?v=4",
      knowsAbout: [
        "Large Language Models",
        "Agentic AI",
        "Retrieval-Augmented Generation",
        "Natural Language Processing",
        "Balochi NLP",
        "Machine Learning",
      ],
      sameAs: professionalProfiles,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "SHAH.OS",
      url: `${siteUrl}/`,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Shah Bakhsh | AI Engineer & Balochi NLP Researcher — SHAH.OS",
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

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
    "Shah Bakhsh", "SHAH.OS", "AI Engineer", "LLM Developer", "Balochi NLP",
    "Balochi AI", "Agentic AI", "RAG", "Low-resource languages", "Machine Learning",
  ],
  authors: [{ name: "Shah Bakhsh", url: siteUrl }],
  creator: "Shah Bakhsh",
  openGraph: {
    title: "Shah Bakhsh | AI Engineer & Balochi NLP Researcher",
    description,
    type: "profile",
    siteName: "SHAH.OS",
    url: siteUrl,
    locale: "en_US",
    firstName: "Shah",
    lastName: "Bakhsh",
    images: [{ url: "https://avatars.githubusercontent.com/u/226354638?v=4", width: 112, height: 112, alt: "Shah Bakhsh — AI Engineer" }],
  },
  twitter: {
    card: "summary",
    images: ["https://avatars.githubusercontent.com/u/226354638?v=4"],
    title: "Shah Bakhsh | SHAH.OS",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.svg" },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
