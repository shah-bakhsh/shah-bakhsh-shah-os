import type { Metadata } from "next";
import { PageIntro, PortfolioShell } from "@/components/portfolio-shell";
export const metadata:Metadata={title:"Contact Shah Bakhsh — Research & Collaboration",description:"Contact Shah Bakhsh about AI engineering, open-source collaboration, and Balochi NLP research.",alternates:{canonical:"/contact/"}};
const profiles=[["LinkedIn","https://www.linkedin.com/in/shah-bakhsh/"],["GitHub","https://github.com/shah-bakhsh"],["Hugging Face","https://huggingface.co/shah-bakhsh"]];
export default function Contact(){return <PortfolioShell>
 <PageIntro eyebrow="Contact / collaborate" title="Let's build something useful." description="Interested in research collaboration, open-source NLP, or applied AI engineering? Send a message with your idea, context and what you're hoping to achieve."/>
 <section className="grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
  <div className="rounded-[30px] border border-[#f5c518]/30 bg-[#f5c518]/[.06] p-8 sm:p-12">
   <p className="text-xs uppercase tracking-[.2em] text-[#f5c518]">Direct contact</p>
   <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Start a conversation.</h2>
   <p className="mt-5 max-w-xl leading-8 text-white/60">Share the problem, any useful links and a short introduction. Email is the most direct way to get in touch.</p>
   <a href="mailto:shahbakhshtech@gmail.com?subject=Research%20or%20AI%20collaboration" className="mt-10 inline-flex min-h-12 items-center rounded-full bg-[#f5c518] px-6 py-3 font-semibold text-black transition hover:bg-white">Email Shah Bakhsh ↗</a>
   <p className="mt-5 break-all text-sm text-white/55">shahbakhshtech@gmail.com</p>
  </div>
  <aside className="rounded-[30px] border border-white/10 bg-white/[.035] p-8"><h2 className="text-xl font-semibold">Elsewhere online</h2><p className="mb-8 mt-3 text-sm leading-7 text-white/55">Follow the research, code and professional updates.</p>{profiles.map(([name,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer" className="flex justify-between border-t border-white/10 py-5 text-sm text-white/75 transition hover:text-[#f5c518]">{name}<span>↗</span></a>)}</aside>
 </section>
 </PortfolioShell>}