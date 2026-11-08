import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PortfolioShell } from "@/components/portfolio-shell";
import { appliedProjects, researchProjects } from "@/lib/portfolio";

export const metadata:Metadata={title:"AI Engineering Projects & Open-Source Work",description:"Explore selected AI engineering projects and documented Balochi NLP research by Shah Bakhsh.",alternates:{canonical:"/projects/"}};
export default function Projects(){return <PortfolioShell>
 <PageIntro eyebrow="Selected engineering work" title="Ideas, built with intent." description="A curated collection of applied AI prototypes and research projects. Project labels distinguish evaluated research from experiments and early concepts."/>
 <div className="grid gap-4 md:grid-cols-2">
 {appliedProjects.map((p,i)=><article key={p.name} className="flex min-h-72 flex-col justify-between rounded-[26px] border border-white/10 bg-white/[.035] p-8">
  <div className="flex justify-between text-xs uppercase tracking-[.15em] text-white/40"><span>{p.type}</span><span>0{i+1}</span></div>
  <div className="my-9"><h2 className="text-3xl font-semibold">{p.name}</h2><p className="mt-4 leading-7 text-white/60">{p.description}</p></div>
  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"><span className="text-xs text-[#f5c518]">{p.status}</span><a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#f5c518]">Explore repository ↗</a></div>
 </article>)}
 <Link href="/research/" className="flex min-h-72 flex-col justify-between rounded-[26px] border border-[#f5c518]/35 bg-[#f5c518]/[.075] p-8 transition hover:border-[#f5c518]">
  <span className="text-xs uppercase tracking-[.15em] text-[#f5c518]">Research collection / {researchProjects.length} briefings</span>
  <div><h2 className="text-3xl font-semibold">Balochi AI Lab</h2><p className="mt-4 leading-7 text-white/60">From language representations and tokenisation to tagging, entities and developer tools.</p></div>
  <span className="text-sm font-semibold text-[#f5c518]">Browse research case studies →</span>
 </Link>
 </div>
 </PortfolioShell>}