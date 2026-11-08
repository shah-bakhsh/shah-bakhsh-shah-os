import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shah Bakhsh — Official Profiles & Research Links",
  description:
    "Official professional profiles, open-source AI projects, and research links for Shah Bakhsh, AI engineer and Balochi NLP researcher.",
  alternates: { canonical: "/links/" },
};

const links = [
  { label: "GitHub", url: "https://github.com/shah-bakhsh", detail: "Open-source AI engineering and Balochi NLP projects" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/shah-bakhsh/", detail: "Professional profile and collaborations" },
  { label: "Hugging Face", url: "https://huggingface.co/shah-bakhsh", detail: "Machine learning research and model work" },
  { label: "Kaggle", url: "https://www.kaggle.com/shahbakhshtech", detail: "Data science profile" },
  { label: "Netlify Portfolio", url: "https://shah-bakhsh.netlify.app/", detail: "Earlier portfolio website" },
  { label: "Jasm", url: "https://app.jasm.app/shah-bakhsh", detail: "Additional public profile" },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#090a0b] px-5 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#f5c518] hover:underline">← SHAH.OS home</Link>
        <p className="mt-12 text-xs uppercase tracking-[.2em] text-[#f5c518]">Official profiles & research</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">Shah Bakhsh</h1>
        <p className="mt-5 text-lg text-white/70">
          AI engineer and LLM developer focused on agentic AI, retrieval, and low-resource Balochi language technology.
        </p>
        <h2 className="mt-12 text-2xl font-semibold">Professional profiles</h2>
        <div className="mt-5 grid gap-3">
          {links.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="block rounded-xl border border-white/15 bg-white/[.03] p-5 transition hover:border-[#f5c518]/60"
            >
              <span className="text-lg font-semibold text-[#f5c518]">{item.label} ↗</span>
              <span className="mt-2 block text-sm text-white/60">{item.detail}</span>
            </a>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-semibold">Selected Balochi AI research</h2>
        <p className="mt-3 text-white/65">
          Explore reproducible project documentation, evaluation results, and source code for
          BalBERT, BalPOS, BalNER, BalTokenizer, and BalNLP.
        </p>
        <a href="https://github.com/shah-bakhsh" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[#f5c518] hover:underline">
          Explore research repositories →
        </a>
        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">
          <a href="mailto:shahbakhshtech@gmail.com" className="hover:text-[#f5c518]">Contact for research or collaboration</a>
          <span className="mx-3">·</span>
          <Link href="/" className="hover:text-[#f5c518]">shahbakhsh.tech</Link>
        </footer>
      </div>
    </main>
  );
}
