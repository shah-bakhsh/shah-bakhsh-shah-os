import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PortfolioShell } from "@/components/portfolio-shell";
import { researchProjects } from "@/lib/portfolio";

export const metadata:Metadata = {
 title:"Balochi NLP Research — Models, Methods & Evaluations",
 description:"Explore Shah Bakhsh's documented Balochi NLP projects: BalBERT, BalPOS, BalNER, BalTokenizer, BalNLP, and BalOCR research.",
 alternates:{canonical:"/research/"},
};
export default function Research() {
 return <PortfolioShell>
  <PageIntro eyebrow="Research index / Balochi AI" title="Language deserves a future." description="Explore documented research experiments and developer tools for Balochi. Each briefing separates published outcomes from limitations and ongoing work."/>
  <div className="mb-10 grid gap-3 sm:grid-cols-3">
   {["Reproducible evidence","Low-resource NLP","Open-source research"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="mb-8 text-xs text-[#f5c518]">0{i+1} / PRINCIPLE</div><p className="font-medium">{x}</p></div>)}
  </div>
  <div className="grid gap-4 md:grid-cols-2">
   {researchProjects.map((p,i)=><Link key={p.slug} href={`/research/${p.slug}/`} className="group flex min-h-72 flex-col justify-between rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[.065] to-white/[.014] p-7 transition hover:-translate-y-1 hover:border-[#f5c518]/50">
    <div className="flex items-center justify-between text-xs uppercase tracking-[.16em] text-white/40"><span>{p.kicker}</span><span className="text-[#f5c518]">0{i+1} ↗</span></div>
    <div><h2 className="text-3xl font-semibold tracking-tight">{p.name}</h2><p className="mt-3 text-sm leading-7 text-white/60">{p.summary}</p></div>
    <div className="mt-6 border-t border-white/10 pt-4 text-xs text-[#f5c518]">{p.category} · Read case study</div>
   </Link>)}
  </div>
 </PortfolioShell>;
}