import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PortfolioShell } from "@/components/portfolio-shell";

export const metadata: Metadata = {
  title: "Official Profiles & Research Links — Shah Bakhsh",
  description:
    "Connect with Shah Bakhsh on GitHub, LinkedIn, Hugging Face and other professional platforms. Explore open-source AI and Balochi NLP research.",
  alternates: { canonical: "/links/" },
};

const profiles = [
  { name: "GitHub", handle: "@shah-bakhsh", url: "https://github.com/shah-bakhsh", detail: "Open-source research, code and AI engineering projects" },
  { name: "LinkedIn", handle: "Shah Bakhsh", url: "https://www.linkedin.com/in/shah-bakhsh/", detail: "Professional background and collaborations" },
  { name: "Hugging Face", handle: "shah-bakhsh", url: "https://huggingface.co/shah-bakhsh", detail: "Models and low-resource language research" },
  { name: "Kaggle", handle: "shahbakhshtech", url: "https://www.kaggle.com/shahbakhshtech", detail: "Data science profile" },
  { name: "Earlier portfolio", handle: "Netlify", url: "https://shah-bakhsh.netlify.app/", detail: "Previous portfolio website" },
  { name: "Jasm", handle: "shah-bakhsh", url: "https://app.jasm.app/shah-bakhsh", detail: "Additional profile" },
];

export default function LinksPage() {
  return (
    <PortfolioShell>
      <PageIntro
        eyebrow="Official presence / around the web"
        title="One identity. Many places to build."
        description="Find my professional profiles, open-source work and language-technology research. SHAH.OS is my primary portfolio."
      />
      <section aria-labelledby="profiles-heading">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <h2 id="profiles-heading" className="text-2xl font-semibold">Professional profiles</h2>
          <span className="text-xs text-white/40">External links open in a new tab</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profiles.map((profile, i) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="me noopener noreferrer"
              className="group flex min-h-52 flex-col justify-between rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-7 transition hover:-translate-y-1 hover:border-[#f5c518]/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[.16em] text-white/40">0{i + 1} / PROFILE</span>
                <span className="text-lg text-[#f5c518]" aria-hidden="true">↗</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{profile.name}</h3>
                <p className="mt-1 text-xs text-[#f5c518]">{profile.handle}</p>
                <p className="mt-3 text-sm leading-7 text-white/60">{profile.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="mt-16 rounded-[28px] border border-[#f5c518]/25 bg-[#f5c518]/[.055] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[.2em] text-[#f5c518]">Explore the work</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight">Research with evidence.</h2>
        <p className="mt-4 max-w-2xl leading-8 text-white/60">
          Explore Balochi AI experiments and read their documented methods, outcomes and limitations.
        </p>
        <Link href="/research/" className="mt-7 inline-flex min-h-11 items-center rounded-full border border-[#f5c518]/50 px-5 py-3 text-sm font-semibold text-[#f5c518] hover:bg-[#f5c518] hover:text-black">
          Explore the research library →
        </Link>
      </section>
    </PortfolioShell>
  );
}
