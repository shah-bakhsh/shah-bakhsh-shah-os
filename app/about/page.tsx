import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PortfolioShell } from "@/components/portfolio-shell";
export const metadata:Metadata={title:"About Shah Bakhsh — AI Engineer",description:"Learn about Shah Bakhsh's AI engineering focus, research mission, and work advancing Balochi language technology.",alternates:{canonical:"/about/"}};
const areas=[["Language technology","Balochi data preparation, tokenisation, language representations and downstream NLP."],["LLM engineering","Model adaptation, retrieval-augmented applications, tool use and evaluation."],["Applied systems","Developer tools, APIs, prototypes and practical AI workflows."]];
export default function About(){return <PortfolioShell>
 <PageIntro eyebrow="About / the person behind SHAH.OS" title="Engineering with a purpose." description="I'm Shah Bakhsh. I build and explore intelligent systems, with a particular focus on bringing language technology to communities underrepresented in the AI ecosystem."/>
 <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
  <section className="rounded-[28px] border border-white/10 bg-white/[.035] p-8 sm:p-12">
   <h2 className="text-2xl font-semibold">The work</h2>
   <p className="mt-6 leading-8 text-white/65">My work spans model adaptation, data preparation, tokenisation, natural language processing, and AI-powered applications. I value careful evaluations, clear limitations, and tools that are genuinely useful.</p>
   <p className="mt-6 leading-8 text-white/65">Much of this exploration focuses on Balochi. Building language data and tooling is a long-term, incremental effort; this portfolio shares what is documented, what is experimental, and what remains to be solved.</p>
   <h2 className="mt-12 text-2xl font-semibold">Current focus</h2>
   <div className="mt-6 space-y-7">{areas.map(([name,description])=><div key={name} className="border-l border-[#f5c518]/50 pl-5"><h3 className="font-semibold">{name}</h3><p className="mt-2 leading-7 text-white/55">{description}</p></div>)}</div>
  </section>
  <aside className="space-y-5">
   <div className="rounded-[28px] border border-[#f5c518]/25 bg-[#f5c518]/[.06] p-8"><p className="text-xs uppercase tracking-widest text-[#f5c518]">My mission</p><p className="mt-6 text-3xl font-semibold leading-tight">AI should speak every language.</p></div>
   <div className="rounded-[28px] border border-white/10 p-8"><h2 className="text-lg font-semibold">Explore more</h2><div className="mt-6 flex flex-col gap-4 text-sm text-white/65"><Link href="/research/" className="hover:text-[#f5c518]">Balochi NLP research →</Link><Link href="/projects/" className="hover:text-[#f5c518]">Selected projects →</Link><Link href="/contact/" className="hover:text-[#f5c518]">Work together →</Link></div></div>
  </aside>
 </div>
 </PortfolioShell>}