import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell, TextLink } from "@/components/portfolio-shell";
import { researchProjects } from "@/lib/portfolio";

export function generateStaticParams(){return researchProjects.map(p=>({slug:p.slug}));}
export const dynamicParams = false;
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params; const p=researchProjects.find(x=>x.slug===slug);
 if(!p) return {title:"Research"};
 return {title:`${p.name} — Balochi NLP Research & Evaluation`,description:p.summary,
  alternates:{canonical:`/research/${p.slug}/`},
  openGraph:{title:`${p.name} | SHAH.OS Research`,description:p.summary,url:`https://www.shahbakhsh.tech/research/${p.slug}/`}};
}
export default async function CaseStudy({params}:Props){
 const {slug}=await params;const p=researchProjects.find(x=>x.slug===slug);
 if(!p) notFound();
 return <PortfolioShell>
  <Link href="/research/" className="mb-14 inline-flex min-h-11 items-center text-sm text-[#f5c518] hover:underline">← All research</Link>
  <div className="max-w-4xl">
   <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#f5c518]">{p.kicker} / {p.category}</p>
   <h1 className="mt-6 text-6xl font-semibold tracking-[-.07em] sm:text-8xl">{p.name}<span className="text-[#f5c518]">.</span></h1>
   <p className="mt-7 text-xl leading-9 text-white/65">{p.summary}</p>
  </div>
  <div className="mt-16 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
   <article className="rounded-[28px] border border-white/10 bg-white/[.035] p-7 sm:p-10">
    <h2 className="text-2xl font-semibold">The challenge</h2><p className="mt-5 leading-8 text-white/65">{p.problem}</p>
    <h2 className="mt-12 text-2xl font-semibold">Approach</h2>
    <ol className="mt-6 space-y-5">{p.approach.map((step,i)=><li key={step} className="flex gap-4 text-white/70"><span className="shrink-0 font-mono text-sm text-[#f5c518]">0{i+1}</span><span className="leading-7">{step}</span></li>)}</ol>
    <h2 className="mt-12 text-2xl font-semibold">Documented outcome</h2>
    <p className="mt-5 border-l-2 border-[#f5c518] pl-5 text-lg leading-8 text-white/85">{p.outcome}</p>
    <h2 className="mt-12 text-2xl font-semibold">Interpretation & limitations</h2>
    <p className="mt-5 leading-8 text-white/65">{p.caveat}</p>
   </article>
   <aside className="space-y-5">
    <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7">
     <h2 className="font-semibold">Tools & methods</h2><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(x=><span key={x} className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/70">{x}</span>)}</div>
    </div>
    <div className="rounded-3xl border border-[#f5c518]/25 bg-[#f5c518]/[.055] p-7">
     <h2 className="font-semibold">Explore the evidence</h2><p className="mb-6 mt-3 text-sm leading-7 text-white/55">Refer to the repository for the original code, datasets, methodology and detailed evaluation.</p>
     {p.github?<TextLink href={p.github}>View source repository</TextLink>:<p className="text-sm text-white/60">Public repository not yet linked. Research in progress.</p>}
    </div>
   </aside>
  </div>
  <div className="mt-16 border-t border-white/10 pt-10"><Link href="/research/" className="text-sm font-semibold text-[#f5c518] hover:underline">← Back to research index</Link></div>
 </PortfolioShell>;
}